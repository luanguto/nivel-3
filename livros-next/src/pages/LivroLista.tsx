import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import Head from 'next/head';
import { Menu } from '../../componentes/Menu';
import { Livro } from '../../classes/modelo/Livros';
import { LinhaLivro } from '../../componentes/LinhaLivro';

const baseURL = "http://localhost:3000/api/livros";

const LivroLista = () => {
  const [livros, setLivros] = useState<Livro[]>([]);
  const [carregado, setCarregado] = useState(false);

  const obterLivros = async () => {
    const resposta = await fetch(baseURL);
    const dados = await resposta.json();
    setLivros(dados);
    setCarregado(true);
  }

  const excluirLivro = async (codigo: number) => {
    const resposta = await fetch(`${baseURL}/${codigo}`, {
      method: 'DELETE'
    });
    return resposta.ok;
  }

  const excluir = async (codigo: number) => {
    const sucesso = await excluirLivro(codigo);
    if (sucesso) {
      setCarregado(false);
    }
  }

  useEffect(() => {
    if (!carregado) {
      obterLivros().then(() => setCarregado(true));
    }
  }, [carregado]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Catálogo de Livros</title>
      </Head>
      <Menu />
      <main className={styles.main}>
        <div className='container justify-content-center'>
          <h1 className={styles.title}>Catálogo de Livros</h1>
          <table className='table table-striped table-bordered table-hover'>
            <thead className="thead-dark">
              <tr>
                <th className='bg-dark text-white'>Título</th>
                <th className='bg-dark text-white'>Resumo</th>
                <th className='bg-dark text-white'>Editora</th>
                <th className='bg-dark text-white'>Autores</th>
              </tr>
            </thead>
            <tbody>
              {livros.map((livro) => (
                <LinhaLivro
                  key={livro.codigo}
                  livro={livro}
                  excluir={() => excluir(livro.codigo)}
                />
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  )
}

export default LivroLista;