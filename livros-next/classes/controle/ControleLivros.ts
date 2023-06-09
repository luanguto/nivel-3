import { Livro } from "../modelo/Livros";   
let livros: Livro[] = [
    
    new Livro(1,1, 'JavaScript - O Guia Definitivo', 'Referência completa para programadores, JavaScript: O guia definitivo fornece uma ampla descrição da linguagem JavaScript básica e das APIs JavaScript do lado do cliente definidas pelos navegadores Web. Em sua 6ª edição, cuidadosamente reescrita para estar de acordo com as melhores práticas de desenvolvimento Web atuais, abrange ECMAScript 5 e HTML5 e traz novos capítulos que documentam jQuery e JavaScript do lado do servidor. Recomendado para programadores experientes que desejam aprender a linguagem de programação da Web e para programadores JavaScript que desejam ampliar seus conhecimentos e dominar a linguagem, este é o guia do programador e manual de referência de JavaScript completo e definitivo.', ['David Flanagan']),

    new Livro(2,2, 'Lógica de Programação e Algoritmos com JavaScript',
     'Os conteúdos abordados em Lógica de Programação e Algoritmos são fundamentais a todos aqueles que desejam ingressar no universo da Programação de Computadores. Esses conteúdos, no geral, impõem algumas dificuldades aos iniciantes. Neste livro, o autor utiliza sua experiência de mais de 15 anos em lecionar a disciplina de Algoritmos em cursos de graduação, para trabalhar o assunto passo a passo. Cada capítulo foi cuidadosamente planejado a fim de evitar a sobrecarga de informações ao leitor, com exemplos e exercícios de fixação para cada assunto....', 
     ['Edécio Fernando Iepsen ']),

    new Livro(3,3, 'Estruturas de Dados e Algoritmos com JavaScript: Escreva um Código JavaScript Complexo e Eficaz Usando a Mais Recente ECMAScript',
     'Uma estrutura de dados é uma maneira particular de organizar dados em um computador com o intuito de usar os recursos de modo eficaz. As estruturas de dados e os algoritmos são a base de todas as soluções para qualquer problema de programação. Com este livro, você aprenderá a escrever códigos complexos e eficazes usando os recursos mais recentes da ES 2017.', ['Loiane Groner']),
];

export class ControleLivros {
    static excluir(arg0: number) {
        throw new Error('Method not implemented.');
    }
    obterLivros(){
        return livros;
    }

    incluir(livro: Livro){
        let codigoMaximo = Math.max(...livros.map(livro => livro.codigo));
        livro.codigo = codigoMaximo + 1;
        livros.push(livro);
    }

    excluir(codigo: number) {
        let indice = livros.findIndex(livro => livro.codigo === codigo);
        if (indice >= 0) {
            livros.splice(indice, 1);
        }
    }
}