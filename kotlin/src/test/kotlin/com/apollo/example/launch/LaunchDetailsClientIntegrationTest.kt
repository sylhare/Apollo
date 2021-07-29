package com.apollo.example.launch

import kotlinx.coroutines.runBlocking
import okhttp3.mockwebserver.MockResponse
import okhttp3.mockwebserver.MockWebServer
import org.junit.jupiter.api.AfterEach
import org.junit.jupiter.api.Assertions.*
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import java.io.File

internal class LaunchDetailsClientIntegrationTest {

    private val mockWebServer = MockWebServer()
    private val launchDetailsClient = LaunchDetailsClient( "http://localhost:4200")

    @BeforeEach
    fun setup() {
        mockWebServer.start(4200)
    }

    @AfterEach
    fun teardown() {
        mockWebServer.shutdown()
    }


    @Test
    fun queryTest() {
        val mockResponse = MockResponse()
            .addHeader("Content-Type", "application/json; charset=utf-8")
            .setBody(File(ClassLoader.getSystemResource("error.json").file).readText())
            .setResponseCode(400)
        mockWebServer.enqueue(mockResponse)
        launchDetailsClient.javaRun()

        val request = mockWebServer.takeRequest()
        println("Request sent: ${request.body.readUtf8()}")
        assertEquals("/", request.path)
    }
}
