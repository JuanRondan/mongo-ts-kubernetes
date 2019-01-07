import * as mongoose from 'mongoose';

const connString = process.env.MONGO_CONNECTION || 'mongodb://localhost/trainingApp';

export const dbConfig: mongoose.ConnectionOptions = { useNewUrlParser: true }

export async function connectDb ( appStart: () => void ) {
    //set mongoose to use ES6 Promises
    (<any>mongoose).Promise = global.Promise;
    
    try {
        const db = await mongoose.connect( connString, dbConfig );
        console.log( "Connected to MongoDB" );
        if (appStart)
            appStart();
    } catch( error ) {
        console.error( "Could not connect to MongoDB", error );
    }
};