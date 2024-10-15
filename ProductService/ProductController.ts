import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Product } from '../Models/Product';

export const createProduct = async (req: Request, res: Response): Promise<Response<any>> => {
  const { name, description, price } = req.body;

  const product = new Product();
  product.name = name;
  product.description = description;
  product.price = price;

  const productRepository = getRepository(Product);
  await productRepository.save(product);

  return res.status(201).json(product);
};

export const getProduct = async (req: Request, res: Response): Promise<Response<any>> => {
  const productId = parseInt(req.params.id, 10);  // Convert string to number

  const productRepository = getRepository(Product);
  const product = await productRepository.findOneBy({ id: productId });  // Use findOneBy

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  return res.json(product);
};


export const deleteProduct = async (req: Request, res: Response): Promise<Response<any>> => {
  const productId = parseInt(req.params.id, 10);  // Convert string to number

  const productRepository = getRepository(Product);

  // Using findOneBy with object
  const product = await productRepository.findOneBy({ id: productId });  

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  await productRepository.remove(product);
  return res.status(204).send();
};

export const listProducts = async (req: Request, res: Response): Promise<Response<any>> => {
  const productRepository = getRepository(Product);
  const products = await productRepository.find();
  return res.json(products);
};