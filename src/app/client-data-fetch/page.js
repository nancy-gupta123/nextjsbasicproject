'use client';

import { useState } from "react";
import { useEffect } from "react";
import useSWR from 'swr'


const fetcher = (...args) => fetch(...args).then(res => res.json())
export default function ClientSideDataFetching(){
    //const [loading,setloading]=useState(false);
    //const [users,setusers]=useState([]);
    

    //async function fetchListOfUser(){
        //try{
            //setloading(true);
            //const apiResponse=await fetch("https://dummyjson.com/users")
            const { data, error, isLoading } = useSWR('https://dummyjson.com/users', fetcher)
            //const result=await apiResponse.json();

            //if(result?.users){
                //setusers(result.users)
                //setloading(false)
            //}

        //}
        //catch(error){
            //console.log(error)
            //setusers([]);
            //setloading(false)

        //}
    //}
    //useEffect(()=>{
       // fetchListOfUser();
   // },[])
   if(error){
    return <h1>{error}</h1>
   }
    if(isLoading){
       return <h3>Loading users! Please Wait</h3>
    }
    
    return (
        <div>
            <h1>Client side data fetching</h1>
            <ul>
                {
                    data && data?.users && data?.users.length>0?data?.users.map((user)=>(<li className="mt-5 cursor-pointer">
                    {user.firstName}</li>)) :null
                }
                </ul>
        </div>
    );
} 