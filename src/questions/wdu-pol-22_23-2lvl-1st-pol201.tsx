import Questions from "@/components/Questions";
import Answers from "@/components/Answers";

export default function POL201() {
  return (
    <Questions
      school="western delta university"
      college="social and management sciences"
      department="Political Science"
      session="2022/2023"
      semester="first semester"
      courseCode="POL201"
      courseTitle="Nigerian Politics and Government"
      allowedTime="2hrs: 30mins"
      instruction="Answer four (4) questions in all. All questions carry equal marks"
    >
      <li>
        <h4 className="mb-2 font-bold">Question 1</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Discuss the role of Ama-Ala in Ibo traditional political system?
            <Answers questionNumber="1a" />
          </li>
          <li>
            Elaborate on the structure of its government.
            <Answers questionNumber="1b" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 2</h4>
        What factors account for the success of indirect rule in Northern
        Nigeria?
        <Answers questionNumber="2" />
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 3</h4>
        How did Northerners react to the indirect rules system adopted by Lord
        Lugard?
        <Answers questionNumber="3" />
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 4</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Discuss the Background to Clifford constitution of 1922?
            <Answers questionNumber="4a" />
          </li>
          <li>
            What are the strengths and weaknesses of the constitution?
            <Answers questionNumber="4b" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 5</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            What are the major features in Richards constitution of 1946?
            <Answers questionNumber="5a" />
          </li>
          <li>
            What factors led to its collapse?
            <Answers questionNumber="5b" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 6</h4>
        Discuss some of the important provisions in the Macpherson&apos;s
        constitution of 1951?
        <Answers questionNumber="6" />
      </li>
    </Questions>
  );
}
