import { NextApiRequest, NextApiResponse } from 'next';
import { Editora } from '../../../../classes/modelo/Editora';
let editoras: Editora[] = []; 

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const {
        query: { codEditora },
        method,
    } = req;

    switch (method) {
        case 'GET':
            const editora = editoras.find(editora => editora.codEditora === Number(codEditora));
            if (!editora) {
                res.status(404).json({ message: `Editora com código ${codEditora} não encontrada.` });
            } else {
                res.status(200).json(editora);
            }
            break;
        case 'DELETE':
            editoras = editoras.filter(editora => editora.codEditora !== Number(codEditora));
            res.status(200).json({ message: `Editora com código ${codEditora} excluída com sucesso.` });
            break;
        default:
            res.setHeader('Allow', ['GET', 'DELETE'])
            res.status(405).end(`Método ${method} não permitido`)
    }
}
