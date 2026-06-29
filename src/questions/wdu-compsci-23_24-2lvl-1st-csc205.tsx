import Questions from "@/components/Questions";
import Answers from "@/components/Answers";

export default function CSC205() {
  return (
    <Questions
      school="western delta university"
      college="computing"
      department="computer science"
      session="2023/2023"
      semester="first semester"
      courseCode="CSC205"
      courseTitle="discrete structures"
      allowedTime="2hrs: 30mins"
      instruction="Answer question one (1) and choose three (3) other questions"
    >
      <li>
        <h4 className="mb-2 font-bold">Question 1 (Compulsory) (25 Marks)</h4>
        Given the following expression: <code>S = (6, 10, 14)</code>,{" "}
        <code>T = (4, 10, 16)</code> and <code>Y = (X, Y, Z)</code>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>Power Sets. P(S)</li>
          <li>Cartesiam Product. S * T</li>
          <li>Union. S &cup; T</li>
          <li>Intersection. S &cap; T</li>
          <li>Difference. S - T</li>
        </ol>
        <Answers questionNumber="1" />
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 2 (15 Marks)</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Given that R = &#123;(1,2),(2,3),(1,4)&#125; be a relation (say on
            set Z). Then (1,3) &isin; R<sup>*</sup> (since (1,2),(2,3) &isin;
            R), but (2,4) &isin;/R<sup>*</sup>. Draw the diagram, the graph of a
            relation and its transitive closure.{" "}
            <strong className="whitespace-nowrap">(10 marks)</strong>
            <Answers questionNumber="2a" />
          </li>
          <li>
            Define the following:
            <ol className="mx-4 list-[lower-roman]">
              <li>
                Set cardinality, Set equality{" "}
                <strong className="whitespace-nowrap">(2.5 marks)</strong>
                <Answers questionNumber="2bi" />
              </li>
              <li>
                Subsets{" "}
                <strong className="whitespace-nowrap">(2.5 marks)</strong>
                <Answers questionNumber="2bii" />
              </li>
            </ol>
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 3 (15 Marks)</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Define the following:
            <ol className="mx-4 list-[lower-roman]">
              <li>A function.</li>
              <li>Injection</li>
              <li>Surjection</li>
              <li>Bijection</li>
              <li>Inverse relation</li>
              <li>Set cardinality</li>
            </ol>
            <strong className="whitespace-nowrap">(12 marks)</strong>
            <Answers questionNumber="3a" />
          </li>
          <li>
            Given two functions X, Y - Draw a:
            <ol className="mx-4 list-[lower-roman]">
              <li>
                What are nested loops?{" "}
                <strong className="whitespace-nowrap">(2 marks)</strong>
                <Answers questionNumber="3bi" />
              </li>
              <li>
                A surjective function from X to Y{" "}
                <strong className="whitespace-nowrap">(1.5 marks)</strong>
                <Answers questionNumber="3bii" />
              </li>
            </ol>
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 4 (15 Marks)</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Define the following terms:
            <ol className="mx-4 list-[lower-roman]">
              <li>
                A directed graph{" "}
                <strong className="whitespace-nowrap">(2.5 marks)</strong>
                <Answers questionNumber="3bii" />
              </li>
              <li>
                Undirected graph{" "}
                <strong className="whitespace-nowrap">(2.5 marks)</strong>
                <Answers questionNumber="3bii" />
              </li>
              <li>
                Define Graph Isomorphism and show a diagram of an isomorphic
                diagram and a non-isomorphic graph{" "}
                <strong className="whitespace-nowrap">(10 marks)</strong>
                <Answers questionNumber="3biii" />
              </li>
            </ol>
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 5 (15 marks)</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Consider the formula (P &and; ¬Q) ⇒ (¬P &or; Q), where P and Q are
            atoms.
            <ol className="mx-4 list-[lower-roman]">
              <li>
                Is the formula valid? Justify your answer.{" "}
                <strong className="whitespace-nowrap">(5 marks)</strong>
                <Answers questionNumber="5a" />
              </li>
              <li>
                Is the formula satisfiable? Justify your answer.{" "}
                <strong className="whitespace-nowrap">(5 marks)</strong>
                <Answers questionNumber="5a" />
              </li>
            </ol>
          </li>
          <li>
            Show with a diagram a strongly connected graph and a weakly
            connected graph.{" "}
            <strong className="whitespace-nowrap">(5 marks)</strong>
            <Answers questionNumber="5b" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 6 (15 Marks)</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Suppose we have an undirected graph G such taht the degree of each
            vertex is a multiple of 10 or 15. Show that the number of edges in G
            must be a multiple of 5.{" "}
            <strong className="whitespace-nowrap">(10 marks)</strong>
            <Answers questionNumber="6a" />
          </li>
          <li>
            Give the table below, fill in the expected outcome for A and B.{" "}
            <strong className="whitespace-nowrap">(5 marks)</strong>
            <div className="overflow-auto">
              <table className="mb-2 mt-2 border-collapse border">
                <thead>
                  <tr>
                    <th className="border px-6 text-center">A B</th>
                    <th className="border px-6 text-center">¬A</th>
                    <th className="border px-6 text-center">A &and; B</th>
                    <th className="border px-6 text-center">A &or; B</th>
                    <th className="border px-6 text-center">A → B</th>
                    <th className="border px-6 text-center">A ⟷ B</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-6 text-center">T T</td>
                    <td className="border px-6 text-center"></td>
                    <td className="border px-6 text-center"></td>
                    <td className="border px-6 text-center"></td>
                    <td className="border px-6 text-center"></td>
                    <td className="border px-6 text-center"></td>
                  </tr>
                  <tr>
                    <td className="border px-6 text-center">T F</td>
                    <td className="border px-6 text-center"></td>
                    <td className="border px-6 text-center"></td>
                    <td className="border px-6 text-center"></td>
                    <td className="border px-6 text-center"></td>
                    <td className="border px-6 text-center"></td>
                  </tr>
                  <tr>
                    <td className="border px-6 text-center">F T</td>
                    <td className="border px-6 text-center"></td>
                    <td className="border px-6 text-center"></td>
                    <td className="border px-6 text-center"></td>
                    <td className="border px-6 text-center"></td>
                    <td className="border px-6 text-center"></td>
                  </tr>
                  <tr>
                    <td className="border px-6 text-center">F F</td>
                    <td className="border px-6 text-center"></td>
                    <td className="border px-6 text-center"></td>
                    <td className="border px-6 text-center"></td>
                    <td className="border px-6 text-center"></td>
                    <td className="border px-6 text-center"></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <Answers questionNumber="6b" />
          </li>
        </ol>
      </li>
    </Questions>
  );
}
