import Questions from "@/components/Questions";
import Answers from "@/components/Answers";

export default function POL206() {
  return (
    <Questions
      school="western delta university"
      college="social and management sciences"
      department="Political Science"
      session="2022/2023"
      semester="second semester"
      courseCode="POL206"
      courseTitle="Theories and Practice of Administration"
      allowedTime="2hrs"
      instruction="All unused scripts must be canceled. Failure to do this will attract five marks."
    >
      <li>
        <h4 className="mb-2 font-bold">Question 1</h4>
        Trace the historical development of management you have studied?
        <Answers questionNumber="1" />
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 2</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            What are leadership skills and styles?
            <Answers questionNumber="2a" />
          </li>
          <li>
            Outline and discuss the different leadership style you know.
            <Answers questionNumber="2b" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 3</h4>
        Discuss the similarities between public and private administration.
        <Answers questionNumber="3" />
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 4</h4>
        Outline and discuss the 14 principles of Henry Fayol.
        <Answers questionNumber="4" />
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 5</h4>
        Mention and explain the different types of management you have studied.
        <Answers questionNumber="5" />
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 6</h4>
        Discuss the major views of the scientific management school.
        <Answers questionNumber="6" />
      </li>
    </Questions>
  );
}
