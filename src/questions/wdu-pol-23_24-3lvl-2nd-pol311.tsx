import Questions from "@/components/Questions";
import Answers from "@/components/Answers";

export default function POL313() {
  return (
    <Questions
      school="western delta university"
      college="social and management sciences"
      department="Political Science"
      session="2023/2024"
      semester="second semester"
      courseCode="POL311"
      courseTitle="Theories of International Relations"
      allowedTime="2.15hrs"
      instruction="Answer any three (3) questions."
    >
      <li>
        <h4 className="mb-2 font-bold">Question 1</h4>
        Discuss the Realist approach to International Relations.
        <Answers questionNumber="1" />
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 2</h4>
        What is the Game of Chicken? Discuss
        <Answers questionNumber="2" />
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 3</h4>
        Though Games have limitations, they also have usefulness. Discuss the
        usefulness of games.
        <Answers questionNumber="3" />
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 4</h4>
        Discuss the Analytical Approach in Internationl Relations.
        <Answers questionNumber="4" />
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 5</h4>
        Identify two (2) types of games. Discuss three (3) limitations of Games.
        <Answers questionNumber="5" />
      </li>
    </Questions>
  );
}
