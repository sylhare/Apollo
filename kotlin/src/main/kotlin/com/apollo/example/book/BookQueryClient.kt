package com.apollo.example.book

import com.apollographql.apollo.coroutines.await
import kotlinx.coroutines.launch
import org.generated.book.BooksQuery

class BookQueryClient: BookClient() {

    fun getBooks() {
        scope.launch {
            try {
                val response = apolloClient.query(BooksQuery()).await()
                println("Books list: ${response.data}")
            } catch (e: Exception) {
                println("Error for books: $e")
            }
        }
    }
}
