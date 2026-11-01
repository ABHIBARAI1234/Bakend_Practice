import { asyncHandler } from "../utils/asyncHsndler.js";



const registerUser = asyncHandler( async (req, res) =>{
    res.status(200).json({
        message : "Abhi and code"
    })
})

export {registerUser,}