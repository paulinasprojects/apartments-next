"use client";

import { z } from "zod";
import Link from "next/link";
import {zodResolver} from '@hookform/resolvers/zod';
import { toast } from "sonner";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import axios from 'axios';
import { registerSchema } from "@/lib/schemas";
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { signIn } from "next-auth/react";

export const RegisterForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    }
  });

  const isSubmitting = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof registerSchema>) => {
    setIsLoading(true);

    axios.post("/api/register", values)
      .then(() => {
        toast.success("Registered successfully");
        router.push("/login");
        router.refresh();
      })
      .catch((error) => {
        toast.error("Something went wrong", error)
      }).finally(() => {
        setIsLoading(false)
      });
  };

  return (
    <Card className="w-full h-full md:w-[487px] border-none shadow-none">
      <CardHeader className="text-center p-7">
        <CardTitle className="text-2xl">
          Create an account
        </CardTitle>
        <CardDescription>
          Or, <Link href="/login" className="text-[#427b02] font-bold hover:underline">sign into your account</Link>
        </CardDescription>
      </CardHeader>
      <div className="px-7">
        <Separator/>
      </div>
      <CardContent className="p-7">
        <Form {...form}>
          <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              name="name"
              control={form.control}
              render={({field}) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      placeholder="Enter your name"
                      disabled={isLoading || isSubmitting}
                      autoComplete="name"
                    />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isLoading || isSubmitting}
                      autoComplete="email"
                      placeholder="Your email address"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isLoading || isSubmitting}
                      autoComplete="current-password"
                      type="password"
                      placeholder="Your password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />
            <Button
              className="bg-[#427b02] w-full"
              size="lg"
              disabled={isLoading || isSubmitting}
              type="submit"
            >
              Register
            </Button>
          </form>
        </Form>
      </CardContent>
      <div className="px-7">
          <Separator/>
        </div>
        <CardContent className="p-7 flex flex-col gap-y-4">
          <Button
           variant="secondary"
           size="lg"
           className="w-full hover:text-white hover:bg-black"
           disabled={isSubmitting}
           onClick={() => signIn("google")}
          >
            <FcGoogle className="mr-2 size-5"/>
            Continue with Google
          </Button>
          <Button
           variant="secondary"
           size="lg"
           className="w-full hover:text-white hover:bg-black"
           disabled={isSubmitting}
           onClick={() => signIn("github")}
          >
            <FaGithub className="mr-2 size-5"/>
            Continue with Github
          </Button>
        </CardContent>
    </Card>
  )
}
