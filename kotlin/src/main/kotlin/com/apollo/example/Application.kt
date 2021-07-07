package com.apollo.example

import kotlinx.coroutines.runBlocking

fun main(args: Array<String>) {
    val client = GraphQLClient()
    runBlocking { client.coroutineRun() }
    client.javaRun()
}
