"use client";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
// import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "./ui/button";

const Header = () => {
  const path = usePathname();
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
          {/* <Image
            src="/pixora.png"
            alt="Pixora"
            className="min-w-24 object-cover"
            width={100}
            height={30}
          /> */}
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
          <SignedOut>
            <SignInButton>
              <Button variant="glass" className="hidden sm:flex">
                Sign In
              </Button>
            </SignInButton>
            <SignUpButton>
              <Button variant="primary">Get Started</Button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-12 h-12",
                },
              }}
            />
          </SignedIn>
        </div>
      </div>
    </header>
  );
};

export default Header;
