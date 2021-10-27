import express from "express";
import { ApolloServer } from "apollo-server-express";
import { createServer, Server } from "http";
import compression from "compression";
import cors from "cors";
import helmet from "helmet";
import { serviceSchema } from "./schemas";

const app = express();
app.use("*", cors());
app.use(helmet({ contentSecurityPolicy: false }));
app.use(compression());

export const server = new ApolloServer({
    schema: serviceSchema
});

server.applyMiddleware({ app, path: "/graphql" });

export const httpServer = createServer(app);

export class Application {
    readonly app: express.Application = express();
    private httpServer: Server;
    private applicationPort: number = Number(process.env.PORT) || 3000;
    private apolloServer: ApolloServer = server;

    constructor() {
        this.setUpApp();
        this.apolloServer.applyMiddleware({ app: this.app, path: "/graphql" });
        this.httpServer = createServer(this.app);
    }

    start(port: number = this.applicationPort) {
        this.httpServer.listen({ port: port }, (): void =>
            console.log(`🚀GraphQL-Server is running on http://localhost:${port}/graphql`)
        );
    }

    stop() {
        this.httpServer.close();
    }

    private setUpApp() {
        this.app.use("*", cors());
        this.app.use(helmet({ contentSecurityPolicy: false }));
        this.app.use(compression());
    }

}
