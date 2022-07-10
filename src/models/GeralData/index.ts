export class GeralDataModel {
    usuarios_registrados: number;
    inscricoes_realizadas: number;
    cursos_ativos: number;
    direito_certificacao: number;
    investimento_medio_curso: string;
    investimento_medio_aluno: string;

    constructor() {
        this.usuarios_registrados = 0;
        this.inscricoes_realizadas = 0;
        this.cursos_ativos = 0;
        this.direito_certificacao = 0;
        this.investimento_medio_aluno = "";
        this.investimento_medio_curso = "";
    }
}