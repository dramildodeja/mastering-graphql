const { gql } = require("apollo-server");

const typeDefs = gql`

    scalar CustomJSONCommon
    
    type Query {
        users(query: String): [User!]!
        posts(query: String): [Post!]!
        comments: [Comment!]!
        me: CustomJSONCommon
        healthCheck: CustomJSONCommon
    }

    type Mutation {
        createUser(data: CreateUserInput): User!
        deleteUser(id: ID!): User!
        updateUser(id: ID!, data: UpdateUserInput): User!
        createPost(data: CreatePost): Post!
        updatePost(id: ID!, data: updatePostInput): Post!
        deletePost(id: ID!): Post!
        createComment(data: CreateComment): Comment!
        updateComment(id: ID!, data: UpdateCommentInput): Comment!
        deleteComment(id: ID!): Comment!
    }

    type Subscription {
        comment(postId: ID!): CommentSubscriptionPayload!
        post: PostSubscriptionPayload!
    }

    input CreateUserInput {
        name: String!
        email: String!
        age: Int
    }

    input UpdateUserInput {
        name: String
        email: String
        age: Int
    }

    input CreatePost {
        title: String!
        body: String!
        published: Boolean!
        userId: ID!
    }

    input updatePostInput {
        title: String
        body: String
        published: Boolean
    }

    input CreateComment {
        body: String!
        userId: ID!
        post: ID!
    }

    input UpdateCommentInput {
        body: String
    }

    type User {
        id: ID!
        name: String!
        email: String!
        age: Int
        posts: [Post!]!
        comments: [Comment]!
    }

    type Post {
        id: ID!
        title: String!
        body: String!
        published: Boolean!
        user: User!
        comments: [Comment!]!
    }

    type PostSubscriptionPayload {
        mutation: MutationType
        data: Post!
    }

    type Comment {
        id: ID!
        body: String!
        user: User!
        post: Post!
    }
    type CommentSubscriptionPayload {
        mutation: MutationType
        data: Comment!
    }

    enum MutationType {
        CREATED
        UPDATED
        DELETED
    }
`;

module.exports = typeDefs;