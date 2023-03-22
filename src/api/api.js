import axios from "./server";

const quizes = {
    fetch: () => axios.get("/quizes").then(({data}) => data)
}

export { quizes };