import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { createServer, Server } from 'http'
import depthLimit from 'graphql-depth-limit'
import compression from 'compression'
import cors from 'cors'
import helmet from 'helmet'
import { serviceSchema } from './schemas'
import { dataSources } from '../dataSource'

export class Application {
    readonly app: express.Application = express()
    readonly apolloServer: ApolloServer = new ApolloServer({
        schema: serviceSchema,
        dataSources,
        context: ({ req }) => ({}), // For HTTP context
        validationRules: [depthLimit(6)]
    })
    private httpServer: Server
    private applicationPort: number = Number(process.env.PORT) || 3000

    constructor() {
        this.setUpApp()
        this.httpServer = createServer(this.app)
    }

    async start(port: number = this.applicationPort): Promise<void> {
        await this.apolloServer.start()
        this.apolloServer.applyMiddleware({ app: this.app, path: '/graphql' })
        this.applicationPort = port
        this.httpServer.listen({ port }, (): void =>
            console.log(`🚀GraphQL-Server is running on ${this.graphQlPath()}`)
        )
    }

    async stop(): Promise<void> {
        this.httpServer.close()
        await this.apolloServer.stop();
    }

    graphQlPath() {
        return `http://localhost:${this.applicationPort}/graphql`
    }

    private setUpApp() {
        this.app.use(cors())
        this.app.use(helmet({ contentSecurityPolicy: false }))
        this.app.use(compression())
    }
}
