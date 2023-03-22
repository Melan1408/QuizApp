import axios from "axios";

export default axios.create({
    baseURL: "https://6410b130ff89c2e2d4e668e4.mockapi.io",
    headers: { "Content-Type": "application/json" }
})