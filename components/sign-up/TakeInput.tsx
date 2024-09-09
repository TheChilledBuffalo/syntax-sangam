import React from "react";
import { Input } from "@nextui-org/input";

interface Settings {
  type: string;
  placeholder?: string;
}

function TakeInput({ type, placeholder }: Settings) {
  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <Input type={type} placeholder={placeholder} labelPlacement="outside" />
    </div>
  );
}

export default TakeInput;
