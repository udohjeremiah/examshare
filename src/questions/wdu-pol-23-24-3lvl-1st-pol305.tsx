import { Answers } from "@/components/answers";
import { Questions } from "@/components/questions";

export function PastQuestion() {
  return (
    <Questions
      allowedTime="3hrs"
      college="social and management sciences"
      courseCode="POL305"
      courseTitle="Public Policy Analysis"
      department="Political Science"
      instruction="Answer all questions"
      school="western delta university"
      semester="first semester"
      session="2023/2024"
    >
      <li>
        <h4 className="mb-2 font-bold">Question 1</h4>
        Attempt a comprehensive definition of Public Policy Analysis. Discuss
        its characteristics and purpose.
        <Answers questionNumber="1" />
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 2</h4>
        Citing the Procedures, Assumptions or Criticisms, distinguish between
        the Rational Comprehensive Model and the Mixed Scanning Model.
        <Answers questionNumber="2" />
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 3</h4>
        Succinctly define Public Policy stating its various types and actors.
        <Answers questionNumber="3" />
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 4</h4>
        Discuss any one of the following Techniques in Public Policy Analysis:
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Cost-Benefit Analysis
            <Answers questionNumber="4a" />
          </li>
          <li>
            Cost-Effectiveness Tool of Analysis
            <Answers questionNumber="4b" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 5</h4>
        Discuss Public Policy Making Process and advance reasons for the failure
        of Public Policies.
        <Answers questionNumber="5" />
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 6</h4>
        Discuss the Critical Path as an Analytical tool in Public Policy
        Analysis.
        <Answers questionNumber="6" />
      </li>
    </Questions>
  );
}
