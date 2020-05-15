import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import { MongoClient } from 'mongodb';
import { withDB } from './withDB';

const app = express();

app.use(express.static(path.join(__dirname, '/build')));

app.use(bodyParser.json());

app.get('/hello', (req, res) => res.send('Hey there!'));
app.get('/hello/:name', (req, res) => {
    const name = req.params.name;
    res.send(`Hello ${name}!`);
});
app.post('/hello', (req, res) => {
    const name = req.body.name;
    res.send(`Hello ${name}!!!!`);
});

app.get('/api/articles/:name', async (req, res) => {
    const articleName = req.params.name;

    const articleInfo = await withDB(async db => {
        return await db.collection('articles')
            .findOne({ name: articleName });
    });

    if (!articleInfo) {
        return res.status(404).send('Article not found!');
    }

    res.status(200).json(articleInfo);
})

app.post('/api/articles/:name/upvote', async (req, res) => {
    const articleName = req.params.name;

    try {
        const client = await MongoClient.connect(
            'mongodb://localhost:27017',
            { useNewUrlParser: true, useUnifiedTopology: true },
        );

        const db = client.db('react-blog-db-2');

        const articleInfo = await db.collection('articles')
            .findOne({ name: articleName });

        await db.collection('articles')
            .updateOne({ name: articleName }, {
                '$set': {
                    upvotes: articleInfo.upvotes + 1,
                }
            });

        const updatedArticleInfo = await db.collection('articles')
            .findOne({ name: articleName });

        client.close();

        res.status(200).json(updatedArticleInfo);
    } catch (e) {
        res.status(500).send('Something went wrong!');
    }
});

app.post('/api/articles/:name/add-comment', async (req, res) => {
    const articleName = req.params.name;
    const { comment } = req.body;

    try {
        const client = await MongoClient.connect(
            'mongodb://localhost:27017',
            { useNewUrlParser: true, useUnifiedTopology: true },
        );

        const db = client.db('react-blog-db-2');

        const articleInfo = await db.collection('articles')
            .findOne({ name: articleName });

        await db.collection('articles')
            .updateOne({ name: articleName }, {
                '$set': {
                    comments: articleInfo.comments.concat(comment),
                }
            });

        const updatedArticleInfo = await db.collection('articles')
            .findOne({ name: articleName });

        client.close();

        res.status(200).json(updatedArticleInfo);
    } catch (e) {
        res.status(500).send('Something went wrong!');
    }
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/build/index.html'));
})
        
app.listen(8000, () => {
    console.log('Server is listening on port 8000');
});