import * as express from 'express';
import { connectDb } from './config/database';

const appStart = () => {

    const app: express.Express = express();

    app.get('/', (req: express.Request, res: express.Response) => {
        res.send("Running TypeScript on Google App Engine");
    });

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    });
}

connectDb( appStart );


