import {http} from "@/apis/http";

export function getPicComm(picId, commentPageNum, commentCount) {
    return http.get("/api/cm/get", {
        params: {
            picId: picId,
            pageNum: commentPageNum,
            count: commentCount
        }
    })
}

export function addComm(data) {
    return http.post("/api/cm/add", data,
        {
            headers: {
                Token: sessionStorage.getItem("Token")
            }
        })
}