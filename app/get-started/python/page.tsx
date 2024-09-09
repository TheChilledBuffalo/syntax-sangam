/* eslint-disable prefer-const */
'use client'

import { Separator } from "@/components/ui/separator";
import React, { useRef, useState } from "react";
import { Questions } from "@/app/assets/python";

export default function Python() {
  let [index, setIndex] = useState(0);
  let [question, setQuestion] = useState(Questions[index]);
  let [lock, setLock] = useState(false);
  let [score, setScore] = useState(0);
  let [result, setResult] = useState(false);

  const Option1 = useRef(null);
  const Option2 = useRef(null);
  const Option3 = useRef(null);
  const Option4 = useRef(null);
  const options = [Option1, Option2, Option3, Option4];

  function checkAnswer(e: React.MouseEvent<HTMLLIElement>, ans: number) {
    if (!lock) {
      setLock(true);
      const target = e.target as HTMLElement;
      target.classList.remove("border-primary");
      if(question.ans === ans) {
        target.classList.add("border-[#00d397]")
        setScore(++score)
      } else {
        target.classList.add("border-[#FF4A4A]")
        const correctOption = options[question.ans - 1].current as unknown as HTMLElement;
        correctOption.classList.remove("border-primary");
        correctOption.classList.add("border-[#00d397]")
      }
    }
  }

  function nextQuestion() {
    if (lock) {
      if (index === Questions.length - 1) {
        setResult(true);
      }
      setIndex(++index);
      setQuestion(Questions[index]);
      setLock(false);

      options.map((option) => {
        const optionElement = option.current as unknown as HTMLElement;
        optionElement.classList.remove("border-[#00d397]");
        optionElement.classList.remove("border-[#FF4A4A]");
        optionElement.classList.add("border-primary");
      })
    }
  }

  return (
    <div className={"flex flex-col items-center justify-center w-full h-full gap-y-10"}>
      {result ?
        <div className={"text-5xl font-bold"}>
          You scored {score} out of {Questions.length}
        </div> : <>
          <h1 className={"font-black text-3xl"}>Let&apos;s test your current python knowledge</h1>
          <Separator className={"w-1/2 border border-primary rounded-xl"}/>
          <h2 className={"text-2xl font-semibold"}>
            {index + 1}. {question.question}
          </h2>
          <ul className={"flex flex-col gap-y-5 w-full justify-center items-center"}>
            <li
              className={"outline-none border-primary border-2 rounded-xl py-3 px-20 text-3xl font-medium cursor-pointer text-center w-[600px]"}
              onClick={(e) => checkAnswer(e, 1)}
              ref={Option1}
            >
              {question.option1}
            </li>
            <li
              className={"outline-none border-primary border-2 rounded-xl py-3 px-20 text-3xl font-medium cursor-pointer text-center w-[600px]"}
              onClick={(e) => checkAnswer(e, 2)}
              ref={Option2}
            >
              {question.option2}
            </li>
            <li
              className={"outline-none border-primary border-2 rounded-xl py-3 px-20 text-3xl font-medium cursor-pointer text-center w-[600px]"}
              onClick={(e) => checkAnswer(e, 3)}
              ref={Option3}
            >
              {question.option3}
            </li>
            <li
              className={"outline-none border-primary border-2 rounded-xl py-3 px-20 text-3xl font-medium cursor-pointer text-center w-[600px]"}
              onClick={(e) => checkAnswer(e, 4)}
              ref={Option4}
            >
              {question.option4}
            </li>
          </ul>
          <button
            className={"font-mono text-xl border-2 border-[#f535aa] rounded-xl px-5 py-2"}
            onClick={nextQuestion}
          >
            Next
          </button>
          <div className={"text-2xl"}>{index + 1} of {Questions.length} questions</div>
        </>
      }
    </div>
  )
}