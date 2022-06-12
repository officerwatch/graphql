const { ApolloServer, gql } = require('apollo-server');
const { resolvers } = require("./resolvers.js");

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  type Obj @cacheControl(maxAge: 20) {
    id: String
    objType: String
    name: String
    ipfsHash: String
    parent: String
    children: String
  }

  type Query {
    objectCount: Int,
    objectExists (id: String): Boolean,
    objectGet (id: String): Obj,
    objectGetAll: [Obj],
    objectGetIpfs: String,
    objectInit: [Obj]
  }

enum CacheControlScope {
  PUBLIC
  PRIVATE
}

directive @cacheControl(
  maxAge: Int
  scope: CacheControlScope
  inheritMaxAge: Boolean
) on FIELD_DEFINITION | OBJECT | INTERFACE | UNION
`;

// The ApolloServer constructor requires two parameters:
// a schema definition and your set of resolvers
const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

