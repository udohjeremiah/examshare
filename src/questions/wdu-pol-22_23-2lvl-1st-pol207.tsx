import Questions from "@/components/Questions";
import Answers from "@/components/Answers";

export default function POL207() {
  return (
    <Questions
      school="western delta university"
      college="social and management sciences"
      department="Political Science"
      session="2022/2023"
      semester="first semester"
      courseCode="POL207"
      courseTitle="Introduction to Public Administration"
      allowedTime="3hrs"
      instruction="Answer four (4) questions only. All questions carry equal marks. Cancel all unused pages in the answer scripts."
    >
      <li>
        <h4 className="mb-2 font-bold">Question 1</h4>
        Define the Concept of Organisation and discuss the Benefits and Cost of
        Informal Organisation.
        <Answers questionNumber="1" />
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 2</h4>
        Discuss the Contributions of Frederick Winslow Taylor in the Principles
        of Scientific Management.
        <Answers questionNumber="2" />
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 3</h4>
        State the distinguishing features of Public and Private Administration
        and discuss the points of Affinity between the two concepts.
        <Answers questionNumber="3" />
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 4</h4>
        Is Public Administration Art of Science? Discuss the Approaches to the
        study of Public Administration.
        <Answers questionNumber="4" />
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 5</h4>
        Attempt a comprehensive definition of Public Administration and discuss
        its scope and basic Principles.
        <Answers questionNumber="5" />
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 6</h4>
        Explain the differentiating arguments in Politics — Administration
        Dichotomy.
        <Answers questionNumber="6" />
      </li>
    </Questions>
  );
}
