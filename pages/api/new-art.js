import {MongoClient} from 'mongodb';

async function handler(req, res) {
    if(req.method==='POST') {
        const requestData = req.body;
        // const {title, url, description, likes, photographer} = requestData;
        const client = await MongoClient.connect(
          "mongodb+srv://iamnehasinghatwork:Z2K4MuoKXCQlHnL6@cluster0.v4nqere.mongodb.net/art-gallery?retryWrites=true&w=majority"
        );

        const db = client.db();
        const artsCollection = db.collection('arts');
        const result = await artsCollection.insertOne(requestData);
        res.status(201).json({message: "Art inserted"});
    }
}
export default handler;