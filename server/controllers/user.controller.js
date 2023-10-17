const db = require('../db');
const actionCreator = require('../helpers/actionCreater');

class UserController{
    async createUser(req,res){
        const {name, surname} = req.body
        const newPerson = await db.query(
            'INSERT INTO person (name, surname) VALUES ($1, $2) RETURNING *',
            [name, surname]
        )
        await actionCreator(newPerson.rows[0].id, 'create user')

        res.json(newPerson.rows[0])
    }

    async getUsers(req, res){
        const users = await db.query('SELECT * FROM person')
        res.json(users.rows)
    }

    async updateUser(req, res){
        const {id, name, surname} = req.body
        const user = await db.query(
            'UPDATE person set name = $1, surname = $2 WHERE id = $3 RETURNING *',
            [name, surname, id]
        )
        await actionCreator(id, 'update user')

        res.json(user.rows[0])
    }

    async deleteUser(req, res){
        const id = req.params.id
        const action = await db.query(
            'DELETE FROM actions WHERE user_id = $1',
            [id]
        )
        const user = await db.query(
            'DELETE FROM person WHERE id = $1',
            [id]
        )
        res.json(user.rows[0])
    }
}

module.exports = new UserController()
