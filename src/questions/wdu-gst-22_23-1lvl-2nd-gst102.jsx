import Questions from "@/components/Questions";
import Answers from "@/components/Answers";

export default function GST102() {
  return (
    <Questions
      school="western delta university"
      college="general studies"
      department="general studies"
      session="2022/2023"
      semester="second semester"
      courseCode="GST102"
      courseTitle="use of english"
      allowedTime="1hr: 30mins"
      instruction="answer ALL questions"
    >
      <li>
        <h4 className="mb-2 font-bold">Figures of Speech.</h4>
        <p className="mb-2">
          Provide the figures of speech of these statements numbered 1-15 below.
        </p>
        <ol className="flex list-decimal flex-col gap-2">
          <li>
            The moon smiled at me. <Answers questionNumber="1" />
          </li>
          <li>
            He is as meek as a lamb. <Answers questionNumber="2" />
          </li>
          <li>
            The President of Nigeria, Bola Ahmed Tinubu is a just man.{" "}
            <Answers questionNumber="3" />
          </li>
          <li>
            Michael Jackson was a Saint on earth. <Answers questionNumber="4" />
          </li>
          <li>
            His aged grandmother is actually a virgin.{" "}
            <Answers questionNumber="5" />
          </li>
          <li>
            Failure is a pathway to success. <Answers questionNumber="6" />
          </li>
          <li>
            I will cry a river if that happens. <Answers questionNumber="7" />
          </li>
          <li>
            The rich also cry. <Answers questionNumber="8" />
          </li>
          <li>
            A dry-wet blanket. <Answers questionNumber="9" />
          </li>
          <li>
            All fingers are not equal. <Answers questionNumber="10" />
          </li>
          <li>
            I was weak this week. <Answers questionNumber="11" />
          </li>
          <li>
            The sun shall soon shine. <Answers questionNumber="12" />
          </li>
          <li>
            The ball danced its way to the post. <Answers questionNumber="13" />
          </li>
          <li>
            A living dog is better than a dead lion.{" "}
            <Answers questionNumber="14" />
          </li>
          <li>
            The man kicked the bucket yesterday. <Answers questionNumber="15" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Test of Orals.</h4>
        <p className="mb-2">
          Provide the appropriate sounds for the underlined letters in these
          words below.
        </p>
        <ol start={16} className="flex list-decimal flex-col gap-2">
          <li>
            Gi<span className="underline underline-offset-4">r</span>l{" "}
            <Answers questionNumber="16" />
          </li>
          <li>
            N<span className="underline underline-offset-4">ur</span>se{" "}
            <Answers questionNumber="17" />
          </li>
          <li>
            <span className="underline underline-offset-4">L</span>antern{" "}
            <Answers questionNumber="18" />
          </li>
          <li>
            So<span className="underline underline-offset-4">ng</span>{" "}
            <Answers questionNumber="19" />
          </li>
          <li>
            C<span className="underline underline-offset-4">up</span>board{" "}
            <Answers questionNumber="20" />
          </li>
          <li>
            M<span className="underline underline-offset-4">ar</span>ket{" "}
            <Answers questionNumber="21" />
          </li>
          <li>
            <span className="underline underline-offset-4">U</span>nbelief{" "}
            <Answers questionNumber="22" />
          </li>
          <li>
            <span className="underline underline-offset-4">Y</span>ellow{" "}
            <Answers questionNumber="23" />
          </li>
          <li>
            Loa<span className="underline underline-offset-4">th</span>{" "}
            <Answers questionNumber="24" />
          </li>
          <li>
            F<span className="underline underline-offset-4">a</span>vour{" "}
            <Answers questionNumber="25" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Intonations</h4>
        <p className="mb-2">
          Using the appropriate symbol, sign or words, indicate the appropriate
          tones used in these sentencess below i.e. &darr; (falling tone) or
          (rising tone) &uarr;
        </p>
        <ol start={26} className="flex list-decimal flex-col gap-2">
          <li>
            Are you there? <Answers questionNumber="26" />
          </li>
          <li>
            Whose bag is this? <Answers questionNumber="27" />
          </li>
          <li>
            Please shut the door! <Answers questionNumber="28" />
          </li>
          <li>
            I love you. <Answers questionNumber="29" />
          </li>
          <li>
            The day is bright. <Answers questionNumber="30" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Registers</h4>
        <p className="mb-2">
          Choose the appropriate word which fills the gap from the brackets
          provided.
        </p>
        <ol start={31} className="flex list-decimal flex-col gap-2">
          <li>
            On the doctor&apos;s appointment, I met him using a _______ fixed on
            a patient&apos; chest (rod, wire, stethoscope).{" "}
            <Answers questionNumber="31" />
          </li>
          <li>
            The pregnant woman was writhing in pains as she was about to give
            birth to a child, she had to be admitted into the _______ (emergency
            ward, labour ward, women room). <Answers questionNumber="32" />
          </li>
          <li>
            One of the newly employedd nurses was told to undergo _______ to be
            able to see insider her respiratory organs. (Xray, Tray, Film Room).{" "}
            <Answers questionNumber="33" />
          </li>
          <li>
            The _______ is trained to assist women during childbirth. (nurse,
            midwife, doctor). <Answers questionNumber="34" />
          </li>
          <li>
            In the emergency ward, most severe medical cases may need _______
            (blood transfusion, blood clotting, blood relations).{" "}
            <Answers questionNumber="35" />
          </li>
        </ol>
      </li>
    </Questions>
  );
}
