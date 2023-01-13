import { Router, Request, Response } from 'express';
import { Shop } from "./shop";

let shops: Shop[] = [
    { id: 1, name: "Pepper's Pizza", rating: 4.5 },
    { id: 2, name: "Clive's Chives", rating: 3.4 },
    { id: 3, name: "Betty's Brews", rating: 4.3 },
    { id: 4, name: "Sylvester's Shoes", rating: 3.8 },
    { id: 5, name: "Teddy's Tunes", rating: 4.7 }
];

export const itemRouter = Router();

itemRouter.get('/', async (req:Request, res:Response) : Promise<Response> => {

    if (req.query.minRating !== undefined) {
        let overRated = shops.filter(x => x.rating >= Number(req.query.minRating))

    return res.status(200).json(overRated)
    }


    else {
    return res.status(200).json(shops)
    }
})

itemRouter.get('/:id', async (req:Request, res:Response) : Promise<Response> => {
            let itemIWantToFind = shops.find((x) => x.id === Number(req.params.id));

        if(itemIWantToFind === undefined) {
            return res.status(404).send(`"error": "Shop not found: ${req.params.id}"`)
        }

        else {
            return res.status(200).json(itemIWantToFind)
        }
        
    });

itemRouter.post('/', async (req:Request, res:Response) : Promise<Response> => {
    let newShop:Shop = {
        id: getNextId(),
        name: String(req.body.name),
        rating: Number(req.body.rating)
    }
    shops.push(newShop)

    return res.status(201).json(newShop)

})

itemRouter.put('/:id', async (req:Request, res:Response) : Promise<Response> => {
    let shopFound = shops.find(x => x.id === Number(req.params.id));

    if(shopFound !== undefined) {
        shopFound.name = String(req.body.name)
        shopFound.rating = Number(req.body.rating)

        return res.status(200).json(shopFound)
    }

    else {
        return res.status(404).send('ID Not Found')
    }
})

itemRouter.delete('/:id', async (req:Request, res:Response) : Promise<Response> => {
    let shopToDelete = shops.find(x => x.id === Number(req.params.id))

        if(shopToDelete !== undefined) {

            shops = shops.filter(x => x.id !== Number(req.params.id))
            return res.status(204).send("Deleted")
        }

        else {
            return res.status(404).send("ID Not Found")
        }

})



function getNextId() {
    return Math.max(...shops.map((x) => x.id)) +1;
}