import Questions from "@/components/Questions";
import Answers from "@/components/Answers";

export default function POL205() {
  return (
    <Questions
      school="western delta university"
      college="social and management sciences"
      department="Political Science"
      session="2022/2023"
      semester="second semester"
      courseCode="POL205"
      courseTitle="Introduction to International Relations"
      allowedTime="2hrs"
      instruction="Answer any three (3) Questions. One mark for good use of English Language"
    >
      <li>
        <h4 className="mb-2 font-bold">Question 1</h4>
        Identify and discuss three (3) reasons why countries establish relations
        with each other.
        <Answers questionNumber="1" />
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 2</h4>
        Identify and discuss there (3) ways that a leader may affect Foreign
        Policy.
        <Answers questionNumber="2" />
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 3</h4>
        Identiy and discuss three (3) underlying concepts of Realism.
        <Answers questionNumber="3" />
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 5</h4>
        Foreign Policy is affected by various factors. Discuss citing three (3)
        examples.
        <Answers questionNumber="5" />
      </li>
    </Questions>
  );
}
