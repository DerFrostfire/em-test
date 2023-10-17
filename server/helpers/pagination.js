
const pagination = function(limit, page, rows){
    const pageCount = Math.ceil(rows.length / limit)
    let curPage = page
    if (!curPage) { 
        curPage  = 1
    }
    if (curPage > pageCount) {
        curPage = pageCount
    }

    var items = []
    for(var iter = curPage * limit - limit; iter < curPage*limit; iter++){
        if(!rows[iter]){
            break
        }
        items.push(rows[iter])
    }
}

module.exports = pagination