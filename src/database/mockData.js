const users = [
    { id: "1", name: "Tom", email: "tom@tom.com", age: 34 },
    { id: "2", name: "Don", email: "don@don.com", age: 35 },
    { id: "3", name: "Harry", email: "harry@harry.com", age: 36 },
];
const posts = [
    {
      id: "1",
      title: "Tom's first post",
      body: "Tom is the smartest person on this planet",
      published: true,
      userId: "1",
    },
    {
      id: "2",
      title: "Tom's good at graphql",
      body: "Tom is the expert of graphql",
      published: false,
      userId: "1",
    },
    {
      id: "3",
      title: "Harry is awesome",
      body: "Yeah! he's really good at graphql",
      published: true,
      userId: "3",
    }
];
const comments = [
    { id: "1", body: "Tom's first comment", userId: "1", post: "1" },
    { id: "2", body: "Don's first comment", userId: "2", post: "3" },
    { id: "3", body: "Don's second comment", userId: "2", post: "3" },
    { id: "4", body: "Harry's first comment", userId: "3", post: "1" }
];
const mockData = {
    users,
    posts,
    comments,
};
export { mockData as default };