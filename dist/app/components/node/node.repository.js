"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_schema_1 = __importDefault(require("./node.schema"));
function addNode(Node) {
    return node_schema_1.default.create(Node);
}
function deleteNode(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return node_schema_1.default.findByIdAndRemove({ _id: id });
    });
}
function getNode(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return node_schema_1.default.findOne({ _id: id });
    });
}
function getNodes() {
    return __awaiter(this, void 0, void 0, function* () {
        return node_schema_1.default.find();
    });
}
function updateNode(id, node) {
    return __awaiter(this, void 0, void 0, function* () {
        return node_schema_1.default.findOneAndUpdate({ _id: id }, node);
    });
}
exports.default = {
    addNode,
    deleteNode,
    getNode,
    getNodes,
    updateNode
};
