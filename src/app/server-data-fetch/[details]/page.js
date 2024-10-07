async function fetchUserDetails(currentUserId){
    try{
        const apiResponse=await fetch(`https://dummyjson.com/users/${currentUserId}`)
        const result=await apiResponse.json();
        return result

    }
    catch(e){
        throw new Error(e)
    }
}



export default async function UserDetails({params}) {
    console.log(params)
    const userDetails=await fetchUserDetails(params.details)
    return (
        
      <div>
        <h1>User details page</h1>
        <ul>
          <li>{userDetails?.firstName} {userDetails?.lastName}</li>
          <li>{userDetails?.email}</li>
          <li>{userDetails?.age}</li>
          <li>{userDetails?.phone}</li>
          
        </ul>
      </div>
    );
  }
  