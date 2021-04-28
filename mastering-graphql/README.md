# Mastering GraphQL
This is standalone application which includes all types of operations a user could perform leveraging graphql.

# List of functionalities
GraphQL Queries: 
- Add user
- Add post
- Add comment

GraphQL Mutations:
- Update user
- Delete user
- Update post
- publist/unpublish post
- Delete post
- Update comment
- Delete comment

GraphQL Subscriptions:
- Sub to user
- Sub to all posts
- Sub to changes on a post
- Sub to comments on a post

### Local Application Setup

Run 'npm install' in root directory

### Run

Run 'npm run start' to start server

Open the playground in your browser at: http://localhost:4000/

# Sample Queries

query {
  healthCheck
}

query {
  users {
    id,
    name,
    email
  }
}

mutation {
  createUser(data: {
    name: "new user"
    age: 39
    email: "newuser@new.com"
  }) {
    id
    name
  }
}

subscription {
  comment (postId: 1) {
    mutation
    data {      
      user {
        name,
        email
      }
    }
  }
}

mutation {
  createComment(data: {    
    body: "Test Subscription"
    userId: 1
    post: 1
  }) {
    body
    user {
      name,
      email
    }
  }
}

mutation {
  deleteUser(id:4) {
    name
  }
}

