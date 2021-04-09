const { server } = require("./server");

// The `listen` method launches a web server.
server.listen({ port: 4010 }).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
