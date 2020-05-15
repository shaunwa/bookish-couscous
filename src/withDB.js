import { MongoClient } from 'mongodb';

export const withDB = async operations => {
    try {
        const client = await MongoClient.connect(
            'mongodb://localhost:27017',
            { useNewUrlParser: true, useUnifiedTopology: true },
        );

        const db = client.db('react-blog-db-2');

        const results = await operations(db);

        client.close();

        return results;
    } catch (e) {
        throw new Error("Database Error!");
    }
}