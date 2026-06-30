import { Answers } from "@/components/answers";
import { Questions } from "@/components/questions";

export function PastQuestion() {
  return (
    <Questions
      allowedTime="2hrs"
      college="social and management sciences"
      courseCode="POL209"
      courseTitle="Comparative Political Science"
      department="Political Science"
      instruction="Attempt any four (4) questions. Questions number 1-6 carries 17.5 marks each. Present all your points in a coherent and orderly manner."
      school="western delta university"
      semester="first semester"
      session="2022/2023"
    >
      <li>
        <h4 className="mb-2 font-bold">Question 1</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Define Comparative Politics?
            <Answers questionNumber="1a" />
          </li>
          <li>
            Identify the eras or epochs in the evolution of Comparative Politics
            and write short note on each of the phases.
            <Answers questionNumber="1b" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 2</h4>
        Identify and elaborate the basic approaches to the study of Comparative
        Politics.
        <Answers questionNumber="2" />
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 3</h4>
        Explain the rational for the study of Comparative Politics and explain
        the different strategies adopted in comparative study.
        <Answers questionNumber="3" />
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 4</h4>
        Explain the central objectives and advantages of Comparative Politics as
        a sub-field of politial science.
        <Answers questionNumber="4" />
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 5</h4>
        Identify the main focus on Comparative Politics from the stand point of
        the functions of government.
        <Answers questionNumber="5" />
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 6</h4>
        Write short notes on any three (3) of the following:
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Concepts
            <Answers questionNumber="6a" />
          </li>
          <li>
            Models
            <Answers questionNumber="6b" />
          </li>
          <li>
            Theories
            <Answers questionNumber="6c" />
          </li>
          <li>
            Classification
            <Answers questionNumber="6d" />
          </li>
          <li>
            Case study
            <Answers questionNumber="6e" />
          </li>
        </ol>
      </li>
    </Questions>
  );
}
