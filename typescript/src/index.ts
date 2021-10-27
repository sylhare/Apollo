import { httpServer } from "./app/server";

const PORT = process.env.PORT || 3000;

httpServer.listen({ port: PORT }, (): void =>
    console.log(`🚀GraphQL-Server is running on http://localhost:${PORT}/graphql`)
);
