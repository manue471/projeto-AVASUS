import { CreditsModel } from "../Credits";

export class CoursesModel {
    id?: number;
    categoria: string;
    capa: string;
    titulo: string;
    parceiros: string;
    resumo: string;
    duracao: string;
    matriculados: number;
    criado_em: string;
    avaliacao: string | number;
    numero_avaliacoes: number;
    sobre: string;
    objetivo_geral: string;
    objetivo_especifico: string;
    conteudo: string[];
    creditos: CreditsModel[];

    constructor() {
        this.id = 0;
        this.categoria = "";
        this.capa = "";
        this.titulo = "";
        this.parceiros = "";
        this.resumo = "";
        this.duracao = "";
        this.matriculados = 0;
        this.criado_em = "";
        this.avaliacao = 0;
        this.numero_avaliacoes = 0;
        this.sobre = "";
        this.objetivo_geral = "";
        this.objetivo_especifico = "";
        this.conteudo = [];
        this.creditos = Array(new CreditsModel());
    }
}