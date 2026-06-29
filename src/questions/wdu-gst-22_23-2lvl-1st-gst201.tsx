import Questions from "@/components/Questions";
import Answers from "@/components/Answers";

export default function GST201() {
  return (
    <Questions
      school="western delta university"
      college="general studies"
      department="general studies"
      session="2022/2023"
      semester="second semester"
      courseCode="GST201"
      courseTitle="communication in french"
      allowedTime="1hr"
      instruction="answer ALL questions"
    >
      <li>
        <p className="mb-2">
          PUT THE APPROPRIATE DEFINITE ARTICLE IN FRONT OF THE NOUNS BELOW
        </p>
        <ol className="flex list-decimal flex-col gap-2">
          <li>
            Maison <Answers questionNumber="1" />
          </li>
          <li>
            Livre <Answers questionNumber="2" />
          </li>
          <li>
            Porte <Answers questionNumber="3" />
          </li>
          <li>
            Ecole <Answers questionNumber="4" />
          </li>
        </ol>
      </li>

      <li>
        <p className="mb-2">PUT THE NOUNS BELOW IN THE PLURAL FORM</p>
        <ol className="flex list-decimal flex-col gap-2">
          <li>
            Un tableau <Answers questionNumber="5" />
          </li>
          <li>
            Une chaise <Answers questionNumber="6" />
          </li>
          <li>
            Un garçon <Answers questionNumber="7" />
          </li>
          <li>
            Une fille <Answers questionNumber="8" />
          </li>
          <li>
            Un nez <Answers questionNumber="9" />
          </li>
        </ol>
      </li>

      <li>
        <p className="mb-2">WRITE THE TIME BELOW IN FRENCH</p>
        <ol className="flex list-decimal flex-col gap-2">
          <li>
            Ten mins to nine <Answers questionNumber="10" />
          </li>
          <li>
            3:23 <Answers questionNumber="11" />
          </li>
          <li>
            1:46 <Answers questionNumber="12" />
          </li>
          <li>
            11:02 <Answers questionNumber="13" />
          </li>
        </ol>
      </li>

      <li>
        <p className="mb-2">TRANDUISSEZ LES PHRASES EN ANGLAIS</p>
        <ol className="flex list-decimal flex-col gap-2">
          <li>
            Le cinquième mois de l&apos;année c&apos;est Jeudi
            <Answers questionNumber="14" />
          </li>
          <li>
            Nous avons combien des mois dans une année
            <Answers questionNumber="15" />
          </li>
          <li>
            Le jour après mardi c&apos;est mercredi
            <Answers questionNumber="16" />
          </li>
          <li>
            Les jours de la semaine <Answers questionNumber="17" />
          </li>
        </ol>
      </li>

      <li>
        <p className="mb-2">ECRIVEZ EN FRANÇAIS</p>
        <ol className="flex list-decimal flex-col gap-2">
          <li>
            11 + 13 = 24 <Answers questionNumber="18" />
          </li>
          <li>
            37 - 2 = 35 <Answers questionNumber="19" />
          </li>
          <li>
            7 x 10 - 70 <Answers questionNumber="20" />
          </li>
          <li>
            45 / 5 - 9 <Answers questionNumber="21" />
          </li>
        </ol>
      </li>

      <li>
        <p className="mb-2">ECRIVEZ AUX CARDINAUX</p>
        <ol className="flex list-decimal flex-col gap-2">
          <li>
            17 <Answers questionNumber="22" />
          </li>
          <li>
            26 <Answers questionNumber="23" />
          </li>
          <li>
            44 <Answers questionNumber="24" />
          </li>
          <li>
            68 <Answers questionNumber="25" />
          </li>
        </ol>
      </li>

      <li>
        <p className="mb-2">ECRIVEZ AUX ORDINAUX</p>
        <ol className="flex list-decimal flex-col gap-2">
          <li>
            Cinq <Answers questionNumber="26" />
          </li>
          <li>
            Cinquieme-deux <Answers questionNumber="27" />
          </li>
          <li>
            Quatre-vingt treize <Answers questionNumber="28" />
          </li>
          <li>
            Cent-trois <Answers questionNumber="29" />
          </li>
        </ol>
      </li>

      <li>
        <p className="mb-2">COMPLETEZ LES PHRASES AVEC LE VERBE ETRE</p>
        <ol className="flex list-decimal flex-col gap-2">
          <li>
            Vous _______ etudiants <Answers questionNumber="30" />
          </li>
          <li>
            Je _______ au marché <Answers questionNumber="31" />
          </li>
          <li>
            Tu _______ dans ma classe <Answers questionNumber="32" />
          </li>
        </ol>
      </li>

      <li>
        <p className="mb-2">COMPLETEZ LES PHRASES AVEC LES PRONOMS</p>
        <ol className="flex list-decimal flex-col gap-2">
          <li>
            _______ avons quatre enfants <Answers questionNumber="33" />
          </li>
          <li>
            _______ ont dix ans <Answers questionNumber="34" />
          </li>
          <li>
            _______ as un stylo <Answers questionNumber="35" />
          </li>
        </ol>
      </li>
    </Questions>
  );
}
