import express from "express";
import { ApolloServer } from "apollo-server-express";
import { createServer } from "http";
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
