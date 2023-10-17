const express = require('express')

const userRouter = require('./routs/user.routes');
const actionRouter = require('./routs/action.routes');

const PORT = process.env.PORT || 8080


const app = express()

app.use(express.json())

app.use('/api', userRouter)
app.use('/api', actionRouter)

app.listen(PORT, () => console.log(`server started on PORT ${PORT}`))