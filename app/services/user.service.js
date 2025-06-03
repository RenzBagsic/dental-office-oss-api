const { MongoClient } = require("mongodb");
const uri = 'mongodb://atlas-sql-683c528f8fd5e0287e851151-7ptp5u.a.query.mongodb.net/sample_mflix?ssl=true&authSource=admin'

async function getUsers() {
    const client = new MongoClient(uri, {
        auth: {
            username: '<username>',
            password: '<password>'
        }
    });
    try {
        await client.connect();
        const dbo = client.db("sample_mflix");
        const users = await dbo.collection("users").find({}).toArray();
        console.log(users);
        return users;
    } catch (err) {
        console.error(err);
        throw err;
    } finally {
        await client.close();
    }
}

module.exports = {
    getUsers
};