plugins {
    kotlin("jvm") version "1.5.0"
    id("com.apollographql.apollo") version("2.5.9")
}

group = "com.apollo"
version = "1.0-SNAPSHOT"

repositories {
    mavenCentral()
}

dependencies {
    implementation(kotlin("stdlib"))
    implementation("org.jetbrains.kotlinx:kotlinx-coroutines-core:1.5.0")
    // The core runtime dependencies
    implementation("com.apollographql.apollo:apollo-runtime:2.5.9")
    // Coroutines extensions for easier asynchronicity handling
    implementation("com.apollographql.apollo:apollo-coroutines-support:2.5.9")

    // tests
    testImplementation("org.junit.jupiter:junit-jupiter:5.7.2")
    testImplementation("org.junit.jupiter:junit-jupiter-api")
    testRuntimeOnly("org.junit.jupiter:junit-jupiter-engine")
    testImplementation("io.mockk:mockk:1.11.0")
    testImplementation("com.squareup.okhttp3:mockwebserver:4.9.0")
    testImplementation("com.squareup.okhttp3:okhttp:4.9.0")
}

apollo {
    // instruct the compiler to generate Kotlin models
    generateKotlinModels.set(true)

    service("book") {
        sourceFolder.set("book")
        rootPackageName.set("org.generated.book")
    }
    service("launch") {
        sourceFolder.set("launch")
        rootPackageName.set("org.generated.launch")
    }
    service("example") {
        sourceFolder.set("example")
        rootPackageName.set("org.generated.example")
    }

}

tasks.test {
    useJUnitPlatform()
}
