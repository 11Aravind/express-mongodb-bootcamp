import express from express
const router=express()
router.get('/signup',(req,res)=>{
    res.send("Signup page")
})