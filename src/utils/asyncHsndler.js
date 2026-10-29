export{asyncHandler}

const syncHandler = (requestHandler) => {
    (req,res,next) =>{
        Promise.resolve(requestHandler(req,res,next)).
        catch((err) => next (err))
    }
}





// const asyncHandler = (fn)=> async (req,res,next) => {
//     try{
//         await fn(req,res,next)
//     } catch (erro)
//     {
//         res.status(erro.code || 500).json({
//             success:false,
//             message: err.message
//         })
//     }
// }