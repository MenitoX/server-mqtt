import { Document } from "mongoose";

export interface Sensor extends Document {
    _id?: string;
    type: string;
    unit: string;
    stat: number;
    blueprint: string; // model conflicts with Document interface
    data: number;
    number: number;
    modifiedAt: Date;
    createdAt: Date;
}
