import Questions from "@/components/Questions";
import Answers from "@/components/Answers";

export default function ECO201() {
  return (
    <Questions
      school="western delta university"
      college="social and management sciences"
      department="economics"
      session="2023/2024"
      semester="first semester"
      courseCode="ECO205"
      courseTitle="Statistics I"
      allowedTime="2hrs"
      instruction="Answer any three (3) questions"
    >
      <li>
        <h4 className="mb-2 font-bold">Question 1</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            The following table gives life length of 200 light bulbs
            manufactured by a company. Determine the mode for the data.
            <div className="overflow-auto">
              <table className="mb-2 mt-2">
                <tbody>
                  <tr>
                    <th className="border px-6 text-center">Life in weeks</th>
                    <td className="border px-6 text-center">0-5</td>
                    <td className="border px-6 text-center">5-10</td>
                    <td className="border px-6 text-center">10-15</td>
                    <td className="border px-6 text-center">15-20</td>
                    <td className="border px-6 text-center">20-25</td>
                    <td className="border px-6 text-center">25-30</td>
                    <td className="border px-6 text-center">30-35</td>
                  </tr>

                  <tr>
                    <th className="border px-6 text-center">
                      Number of light bulbs
                    </th>
                    <td className="border px-6 text-center">5</td>
                    <td className="border px-6 text-center">13</td>
                    <td className="border px-6 text-center">57</td>
                    <td className="border px-6 text-center">85</td>
                    <td className="border px-6 text-center">26</td>
                    <td className="border px-6 text-center">8</td>
                    <td className="border px-6 text-center">6</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <strong className="whitespace-nowrap">(12 marks)</strong>
            <Answers questionNumber="1a" />
          </li>
          <li>
            The following table shows the age distribution of persons in a
            particular region
            <div className="overflow-auto">
              <table className="mb-2 mt-2">
                <tbody>
                  <tr>
                    <th className="border px-6 text-center">Age (Years)</th>
                    <td className="border px-6 text-center">Below 10</td>
                    <td className="border px-6 text-center">Below 20</td>
                    <td className="border px-6 text-center">Below 30</td>
                    <td className="border px-6 text-center">Below 40</td>
                    <td className="border px-6 text-center">Below 50</td>
                    <td className="border px-6 text-center">Below 60</td>
                    <td className="border px-6 text-center">Below 70</td>
                    <td className="border px-6 text-center">70 and above</td>
                  </tr>

                  <tr>
                    <th className="border px-6 text-center">
                      Number of persons (in &apos;000)
                    </th>
                    <td className="border px-6 text-center">2</td>
                    <td className="border px-6 text-center">5</td>
                    <td className="border px-6 text-center">9</td>
                    <td className="border px-6 text-center">12</td>
                    <td className="border px-6 text-center">14</td>
                    <td className="border px-6 text-center">15</td>
                    <td className="border px-6 text-center">15.5</td>
                    <td className="border px-6 text-center">15.6</td>
                  </tr>
                </tbody>
              </table>
            </div>
            Find the median age.{" "}
            <strong className="whitespace-nowrap">(12 marks)</strong>
            <Answers questionNumber="1b" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 2</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Prepare a frequency distribution or table from the set of data
            below: 2, 3, 9, 4, 1, 7, 4, 5, 4, 1, 4, 1, 4, 1, 4, 1, 7, 1, 6, 5,
            1, 4, 3, 5, 3, 1, 7, 2, 4, 4, 2, 6, 2, 3, 7, 2, 3, 1, 5.{" "}
            <strong className="whitespace-nowrap">(8.33 marks)</strong>
            <Answers questionNumber="2a" />
          </li>
          <li>
            Form a frequency distribution from the following data by inclusive
            method, taking 4 as the magnitude of class internals: 10, 17, 15,
            22, 11, 16, 19, 24, 29, 18, 25, 26, 32, 14, 17, 20, 23, 27, 30, 12,
            15, 18, 24, 36, 18, 15, 21, 28, 33, 38, 34, 13, 10, 16, 20, 22, 29,
            19, 23, 31.{" "}
            <strong className="whitespace-nowrap">(13 marks)</strong>
            <Answers questionNumber="2b" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 3</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            The following is the frequency distribution of the number of
            telephone calls received in 245 successive one minute intervals at
            an exchage:
            <div className="overflow-auto">
              <table className="mb-2 mt-2 border-collapse border">
                <tbody>
                  <tr>
                    <th className="border px-6 text-center">Number of calls</th>
                    <td className="border px-6 text-center">0</td>
                    <td className="border px-6 text-center">1</td>
                    <td className="border px-6 text-center">2</td>
                    <td className="border px-6 text-center">3</td>
                    <td className="border px-6 text-center">4</td>
                    <td className="border px-6 text-center">5</td>
                    <td className="border px-6 text-center">6</td>
                    <td className="border px-6 text-center">7</td>
                  </tr>

                  <tr>
                    <th className="border px-6 text-center">Frequency</th>
                    <td className="border px-6 text-center">14</td>
                    <td className="border px-6 text-center">21</td>
                    <td className="border px-6 text-center">25</td>
                    <td className="border px-6 text-center">43</td>
                    <td className="border px-6 text-center">51</td>
                    <td className="border px-6 text-center">40</td>
                    <td className="border px-6 text-center">39</td>
                    <td className="border px-6 text-center">12</td>
                  </tr>
                </tbody>
              </table>
            </div>
            Question: Obtain the Mean number of calls per minute.{" "}
            <strong className="whitespace-nowrap">(9 marks)</strong>
            <Answers questionNumber="3a" />
          </li>
          <li>
            Calculate the mean for the following frequency distribution
            <div className="overflow-auto">
              <table className="mb-2 mt-2 border-collapse border">
                <tbody>
                  <tr>
                    <th className="border px-6 text-center">Marks</th>
                    <td className="border px-6 text-center">0-10</td>
                    <td className="border px-6 text-center">10-20</td>
                    <td className="border px-6 text-center">20-30</td>
                    <td className="border px-6 text-center">30-40</td>
                    <td className="border px-6 text-center">40-50</td>
                    <td className="border px-6 text-center">50-60</td>
                    <td className="border px-6 text-center">60-70</td>
                  </tr>

                  <tr>
                    <th className="border px-6 text-center">No. of students</th>
                    <td className="border px-6 text-center">6</td>
                    <td className="border px-6 text-center">5</td>
                    <td className="border px-6 text-center">8</td>
                    <td className="border px-6 text-center">15</td>
                    <td className="border px-6 text-center">7</td>
                    <td className="border px-6 text-center">6</td>
                    <td className="border px-6 text-center">3</td>
                  </tr>
                </tbody>
              </table>
            </div>
            (a) By the direct formula (b) By the step deviation method.{" "}
            <strong className="whitespace-nowrap">(14 marks)</strong>
            <Answers questionNumber="3b" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 4</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            The following table gives the frequency distribution of the weekly
            wages (N&apos;00) of 100 workers in a factory.
            <div className="overflow-auto">
              <table className="mb-2 mt-2 border-collapse border">
                <tbody>
                  <tr>
                    <th className="border px-6 text-center">Weekly wages</th>
                    <td className="border px-6 text-center">20-24</td>
                    <td className="border px-6 text-center">25-29</td>
                    <td className="border px-6 text-center">30-34</td>
                    <td className="border px-6 text-center">35-39</td>
                    <td className="border px-6 text-center">40-44</td>
                    <td className="border px-6 text-center">45-49</td>
                    <td className="border px-6 text-center">50-54</td>
                    <td className="border px-6 text-center">55-59</td>
                    <td className="border px-6 text-center">60-64</td>
                  </tr>

                  <tr>
                    <th className="border px-6 text-center">No. of workers</th>
                    <td className="border px-6 text-center">4</td>
                    <td className="border px-6 text-center">5</td>
                    <td className="border px-6 text-center">12</td>
                    <td className="border px-6 text-center">23</td>
                    <td className="border px-6 text-center">31</td>
                    <td className="border px-6 text-center">10</td>
                    <td className="border px-6 text-center">8</td>
                    <td className="border px-6 text-center">5</td>
                    <td className="border px-6 text-center">2</td>
                  </tr>
                </tbody>
              </table>
            </div>
            Draw the histogram and frequency polygon of the distribution. Hint:
            Convert to a continuous class intervals.{" "}
            <strong className="whitespace-nowrap">(13 marks)</strong>
            <Answers questionNumber="4a" />
          </li>
          <li>
            The set of data below shows the number of male children in a sample
            of Nigerian families: 0, 4, 2, 3, 3, 0, 1, 4, 3, 5, 5, 3, 4, 3, 1,
            3, 5, 5, 5, 0, 0, 5, 3, 3. Convert the above set of data into
            frequency and relative frequency distribution tables.{" "}
            <strong className="whitespace-nowrap">(10 marks)</strong>
            <Answers questionNumber="4b" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 5</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Distinguish between class intervals and class limits.{" "}
            <strong className="whitespace-nowrap">(4 marks)</strong>
            <Answers questionNumber="5a" />
          </li>
          <li>
            Outline the types of class intervals you know.{" "}
            <strong className="whitespace-nowrap">(6 marks)</strong>
            <Answers questionNumber="5b" />
          </li>
          <li>
            Explain the requisites of a measure of central tendency.{" "}
            <strong className="whitespace-nowrap">(13 marks)</strong>
            <Answers questionNumber="5c" />
          </li>
        </ol>
      </li>
    </Questions>
  );
}
