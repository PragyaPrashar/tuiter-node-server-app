import express from 'express';
import cors from 'cors';
import HelloController from "./controllers/hello-controller.js";
import UsersController from "./controllers/users/users-controller.js";
import TuitsController from "./controllers/tuits/tuits-controller.js";
import mongoose from "mongoose";
// mongoose.connect('mongodb://localhost:27017/tuiter');
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
                          || 'mongodb://localhost:27017/tuiter';
const MONGO_LOCAL='mongodb://localhost:27017/tuiter';
const app=express()
app.use(cors());
app.use(express.json());
mongoose.connect(CONNECTION_STRING);
TuitsController(app);
HelloController(app);
UsersController(app);
app.listen(process.env.PORT || 4000);

