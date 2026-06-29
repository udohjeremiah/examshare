import Questions from "@/components/Questions";
import Answers from "@/components/Answers";

export default function BUS409() {
  return (
    <Questions
      school="western delta university"
      college="social and management sciences"
      department="management sciences"
      session="2023/2024"
      semester="first semester"
      courseCode="BUS409"
      courseTitle="business ethics and corporate social responsibility"
      allowedTime="2hrs"
      instruction="answer any four (4) questions"
    >
      <li>
        <h4 className="mb-2 font-bold">Question 1</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            What is business ethics?{" "}
            <strong className="whitespace-nowrap">(3.5 marks)</strong>
            <Answers questionNumber="1a" />
          </li>
          <li>
            In what specific ways is business ethics important to the business
            organisation?{" "}
            <strong className="whitespace-nowrap">(14 marks)</strong>
            <Answers questionNumber="1b" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 2</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Discuss the concept of ethics and values.{" "}
            <strong className="whitespace-nowrap">(8.5 marks)</strong>
            <Answers questionNumber="2a" />
          </li>
          <li>
            Examine the three sources of ethics.{" "}
            <strong className="whitespace-nowrap">(9 marks)</strong>
            <Answers questionNumber="2b" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 3</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Educate a group of young businessmen on the concept of corporate
            governance.{" "}
            <strong className="whitespace-nowrap">(7.5 marks)</strong>
            <Answers questionNumber="3a" />
          </li>
          <li>
            Evaluate the five consequences of poor corporate governance in an
            organisation.{" "}
            <strong className="whitespace-nowrap">(10 marks)</strong>
            <Answers questionNumber="3b" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 4</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            What is corporate social responsibility?{" "}
            <strong className="whitespace-nowrap">(3.5 marks)</strong>
            <Answers questionNumber="4a" />
          </li>
          <li>
            Examine the arguments for and against corporate social
            responsibility.{" "}
            <strong className="whitespace-nowrap">(14 marks)</strong>
            <Answers questionNumber="4b" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 5</h4>
        Critically examine the Archie Carroll&apos;s Pyramid of Corporate Social
        Responsibility.{" "}
        <strong className="whitespace-nowrap">(17.5 marks)</strong>
        <Answers questionNumber="5" />
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 6</h4>
        Explain the guidelines in formulating policies and operating procedures
        on corporate social responsibility.{" "}
        <strong className="whitespace-nowrap">(17.5 marks)</strong>
        <Answers questionNumber="6" />
      </li>
    </Questions>
  );
}
