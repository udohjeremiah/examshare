export default function CSC209() {
  return (
    <article className="flex flex-col gap-4">
      <hgroup>
        <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">
          DEPARTMENT OF COMPUTER SCIENCE
          <br />
          COLLEGE OF COMPUTING
          <br />
          WESTERN DELTA UNIVERSITY
        </h3>
        <p className="font-medium">
          First Semester Examination 2022/2023 SESSION
        </p>
        <p className="font-medium">
          CSC209 - Foundations Of Sequential Programming Time: 2hrs: 30mins
        </p>
        <p className="font-medium">Answer Four (4) Questions</p>
      </hgroup>

      <hr />

      <ol className="flex flex-col gap-10 px-4">
        <li>
          <h4 className="mb-2 font-bold">Question 1</h4>
          <ol className="flex list-[lower-alpha] flex-col gap-2">
            <li>
              <ol className="mx-4 list-[lower-roman]">
                <li>
                  Define Computer Programming{" "}
                  <strong className="whitespace-nowrap">(1.5 marks)</strong>
                </li>
                <li>
                  Differentiate between interpreters and compilers{" "}
                  <strong className="whitespace-nowrap">(2 marks)</strong>
                </li>
              </ol>
            </li>
            <li>
              What is program design? List and explain five (5) aims of program
              design <strong className="whitespace-nowrap">(6 marks)</strong>
            </li>
            <li>
              With the aid of a suitable diagram, discuss the program
              development life cycle{" "}
              <strong className="whitespace-nowrap">(8 marks)</strong>
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
                  Repitition{" "}
                  <strong className="whitespace-nowrap">(2.5 marks)</strong>
                </li>
              </ol>
            </li>
            <li>
              Write a pseudo-code that computes and displays the product, sum,
              average of three (3) integer numbers on the screen{" "}
              <strong className="whitespace-nowrap">(5 marks)</strong>
            </li>
            <li>
              Draw the corresponding flowchart{" "}
              <strong className="whitespace-nowrap">(5 marks)</strong>
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
            </li>

            <li>
              Write explanatory notes on the following:
              <ol className="mx-4 list-[lower-roman]">
                <li>High level languages</li>
                <li>Fifth generation languages</li>
              </ol>
              <strong className="whitespace-nowrap">(4 marks)</strong>
            </li>

            <li>
              <ol className="mx-4 list-[lower-roman]">
                <li>
                  Convert 100<sub>10</sub> to Base 8{" "}
                  <strong className="whitespace-nowrap">(2 marks)</strong>
                </li>
                <li>
                  Convert 751<sub>10</sub> to Base 16{" "}
                  <strong className="whitespace-nowrap">(2 marks)</strong>
                </li>
                <li>
                  Convert 22<sub>10</sub> to Base 2{" "}
                  <strong className="whitespace-nowrap">(2 marks)</strong>
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
            </li>
            <li>
              <ol className="mx-4 list-[lower-roman]">
                <li>
                  Store 200 and 260 in a 16-bit memory location using unsigned
                  representation{" "}
                  <strong className="whitespace-nowrap">(4 marks)</strong>
                </li>
                <li>
                  Store 30 and -40 in an 8-bit memory location using signed
                  representation
                  <strong className="whitespace-nowrap">(4 marks)</strong>
                </li>
                <li>
                  Give the BCD equivalent of 1827 and 124{" "}
                  <strong className="whitespace-nowrap">(3.5 marks)</strong>
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
            </li>
            <li>
              <ol className="mx-4 list-[lower-roman]">
                <li>
                  Perform shift left operation on 1000110{" "}
                  <strong className="whitespace-nowrap">(2 marks)</strong>
                </li>
                <li>
                  Carry out shift arithmetic right on 01100110{" "}
                  <strong className="whitespace-nowrap">(2 marks)</strong>
                </li>
                <li>
                  Calculate logical shift right on 11001100{" "}
                  <strong className="whitespace-nowrap">(1.5 marks)</strong>
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
            </li>
            <li>
              Draw the Von Neuman model of a conventional digital computer and
              briefly explain its Principle of operation{" "}
              <strong className="whitespace-nowrap">(5 marks)</strong>
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
            </li>
            <li>
              State three (3) functions of the processor{" "}
              <strong className="whitespace-nowrap">(3 marks)</strong>
            </li>
          </ol>
        </li>
      </ol>
    </article>
  );
}
