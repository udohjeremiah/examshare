import Questions from "@/components/Questions";
import Answers from "@/components/Answers";

export default function POL205() {
  return (
    <Questions
      school="western delta university"
      college="social and management sciences"
      department="Political Science"
      session="2023/2024"
      semester="second semester"
      courseCode="POL205"
      courseTitle="Introduction to International Relations"
      allowedTime="2.15hrs"
      instruction="Answer any three (3) questions."
    >
      <li>
        <h4 className="mb-2 font-bold">Question 1</h4>
        Discuss International Relations:
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            As a Principle
            <Answers questionNumber="1a" />
          </li>
          <li>
            As a Situation
            <Answers questionNumber="1b" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 2</h4>
        Discuss the Realist Approach to International Relations.
        <Answers questionNumber="2" />
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 3</h4>
        Briefly discuss:
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Individual
            <Answers questionNumber="3a" />
          </li>
          <li>
            State Level
            <Answers questionNumber="3b" />
          </li>
        </ol>
        of analysis in International Relations
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 4</h4>
        Identify and briefly discuss three (3) concepts of International
        Relations.
        <Answers questionNumber="4" />
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 5</h4>
        Discuss in detail Balance of Power in International Relations.
        <Answers questionNumber="5" />
      </li>
    </Questions>
  );
}
