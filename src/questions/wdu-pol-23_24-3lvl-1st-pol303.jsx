import Questions from "@/components/Questions";
import Answers from "@/components/Answers";

export default function POL303() {
  return (
    <Questions
      school="western delta university"
      college="social and management sciences"
      department="Political Science"
      session="2023/2024"
      semester="first semester"
      courseCode="POL303"
      courseTitle="Logic and Methods of Political Inquiry"
      allowedTime="2hrs"
      instruction="Answer three (3) questions only"
    >
      <li>
        <h4 className="mb-2 font-bold">Question 1</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            What is a nomological deductive explanation?
            <Answers questionNumber="1a" />
          </li>
          <li>
            Differentiate betweeen explanans and explanandum.
            <Answers questionNumber="1b" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 2</h4>
        Identify and explain six logical fallacies.
        <Answers questionNumber="2" />
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 3</h4>
        Define the term &apos;variable&apos; and explain the difference between
        nominal scale and ordinal scale using relevant examples.
        <Answers questionNumber="3" />
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 4</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Explain three methods that can be used to collect qualitative data.
            <Answers questionNumber="4a" />
          </li>
          <li>
            Highlight three ways knowledge can be acquired.
            <Answers questionNumber="4b" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 5</h4>
        Write short notes on the following:
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Concept
            <Answers questionNumber="5a" />
          </li>
          <li>
            Logic
            <Answers questionNumber="5b" />
          </li>
          <li>
            Political inquiry
            <Answers questionNumber="5c" />
          </li>
          <li>
            Model
            <Answers questionNumber="5d" />
          </li>
          <li>
            Method
            <Answers questionNumber="5e" />
          </li>
        </ol>
      </li>
    </Questions>
  );
}
