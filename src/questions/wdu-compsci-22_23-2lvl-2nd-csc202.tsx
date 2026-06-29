import Questions from "@/components/Questions";
import Answers from "@/components/Answers";

export default function CSC202() {
  return (
    <Questions
      school="western delta university"
      college="computing"
      department="computer science"
      session="2022/2023"
      semester="second semester"
      courseCode="CSC202"
      courseTitle="assembly language programming"
      allowedTime="2hrs"
      instruction="answer question 1 and any other THREE questions"
    >
      <li>
        <h4 className="mb-2 font-bold">Question 1</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Write a complete assembly language program that computes
            circumference of a circle given as <code>πr</code>, where{" "}
            <code>r</code> is the radius of the circle, using the relevant
            functions in <code>io.H</code>{" "}
            <strong className="whitespace-nowrap">(5 marks)</strong>
            <Answers questionNumber="1a" />
          </li>
          <li>
            Define the following:
            <ol className="mx-4 list-[lower-roman]">
              <li>
                Register{" "}
                <strong className="whitespace-nowrap">(2 marks)</strong>
                <Answers questionNumber="1bi" />
              </li>
              <li>
                Directive{" "}
                <strong className="whitespace-nowrap">(2 marks)</strong>
                <Answers questionNumber="1bii" />
              </li>
            </ol>
          </li>
          <li>
            <ol className="mx-4 list-[lower-roman]">
              <li>
                Give the syntax of an assembly language directive{" "}
                <strong className="whitespace-nowrap">(2 marks)</strong>
                <Answers questionNumber="1ci" />
              </li>
              <li>
                State two examples of a directive{" "}
                <strong className="whitespace-nowrap">(2 marks)</strong>
                <Answers questionNumber="1cii" />
              </li>
              <li>
                Given the decimal number 27.625<sub>10</sub>, calculate its
                binary equivalent{" "}
                <strong className="whitespace-nowrap">(4 marks)</strong>
                <Answers questionNumber="1ciii" />
              </li>
              <li>
                Given the hexadecimal number 15<sub>16</sub>, calculate its
                binary equivalent{" "}
                <strong className="whitespace-nowrap">(4 marks)</strong>
                <Answers questionNumber="1civ" />
              </li>
            </ol>
          </li>
          <li>
            Write an assembly language representation for the following C
            program segment: <br />
            <pre className="mb-2 mt-2 block">
              <code>
                sum = 0, i = 0, x = 10;
                <br />
                while (i &lt;= 10)
                <br />
                &#123;
                <br />
                {"  "}sum = sum + x;
                <br />
                {"  "}x = x + 2;
                <br />
                {"  "}
                i = i + 2;
                <br />
                &#125;
              </code>
            </pre>
            <strong className="whitespace-nowrap">(4 marks)</strong>
            <Answers questionNumber="1d" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 2</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Identify the addressing mode in the following instructions:
            <pre className="mb-2 mt-2 block">
              <code>
                mov ax, 0ah
                <br />
                mov bx, array + 10h
                <br />
                mov ax, [si] + 16
                <br />
                mov ax, [si]
                <br />
                inc cl
              </code>
            </pre>
            <strong className="whitespace-nowrap">(5 marks)</strong>
            <Answers questionNumber="2a" />
          </li>
          <li>
            <ol className="mx-4 list-[lower-roman]">
              <li>
                Interpret the following instruction:{" "}
                <code>array DW 100 DUP(0)</code>{" "}
                <strong className="whitespace-nowrap">(2 marks)</strong>
                <Answers questionNumber="2bi" />
              </li>
              <li>
                State two limitations of the <code>MOV</code> instruction{" "}
                <strong className="whitespace-nowrap">(2 marks)</strong>
                <Answers questionNumber="2bii" />
              </li>
            </ol>
          </li>
          <li>
            <ol className="mx-4 list-[lower-roman]">
              <li>
                State the function of the{" "}
                <strong>
                  <code>movsb</code>
                </strong>{" "}
                instruction{" "}
                <strong className="whitespace-nowrap">(2 marks)</strong>
                <Answers questionNumber="2ci" />
              </li>
              <li>
                Write an assembly language program segment to move the string:{" "}
                <code>
                  &quot;Sessional Examination for 2021/2022 is in Progress&quot;
                </code>{" "}
                from its original location to a new location.{" "}
                <strong className="whitespace-nowrap">(4 marks)</strong>
                <Answers questionNumber="2cii" />
              </li>
            </ol>
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 3</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Define an Interrupt handler{" "}
            <strong className="whitespace-nowrap">(2 marks)</strong>
            <Answers questionNumber="3a" />
          </li>
          <li className="list-[lower-alpha]">
            Given that the BIOS keyboard services is <code>INT 16h</code>,
            calculate:
            <ol className="mx-4 list-[lower-roman]">
              <li>
                The address of the interrupt vector table{" "}
                <strong className="whitespace-nowrap">(4 marks)</strong>
                <Answers questionNumber="3bi" />
              </li>
              <li>
                State the last instruction in an interrupt handler{" "}
                <strong className="whitespace-nowrap">(2 marks)</strong>
                <Answers questionNumber="3bii" />
              </li>
              <li>
                State the function of the instruction stated in{" "}
                <strong>(bii)</strong>{" "}
                <strong className="whitespace-nowrap">(2 marks)</strong>
                <Answers questionNumber="3biii" />
              </li>
              <li>
                What is the result of the execution of the instruction stated in{" "}
                <strong>(bii)</strong>{" "}
                <strong className="whitespace-nowrap">(2 marks)</strong>
                <Answers questionNumber="3biv" />
              </li>
            </ol>
          </li>
          <li>
            Write an assembly language program segment that send a character to
            the printer using a DOS function call.{" "}
            <strong className="whitespace-nowrap">(3 marks)</strong>
            <Answers questionNumber="3c" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 4</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Define the following:
            <ol className="mx-4 list-[lower-roman]">
              <li>Macro</li>
              <li>Macro processor</li>
            </ol>
            <strong className="whitespace-nowrap">(4 marks)</strong>
            <Answers questionNumber="4a" />
          </li>
          <li>
            Given that{" "}
            <code>
              s = x<sup>2</sup>y + xy;
            </code>
            <ol className="mx-4 list-[lower-roman]">
              <li>
                Write a macro to compute <code>s</code>{" "}
                <strong className="whitespace-nowrap">(3 marks)</strong>
                <Answers questionNumber="4bi" />
              </li>
              <li>
                Write a FAR procedure to calculate <code>s</code>{" "}
                <strong className="whitespace-nowrap">(4 marks)</strong>
                <Answers questionNumber="4bii" />
              </li>
              <li>
                Highlight two differences between macro and procedure{" "}
                <strong className="whitespace-nowrap">(4 marks)</strong>
                <Answers questionNumber="4biii" />
              </li>
            </ol>
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 5</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            In a word division using <code>IDIV</code> instruction, state the
            register(s) that represents the following:
            <ol className="mx-4 list-[lower-roman]">
              <li>Dividend</li>
              <li>Quotient</li>
              <li>Remainder</li>
            </ol>
            <strong className="whitespace-nowrap">(6 marks)</strong>
            <Answers questionNumber="5a" />
          </li>
          <li>
            Write an assembly language program segment to demonstrate how the
            following DOS function service is used: <code>09h</code>{" "}
            <strong className="whitespace-nowrap">(3 marks)</strong>
            <Answers questionNumber="5b" />
          </li>
          <li>
            The following are the scores of Efe in mid-semester test:{" "}
            <code>56 67 89 82 64</code>. Write an assembly language program
            segment that declares the scores, computes the total and average
            scores. <strong className="whitespace-nowrap">(6 marks)</strong>
            <Answers questionNumber="5c" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 6</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            State the function of <code>LEA</code>. Give one example of assembly
            instruction illustrating the use of <code>LEA</code>{" "}
            <strong className="whitespace-nowrap">(4 marks)</strong>
            <Answers questionNumber="6a" />
          </li>
          <li>
            Write an assembly language representation for the following C
            program segment{" "}
            <pre className="mb-2 mt-2 block">
              <code>
                y1 = 25;
                <br />
                y2 = 30;
                <br />
                printf(&quot;Enter value for variable a: &quot;);
                <br />
                scanf(&quot;%d&quot;, &a);
                <br />
                if (a &lt; 60)
                <br />
                {"  "}y1 = y1 + 10;
                <br />
                {"  "}printf(&quot;%d&quot;, y1);
                <br />
                else
                <br />
                {"  "}y2 = y2 - 5;
                <br />
                {"  "}printf(&quot;%d&quot;, y1);
              </code>
            </pre>
            <strong className="whitespace-nowrap">(6 marks)</strong>
            <Answers questionNumber="6b" />
          </li>
          <li>
            Define Interrupt{" "}
            <strong className="whitespace-nowrap">(7 marks)</strong>
            <Answers questionNumber="6c" />
          </li>
          <li>
            Convert 256<sub>16</sub> to its decimal equivalent{" "}
            <strong className="whitespace-nowrap">(3 marks)</strong>
            <Answers questionNumber="6d" />
          </li>
        </ol>
      </li>
    </Questions>
  );
}
