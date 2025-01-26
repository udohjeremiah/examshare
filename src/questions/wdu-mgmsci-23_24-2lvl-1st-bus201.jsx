import Questions from "@/components/Questions";
import Answers from "@/components/Answers";

export default function BUS201() {
  return (
    <Questions
      school="western delta university"
      college="social and management sciences"
      department="management sciences"
      session="2023/2024"
      semester="first semester"
      courseCode="BUS201"
      courseTitle="principles of management"
      allowedTime="2hrs: 30mins"
      instruction="Answer any four (4) questions. All questions carry equal marks"
    >
      <li>
        <h4 className="mb-2 font-bold">Question 1</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Explain briefly the term control in management.{" "}
            <strong className="whitespace-nowrap">(3.5 marks)</strong>
            <Answers questionNumber="1a" />
          </li>
          <li>
            Discuss exhaustively the four (4) fundamental steps in organizing.{" "}
            <strong className="whitespace-nowrap">(14 marks)</strong>
            <Answers questionNumber="1b" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 2</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Differentiate between organizational efficiency and organizational
            effectiveness.{" "}
            <strong className="whitespace-nowrap">(7 marks)</strong>
            <Answers questionNumber="2a" />
          </li>
          <li>
            Explain briefly seven (7) functions of Management.{" "}
            <strong className="whitespace-nowrap">(10.5 marks)</strong>
            <Answers questionNumber="2b" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 3</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Leaders are made not born. Discuss.{" "}
            <strong className="whitespace-nowrap">(10 marks)</strong>
            <Answers questionNumber="3a" />
          </li>
          <li>
            Outline five (5) advantages of organizing.{" "}
            <strong className="whitespace-nowrap">(7.5 marks)</strong>
            <Answers questionNumber="3b" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 4</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            What is communication?{" "}
            <strong className="whitespace-nowrap">(5 marks)</strong>
            <Answers questionNumber="4a" />
          </li>
          <li>
            With the aid of a communication model explain the communication
            process. <strong className="whitespace-nowrap">(12.5 marks)</strong>
            <Answers questionNumber="4b" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 5</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Briefly explain the difference between chain of command and span of
            control. <strong className="whitespace-nowrap">(7 marks)</strong>
            <Answers questionNumber="5a" />
          </li>
          <li>
            Explain five factors that could influence a managers choice of
            leadership style.{" "}
            <strong className="whitespace-nowrap">(10.5 marks)</strong>
            <Answers questionNumber="5b" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 6</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            What is a problem in management?{" "}
            <strong className="whitespace-nowrap">(5 marks)</strong>
            <Answers questionNumber="6a" />
          </li>
          <li>
            Discuss exhaustively five sources of power open to a manager.{" "}
            <strong className="whitespace-nowrap">(12.5 marks)</strong>
            <Answers questionNumber="6b" />
          </li>
        </ol>
      </li>
    </Questions>
  );
}
