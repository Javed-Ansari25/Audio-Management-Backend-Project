import dotenv from 'dotenv'
import app from './app.js';
import connectDb from './db/databaseConnect.js';

dotenv.config({ path: "./.env" });

connectDb()
.then(() => {
    app.listen(process.env.PORT || 4000, () => {
        console.log(`SERVER RUNNING ON ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO_DB CONNECTION FIELD", err);
})

