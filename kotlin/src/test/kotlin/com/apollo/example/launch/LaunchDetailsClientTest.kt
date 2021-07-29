package com.apollo.example.launch

import com.apollographql.apollo.ApolloClient
import com.apollographql.apollo.exception.ApolloHttpException
import io.mockk.every
import io.mockk.impl.annotations.MockK
import io.mockk.junit5.MockKExtension
import org.generated.launch.LaunchDetailsQuery
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.assertThrows
import org.junit.jupiter.api.extension.ExtendWith

@ExtendWith(MockKExtension::class)
internal class LaunchDetailsClientTest {

    @MockK
    private lateinit var apolloClient: ApolloClient

    @MockK(relaxed = true)
    private lateinit var rawResponse: okhttp3.Response

    private val launchDetailsClient = LaunchDetailsClient()

    @BeforeEach
    fun setup() {
        val client = LaunchDetailsClient::class.java.getDeclaredField("apolloClient")
        client.isAccessible = true
        client.set(launchDetailsClient, apolloClient)
        every { rawResponse.body?.string() } returns "error"
    }

    @Test
    fun apolloErrorTest() {
        every { apolloClient.query(any<LaunchDetailsQuery>()) } throws ApolloHttpException(rawResponse)
        assertThrows<ApolloHttpException> { launchDetailsClient.javaRun() }
    }
}
