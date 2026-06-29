import Questions from "@/components/Questions";
import Answers from "@/components/Answers";

export default function CSC303() {
  return (
    <Questions
      school="western delta university"
      college="computing"
      department="computer science"
      session="2023/2024"
      semester="first semester"
      courseCode="CSC303"
      courseTitle="operating systems"
      allowedTime="2hrs"
      instruction="Answer any four (4) questions"
    >
      <li>
        <h4 className="mb-2 font-bold">Question 1 (17.5 marks)</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            What is the relationship between a process and a thread?{" "}
            <strong className="whitespace-nowrap">(2.5 marks)</strong>
            <Answers questionNumber="1a" />
          </li>
          <li>
            Briefly explain the term &quot;Mutual Exclusion&quot; as it pertains
            to operating system processes.{" "}
            <strong className="whitespace-nowrap">(3 marks)</strong>
            <Answers questionNumber="1b" />
          </li>
          <li>
            Discuss briefly the principle of Shared Memory as it concerns
            inter-process communication.{" "}
            <strong className="whitespace-nowrap">(4 marks)</strong>
            <Answers questionNumber="1c" />
          </li>
          <li>
            Discuss briefly the Producer/Consumer problem.{" "}
            <strong className="whitespace-nowrap">(6 marks)</strong>
            <Answers questionNumber="1d" />
          </li>
          <li>
            List two (2) functions of an operating system.{" "}
            <strong className="whitespace-nowrap">(2 marks)</strong>
            <Answers questionNumber="1d" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 2 (17.5 marks)</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Highlight three (3) functions of an operating system.{" "}
            <strong className="whitespace-nowrap">(3 marks)</strong>
            <Answers questionNumber="2a" />
          </li>
          <li>
            What is the relationship between a Race condition and a Critical
            Region? <strong className="whitespace-nowrap">(2.5 marks)</strong>
            <Answers questionNumber="2b" />
          </li>
          <li>
            Highlight three (3) types of operating systems.{" "}
            <strong className="whitespace-nowrap">(6 marks)</strong>
            <Answers questionNumber="2c" />
          </li>
          <li>
            Differentiate between Concurrency and Parallelism.{" "}
            <strong className="whitespace-nowrap">(3 marks)</strong>
            <Answers questionNumber="2d" />
          </li>
          <li>
            What are the Distributed Operating Systems?{" "}
            <strong className="whitespace-nowrap">(3 marks)</strong>
            <Answers questionNumber="2e" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 3 (17.5 marks)</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            State one advantage of the Round Carbin Scheduling.{" "}
            <strong className="whitespace-nowrap">(1.5 marks)</strong>
            <Answers questionNumber="3a" />
          </li>
          <li>
            Differentiate between the Shortest Job First (SIF) and Priority
            scheduling algorithm.{" "}
            <strong className="whitespace-nowrap">(4 marks)</strong>
            <Answers questionNumber="3b" />
          </li>
          <li>
            Write a short note on the Multilevel Queue Scheduling algorithm.{" "}
            <strong className="whitespace-nowrap">(3 marks)</strong>
            <Answers questionNumber="3c" />
          </li>
          <li>
            Differentiate between a Non-Preemptive and Preemptive scheduling
            algorithm. <strong className="whitespace-nowrap">(4 marks)</strong>
            <Answers questionNumber="3d" />
          </li>
          <li>
            Using a Gantt chart, depict the otdre in which the processes
            displayed below will be executed using the Shortest Job First (SIF)
            algorithm stating their Start time and Finish time?{" "}
            <strong className="whitespace-nowrap">(5 marks)</strong>
            <table className="mb-2 mt-2 border-collapse border">
              <thead>
                <tr>
                  <th className="border px-6 text-center">S/N</th>
                  <th className="border px-6 text-center">Process</th>
                  <th className="border px-6 text-center">Arrival Time (t)</th>
                  <th className="border px-6 text-center">
                    Execution Time/CPU Cycle
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-6 text-center">1</td>
                  <td className="border px-6 text-center">A</td>
                  <td className="border px-6 text-center">0</td>
                  <td className="border px-6 text-center">8 seconds</td>
                </tr>
                <tr>
                  <td className="border px-6 text-center">2</td>
                  <td className="border px-6 text-center">B</td>
                  <td className="border px-6 text-center">1</td>
                  <td className="border px-6 text-center">6 seconds</td>
                </tr>
                <tr>
                  <td className="border px-6 text-center">3</td>
                  <td className="border px-6 text-center">C</td>
                  <td className="border px-6 text-center">2</td>
                  <td className="border px-6 text-center">4 seconds</td>
                </tr>
                <tr>
                  <td className="border px-6 text-center">4</td>
                  <td className="border px-6 text-center">D</td>
                  <td className="border px-6 text-center">3</td>
                  <td className="border px-6 text-center">3 seconds</td>
                </tr>
                <tr>
                  <td className="border px-6 text-center">5</td>
                  <td className="border px-6 text-center">E</td>
                  <td className="border px-6 text-center">4</td>
                  <td className="border px-6 text-center">2 seconds</td>
                </tr>
              </tbody>
            </table>
            <Answers questionNumber="3e" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 4 (17.5 marks)</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            With the aid of the diagram describe the possible states of a
            process P. <strong className="whitespace-nowrap">(5 marks)</strong>
            <Answers questionNumber="4a" />
          </li>
          <li>
            What is the importance of an operating system in a computer system?{" "}
            <strong className="whitespace-nowrap">(1.5 marks)</strong>
            <Answers questionNumber="4b" />
          </li>
          <li>
            What is a Spinlock{" "}
            <strong className="whitespace-nowrap">(3 marks)</strong>
            <Answers questionNumber="4c" />
          </li>
          <li>
            Explain briefly the components of a process.{" "}
            <strong className="whitespace-nowrap">(5 marks)</strong>
            <Answers questionNumber="4d" />
          </li>
          <li>
            Write short note on Interrupt Handling.{" "}
            <strong className="whitespace-nowrap">(3 marks)</strong>
            <Answers questionNumber="4e" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 5 (17.5 marks)</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Differentiate between a program and a process.{" "}
            <strong className="whitespace-nowrap">(3 marks)</strong>
            <Answers questionNumber="5a" />
          </li>
          <li>
            Write a short note on Monitors.{" "}
            <strong className="whitespace-nowrap">(3 marks)</strong>
            <Answers questionNumber="5b" />
          </li>
          <li>
            Briefly explain the term &quot;Resource Allocation&quot; in
            operating systems.{" "}
            <strong className="whitespace-nowrap">(4 marks)</strong>
            <Answers questionNumber="4c" />
          </li>
          <li>
            State two (2) conditions that must be satisfied in a Readers/Writers
            Problem? <strong className="whitespace-nowrap">(4 marks)</strong>
            <Answers questionNumber="4d" />
          </li>
          <li>
            Differentiate between a Binary and Counting Semaphores.{" "}
            <strong className="whitespace-nowrap">(3.5 marks)</strong>
            <Answers questionNumber="4e" />
          </li>
          <li>
            List two (2) objectives of an operating system.{" "}
            <strong className="whitespace-nowrap">(2 marks)</strong>
            <Answers questionNumber="4f" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 6 (17.5 marks)</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            State two (2) techniques used in sychronization of processes and
            threads. <strong className="whitespace-nowrap">(3 marks)</strong>
            <Answers questionNumber="6a" />
          </li>
          <li>
            What is the relationship between a resource allocation graph and a
            deadlock situation?{" "}
            <strong className="whitespace-nowrap">(2.5 marks)</strong>
            <Answers questionNumber="6b" />
          </li>
          <li>
            What is Message Passsing?{" "}
            <strong className="whitespace-nowrap">(5 marks)</strong>
            <Answers questionNumber="6c" />
          </li>
          <li>
            Highlight the benefits of Interleaving in Concureency.{" "}
            <strong className="whitespace-nowrap">(3 marks)</strong>
            <Answers questionNumber="6d" />
          </li>
          <li>
            An application can be concurrent but not parallel. Explain what this
            means. <strong className="whitespace-nowrap">(4 marks)</strong>
            <Answers questionNumber="6e" />
          </li>
        </ol>
      </li>
    </Questions>
  );
}
