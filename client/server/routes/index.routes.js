import { Router } from "express";

const router = Router()

router.get('/',(req,res)=>{
    return res.json({
        msg:'Bienvenido'
    })
});

export default router