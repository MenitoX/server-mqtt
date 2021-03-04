import { Express } from "express";
import node from "./node";
import sensor from "./sensor";

const components : Express[] = [node, sensor];

export default components;