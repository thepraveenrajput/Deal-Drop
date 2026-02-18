"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { LogIn, LogOut } from "lucide-react";
import { AuthModal } from "./AuthModal";
import { signOut } from "@/app/actions";

const AuthButton = ({ user }) => {
  const [showAuthModal, setAuthModal] = useState(false);

  if (user) {
    return (
      <form action={signOut}>
        <Button variant="ghost" size="sm" type="submit" className="gap-2">
          <LogOut className="h-4 w-4" />
          Sign Out
        </Button>
      </form>
    )
  }
  return (
    <>
      <Button
        onClick={() => setAuthModal(true)}
        variant="default"
        size="sm"
        className="bg-orange-500 hover:bg-orange-600 gap-2"
      >
        <LogIn className="h-4 w-4" /> Sign In{" "}
      </Button>

      <AuthModal isOpen={showAuthModal} onClose={() => setAuthModal(false)} />
    </>
  );
};

export default AuthButton;
