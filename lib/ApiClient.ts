import axios, { AxiosInstance } from 'axios';

// Giả sử có một base URL cho API của bạn
const BASE_URL = "/api";
class WeddingClient {
    private api: AxiosInstance;
    constructor() {
        this.api = axios.create({
            baseURL: BASE_URL,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }// Product API

    login(email: string, password: string) {
        return this.api.post("/auth/login", { email, password });
    }
}

export const appWeddingClient = new WeddingClient();
