import { Schema, model, Document } from 'mongoose';

interface IAluno extends Document {
  _id: string;
  nome: string;
  email: string;
  dataNascimento: Date;
  matricula: number;
}

const AlunoSchema = new Schema<IAluno>({
  _id: Schema.Types.ObjectId,
  nome: { type: String, required: true },
  email: { type: String, required: true },
  dataNascimento: { type: Date, required: true },
  matricula: { type: Number, required: true },
});

const AlunoModel = model<IAluno>('Aluno', AlunoSchema);

export default AlunoModel;