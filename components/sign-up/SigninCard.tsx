import React from "react";
import { Card, CardBody, Spacer, Button } from "@nextui-org/react";
import TakeInput from "./TakeInput";

export default function SigninCard() {
  return (
    <Card className="border-2 border-blue-950 bg-blue-500 p-5 rounded-3xl">
      <CardBody>
        <Spacer y={10} />
        <p>Username</p>
        <TakeInput type="username" placeholder="Enter your username" />
        <Spacer y={6} />
        <p>Password</p>
        <TakeInput type="password" placeholder="Enter your Password" />
        <Spacer y={16} />
        <Button color="primary" variant="bordered">
          Login
        </Button>
        <Spacer y={10} />
      </CardBody>
    </Card>
  );
}
