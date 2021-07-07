package com.apollo.example

import com.apollo.example.book.BookQueryClient
import com.apollo.example.launch.LaunchDetailsClient
import kotlinx.coroutines.runBlocking

fun main() {
    val launchDetailsClient = LaunchDetailsClient()
    val bookQueryClient = BookQueryClient()

    runBlocking {
        bookQueryClient.getBooks()
        launchDetailsClient.getDetails()
        launchDetailsClient.coroutineRun()
    }
    launchDetailsClient.javaRun()
}
