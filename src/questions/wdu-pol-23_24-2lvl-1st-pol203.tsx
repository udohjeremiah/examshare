import Questions from "@/components/Questions";
import Answers from "@/components/Answers";

export default function POL203() {
  return (
    <Questions
      school="western delta university"
      college="social and management sciences"
      department="Political Science"
      session="2023/2024"
      semester="first semester"
      courseCode="POL203"
      courseTitle="Economic and Social Development"
      allowedTime="2hrs"
      instruction="Answer four (4) questions"
    >
      <li>
        <h4 className="mb-2 font-bold">Question 1</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            What do you understand by Economic Growth?
            <Answers questionNumber="1a" />
          </li>
          <li>
            Give three reasons why Economic Growth should be studied.
            <Answers questionNumber="1b" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 2</h4>
        What are the merit and demerit of Economic Growth?
        <Answers questionNumber="2" />
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 3</h4>
        List and discuss the determinants of Economic Growth?
        <Answers questionNumber="3" />
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 4</h4>
        Explain the concept of Social Development in Nigeria.
        <Answers questionNumber="4" />
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 5</h4>
        Define urbanization in Nigeria.
        <Answers questionNumber="5" />
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 6</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Explain the relationship between the formal structure in formal
            sector and urbanization.
            <Answers questionNumber="6a" />
          </li>
          <li>
            List and discuss the factors that led to urbanization.
            <Answers questionNumber="6b" />
          </li>
        </ol>
      </li>
    </Questions>
  );
}
