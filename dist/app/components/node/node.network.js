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
const node_controller_1 = __importDefault(require("./node.controller"));
const express_1 = __importDefault(require("express"));
const response_module_1 = __importDefault(require("../../modules/response.module"));
const mqtt_1 = __importDefault(require("mqtt"));
const router = express_1.default.Router();
const options = {
    username: "minkai",
    password: "gordopasivo"
};
//const client = mqtt.connect("ws://54.94.28.163:1883")
const client = mqtt_1.default.connect("ws://54.94.28.163:9001", options);
//const client = mqtt.connect("mqtt://broker.hivemq.com")
client.subscribe("addNode");
client.subscribe("getNode");
client.subscribe("testnodo");
//client.publish("getNode", "null")
client.on('message', (topic, message) => __awaiter(void 0, void 0, void 0, function* () {
    //const payload = JSON.parse(message.toString())
    switch (topic) {
        //case "addNode":
        //const Node = controller.addNode(payload)
        case "getNode":
            try {
                const result = yield node_controller_1.default.getNodes();
                console.log(result);
            }
            catch (error) {
                console.error(error);
            }
        case "testnodo":
            console.log(topic);
            console.log(message.toString());
            console.log("FUNCIONA CTM");
    }
}));
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const Node = JSON.stringify(req.body);
    //console.log(Node)
    try {
        client.publish("testnodo", Node);
        response_module_1.default.success(req, res, 'logrado');
    }
    catch (error) {
        console.error(error);
        response_module_1.default.error(req, res, 'Invalid Information', 500);
    }
}));
/*
router.post('/', async (req: Request, res : Response) => {
    const Node:string = JSON.stringify(req.body);
    console.log(Node)
    try{
        client.publish("addNode", Node)
        response.success(req, res, 'logrado');
    } catch(error){
        console.error(error);
        response.error(req, res, 'Invalid Information', 500);
    }

})*/
router.get('/all', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield node_controller_1.default.getNodes();
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
        const result = yield node_controller_1.default.getNode(id);
        response_module_1.default.success(req, res, result);
    }
    catch (error) {
        console.error(error);
        response_module_1.default.error(req, res, 'Invalid Information', 500);
    }
}));
/*
router.post('/', async (req: Request, res : Response) => {
    const Node : Node = req.body;
    try{
        const result: Node = await controller.addNode(Node);
        response.success(req, res, result, 201);
    } catch(error){
        console.error(error);
        response.error(req, res , 'Invalid Information', 500);
    }
})*/
router.patch('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params['id'];
    const Node = req.body;
    try {
        const result = yield node_controller_1.default.updateNode(id, Node);
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
        const result = yield node_controller_1.default.deleteNode(id);
        response_module_1.default.success(req, res, result);
    }
    catch (error) {
        console.error(error);
        response_module_1.default.error(req, res, 'Invalid Information', 500);
    }
}));
exports.default = router;
