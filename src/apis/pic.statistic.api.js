import {http} from "@/apis/http";

/**
 * 添加图片点击量
 * @param picId
 * @param userId
 * @returns {Promise<AxiosResponse<any>>}
 */
export function addHit (picId, userId) {
    return http.post("/api/hit/add", {
        hitPicId: picId,
        hitUserId: userId
    })
}