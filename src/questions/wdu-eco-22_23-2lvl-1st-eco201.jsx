import Questions from "@/components/Questions";
import Answers from "@/components/Answers";

export default function ECO201() {
  return (
    <Questions
      school="western delta university"
      college="social and management sciences"
      department="economics"
      session="2022/2023"
      semester="first semester"
      courseCode="ECO201"
      courseTitle="Introductory Microeconomics I"
      allowedTime="2hrs: 30mins"
      instruction="answer QUESTION 1 and any other THREE questions"
    >
      <li>
        <h4 className="mb-2 font-bold">Question 1</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            What is demand?{" "}
            <strong className="whitespace-nowrap">(3 marks)</strong>
            <Answers questionNumber="1a" />
          </li>
          <li>
            Outline and discuss the determinants of bread.{" "}
            <strong className="whitespace-nowrap">(7 marks)</strong>
            <Answers questionNumber="1b" />
          </li>
          <li>
            Write short notes on effective demand and effective supply.{" "}
            <strong className="whitespace-nowrap">(5 marks)</strong>
            <Answers questionNumber="1c" />
          </li>
          <li>
            With the aid of a diagram explain and show the difference between
            changes in demand and changes in quantity demanded.{" "}
            <strong className="whitespace-nowrap">(10 marks)</strong>
            <Answers questionNumber="1d" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 2</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Given the following demand and supply functions Q<sub>d</sub> = 100
            - 10<sub>p</sub> and Q<sub>s</sub> = 100 + 20<sub>p</sub>.
            Calculate:
            <ol className="mx-4 list-[lower-roman]">
              <li>
                Equilibrium price{" "}
                <strong className="whitespace-nowrap">(3 marks)</strong>
                <Answers questionNumber="2ai" />
              </li>
              <li>
                Equilibrium quantity demanded and supplied.{" "}
                <strong className="whitespace-nowrap">(3 marks)</strong>
                <Answers questionNumber="2aii" />
              </li>
            </ol>
          </li>
          <li>
            Given the following demand functions Q<sub>d</sub> = 200 - 10
            <sub>p</sub>, calculate:
            <ol className="mx-4 list-[lower-roman]">
              <li>
                The elasticity of demand at #5.00{" "}
                <strong className="whitespace-nowrap">(3 marks)</strong>
                <Answers questionNumber="2bi" />
              </li>
              <li>
                If the price doubles to #10.00, calculate the arc elasticity.{" "}
                <strong className="whitespace-nowrap">(3 marks)</strong>
                <Answers questionNumber="2bii" />
              </li>
              <li>
                Is demand elastic or inelastic? Why?{" "}
                <strong className="whitespace-nowrap">(3 marks)</strong>
                <Answers questionNumber="2biii" />
              </li>
            </ol>
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 3</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            What is utility? List the approaches to analyze consumer behaviour.{" "}
            <strong className="whitespace-nowrap">(6 marks)</strong>
            <Answers questionNumber="3a" />
          </li>
          <li>
            Differentiate between cardinal and ordinal theories of consumer
            behaviour. <strong className="whitespace-nowrap">(6 marks)</strong>
            <Answers questionNumber="3b" />
          </li>
          <li>
            State the law of diminishing marginal utility.{" "}
            <strong className="whitespace-nowrap">(3 marks)</strong>
            <Answers questionNumber="3c" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 4</h4>
        Outline and discuss seven assumptions and properties of indifference
        curve.
        <strong className="whitespace-nowrap">(15 marks)</strong>
        <Answers questionNumber="4" />
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 5</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Explain the following concepts:
            <ol className="mx-4 list-[lower-roman]">
              <li>Marginal rate of substitution</li>
              <li>Transitivity</li>
              <li>Rationality</li>
            </ol>
            <strong className="whitespace-nowrap">(5 marks)</strong>
            <Answers questionNumber="5a" />
          </li>
          <li>
            List five contemporary approaches to price determination.{" "}
            <strong className="whitespace-nowrap">(5 marks)</strong>
            <Answers questionNumber="5b" />
          </li>
          <li>
            State five importance of elasticity of supply.{" "}
            <strong className="whitespace-nowrap">(5 marks)</strong>
            <Answers questionNumber="5c" />
          </li>
        </ol>
      </li>
    </Questions>
  );
}
