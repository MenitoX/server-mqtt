"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const definition = {
    number: { type: Number, required: true },
    syncSignal: { type: Boolean, default: false },
    ds: { type: Number, required: true },
    lastSync: { type: Date },
    modifiedAt: { type: Date },
    createdAt: { type: Date }
};
const schema = new mongoose_1.Schema(definition);
exports.default = mongoose_1.model('Node', schema, 'Nodes');
