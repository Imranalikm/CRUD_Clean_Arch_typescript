import express,{Request,Response} from 'express'
import cookieParser from 'cookie-parser'
import cors from "cors"
import dotenv from "dotenv"


dotenv.config();

const app =express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:false}));



const port = process.env.PORT || 5000


// app.get('/',(req:Request,res:Response)=>{
//     res.send({message:"Hi"}).status(200)
// })

console.log("feature-branch-testing")


app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`);   
})


