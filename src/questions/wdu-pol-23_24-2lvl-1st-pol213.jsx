import Questions from "@/components/Questions";
import Answers from "@/components/Answers";

export default function POL213() {
  return (
    <Questions
      school="western delta university"
      college="social and management sciences"
      department="Political Science"
      session="2023/2024"
      semester="first semester"
      courseCode="POL213"
      courseTitle="Introduction of Local Government Administration"
      allowedTime="2hrs"
      instruction="Answer only four (4) questions. All unused scripts must be canceled. Failure to do this will attract five marks."
    >
      <li>
        <h4 className="mb-2 font-bold">Question 1</h4>
        What are the meaning and objectives of Local Government administration
        in Nigeria?
        <Answers questionNumber="1" />
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 2</h4>
        Discuss the outcome of the 1976 Local Government Reforms in Nigeria.
        <Answers questionNumber="2" />
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 3</h4>
        Some people were of the opinion that the problem of Local Government is
        lack of autonomy and finance while some say it is corruption. What is
        your opinion?
        <Answers questionNumber="3" />
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 4</h4>
        Outline and discuss the importance of Local Government to National
        Development.
        <Answers questionNumber="4" />
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 5</h4>
        Outline and discuss the organizational structure and functions of Local
        Government in grass-root development.
        <Answers questionNumber="5" />
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 6</h4>
        Discuss the evolution of Local Government in Nigeria.
        <Answers questionNumber="6" />
      </li>
    </Questions>
  );
}
