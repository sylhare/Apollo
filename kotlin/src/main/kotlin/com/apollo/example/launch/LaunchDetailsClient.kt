package com.apollo.example.launch

import com.apollographql.apollo.ApolloCall.Callback
import com.apollographql.apollo.ApolloClient
import com.apollographql.apollo.api.Response
import com.apollographql.apollo.coroutines.await
import com.apollographql.apollo.exception.ApolloException
import com.apollographql.apollo.exception.ApolloHttpException
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import org.generated.launch.LaunchDetailsQuery
import org.generated.launch.LaunchListQuery

class LaunchDetailsClient(url: String = SERVER_URL) {
    companion object {
        const val SERVER_URL = "https://apollo-fullstack-tutorial.herokuapp.com/graphql"
    }

    private val scope = CoroutineScope(Dispatchers.Default)
    private val apolloClient = ApolloClient.builder()
        .serverUrl(url)
        .build()

    fun coroutineRun() {
        scope.launch {
            println("Start querying")
            queryLaunchDetails("83")?.let { displayLaunchSite(it) }
        }
    }

    fun javaRun() {
        println("Start querying")
        val callback = launchDetailCallback()
        apolloClient.query(LaunchDetailsQuery("83")).enqueue(callback)
    }

    fun getDetails() {
        scope.launch {
            try {
                val response = apolloClient.query(LaunchListQuery()).await()
                println("Launch list: ${response.data}")
            } catch (e: Exception) {
                println("Error $e")
            }
        }
    }

    private suspend fun queryLaunchDetails(id: String) = try {
        apolloClient.query(LaunchDetailsQuery(id = id)).await()
    } catch (e: ApolloException) {
        println("Error $e")
        null
    }

    private fun launchDetailCallback() = object : Callback<LaunchDetailsQuery.Data>() {
        override fun onResponse(response: Response<LaunchDetailsQuery.Data>) {
            displayLaunchSite(response)
        }

        override fun onFailure(e: ApolloException) {
            println("Error $e")
        }

        override fun onHttpError(e: ApolloHttpException) {
            onFailure(e)
            val response = e.rawResponse()
            println("error ${response?.body()?.string()}")
            response?.close()
        }

    }

    private fun displayLaunchSite(response: Response<LaunchDetailsQuery.Data>) {
        val launch = response.data?.launch
        if (launch == null || response.hasErrors()) {
            println("Error with launch=$launch, response error = ${response.hasErrors()}")
        } else {
            println("Launch data: ${response.data?.launch!!.site}")
        }
    }
}
