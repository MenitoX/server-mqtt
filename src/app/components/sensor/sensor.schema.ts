import {model, Schema, Document} from "mongoose";
import { Sensor } from "../../models/sensor.model";


const definition: Partial<Record< keyof Sensor, any>> = {
    type:       {type : String, required:true },
    unit:       {type : String, required:true },
    stat:       {type : Number, default:0     },
    blueprint:  {type : String, required:true }, // model conflicts with Document interface
    data:       {type : Number, default:0     },
    number:     {type : Number, required:true },
    modifiedAt: {type : Date                  },
    createdAt:  {type : Date                  }
};

const schema : Schema<Sensor> = new Schema(definition);


export default model<Sensor & Document>('Sensor',schema,'Sensors');