import { AxiosResponse } from "axios";

export default interface IServiceResponse<T> {
    status: boolean;
    response: AxiosResponse;
    data?: T;
}