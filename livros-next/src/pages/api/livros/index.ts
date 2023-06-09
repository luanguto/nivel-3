import { ControleLivros } from '../../../../classes/controle/ControleLivros';
export const controleLivro = new ControleLivros();
import { NextApiRequest, NextApiResponse } from 'next';

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: NextApiRequest, res: NextApiResponse) => { 
    if(req.method === 'GET'){
        const livros = controleLivro.obterLivros();
        res.status(200).json(livros);
    }
    else if(req.method === 'POST'){
        const livro = req.body;
        controleLivro.incluir(livro);
        res.status(200).json({ message: "Livro adicionado com sucesso" });
    }
    else {
        res.setHeader("Allow", ["GET", "POST"]);
        res.status(405).json({ message: `Metodo ${req.method} não permitido.` });
    }
    
    
}
