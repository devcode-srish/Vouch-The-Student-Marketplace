import { LoginForm } from "@/components/auth/LoginForm";
import { LogIn } from "lucide-react";
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="container mx-auto max-w-md px-4 py-12">
      <div className="text-center mb-8">
        <LogIn className="mx-auto h-12 w-12 text-primary" />
        <h1 className="text-4xl font-bold font-headline mt-4">Welcome Back</h1>
        <p className="text-muted-foreground mt-2">
          Login to access your AlgoSwap account.
        </p>
      </div>
      <LoginForm />
       <p className="text-center text-sm text-muted-foreground mt-8">
        Don&apos;t have an account?{' '}
        <Link href="/register" className="font-semibold text-primary hover:underline">
          Register
        </Link>
      </p>
    </div>
  );
}
