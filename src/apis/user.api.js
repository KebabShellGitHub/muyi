import {http} from "@/apis/http";

export function getHotAuthor(count) {
    return http.get("/api/user/hm/hot?count=" + count)
}

export function getUser(userId) {
    return http.get("/api/user/get",
        {
            params: {
                userId: userId
            },
            headers: {
                Token: sessionStorage.getItem("Token")
            }
        })
}

export function register(data){
    return http.post("/api/user/register", data)
}