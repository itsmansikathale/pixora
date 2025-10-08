"use client";
import { SignIn } from "@clerk/nextjs";
import React from "react";

const SignInPage = () => {
  return (
    <div className="flex justify-center pt-50">
      <SignIn />;{/* <RedirectToSignIn /> */}
    </div>
  );
};

export default SignInPage;

// "use client";

// import { SignIn, SignedOut, SignedIn } from "@clerk/nextjs";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";

// const SignInPage = () => {
//   const router = useRouter();

//   useEffect(() => {
//     // Redirect if user is signed in
//     // Clerk will also auto-redirect, this is just safe fallback
//   }, []);

//   return (
//     <div className="flex justify-center pt-20">
//       <SignedOut>
//         <SignIn />
//       </SignedOut>

//       <SignedIn>
//         <div>Redirecting to dashboard...</div>
//         {router.push("/dashboard")}
//       </SignedIn>
//     </div>
//   );
// };

// export default SignInPage;
// "use client";

// import { SignIn, SignedOut, useAuth } from "@clerk/nextjs";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";

// export default function SignInPage() {
//   const { isSignedIn } = useAuth();
//   const router = useRouter();

//   useEffect(() => {
//     if (isSignedIn) {
//       router.push("/dashboard"); // Redirect to your app's main page
//     }
//   }, [isSignedIn]);

//   return (
//     <SignedOut>
//       <SignIn />
//     </SignedOut>
//   );
// }
