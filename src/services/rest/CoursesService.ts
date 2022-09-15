import { CoursesModel } from "@/models/CoursesModel";
import BaseService from "./BaseService";


export default class CoursesService extends BaseService<CoursesModel> {
    constructor() {
        super("cursos/")
    }

}