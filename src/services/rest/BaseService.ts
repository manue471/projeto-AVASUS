import axios, {
    AxiosError,
    AxiosInstance,
    AxiosRequestConfig,
    AxiosResponse,
} from "axios";

import IServiceResponse from "../interfaces/IServiceResponse";

export default class BaseService<T> {
    protected connection: AxiosInstance;
    protected endpointName: string;

    constructor(
        endpointName: string,
    ) {
        this.endpointName = endpointName;
        this.connection = axios.create({
            baseURL: `${process.env.VUE_APP_API_URL}/`,
        });
    }
    public async update(id: number, data: any): Promise<IServiceResponse<T>> {
        try {
            const response = await this.connection.put<T>(
                `${this.endpointName}${id}/`,
                data
            );

            return {
                status: true,
                response,
                data: response.data,
            };
        } catch (error: any) {
            throw {
                response: error?.response,
                data: error?.response?.data,
                status: false,
            };
        }
    }

    public async store(data: any): Promise<IServiceResponse<T>> {
        try {
            const response = await this.connection.post<T>(this.endpointName, data);

            return {
                status: true,
                response,
                data: response.data,
            };
        } catch (error: any) {
            throw {
                response: error?.response,
                data: error?.response?.data,
                status: false,
            };
        }
    }

    public async getAll(): Promise<IServiceResponse<T[] | T>> {
        try {
            const response = await this.connection.get<T[]>(this.endpointName);
            
            return {
                status: true,
                response,
                data: response.data,
            };
        } catch (error: any) {
            console.log(error);
            
            throw {
                response: error?.response,
                data: error?.response?.data,
                status: false,
            };
        }
    }

    public async getOne(id: number): Promise<IServiceResponse<T>> {
        try {
            const response = await this.connection.get<T>(
                `${this.endpointName}${id}/`
            );

            return {
                status: true,
                response,
                data: response.data,
            };
        } catch (error: any) {
            console.log(error);

            throw {
                response: error?.response,
                data: error?.response?.data,
                status: false,
            };
        }
    }

    public async delete(id: number): Promise<IServiceResponse<T>> {
        try {
            const response = await this.connection.delete<T>(
                `${this.endpointName}${id}/`
            );

            return {
                status: true,
                response,
                data: response.data,
            };
        } catch (error: any) {
            const axiosError = error as AxiosError;

            throw {
                response: axiosError.response,
                data: axiosError.response?.data,
                status: false,
            };
        }
    }
}