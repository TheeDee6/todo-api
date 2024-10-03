import { Schema, model } from "mongoose";

const todoSchema = new Schema({
    title: {type: String, required: true, unique: false},
    completed: {type: Boolean, default: false}
});

export const TodoModel = model('Todo', todoSchema);