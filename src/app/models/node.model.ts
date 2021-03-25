import { Document } from "mongoose";

export interface Node extends Document {
    number: number;
    syncSignal: boolean;
    ds: number;
    lastSync: Date;
    modifiedAt: Date;
    createdAt: Date;
}

