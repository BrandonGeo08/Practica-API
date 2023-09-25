import express from "express"
import cors from "cors"
import Routes from "./routes/routes.js";
import indexRoutes from "./routes/index.routes.js";


const app = express()



app.use(cors())

app.use(express.json())

app.use(indexRoutes)
app.use('/api', Routes)

app.use((req, res, next)=> {
    res.status(404).json({
        message: 'endpoint not found'
    })
})

export default app;