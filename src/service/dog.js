import api from "./api"

export default {
    dogCreate: () => {
        return api.post("/dog")
    },
    dogProfile: ({id}) => {
        return api.get(`/dog/${id}`)
    }
}