import Questions from "@/components/Questions";
import Answers from "@/components/Answers";

export default function GST101() {
  return (
    <Questions
      school="western delta university"
      college="general studies"
      department="general studies"
      session="2022/2023"
      semester="second semester"
      courseCode="GST101"
      courseTitle="use of english and library"
      allowedTime="1hr: 30mins"
      instruction="answer ALL questions from section A-G"
    >
      <li>
        <h4 className="mb-2 font-bold">A. Comprehension passage</h4>
        <p className="mb-2">
          <span className="underline underline-offset-4">
            The history of gender
          </span>{" "}
          relations worldwide has never been pleasant as women are always at the
          disadvantaged position because their emotions and aspirations are not
          considered. Left{" "}
          <span className="underline underline-offset-4">in the quagmire</span>,{" "}
          women have{" "}
          <span className="underline underline-offset-4">resolved</span> to take
          their destiny in their hands by{" "}
          <span className="underline underline-offset-4">embarking</span> on the
          struggle for{" "}
          <span className="underline underline-offset-4">equality</span> with
          men. This struggle is mirrored in literatures of the world. African
          male writers especially, present female character in less than
          charitable light.{" "}
          <span className="underline underline-offset-4">Consequently</span>{" "}
          women <span className="underline underline-offset-4">writers</span>{" "}
          paying men in their own coins turn to present male characters as
          brutes and monsters. Women&apos;s struggle for equality began in the
          19th century-precisely in 1830s when noticeable signs of women&apos;s
          contribution to world peace was made manifest. The society will gain a
          lot if women are fully integrated in the main stream of events.
          (Adapted from Ija Gideon Akase, 2020)
        </p>
        <ol className="flex list-decimal flex-col gap-2">
          <li>
            What title is suitable for this passage?{" "}
            <Answers questionNumber="1" />
          </li>
          <li>
            Quote one or two lines to support your choice of title{" "}
            <Answers questionNumber="2" />
          </li>
          <li>
            In your own opinion, do you think gender related issues, especially
            as it pertains women liberation and fight for equality, is a right
            move? Support your claim above by quoting from the passage.{" "}
            <Answers questionNumber="3" />
          </li>
          <li>
            What grammatical name is appropriate for these underlined
            constructions in the passage above, ie.,
            <ol className="mx-4 list-[lower-roman]">
              <li>&quot;The history of gender&quot;</li>
              <li>&quot;in the quagmire&quot;</li>
            </ol>
            <Answers questionNumber="4" />
          </li>
          <li>
            Name the function of each above listed grammatical category{" "}
            <Answers questionNumber="5" />
          </li>
          <li>
            Replace the underlined words in the passage above with another word
            or phrase that is contextually appropriate:
            <ol className="mx-4 list-[lower-roman]">
              <li>
                <strong>resolved</strong>
              </li>
              <li>
                <strong>embarking</strong>
              </li>
              <li>
                <strong>equality</strong>
              </li>
              <li>
                <strong>consequently</strong>
              </li>
            </ol>
            <Answers questionNumber="6" />
          </li>
        </ol>
        <strong class="whitespace-nowrap">(12 marks)</strong>
      </li>

      <li>
        <h4 className="mb-2 font-bold">B. Synonyms</h4>
        <p className="mb-2">Provide the synonyms of each word</p>
        <ol className="flex list-decimal flex-col gap-2">
          <li>ancestors</li>
          <li>fertile</li>
          <li>lively</li>
          <li>astonished</li>
          <li>gallant</li>
          <li>coward</li>
        </ol>
        <strong class="whitespace-nowrap">(6 marks)</strong>
        <Answers questionNumber="7" />
      </li>

      <li>
        <h4 className="mb-2 font-bold">C. Antonyms</h4>
        <p className="mb-2">Provide the antonyms of each word</p>
        <ol className="flex list-decimal flex-col gap-2">
          <li>optimist</li>
          <li>impoverish</li>
          <li>gigantic</li>
          <li>dawn</li>
          <li>cloudy</li>
          <li>extravagant</li>
        </ol>
        <strong class="whitespace-nowrap">(6 marks)</strong>
        <Answers questionNumber="8" />
      </li>

      <li>
        <h4 className="mb-2 font-bold">D. Plurals</h4>
        <p className="mb-2">Provide the plural of each word</p>
        <ol className="flex list-decimal flex-col gap-2">
          <li>island</li>
          <li>sheep</li>
          <li>bottle-neck</li>
          <li>mother-in-law</li>
        </ol>
        <strong class="whitespace-nowrap">(4 marks)</strong>
        <Answers questionNumber="9" />
      </li>

      <li>
        <h4 className="mb-2 font-bold">E. Homonyms</h4>
        <p className="mb-2">Provide the homonyms of these words</p>
        <ol className="flex list-decimal flex-col gap-2">
          <li>heir</li>
          <li>foul</li>
          <li>pail</li>
          <li>piece</li>
          <li>whine</li>
        </ol>
        <strong class="whitespace-nowrap">(5 marks)</strong>
        <Answers questionNumber="10" />
      </li>

      <li>
        <h4 className="mb-2 font-bold">F. Test on Punctuation</h4>
        <p className="mb-2">Punctuate these sentences below appropriately</p>
        <ol className="flex list-decimal flex-col gap-2">
          <li>Obi is a gentle man</li>
          <li>He lives in the city</li>
          <li>Can you imagine what Obi does for a living</li>
          <li>He is a fisherman</li>
          <li>Wow</li>
          <li>Obi lives an exemplary lifestyle and everybody loves him</li>
        </ol>
        <strong class="whitespace-nowrap">(6 marks)</strong>
        <Answers questionNumber="11" />
      </li>

      <li>
        <h4 className="mb-2 font-bold">G. Test on Essay/Outlines</h4>
        <p className="mb-2">
          Choose a topic below and write 7 outlines on each
        </p>
        <ol className="flex list-decimal flex-col gap-2">
          <li>The economic implication of Cashless Policy in Nigeria</li>
          <li>The disturbing Spate of Killings in the Society</li>
          <li>Describe the Nigerian Coat of Arms</li>
        </ol>
        <strong class="whitespace-nowrap">(7 marks)</strong>
        <Answers questionNumber="12" />
      </li>
    </Questions>
  );
}
