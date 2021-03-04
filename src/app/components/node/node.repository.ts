import { Node } from "../../models/node.model";
import model from "./node.schema"

function addNode(Node : Node): Promise<Node>{
    return model.create<Node>(Node)
}

async function deleteNode(id : string){
    return model.findByIdAndRemove({_id : id})
}
    
async function getNode(id : string):Promise<Node | null>{
    return model.findOne({_id : id})
}

async function getNodes():Promise<Node[] | null>{
    return model.find()
}

async function updateNode(id : string, node:Partial<Node>):Promise<Node|null>{
    return model.findOneAndUpdate({_id : id}, node)
}

export default{
    addNode,
    deleteNode,
    getNode,
    getNodes,
    updateNode
}