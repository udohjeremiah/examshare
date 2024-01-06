import Questions from "@/components/Questions";
import Answers from "@/components/Answers";

export default function MKT202() {
  return (
    <Questions
      school="western delta university"
      college="social and management sciences"
      department="management sciences"
      session="2022/2023"
      semester="second semester"
      courseCode="MKT202"
      courseTitle="principles of marketing"
      allowedTime="2hrs"
      instruction="answer ANY FOUR(3) questions. all questions carry equal marks."
    >
      <li>
        <h4 className="mb-2 font-bold">Question 1</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            What are marketing channels?{" "}
            <strong className="whitespace-nowrap">(2.5 marks)</strong>
            <Answers questionNumber="1a" />
          </li>
          <li>
            Explain briefly the three (3) types of intermediates{" "}
            <strong className="whitespace-nowrap">(7.5 marks)</strong>
            <Answers questionNumber="1b" />
          </li>
          <li>
            Outline five disadvantages of using intermediates{" "}
            <strong className="whitespace-nowrap">(7.5 marks)</strong>
            <Answers questionNumber="1c" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 2</h4>
        Discuss exhaustively the two (2) methods of pricing{" "}
        <strong className="whitespace-nowrap">(17.5 marks)</strong>
        <Answers questionNumber="2" />
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 3</h4>
        With a good illustration explain the marketing channel for consumer
        goods distribution{" "}
        <strong className="whitespace-nowrap">(17.5 marks)</strong>
        <Answers questionNumber="3" />
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 4</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Mrs Johnson is the Marketing Manager of Liverpool Global Services.
            She needs advice on the various pricing objectives. As a marketing
            expert, advise her on five pricing objectives she can pursue.{" "}
            <strong className="whitespace-nowrap">(10 marks)</strong>
            <Answers questionNumber="4a" />
          </li>
          <li>
            Explain three (3) importance of reverse flow channels{" "}
            <strong className="whitespace-nowrap">(7.5 marks)</strong>
            <Answers questionNumber="4b" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 5</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Promotion enables a company communicate the value of its product to
            its target audience. Briefly explain four promotion mix elements.{" "}
            <strong className="whitespace-nowrap">(10 marks)</strong>
            <Answers questionNumber="5a" />
          </li>
          <li>
            Explain briefly three (3) advertising objectives.{" "}
            <strong className="whitespace-nowrap">(7.5 marks)</strong>
            <Answers questionNumber="5b" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 6</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Explain four (4) ways of getting involved in international marketing{" "}
            <strong className="whitespace-nowrap">(8 marks)</strong>
            <Answers questionNumber="6a" />
          </li>
          <li>
            Suppose the manufacturer of polythene bags has invested N5000000
            into his business and he has the following cost and sales
            expectations:
            <div className="m-4">
              <p>Variable cost per unit N50</p>
              <p>Fixed cost N1500000</p>
              <p>Expected unit sales N250000</p>
            </div>
            If the manufacturer wants to set price to earn 20% return on
            investment (ROI) what will be the target return price?{" "}
            <strong className="whitespace-nowrap">(9.5 marks)</strong>
            <Answers questionNumber="6b" />
          </li>
        </ol>
      </li>
    </Questions>
  );
}
