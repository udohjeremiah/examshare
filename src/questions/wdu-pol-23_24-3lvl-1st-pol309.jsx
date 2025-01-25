import Questions from "@/components/Questions";
import Answers from "@/components/Answers";

export default function POL309() {
  return (
    <Questions
      school="western delta university"
      college="social and management sciences"
      department="Political Science"
      session="2023/2024"
      semester="first semester"
      courseCode="POL309"
      courseTitle="Theory and Practice of Administration"
      allowedTime="2hrs"
      instruction="Answer four (4) questions"
    >
      <li>
        <h4 className="mb-2 font-bold">Question 1</h4>
        Examine the development of early management and Administration thought
        during the pre-industrial Revolution to industrial Revolution.
        <Answers questionNumber="1" />
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 2</h4>
        Discuss the system theory using the aid of a diagram as enunciated by
        David Easton.
        <Answers questionNumber="2" />
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 3</h4>
        Examine Adam Smith observation about the importance of division of
        labour to higher productivity.
        <Answers questionNumber="3" />
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 4</h4>
        Discuss the difference and familiarities in Public Administration and
        Private Administration.
        <Answers questionNumber="4" />
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 5</h4>
        List and discuss Maslow&apos;s needs hierarchy framework.
        <Answers questionNumber="5" />
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 6</h4>
        Write short notes on the following:
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Structural — functional analysis by Talcott Parson
            <Answers questionNumber="6a" />
          </li>
          <li>
            Public choice theory
            <Answers questionNumber="6b" />
          </li>
          <li>
            Max Weber&apos;s Typology of Authority.
            <Answers questionNumber="6c" />
          </li>
        </ol>
      </li>
    </Questions>
  );
}
