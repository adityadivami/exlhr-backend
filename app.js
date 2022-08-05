import http from "http";
import express from "express";
import bodyParser from "body-parser";
import logger from "morgan";

import db from './common/mongoose/mongoose';
import { globalRoutes } from './routes';

const app = express();
const server = http.createServer(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use(globalRoutes);

const port = 3000;
server.listen(
    port,
    () => console.log(`server listening on localhost:${port}`)
)
db.then(
    () => console.log('connection to db established'),
    err => console.log(`connection to db error ${err}`)
)