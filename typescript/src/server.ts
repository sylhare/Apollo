import express from "express";
import { ApolloServer } from "apollo-server-express";
import { createServer } from "http";
import compression from "compression";
import cors from "cors";
import helmet from "helmet";
import { serviceSchema } from "./apollo/schemas";

const PORT = process.env.PORT || 3000;

const app = express();
app.use("*", cors());
app.use(helmet({ contentSecurityPolicy: false }));
app.use(compression());

const server = new ApolloServer({ schema: serviceSchema });
server.applyMiddleware({ app, path: "/graphql" });

const httpServer = createServer(app);
httpServer.listen({ port: PORT }, (): void =>
    console.log(`🚀GraphQL-Server is running on http://localhost:3000/graphql`)
);
