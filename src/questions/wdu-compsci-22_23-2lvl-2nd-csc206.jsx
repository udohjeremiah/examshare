import Questions from "@/components/Questions";
import Answers from "@/components/Answers";

export default function CSC206() {
  return (
    <Questions
      school="western delta university"
      college="computing"
      department="computer science"
      session="2022/2023"
      semester="second semester"
      courseCode="CSC206"
      courseTitle="computer hardware"
      allowedTime="2hrs: 30mins"
      instruction="attempt question ONE (compulsory) and any other TWO questions"
    >
      <li>
        <h4 className="mb-2 font-bold">Question 1 (Compulsory)</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Explain in details the following devices:
            <ol className="mx-4 list-[lower-roman]">
              <li>Personal computers</li>
              <li>Desktop computers</li>
              <li>Tower systems</li>
              <li>Laptops</li>
              <li>Note books</li>
              <li>Hand held computers</li>
              <li>Electronic organizers</li>
              <li>Personal digital assistants</li>
              <li>Pen computers</li>
              <li>Mobile phones</li>
            </ol>
            <strong className="whitespace-nowrap">(30 marks)</strong>
            <Answers questionNumber="1a" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 2</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            What do you understand by the following terms? Give examples
            <ol className="mx-4 list-[lower-roman]">
              <li>Graphic tablet</li>
              <li>Touch screen</li>
              <li>Joystick and wheel</li>
              <li>Light pen</li>
              <li>Modem</li>
            </ol>
            <strong className="whitespace-nowrap">(20 marks)</strong>
            <Answers questionNumber="2a" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 3</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            <ol className="mx-4 list-[lower-roman]">
              <li>
                What is the difference between series and parallel circuit?{" "}
                <strong className="whitespace-nowrap">(5 marks)</strong>
                <Answers questionNumber="3ai" />
              </li>
              <li>
                Distinguish between open and closed circuit.{" "}
                <strong className="whitespace-nowrap">(5 marks)</strong>
                <Answers questionNumber="3aii" />
              </li>
              <li>
                Name 5 properties of a parallel circuit{" "}
                <strong className="whitespace-nowrap">(5 marks)</strong>
                <Answers questionNumber="3aiii" />
              </li>
              <li>
                Mention the disadvantage of a parallel circuit{" "}
                <strong className="whitespace-nowrap">(5 marks)</strong>
                <Answers questionNumber="3aiv" />
              </li>
            </ol>
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 4</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            <ol className="mx-4 list-[lower-roman]">
              <li>
                Name 5 storage devices with examples{" "}
                <strong className="whitespace-nowrap">(5 marks)</strong>
                <Answers questionNumber="4ai" />
              </li>
              <li>
                Explain how some secondary devices can funtion as input/output
                devices{" "}
                <strong className="whitespace-nowrap">(10 marks)</strong>
                <Answers questionNumber="4aii" />
              </li>
              <li>
                Distinguish between open and closed circuit{" "}
                <strong className="whitespace-nowrap">(5 marks)</strong>
                <Answers questionNumber="4aiii" />
              </li>
            </ol>
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 5</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            <ol className="mx-4 list-[lower-roman]">
              <li>
                What is an electrical circuit{" "}
                <strong className="whitespace-nowrap">(5 marks)</strong>
                <Answers questionNumber="5ai" />
              </li>
              <li>
                Name 5 properties of a series circuit{" "}
                <strong className="whitespace-nowrap">(5 marks)</strong>
                <Answers questionNumber="5aii" />
              </li>
              <li>
                What is the difference between series and parallel connection{" "}
                <strong className="whitespace-nowrap">(10 marks)</strong>
                <Answers questionNumber="5aiii" />
              </li>
            </ol>
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 6</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            What do you understand by the following devices? Give one example
            each
            <ol className="mx-4 list-[lower-roman]">
              <li>Audio/Voice Input</li>
              <li>Digital Camera</li>
              <li>Video Input</li>
              <li>Webcam</li>
              <li>Optical Scanners</li>
            </ol>
            <strong className="whitespace-nowrap">(20 marks)</strong>
            <Answers questionNumber="6a" />
          </li>
        </ol>
      </li>
    </Questions>
  );
}
