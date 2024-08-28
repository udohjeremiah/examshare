import Questions from "@/components/Questions";
import Answers from "@/components/Answers";

export default function CSC209() {
  return (
    <Questions
      school="western delta university"
      college="computing"
      department="computer science"
      session="2022/2023"
      semester="first semester"
      courseCode="CSC209"
      courseTitle="foundations of sequential programming"
      allowedTime="2hrs: 30mins"
      instruction="answer four (4) questions"
    >
      <li>
        <h4 className="mb-2 font-bold">Question 1</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            <ol className="mx-4 list-[lower-roman]">
              <li>
                Define Computer Programming{" "}
                <strong className="whitespace-nowrap">(1.5 marks)</strong>
                <Answers questionNumber="1ai" />
              </li>
              <li>
                Differentiate between interpreters and compilers{" "}
                <strong className="whitespace-nowrap">(2 marks)</strong>
                <Answers questionNumber="1aii" />
              </li>
            </ol>
          </li>
          <li>
            What is program design? List and explain five (5) aims of program
            design <strong className="whitespace-nowrap">(6 marks)</strong>
            <Answers questionNumber="1b" />
          </li>
          <li>
            With the aid of a suitable diagram, discuss the program development
            life cycle <strong className="whitespace-nowrap">(8 marks)</strong>
            <Answers questionNumber="1c" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 2</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Using a sample pseudo-code in each case describe the following
            control structures:
            <ol className="mx-4 list-[lower-roman]">
              <li>
                Sequence{" "}
                <strong className="whitespace-nowrap">(2.5 marks)</strong>
              </li>
              <li>
                Selection{" "}
                <strong className="whitespace-nowrap">(2.5 marks)</strong>
              </li>
              <li>
                Repetition{" "}
                <strong className="whitespace-nowrap">(2.5 marks)</strong>
              </li>
              <Answers questionNumber="2a" />
            </ol>
          </li>
          <li>
            Write a pseudo-code that computes and displays the product, sum,
            average of three (3) integer numbers on the screen{" "}
            <strong className="whitespace-nowrap">(5 marks)</strong>
            <Answers questionNumber="2b" />
          </li>
          <li>
            Draw the corresponding flowchart{" "}
            <strong className="whitespace-nowrap">(5 marks)</strong>
            <Answers questionNumber="2c" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 3</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Define the following Assembly language terms:
            <ol className="mx-4 list-[lower-roman]">
              <li>Mnemonics </li>
              <li>Labels </li>
              <li>Operands </li>
            </ol>
            <strong className="whitespace-nowrap">(4.5 marks)</strong>
            <Answers questionNumber="3a" />
          </li>

          <li>
            Consider the Assembly language code below and use it to answer the
            question that follows:
            <code className="mb-2 mt-2 block">
              READ X<br />
              ADD Y<br />
              STORE Z<br />
              PRINT Z<br />
              HALT
            </code>
            Explain the code, one line after the other{" "}
            <strong className="whitespace-nowrap">(3 marks)</strong>
            <Answers questionNumber="3b" />
          </li>

          <li>
            Write explanatory notes on the following:
            <ol className="mx-4 list-[lower-roman]">
              <li>High level languages</li>
              <li>Fifth generation languages</li>
            </ol>
            <strong className="whitespace-nowrap">(4 marks)</strong>
            <Answers questionNumber="3c" />
          </li>

          <li>
            <ol className="mx-4 list-[lower-roman]">
              <li>
                Convert 100<sub>10</sub> to Base 8{" "}
                <strong className="whitespace-nowrap">(2 marks)</strong>
                <Answers questionNumber="3di" />
              </li>
              <li>
                Convert 751<sub>10</sub> to Base 16{" "}
                <strong className="whitespace-nowrap">(2 marks)</strong>
                <Answers questionNumber="3dii" />
              </li>
              <li>
                Convert 22<sub>10</sub> to Base 2{" "}
                <strong className="whitespace-nowrap">(2 marks)</strong>
                <Answers questionNumber="3diii" />
              </li>
            </ol>
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 4</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Explain the following data storage representations:
            <ol className="mx-4 list-[lower-roman]">
              <li>Binary Coded Decimal</li>
              <li>Unsigned representation</li>
              <li>Signed representation</li>
            </ol>
            <strong className="whitespace-nowrap">(6 marks)</strong>
            <Answers questionNumber="4a" />
          </li>
          <li>
            <ol className="mx-4 list-[lower-roman]">
              <li>
                Store 200 and 260 in a 16-bit memory location using unsigned
                representation{" "}
                <strong className="whitespace-nowrap">(4 marks)</strong>
                <Answers questionNumber="4bi" />
              </li>
              <li>
                Store 30 and -40 in an 8-bit memory location using signed
                representation
                <strong className="whitespace-nowrap">(4 marks)</strong>
                <Answers questionNumber="4bii" />
              </li>
              <li>
                Give the BCD equivalent of 1827 and 124{" "}
                <strong className="whitespace-nowrap">(3.5 marks)</strong>
                <Answers questionNumber="4biii" />
              </li>
            </ol>
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 5</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Compute the following:
            <ol className="mx-4 list-[lower-roman]">
              <li>NOT 101101010111</li>
              <li>101001011 OR 010110100</li>
              <li>10000 AND 01011</li>
              <li>101110111011 XOR 001111011101</li>
            </ol>
            <strong className="whitespace-nowrap">(6 marks)</strong>
            <Answers questionNumber="5a" />
          </li>
          <li>
            Explain the following shift operations:
            <ol className="mx-4 list-[lower-roman]">
              <li>logical shift left</li>
              <li>logical shift right</li>
              <li>circular left shift</li>
              <li>circular right shift</li>
            </ol>
            <strong className="whitespace-nowrap">(6 marks)</strong>
            <Answers questionNumber="5b" />
          </li>
          <li>
            <ol className="mx-4 list-[lower-roman]">
              <li>
                Perform shift left operation on 1000110{" "}
                <strong className="whitespace-nowrap">(2 marks)</strong>
                <Answers questionNumber="5ci" />
              </li>
              <li>
                Carry out shift arithmetic right on 01100110{" "}
                <strong className="whitespace-nowrap">(2 marks)</strong>
                <Answers questionNumber="5cii" />
              </li>
              <li>
                Calculate logical shift right on 11001100{" "}
                <strong className="whitespace-nowrap">(1.5 marks)</strong>
                <Answers questionNumber="5ciii" />
              </li>
            </ol>
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 6</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Define machine architecture{" "}
            <strong className="whitespace-nowrap">(2 marks)</strong>
            <Answers questionNumber="6a" />
          </li>
          <li>
            Draw the Von Neuman model of a conventional digital computer and
            briefly explain its Principle of operation{" "}
            <strong className="whitespace-nowrap">(5 marks)</strong>
            <Answers questionNumber="6b" />
          </li>
          <li>
            Write explanatory notes on the following:
            <ol className="mx-4 list-[lower-roman]">
              <li>Central Processing Unit</li>
              <li>Data registers</li>
              <li>Instruction registers</li>
              <li>Program counter</li>
              <li>Memory system</li>
            </ol>
            <strong className="whitespace-nowrap">(7.5 marks)</strong>
            <Answers questionNumber="6c" />
          </li>
          <li>
            State three (3) functions of the processor{" "}
            <strong className="whitespace-nowrap">(3 marks)</strong>
            <Answers questionNumber="6d" />
          </li>
        </ol>
      </li>
    </Questions>
  );
}
