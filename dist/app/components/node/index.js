"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const node_network_1 = __importDefault(require("./node.network"));
const node = express_1.default();
node.use('/node', node_network_1.default);
exports.default = node;
