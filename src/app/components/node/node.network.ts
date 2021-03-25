import controller from "./node.controller";
import { Node } from "../../models/node.model";
import express,{Response, Request, Router, json} from "express";
import response from "../../modules/response.module";
import mqtt from "mqtt";

const router : Router = express.Router();
const client = mqtt.connect("mqtt://broker.hivemq.com")
client.subscribe("addNode")
client.subscribe("getNode")
client.subscribe("testnodo")
//client.publish("getNode", "null")


client.on('message', async (topic, message)=>{
    //const payload = JSON.parse(message.toString())
    switch(topic){
        //case "addNode":
            //const Node = controller.addNode(payload)
        case "getNode":
            try {
                const result = await controller.getNodes();
                console.log(result)
            } catch (error){
                console.error(error);
            }
        case "testnodo":
            console.log(topic)
            console.log(message.toString())
            console.log("FUNCIONA CTM")
    }
})

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

})

router.get('/all', async (req : Request, res : Response) => {
    try {
        const result : Node[] | null = await controller.getNodes();
        response.success(req, res, result);
    } catch (error){
        console.error(error);
        response.error(req, res, 'Invalid Information', 500);
    }
});

router.get('/:id', async (req : Request, res : Response) => {
    const id : string = req.params['id'];
    
    try{
        const result: Node | null = await controller.getNode(id);
        response.success(req, res, result);
    } catch(error){
        console.error(error);
        response.error(req, res, 'Invalid Information', 500);
    }
});
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


router.patch('/:id', async (req: Request, res: Response) => {
    const id : string = req.params['id'];
    const Node : Partial<Node> = req.body;
    try{
        const result: Node | null = await controller.updateNode(id, Node);
        response.success(req, res, result);
    } catch(error){
        console.error(error);
        response.error(req, res, 'Invalid Information', 500);
    }
})

router.delete('/delete/:id', async (req: Request, res: Response) => {
    const id : string = req.params['id'];
    try{
        const result = await controller.deleteNode(id);
        response.success(req, res, result);
    } catch(error){
        console.error(error);
        response.error(req, res, 'Invalid Information', 500);
    }
})

export default router;