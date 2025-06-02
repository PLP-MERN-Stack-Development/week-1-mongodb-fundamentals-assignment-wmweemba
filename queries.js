// TASK 1: MONGODB SETUP ALREADY DONE
use plp_bookstore;




// TASK 2: BASIC CRUD OPERATIONS
// Find all books in a specific genre
db.books.find({ genre: "Adventure" });

// Find books published after a certain year
db.books.find({ published_year: { $gt: 1980 } });

// Find books by a specific author
db.books.find({ author: "Paulo Coelho" });

// Update the price of a specific book
db.books.updateOne(
    { title: "The Hobbit" },
    { $set: { price: 17.99 } }
);

// Delete a book by its title
db.books.deleteOne({ title: "1984" });





// TASK 3: ADVANCED QUERIES
// Find books that are both in stock and published after 1950
db.books.find({ in_stock: true, published_year: { $gt: 1950 } });

// Use projection to return only the title, author, and price fields
db.books.find(
    { in_stock: true, published_year: { $gt: 1930 } },
    { title: 1, author: 1, price: 1 }
);

// Sorting: display books by price in ascending order
db.books.find().sort({ price: 1 });

// Sorting: display books by price in descending order
db.books.find().sort({ price: -1 });

// Pagination: Get the first page (5 books per page)
db.books.find().skip(0).limit(5);





// TASK 4: AGGREGATION PIPELINE
// Calculate the average price of books by genre
db.books.aggregate([
    { $group: { _id: "$genre", averagePrice: { $avg: "$price" } } }
]);

// Find the author with the most books in the collection
db.books.aggregate([
    { $group: { _id: "$author", bookCount: { $sum: 1 } } },
    { $sort: { bookCount: -1 } },
    { $limit: 1 }
]);

// Group books by publication decade and count them
db.books.aggregate([
    {
        $group: {
            _id: { $floor: { $divide: ["$published_year", 10] } },
            bookCount: { $sum: 1 }
        }
    },
    {
        $project: {
            decade: { $multiply: ["$_id", 10] },
            bookCount: 1,
            _id: 0
        }
    }
]);




// TASK 5: INDEXING
// Create an index on the title field for faster searches
db.books.createIndex({ title: 1 });

// Create a compound index on author and publishedYear
db.books.createIndex({ author: 1, published_year: -1 });

// Use the explain() method to demonstrate the performance improvement with your indexes
db.books.find({ title: "The Alchemist" }).explain("executionStats");

