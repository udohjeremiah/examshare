import Questions from "@/components/Questions";
import Answers from "@/components/Answers";

export default function ECO101() {
  return (
    <Questions
      school="western delta university"
      college="social and management sciences"
      department="economics"
      session="2022/2023"
      semester="second semester"
      courseCode="ECO102"
      courseTitle="Principles of Economics II"
      allowedTime="2hrs"
      instruction="answer any FOUR questions"
    >
      <li>
        <h4 className="mb-2 font-bold">Question 1</h4>
        What are the difficulties of a moneyless economy?
        <Answers questionNumber="1" />
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 2</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            With appropriate diagrams, distinguish between the demand-pull and
            cost-push inflation
            <Answers questionNumber="2a" />
          </li>
          <li>
            Explain the measures to control inflation in Nigeria
            <Answers questionNumber="2b" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 3</h4>
        <ol className="flex list-[lower-roman] flex-col gap-2">
          <li>
            List the types of unemployment you know
            <Answers questionNumber="3i" />
          </li>
          <li>
            Discus briefly any five effects of unemployment on Nigerians.
            <Answers questionNumber="3ii" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 4</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            The origin of banking can be traced to the 17th century when silver
            and gold (precious metals) were used as money. Elaborate.
            <Answers questionNumber="4a" />
          </li>
          <li>
            What role has Central Bank played in the development of Nigeria?
            <Answers questionNumber="4b" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 5</h4>
        <ol className="flex list-[lower-roman] flex-col gap-2">
          <li>
            Distinguish between macroeconomics and microeconomics
            <Answers questionNumber="5i" />
          </li>
          <li>
            Discuss the goals of macroeconomics
            <Answers questionNumber="5ii" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 6</h4>
        <ol className="flex list-[lower-roman] flex-col gap-2">
          <li>
            Explain the various forms of money you know
            <Answers questionNumber="6a" />
          </li>
          <li>
            What are the functions of money?
            <Answers questionNumber="6b" />
          </li>
        </ol>
      </li>
    </Questions>
  );
}
