import { TodoModel } from "../models/todo.js";

export const addTodo = async (req, res, next) => {
    try {
        // Validate user input
        // Write todo to database
        console.log(req.body);
        await TodoModel.create(req.body);
        // Respond to request
        res.status(201).json('Todo was added!');
    } catch (error) {
        next(error);
    }
}

export const getTodos = async (req, res, next) => {
    try {
        //Fetch todos from database
        const todos = await TodoModel.find();
        //Return response
        res.status(200).json(todos);
    } catch (error) {
        
    }
}

export const updatedTodo = (req, res, next) => {
    res.json('Todo update!');
}

export const deleteTodo = (req, res, next) => {
    res.json('Todo deleted!');
}