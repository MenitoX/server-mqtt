"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sensor_repository_1 = __importDefault(require("./sensor.repository"));
function addSensor(Sensor) {
    Sensor.createdAt = new Date;
    Sensor.modifiedAt = new Date;
    return sensor_repository_1.default.addSensor(Sensor);
}
function deleteSensor(id) {
    return sensor_repository_1.default.deleteSensor(id);
}
function getSensor(id) {
    return sensor_repository_1.default.getSensor(id);
}
function getSensors() {
    return sensor_repository_1.default.getSensors();
}
function updateSensor(id, Sensor) {
    Sensor.modifiedAt = new Date;
    return sensor_repository_1.default.updateSensor(id, Sensor);
}
exports.default = {
    addSensor,
    deleteSensor,
    getSensor,
    getSensors,
    updateSensor
};
