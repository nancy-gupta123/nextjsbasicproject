'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";



export default function Home() {
  
const router=useRouter()
console.log(router)
function handleNavigate(){
  router.push('products')
}

  return (
    <div className="flex flex-col items-center">
     
      <h1>Welcome to Nextjs</h1>
      <Link href={'products'}>Navigate to products page</Link>
      <Link href={'account'}>Navigate to the account page</Link>

      <h2 className="mt-3 text-lg font-bold">Alternative Way of navigating to another page</h2>
      <button onClick={handleNavigate}>Navigate to product page using useRoute</button>
    </div>
  );
}
