import { Router, Request, Response } from 'express'
import { getCategories, saveCategories, getCategory, updateCategory, destoyCategory } from './controller/CategoryController'
import { getProducts, saveProducts, getProduct, updateProduct, destoyProduct } from './controller/ProductsController'
import { destoyUser, getUser, getUsers, saveUser, updateUser } from './controller/UserController'
const routes = Router()

routes.get('/', (request: Request, response: Response) => {
    return response.json({ message :  'hello World 2!'})
})

routes.get('/users', getUsers);
routes.post('/users', saveUser);
routes.get('/users/:id', getUser);
routes.put('/users/:id', updateUser);
routes.delete('/users/:id', destoyUser);

routes.get('/products', getProducts);
routes.get('/products/:id', getProduct);
routes.post('/products', saveProducts);
routes.put('/products/:id', updateProduct);
routes.delete('/products/:id', destoyProduct);

routes.get('/categories', getCategories);
routes.get('/categories/:id', getCategory);
routes.post('/categories', saveCategories);
routes.put('/categories/:id', updateCategory);
routes.delete('/categories/:id', destoyCategory);

export default routes