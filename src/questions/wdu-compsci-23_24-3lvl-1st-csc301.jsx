import Questions from "@/components/Questions";
import Answers from "@/components/Answers";

export default function CSC301() {
  return (
    <Questions
      school="western delta university"
      college="computing"
      department="computer science"
      session="2023/2024"
      semester="first semester"
      courseCode="CSC301"
      courseTitle="digital design"
      allowedTime="2hrs: 30mins"
      instruction="Question One and any other three (3) questions"
    >
      <li>
        <h4 className="mb-2 font-bold">Question 1 (Compulsory) (25 marks)</h4>
        Using the Quine-McCuskey Algorithm method, minimise the following
        Boolean expression: F(A, B, C, D) = ∑m(4, 8, 10, 11, 12, 15) + d(9, 14){" "}
        <strong className="whitespace-nowrap">(25 marks)</strong>
        <Answers questionNumber="1" />
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 2 (15 marks)</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Name three types of Logic gates and draw their truth table.{" "}
            <strong className="whitespace-nowrap">(6 marks)</strong>
            <Answers questionNumber="2a" />
          </li>
          <li>
            State four Postulate of the Boolean Algebra{" "}
            <strong className="whitespace-nowrap">(6 marks)</strong>
            <Answers questionNumber="2b" />
          </li>
          <li>
            Write short note on system design.{" "}
            <strong className="whitespace-nowrap">(3 marks)</strong>
            <Answers questionNumber="2c" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 3 (15 marks)</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            State the De Morgan&apos;s theorem.{" "}
            <strong className="whitespace-nowrap">(5 marks)</strong>
            <Answers questionNumber="3a" />
          </li>
          <li>
            Draw a duality of gates arising from De Morgan&apos;s theorem.{" "}
            <strong className="whitespace-nowrap">(5 marks)</strong>
            <Answers questionNumber="3b" />
          </li>
          <li>
            Write short on Application of Logic Circuits{" "}
            <strong className="whitespace-nowrap">(5 marks)</strong>
            <Answers questionNumber="3c" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 4 (15 marks)</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Name five features of the Karnaugh map.{" "}
            <strong className="whitespace-nowrap">(5 marks)</strong>
            <Answers questionNumber="4a" />
          </li>
          <li>
            Draw the AND-OR Circuit realization for minterm expresison.{" "}
            <strong className="whitespace-nowrap">(5 marks)</strong>
            <Answers questionNumber="4b" />
          </li>
          <li>
            Draw the OR-AND Circuit realization for maxterm expression.{" "}
            <strong className="whitespace-nowrap">(5 marks)</strong>
            <Answers questionNumber="4c" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 5 (15 marks)</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            What is an encoder? What is the difference between an encoder and a
            decoder? <strong className="whitespace-nowrap">(6 marks)</strong>
            <Answers questionNumber="5a" />
          </li>
          <li>
            What is a multiplexer? Explain the functionality of a multiplexer
            circuit? <strong className="whitespace-nowrap">(5 marks)</strong>
            <Answers questionNumber="5b" />
          </li>
          <li>
            Logic design{" "}
            <strong className="whitespace-nowrap">(4 marks)</strong>
            <Answers questionNumber="5c" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 6 (15 marks)</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            What is a microprocessor?
            <strong className="whitespace-nowrap">(4 marks)</strong>
            <Answers questionNumber="6a" />
          </li>
          <li>
            Explain parallel data transmission and differentiate it from serial
            data transmission.{" "}
            <strong className="whitespace-nowrap">(7 marks)</strong>
            <Answers questionNumber="6b" />
          </li>
          <li>
            Write short notes on Circuit design{" "}
            <strong className="whitespace-nowrap">(4 marks)</strong>
            <Answers questionNumber="6c" />
          </li>
        </ol>
      </li>
    </Questions>
  );
}
