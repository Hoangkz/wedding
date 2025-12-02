import axios, { AxiosInstance } from "axios"

class WeddingClient {
  private api: AxiosInstance
  constructor() {
    this.api = axios.create({
      headers: {
        "Content-Type": "application/json",
      },
    })
    this.api.interceptors.request.use((config) => {
      const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("token="))
        ?.split("=")[1]

      if (token) {
        config.headers = config.headers || {}
        config.headers["Authorization"] = `Bearer ${token}`
      }

      return config
    })
  }
  // Login
  login(userName: string, password: string) {
    return this.api.post("/api/auth/login", { userName, password })
  }

  changePassword(id: string, model: any) {
    return this.api.put(`/api/users/${id}/password`, model)
  }
  updateUser(id: string, model: any) {
    return this.api.put(`/api/users/${id}`, model)
  }

  getUsers() {
    return this.api.get(`/api/users/`, {})
  }
  createUser(model: any) {
    return this.api.post(`/api/createUser`, model)
  }
  deleteUser(id: string) {
    return this.api.delete(`/api/users/${id}`, {})
  }
  me() {
    return this.api.get("/api/auth/me", {})
  }
  getInfo(id: string) {
    return this.api.get(`/api/customers/${id}/info`, {})
  }
  getCustomers() {
    return this.api.get("/api/customers", {})
  }
  updateCustomer(id: string, model: any) {
    return this.api.put(`/api/customers/${id}`, model)
  }
  createCustomer(model: any) {
    return this.api.post(`/api/customers/`, model)
  }
  deleteCustomer(id: string) {
    return this.api.delete(`/api/customers/${id}/`, {})
  }
  acceptCustomer(id: string) {
    return this.api.post(`/api/customers/${id}/accept`, {})
  }
  getWishes() {
    return this.api.get("/api/wishes", {})
  }
  updateWish(id: string, model: any) {
    return this.api.put(`/api/wishes/${id}`, model)
  }
  createWish(model: any) {
    return this.api.post(`/api/wishes/`, model)
  }
  deleteWish(id: string) {
    return this.api.delete(`/api/wishes/${id}/`, {})
  }

  uploadFileBackgroundImage(model: any) {
    return this.api.post(`/api/background-image`, model)
  }
  getTimeline() {
    return this.api.get("/api/timeline", {})
  }
  updateTimeline(id: string, model: any) {
    return this.api.put(`/api/timeline/${id}`, model)
  }

  removeFileTimeline(id: string) {
    return this.api.post(`/api/timeline/${id}`)
  }
  createTimeline(model: any) {
    return this.api.post(`/api/timeline/`, model)
  }
  deleteTimeline(id: string) {
    return this.api.delete(`/api/timeline/${id}/`, {})
  }

  getSchedule() {
    return this.api.get("/api/schedule", {})
  }
  updateSchedule(id: string, model: any) {
    return this.api.put(`/api/schedule/${id}`, model)
  }
  createSchedule(model: any) {
    return this.api.post(`/api/schedule/`, model)
  }
  deleteSchedule(id: string) {
    return this.api.delete(`/api/schedule/${id}/`, {})
  }

  getAlbum() {
    return this.api.get(`/api/album/`, {})
  }
  createFileAlbum(images: string[]) {
    return this.api.post(`/api/album/`, { images })
  }
  deleteFileAlbum(fileName: string) {
    return this.api.delete(`/api/album?fileName=${fileName}`)
  }

  getInfor(id: string | undefined) {
    return this.api.get(`/api/infor${id ? '?id=' + id : ""}`)
  }
}

export const appWeddingClient = new WeddingClient()
