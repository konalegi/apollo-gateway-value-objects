const { ApolloServer, gql } = require("apollo-server");
const { buildFederatedSchema } = require("@apollo/federation");

const typeDefs = gql`
  type Query {
    me: User

    photo: Photo
  }

  type User @key(fields: "id") {
    age: Int
    id: ID!
  }

  type Photo {
    id: ID!
    image: String
  }
`;

const resolvers = {
  Query: {
    photo: async () => {
      return { image: 'http://test/image.jpg' }
    },
    me: async () => {
      return {
        id: 2,
        age: 20
      }
    }
  },
};

const server = new ApolloServer({
  schema: buildFederatedSchema([
    {
      typeDefs,
      resolvers
    }
  ])
});

server.listen({ port: 6001 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});