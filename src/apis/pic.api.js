import {http} from "./http"

/**
 * // 拿到走马灯的图片
 * @param count
 * @returns {Promise<AxiosResponse<any>>}
 */
export function getCarPic(count) {
    return http.get("/api/pic/hm/car?count=" + 5)
}

/**
 * 拿到热门图片(主页的)
 * @param count
 * @returns {Promise<AxiosResponse<any>>}
 */
export function getHotPics(count) {
    return http.get("/api/pic/hm/hot?count=" + count)
}

/**
 * 拿到某个分类的4张热门图片
 * @param sortName
 * @returns {Promise<AxiosResponse<any>>}
 */
export function getHotSortPics(sortName) {
    // 根据分类id来拿到这个分类的4张热门图片
    return http.get("/api/pic/hm/sort?sortName="
        + sortName.join() + "&pageNum=1&count=4")
}

/**
 * 拿到count数目的热门图片
 * @param pageNum
 * @param count
 * @returns {Promise<AxiosResponse<any>>}
 */
export function getAllHotPics(pageNum, count) {
    return http.get("/api/pic/hot/all?pageNum=" + pageNum + "&count=" + count)
}

/**
 * 拿到count数目的图片
 * @param pageNum
 * @param count
 * @returns {Promise<AxiosResponse<any>>}
 */
export function getAllPics(pageNum, count) {
    return http.get("/api/pic/all?pageNum=" + pageNum + "&count=" + count)
}

export function getPicDtl(picId) {
    return http.get("/api/pic/one?picId=" + picId)
}

export function getUserPic(userId, pageNum, count) {
    return http.get("/api/pic/user", {
        params: {
            userId: userId,
            pageNum: pageNum,
            count: count
        }
    })
}

export function upload(data){
    return http.post("/api/pic/add", data)
}

export function getPicInSorts(sortName, pageNum, count) {
    // 根据分类集合来拿到这个分类的热门图片
    return http.get("/api/pic/hm/sort?sortName="
        + sortName.join() + "&pageNum=" + pageNum + "&count=" + count)
}