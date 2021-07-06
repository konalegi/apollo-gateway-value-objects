const { ApolloServer, gql } = require("apollo-server");
const { buildFederatedSchema } = require("@apollo/federation");

const typeDefs = gql`
  type User @extends @key(fields: "id") {
    id: ID! @external
    photo: Photo
  }

  type Photo {
    id: ID!
    image: String
  }
`;

const resolvers = {
  User: {
    __resolveReference(object) {
      return {
        photo: { image: 'http://test/user_image.jpg' }
      };
    }
  }
};

const server = new ApolloServer({
  schema: buildFederatedSchema([
    {
      typeDefs,
      resolvers
    }
  ])
});

server.listen({ port: 6002 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});