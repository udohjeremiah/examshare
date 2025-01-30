import Questions from "@/components/Questions";
import Answers from "@/components/Answers";

export default function ACC203() {
  return (
    <Questions
      school="western delta university"
      college="social and management sciences"
      department="introduction to business finance"
      session="2023/2024"
      semester="first semester"
      courseCode="acc203"
      courseTitle="introduction to business finance"
      allowedTime="2hrs"
      instruction="Attempt four (4) questions. Each question carries equal marks"
    >
      <li>
        <h4 className="mb-2 font-bold">Question 1 (17.5 marks)</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            The opportunities available to a business to raise finance are many
            and varied. List and explain eight of these sources.{" "}
            <strong class="whitespace-nowrap">(12 marks)</strong>
            <Answers questionNumber="1a" />
          </li>
          <li>
            Classes of shares is divided and classified into 3. List them.{" "}
            <strong class="whitespace-nowrap">(5.5 marks)</strong>
            <Answers questionNumber="1b" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 2 (17.5 marks)</h4>
        Discuss briefly the relationship of finance with other functional area
        of business.
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 3 (17.5 marks)</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Explain the importance of trade credit as a source of financing to
            supplier and customer.{" "}
            <strong class="whitespace-nowrap">(5.5 marks)</strong>
            <Answers questionNumber="3a" />
          </li>
          <li>
            What are the 6 key area of concern of effective accounts receivable
            management. <strong class="whitespace-nowrap">(12 marks)</strong>
            <Answers questionNumber="3b" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 4 (17.5 marks)</h4>
        Write short notes on the following:{" "}
        <strong class="whitespace-nowrap">(3.5 marks each)</strong>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Financial resources <Answers questionNumber="4a" />
          </li>
          <li>
            Shares <Answers questionNumber="4b" />
          </li>
          <li>
            Debentures <Answers questionNumber="4c" />
          </li>
          <li>
            Bonds <Answers questionNumber="4d" />
          </li>
          <li>
            Convertible securities <Answers questionNumber="4e" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 5 (17.5 marks)</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            The Articles of association contains the interanl
            regulation/management of the affairs of the company. List 5 matters
            to be considered.{" "}
            <strong class="whitespace-nowrap">(8.5 marks)</strong>{" "}
            <Answers questionNumber="5a" />
          </li>
          <li>
            What are the 6 contents involved in memorandum of association.{" "}
            <strong class="whitespace-nowrap">(8.5 marks)</strong>{" "}
            <Answers questionNumber="5b" />
          </li>
        </ol>
      </li>
    </Questions>
  );
}
