import pqa from "@/utils/pastQuestionsArchive";
import LinkList from "@/components/LinkList";

export default function Institution({ params }) {
  const { institution } = params;

  const departmentKeys = Object.keys(pqa[institution]["departments"]);
  const departments = departmentKeys.map((departmentKey) => ({
    href: `/past-questions-archive/${institution}/${departmentKey}`,
    name: pqa[institution]["departments"][departmentKey]["name"],
  }));

  return <LinkList items={departments} isOrdered={true} />;
}
