import Questions from "@/components/Questions";
import Answers from "@/components/Answers";

export default function CSC101() {
  return (
    <Questions
      school="western delta university"
      college="computing"
      department="computer science"
      session="2022/2023"
      semester="first semester"
      courseCode="CSC101"
      courseTitle="introduction to computers and spreadsheet analysis (FOR LAW AND MANAGEMENT SCIENCES)"
      allowedTime="1hr"
      instruction="answer ALL questions (70 marks)"
    >
      <li>
        <h4 className="mb-2 font-bold">Question 1</h4>
        _______ is a very large scale and expensive computer capable of
        supporting hundreds, or even thousands of users simulataneously.
        <Answers questionNumber="1" />
      </li>
      <li>
        <h4 className="mb-2 font-bold">Question 2</h4>
        _______ is the only language that is directly understood by the
        computer.
        <Answers questionNumber="2" />
      </li>
      <li>
        <h4 className="mb-2 font-bold">Question 3</h4>
        _______ and _______ are one of many characteristics of the computer
        system.
        <Answers questionNumber="3" />
      </li>
      <li>
        <h4 className="mb-2 font-bold">Question 4</h4>
        _______ and _______ are two examples of an hybrid computer.
        <Answers questionNumber="4" />
      </li>
      <li>
        <h4 className="mb-2 font-bold">Question 5</h4>
        In size and power _______ lie between workstations and mainframe.
        <Answers questionNumber="5" />
      </li>
      <li>
        <h4 className="mb-2 font-bold">Question 6</h4>
        Convert{" "}
        <code>
          11010<sub>2</sub>
        </code>{" "}
        to a number in base 10.
        <Answers questionNumber="6" />
      </li>
      <li>
        <h4 className="mb-2 font-bold">Question 7</h4>
        List four (4) examples of Operating Systems.
        <Answers questionNumber="7" />
      </li>
      <li>
        <h4 className="mb-2 font-bold">Question 8</h4>
        _______ and _______ are two characteristics of the Operating System.
        <Answers questionNumber="8" />
      </li>
      <li>
        <h4 className="mb-2 font-bold">Question 9</h4>
        _______ is the point where a column and a row meet in Microsoft Excel.
        <Answers questionNumber="9" />
      </li>
      <li>
        <h4 className="mb-2 font-bold">Question 10</h4>
        In assembly language, _______ are substitutes for 0s and 1s.
        <Answers questionNumber="10" />
      </li>
      <li>
        <h4 className="mb-2 font-bold">Question 11</h4>
        _______ is a master system of programs that manages the basic operations
        of the computer.
        <Answers questionNumber="11" />
      </li>
      <li>
        <h4 className="mb-2 font-bold">Question 12</h4>
        The <strong>EDVAC</strong> is _______ generation computer.
        <Answers questionNumber="12" />
      </li>
      <li>
        <h4 className="mb-2 font-bold">Question 13</h4>
        An equal (=) sign in Microsoft Excel signifies _______.
        <Answers questionNumber="13" />
      </li>
      <li>
        <h4 className="mb-2 font-bold">Question 14</h4>
        A computer works by following the _______ cycle.
        <Answers questionNumber="14" />
      </li>
      <li>
        <h4 className="mb-2 font-bold">Question 15</h4>
        The use of micrprocessors made computers more _______ and _______.
        <Answers questionNumber="15" />
      </li>
      <li>
        <h4 className="mb-2 font-bold">Question 16</h4>
        The program written by a programmer in a high level language is called
        _______.
        <Answers questionNumber="16" />
      </li>
      <li>
        <h4 className="mb-2 font-bold">Question 17</h4>
        Computers can be classified according to _______, _______ and _______.
        <Answers questionNumber="17" />
      </li>
      <li>
        <h4 className="mb-2 font-bold">Question 18</h4>
        Computer software is basically classified into _______ and _______.
        <Answers questionNumber="18" />
      </li>
      <li>
        <h4 className="mb-2 font-bold">Question 19</h4>
        Convert{" "}
        <code>
          64<sub>10</sub>
        </code>{" "}
        to a number in base 2.
        <Answers questionNumber="19" />
      </li>
      <li>
        <h4 className="mb-2 font-bold">Question 20</h4>
        _______ computers are fixed into electronic devices designed to perform
        a specific task.
        <Answers questionNumber="20" />
      </li>
      <li>
        <h4 className="mb-2 font-bold">Question 21</h4>
        The reason machine language runs faster that all other programs in
        higher languages is because _______.
        <Answers questionNumber="21" />
      </li>
      <li>
        <h4 className="mb-2 font-bold">Question 22</h4>
        Digital Computers are binary machines that represent information
        internally using _______.
        <Answers questionNumber="22" />
      </li>
    </Questions>
  );
}
