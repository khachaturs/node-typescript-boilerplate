import express from 'express';
import { Request, Response } from 'express';
import config from 'config';

const app = express();
const port = config.get('server.port');

app.get('/', (req: Request, res: Response) => {
    res.send({
        message: `Running marketplace application`,
    });
});

app.listen(port, () => {
    console.log('server started at http://localhost:' + port);
});