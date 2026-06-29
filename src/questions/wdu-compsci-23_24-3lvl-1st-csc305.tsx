import Questions from "@/components/Questions";
import Answers from "@/components/Answers";

export default function CSC305() {
  return (
    <Questions
      school="western delta university"
      college="computing"
      department="computer science"
      session="2023/2024"
      semester="first semester"
      courseCode="CSC305"
      courseTitle="computer architecture"
      allowedTime="2hrs: 30mins"
      instruction="Answer any four (4) questions"
    >
      <li>
        <h4 className="mb-2 font-bold">Question 1 (17.5 marks)</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Write the major characteristics of a RISC processor.{" "}
            <strong className="whitespace-nowrap">(10 marks)</strong>
            <Answers questionNumber="1a" />
          </li>
          <li>
            What is the difference between a RISC and a CISC Processer.{" "}
            <strong className="whitespace-nowrap">(7.5 marks)</strong>
            <Answers questionNumber="1b" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 2 (17.5 marks)</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Draw a Block diagram of a computer{" "}
            <strong className="whitespace-nowrap">(5 marks)</strong>
            <Answers questionNumber="2a" />
          </li>
          <li>
            Draw a flowchart of CPU Operations.{" "}
            <strong className="whitespace-nowrap">(5 marks)</strong>
            <Answers questionNumber="2b" />
          </li>
          <li>
            Write short notes on Microprocessor, and draw a block diagram of a
            microprocessor.{" "}
            <strong className="whitespace-nowrap">(7.5 marks)</strong>
            <Answers questionNumber="2c" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 3 (17.5 marks)</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            What is Redundancy and how is it introduced?{" "}
            <strong className="whitespace-nowrap">(10 marks)</strong>
            <Answers questionNumber="3a" />
          </li>
          <li>
            Name two types of redundancy and how the reorganization is achieved?{" "}
            <strong className="whitespace-nowrap">(7.5 marks)</strong>
            <Answers questionNumber="3b" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 4 (17.5 marks)</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Briefly define 4 classification of computer networks and explain the
            classification in details.{" "}
            <strong className="whitespace-nowrap">(10 marks)</strong>
            <Answers questionNumber="4a" />
          </li>
          <li>
            Name 5 network applications.{" "}
            <strong className="whitespace-nowrap">(5 marks)</strong>
            <Answers questionNumber="4b" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 5 (17.5 marks)</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            What is the difference between hardwired and microprogrammed
            computers?
            <strong className="whitespace-nowrap">(10 marks)</strong>
            <Answers questionNumber="5a" />
          </li>
          <li>
            Explain in details 5 types of computer networks.{" "}
            <strong className="whitespace-nowrap">(7.5 marks)</strong>
            <Answers questionNumber="5b" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 6 (17.5 marks)</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            What is fault tolerant?{" "}
            <strong className="whitespace-nowrap">(5.5 marks)</strong>
            <Answers questionNumber="6a" />
          </li>
          <li>
            Briefly describe faults and their manifestations.{" "}
            <strong className="whitespace-nowrap">(6 marks)</strong>
            <Answers questionNumber="6b" />
          </li>
          <li>
            Briefly explain five system fault response stages.{" "}
            <strong className="whitespace-nowrap">(6 marks)</strong>
            <Answers questionNumber="6c" />
          </li>
        </ol>
      </li>
    </Questions>
  );
}
