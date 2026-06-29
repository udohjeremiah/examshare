import Questions from "@/components/Questions";
import Answers from "@/components/Answers";

export default function POL102() {
  return (
    <Questions
      school="western delta university"
      college="social and management sciences"
      department="Political Science"
      session="2022/2023"
      semester="second semester"
      courseCode="POL102"
      courseTitle="Forms and Organs of Government"
      allowedTime="2hrs"
      instruction="All unused scripts must be canceled. Failure to do so will result in a penalty of deducting five marks."
    >
      <li>
        <h4 className="mb-2 font-bold">Question 1</h4>
        What do you understand by Dictatorship? How is it different from
        fascism?
        <Answers questionNumber="1" />
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 2</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            What do you understand by constitutional convention?
            <Answers questionNumber="2a" />
          </li>
          <li>
            Why is change in constitution difficult?
            <Answers questionNumber="2b" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 3</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            What do you understand by separation of powers?
            <Answers questionNumber="3a" />
          </li>
          <li>
            To what extent is there separation of power in the British
            constitution?
            <Answers questionNumber="3b" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 4</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Discuss the different types of legislature you have studied
            <Answers questionNumber="4a" />
          </li>
          <li>
            What are the advantages?
            <Answers questionNumber="4b" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 5</h4>
        Identify and discuss the major features of any federal state within a
        political system
        <Answers questionNumber="5" />
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 6</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Explain a unitary system of government as a political concept
            <Answers questionNumber="6a" />
          </li>
          <li>
            Highlight the features of a unitary system of government
            <Answers questionNumber="6b" />
          </li>
        </ol>
      </li>
    </Questions>
  );
}
