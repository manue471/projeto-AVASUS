import { PartnersModel } from "@/models/Partners";
import BaseService from "./BaseService";


export default class PartnersService extends BaseService<PartnersModel> {
    constructor() {
        super("parceiros/")
    }
}