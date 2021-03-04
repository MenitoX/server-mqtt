import repository from "./sensor.repository";
import { Sensor } from "../../models/sensor.model";

function addSensor(Sensor : Sensor): Promise<Sensor>{
    Sensor.createdAt = new Date;
    Sensor.modifiedAt = new Date;
    return repository.addSensor(Sensor)
}

function deleteSensor(id : string){
    return repository.deleteSensor(id)
}

function getSensor(id : string):Promise<Sensor | null>{
    return repository.getSensor(id)
}

function getSensors():Promise<Sensor[] | null>{
    return repository.getSensors()
}

function updateSensor(id : string, Sensor:Partial<Sensor>):Promise<Sensor|null>{
    Sensor.modifiedAt = new Date;
    return repository.updateSensor(id, Sensor)
}

export default{
    addSensor,
    deleteSensor,
    getSensor,
    getSensors,
    updateSensor
}