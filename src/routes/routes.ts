import {Request, Response, Router} from "express";

class Routes {
    router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    public async get(request: Request, response: Response): Promise<any> {
        return response.json({desc: "GET"})
    }

    public async post(request: Request, response: Response): Promise<any> {
        return response.json({desc: "POST"})
    }

    public async put(request: Request, response: Response): Promise<any> {
        return response.json({desc: "PUT"})
    }

    public async delete(request: Request, response: Response): Promise<any> {
        return response.json({desc: "DELETE"})
    }

    routes() {
        this.router.get('', this.get);
        this.router.post('', this.post);
        this.router.put('', this.put);
        this.router.delete('', this.delete);
    }
}

const routes = new Routes();
export default routes.router