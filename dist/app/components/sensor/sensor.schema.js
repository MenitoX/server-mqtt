"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const definition = {
    type: { type: String, required: true },
    unit: { type: String, required: true },
    stat: { type: Number, default: 0 },
    blueprint: { type: String, required: true },
    data: { type: Number, default: 0 },
    number: { type: Number, required: true },
    modifiedAt: { type: Date },
    createdAt: { type: Date }
};
const schema = new mongoose_1.Schema(definition);
exports.default = mongoose_1.model('Sensor', schema, 'Sensors');
