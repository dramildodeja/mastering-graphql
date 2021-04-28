const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schemas/users.graphql");
import db from "./database/mockData";
import Query from "./resolvers/Query";
import Mutation from "./resolvers/Mutation";
import User from "./resolvers/User";
import Post from "./resolvers/Post";
import Comment from "./resolvers/Comment";
import Subscription from "./resolvers/Subscription";
import { PubSub } from "graphql-subscriptions";

const pubsub = new PubSub();
const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,//This is to demo how queries technique works in graphql
    Mutation,//This is to demo how create/update/delete technique works in graphql
    Subscription,//This is to demo how one can subscribe to realtime events in graphql
    User,//This is to demo how you can map individual type definitions of the application schema
    Post,//This is to demo how you can map individual type definitions of the application schema
    Comment,//This is to demo how you can map individual type definitions of the application schema
  },
  context: {
    db,//This is to demo how you can map database channel
    pubsub,//This is to demo how you can enable pubsub model on your graphql data events
  },
  tracing: true,
  playground:true,
  cacheControl: true,
  /*context: async ({ req }) => {
    return authInterceptor(req) //sample to implement authentication like OAuth or SAML
  }*/
});

server.listen().then(({ url }) => {
    console.log(`Local graphql server is running @ ${url}`);
});