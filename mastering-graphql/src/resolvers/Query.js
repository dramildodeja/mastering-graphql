const Query = {

  users(parent, args, { db }, info) {
    if (!args.query) {
      return db.users;
    }
    return db.users.filter((user) =>
      user.name.toLowerCase().includes(args.query.toLowerCase())
    );
  },

  posts(parent, args, { db }, info) {
    if (!args.query) {
      return db.posts;
    }
    return db.posts.filter(
      (post) =>
        post.title.toLowerCase().includes(args.query) ||
        post.body.toLowerCase().includes(args.query)
    );
  },

  comments(parent, args, { db }, info) {
    return db.comments;
  },

  me() {
    return {
      id: "007",
      name: "Dramil M Dodeja",
      email: "dramil.dodeja@sogeti.com",
    };
  },

  healthCheck() {
    return "Everything is up and running well"
  },

};

export { Query as default };
