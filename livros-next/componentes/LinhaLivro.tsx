import React from 'react';
import { Livro } from '../classes/modelo/Livros'; 
import { ControleEditora } from '../classes/controle/ControleEditora';

let controleEditora = new ControleEditora();

interface LinhaLivroProps {
    livro: Livro;
    excluir: () => void;
}

export const LinhaLivro: React.FC<LinhaLivroProps> = (props) => {
    const { livro, excluir } = props;
    
    return (
        <tr>
            <td>{livro.titulo}<button className="btn btn-danger mt-2 d-block" onClick={excluir}>Excluir</button></td>
            <td>{livro.resumo}</td>
            <td>{controleEditora.getNomeEditora(livro.codEditora)}</td>
            <td>
                 <ul>
                 {livro.autores.map((autor, index) => (
                    <li key={index}>{autor}</li>
                ))}
                </ul>
                </td>
                
        </tr>
    );
};
