export const Questions =  [
    //easy question
    {
        question: "What is the correct way to print something the console Java",
        option1: `System.print("Hello World!")`,
        option2: `print("Hello World!");`,
        option3: `System.out.println("Hello World!");`,
        option4: `Consol.WriteLine("Hello World!");`,
        ans: 3,
    },
    // intermediate
    {
        question: "What will be teh output of the following code\nint a = 5;\nint b = 10;\nSystem.out.println(a>b? a:b);",
        option1: "5",
        option2: "10",
        option3: "true",
        option4: "false",
        ans: 2,



    },
    //Advanced
    {
        question:`What will be the output of this Java code?\npublic class Main{\n public static void main(String[] args){\n  String a ="hello";\n  String b = "hello";\n  System.out.println(a==b);\n }\n}`,
        option1: "true",
        option2: "false",
        option3: "null",
        option4: "Error",
        ans: 1,
    }


]