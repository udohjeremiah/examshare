import Questions from "@/components/Questions";
import Answers from "@/components/Answers";

export default function POL202() {
  return (
    <Questions
      school="western delta university"
      college="social and management sciences"
      department="Political Science"
      session="2022/2023"
      semester="second semester"
      courseCode="POL202"
      courseTitle="Nigerian Government and Politics II"
      allowedTime="2hrs"
      instruction="Answer four (4) questions only. Cancel unused spaces"
    >
      <li>
        <h4 className="mb-2 font-bold">Question 1</h4>
        Discuss the Conditions for a Federal State and account for the problems
        of Federalism in Nigeria.
        <Answers questionNumber="1" />
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 2</h4>
        State the Divisive Factors in Nigeria from the Colonial Era to the
        present day and account for Nigeria&apos;s continued existence as one
        Nation with specific reference to the Integrative Forces/Policies
        deplored by the Nigerian state.
        <Answers questionNumber="2" />
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 3</h4>
        Discuss the various Principles of Revenue Allocation in Nigeria and
        discuss the impacts on governance in the Nigerian State.
        <Answers questionNumber="3" />
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 4</h4>
        Define in detail the concept of Ethnic groups and discuss the
        implications of Ethnicity on governance and politics in Nigeria.
        <Answers questionNumber="4" />
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 5</h4>
        Define Elections and trace the history of Elections in Nigeria starting
        from Clifford&apos;s Constitution of 1922 and discuss its consequences
        on governance.
        <Answers questionNumber="5" />
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 6</h4>
        Examine the roles of Religion in Politics and Governance of the Nigerian
        state.
        <Answers questionNumber="6" />
      </li>
    </Questions>
  );
}
