import Questions from "@/components/Questions";
import Answers from "@/components/Answers";

export default function POL307() {
  return (
    <Questions
      school="western delta university"
      college="social and management sciences"
      department="Political Science"
      session="2023/2024"
      semester="first semester"
      courseCode="POL307"
      courseTitle="Public Administration in Nigeria"
      allowedTime="2hrs"
      instruction="All unused scripts must be canceled. Failure to do this will attract five marks."
    >
      <li>
        <h4 className="mb-2 font-bold">Question 1</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            What is your understanding of the term &quot;Public
            Administration&quot;?
            <Answers questionNumber="1a" />
          </li>
          <li>
            Discuss the major characteristics of Public Administration you have
            studied.
            <Answers questionNumber="1b" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 2</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Outline the different approaches to the study of Public
            Administration in Nigeria.
            <Answers questionNumber="2a" />
          </li>
          <li>
            Discuss only three (3) out of the whole approaches.
            <Answers questionNumber="2b" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 3</h4>
        Discuss only three (3) of the Principles of Public Administration you
        have studied.
        <Answers questionNumber="3" />
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 4</h4>
        Differentiate Public Administration from Private Administration.
        <Answers questionNumber="4" />
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 5</h4>
        Examine the development of the Nigerian Civil Service you have studied.
        <Answers questionNumber="5" />
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 6</h4>
        Examine the factors that influenced and shaped the development of Public
        Administration in Nigeria.
        <Answers questionNumber="6" />
      </li>
    </Questions>
  );
}
