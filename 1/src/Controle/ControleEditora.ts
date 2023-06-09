import { Editora } from "../Modelo/Editora";

let editoras: Editora[] = [
    new Editora(1, 'Bookman'),
    new Editora(2, 'Alta Books'),
    new Editora(3, 'Novatec Editora'), 
];

export class ControleEditora{
    getEditoras() {
        return editoras;
    }


    getNomeEditora(codEditora: number) {
        let editora = editoras.filter(editora => editora.codEditora === codEditora)[0];
        return editora ? editora.nome : '';
    }
}