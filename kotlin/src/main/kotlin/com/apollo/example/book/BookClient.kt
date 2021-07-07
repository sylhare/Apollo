package com.apollo.example.book

import com.apollographql.apollo.ApolloClient
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers

abstract class BookClient {

    companion object {
        private const val SERVER_URL = "http://localhost:4010/"
        internal val scope = CoroutineScope(Dispatchers.Default)
    }

    internal val apolloClient = ApolloClient.builder()
        .serverUrl(SERVER_URL)
        .build()
}
