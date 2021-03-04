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
const sensor_schema_1 = __importDefault(require("./sensor.schema"));
function addSensor(Sensor) {
    return sensor_schema_1.default.create(Sensor);
}
function deleteSensor(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return sensor_schema_1.default.findByIdAndRemove({ _id: id });
    });
}
function getSensor(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return sensor_schema_1.default.findOne({ _id: id });
    });
}
function getSensors() {
    return __awaiter(this, void 0, void 0, function* () {
        return sensor_schema_1.default.find();
    });
}
function updateSensor(id, sensor) {
    return __awaiter(this, void 0, void 0, function* () {
        return sensor_schema_1.default.findOneAndUpdate({ _id: id }, sensor);
    });
}
exports.default = {
    addSensor,
    deleteSensor,
    getSensor,
    getSensors,
    updateSensor
};
