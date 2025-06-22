import mongoose from "mongoose";
import dotenv from "dotenv";
import Cheaters from "./models/user.model.js";
import axios from "axios";
dotenv.config({ path: './backend/.env' });

async function StoreData()
{
    try{
        console.log("DATABASE_URL:",process.env.DATABASE_URL);
        const conn=await mongoose.connect(process.env.DATABASE_URL);
        console.log(`Connected to database ${conn.connection.host}`);
        const userCount=await Cheaters.countDocuments();
        //console.log(`------------>>>${userCount}`);
        
        if(userCount>0)
        {
            console.log("DATABASE ALREADY HAS THE DATA");
            mongoose.disconnect();
            return;
        }

        const response=await axios.get('https://randomuser.me/api/?results=50');
        const data=response.data.results;
        let index=0;
        const array_of_data = data.map((cheat) => {
        index++;
        console.log(index);
        
        return {
            uid:index,
            firstName: cheat.name.first,
            lastName: cheat.name.last,
            email: cheat.email,
            age: cheat.dob.age,
            city: cheat.location.city,
            picture: cheat.picture.large
        };
        });

        await Cheaters.insertMany(array_of_data);
        console.log("Data succesfully added to database");


    }
    catch(err){
        console.log("Error while seeding the data");
        console.log(err);
        process.exit();
    }
    finally{
        console.log("DISCONNECTED THE DATABASE");
        mongoose.disconnect();
    }
}


async function Connect_database()
{
    try{
        const con=await mongoose.connect(process.env.DATABASE_URL);
        console.log(`connected to database ${con.connection.host}`);
        
    }
    catch(err){
        console.log("Error while connecting to data");
        process.exit();        
    }
}

export  {StoreData,Connect_database};
