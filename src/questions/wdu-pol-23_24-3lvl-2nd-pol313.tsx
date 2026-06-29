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
      courseCode="POL313"
      courseTitle="Rural and Community Development"
      allowedTime="2hrs"
      instruction="Answer four (4) questions."
    >
      <li>
        <h4 className="mb-2 font-bold">Question 1</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            What is Rural Development?
            <Answers questionNumber="1a" />
          </li>
          <li>
            What are the objective and key features of Rural Development?
            <Answers questionNumber="1b" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 2</h4>
        Critically appraise the role of Local Government as agency of Rural
        Development.
        <Answers questionNumber="2" />
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 3</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Define Poverty?
            <Answers questionNumber="3a" />
          </li>
          <li>
            State the different conceptions of Poverty and write shorts notes on
            each of them.
            <Answers questionNumber="3b" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 4</h4>
        Write short notes on three (3) of the following:
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Modernization Theory of Rural Development
            <Answers questionNumber="4a" />
          </li>
          <li>
            Systems Theory of Rural Development
            <Answers questionNumber="4b" />
          </li>
          <li>
            Social Infrastructure and Rural Development
            <Answers questionNumber="4c" />
          </li>
          <li>
            Physical Infrastructure and Rural Development
            <Answers questionNumber="4d" />
          </li>
          <li>
            Problems associated with Rural Migration
            <Answers questionNumber="4d" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 5</h4>
        Community Development can be viewed as an approach to Rural Development:
        Discuss.
        <Answers questionNumber="5" />
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 6</h4>
        Numerous national programmes and policies aimed at the improvement of
        rural areas were initiated and pursued by the Federal, State, and Local
        Governments.
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Name at least four (4) of such intervention programmes in Nigeria.
            <Answers questionNumber="6a" />
          </li>
          <li>
            What are the factors responsible for the failure of these programmes
            and state in brief what you think is the best way forward for
            Nigeria.
            <Answers questionNumber="6b" />
          </li>
        </ol>
      </li>
    </Questions>
  );
}
