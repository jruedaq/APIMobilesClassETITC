import express from "express";
import morgan from "morgan";
import compression from "compression";
import cors from "cors";
import routes from "./routes/routes";

class Server {
    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void {
        this.app.set("PORT", 4000);
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(cors());
        this.app.use(compression());
    }

    routes(): void {
        this.app.use("/v1/app", routes);
    }

    public start(): void {
        this.app.listen(this.app.get("PORT"), () => {
            console.log("Server is listening on port  ", this.app.get("PORT"));
        });
    }
}

export {Server};