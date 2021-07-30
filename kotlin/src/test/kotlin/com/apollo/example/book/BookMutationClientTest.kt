package com.apollo.example.book

import kotlinx.coroutines.runBlocking
import okhttp3.mockwebserver.MockResponse
import okhttp3.mockwebserver.MockWebServer
import org.junit.jupiter.api.*
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Assertions.assertTrue
import java.io.File

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
internal class BookTest {

    private val mockWebServer = MockWebServer()
    private val bookQueryClient = BookQueryClient()
    private val bookMutationClient = BookMutationClient()

    @BeforeAll
    fun setup() {
        mockWebServer.start(4010)
    }

    @AfterAll
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
