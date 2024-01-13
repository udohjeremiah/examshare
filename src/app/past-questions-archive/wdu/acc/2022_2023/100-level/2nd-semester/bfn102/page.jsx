import Questions from "@/components/Questions";
import Answers from "@/components/Answers";

export default function BFN102() {
  return (
    <Questions
      school="western delta university"
      college="social and management sciences"
      department="accounting and finance"
      session="2022/2023"
      semester="second semester"
      courseCode="BFN102"
      courseTitle="element of banking II"
      allowedTime="2hrs"
      instruction="attempt all questions in section A and any FIVE from section B"
    >
      <li>
        <h4 className="mb-2 font-bold">Section A: Multiple Choice Questions</h4>
        <ol className="flex list-decimal flex-col gap-2">
          <li>
            This is the practice of commercial banks to extend _______
            facilities to desired customers (a) advance (b) credits (c) money
            (d) borrowing
            <Answers questionNumber="sectionA-1" />
          </li>
          <li>
            The main function of bank manager does not include one of the
            following? (a) risk management (b) financing decision (c) dividend
            decision (d) credit finance
            <Answers questionNumber="sectionA-2" />
          </li>
          <li>
            _______ means more than two bank to come together to finance a
            project (a) sendication finance (b) double finance (c) long finance
            (d) credit finance
            <Answers questionNumber="sectionA-3" />
          </li>
          <li>
            _______ is part of payment system instrument except (a) ATM (b) POS
            (c) note and coins (d) teller
            <Answers questionNumber="sectionA-4" />
          </li>
          <li>
            Central Bank of Nigeria (CBN) was established under the Central Bank
            Act 1958 and commenced operations in _______ (a) 1958 (b) 1957 (c)
            1956 (d) 1959
            <Answers questionNumber="sectionA-5" />
          </li>
          <li>
            One of the following is NOT financial intermediation process a key
            to financial institution. (a) merchant bank (b) debenture (c)
            mortgage (d) block
            <Answers questionNumber="sectionA-6" />
          </li>
          <li>
            One of the following is NOT short term sources of Finance (a) trade
            credit (b) hire - purchase (c) seed money (d) loan
            <Answers questionNumber="sectionA-7" />
          </li>
          <li>
            Which of the following is NOT a long term sources of fund? (a) stock
            (b) equity share (c) loan (d) money
            <Answers questionNumber="sectionA-8" />
          </li>
          <li>
            One of the following is not a commercial bank in Nigeria (a) first
            bank (b) fidelity bank (c) money bank (d) wema
            <Answers questionNumber="sectionA-9" />
          </li>
          <li>
            The commencement of insurance business in Nigeria dates back to
            _______ (a) 1921 (b) 1935 (c) 1928 (d) 1955
            <Answers questionNumber="sectionA-10" />
          </li>
        </ol>
        <strong class="whitespace-nowrap">(2 marks each) (20 marks)</strong>
      </li>

      <li>
        <h4 className="mb-2 font-bold">
          Section B: Answer Any FIVE Questions Only
        </h4>
        <ol className="flex list-decimal flex-col gap-2">
          <li>
            Explain five policy objectives and goals of microfinance banking{" "}
            <strong class="whitespace-nowrap">(10 marks)</strong>
            <Answers questionNumber="sectionB-1" />
          </li>
          <li>
            Highlight the recet measures taken in improving payment system{" "}
            <strong class="whitespace-nowrap">(10 marks)</strong>
            <Answers questionNumber="sectionB-2" />
          </li>
          <li>
            What is insurance? List six types of insurance{" "}
            <strong class="whitespace-nowrap">(10 marks)</strong>
            <Answers questionNumber="sectionB-3" />
          </li>
          <li>
            Explain the process of analyzing a commercial risk{" "}
            <strong class="whitespace-nowrap">(10 marks)</strong>
            <Answers questionNumber="sectionB-4" />
          </li>
          <li>
            Differentiate between Money Market and Capital Market{" "}
            <strong class="whitespace-nowrap">(10 marks)</strong>
            <Answers questionNumber="sectionB-5" />
          </li>
          <li>
            What are the problems of payment system in Nigeria{" "}
            <strong class="whitespace-nowrap">(10 marks)</strong>
            <Answers questionNumber="sectionB-6" />
          </li>
          <li>
            List and explain five suitability for banking lending{" "}
            <strong class="whitespace-nowrap">(10 marks)</strong>
            <Answers questionNumber="sectionB-7" />
          </li>
          <li>
            Write short notes on the following:
            <ol className="mx-4 list-[lower-roman]">
              <li>Discount house</li>
              <li>Commercial papers</li>
              <li>Treasury bill</li>
              <li>Banker acceptance</li>
            </ol>
            <strong class="whitespace-nowrap">(10 marks)</strong>
            <Answers questionNumber="sectionB-8" />
          </li>
        </ol>
      </li>
    </Questions>
  );
}
