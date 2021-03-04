import repository from "./node.repository";
import { Node } from "../../models/node.model";

function addNode(Node : Node): Promise<Node>{
    Node.createdAt = new Date;
    Node.modifiedAt = new Date;
    return repository.addNode(Node)
}

function deleteNode(id : string){
    return repository.deleteNode(id)
}

function getNode(id : string):Promise<Node | null>{
    return repository.getNode(id)
}

function getNodes():Promise<Node[] | null>{
    return repository.getNodes()
}

function updateNode(id : string, Node:Partial<Node>):Promise<Node|null>{
    Node.modifiedAt = new Date;
    return repository.updateNode(id, Node)
}

export default{
    addNode,
    deleteNode,
    getNode,
    getNodes,
    updateNode
}