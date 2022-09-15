import { TransparencyModel } from "@/models/Transparency";
import BaseService from "./BaseService";


export default class TransparencyService extends BaseService<TransparencyModel> {
  constructor() {
    super("transparecia/")
  }
}