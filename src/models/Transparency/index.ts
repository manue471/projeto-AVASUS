import { GeralDataModel } from "../GeralData";
import { UsersByCourseModel } from "../UsersByCourse";
import { UsersByStateModel } from "../UsersByState";

export class TransparencyModel {
    dados_gerais: GeralDataModel;
    usuarios_por_curso: UsersByCourseModel[];
    usuarios_por_estado: UsersByStateModel[];
    
    constructor() {
        this.dados_gerais = new GeralDataModel();
        this.usuarios_por_curso = Array(new UsersByCourseModel())
        this.usuarios_por_estado = Array(new UsersByStateModel())
    }
}