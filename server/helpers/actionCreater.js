const db = require('../db');
const createAction = async function(id, action){
    await db.query(
        `INSERT INTO actions (action, user_id, timestamp) VALUES ($1, $2, current_timestamp(2))`, 
        [action, id]
        )
}

module.exports = createAction;