import {http} from "@/apis/http";

export function getAllSortInfo() {
    return http.get("/api/sort/all");
}

export function getPicSort(picId) {
    return http.get("/api/sort/pic?picId=" + picId)
}