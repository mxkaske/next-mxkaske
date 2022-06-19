import Layout from "@/components/common/layout";
import { FormEvent } from "react";
import { Button, Heading, Input } from "ui";

const LoginPage = () => {
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const body = {
      password: e.currentTarget.password.value,
    };
    try {
      const res = await fetch("/api/chatbox/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(body),
      });
      if (res.status === 200) {
        alert("Login successful");
      } else {
        alert("Login failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout
      withBreadcrumbs={false}
      className="flex flex-col items-center justify-center"
    >
      <Heading>Login</Heading>
      <form onSubmit={onSubmit} className="grid gap-4">
        <Input name="password" type="password" />
        <Button>Submit</Button>
      </form>
    </Layout>
  );
};

export default LoginPage;
