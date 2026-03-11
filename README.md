# 📚 Book API

A simple REST API built with **Node.js** and **Express** that allows users to manage a collection of books.
This project demonstrates a basic **CRUD API** (Create, Read, Update, Delete).

---

## 🚀 Features

* Get all books
* Get a single book by ID
* Add a new book
* Update an existing book
* Delete a book

The API stores books in memory using a simple array, making it perfect for learning and testing RESTful endpoints.

---

## 🛠️ Technologies

* Node.js
* Express.js
* JavaScript
* Postman (for testing API requests)

---

## 📦 Installation

Clone the repository:

```
git clone https://github.com/AVega89-0407/mitt-api.git
```

Navigate to the project folder:

```
cd mitt-api
```

Install dependencies:

```
npm install
```

Start the server:

```
node server.js
```

The API will run on:

```
http://localhost:3000
```

---

# 📚 API Endpoints

## Get all books

**GET**

```
/api/books
```

Example response:

```json
[
  {
    "id": 1,
    "title": "The Housemaid",
    "author": "Freida McFadden"
  }
]
```

---

## Get a book by ID

**GET**

```
/api/books/:id
```

Example:

```
/api/books/1
```

Response:

```json
{
  "id": 1,
  "title": "The Housemaid",
  "author": "Freida McFadden"
}
```

---

## Add a new book

**POST**

```
/api/books
```

Request body:

```json
{
  "title": "Dímelo Bajito",
  "author": "Mercedes Ron"
}
```

Response:

```json
{
  "id": 4,
  "title": "Dímelo Bajito",
  "author": "Mercedes Ron"
}
```

---

## Update a book

**PUT**

```
/api/books/:id
```

Example:

```
/api/books/2
```

Request body:

```json
{
  "title": "Updated title",
  "author": "Updated author"
}
```

---

## Delete a book

**DELETE**

```
/api/books/:id
```

Example:

```
/api/books/3
```

Response:

```
204 No Content
```

---

## ⚠️ Error Handling

If a book cannot be found:

```json
{
  "error": "Book not found"
}
```

If required fields are missing:

```json
{
  "error": "Title and author are required"
}
```

---

## 📮 Testing the API

You can test the API using tools like **Postman** by sending requests to:

```
http://localhost:3000/api/books
```

---

## 📚 Future Improvements

* Connect to a database (MongoDB / PostgreSQL)
* Add validation
* Add authentication
* Deploy the API online

---

## 👩‍💻 Author

Created as part of my journey learning **Frontend Development and APIs**.
