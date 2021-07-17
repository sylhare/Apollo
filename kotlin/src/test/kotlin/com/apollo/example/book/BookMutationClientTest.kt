package com.apollo.example.book

import kotlinx.coroutines.runBlocking
import okhttp3.mockwebserver.MockResponse
import okhttp3.mockwebserver.MockWebServer
import org.junit.jupiter.api.AfterEach
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Assertions.assertTrue
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import java.io.File

internal class BookTest {

    private val mockWebServer = MockWebServer()
    private val bookQueryClient = BookQueryClient()
    private val bookMutationClient = BookMutationClient()

    @BeforeEach
    fun setup() {
        mockWebServer.start(4010)
    }

    @AfterEach
    fun teardown() {
        mockWebServer.shutdown()
    }

    @Test
    fun queryTest() {
        val mockResponse = MockResponse()
            .addHeader("Content-Type", "application/json; charset=utf-8")
            .setBody(File(ClassLoader.getSystemResource("response-query.json").file).readText())
        mockWebServer.enqueue(mockResponse)
        runBlocking { bookQueryClient.getBooks().join() }

        val request = mockWebServer.takeRequest()
        assertEquals("The Awakening", bookQueryClient.lastResponse.data!!.books!!.first()!!.title)
        assertEquals("/", request.path)
        assertTrue("Bearer" in request.headers["Authorization"] ?: "")
    }

    @Test
    fun mutationTest() {
        val mockResponse = MockResponse()
            .addHeader("Content-Type", "application/json; charset=utf-8")
            .setBody(File(ClassLoader.getSystemResource("response-mutation.json").file).readText())
        mockWebServer.enqueue(mockResponse)
        runBlocking { bookMutationClient.createBook("Fox in Socks", "Dr. Seuss").join() }

        val request = mockWebServer.takeRequest()
        assertEquals("/", request.path)
        assertTrue("Bearer" in request.headers["Authorization"] ?: "")
    }
}
