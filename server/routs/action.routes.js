const Router = require('express');  
const router = new Router()
const actionController = require('../controllers/action.controller');

router.get('/action', actionController.getActionByUser)

module.exports = router;