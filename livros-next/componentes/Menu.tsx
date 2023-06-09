import React from 'react';
import Link from 'next/link';

export const Menu: React.FC = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
            <div className="navbar-dark">
                <ul className="text-white mr-auto list-inline">
                    <li className="mt-2 ms-2 list-inline-item" >
                        <Link className="nav-link " href="/"> Página Inicial</Link>
                    </li>
                    <li className="list-inline-item">
                        <Link className="nav-link" href="/LivroLista">Lista de Livros</Link>
                    </li>
                    <li className="list-inline-item">
                        <Link className="nav-link" href="/LivroDados">Dados do Livro</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
