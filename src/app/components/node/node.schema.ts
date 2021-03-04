import {model, Schema, Document} from "mongoose";
import { Node } from "../../models/node.model";


const definition: Partial<Record< keyof Node, any>> = {
    number:     {type : Number, required:true },
    syncSignal: {type : Boolean, default:false},
    ds:         {type : Number, required:true },
    lastSync:   {type : Date                  },
    modifiedAt: {type : Date                  },
    createdAt:  {type : Date                  }
};

const schema : Schema<Node> = new Schema(definition);


export default model<Node & Document>('Node',schema,'Nodes');