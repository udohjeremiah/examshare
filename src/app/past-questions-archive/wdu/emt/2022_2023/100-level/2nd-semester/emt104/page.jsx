import Questions from "@/components/Questions";
import Answers from "@/components/Answers";

export default function EMT104() {
  return (
    <Questions
      school="western delta university"
      college="natural and applied sciences"
      department="environmental management and toxicology"
      session="2022/2023"
      semester="second semester"
      courseCode="EMT104"
      courseTitle="Practical Biology II"
      allowedTime="2hrs"
      instruction="answer ALL questions"
    >
      <li>
        <h4 className="mb-2 font-bold">Question 1</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Identify specimen A and B stating the phyla and class they belong to
            and their habitat.
            <Answers questionNumber="1a" />
          </li>
          <li>
            Give two examples each of the classes Polychaeta and Hirudinea under
            the phylum Anelida.
            <Answers questionNumber="1b" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 2</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Identify and classify any member of the phyla Platyhelminthes and
            Nematoda to class level.
            <Answers questionNumber="2a" />
          </li>
          <li>
            Differentiate between the phyla Platyhelminthes and Nematoda.
            <Answers questionNumber="2b" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 3</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Identify specimens C and D stating the phyla they belong and their
            habitat.
            <Answers questionNumber="3a" />
          </li>
          <li>
            Draw any member of the phylum Echinodermata.
            <Answers questionNumber="3b" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 4</h4>
        <div>
          Write short notes on the following:
          <ol className="mx-4 list-[lower-roman]">
            <li>Diploblastic</li>
            <li>Ectothermic organisms</li>
            <li>Endothermic organisms</li>
            <li>Amiotic</li>
            <li>Heterotrophic organisms</li>
          </ol>
          <Answers questionNumber="4" />
        </div>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 5</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            List five general characteristics of the kingdom Animalia.
            <Answers questionNumber="5a" />
          </li>
          <li>
            List the classes under the phyla Porifera and Coelentrata.
            <Answers questionNumber="5b" />
          </li>
        </ol>
      </li>
    </Questions>
  );
}
