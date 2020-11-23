import { getRepository } from 'typeorm'
import { Products } from '../entity/Products'
import { Request, Response } from 'express'

export const getProducts = async (request: Request, response: Response) => {
    const products = await getRepository(Products).find();
    return response.json(products)
};
export const saveProducts = async (request: Request, response: Response) => {
    const products = await getRepository(Products).save(request.body)
    response.json(products)
};
export const getProduct = async (request: Request, response: Response) => {
    const { id } = request.params
    const product = await getRepository(Products).findOne(id)
    return response.json(product)
};

export const updateProduct = async (request: Request, response: Response) => {
    const { id } = request.params
    const product = await getRepository(Products).update(id, request.body)

    if (product.affected === 1) {
        const productUpdated = await getRepository(Products).findOne(id)
        return response.json(productUpdated)
    }
    return response.status(404).json({ message: 'product not found!' })
};

export const destoyProduct = async (request: Request, response: Response) => {
    const { id } = request.params
    const product = await getRepository(Products).delete(id)

    if (product.affected === 1) {
        const productDeleted = await getRepository(Products).findOne(id)
        return response.json({ message: 'Product Deleted!' })
    }
    return response.status(404).json({ message: 'Product not Found!' })
};
