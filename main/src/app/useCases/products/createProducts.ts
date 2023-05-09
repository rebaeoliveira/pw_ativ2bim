import { Request, Response } from 'express';
import { Product } from '../../models/Product';

export async function createProduct(req: Request, res: Response) {
	//res.send('Ok post category');
    const { _id, nome, sobrenome, email, datanascimento, matricula} = req.body;
	const aluno = await Product.create({
        _id,
        nome,
        sobrenome,
        email,
        datanascimento,
        matricula
    });
}