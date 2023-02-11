import express, { Request, Response, NextFunction} from "express";
import { json } from "body-parser";
import todoRoute from "./routes/todo.route";

const app = express();

app.use(json());

app.use('/todos', todoRoute)

// error handler route
app.use((err: Error, req:Request, res:Response, next: NextFunction) => {
    res.status(500).json(err)
})

app.listen(3000 , () => console.log("server is running on port 3000"));
