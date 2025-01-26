import Questions from "@/components/Questions";
import Answers from "@/components/Answers";

export default function BIOCHEM205() {
  return (
    <Questions
      school="western delta university"
      college="natural and applied sciences"
      department="biochemistry"
      session="2023/2024"
      semester="first semester"
      courseCode="BCH205"
      courseTitle="introduction to enzymology"
      allowedTime="2hrs"
      instruction="answer any three (3) questions"
    >
      <li>
        <h4 className="mb-2 font-bold">Question 1</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            What are Enzyme Inhibitors?
            <Answers questionNumber="1a" />
          </li>
          <li>
            Write short notes on the following:
            <ol className="mx-4 list-[lower-roman]">
              <li>Competitive inhibitors</li>
              <li>Non-competitive inhibitors</li>
              <li>Uncompetitive inhibitors</li>
            </ol>
            <Answers questionNumber="1b" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 2</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            What are cofactors? List the types of cofactors and give one example
            each.
            <Answers questionNumber="2a" />
          </li>
          <li>
            Give three (3) characteristics of coenzymes.
            <Answers questionNumber="2b" />
          </li>
          <li>
            What are the importance of cofactors and coenzyme in enzyme studies?
            <Answers questionNumber="2c" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 3</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            What are enzymes?
            <Answers questionNumber="3a" />
          </li>
          <li>
            Are all enzymes protein? Please give reasons for your answer.
            <Answers questionNumber="3b" />
          </li>
          <li>
            Explain briefly the term active site.
            <Answers questionNumber="5c" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 4</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            State the factors that affect the activity of an enzyme.
            <Answers questionNumber="4a" />
          </li>
          <li>
            Briefly explain the term apoenzyme.
            <Answers questionNumber="4b" />
          </li>
          <li>
            Comment succinctly the specificity of enzymes.
            <Answers questionNumber="4c" />
          </li>
        </ol>
      </li>
    </Questions>
  );
}
