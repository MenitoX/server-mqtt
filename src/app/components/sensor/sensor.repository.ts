import { Sensor } from "../../models/sensor.model";
import model from "./sensor.schema"

function addSensor(Sensor : Sensor): Promise<Sensor>{
    return model.create<Sensor>(Sensor)
}

async function deleteSensor(id : string){
    return model.findByIdAndRemove({_id : id})
}
    
async function getSensor(id : string):Promise<Sensor | null>{
    return model.findOne({_id : id})
}

async function getSensors():Promise<Sensor[] | null>{
    return model.find()
}

async function updateSensor(id : string, sensor:Partial<Sensor>):Promise<Sensor|null>{
    return model.findOneAndUpdate({_id : id}, sensor)
}

export default{
    addSensor,
    deleteSensor,
    getSensor,
    getSensors,
    updateSensor
}