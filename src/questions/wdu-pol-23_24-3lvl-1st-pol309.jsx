import Questions from "@/components/Questions";
import Answers from "@/components/Answers";

export default function POL309() {
  return (
    <Questions
      school="western delta university"
      college="social and management sciences"
      department="Political Science"
      session="2023/2024"
      semester="first semester"
      courseCode="POL309"
      courseTitle="Politics of Development and Underdevelopment"
      allowedTime="3hrs"
      instruction="Answer four (4) questions only. Cancel unused spaces in your answer booklet"
    >
      <li>
        <h4 className="mb-2 font-bold">Question 1</h4>
        Dependency Theory explains Underdevelopment as a conditioning situation
        in which the Economies of one group of countries are conditioned by the
        Development and Expansion of the others. Discuss. Make appropriate
        recommendations to combat this scourge.
        <Answers questionNumber="1" />
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 2</h4>
        Differentiate between Growth and Development. Using Nigeria as a case
        study, discuss the essential features of its Underdevelopment.
        <Answers questionNumber="2" />
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 3</h4>
        Discuss Modernization as a Development Model and account for the
        criticisms of this model by scholars.
        <Answers questionNumber="3" />
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 4</h4>
        Discuss W.W. Rostow&apos;s linear Growth Theory and Arthur W,
        Lewis&apos;s Two Factor Theory in Development Studies.
        <Answers questionNumber="4" />
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 5</h4>
        Discuss the Marxian Argument that Societal Development and
        Transformation of societies is through class conflicts rather than
        through Evolutionary process. Identify its major criticisms.
        <Answers questionNumber="5" />
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 6</h4>
        Give an in-depth definition of Foreign Aid and account for its relevance
        in less Developed Countries while highlighting its shortcomings.
        <Answers questionNumber="6" />
      </li>
    </Questions>
  );
}
