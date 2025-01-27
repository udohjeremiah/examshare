import Answers from "@/components/Answers";
import Questions from "@/components/Questions";

export default function CSC307() {
  return (
    <Questions
      school="western delta university"
      college="computing"
      department="computer science"
      session="2023/2024"
      semester="first semester"
      courseCode="CSC307"
      courseTitle="formal language and automata theory"
      allowedTime="2hrs: 30mins"
      instruction="Attempt question one (1) and any other three (3) questions"
    >
      <li>
        <h4 className="mb-2 font-bold">Question 1 (Compulsory) (25 marks)</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Define the following:
            <ol className="mx-4 list-[lower-roman]">
              <li>Automation</li>
              <li>Automata Theory</li>
              <li>Alphabets</li>
              <li>Strings</li>
              <li>Language</li>
              <li>Empty String</li>
            </ol>
            <strong className="whitespace-nowrap">(6 marks)</strong>
            <Answers questionNumber="1a" />
          </li>
          <li>
            <ol className="mx-4 list-[lower-roman]">
              <li>
                State the objective of Automata Theory{" "}
                <strong className="whitespace-nowrap">(2 marks)</strong>
                <Answers questionNumber="1bi" />
              </li>
              <li>
                Using suitable diagrams only, represent Automation and its
                configuration.{" "}
                <strong className="whitespace-nowrap">(4 marks)</strong>
                <Answers questionNumber="1bii" />
              </li>
            </ol>
          </li>
          <li>
            <ol className="mx-4 list-[lower-roman]">
              <li>
                Consider the string &quot;q r s t u v w x y z&quot;. Determine
                the length of the string.{" "}
                <strong className="whitespace-nowrap">(2 marks)</strong>
                <Answers questionNumber="1ci" />
              </li>
              <li>
                If x = &quot;a b c d e f g h&quot; and y = &quot;m n o p q r
                st&quot;, compute the concatenation of xy.{" "}
                <strong className="whitespace-nowrap">(2 marks)</strong>
                <Answers questionNumber="1cii" />
              </li>
              <li>
                Given that w = 10111101011010001110. Find (w)<sup>R</sup>.{" "}
                <strong className="whitespace-nowrap">(2 marks)</strong>
                <Answers questionNumber="1ciii" />
              </li>
            </ol>
          </li>
          <li>
            <ol className="mx-4 list-[lower-roman]">
              <li>
                Give a formal description of Context Free Grammer (CFG). Assume
                that the production rule for a regular expression is as follows:
                <pre className="mb-2 mt-2 block">
                  <code>
                    S -&gt; bS..................Rule 1
                    <br />S -&gt; e...................Rule 2
                  </code>
                </pre>
                <strong className="whitespace-nowrap">(3 marks)</strong>
                <Answers questionNumber="1di" />
              </li>
              <li>
                Derive the string &quot;bbbbbb&quot;{" "}
                <strong className="whitespace-nowrap">(4 marks)</strong>
                <Answers questionNumber="1dii" />
              </li>
            </ol>
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 2 (15 marks)</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            <ol className="mx-4 list-[lower-roman]">
              <li>
                Define Derivation and Parse Tree.{" "}
                <strong className="whitespace-nowrap">(2 marks)</strong>
                <Answers questionNumber="1bi" />
              </li>
              <li>
                List and explain two (2) types of derivation.{" "}
                <strong className="whitespace-nowrap">(3 marks)</strong>
                <Answers questionNumber="1bi" />
              </li>
            </ol>
          </li>
          <li>
            Write down four (4) properties of a parse tree.{" "}
            <strong className="whitespace-nowrap">(4 marks)</strong>
            <Answers questionNumber="1b" />
          </li>
          <li>
            Consider the Grammer:
            <pre className="mb-2 mt-2 block">
              <code>
                S -&gt; aAS/aSS/e..................Rule 1
                <br />A -&gt; SbA/ba.....................Rule 2
              </code>
            </pre>
            <ol className="mx-4 list-[lower-roman]">
              <li>
                Using leftmost derivation, derive the string &quot;aabaa&quot;
                <strong className="whitespace-nowrap">(3 marks)</strong>
                <Answers questionNumber="2ci" />
              </li>
              <li>
                Show the corresponding parse treee.{" "}
                <strong className="whitespace-nowrap">(3 marks)</strong>
                <Answers questionNumber="2cii" />
              </li>
            </ol>
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 3 (15 marks)</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Define the following:
            <ol className="mx-4 list-[lower-roman]">
              <li>Rightmost Derivation </li>
              <li>Rightmost Derivation Tree </li>
              <strong className="whitespace-nowrap">(4 marks)</strong>
              <Answers questionNumber="3a" />
            </ol>
          </li>
          <li>
            Context Free Grammers (CFG) are recognized by what automation?{" "}
            <strong className="whitespace-nowrap">(2 marks)</strong>
            <Answers questionNumber="3b" />
          </li>
          <li>
            The production rule for a regular expression is given as follows:
            <pre className="mb-2 mt-2 block">
              <code>
                S -&gt; AB/e..................Rule 1
                <br />A -&gt; aB....................Rule 2
                <br />B -&gt; Sb....................Rule 3
              </code>
            </pre>
            <ol className="mx-4 list-[lower-roman]">
              <li>
                Derive the string &quot;abb&quot;
                <strong className="whitespace-nowrap">(5 marks)</strong>
                <Answers questionNumber="3ci" />
              </li>
              <li>
                Draw the parse tree{" "}
                <strong className="whitespace-nowrap">(4 marks)</strong>
                <Answers questionNumber="3cii" />
              </li>
            </ol>
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 4 (15 marks)</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Write a formal definition of finite automata.{" "}
            <strong className="whitespace-nowrap">(3 marks)</strong>
            <Answers questionNumber="4a" />
          </li>
          <li>
            Write explanatory notes on transition diagram and transition table.{" "}
            <strong className="whitespace-nowrap">(4 marks)</strong>
            <Answers questionNumber="4b" />
          </li>
          <li>
            Construct a Deterministic Finite Automata (DFA) accepting all
            strings over &#123;x, y&#125; ending with &apos;xy&apos; using the
            following procedure:
            <ol className="mx-4 list-[lower-roman]">
              <li>
                Develop a Mathematical Model.{" "}
                <strong className="whitespace-nowrap">(2 marks)</strong>
                <Answers questionNumber="4ci" />
              </li>
              <li>
                Generate the transition diagram.{" "}
                <strong className="whitespace-nowrap">(3 marks)</strong>
                <Answers questionNumber="4cii" />
              </li>
              <li>
                Draw the corresponding transition table.{" "}
                <strong className="whitespace-nowrap">(3 marks)</strong>
                <Answers questionNumber="4ciii" />
              </li>
            </ol>
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 5 (15 marks)</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Why is Push Down Automata (PDA) more powerful than a Finite State
            Machine (FSM). State the three (3) components of a Push Down
            Automata. <strong className="whitespace-nowrap">(4 marks)</strong>
            <Answers questionNumber="5a" />
          </li>
          <li>
            With the aid of a diagram only, illustrate the working principle of
            a Push Down Automata (PDA).{" "}
            <strong className="whitespace-nowrap">(3 marks)</strong>
            <Answers questionNumber="5b" />
          </li>
          <li>
            Construct a push down automata that accepts L = &#123;i<sup>k</sup>j
            <sup>k</sup> for k = 3&#125;. Use the following steps:
            <ol className="mx-4 list-[lower-roman]">
              <li>
                Draft a Mathematical Model.{" "}
                <strong className="whitespace-nowrap">(2 marks)</strong>
                <Answers questionNumber="5ci" />
              </li>
              <li>
                Show the contents of the stack for each iteration.{" "}
                <strong className="whitespace-nowrap">(3 marks)</strong>
                <Answers questionNumber="5cii" />
              </li>
              <li>
                Draw the transition diagram.{" "}
                <strong className="whitespace-nowrap">(3 marks)</strong>
                <Answers questionNumber="5ciii" />
              </li>
            </ol>
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 6 (15 marks)</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            A Turing machine has what data structure? Highlight four (4) rules
            of Operation of Turing machines.{" "}
            <strong className="whitespace-nowrap">(5 marks)</strong>
            <Answers questionNumber="6a" />
          </li>
          <li>
            List and explain five (5) applications of Turing machines.{" "}
            <strong className="whitespace-nowrap">(5 marks)</strong>
            <Answers questionNumber="6b" />
          </li>
          <li>
            Design a Turing machine which recognizes the language L = 01*0{" "}
            <strong className="whitespace-nowrap">(5 marks)</strong>
            <Answers questionNumber="6c" />
          </li>
        </ol>
      </li>
    </Questions>
  );
}
