import Questions from "@/components/Questions";
import Answers from "@/components/Answers";

export default function EMT103() {
  return (
    <Questions
      school="western delta university"
      college="natural and applied sciences"
      department="environmental management and toxicology"
      session="2022/2023"
      semester="first semester"
      courseCode="EMT103"
      courseTitle="Practical Biology I"
      allowedTime="1hr: 30mins"
      instruction="answer ALL questions"
    >
      <li>
        <h4 className="mb-2 font-bold">Question 1</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Identify specimen A
            <Answers questionNumber="1a" />
          </li>
          <li>
            State the function of any 6 parts
            <Answers questionNumber="1b" />
          </li>
          <li>
            Write on View and Magnification in scientific drawings.
            <Answers questionNumber="1c" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 2</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Define a laboratory. State at least 5 equipments in the laboratory
            and their uses
            <Answers questionNumber="2a" />
          </li>
          <li>
            List ten laboratory rules.
            <Answers questionNumber="2b" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 3</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Identify specimen B.
            <Answers questionNumber="3a" />
          </li>
          <li>
            What kingdom does it belong to?
            <Answers questionNumber="3b" />
          </li>
          <li>
            State two economic importance of this Kingdom
            <Answers questionNumber="3c" />
          </li>
          <li>
            Mention 2 symbiotic features of this kingdom with other organisms.
            <Answers questionNumber="3d" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 4</h4>
        Identify, draw and label specimen C.
        <Answers questionNumber="4" />
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 5</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Identify, draw and label specimen D. What kingdom and Division does
            it belong to? Which habitat is this specimen found?
            <Answers questionNumber="5a" />
          </li>
          <li>
            Is specimen E monocot or a dicot? Classify specimen E
            <Answers questionNumber="5b" />
          </li>
        </ol>
      </li>
    </Questions>
  );
}
