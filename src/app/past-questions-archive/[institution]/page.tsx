import pqa from "@/utils/pastQuestionsArchive";
import LinkList from "@/components/LinkList";

export default async function Institution({
  params,
}: {
  params: Promise<{ institution: string }>;
}) {
  const { institution } = await params;

  const departmentKeys = Object.keys(pqa[institution]["departments"]);
  const departments = departmentKeys.map((departmentKey) => ({
    href: `/past-questions-archive/${institution}/${departmentKey}`,
    name: pqa[institution]["departments"][departmentKey]["name"],
  }));

  return <LinkList items={departments} isOrdered={true} />;
}
