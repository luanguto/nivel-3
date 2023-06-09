import { NextApiRequest, NextApiResponse } from 'next';
import { ControleLivros } from '../../../../classes/controle/ControleLivros';

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: NextApiRequest, res: NextApiResponse) => {


  const { codigo } = req.query;

  if(req.method === 'DELETE'){
    try {
      const Livro = new ControleLivros();
      Livro.excluir(Number(codigo));
      res.status(200).json({ mensagem: "Livro excluído com sucesso" });
    } catch (e) {
      res.status(500).json({ mensagem: `Algo está errado` });
    }
  }
  else {
    res.setHeader("Allow", ["DELETE"]);
    res.status(405).json({ mensagem: `Método ${req.method} não permitido.` });
  }
}
