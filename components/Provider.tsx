import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";
import Particles from "@/components/magicui/particles";

function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute={"class"}
      defaultTheme={"dark"}
      enableSystem
      disableTransitionOnChange
    >
      <NextUIProvider className={"h-full w-full"}>
          {children}
          <Particles className={"fixed z-[-10] w-full h-full inset-0"} />
      </NextUIProvider>
    </ThemeProvider>
  );
}

export default Provider;
