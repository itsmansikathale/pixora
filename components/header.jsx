"use client";
import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "./ui/button";
import useStoreUser from "@/hooks/use-store-user";
import { BarLoader } from "react-spinners";
import { Authenticated, Unauthenticated } from "convex/react";
import { LayoutDashboard } from "lucide-react";

const Header = () => {
  const path = usePathname();
  const { isLoading } = useStoreUser();

  // if the path is editor, we don't want to show the header
  if (path.includes("/editor")) {
    return null;
  }
  return (
    <header
      className="fixed top-6 left-1/2 
    transform -translate-x-1/2 z-50 text-nowrap"
    >
      <div
        className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full px-8 py-3 flex 
      items-center justify-between gap-8"
      >
        <Link href="/" className="mr-10 md:mr-20">
          <Image
            src="/picoraa.png"
            alt="Picoraa"
            className="min-w-20  object-cover"
            width={180}
            height={80}
          />
        </Link>

        {path === "/" && (
          <div className="hidden md:flex space-x-6 ">
            <Link
              href="#tools"
              className="text-white/80 font-small transition-all 
              duration-300 hover:text-gray-400 cursor-pointer"
            >
              Tools
            </Link>
            <Link
              href="#pricing"
              className="text-white/80 
              
               font-small transition-all 
              duration-300 hover:t ext-gray-400 cursor-pointer"
            >
              Pricing
            </Link>
            <Link
              href="#support"
              className="text-white/80 font-small transition-all 
              duration-300 hover:text-gray-400 cursor-pointer"
            >
              Support
            </Link>
          </div>
        )}

        <div
          className="flex items-center gap-3 ml-10 
        md:ml-20"
        >
          <Unauthenticated>
            <SignInButton>
              <Button variant="glass" className="hidden sm:flex">
                Sign In
              </Button>
            </SignInButton>
            <SignUpButton>
              <Button variant="primary">Get Started</Button>
            </SignUpButton>
          </Unauthenticated>
          <Authenticated>
            <Link href="/dashboard">
              <Button variant="glass">
                <LayoutDashboard className="h-4 w--4" />
                <span className="hidden md:flex">Dashboard</span>
              </Button>
            </Link>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-12 h-12",
                },
              }}
            />
          </Authenticated>
        </div>

        {isLoading && (
          <div className="fixed bottom-0 left-0 w-full z-40 flex justify-center">
            <BarLoader width={"95%"} color="#7304b3ff" />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
