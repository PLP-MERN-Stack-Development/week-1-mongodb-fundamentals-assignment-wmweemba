[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19676696&assignment_repo_type=AssignmentRepo)
# MongoDB Fundamentals Assignment

This assignment focuses on learning MongoDB fundamentals including setup, CRUD operations, advanced queries, aggregation pipelines, and indexing.

## Assignment Overview

You will:
1. Set up a MongoDB database
2. Perform basic CRUD operations
3. Write advanced queries with filtering, projection, and sorting
4. Create aggregation pipelines for data analysis
5. Implement indexing for performance optimization

## Getting Started

1. Accept the GitHub Classroom assignment invitation
2. Clone your personal repository that was created by GitHub Classroom
3. Install MongoDB locally or set up a MongoDB Atlas account
4. Run the provided `insert_books.js` script to populate your database
5. Complete the tasks in the assignment document

## Files Included

- `Week1-Assignment.md`: Detailed assignment instructions
- `insert_books.js`: Script to populate your MongoDB database with sample book data

## Requirements

- Node.js (v18 or higher)
- MongoDB (local installation or Atlas account)
- MongoDB Shell (mongosh) or MongoDB Compass

## Submission

Your work will be automatically submitted when you push to your GitHub Classroom repository. Make sure to:

1. Complete all tasks in the assignment
2. Add your `queries.js` file with all required MongoDB queries
3. Include a screenshot of your MongoDB database
4. Update the README.md with your specific setup instructions

## Resources

- [MongoDB Documentation](https://docs.mongodb.com/)
- [MongoDB University](https://university.mongodb.com/)
- [MongoDB Node.js Driver](https://mongodb.github.io/node-mongodb-native/) 


### How to Run the MongoDB Queries

The `queries.js` file contains a set of MongoDB queries that you can run using one of the following methods:

#### 1. Using MongoDB Shell (mongosh)
- Open your terminal or command prompt.
- Connect to your MongoDB instance by running:
  ```bash
  mongosh
  ```
- Switch to your target database:
  ```javascript
  use plp_bookstore
  ```
- Copy and paste the queries from `queries.js` into the shell, or run the file directly if saved locally:
  ```bash
  mongosh < path\to\queries.js
  ```

#### 2. Using MongoDB Compass
- Open MongoDB Compass and connect to your MongoDB instance.
- Select the `plp_bookstore` database and choose the `books` collection.
- Navigate to the **Aggregations** or **Schema** tab (depending on the query type).
- Copy and paste the desired queries from `queries.js` into the query input area.
- Click the **Run** button to execute the queries and view the results.

#### 3. Using MongoDB Atlas
- Log in to your MongoDB Atlas account and navigate to your cluster.
- Open the **Data Explorer** from the Atlas dashboard.
- Select the `plp_bookstore` database and the `books` collection.
- Paste the queries from `queries.js` into the query interface.
- Execute the queries to see the results in the Atlas UI.

Choose the method that best fits your development environment to run each of the tasks and view their corresponding outputs.