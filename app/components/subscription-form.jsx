"use client";

import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";

import { toast } from "sonner";

const formSchema = z.object({
  fullName: z
    .string()
    .min(3, { message: "Name must be at least 3 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
});

export default function SubscriptionForm() {
  // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values) {
    console.log(values);
    toast.success(`${values.fullName} subscribed successfully`);
  }

  // 3. Get the status
  const { isSubmitting, isValid } = form.formState;

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 my-4 flex flex-col items-center"
      >
        <Card className="w-full sm:max-w-md p-6">
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>Have an account? Login here.</CardDescription>
          </CardHeader>

          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    name="fullName"
                    className="w-[350px]"
                    disabled={isSubmitting}
                    placeholder="Enter name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    name="email"
                    className="w-[350px]"
                    disabled={isSubmitting}
                    type="email"
                    placeholder="Enter Email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            variant="destructive"
            disabled={!isValid || isSubmitting}
            type="submit"
          >
            Login
          </Button>
        </Card>
      </form>
    </Form>
  );
}
