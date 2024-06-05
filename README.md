# CRUD Rest API Nodejs with Typescript

Sample Nodejs API with Typescript and Mongodb

## Script:

- npm install
- npm start

## Nodejs Typescript project

Follow these steps to create a new nodejs project with Typescript

- docker-compose up -d
- npm init
- tsc --init
- configure tsconfig.json file:
  - "outDir": "./build", ( Redirect output structure to the directory. )
  - "rootDir": "./src", ( Specify the root directory of input files. Use to control the output directory structure with outDir.)

## Mongodb

Mongodb options you can use a local or a remote database:

- Local
- [Mongodb Atals](https://account.mongodb.com/account/login)

## Endponts:

### User:

- create user : localhost:3000/user/
- get user : localhost:3000/user/userId
- get users: localhost:3000/user?sort=sortOption&order=sortOrder&pageSize=pageSize
- update user : localhost:3000/user/

### Posts:

- create post : localhost:3000/post/
- get all post : localhost:3000/post/
- get post : localhost:3000/post/postId
- delete post : localhost:3000/post/postId
- update post : localhost:3000/post/

### postman collection:
 - POstman collection json file is attched in this project at collection/Media Hub.postman_collection.json

TODO:
- Top K Frequent Posters
   Description: Implement a function to return the top K users who have made the most posts.
   Insert some data using postman for multiple users and try to find out frequent posters

- Rate Limiting User Actions
  Description: Implement a rate-limiting feature to control the number of actions (e.g., posts) a user can perform within a specific time frame.
  Limit the user to post less than or equal to 5 posts per minute
