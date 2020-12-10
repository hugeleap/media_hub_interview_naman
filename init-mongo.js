// Use the admin database to create our user
db = db.getSiblingDB('admin');

// Create user
db.createUser({
  user: "test",
  pwd: "password",
  roles: [
    {
      role: "readWrite",
      db: "test"
    }
  ]
});

// Switch to the test database
db = db.getSiblingDB('test');

// Create users collection and insert a document
db.createCollection('users');
db.users.insertOne({
  _id: ObjectId("664dc371f97fb67423f4c192"),
  username: "testuser@gmail.com",
  name: "test",
  surname: "user",
  createdAt: new Date("2024-05-22T10:05:37.185Z"),
  updatedAt: new Date("2024-05-22T10:05:37.185Z")
});

// Create posts collection and insert documents
db.createCollection('posts');
db.posts.insertMany([
  {
    _id: ObjectId(),
    title: "First Post",
    description: "This is the description of the first post.",
    vote: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
    user_id: ObjectId("664dc371f97fb67423f4c192")
  },
  {
    _id: ObjectId(),
    title: "Second Post",
    description: "This is the description of the second post.",
    vote: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
    user_id: ObjectId("664dc371f97fb67423f4c192")
  }
]);
