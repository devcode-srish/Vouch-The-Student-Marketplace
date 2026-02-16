import { RegisterForm } from "@/components/auth/RegisterForm";
import { UserPlus } from "lucide-react";
import Link from 'next/link';

export default function RegisterPage() {
  return (
    <div className="container mx-auto max-w-md px-4 py-12">
      <div className="text-center mb-8">
        <UserPlus className="mx-auto h-12 w-12 text-primary" />
        <h1 className="text-4xl font-bold font-headline mt-4">Create an Account</h1>
        <p className="text-muted-foreground mt-2">
          Join AlgoSwap to start buying and selling in your student community.
        </p>
      </div>
      <RegisterForm />
      <p className="text-center text-sm text-muted-foreground mt-8">
        Already have an account?{' '}
        <Link href="/login" className="font-semibold text-primary hover:underline">
          Login
        </Link>
      </p>
    </div>
  );
}
