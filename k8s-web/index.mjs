import express from 'express'
import os from 'os'

const app = express()
const PORT = 3000


app.get("/", (reg, ress) => {
    const helloMessage = `VERSION: 2 - lsHello from the ${os.hostname()}`
    console.log(helloMessage)
    ress.send(helloMessage)
})


app.listen(PORT, () => {
    console.log (`web server is listening on port ${PORT}`)
})