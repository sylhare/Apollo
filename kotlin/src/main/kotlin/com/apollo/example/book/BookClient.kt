package com.apollo.example.book

import com.apollographql.apollo.ApolloClient
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import okhttp3.Interceptor
import okhttp3.OkHttpClient
import okhttp3.Response

abstract class BookClient {

    companion object {
        private const val SERVER_URL = "http://localhost:4010/"
        internal val scope = CoroutineScope(Dispatchers.Default)
    }

    internal val apolloClient = ApolloClient.builder()
        .serverUrl(SERVER_URL)
        .okHttpClient(
            OkHttpClient.Builder()
                .addInterceptor(AuthorizationInterceptor())
                .build()
        )
        .build()

    private class AuthorizationInterceptor : Interceptor {

        override fun intercept(chain: Interceptor.Chain): Response {
            val request = chain.request().newBuilder()
                .addHeader("Authorization", "Bearer token")
                .build()

            return chain.proceed(request)
        }
    }
}
