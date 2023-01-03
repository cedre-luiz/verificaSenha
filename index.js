import express, { json } from "express";
import validaSenha from "./controler.js";

let passwords = [];
let verifications = [];


const port = 8080
const app = express()
app.use(express.json())

app.post('/verify', (req,res) =>{
    const{ senha } = req.body
    const secret =  { senha }
    passwords.push(secret)
    verifications.push(validaSenha(secret.senha))
    return res.status(201).json(verifications)    
})

app.listen(port, () => console.log('Server is runing'))