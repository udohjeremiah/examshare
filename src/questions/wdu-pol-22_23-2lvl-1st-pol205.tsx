import Questions from "@/components/Questions";
import Answers from "@/components/Answers";

export default function POL205() {
  return (
    <Questions
      school="western delta university"
      college="social and management sciences"
      department="Political Science"
      session="2022/2023"
      semester="first semester"
      courseCode="POL205"
      courseTitle="Introduction to Political Analysis"
      allowedTime="2hrs"
      instruction="Answer any four (4) questions. All questions carry equal marks"
    >
      <li>
        <h4 className="mb-2 font-bold">Question 1</h4>
        Expatiate on the reasons for studying political analysis.
        <Answers questionNumber="1" />
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 2</h4>
        Theorizes the theory of power in studying political analysis.
        <Answers questionNumber="2" />
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 3</h4>
        Discuss the features of behavioral approach in political science.
        <Answers questionNumber="3" />
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 4</h4>
        State three contending views of democracy and briefly explain one.
        <Answers questionNumber="4" />
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 5</h4>
        Briefly elucidate on structural functionalist approach in the study of
        political analysis.
        <Answers questionNumber="5" />
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 6</h4>
        Discuss the attributes of the rule of law according to Professor A. V.
        Dicey.
        <Answers questionNumber="6" />
      </li>
    </Questions>
  );
}
