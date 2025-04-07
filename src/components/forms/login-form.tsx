"use client";

import { signIn } from "next-auth/react";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FcGoogle } from "react-icons/fc";
import { FaGithub} from "react-icons/fa";
import { loginSchema } from "@/lib/schemas";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { toast } from "sonner";

export const LoginForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    }
  });

  const isSubmitting = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof loginSchema>) => {
    setIsLoading(true);

    signIn("credentials", {
      ...values,
      redirect: false,
    }).then((callback) => {
      setIsLoading(false);

      if (callback?.ok) {
        toast.success("Logged in");
        router.push("/")
        router.refresh();
      }

      if (callback?.error) {
        toast.error(callback.error)
      }
    })
  }

  return (
    <Card className="w-full h-full md:w-[487px] border-none shadow-none">
      <CardHeader className="text-center p-7">
        <CardTitle className="text-2xl">
          Sign in into your account
        </CardTitle>
        <CardDescription>
          Or, <Link href="/register" className="text-[#427b02] font-bold hover:underline">create an account</Link>
        </CardDescription>
      </CardHeader>
      <div className="px-7">
        <Separator/>
      </div>
      <CardContent className="p-7">
        <Form {...form}>
          <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              name="email"
              control={form.control}
              render={({field}) =>  (
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
              type="submit"
              disabled={isLoading || isSubmitting}
              className="w-full bg-[#427b02]"
              size="lg"
            >
              Login
            </Button>
            <Button
              disabled={isLoading || isSubmitting}
              className="w-full"
              size="lg"
              variant="outline"
              onClick={() => signIn("google", { callbackUrl: "/" })}
            >
              <FcGoogle className="mr-2 size-5"/>
              Continue with Google
            </Button>
            <Button
              disabled={isLoading || isSubmitting}
              className="w-full"
              size="lg"
              variant="outline"
              onClick={() => signIn("github", { callbackUrl: "/" })}
            >
              <FaGithub className="mr-2 size-5"/>
              Continue with Github
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
