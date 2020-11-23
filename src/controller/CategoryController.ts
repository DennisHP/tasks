import { getRepository } from 'typeorm'
import { Category } from '../entity/Category'
import { Request, Response } from 'express'

export const getCategories = async (request: Request, response: Response) => {
    const categories = await getRepository(Category).find();
    return response.json(categories);
};

export const saveCategories = async (request: Request, response: Response) => {
    const categoreis = await getRepository(Category).save(request.body)
    response.json(categoreis);
};

export const getCategory = async (request: Request, response: Response) => {
    const { id } = request.params
    const category = await getRepository(Category).findOne(id)
    return response.json(category)
}
export const updateCategory = async (request: Request, response: Response) => {
    const { id } = request.params
    const category = await getRepository(Category).update(id, request.body)

    if (category.affected === 1) {
        const categoryUpdated = await getRepository(Category).findOne(id)
        return response.json(categoryUpdated)
    }
    return response.status(404).json({ message : ' category not found! '})        
}
export const destoyCategory = async (request: Request, response: Response) => {
    const { id } = request.params
    const category = await getRepository(Category).delete(id)
    
    if (category.affected === 1) {
        const categoryDeleted = await getRepository(Category).findOne(id)
        return response.json({ message : ' Category Deleted! '})
    }
    return response.status(404).json({ message : 'Category not found!'})
}
