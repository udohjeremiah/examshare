import { Answers } from "@/components/answers";
import { Questions } from "@/components/questions";

export function PastQuestion() {
  return (
    <Questions
      allowedTime="2hrs"
      college="social and management sciences"
      courseCode="BUS202"
      courseTitle="principles of management II"
      department="management sciences"
      instruction="answer ANY THREE(3) questions"
      school="western delta university"
      semester="second semester"
      session="2022/2023"
    >
      <li>
        <h4 className="mb-2 font-bold">Question 1</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            List five (5) management theories <Answers questionNumber="1a" />
          </li>
          <li>
            Explain three (3) of the theories listed in (a) above{" "}
            <Answers questionNumber="1b" />
          </li>
        </ol>
        <strong className="whitespace-nowrap">(13.33 marks)</strong>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 2</h4>
        With the aid of a diagram, explain the meaning of a model{" "}
        <strong className="whitespace-nowrap">(23.33 marks)</strong>
        <Answers questionNumber="2" />
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 3</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            What is conflict?{" "}
            <strong className="whitespace-nowrap">(7.33 marks)</strong>
            <Answers questionNumber="3a" />
          </li>
          <li>
            Explain four (4) strategies that can be employed to deal with
            conflict <strong className="whitespace-nowrap">(16 marks)</strong>
            <Answers questionNumber="3b" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 4</h4>
        With the aid of a diagram, explain the structure of the business
        environment <strong className="whitespace-nowrap">(23.33 marks)</strong>
        <Answers questionNumber="4" />
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 5</h4>
        With the aid of a diagram, explain the process of environmental analysis
        <Answers questionNumber="5" />
      </li>
    </Questions>
  );
}
