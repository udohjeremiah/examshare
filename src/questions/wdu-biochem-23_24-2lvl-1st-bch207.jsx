import Questions from "@/components/Questions";
import Answers from "@/components/Answers";

export default function BIOCHEM207() {
  return (
    <Questions
      school="western delta university"
      college="natural and applied sciences"
      department="biochemistry"
      session="2023/2024"
      semester="first semester"
      courseCode="BCH207"
      courseTitle="mineral metabolism"
      allowedTime="1hrs: 30mins"
      instruction="answer any three (3) questions"
    >
      <li>
        <h4 className="mb-2 font-bold">Question 1</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Calcium metabolism may sometimes inhibit the absorption of other
            nutrients: Discuss.
            <Answers questionNumber="1a" />
          </li>
          <li>
            What are the dietary sources of calcium?
            <Answers questionNumber="1b" />
          </li>
          <li>
            Succinctly comment on the health risks associated with excessive
            calcium in the blood.
            <Answers questionNumber="1c" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 2</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            List the biochemical role of magnesium and discuss the disorders
            associated with magnesium metabolism.
            <Answers questionNumber="2a" />
          </li>
          <li>
            Define the following terms and give two examples for each:
            <ol className="mx-4 list-[lower-roman]">
              <li>Micro-mineral</li>
              <li>Macro-minerals</li>
            </ol>
            <Answers questionNumber="2b" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 3</h4>
        Write a concise note on iron with specific emphasis on the following:
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Function
            <Answers questionNumber="3a" />
          </li>
          <li>
            Dietary sources
            <Answers questionNumber="3b" />
          </li>
          <li>
            Recommended dietary allowance and state why the RDA of reproductive
            women are often higher than men.
            <Answers questionNumber="3c" />
          </li>
          <li>
            Deficiency state
            <Answers questionNumber="3d" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 4</h4>
        Write a concise essay on chlorine with special highlight on the
        following:
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Biochemical role
            <Answers questionNumber="4a" />
          </li>
          <li>
            Food sources
            <Answers questionNumber="4b" />
          </li>
          <li>
            Recommended dietary allowance (RDA)
            <Answers questionNumber="4c" />
          </li>
          <li>
            Disorders associated with its metabolism
            <Answers questionNumber="4d" />
          </li>
        </ol>
      </li>
    </Questions>
  );
}
