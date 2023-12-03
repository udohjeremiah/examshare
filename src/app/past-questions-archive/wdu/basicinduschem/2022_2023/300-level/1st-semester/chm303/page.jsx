import Questions from "@/components/Questions";
import Answers from "@/components/Answers";

export default function CHM303() {
  return (
    <Questions
      school="western delta university"
      college="natural and applied sciences"
      department="basic and industrial chemistry"
      session="2022/2023"
      semester="first semester"
      courseCode="CHM303"
      courseTitle="inorganic chemistry"
      allowedTime="3hrs"
      instruction="attempt any FOUR questions"
    >
      <li>
        <h4 className="mb-2 font-bold">Question 1</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Write a reaction of sodium with oxygen and water{" "}
            <strong className="whitespace-nowrap">(3 marks)</strong>
            <Answers questionNumber="1a" />
          </li>
          <li>
            Write short note on the following group 1 compounds:
            <ol className="mx-4 list-[lower-roman]">
              <li>Hydrides</li>
              <li>Carbonates and hydrogen carbonates</li>
              <li>Hydroxides</li>
              <li>Halides</li>
            </ol>
            <strong className="whitespace-nowrap">(8 marks)</strong>
            <Answers questionNumber="1b" />
          </li>
          <li>
            Compare the carbonate and hydrocarbonates of a group 2 metals to
            that our group 1{" "}
            <strong className="whitespace-nowrap">(4 marks)</strong>
            <Answers questionNumber="1c" />
          </li>
          <li>
            Why is berrylium different from other members of the group?{" "}
            <strong className="whitespace-nowrap">(3 marks)</strong>
            <Answers questionNumber="1d" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 2</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Briefly describe the chemistry of the following boron compounds
            <ol className="mx-4 list-[lower-roman]">
              <li>Halides of Boron</li>
              <li>Diborane</li>
              <li>Boron trioxide</li>
            </ol>
            <strong className="whitespace-nowrap">(7.5 marks)</strong>
            <Answers questionNumber="2a" />
          </li>
          <li>
            Briefly describe the chemistry of the following compounds of carbon
            and silicon
            <ol className="mx-4 list-[lower-roman]">
              <li>Hydrides</li>
              <li>Halides</li>
              <li>Oxides</li>
            </ol>
            <strong className="whitespace-nowrap">(7.5 marks)</strong>
            <Answers questionNumber="2b" />
          </li>
          <li>
            Suggest reasons why the maximum covalency of carbon is four while
            that of silicon is six{" "}
            <strong className="whitespace-nowrap">(3 marks)</strong>
            <Answers questionNumber="2c" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 3</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Give reason(s) why the good halogens are good oxidizing agents{" "}
            <strong className="whitespace-nowrap">(3 marks)</strong>
            <Answers questionNumber="3a" />
          </li>
          <li>
            Write a reaction of a named halogen with water and sodium hydroxide{" "}
            <strong className="whitespace-nowrap">(4 marks)</strong>
            <Answers questionNumber="3b" />
          </li>
          <li>
            What are the uses of halogen{" "}
            <strong className="whitespace-nowrap">(5 marks)</strong>
            <Answers questionNumber="3c" />
          </li>
          <li>
            Briefly describe the position of noble gas in the periodic table{" "}
            <strong className="whitespace-nowrap">(6 marks)</strong>
            <Answers questionNumber="3d" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 4</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            How does transition metal forms interstitial compounds? Give two
            examples of such compounds?{" "}
            <strong className="whitespace-nowrap">(5 marks)</strong>
            <Answers questionNumber="4a" />
          </li>
          <li>
            Describe the variation of the density of alkali, alkaline earth and
            transition metals{" "}
            <strong className="whitespace-nowrap">(4 marks)</strong>
            <Answers questionNumber="4b" />
          </li>
          <li>
            Briefly explain why zinc and cadmium are soft metals{" "}
            <strong className="whitespace-nowrap">(4 marks)</strong>
            <Answers questionNumber="4c" />
          </li>
          <li>
            Which of Zn<sup>2+</sup> and Cu<sup>2+</sup> is a transition metal
            ion? Justify your answer{" "}
            <strong className="whitespace-nowrap">(5 marks)</strong>
            <Answers questionNumber="4d" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 5</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            <ol className="mx-4 list-[lower-roman]">
              <li>
                What are lanthanides and actinides?{" "}
                <strong className="whitespace-nowrap">(2 marks)</strong>
                <Answers questionNumber="5ai" />
              </li>
              <li>
                Why are they so called?{" "}
                <strong className="whitespace-nowrap">(2 marks)</strong>
                <Answers questionNumber="5aii" />
              </li>
            </ol>
          </li>
          <li>
            <ol className="mx-4 list-[lower-roman]">
              <li>
                Why is the separation of the lanthanides so difficult{" "}
                <strong className="whitespace-nowrap">(3 marks)</strong>
                <Answers questionNumber="5bi" />
              </li>
              <li>
                List three important methods that can be used for the separation
                of lanthanide metals{" "}
                <strong className="whitespace-nowrap">(3 marks)</strong>
                <Answers questionNumber="5bii" />
              </li>
            </ol>
          </li>
          <li>
            <ol className="mx-4 list-[lower-roman]">
              <li>
                Outline some similarities between lanthanides and actinides{" "}
                <strong className="whitespace-nowrap">(4 marks)</strong>
                <Answers questionNumber="5ci" />
              </li>
              <li>
                Give two examples of double salts that can be formed by
                lanthanides{" "}
                <strong className="whitespace-nowrap">(2 marks)</strong>
                <Answers questionNumber="5cii" />
              </li>
            </ol>
          </li>
          <li>
            Outline four uses of lanthanide elements or compound{" "}
            <strong className="whitespace-nowrap">(2 marks)</strong>
            <Answers questionNumber="5d" />
          </li>
        </ol>
      </li>
    </Questions>
  );
}
