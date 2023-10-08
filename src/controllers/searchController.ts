import { Request, Response } from 'express';
import { Pet } from '../models/Pet';
import { createMenuObject } from '../helpers/createMenuObject';

export const search = (req: Request, res: Response) => {
    let query: string = req.query.q as string;

    if(!query) {
        res.redirect('/');
        return;
    }

    res.render('pages/page', {
        query,
        pets: Pet.getFromName(query),
        menu: createMenuObject(''),
    })
}