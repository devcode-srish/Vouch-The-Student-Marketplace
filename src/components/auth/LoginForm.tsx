"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "../ui/card";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { useState } from "react";

const formSchema = z.object({
  role: z.enum(["customer", "admin"], {
    required_error: "You must select a role.",
  }),
  email: z.string(), // Keep email but don't always require it
  password: z.string().min(1, { message: "Password is required." }),
}).refine((data) => {
    if (data.role === 'customer') {
        return z.string().email({message: "Please enter a valid email."}).min(1).safeParse(data.email).success;
    }
    return true;
}, {
    message: "Please enter a valid email for customer login.",
    path: ["email"],
});

export function LoginForm() {
  const { toast } = useToast();
  const router = useRouter();
  const [role, setRole] = useState("customer");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      role: "customer",
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    
    await new Promise(resolve => setTimeout(resolve, 1500));

    if (values.role === 'admin') {
        if (values.password === '12345') {
            toast({
                title: "Admin Logged In!",
                description: "Redirecting to dashboard...",
            });
            router.push('/admin/dashboard');
        } else {
             toast({
                variant: "destructive",
                title: "Invalid Credentials",
                description: "The password for admin is incorrect.",
            });
        }
    } else {
        toast({
            title: "Logged In!",
            description: "Redirecting to subscription page...",
        });
        router.push('/subscribe');
    }
  }

  return (
    <Card>
      <CardContent className="p-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
             <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Login as...</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={(value) => {
                        field.onChange(value);
                        setRole(value);
                      }}
                      defaultValue={field.value}
                      className="flex space-x-4"
                    >
                      <FormItem className="flex items-center space-x-2 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="customer" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Customer
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-2 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="admin" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Admin
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            {role === 'customer' && (
                <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                        <Input type="email" placeholder="name@organization.com" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
            )}

             <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder={role === 'admin' ? 'Enter admin password' : '••••••••'} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90" size="lg" disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Login
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
