import express, { type Request, type Response } from 'express';
import Manga from './services/Manga';
import cors from 'cors';

const app = express();

app.use(cors())
app.use(express.json())

app.get('/', async (_: Request, res: Response) => {
    const content = await Manga.chapters();
    res.status(200).json({ data: content });
})

app.listen(Bun.env.PORT || 3000, () => {
    console.log('Servidor ligado com sucesso!')
})