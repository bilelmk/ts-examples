import { RequestHandler } from "express";
import { Todo } from "../models/todo.model";

const todos: Todo[] = [];

export const save: RequestHandler = (req, res, next) => {
    let todo = new Todo(Math.random().toString(), req.body.text);
    todos.push(todo);
    res.status(201).json(todo);
}

export const findAll: RequestHandler = (req, res, next) => {
    res.status(200).json(todos);
}


export const update: RequestHandler<{id: string}> = (req, res, next) => {
    let id = req.params.id;
    let index = todos.findIndex(todo => todo.id == id);
    if(index < 0) {
        throw new Error("todo not found !")
    } else {
        todos[index] = new Todo(todos[index].id , req.body.text)
        res.status(200).json(todos[index] );
    }
}


export const remove: RequestHandler<{id: string}> = (req, res, next) => {
    let id = req.params.id;
    let index = todos.findIndex(todo => todo.id == id);
    if(index < 0) {
        throw new Error("todo not found !")
    } else {
        todos.splice(index, 1)
        res.status(200).json({message : "deleted !"} );
    }
}
