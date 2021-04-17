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
const sensor_controller_1 = __importDefault(require("./sensor.controller"));
const express_1 = __importDefault(require("express"));
const response_module_1 = __importDefault(require("../../modules/response.module"));
const router = express_1.default.Router();
router.get('/all', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield sensor_controller_1.default.getSensors();
        response_module_1.default.success(req, res, result);
    }
    catch (error) {
        console.error(error);
        response_module_1.default.error(req, res, 'Invalid Information', 500);
    }
}));
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params['id'];
    try {
        const result = yield sensor_controller_1.default.getSensor(id);
        response_module_1.default.success(req, res, result);
    }
    catch (error) {
        console.error(error);
        response_module_1.default.error(req, res, 'Invalid Information', 500);
    }
}));
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const Sensor = req.body;
    try {
        const result = yield sensor_controller_1.default.addSensor(Sensor);
        response_module_1.default.success(req, res, result, 201);
    }
    catch (error) {
        console.error(error);
        response_module_1.default.error(req, res, 'Invalid Information', 500);
    }
}));
router.patch('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params['id'];
    const Sensor = req.body;
    try {
        const result = yield sensor_controller_1.default.updateSensor(id, Sensor);
        response_module_1.default.success(req, res, result);
    }
    catch (error) {
        console.error(error);
        response_module_1.default.error(req, res, 'Invalid Information', 500);
    }
}));
router.delete('/delete/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params['id'];
    try {
        const result = yield sensor_controller_1.default.deleteSensor(id);
        response_module_1.default.success(req, res, result);
    }
    catch (error) {
        console.error(error);
        response_module_1.default.error(req, res, 'Invalid Information', 500);
    }
}));
const mqtt_1 = __importDefault(require("mqtt"));
const client = mqtt_1.default.connect("mqtt://broker.hivemq.com");
client.subscribe("testnodeSEND");
const dummypackage = "{\"ds\":0,\"sw\":[]}";
client.on('message', (topic, message) => __awaiter(void 0, void 0, void 0, function* () {
    //const payload = JSON.parse(message.toString())
    switch (topic) {
        case "testnodeSEND":
            console.log(topic);
            console.log(message.toString());
            console.log("FUNCIONA CTM");
            client.publish("testnodeGET", dummypackage);
    }
}));
exports.default = router;
