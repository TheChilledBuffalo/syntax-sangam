import SparklesText from "@/components/magicui/sparkles-text";
import { Highlight } from "@/components/ui/hero-highlight";
import Particles from "@/components/magicui/particles";

export default function Home() {
  return (
    <>
      <div className="w-full h-full flex flex-col items-center justify-center text-5xl gap-y-7 font-semibold
    animate-in fade-in slide-in-from-top-3 duration-1000 text-balance bg-gradient-to-br from-black from-30% to-black/40
    bg-clip-text pb-2 leading-none text-transparent dark:from-white dark:to-white/80 select-none">
        <div className={""}>
          Learn Coding
        </div>
        <div className={"flex flex-row items-center justify-center gap-x-3"}>
          The <SparklesText text={"Smart"} className={"text-6xl text-black dark:text-white"} sparklesCount={7}/> Way
        </div>
        <div>
          With
          <Highlight className={"text-black dark:text-white bg-opacity-70 ml-2"}>
            Syntax Sangam
          </Highlight>
        </div>
      </div>
      <Particles className={"fixed z-[-10] w-full h-full inset-0"} />
    </>
  )
}
