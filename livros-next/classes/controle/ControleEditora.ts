import { Editora } from "../modelo/Editora";

let editoras: Editora[] = [
    new Editora(1, 'Bookman; 6ª edição (29 agosto 2012)'),
    new Editora(2, 'Novatec Editora; 2ª edição (18 março 2022)'),
    new Editora(3, 'Novatec Editora; 2ª edição (11 março 2019)'), 
];

export class ControleEditora{
    static getNomeEditora(codEditora: number) {
        throw new Error('Method not implemented.');
    }
    getEditoras() {
        return editoras;
    }


    getNomeEditora(codEditora: number) {
        let editora = editoras.filter(editora => editora.codEditora === codEditora)[0];
        return editora ? editora.nome : '';
    }
}