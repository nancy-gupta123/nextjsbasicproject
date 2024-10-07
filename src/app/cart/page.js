'use client'

import { usePathname, useSearchParams } from "next/navigation"

export default function Cart(){

    const pathname=usePathname()
    console.log(pathname);
    const searchParams=useSearchParams();
    console.log(searchParams.get('search'),searchParams.get('product'))

    return <h1>this is our cart component</h1>
}