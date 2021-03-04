"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_1 = __importDefault(require("./node"));
const sensor_1 = __importDefault(require("./sensor"));
const components = [node_1.default, sensor_1.default];
exports.default = components;
