import Questions from "@/components/Questions";
import Answers from "@/components/Answers";

export default function CSC209() {
  return (
    <Questions
      school="western delta university"
      college="computing"
      department="computer science"
      session="2023/2023"
      semester="first semester"
      courseCode="CSC209"
      courseTitle="foundations of sequential programming"
      allowedTime="2hrs: 30mins"
      instruction="Answer question one (1) and any other three (3) questions"
    >
      <li>
        <h4 className="mb-2 font-bold">Question 1 (Compulsory) (25 Marks)</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            What is program design?{" "}
            <strong className="whitespace-nowrap">(2 marks)</strong>
            <Answers questionNumber="1a" />
          </li>
          <li>
            Define the following Program design tools:
            <ol className="mx-4 list-[lower-roman]">
              <li>Algorithm</li>
              <li>Flowchart</li>
              <li>Decision Table</li>
              <li>Pseudo-Code</li>
            </ol>
            <strong className="whitespace-nowrap">(4 marks)</strong>
            <Answers questionNumber="1b" />
          </li>
          <li>
            List six (6) logical operators used in pseudocodes.{" "}
            <strong className="whitespace-nowrap">(3 marks)</strong>
            <Answers questionNumber="1c" />
          </li>
          <li>
            Write explanatory notes on the following control structures:
            <ol className="mx-4 list-[lower-roman]">
              <li>Sequence</li>
              <li>Selection</li>
              <li>Iteration</li>
            </ol>
            <strong className="whitespace-nowrap">(6 marks)</strong>
            <Answers questionNumber="1d" />
          </li>
          <li>
            Write a pseudo-code that computes and displays the product, sum, and
            average of three (3) integer numbers on the screen.{" "}
            <strong className="whitespace-nowrap">(5 marks)</strong>
            <Answers questionNumber="1e" />
          </li>
          <li>
            Draw the corresponding flowchart.{" "}
            <strong className="whitespace-nowrap">(5 marks)</strong>
            <Answers questionNumber="1f" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 2 (15 Marks)</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            What are the compilers and interpreters?{" "}
            <strong className="whitespace-nowrap">(3 marks)</strong>
            <Answers questionNumber="2a" />
          </li>
          <li>
            Briefly explain four (4) reasons why computer programs are designed.{" "}
            <strong className="whitespace-nowrap">(4 marks)</strong>
            <Answers questionNumber="2b" />
          </li>
          <li>
            Using an appropriate diagram, discuss the program development life
            cycle. <strong className="whitespace-nowrap">(8 marks)</strong>
            <Answers questionNumber="2c" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 3 (15 Marks)</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            <ol className="mx-4 list-[lower-roman]">
              <li>
                Convert 475<sub>10</sub> to Base 2.
              </li>
              <li>
                Convert 22<sub>10</sub> to Base 8.
              </li>
              <li>
                Convert 22<sub>10</sub> to Base 16.
              </li>
              <li>
                Convert 11001<sub>2</sub> to Base 10.
              </li>
            </ol>
            <strong className="whitespace-nowrap">(8 marks)</strong>
            <Answers questionNumber="3a" />
          </li>
          <li>
            Expose the differences between Machine Language and Low-level
            Language. <strong className="whitespace-nowrap">(2 marks)</strong>
            <Answers questionNumber="3b" />
          </li>
          <li>
            <ol className="mx-4 list-[lower-roman]">
              <li>
                List three (3) advantages of machine language.{" "}
                <strong className="whitespace-nowrap">(3 marks)</strong>
                <Answers questionNumber="3ci" />
              </li>
              <li>
                Identify four (4) disadvantages of machine language.{" "}
                <strong className="whitespace-nowrap">(2 marks)</strong>
                <Answers questionNumber="3cii" />
              </li>
            </ol>
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 4 (15 Marks)</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Explain the following data storage representations:
            <ol className="mx-4 list-[lower-roman]">
              <li>Binary Coded Decimal (BCD)</li>
              <li>Unsigned representation</li>
              <li>Signed representation</li>
            </ol>
            <strong className="whitespace-nowrap">(5 marks)</strong>
            <Answers questionNumber="4a" />
          </li>
          <li>
            <ol className="mx-4 list-[lower-roman]">
              <li>
                Store 200 and 260 in a 16-bit memory locating using unsigned
                representation.{" "}
                <strong className="whitespace-nowrap">(4 marks)</strong>
                <Answers questionNumber="4bi" />
              </li>
              <li>
                Store 30 and -40 in an 8-bit memory locating using signed
                representation.{" "}
                <strong className="whitespace-nowrap">(4 marks)</strong>
                <Answers questionNumber="4bii" />
              </li>
            </ol>
          </li>
          <li>
            Store -40 in an 8-bit memory location using two&apos;s complement.{" "}
            <strong className="whitespace-nowrap">(2 marks)</strong>
            <Answers questionNumber="4c" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 5 (15 marks)</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Compute the following:
            <ol className="mx-4 list-[lower-roman]">
              <li>NOT 101101010111</li>
              <li>101001011 OR 010110100</li>
              <li>10000 AND 01011</li>
              <li>101110111011 XOR 001111011101</li>
              <strong className="whitespace-nowrap">(6 marks)</strong>
              <Answers questionNumber="5a" />
            </ol>
          </li>
          <li>
            Explain the following shift operations:
            <ol className="mx-4 list-[lower-roman]">
              <li>Logical shift left</li>
              <li>Logical shift right</li>
              <li>Circular left shift</li>
              <li>Circular right shift</li>
              <strong className="whitespace-nowrap">(6 marks)</strong>
              <Answers questionNumber="5b" />
            </ol>
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
                <strong className="whitespace-nowrap">(1 marks)</strong>
                <Answers questionNumber="5cii" />
              </li>
            </ol>
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 6 (15 Marks)</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Using an appropriate example, one for each, discuss the following:
            <ol className="mx-4 list-[lower-roman]">
              <li>3-address machine</li>
              <li>2-address machine</li>
            </ol>
            <strong className="whitespace-nowrap">(5 marks)</strong>
            <Answers questionNumber="6a" />
          </li>
          <li>
            Give two (2) advantages and two (2) disadvantages of a 2-address
            machine. <strong className="whitespace-nowrap">(4 marks)</strong>
            <Answers questionNumber="6b" />
          </li>
          <li>
            What is an Addres format? State two (2) methods of Address format.{" "}
            <strong className="whitespace-nowrap">(3 marks)</strong>
            <Answers questionNumber="6c" />
          </li>
          <li>
            Show to implement the high-level statement{" "}
            <code>k = k - p - k * q</code> on a 3-address machine.{" "}
            <strong className="whitespace-nowrap">(3 marks)</strong>
            <Answers questionNumber="6d" />
          </li>
        </ol>
      </li>
    </Questions>
  );
}
