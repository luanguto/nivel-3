import { NextApiRequest, NextApiResponse } from 'next';
import { ControleEditora } from '../../../../classes/controle/ControleEditora';

export const controleEditora = new ControleEditora();

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'GET') {
      const editoras = controleEditora.getEditoras();
      res.status(200).json(editoras);
    } else {
      res.status(405).end();
    }
  } catch (e) {
    res.status(500).json({ erro: 'Ocorreu um erro no servidor' });
  }
};
