import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import AlunoModel from './aluno';

const app = express();
const port = 3000;

app.use(express.json());

// Rota para cadastrar um aluno
app.post('/alunos', async (req: Request, res: Response) => {
  try {
    const aluno = new AlunoModel(req.body);
    await aluno.save();
    res.status(201).json(aluno);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao cadastrar aluno.' });
  }
});

// Rota para consultar todos os alunos
app.get('/alunos', async (_req: Request, res: Response) => {
  try {
    const alunos = await AlunoModel.find();
    res.json(alunos);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao consultar alunos.' });
  }
});

  // Conectar ao banco de dados e iniciar o servidor
mongoose
.connect('mongodb://localhost:27017/alunos', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
  });
})
.catch((error) => {
  console.error('Erro ao conectar ao banco de dados:', error);
});
