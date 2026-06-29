import Questions from "@/components/Questions";
import Answers from "@/components/Answers";

export default function CSC101() {
  return (
    <Questions
      school="western delta university"
      college="computing"
      department="computer science"
      session="2022/2023"
      semester="first semester"
      courseCode="CSC101"
      courseTitle="introduction to computers and spreadsheet analysis (FOR SCIENCES)"
      allowedTime="2hrs"
      instruction="answer question 1 and any other THREE questions"
    >
      <li>
        <h4 className="mb-2 font-bold">Question 1 (Compulsory)</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Highlight one major contribution of the Babbage Analytical Engine{" "}
            <strong className="whitespace-nowrap">(2 marks)</strong>
            <Answers questionNumber="1a" />
          </li>
          <li>
            State the key element of the Von Neumann computer architecture{" "}
            <strong className="whitespace-nowrap">(2 marks)</strong>
            <Answers questionNumber="1b" />
          </li>
          <li>
            State the result of the binary addition:{" "}
            <code>
              10001101<sub>2</sub>
            </code>{" "}
            +{" "}
            <code>
              11001101<sub>2</sub>
            </code>{" "}
            <strong className="whitespace-nowrap">(2 marks)</strong>
            <Answers questionNumber="1c" />
          </li>
          <li>
            State the name of the first computer programming language developed{" "}
            <strong className="whitespace-nowrap">(2 marks)</strong>
            <Answers questionNumber="1d" />
          </li>
          <li>
            State the major application area of the first computer developed
            during the Second War World{" "}
            <strong className="whitespace-nowrap">(2 marks)</strong>
            <Answers questionNumber="1e" />
          </li>
          <li>
            State the name of the input and output units of a microwave oven
            controller <strong className="whitespace-nowrap">(2 marks)</strong>
            <Answers questionNumber="1f" />
          </li>
          <li>
            If a document of <code>9024MB</code> of data is stored in a hard
            disk, how many number of the hard disk sectors is used?{" "}
            <strong className="whitespace-nowrap">(2 marks)</strong>
            <Answers questionNumber="1g" />
          </li>
          <li>
            If there are 56250 words in a document, determine the storage size
            of the document in megabytes.{" "}
            <strong className="whitespace-nowrap">(2 marks)</strong>
            <Answers questionNumber="1h" />
          </li>
          <li>
            Highlight two disadvantages of the cache memory of the computer.{" "}
            <strong className="whitespace-nowrap">(2 marks)</strong>
            <Answers questionNumber="1i" />
          </li>
          <li>
            The following: 50 45 83 64 30 38 48 61 73 47 are the scores of ten
            students in GST101 test. If the scores are stored in cell addresses{" "}
            <code>D1</code> through <code>D10</code>, and given the passing
            score is 55, write an Excel formula in:
            <ol className="mx-4 list-[lower-roman]">
              <li>
                Cell address <code>D12</code> to find the number of students
                that score at least the passing score.
              </li>
              <li>
                Cell address <code>D13</code> the number of students that score
                below the passing score.
              </li>
            </ol>{" "}
            <strong className="whitespace-nowrap">(4 marks)</strong>
            <Answers questionNumber="1j" />
          </li>
          <li>
            Convert the binary number{" "}
            <code>
              110011.101<sub>2</sub>
            </code>{" "}
            to hexadecimal{" "}
            <strong className="whitespace-nowrap">(3 marks)</strong>
            <Answers questionNumber="1k" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 2</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            State two limitations of the Colossus computer to Computer industry{" "}
            <strong className="whitespace-nowrap">(4 marks)</strong>
            <Answers questionNumber="2a" />
          </li>
          <li>
            State five components of the microcontroller{" "}
            <strong className="whitespace-nowrap">(5 marks)</strong>
            <Answers questionNumber="2b" />
          </li>
          <li>
            The following expression:{" "}
            <code>Pay = (Hours Worked * Hourly Rate) + Allowance</code> is used
            to compute employee pay in a given establishment. Format a worksheet
            that computes employee pay using the following instructions:
            <ol className="mx-4 list-[lower-roman]">
              <li>
                Enter the labels: Hours Worked, Hourly Rate, and Allowance in
                cells <code>A1</code> through <code>A3</code> respectively.
              </li>
              <li>
                Enter the values 56, 687, 20000 of the labels in cells{" "}
                <code>B1</code> through <code>B3</code> respectively.
              </li>
              <li>
                Enter the label Pay in cell <code>B4</code>
              </li>
              <li>Enter the formula to compute employee pay in cell C4.</li>
            </ol>
            <strong className="whitespace-nowrap">(6 marks)</strong>
            <Answers questionNumber="2c" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 3</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            State two Excel data types that are not numeric in nature.{" "}
            <strong className="whitespace-nowrap">(2 marks)</strong>
            <Answers questionNumber="3a" />
          </li>
          <li>
            The score of a student in a given examination are: 56 60 77 70 60 61
            66. Format a worksheet using the following instructions:
            <ol className="mx-4 list-[lower-roman]">
              <li>Enter the labels Scores in cell A1</li>
              <li>
                Enter the score values in cell A2 through A8 respectively.
              </li>
              <li>
                Enter the labels: Sum, Mean, Standard Deviation, and Variance in
                cells <code>C5</code> through <code>C8</code> respectively.
              </li>
              <li>
                Write formulae in cells <code>D5</code> through <code>D8</code>{" "}
                to compute Sum, Mean, Standard Deviation, and Variance
                respectively.
              </li>
            </ol>{" "}
            <strong className="whitespace-nowrap">(7 marks)</strong>
            <Answers questionNumber="3b" />
          </li>
          <li>
            State the name of the first Internet Browser to use both text and
            image in a webpage.{" "}
            <strong className="whitespace-nowrap">(2 marks)</strong>
            <Answers questionNumber="3c" />
          </li>
          <li>
            Determine the number of megabytes in 256000 bits of storage.{" "}
            <strong className="whitespace-nowrap">(4 marks)</strong>
            <Answers questionNumber="3d" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 4</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Define a Service program{" "}
            <strong className="whitespace-nowrap">(2 marks)</strong>
            <Answers questionNumber="4a" />
          </li>
          <li>
            State four characteristic features of hexadecimal number system{" "}
            <strong className="whitespace-nowrap">(2 marks)</strong>
            <Answers questionNumber="4b" />
          </li>
          <li>
            Convert{" "}
            <code>
              19FDE<sub>16</sub>
            </code>{" "}
            to decimal <strong className="whitespace-nowrap">(3 marks)</strong>
            <Answers questionNumber="4c" />
          </li>
          <li>
            State the necessary steps to insert a new row in Microsoft Excel{" "}
            <strong className="whitespace-nowrap">(2 marks)</strong>
            <Answers questionNumber="4d" />
          </li>
          <li>
            State the two major functions of the operating system{" "}
            <strong className="whitespace-nowrap">(2 marks)</strong>
            <Answers questionNumber="4e" />
          </li>
          <li>
            Compute the product of the binary operation: <code>110101</code> *{" "}
            <code>111</code>{" "}
            <strong className="whitespace-nowrap">(4 marks)</strong>
            <Answers questionNumber="4f" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 5</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            State the steps necessary to increase Excel column width{" "}
            <strong className="whitespace-nowrap">(2 marks)</strong>
            <Answers questionNumber="5a" />
          </li>
          <li>
            Write an Excel formula to compute{" "}
            <code>
              A = P(1 + R)<sup>N</sup>
            </code>
            , if the labels of P is in cell address <code>A2</code>, R is in
            cell address <code>A3</code>, and N is in cell address{" "}
            <code>A4</code> and the values of P, R, N in cell addresses{" "}
            <code>B2</code> through <code>B4</code> respectively. The label A in
            cell address <code>A6</code> and enter a formula to compute A in
            cell address <code>B6</code>. Note <code>P = 5500</code>,{" "}
            <code>R = 0.25</code>, and <code>N = 20</code>. Show your worksheet{" "}
            <strong className="whitespace-nowrap">(5 marks)</strong>
            <Answers questionNumber="5b" />
          </li>
          <li>
            Give the octal representation of the following:{" "}
            <code>
              1110110010<sub>2</sub>
            </code>{" "}
            <strong className="whitespace-nowrap">(4 marks)</strong>
            <Answers questionNumber="5c" />
          </li>
          <li>
            State the hallmark of third generation computers{" "}
            <strong className="whitespace-nowrap">(2 marks)</strong>
            <Answers questionNumber="5d" />
          </li>
          <li>
            Define an Embedded system{" "}
            <strong className="whitespace-nowrap">(2 marks)</strong>
            <Answers questionNumber="5e" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 6</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            <ol className="mx-4 list-[lower-roman]">
              <li>
                Highlight two functions of the CPU control unit.{" "}
                <strong className="whitespace-nowrap">(2 marks)</strong>
                <Answers questionNumber="6ai" />
              </li>
              <li>
                Highlight two major characteristics of the RAM{" "}
                <strong className="whitespace-nowrap">(2 marks)</strong>
                <Answers questionNumber="6aii" />
              </li>
            </ol>
          </li>
          <li>
            <ol className="mx-4 list-[lower-roman]">
              <li>
                State the name of the first application package developed{" "}
                <strong className="whitespace-nowrap">(2 marks)</strong>
                <Answers questionNumber="6bi" />
              </li>
              <li>
                In what generation of computers was the named application
                package developed{" "}
                <strong className="whitespace-nowrap">(2 marks)</strong>
                <Answers questionNumber="6bii" />
              </li>
            </ol>
          </li>
          <li>
            Compute the difference of the binary operation using 2&apos;s
            complement: <code>10110</code> - <code>01010</code>{" "}
            <strong className="whitespace-nowrap">(3 marks)</strong>
            <Answers questionNumber="6c" />
          </li>
          <li>
            Highlight four major characteristic features of first generation
            computers. <strong className="whitespace-nowrap">(2 marks)</strong>
            <Answers questionNumber="6d" />
          </li>
          <li>
            State the major distinction between the Excel functions:{" "}
            <code>COUNT</code> and <code>COUNTIF</code>{" "}
            <strong className="whitespace-nowrap">(2 marks)</strong>
            <Answers questionNumber="6e" />
          </li>
        </ol>
      </li>
    </Questions>
  );
}
