import Link from "next/link";

export default function GetStartedPage() {
  return (
    <>
      <div className={"flex flex-col items-center justify-center w-full h-full gap-y-10"}>
        <div className={"m-5 text-5xl font-black"}>
          Which language would you like to learn today?
        </div>
        <div className={"flex flex-row gap-x-10"}>
          <button className={"flex-1 ease-in-out outline-none border-primary border-2 rounded-xl py-3 px-20 text-3xl font-semibold"}>
            <Link href={"/learn/python"}>
              Python
            </Link>
          </button>
          <button className={"flex-1 ease-in-out outline-none border-primary border-2 rounded-xl py-3 px-20 text-3xl font-semibold"}>
            <Link href={"/learn/java"}>
              Java
            </Link>
          </button>
          <button className={"flex-1 ease-in-out outline-none border-primary border-2 rounded-xl py-3 px-20 text-3xl font-semibold"}>
            <Link href={"/learn/cpp"}>
              C++
            </Link>
          </button>
        </div>
      </div>
    </>
  )
}