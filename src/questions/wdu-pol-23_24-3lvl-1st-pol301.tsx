import Questions from "@/components/Questions";
import Answers from "@/components/Answers";

export default function POL301() {
  return (
    <Questions
      school="western delta university"
      college="social and management sciences"
      department="Political Science"
      session="2023/2024"
      semester="first semester"
      courseCode="POL301"
      courseTitle="History of Political Thought I"
      allowedTime="2hrs: 15mins"
      instruction="Answer any three (3) questions"
    >
      <li>
        <h4 className="mb-2 font-bold">Question 1</h4>
        Are there any similarities in the political thoughts of Plato and
        Aristotle? If yes, state any four.
        <Answers questionNumber="1" />
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 2</h4>
        Examine four differences in the political thoughts of Thomas Hobbes and
        John Locke.
        <Answers questionNumber="2" />
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 3</h4>
        State any six principles Machiavelli felt could help a leader
        consolidate on power and why.
        <Answers questionNumber="3" />
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 4</h4>
        For J. J. Rousseau there are three major reasons why man had to
        transcend the state of nature. Examine them.
        <Answers questionNumber="4" />
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 5</h4>
        What role did the Babylonians play in the evolution of political
        thought?
        <Answers questionNumber="5" />
      </li>
    </Questions>
  );
}
