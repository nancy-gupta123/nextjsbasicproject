import Link from "next/link";

export default function NotFount(){
    return (
        <div>
            <h1>This page does not exist</h1>
            <Link href={"/"}>Go back to home page</Link>
        </div>
    );
} 