import { createContext, useContext, useState } from "react";
import { AuthContext } from "./auth.context";



const HouseContext =createContext();

const HouseProvider = HouseContext.Provider;

const HouseContextProvider =({children})=>{
const [house, setHouse]=useState([])
const [isPending, setIsPending] =useState(false)
const [error, setError] = useState(null)

const {user}=useContext(AuthContext)

async function getAllHouses(){
    setIsPending(true);
    await fetch("/api/house",{
       method: "GET" ,
       headers:{
           "content-Type":"application/json",
       },
    } )
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data);
        setHouse(data);
    })
    .catch((err)=>{
        setError(err);
    });
    setIsPending(false);
}


    return <HouseProvider value={{isPending, house, error, getAllHouses}}>{children}</HouseProvider>
}

export{MenuContext, HouseContextProvider}