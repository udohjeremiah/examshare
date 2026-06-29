import Questions from "@/components/Questions";
import Answers from "@/components/Answers";

export default function ECO201() {
  return (
    <Questions
      school="western delta university"
      college="social and management sciences"
      department="economics"
      session="2023/2024"
      semester="first semester"
      courseCode="ECO201"
      courseTitle="Introduction to Microeconomics I"
      allowedTime="2hrs"
      instruction="Answer any three (3) questions. All questions carry equal marks"
    >
      <li>
        <h4 className="mb-2 font-bold">Question 1</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Discuss the types of demand.{" "}
            <strong className="whitespace-nowrap">(15 marks)</strong>
            <Answers questionNumber="1a" />
          </li>
          <li>
            Distinguish between &quot;change in quantity demanded&quot; and
            &quot;change in demand&quot;.{" "}
            <strong className="whitespace-nowrap">(8.33 marks)</strong>
            <Answers questionNumber="1b" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 2</h4>
        Discuss the determinants of supply.{" "}
        <strong className="whitespace-nowrap">(23.33 marks)</strong>
        <Answers questionNumber="2" />
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 3</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Define the term &quot;Elasticity of demand&quot;.{" "}
            <strong className="whitespace-nowrap">(8.33 marks)</strong>
            <Answers questionNumber="3a" />
          </li>
          <li>
            The quantity demanded responded by increasing from 40 units to 45
            units due to a reduction in the price of a good from N68,000 to
            N51,000. Calculate the own price elasticity of demand and interpret
            your result.{" "}
            <strong className="whitespace-nowrap">(15.33 marks)</strong>
            <Answers questionNumber="3b" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 4</h4>
        Define the following terms:
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>Total Utility</li>
          <li>Marginal Utility</li>
          <li>Law of Diminishing Marginal Utitlity</li>
          <li>Indifference Curve</li>
        </ol>
        <strong className="whitespace-nowrap">(5.83 marks each)</strong>
        <Answers questionNumber="4" />
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 5</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            What do you understand by the term &quot;Demand&quot;?{" "}
            <strong className="whitespace-nowrap">(5.33 marks)</strong>
            <Answers questionNumber="5a" />
          </li>
          <li>
            State the Laws of Demand.{" "}
            <strong className="whitespace-nowrap">(4 marks)</strong>
            <Answers questionNumber="5b" />
          </li>
          <li>
            The demand function for Amala is given as: Qd = 140 - 0.02P. Where P
            is the price and Qd for the quantity demanded of the product. Find
            the quantity that would be consumed when price is (a) N1,000 (b)
            N1,500 <strong className="whitespace-nowrap">(14 marks)</strong>
            <Answers questionNumber="5c" />
          </li>
        </ol>
      </li>
    </Questions>
  );
}
