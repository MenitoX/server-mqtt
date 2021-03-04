import express,{ Express } from "express";
import router from "./sensor.network";

const sensor:Express = express();
sensor.use('/sensor',router);

export default sensor;