export default function MTH211() {
  return (
    <article className="flex flex-col gap-4">
      <hgroup>
        <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">
          DEPARTMENT OF COMPUTER SCIENCE
          <br />
          COLLEGE OF COMPUTING
          <br />
          WESTERN DELTA UNIVERSITY
        </h3>
        <p className="font-medium">
          First Semester Examination 2022/2023 SESSION
        </p>
        <p className="font-medium">MTH211 - Statistics Time: 1hr: 30mins</p>
        <p className="font-medium">Answer Four (4) Questions</p>
      </hgroup>

      <hr />

      <ol className="flex flex-col gap-10 px-4">
        <li>
          <h4 className="mb-2 font-bold">Question 1</h4>
          <ol className="flex list-[lower-alpha] flex-col gap-2">
            <li>
              Computer the spearman rank correlation coefficient between these
              course MTH211 and CSC 201 for the given scores sand predict the
              relationship between them{" "}
              <div className="overflow-auto">
                <table className="mb-2 mt-2">
                  <tbody>
                    <tr>
                      <th scope="row" className="border px-6 text-center">
                        MTH211
                      </th>
                      <td className="border px-6">35</td>
                      <td className="border px-6">40</td>
                      <td className="border px-6">33</td>
                      <td className="border px-6">65</td>
                      <td className="border px-6">57</td>
                      <td className="border px-6">61</td>
                      <td className="border px-6">28</td>
                      <td className="border px-6">14</td>
                      <td className="border px-6">47</td>
                      <td className="border px-6">68</td>
                    </tr>
                    <tr>
                      <th scope="row" className="border px-6 text-center">
                        CSC201
                      </th>
                      <td className="border px-6">7</td>
                      <td className="border px-6">8</td>
                      <td className="border px-6">6</td>
                      <td className="border px-6">7</td>
                      <td className="border px-6">9</td>
                      <td className="border px-6">7</td>
                      <td className="border px-6">5</td>
                      <td className="border px-6">9</td>
                      <td className="border px-6">4</td>
                      <td className="border px-6">2</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <strong className="whitespace-nowrap">(10 marks)</strong>
            </li>
            <li>
              State the axium of probability{" "}
              <strong className="whitespace-nowrap">(3 marks)</strong>
            </li>
            <li>
              Prove that Q<sup>2</sup>(x) = E(x<sup>2</sup>) - E(x)<sup>2</sup>{" "}
              <strong className="whitespace-nowrap">(4.5 marks)</strong>
            </li>
          </ol>
        </li>

        <li>
          <h4 className="mb-2 font-bold">Question 2</h4>
          <ol className="flex list-[lower-alpha] flex-col gap-2">
            <li>
              A random variable <strong>X</strong> is defined as the sum of
              faces when a pair of dice is thrown find
              <ol className="mx-4 list-[lower-roman]">
                <li>
                  The Sample points{" "}
                  <strong className="whitespace-nowrap">(5 marks)</strong>
                </li>
                <li>
                  Expected value of X{" "}
                  <strong className="whitespace-nowrap">(5 marks)</strong>
                </li>
                <li>
                  Var (x){" "}
                  <strong className="whitespace-nowrap">(7.5 marks)</strong>
                </li>
              </ol>
            </li>
          </ol>
        </li>

        <li>
          <h4 className="mb-2 font-bold">Question 3</h4>
          <ol className="flex list-[lower-alpha] flex-col gap-2">
            <li>
              The data below rotates the weekly maintenance cost (N) to the age
              (in month) of ten machines of formula types in a manufacturing
              company
              <div className="overflow-auto">
                <table className="mb-2 mt-2">
                  <tbody>
                    <tr>
                      <th scope="row" className="border px-6 text-center">
                        Age (X)
                      </th>
                      <td className="border px-6">5</td>
                      <td className="border px-6">10</td>
                      <td className="border px-6">15</td>
                      <td className="border px-6">20</td>
                      <td className="border px-6">30</td>
                      <td className="border px-6">30</td>
                      <td className="border px-6">30</td>
                      <td className="border px-6">50</td>
                      <td className="border px-6">50</td>
                      <td className="border px-6">60</td>
                    </tr>
                    <tr>
                      <th scope="row" className="border px-6 text-center">
                        Cost (Y)
                      </th>
                      <td className="border px-6">19</td>
                      <td className="border px-6">24</td>
                      <td className="border px-6">25</td>
                      <td className="border px-6">30</td>
                      <td className="border px-6">31</td>
                      <td className="border px-6">33</td>
                      <td className="border px-6">30</td>
                      <td className="border px-6">30</td>
                      <td className="border px-6">35</td>
                      <td className="border px-6">39</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <ol className="mx-4 list-[lower-roman]">
                <li>
                  Find the least square regression line of maintenance cost (y)
                  on age (X)
                </li>
                <li>
                  Predict the maintenance cost for the machine of this type
                  which is 40 months old
                </li>
              </ol>
              <strong className="whitespace-nowrap">(17.5 marks)</strong>
            </li>
          </ol>
        </li>

        <li>
          <h4 className="mb-2 font-bold">Question 4</h4>
          <ol className="flex list-[lower-alpha] flex-col gap-2">
            <li>
              Suppose A and B are two events, not necessarily independent or
              mutually exclusive and suppose they are related. Use on diagram to
              show that{" "}
              <span className="whitespace-nowrap">
                P(AUB) = P(A) * P(B) - P(AnB)
              </span>{" "}
              <strong className="whitespace-nowrap">(7 marks)</strong>
            </li>
            <li>
              Three out of every batch of 30 manufactures articles pf a company
              are known to be defective if 5 of the articles are picked at
              random. What is the probability that:
              <ol className="mx-4 list-[lower-roman]">
                <li>Exactly 2</li>
                <li>Not more than 2</li>
                <li>at most 4 are defective</li>
              </ol>
              <strong className="whitespace-nowrap">(10.5 marks)</strong>
            </li>
          </ol>
        </li>

        <li>
          <h4 className="mb-2 font-bold">Question 5</h4>
          <ol className="flex list-[lower-alpha] flex-col gap-2">
            <li>
              The continuous random variable X has probability density function
              (pdf) given by:
              <div className="flex items-center gap-2">
                <div>F(X) = </div>
                <div className="relative mb-4 mt-4 inline-block">
                  <span className="text-7xl">&#123;</span>
                  <span className="absolute top-0 w-max">
                    <sup>1</sup>/<sub>b-a,</sub> a &lt; x &lt; b
                  </span>
                  <span className="absolute bottom-0 w-max">O, otherwise</span>
                </div>
              </div>
              Find the E(X) items{" "}
              <strong className="whitespace-nowrap">(9.5 marks)</strong>
            </li>
            <li>
              A manufacturer produces items such that 20 percent are defective
              and 80 percent are non defective. If a defective items is
              produced, the manufacturer loses N5 while a non defective items
              fetches a profit of N20. Find the expected value of the profit per
              items <strong className="whitespace-nowrap">(8 marks)</strong>
            </li>
          </ol>
        </li>

        <li>
          <h4 className="mb-2 font-bold">Question 6</h4>
          <ol className="flex list-[lower-alpha] flex-col gap-2">
            <li>
              State the properties of variance{" "}
              <strong className="whitespace-nowrap">(7 marks)</strong>
            </li>

            <li>
              The discrete random variable X has a probability non function
              given in the table below. Find var (X)
              <div className="overflow-auto">
                <table className="mb-2 mt-2">
                  <tbody>
                    <tr>
                      <th scope="row" className="border px-6 text-center">
                        X = X
                      </th>
                      <td className="border px-6">0</td>
                      <td className="border px-6">1</td>
                      <td className="border px-6">2</td>
                      <td className="border px-6">3</td>
                    </tr>
                    <tr>
                      <th scope="row" className="border px-6 text-center">
                        P(X) = P(X-X)
                      </th>
                      <td className="border px-6">
                        <sup>1</sup>/<sub>8</sub>
                      </td>
                      <td className="border px-6">
                        {" "}
                        <sup>3</sup>/<sub>8</sub>
                      </td>
                      <td className="border px-6">
                        {" "}
                        <sup>3</sup>/<sub>8</sub>
                      </td>
                      <td className="border px-6">
                        {" "}
                        <sup>1</sup>/<sub>8</sub>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <strong className="whitespace-nowrap">(10.5 marks)</strong>
            </li>
          </ol>
        </li>
      </ol>
    </article>
  );
}
