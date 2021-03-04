import { Document } from "mongoose";

export interface Node extends Document {
    _id?:string;
    number: number;
    syncSignal: boolean;
    ds: number;
    lastSync: Date;
    modifiedAt: Date;
    createdAt: Date;
}

