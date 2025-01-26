import Questions from "@/components/Questions";
import Answers from "@/components/Answers";

export default function BIOCHEM209() {
  return (
    <Questions
      school="western delta university"
      college="natural and applied sciences"
      department="biochemistry"
      session="2023/2024"
      semester="first semester"
      courseCode="BCH209"
      courseTitle="practical biochemistry"
      allowedTime="1hr"
      instruction="answer all questions"
    >
      <li>
        <h4 className="mb-2 font-bold">Section A</h4>
        <ol className="flex list-decimal flex-col gap-2">
          <li>
            Name the test to confirm the presence of carbohydrates in samples.
            <Answers questionNumber="sectionA-1" />
          </li>
          <li>
            Benedict&apos;s reagent is used to detect the presence of _______
            sugars.
            <Answers questionNumber="sectionA-2" />
          </li>
          <li>
            Hopkin&apos;s Cole glyxylic reaction confirms the presence of
            _______.
            <Answers questionNumber="sectionA-3" />
          </li>
          <li>
            Pentoses, when boiled in the presence of hydrochloric acid,
            dehydrate, yield aldehydes of furfural type, which condense with
            orcinol to form _______ coloured compound.
            <Answers questionNumber="sectionA-4" />
          </li>
          <li>
            When carbohydrates are boiled with excess of phemythdrazine, and
            additional condensation takes place, forming _______.
            <Answers questionNumber="sectionA-5" />
          </li>
          <li>
            _______ test is used to confirm the presence of reducing
            monosaccharides.
            <Answers questionNumber="sectionA-6" />
          </li>
          <li>
            Fearson&apos;s test confirms the presence of _______.
            <Answers questionNumber="sectionA-7" />
          </li>
          <li>
            _______ is used to detect the presence of sulphur amino acids.
            <Answers questionNumber="sectionA-8" />
          </li>
          <li>
            The presence of arginine in samples is detect using _______ test.
            <Answers questionNumber="sectionA-9" />
          </li>
          <li>
            What indicator is used for Sørensen&apos;s formol Titration?
            <Answers questionNumber="sectionA-10" />
          </li>
          <li>
            Starch is confirmed using _______ test.
            <Answers questionNumber="sectionA-11" />
          </li>
          <li>
            The principle of _______ test is that the aldehyde or ketone group
            of the carbohydrates reduces blue cupric hydroxide to an insolubble
            yellow to red cuprous oxide.
            <Answers questionNumber="sectionA-12" />
          </li>
          <li>
            The reagents used for Sørensen&apos;s formol Titration is
            formaladehyde and _______.
            <Answers questionNumber="sectionA-13" />
          </li>
          <li>
            Phenols and compounds containing the hydroxybenzene radical react
            with _______ reagent to form red complexes.
            <Answers questionNumber="sectionA-14" />
          </li>
          <li>
            Molish reagent contains _______ in ethanol.
            <Answers questionNumber="sectionA-15" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Section B</h4>
        <ol className="flex flex-col gap-2">
          <li>
            <h5 className="mb-2 font-bold">Question 1</h5>
            List five precautions when carrying out biochemical tests.
            <Answers questionNumber="sectionB-1" />
          </li>
          <li>
            <h5 className="mb-2 font-bold">Question 2</h5>
            How can you distinguish between fructose and sucrose.
            <Answers questionNumber="sectionB-2" />
          </li>
        </ol>
      </li>
    </Questions>
  );
}
