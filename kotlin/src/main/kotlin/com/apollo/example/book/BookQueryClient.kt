package com.apollo.example.book

import com.apollographql.apollo.api.Response
import com.apollographql.apollo.coroutines.await
import kotlinx.coroutines.Job
import kotlinx.coroutines.launch
import org.generated.book.BooksQuery

class BookQueryClient : BookClient() {

    lateinit var lastResponse: Response<BooksQuery.Data>

    fun getBooks(): Job = scope.launch {
        try {
            lastResponse = apolloClient.query(BooksQuery()).await()
            println("Books list: ${lastResponse!!.data}")
        } catch (e: Exception) {
            println("Error for books: $e")
        }
    }
}
