const User = {

  posts(parent, args, { db }, info) {
      return db.posts.filter((post) => post.userId === parent.id);
  },

  comments(parent, args, { db }, info) {
      return db.comments.filter((comment) => comment.userId === parent.id);
  },
};

export { User as default };
