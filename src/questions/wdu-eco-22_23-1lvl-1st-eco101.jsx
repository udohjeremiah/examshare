import Questions from "@/components/Questions";
import Answers from "@/components/Answers";

export default function ECO101() {
  return (
    <Questions
      school="western delta university"
      college="social and management sciences"
      department="economics"
      session="2022/2023"
      semester="first semester"
      courseCode="ECO101"
      courseTitle="Principles of Economics I"
      allowedTime="2hrs"
      instruction="answer any FOUR questions"
    >
      <li>
        <h4 className="mb-2 font-bold">Question 1</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            What do you mean by utility?{" "}
            <strong className="whitespace-nowrap">(3.5 marks)</strong>
            <Answers questionNumber="1a" />
          </li>
          <li>
            Briefly differentiate between the Cardinal and Ordinal views of
            utility <strong className="whitespace-nowrap">(4 marks)</strong>
            <Answers questionNumber="1b" />
          </li>
          <li>
            Write brief notes on the following:
            <ol className="mx-4 list-[lower-roman]">
              <li>marginal utility</li>
              <li>total utility</li>
              <li>rational consumer</li>
              <li>change in quantity demanded</li>
              <li>change in demanded</li>
            </ol>
            <strong className="whitespace-nowrap">(2 marks each)</strong>
            <Answers questionNumber="1c" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 2</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Using clear illustration, explain what consumer&apos;s surplus is{" "}
            <strong className="whitespace-nowrap">(7.5 marks)</strong>
            <Answers questionNumber="2a" />
          </li>
          <li>
            Also using clear illustrations, differentiate between consumption
            and waste of resources{" "}
            <strong className="whitespace-nowrap">(10 marks)</strong>
            <Answers questionNumber="2b" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 3</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            What do you understand by indifference curve?{" "}
            <strong className="whitespace-nowrap">(3 marks)</strong>
            <Answers questionNumber="3a" />
          </li>
          <li>
            Draw and explain an indifference map{" "}
            <strong className="whitespace-nowrap">(7.5 marks)</strong>
            <Answers questionNumber="3b" />
          </li>
          <li>
            State seven properties of an indifference curve{" "}
            <strong className="whitespace-nowrap">(7 marks)</strong>
            <Answers questionNumber="3c" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 4</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            The law of supply states that{" "}
            <span className="underline underline-offset-4">
              other things being equal
            </span>
            , the quantity supplied of a commodity varies directly with its
            price. Explain the underlined phrase{" "}
            <strong className="whitespace-nowrap">(5 marks)</strong>
            <Answers questionNumber="4a" />
          </li>
          <li>
            What are the exceptions to the law of supply?{" "}
            <strong className="whitespace-nowrap">(5 marks)</strong>
            <Answers questionNumber="4b" />
          </li>
          <li>
            Supposed the price of a commodity rises from #60,000 to #100,000 and
            the quantity supplied rises from 400 units to 800 units. Calculate
            elasticity of supply and comment on your answer{" "}
            <strong className="whitespace-nowrap">(7.5 marks)</strong>
            <Answers questionNumber="4c" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 5</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            What do you understand by consumer equilibrium?{" "}
            <strong className="whitespace-nowrap">(3 marks)</strong>
            <Answers questionNumber="5a" />
          </li>
          <li>
            Using the three conditions for consumer equilibrium, show clearly at
            what unit equilibrium is established, given price for commodity A as
            #4.00 and commodity B as #2.00 and income (Y) as #24.00{" "}
            <div className="overflow-auto">
              <table className="mb-2 mt-2">
                <thead>
                  <tr>
                    <th scope="col" className="border px-6 text-center">
                      Number of units
                    </th>
                    <th scope="col" className="border px-6 text-center">
                      MU<sub>A</sub>
                    </th>
                    <th scope="col" className="border px-6 text-center">
                      MU<sub>B</sub>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-6">1</td>
                    <td className="border px-6">200</td>
                    <td className="border px-6">180</td>
                  </tr>
                  <tr>
                    <td className="border px-6">2</td>
                    <td className="border px-6">180</td>
                    <td className="border px-6">160</td>
                  </tr>
                  <tr>
                    <td className="border px-6">3</td>
                    <td className="border px-6">160</td>
                    <td className="border px-6">140</td>
                  </tr>
                  <tr>
                    <td className="border px-6">4</td>
                    <td className="border px-6">140</td>
                    <td className="border px-6">120</td>
                  </tr>
                  <tr>
                    <td className="border px-6">5</td>
                    <td className="border px-6">120</td>
                    <td className="border px-6">110</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <strong className="whitespace-nowrap">(14.5 marks)</strong>
            <Answers questionNumber="5b" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 6</h4>
        <p className="mb-3">Write short notes on the following:</p>
        <ol className="mx-4 list-[lower-roman]">
          <li>microeconomics</li>
          <li>macroeconomics</li>
          <li>economic resources</li>
          <li>scarcity</li>
          <li>scale of preference</li>
          <li>choice</li>
          <li>perfect market</li>
        </ol>
        <strong className="whitespace-nowrap">(2.5 marks each)</strong>
        <Answers questionNumber="6" />
      </li>
    </Questions>
  );
}
