import { Answers } from "@/components/answers";
import { Questions } from "@/components/questions";

export function PastQuestion() {
  return (
    <Questions
      allowedTime="2hrs"
      college="social and management sciences"
      courseCode="POL204"
      courseTitle="Foundation of Political Economy"
      department="Political Science"
      instruction="Answer four (4) questions"
      school="western delta university"
      semester="second semester"
      session="2022/2023"
    >
      <li>
        <h4 className="mb-2 font-bold">Question 1</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Define political economy and discuss the rationale for it&apos;s
            study.
            <Answers questionNumber="1a" />
          </li>
          <li>
            Discuss the evolution of political economy and explain the scope of
            political economy.
            <Answers questionNumber="1b" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 2</h4>
        Explain capitalist mode of production and explain the condition
        necessary for the collapse of the capitalist mode of production.
        <Answers questionNumber="2" />
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 3</h4>
        Discuss the meaning and nature of multinational corporations and examine
        how multinational corporation operate in Africa as agents of
        imperialism.
        <Answers questionNumber="3" />
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 4</h4>
        Examine the major idea of Paul Baran on economic backwardness and
        economic growth.
        <Answers questionNumber="4" />
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 5</h4>
        Discuss the main assignment of the dependency school on development and
        underdevelopment.
        <Answers questionNumber="5" />
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 6</h4>
        Write short notes on the following:
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Globalization
            <Answers questionNumber="6a" />
          </li>
          <li>
            Imperialism
            <Answers questionNumber="6b" />
          </li>
          <li>
            Explain how Nigeria has feared in the question of development.
            <Answers questionNumber="6c" />
          </li>
        </ol>
      </li>
    </Questions>
  );
}
