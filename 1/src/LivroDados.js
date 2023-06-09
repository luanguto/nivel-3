// LivroDados.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ControleLivros } from './Controle/ControleLivros';
import { ControleEditora } from './Controle/ControleEditora';

const controleLivro = new ControleLivros();
const controleEditora = new ControleEditora();

function LivroDados() {
  const opcoes = controleEditora.getEditoras().map(editora => ({value: editora.codEditora, text: editora.nome}));

  const [titulo, setTitulo] = useState("");
  const [resumo, setResumo] = useState("");
  const [autores, setAutores] = useState("");
  const [codEditora, setCodEditora] = useState(opcoes[0].value);

  const navigate = useNavigate();

  function tratarCombo(e) {
    setCodEditora(Number(e.target.value));
  }

  function incluir(e) {
    e.preventDefault();
    const livro = {
      codigo: 0,
      titulo: titulo,
      resumo: resumo,
      autores: autores.split('\n'),
      codEditora: codEditora
    };
    controleLivro.incluir(livro);
    navigate('/');
  }

  return (
    <main className='container'>
      <h1 className='mt-3'>Dados do Livro</h1>
      <form onSubmit={incluir}>
      <div className='mb-3'>
        <label className='form-label' >Titulo:</label>
        <input type="text" className='form-control' value={titulo} onChange={(e) => setTitulo(e.target.value)} />
        </div>
        <div className='mb-3'>
        <label className='form-label'>Resumo: </label>
        <textarea value={resumo} className=' form-control' onChange={(e) => setResumo(e.target.value)} />
        </div>
        <div className='mb-3'>
        <label className='form-label'>Editora: </label>
        <select className='form-control' value={codEditora} onChange={tratarCombo}>
            {opcoes.map((opcao, index) => <option  key={index} value={opcao.value}>{opcao.text}</option>)}
          </select>
        </div>
        <div className='mb-3'>
        <label className='form-label '>Autores(1 por linha) </label>
        <textarea value={autores} className=' form-control' onChange={(e) => setAutores(e.target.value)} ></textarea>
        <button type="submit" class="btn btn-primary mt-3">Salvar Dados</button>
       </div>
      </form>
    </main>
  );
}

export default LivroDados;
