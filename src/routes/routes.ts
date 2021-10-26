import {Request, Response, Router} from "express";
import Place from "../config/models/place";

class Routes {
    router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    public async get(request: Request, response: Response): Promise<any> {
        const place = await Place.find()
        return response.json({error: false, places: place});
    }

    public async post(request: Request, response: Response): Promise<any> {
        const {name, desc, long, lat} = request.body;
        const newPlace = new Place({name, desc, long, lat})
        const place = await newPlace.save();
        return response.json({error: false, message: place})
    }

    public async put(request: Request, response: Response): Promise<any> {
        await Place.findOneAndUpdate({ _id: request.body._id }, request.body)
        const place = await Place.findOne({ _id: request.body._id })
        return response.json({error: false, message: place})
    }

    public async delete(request: Request, response: Response): Promise<any> {
        return response.json({desc: "DELETE"})
    }

    routes() {
        this.router.get('/places', this.get);
        this.router.post('/places', this.post);
        this.router.put('/places', this.put);
        this.router.delete('/places', this.delete);
    }
}

const routes = new Routes();
export default routes.router
