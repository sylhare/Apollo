package com.apollo.example.book

import com.apollographql.apollo.coroutines.await
import kotlinx.coroutines.launch
import org.generated.book.CreateBookMutation

class BookMutationClient : BookClient() {

    fun createBook(title: String, author: String) = scope.launch {
        val response = apolloClient.mutate(CreateBookMutation(title, author)).await()
        println("Mutation result: ${response.data}")
    }

}
