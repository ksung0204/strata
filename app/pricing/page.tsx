import Link from "next/link";
import { redirect } from "next/navigation";

export const runtime = 'edge';
export async function GET() {
  try {
    
    redirect("/dashboard");
  } catch (error) {
    console.log("Error fetching building data:", error)
    return Response.json(
      { error },
      { status: 500 }
    );
  }
}

export default function Home() {
 return (
  <>
   <nav className="bg-gray-800 p-4">
    <ul className="flex space-x-4">
     <li>
      <Link className="text-white hover:text-gray-400" href="/dashboard">
       Dashboard
      </Link>
     </li>
     <li>
      <Link className="text-white hover:text-gray-400" href="/building">
       Building
      </Link>
     </li>
     <li>
      <Link className="text-white hover:text-gray-400" href="/customer">
       Customer
      </Link>
     </li>
     <li>
      <Link className="text-white hover:text-gray-400" href="/pricing">
       Pricing
      </Link>
     </li>
    </ul>
   </nav>
  </>
 );
}