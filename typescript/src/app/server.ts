import express from "express";
import { ApolloServer } from "apollo-server-express";
import { createServer, Server } from "http";
import depthLimit from 'graphql-depth-limit'
import compression from "compression";
import cors from "cors";
import helmet from "helmet";
import { serviceSchema } from "./schemas";

export class Application {
    readonly app: express.Application = express();
    readonly apolloServer: ApolloServer = new ApolloServer({ schema: serviceSchema, validationRules: [ depthLimit(6) ] });
    private httpServer: Server;
    private applicationPort: number = Number(process.env.PORT) || 3000;

    constructor() {
        this.setUpApp();
        this.apolloServer.applyMiddleware({ app: this.app, path: "/graphql" });
        this.httpServer = createServer(this.app);
    }

    start(port: number = this.applicationPort): void {
        this.applicationPort = port;
        this.httpServer.listen({ port: port }, (): void =>
            console.log(`🚀GraphQL-Server is running on ${this.graphQlPath()}`)
        );
    }

    stop(): void {
        this.httpServer.close();
    }

    graphQlPath() {
        return `http://localhost:${this.applicationPort}/graphql`
    }

    private setUpApp() {
        this.app.use(cors());
        this.app.use(helmet({ contentSecurityPolicy: false }));
        this.app.use(compression());
    }

}
