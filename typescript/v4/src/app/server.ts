import express, { json } from 'express'
import { createServer, Server } from 'http'
import { serviceSchema } from './schemas'
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';

export class Application {
    readonly app: express.Application = express()
    readonly apolloServer: ApolloServer = new ApolloServer({
        schema: serviceSchema,
    })
    private httpServer: Server
    private applicationPort: number = Number(process.env.PORT) || 3000

    constructor() {
        this.setUpApp()
        this.httpServer = createServer(this.app)
    }

    async start(port: number = this.applicationPort): Promise<void> {
        await this.apolloServer.start()
        this.app.use('/graphql',
          json(),
          expressMiddleware(this.apolloServer, {
              context: async ({ req }) => ({ token: req.headers.token }),
          })
        );
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
    }
}
