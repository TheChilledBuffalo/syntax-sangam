export const Questions =  [
    //easy question
    {
        question: "What is the correct way to define a function in Python?",
        option1: "def myFunction",
        option2: "function myFunction()",
        option3: "def myFunction()",
        option4: "def: myFunction()",
        ans: 3,
    },
    // intermediate
    {
        question: "What will the following Python code output?\nx=[1,2,3]\ny=x\ny.append(4)\nprint(x)",
        option1: "[1,2,3]",
        option2: "[1,2,3,4]",
        option3: "[1,2]",
        option4: "Error",
        ans: 2,
    },
    //Advanced
    {
        question:"what is the output of this Python code\ndef foo(x,y=[]):\n y.append(x)\n return y\n\nprint(foo(1))\nprint(foo(2)) ",
        option1: "[1][2]",
        option2: "[1][1,2]",
        option3: "Error",
        option4: "[2][1,2]",
        ans: 2,
    }
]