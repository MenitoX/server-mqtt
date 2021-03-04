"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_repository_1 = __importDefault(require("./node.repository"));
function addNode(Node) {
    Node.createdAt = new Date;
    Node.modifiedAt = new Date;
    return node_repository_1.default.addNode(Node);
}
function deleteNode(id) {
    return node_repository_1.default.deleteNode(id);
}
function getNode(id) {
    return node_repository_1.default.getNode(id);
}
function getNodes() {
    return node_repository_1.default.getNodes();
}
function updateNode(id, Node) {
    Node.modifiedAt = new Date;
    return node_repository_1.default.updateNode(id, Node);
}
exports.default = {
    addNode,
    deleteNode,
    getNode,
    getNodes,
    updateNode
};
