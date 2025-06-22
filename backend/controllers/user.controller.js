import Cheaters from "../models/user.model.js";
import request_handler from '../middlewares/middlewares.requestHandler.js';


const search_if_present=async(req,res)=>
{
    try
    {
        const validate=request_handler.safeParse(req.query);
        if(!validate.success)
        {
            return res.status(400).json({
                error:validate.error.issues[0].message
            });
        }
        const email=validate?.data?.email;
        const find_in_db= await Cheaters.findOne({email:email});
        // console.log(find_in_db);
        if(!find_in_db)
        {
            return res.status(404).json({message:"EWWWW!!YOUR PARTNER IS TRUST WORTHY!!!"});
        }
        return res.status(200).json(find_in_db);
    }
    catch(err){
        return res.status(500).send("OOPS!! SORRY ITS NOT ON YOU ITS US!");
        //  console.log("Unexpected error has been occured!!");
        console.log(err);
    }
}



const get_random_five=async (req,res)=>
{
    try{
        const randomUsers = await Cheaters.aggregate([
      { $sample: { size: 5 } }  // 👈 picks 5 random docs
    ]);

    return res.status(200).json(randomUsers);
    }
    catch{
        console.log(err);
        return res.status(500).send("OOPS!! SORRY ITS NOT ON YOU ITS US!");
    }
}
export default { search_if_present, get_random_five};