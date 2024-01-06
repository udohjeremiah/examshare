import Questions from "@/components/Questions";
import Answers from "@/components/Answers";

export default function BUS102() {
  return (
    <Questions
      school="western delta university"
      college="social and management sciences"
      department="management sciences"
      session="2022/2023"
      semester="first semester"
      courseCode="BUS101"
      courseTitle="Introduction to Business"
      allowedTime="2hrs"
      instruction="answer THREE questions in All. Question ONE is compulsory"
    >
      <li>
        <h4 className="mb-2 font-bold">SECTION A: Compulsory</h4>
        <ol className="flex list-[lower-decimal] flex-col gap-2">
          <li>
            <ol className="mx-4 list-[lower-alpha]">
              <li>
                Write down the correct answer in the following questions
                <ol className="mx-4">
                  <li>
                    The key elements that make up an organization are (i)
                    _______ (ii) _______ (iii) _______ (iv) _______
                    <Answers questionNumber="1ai-iv" />
                  </li>
                  <li>
                    The word <i>Company</i> is derived from two Latin words (v)
                    _______ and (vi) _______
                    <Answers questionNumber="1av-vi" />
                  </li>
                  <li>
                    (vii) _______ is a business firm owned by a minimum of seven
                    persons without upper limit of membership.
                    <Answers questionNumber="1avii" />
                  </li>
                  <li>
                    The Thrift-and-Credit Society began in (viii) _______ year
                    and (ix) _______ country?
                    <Answers questionNumber="1aviii-ix" />
                  </li>
                  <li>
                    (x) _______ is the buying of an existing business?
                    <Answers questionNumber="1ax" />
                  </li>
                  <li>
                    (xi) _______ is a legal person without physical existence
                    recognized by law to do business for profit.
                    <Answers questionNumber="1axi" />
                  </li>
                  <li>
                    (xii) _______ is a written agreement that guides the affairs
                    of a partnership business.
                    <Answers questionNumber="1axii" />
                  </li>
                  <li>
                    (xiii) _______ is the management function of monitoring
                    employee&apos;s productivity to avoid deviation from set
                    standard?
                    <Answers questionNumber="1axiii" />
                  </li>
                  <li>
                    (xiv) _______ has to do with the leadership function of a
                    manager?
                    <Answers questionNumber="1axiv" />
                  </li>
                  <li>
                    (xv) The word <i>business</i> originate from an old English
                    known as _______
                    <Answers questionNumber="1axv" />
                  </li>
                  <li>
                    (xvi) The word <i>ethics</i> in French is _______
                    <Answers questionNumber="1axvi" />
                  </li>
                  <li>
                    (xvii) _______ refers to morality of behavior in terms of
                    what is right and wrong in business practice?
                    <Answers questionNumber="1axvii" />
                  </li>
                  <li>
                    (xviii) _______ is the buying of an existing business?
                    <Answers questionNumber="1axviii" />
                  </li>
                  <li>
                    (xix) _______ has to do with the function of harnessing the
                    various factors of production organizational resources?
                    <Answers questionNumber="1axix" />
                  </li>
                  <li>
                    (xx) The word company was used to refer to business
                    association in _______ year?
                    <Answers questionNumber="1axx" />
                  </li>
                </ol>
                <strong className="whitespace-nowrap">(20 marks)</strong>
              </li>
              <li>
                Business plays important roles in every society. Discuss{" "}
                <strong className="whitespace-nowrap">(10 marks)</strong>
                <Answers questionNumber="1b" />
              </li>
            </ol>
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">SECTION B: Answer any two questions</h4>
        <ol className="flex flex-col gap-2">
          <li>
            <h4 className="mb-2 font-bold">Question 2</h4>
            <ol className="flex list-[lower-alpha] flex-col gap-2">
              <li>
                List the contents of a partnership deed{" "}
                <strong className="whitespace-nowrap">(13 marks)</strong>
                <Answers questionNumber="2a" />
              </li>
              <li>
                With reference to CAMA 2020, what are the functions of the
                Corporate Affairs Commission?{" "}
                <strong className="whitespace-nowrap">(7 marks)</strong>
                <Answers questionNumber="2b" />
              </li>
            </ol>
          </li>
          <li>
            <h4 className="mb-2 font-bold">Question 3</h4>
            <ol className="flex list-[lower-alpha] flex-col gap-2">
              <li>
                What is franchising?{" "}
                <strong className="whitespace-nowrap">(2 marks)</strong>
                <Answers questionNumber="3a" />
              </li>
              <li>
                Explain any four factors to be considered when buying a business{" "}
                <strong className="whitespace-nowrap">(12 marks)</strong>
                <Answers questionNumber="3b" />
              </li>
              <li>
                Explain threee steps in starting a business{" "}
                <strong className="whitespace-nowrap">(6 marks)</strong>
                <Answers questionNumber="3c" />
              </li>
            </ol>
          </li>
          <li>
            <h4 className="mb-2 font-bold">Question 4</h4>
            <ol className="flex list-[lower-alpha] flex-col gap-2">
              <li>
                List eight factors to be considered in choosing forms business
                ownership{" "}
                <strong className="whitespace-nowrap">(8 marks)</strong>
                <Answers questionNumber="4a" />
              </li>
              <li>
                Explain any four sources of business opportunity{" "}
                <strong className="whitespace-nowrap">(12 marks)</strong>
                <Answers questionNumber="4b" />
              </li>
            </ol>
          </li>
          <li>
            <h4 className="mb-2 font-bold">Question 5</h4>
            What are the characteristics of business organisations?
            <strong className="whitespace-nowrap">(20 marks)</strong>
            <Answers questionNumber="5" />
          </li>
        </ol>
      </li>
    </Questions>
  );
}
