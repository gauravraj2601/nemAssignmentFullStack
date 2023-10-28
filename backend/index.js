const express= require("express");
const { connection } = require("./db");
const { userRouter } = require("./routes/user.routes");
const { noteRouter } = require("./routes/note.routes");
const cors = require("cors");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi= require("swagger-ui-express")
const app= express();
app.use(express.json())
app.use(cors())
app.use("/users", userRouter)
app.use("/notes", noteRouter)






// openapi definitions
const options={
    definition:{
        openapi:"3.0.0",
        info:{
            title:"Full Stack Api docs",
            version:"2.0.0"
        },
        server:[
            {
                url:"http://localhost:8080"
            }
        ]
    },

    apis:["./routes/*.js"]
}
// specification


const swaggerSpec=swaggerJSDoc(options);
//built the Ui
app.use("/apidocs", swaggerUi.serve,swaggerUi.setup(swaggerSpec))

app.get("/",(req,res)=>{
    res.status(200).send({"msg":"This is the Home "})
})


app.listen(8080,async()=>{
    try {
        await connection
        console.log("Connected to the DB")
        console.log("Server is running on Port 8080")
    } catch (error) {
        console.log(error)
    }
})