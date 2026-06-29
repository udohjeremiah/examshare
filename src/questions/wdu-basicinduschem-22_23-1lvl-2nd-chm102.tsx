import Questions from "@/components/Questions";
import Answers from "@/components/Answers";

export default function CHM102() {
  return (
    <Questions
      school="western delta university"
      college="natural and applied sciences"
      department="basic and industrial chemistry"
      session="2022/2023"
      semester="second semester"
      courseCode="CHM102"
      courseTitle="general chemistry II"
      allowedTime="2hrs: 30mins"
      instruction="answer FOUR questions only"
    >
      <li>
        <h4 className="mb-2 font-bold">Question 1</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            State and explain the method of preparing alkanes{" "}
            <strong className="whitespace-nowrap">(7.5 marks)</strong>
            <Answers questionNumber="1a" />
          </li>
          <li>
            Using equations only, explain the following methods of preparing:
            <ol className="mx-4 list-[lower-roman]">
              <li>
                Akenes and alkyne reduction{" "}
                <strong className="whitespace-nowrap">(2.5 marks)</strong>
                <Answers questionNumber="1bi" />
              </li>
              <li>
                Wurtz reaction{" "}
                <strong className="whitespace-nowrap">(2.5 marks)</strong>
                <Answers questionNumber="1bii" />
              </li>
              <li>
                Oxidation{" "}
                <strong className="whitespace-nowrap">(2.5 marks)</strong>
                <Answers questionNumber="1biii" />
              </li>
              <li>
                Reduction of alkyl halides{" "}
                <strong className="whitespace-nowrap">(2.5 marks)</strong>
                <Answers questionNumber="1biv" />
              </li>
            </ol>
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 2</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            States four (4) physical properties of alkane{" "}
            <strong className="whitespace-nowrap">(4 marks)</strong>
            <Answers questionNumber="2a" />
          </li>
          <li>
            Give the structure of the following compounds:
            <ol className="mx-4 list-[lower-roman]">
              <li>
                1,2- dibromocyclopentane{" "}
                <strong className="whitespace-nowrap">(1 marks)</strong>
                <Answers questionNumber="2bi" />
              </li>
              <li>
                3- heptanol{" "}
                <strong className="whitespace-nowrap">(1 marks)</strong>
                <Answers questionNumber="2bii" />
              </li>
              <li>
                2,3,4- trihydroxybutanal{" "}
                <strong className="whitespace-nowrap">(1 marks)</strong>
                <Answers questionNumber="2biii" />
              </li>
              <li>
                2,3- pentadiene{" "}
                <strong className="whitespace-nowrap">(1 marks)</strong>
                <Answers questionNumber="2biv" />
              </li>
              <li>
                1, 1, 2, 2- tetra bromo butane{" "}
                <strong className="whitespace-nowrap">(1 marks)</strong>
                <Answers questionNumber="2bv" />
              </li>
              <li>
                2,2,4- timethyl hexane{" "}
                <strong className="whitespace-nowrap">(1 marks)</strong>
                <Answers questionNumber="2bvi" />
              </li>
              <li>
                cyclobutane{" "}
                <strong className="whitespace-nowrap">(1 marks)</strong>
                <Answers questionNumber="2bvii" />
              </li>
              <li>
                cyclohexene{" "}
                <strong className="whitespace-nowrap">(1 marks)</strong>
                <Answers questionNumber="2bviii" />
              </li>
              <li>
                toluene <strong className="whitespace-nowrap">(1 marks)</strong>
                <Answers questionNumber="2bix" />
              </li>
              <li>
                aniline <strong className="whitespace-nowrap">(1 marks)</strong>
                <Answers questionNumber="2bx" />
              </li>
            </ol>
          </li>
          <li>
            Describe any test for alkene{" "}
            <strong className="whitespace-nowrap">(3.5 marks)</strong>
            <Answers questionNumber="2c" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 3</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Explain using equation only the following reactions of alkenes:
            <ol className="mx-4 list-[lower-roman]">
              <li>
                Addition of hydrogen halides{" "}
                <strong className="whitespace-nowrap">(2.5 marks)</strong>
                <Answers questionNumber="3ai" />
              </li>
              <li>
                Reduction{" "}
                <strong className="whitespace-nowrap">(2.5 marks)</strong>
                <Answers questionNumber="3aii" />
              </li>
              <li>
                Halogenation{" "}
                <strong className="whitespace-nowrap">(2.5 marks)</strong>
                <Answers questionNumber="3aiii" />
              </li>
              <li>
                Hydroxylation of alkenes{" "}
                <strong className="whitespace-nowrap">(2.5 marks)</strong>
                <Answers questionNumber="3aiv" />
              </li>
              <li>
                Ozonolysis{" "}
                <strong className="whitespace-nowrap">(2.5 marks)</strong>
                <Answers questionNumber="3av" />
              </li>
            </ol>
          </li>
          <li>
            Explaing the following properties of alkynes:
            <ol className="mx-4 list-[lower-roman]">
              <li>
                Combustion{" "}
                <strong className="whitespace-nowrap">(4 marks)</strong>
                <Answers questionNumber="3ci" />
              </li>
              <li>
                Addition of hydrogen{" "}
                <strong className="whitespace-nowrap">(3.5 marks)</strong>
                <Answers questionNumber="3cii" />
              </li>
            </ol>
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 4</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            What are carbonyl compounds?{" "}
            <strong className="whitespace-nowrap">(3 marks)</strong>
            <Answers questionNumber="4a" />
          </li>
          <li>
            Draw the structure of the following:
            <ol className="mx-4 list-[lower-roman]">
              <li>
                Ethanol <strong className="whitespace-nowrap">(2 marks)</strong>
                <Answers questionNumber="4bi" />
              </li>
              <li>
                Butan-3-one{" "}
                <strong className="whitespace-nowrap">(2 marks)</strong>
                <Answers questionNumber="4bii" />
              </li>
              <li>
                Propanoic acid{" "}
                <strong className="whitespace-nowrap">(2 marks)</strong>
                <Answers questionNumber="4biii" />
              </li>
            </ol>
          </li>
          <li>
            With a named example each give the classes and types of alcohol{" "}
            <strong className="whitespace-nowrap">(3 marks)</strong>
            <Answers questionNumber="4c" />
          </li>
          <li>
            Write a reaction for the oxidation of ethanol to ethanoic acid{" "}
            <strong className="whitespace-nowrap">(2.5 marks)</strong>
            <Answers questionNumber="4d" />
          </li>
          <li>
            With equation only, give any three reactions of alcohol{" "}
            <strong className="whitespace-nowrap">(3 marks)</strong>
            <Answers questionNumber="4e" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 5</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Draw the structure of 3-methylbutan-1,2-diol{" "}
            <strong className="whitespace-nowrap">(3 marks)</strong>
            <Answers questionNumber="5a" />
          </li>
          <li>
            What are esters?{" "}
            <strong className="whitespace-nowrap">(3 marks)</strong>
            <Answers questionNumber="5b" />
          </li>
          <li>
            Write a reaction for the formation of ethyl ethanoate{" "}
            <strong className="whitespace-nowrap">(3.5 marks)</strong>
            <Answers questionNumber="5c" />
          </li>
          <li>
            <ol className="mx-4 list-[lower-roman]">
              <li>
                State two differences between a sigma and a pi bond{" "}
                <strong className="whitespace-nowrap">(5 marks)</strong>
                <Answers questionNumber="5di" />
              </li>
              <li>
                State five (5) characteristics of lipids{" "}
                <strong className="whitespace-nowrap">(3 marks)</strong>
                <Answers questionNumber="5dii" />
              </li>
            </ol>
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 6</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Draw the structures of the following compound:
            <ol className="mx-4 list-[lower-roman]">
              <li>
                Prostaglandis{" "}
                <strong className="whitespace-nowrap">(4 marks)</strong>
                <Answers questionNumber="6ai" />
              </li>
              <li>
                B-carotene{" "}
                <strong className="whitespace-nowrap">(4 marks)</strong>
                <Answers questionNumber="6aii" />
              </li>
              <li>
                Cetyl palmitate{" "}
                <strong className="whitespace-nowrap">(4 marks)</strong>
                <Answers questionNumber="6aiii" />
              </li>
              <li>
                Phospholipids{" "}
                <strong className="whitespace-nowrap">(4 marks)</strong>
                <Answers questionNumber="6aiv" />
              </li>
            </ol>
          </li>
          <li>
            Name the following compound:{" "}
            <strong className="whitespace-nowrap">(1.5 marks)</strong>
            <Answers questionNumber="6b" />
          </li>
        </ol>
      </li>
    </Questions>
  );
}
