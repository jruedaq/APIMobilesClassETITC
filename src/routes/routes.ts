import {Request, Response, Router} from "express";
import Place from "../config/models/place";
import User from "../config/models/user";

class Routes {
    router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    public async getPlace(request: Request, response: Response): Promise<any> {
        const place = await Place.find()
        return response.json({error: false, places: place});
    }

    public async postPlace(request: Request, response: Response): Promise<any> {
        const {name, desc, long, lat} = request.body;
        const newPlace = new Place({name, desc, long, lat})
        const place = await newPlace.save();
        return response.json({error: false, message: place})
    }

    public async putPlace(request: Request, response: Response): Promise<any> {
        await Place.findOneAndUpdate({ _id: request.body._id }, request.body)
        const place = await Place.findOne({ _id: request.body._id })
        return response.json({error: false, message: place})
    }

    public async deletePlace(request: Request, response: Response): Promise<any> {
        return response.json({desc: "DELETE"})
    }

    public async getUser(request: Request, response: Response): Promise<any> {
        const user = await User.find()
        return response.json({error: false, user: user});
    }

    public async postUser(request: Request, response: Response): Promise<any> {
        const {name, email, password} = request.body;
        const newUser = new User({name, email, password})
        const user = await newUser.save();
        return response.json({error: false, message: user})
    }

    public async putUser(request: Request, response: Response): Promise<any> {
        await User.findOneAndUpdate({ _id: request.body._id }, request.body)
        const user = await User.findOne({ _id: request.body._id })
        return response.json({error: false, message: user})
    }

    public async deleteUser(request: Request, response: Response): Promise<any> {
        return response.json({desc: "DELETE"})
    }

    routes() {
        this.router.get('/places', this.getPlace);
        this.router.post('/places', this.postPlace);
        this.router.put('/places', this.putPlace);
        this.router.delete('/places', this.deletePlace);

        this.router.get('/users', this.getUser);
        this.router.post('/users', this.postUser);
        this.router.put('/users', this.putUser);
        this.router.delete('/users', this.deleteUser);
    }
}

const routes = new Routes();
export default routes.router
