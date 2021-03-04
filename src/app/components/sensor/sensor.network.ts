import controller from "./sensor.controller";
import { Sensor } from "../../models/sensor.model";
import express,{Response, Request, Router} from "express";
import response from "../../modules/response.module";

const router : Router = express.Router();

router.get('/all', async (req : Request, res : Response) => {
    try {
        const result : Sensor[] | null = await controller.getSensors();
        response.success(req, res, result);
    } catch (error){
        console.error(error);
        response.error(req, res, 'Invalid Information', 500);
    }
});

router.get('/:id', async (req : Request, res : Response) => {
    const id : string = req.params['id'];
    
    try{
        const result: Sensor | null = await controller.getSensor(id);
        response.success(req, res, result);
    } catch(error){
        console.error(error);
        response.error(req, res, 'Invalid Information', 500);
    }
});

router.post('/', async (req: Request, res : Response) => {
    const Sensor : Sensor = req.body;
    try{
        const result: Sensor = await controller.addSensor(Sensor);
        response.success(req, res, result, 201);
    } catch(error){
        console.error(error);
        response.error(req, res , 'Invalid Information', 500);
    }
})

router.patch('/:id', async (req: Request, res: Response) => {
    const id : string = req.params['id'];
    const Sensor : Partial<Sensor> = req.body;
    try{
        const result: Sensor | null = await controller.updateSensor(id, Sensor);
        response.success(req, res, result);
    } catch(error){
        console.error(error);
        response.error(req, res, 'Invalid Information', 500);
    }
})

router.delete('/delete/:id', async (req: Request, res: Response) => {
    const id : string = req.params['id'];
    try{
        const result = await controller.deleteSensor(id);
        response.success(req, res, result);
    } catch(error){
        console.error(error);
        response.error(req, res, 'Invalid Information', 500);
    }
})

export default router;