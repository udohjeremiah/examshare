import Questions from "@/components/Questions";
import Answers from "@/components/Answers";

export default function BIOCHEM203() {
  return (
    <Questions
      school="western delta university"
      college="natural and applied sciences"
      department="biochemistry"
      session="2023/2024"
      semester="first semester"
      courseCode="BCH203"
      courseTitle="analytical biochemistry"
      allowedTime="2hrs"
      instruction="answer any three (3) questions"
    >
      <li>
        <h4 className="mb-2 font-bold">Question 1</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            What is chromatography? Give three components that form the basis of
            all chromatography technique.
            <Answers questionNumber="1a" />
          </li>
          <li>
            What is the principle of chromatography?
            <Answers questionNumber="1b" />
          </li>
          <li>
            Give two examples each of column and planar chromatography.
            <Answers questionNumber="1c" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 2</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Briefly explain Ion Exchange Chromatography.
            <Answers questionNumber="2a" />
          </li>
          <li>
            Name and explain the types of ion exchanges used in Ion Exchange
            Chromatography.
            <Answers questionNumber="2b" />
          </li>
          <li>
            Give two (2) applications of ion exchange chromatography.
            <Answers questionNumber="2c" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 3</h4>
        Discuss the procedure for Thin-Layer chromatography.
        <Answers questionNumber="3" />
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 4</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Define the following terms:
            <ol className="mx-4 list-[lower-roman]">
              <li>Sample</li>
              <li>Population</li>
              <li>Sampling</li>
            </ol>
            <Answers questionNumber="4a" />
          </li>
          <li>
            Explain briefly probability and non-probability sampling.
            <Answers questionNumber="4b" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 5</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Explain the term centrifugation.
            <Answers questionNumber="5a" />
          </li>
          <li>
            Explain the basic principle of centrifugation.
            <Answers questionNumber="5b" />
          </li>
          <li>
            With the aid of a diagram, explain the operation of a centrifuge.
            <Answers questionNumber="5c" />
          </li>
        </ol>
      </li>
    </Questions>
  );
}
