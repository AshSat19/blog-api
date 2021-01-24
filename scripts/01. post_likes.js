const DB_HOST_BUYER = '';
const DB_NAME = 'blog';

let MongoClient = require('mongodb').MongoClient;
console.log('MONGO DB ---- URL ----->', DB_HOST_BUYER);

const mongoConnection = () => {
	MongoClient.connect(DB_HOST_BUYER, { useUnifiedTopology: true }, (err, db) => {
		if (err) throw err;
		const dbo = db.db(DB_NAME);
		migrateData(dbo);
	});
};

const migrateData = async (db) => {
	const postModel = db.collection('posts');
	const postsArray = await postModel.find({}).toArray();
	
	const promiseArray = [];

	postsArray?.forEach((post) => {
        if (!post?.likes) post.likes = 0;
		promiseArray.push(postModel.update({ _id: post._id }, post));
	});

	await Promise.all(promiseArray);
	console.log('All target records updated');
	console.log('Migration COMPLETE');
	process.exit();
};
mongoConnection();