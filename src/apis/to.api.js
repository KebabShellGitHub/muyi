import router from "@/router";

export function picDetail(picId) {
    // console.log(picId);
    router.push({
        name: 'PicDetail',
        params: {
            id: picId
        }
    })
}

export function authorDetail(authorId) {
    // console.log(authorId);
    router.push({
        name: 'User',
        params: {
            id: authorId
        }
    })
}

export function category(sortName) {
    router.push({
        name: 'Category',
        params: {
            sortName: sortName
        }
    })
}