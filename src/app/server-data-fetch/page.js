import Link from "next/link";

 

async function fetchListOfUsers(){
    try{
        const apiResponse=await fetch('https://dummyjson.com/users',{cache:'force-cache'});
        const result=await apiResponse.json()
        return result.users
        

    }
    catch(error){
        throw new Error(error)

    }
}

export const listOfUsers = await fetchListOfUsers();

export default async function ServerSideDataFetching(){
    
    
    console.log(listOfUsers)
    return (
        <div>
            <h1>Server side data fetching : User List Page</h1>
            <ul>
                {
                    listOfUsers && listOfUsers.length>0?listOfUsers.map((user)=>(<li className="mt-5 cursor-pointer">
                    <Link href={`/server-data-fetch/${user.id}`}>{user.firstName}</Link></li>)) :null
                }
                </ul>
        </div>
    );
}