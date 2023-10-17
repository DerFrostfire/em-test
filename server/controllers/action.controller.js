const db = require('../db');
const pagination = require('../helpers/pagination');


class ActionController{

    async getActionByUser(req, res){
        const id = req.query.id
        const page = parseInt(req.query.p)

        const action = await db.query('SELECT * FROM actions WHERE user_id = $1', [id])

        const {curPage, pageCount, items} = pagination(10, page, action.rows)
        
        res.json({
            "page":curPage, 
            "pageCount":pageCount, 
            "actions":items
        })
    }
}

module.exports = new ActionController()
