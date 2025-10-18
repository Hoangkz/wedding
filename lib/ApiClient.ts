import axios, { AxiosInstance } from 'axios';

class WeddingClient {
    private api: AxiosInstance;
    constructor() {
        this.api = axios.create({
            headers: {
                'Content-Type': 'application/json',
            },
        });
        this.api.interceptors.request.use((config) => {
            const token = document.cookie
                .split('; ')
                .find((row) => row.startsWith('token='))
                ?.split('=')[1];

            if (token) {
                config.headers = config.headers || {};
                config.headers['Authorization'] = `Bearer ${token}`;
            }

            return config;
        });
    }
    // Login
    login(userName: string, password: string) {
        return this.api.post("/api/auth/login", { userName, password });
    }

    changePassword(id: string, model: any) {
        console.log(model)
        return this.api.put(`/api/users/${id}/password`, model);
    }
    updateUser(id: string, model: any) {
        return this.api.put(`/api/users/${id}`, model);
    }

    getUsers() {
        return this.api.get(`/api/users/`, {});
    }
    createUser(model: any) {
        return this.api.post(`/api/createUser`, model);
    }
    deleteUser(id: string) {
        return this.api.delete(`/api/users/${id}`, {});
    }
    me() {
        return this.api.get("/api/auth/me", {});
    }

    getCustomers() {
        return this.api.get("/api/customers", {});
    }
    updateCustomer(id: string, model: any) {
        return this.api.put(`/api/customers/${id}`, model);
    }
    createCustomer(model: any) {
        return this.api.post(`/api/customers/`, model);
    }
    deleteCustomer(id: string) {
        return this.api.delete(`/api/customers/${id}/`, {});
    }

    getWishes() {
        return this.api.get("/api/wishes", {});
    }
    updateWish(id: string, model: any) {
        return this.api.put(`/api/wishes/${id}`, model);
    }
    createWish(model: any) {
        return this.api.post(`/api/wishes/`, model);
    }
    deleteWish(id: string) {
        return this.api.delete(`/api/wishes/${id}/`, {});
    }
}

export const appWeddingClient = new WeddingClient();
