import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import {SignInButton,SignUpButton} from "@clerk/nextjs"

export default function Home() {
  return (
     <div className="flex w-14  flex-col items-center gap-5" >
      <SignInButton>
      <button className="font-bold border border-gray-700 bg-green-200">Login</button>
      </SignInButton>
      <SignUpButton>
      <button className="font-bold border border-gray-700 bg-green-200">Signup</button>
      </SignUpButton>
      <UserButton afterSignOutUrl="/"/>
     </div>
  );
}