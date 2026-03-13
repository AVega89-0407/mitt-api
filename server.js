import express from 'express';
import 'dotenv/config';



const app = express();

const PORT = process.env.PORT;

function requireApiKey (req, res, next) {
    const apiKey = req.headers['x-api-key'];

    console.log("Header key:", apiKey);
    console.log("Env key:", process.env.API_KEY);
    
    if (!apiKey || apiKey !== process.env.API_KEY) {
        return res.status(401).json({ error: 'Ogiltig eller saknad API-nyckel' });
    }

    next();
}

app.use(express.json());
app.use('/api', requireApiKey);

let books = [
    { id: 1, title: 'The Housemaid', author: 'Freida McFadden' },
    { id: 2, title: 'The last letter', author: 'Rebecca Yarros' },
    { id: 3, title: 'If he had been with me', author: 'Laura Nowlin' },
];

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the Book API' });
});

app.get('/api/books', (req, res) => {
    res.json(books);
});

app.get('/api/books/:id', (req, res) => {
    const bookId = Number(req.params.id);

    const book = books.find(b => b.id === bookId);

    if (!book) {
        return res.status(404).json({ error: 'Book not found' });
    }
    res.json(book);
});

app.post('/api/books', (req, res) => {
    const { title, author } = req.body;

    if (!title || !author) {
        return res.status(400).json({ error: 'Title and author are required'});
    }

    const newBook = {
        id: books.length + 1,
        title,
        author
    };

    books.push(newBook);
    res.status(201).json(newBook);

});

app.put('/api/books/:id', (req, res) => {
    const id = Number(req.params.id);

    const book = books.find(b => b.id === id);

    if (!book) {
        return res.status(404).json({ error: 'Book not found' });
    }

    if (!req.body.title || !req.body.author) {
        return res.status(400).json({ error: 'Title and author are required' });
    }

    book.title = req.body.title;
    book.author = req.body.author;

    res.json(book);
});

app.delete('/api/books/:id', (req, res) => {
    const id = Number(req.params.id);

    const book = books.find(b => b.id === id);

    if (!book) {
        return res.status(404).json({ error: 'Book not found' });
    }

    books = books.filter(b => b.id !== id);
    res.status(204).send();

});

app.listen(PORT, () => {
    console.log(`API:et lyssnar på http://localhost:${PORT}`);
    
})