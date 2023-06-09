import React, { useState, useEffect } from 'react';
import { ControleLivros } from './Controle/ControleLivros'; 
import { ControleEditora } from './Controle/ControleEditora';

let controleLivro = new ControleLivros();
let controleEditora = new ControleEditora();

function LinhaLivro(props) {
    let livro = props.livro;
    let nomeEditora = controleEditora.getNomeEditora(livro.codEditora);

    return (
        <tr>
            <td >{livro.titulo} <button className="btn btn-danger mt-2 d-block" onClick={() => props.excluir(livro.codigo)}>Excluir</button></td>
            <td>{livro.resumo}</td>
            <td>{nomeEditora}</td>
            <td>
                <ul>
                {livro.autores.map((autor, index) => (
                    <li key={index}>{autor}</li>
                ))}
                </ul>         
            </td>
        </tr>
    );
}

export default function LivroLista() {
    let [livros, setLivros] = useState([]);
    let [carregado, setCarregado] = useState(false);

    useEffect(() => {
        if (!carregado) {
            setLivros(controleLivro.obterLivros());
            setCarregado(true);
        }
    }, [carregado]);

    let excluir = (codigo) => {
        controleLivro.excluir(codigo);
        setCarregado(false);
    };

    return (
        <div>
            <main className="container">
                <h1 className="my-4">Catálogo de Livros</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th className='bg-dark text-white' scope="col">Título</th>
                            <th className='bg-dark text-white' scope="col">Resumo</th>
                            <th className='bg-dark text-white' scope="col">Editora</th>
                            <th className='bg-dark text-white' scope="col">Autores</th>
                        </tr>
                    </thead>
                    <tbody>
                        {livros.map((livro) => 
                            <LinhaLivro key={livro.codigo} livro={livro} excluir={() => excluir(livro.codigo)}/>  
                            )}
                    </tbody>
                </table>
            </main>
        </div>
    );
}
