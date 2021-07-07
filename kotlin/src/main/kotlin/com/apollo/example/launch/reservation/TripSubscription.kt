package com.apollo.example.launch.reservation

import com.apollographql.apollo.ApolloClient
import com.apollographql.apollo.coroutines.toFlow
import com.apollographql.apollo.subscription.WebSocketSubscriptionTransport
import kotlinx.coroutines.*
import kotlinx.coroutines.flow.collect
import kotlinx.coroutines.flow.retryWhen
import okhttp3.OkHttpClient
import org.generated.launch.TripsBookedSubscription

class TripSubscription {

    private val scope = CoroutineScope(Dispatchers.Default)

    val okHttpClient = OkHttpClient.Builder()
        .build()

    val apolloClient = ApolloClient.builder()
        .serverUrl("https://apollo-fullstack-tutorial.herokuapp.com/graphql")
        .subscriptionTransportFactory(
            WebSocketSubscriptionTransport.Factory(
                "wss://apollo-fullstack-tutorial.herokuapp.com/graphql",
                okHttpClient
            )
        )
        .okHttpClient(okHttpClient)
        .build()

    @ExperimentalCoroutinesApi
    fun subscribe() {
        scope.launch {
            apolloClient.subscribe(TripsBookedSubscription()).toFlow()
                .retryWhen { _, attempt ->
                    delay(attempt * 1000)
                    true
                }.collect {
                    println(it.data)
                }
        }
    }
}
