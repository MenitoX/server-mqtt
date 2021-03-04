"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sensor_network_1 = __importDefault(require("./sensor.network"));
const sensor = express_1.default();
sensor.use('/sensor', sensor_network_1.default);
exports.default = sensor;
