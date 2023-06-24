const express =require("express")
const axios= require("axios")
const fs=require("fs")
const path=require("path")
const { connection } = require('../config/db');
const { verifyAccessToken } = require('../helper/jwt.helper');
const { userRouter } = require('../Routes/users.routes');
const cookieParser = require("cookie-parser");

require("dotenv").config()


const { Configuration, OpenAIApi }= require("openai")

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration)

openai.listEngines().then((res)=>{

    // console.log(res)
})




const app= express()

app.use(express.json())

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/user", userRouter)


app.get("/home",(req,res)=>{

     res.json({

        msg:"ansd"

     })
       
})








app.post("/chat-api", (req, res) => {
    const propmtQuestion  = req.body.propmtQuestion ;
  
    openai
      .createCompletion({
        model: "text-davinci-003",
        prompt: propmtQuestion ,
        max_tokens: 4000,
        temperature: 0,
      })
      .then((response) => {
        console.log({ response });
        return response?.data?.choices?.[0]?.text;
      })
      .then((answer) => {
        console.log({ answer });
        const array = answer
          ?.split("\n")
          .filter((value) => value)
          .map((value) => value.trim());
  
        return array;
      })
      .then((answer) => {
        res.json({
          answer: answer,
          propt: propmtQuestion ,
        });
      });
    console.log({ propmtQuestion  });
  });



app.listen(process.env.PORT,async ()=>{

  try {
    await connection;
      console.log(`listening on ${process.env.PORT}`);
   } catch (error) {
      console.log(error.message);
   }
  })