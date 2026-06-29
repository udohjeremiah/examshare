import Questions from "@/components/Questions";
import Answers from "@/components/Answers";

export default function CSC204() {
  return (
    <Questions
      school="western delta university"
      college="computing"
      department="computer science"
      session="2022/2023"
      semester="second semester"
      courseCode="CSC204"
      courseTitle="file processing"
      allowedTime="2hrs"
      instruction="attempt question ONE (compulsory) and any other TWO questions"
    >
      <li>
        <h4 className="mb-2 font-bold">Question 1 (Compulsory)</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            What is file organization?{" "}
            <strong className="whitespace-nowrap">(2 marks)</strong>
            <Answers questionNumber="1a" />
          </li>
          <li>
            List threee (3) objectives of file organization{" "}
            <strong className="whitespace-nowrap">(3 marks)</strong>
            <Answers questionNumber="1b" />
          </li>
          <li>
            Write explanatory notes on the following file system operations:
            <ol className="mx-4 list-[lower-roman]">
              <li>Retrieve_all</li>
              <li>Retrieve_one</li>
              <li>Retrieve_next</li>
              <li>Retrieve_previous</li>
              <li>Insert_one</li>
              <li>Delete_one</li>
            </ol>
            <strong className="whitespace-nowrap">(12 marks)</strong>
            <Answers questionNumber="1c" />
          </li>
          <li>
            Consider the organized file presented here under and use it to
            answer the questions that follow.
            <div className="overflow-auto">
              <table className="mb-2 mt-2 border-collapse border">
                <thead>
                  <tr>
                    <th className="border px-6 text-center">S/N</th>
                    <th className="border px-6 text-center">NAME</th>
                    <th className="border px-6 text-center">SEX</th>
                    <th className="border px-6 text-center">BLOCK</th>
                    <th className="border px-6 text-center">ROOM NUMBER</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-6 text-center">1</td>
                    <td className="border px-6 text-center">AISOSA Edebiri</td>
                    <td className="border px-6 text-center">Male</td>
                    <td className="border px-6 text-center">A</td>
                    <td className="border px-6 text-center">3</td>
                  </tr>
                  <tr>
                    <td className="border px-6 text-center">2</td>
                    <td className="border px-6 text-center">BOTU Michael</td>
                    <td className="border px-6 text-center">Male</td>
                    <td className="border px-6 text-center">B</td>
                    <td className="border px-6 text-center">1</td>
                  </tr>
                  <tr>
                    <td className="border px-6 text-center">3</td>
                    <td className="border px-6 text-center">KAYODE Williams</td>
                    <td className="border px-6 text-center">Male</td>
                    <td className="border px-6 text-center">C</td>
                    <td className="border px-6 text-center">2</td>
                  </tr>
                  <tr>
                    <td className="border px-6 text-center">4</td>
                    <td className="border px-6 text-center">OBI Chidera</td>
                    <td className="border px-6 text-center">Female</td>
                    <td className="border px-6 text-center">D</td>
                    <td className="border px-6 text-center">5</td>
                  </tr>
                  <tr>
                    <td className="border px-6 text-center">5</td>
                    <td className="border px-6 text-center">OTOIDE Evelyn</td>
                    <td className="border px-6 text-center">Female</td>
                    <td className="border px-6 text-center">E</td>
                    <td className="border px-6 text-center">1</td>
                  </tr>
                  <tr>
                    <td className="border px-6 text-center">6</td>
                    <td className="border px-6 text-center">TEMINE Roland</td>
                    <td className="border px-6 text-center">Male</td>
                    <td className="border px-6 text-center">B</td>
                    <td className="border px-6 text-center">4</td>
                  </tr>
                  <tr>
                    <td className="border px-6 text-center">7</td>
                    <td className="border px-6 text-center">UROKO Phoebe</td>
                    <td className="border px-6 text-center">Female</td>
                    <td className="border px-6 text-center">D</td>
                    <td className="border px-6 text-center">3</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <ol className="mx-4 list-[lower-roman]">
              <li>
                How many records are in the file{" "}
                <strong className="whitespace-nowrap">(1 mark)</strong>
                <Answers questionNumber="1di" />
              </li>
              <li>
                Retrieve_one (Record 4){" "}
                <strong className="whitespace-nowrap">(2 marks)</strong>
                <Answers questionNumber="1dii" />
              </li>
              <li>
                Retrieve_next{" "}
                <strong className="whitespace-nowrap">(2 marks)</strong>
                <Answers questionNumber="1diii" />
              </li>
              <li>
                Retrieve_all{" "}
                <strong className="whitespace-nowrap">(3 marks)</strong>
                <Answers questionNumber="1div" />
              </li>
              <li>
                Insert_one using the criteria below:
                <br />
                <code>
                  S/N = 8, NAME = ZAKPOLOR Divine, SEX = Male, BLOCK = C, ROOM
                  NUMBER = 2
                </code>{" "}
                <strong className="whitespace-nowrap">(3 marks)</strong>
                <Answers questionNumber="1dv" />
              </li>
              <li>
                Delete_one (Record 1){" "}
                <strong className="whitespace-nowrap">(2 marks)</strong>
                <Answers questionNumber="1dvi" />
              </li>
            </ol>
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 2</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Explain the following file and data management terms:
            <ol className="mx-4 list-[lower-roman]">
              <li>fields</li>
              <li>records</li>
              <li>file</li>
            </ol>
            <strong className="whitespace-nowrap">(6 marks)</strong>
            <Answers questionNumber="2a" />
          </li>
          <li>
            Copy and complete the table below
            <div className="overflow-auto">
              <table className="mb-2 mt-2 border-collapse border">
                <thead>
                  <tr>
                    <th className="border px-6 text-center">S/N</th>
                    <th className="border px-6 text-center">File Type</th>
                    <th className="border px-6 text-center">Content</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-6 text-center">1</td>
                    <td className="border px-6 text-center">.html</td>
                    <td className="border px-6 text-center"></td>
                  </tr>
                  <tr>
                    <td className="border px-6 text-center">2</td>
                    <td className="border px-6 text-center">.pdf</td>
                    <td className="border px-6 text-center"></td>
                  </tr>
                  <tr>
                    <td className="border px-6 text-center">3</td>
                    <td className="border px-6 text-center">.txt</td>
                    <td className="border px-6 text-center"></td>
                  </tr>
                  <tr>
                    <td className="border px-6 text-center">4</td>
                    <td className="border px-6 text-center">.gif</td>
                    <td className="border px-6 text-center"></td>
                  </tr>
                  <tr>
                    <td className="border px-6 text-center">5</td>
                    <td className="border px-6 text-center">.jpg</td>
                    <td className="border px-6 text-center"></td>
                  </tr>
                  <tr>
                    <td className="border px-6 text-center">6</td>
                    <td className="border px-6 text-center">.mp3</td>
                    <td className="border px-6 text-center"></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <strong className="whitespace-nowrap">(6 marks)</strong>
            <Answers questionNumber="2b" />
          </li>
          <li>
            Discuss the following file attributes
            <ol className="mx-4 list-[lower-roman]">
              <li>file type</li>
              <li>location </li>
              <li>size</li>
              <li>protection </li>
            </ol>
            <strong className="whitespace-nowrap">(8 marks)</strong>
            <Answers questionNumber="2c" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 3</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            What is Data Processing? State its importance{" "}
            <strong className="whitespace-nowrap">(3 marks)</strong>
            <Answers questionNumber="3a" />
          </li>
          <li>
            Using a diagram, show the data processing life cycle{" "}
            <strong className="whitespace-nowrap">(3 marks)</strong>
            <Answers questionNumber="3b" />
          </li>
          <li>
            Discuss in detail the life cycle shown above.{" "}
            <strong className="whitespace-nowrap">(6 marks)</strong>
            <Answers questionNumber="3c" />
          </li>
          <li>
            Describe the following types of data processing:
            <ol className="mx-4 list-[lower-roman]">
              <li>Batch processing</li>
              <li>Real Time processing</li>
              <li>Online processing</li>
              <li>Multiprocessing</li>
            </ol>
            <strong className="whitespace-nowrap">(8 marks)</strong>
            <Answers questionNumber="3d" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 4</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Why are files organized?{" "}
            <strong className="whitespace-nowrap">(2 marks)</strong>
            <Answers questionNumber="4a" />
          </li>
          <li>
            List four (4) criteria that should be considered when organizing
            files <strong className="whitespace-nowrap">(2 marks)</strong>
            <Answers questionNumber="4b" />
          </li>
          <li>
            Give a detailed discussion of the following file organization
            methods:
            <ol className="mx-4 list-[lower-roman]">
              <li>Pile/Serial file</li>
              <li>Sequential file</li>
              <li>Indexed Sequential file</li>
              <li>Direct or hashed file</li>
            </ol>
            <strong className="whitespace-nowrap">(8 marks)</strong>
            <Answers questionNumber="4c" />
          </li>
          <li>
            With the aid of a diagram only, show the steps that job processing
            goes through.{" "}
            <strong className="whitespace-nowrap">(4 marks)</strong>
            <Answers questionNumber="4d" />
          </li>
          <li>
            Write short notes on the following:
            <ol className="mx-4 list-[lower-roman]">
              <li>job</li>
              <li>job execution</li>
            </ol>
            <strong className="whitespace-nowrap">(4 marks)</strong>
            <Answers questionNumber="4e" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 5</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Write explanatory notes on the following:
            <ol className="mx-4 list-[lower-roman]">
              <li>Data Backup</li>
              <li>Restore</li>
            </ol>
            <strong className="whitespace-nowrap">(4 marks)</strong>
            <Answers questionNumber="5a" />
          </li>
          <li>
            List and explain two (2) types of data backup{" "}
            <strong className="whitespace-nowrap">(4 marks)</strong>
            <Answers questionNumber="5b" />
          </li>
          <li>
            Describe the following file deletion terminologies:
            <ol className="mx-4 list-[lower-roman]">
              <li>Computer formatting</li>
              <li>Risky operations</li>
              <li>Accidental deletion</li>
              <li>Disk partitioning</li>
            </ol>
            <strong className="whitespace-nowrap">(8 marks)</strong>
            <Answers questionNumber="5c" />
          </li>
          <li>
            List the steps involved in recovering delete files from a folder
            using file history{" "}
            <strong className="whitespace-nowrap">(4 marks)</strong>
            <Answers questionNumber="5d" />
          </li>
        </ol>
      </li>
    </Questions>
  );
}
