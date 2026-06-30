import { LinkList } from "@/components/link-list";
import { pqa } from "@/utils/past-questions-archive";

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

  return <LinkList isOrdered={true} items={departments} />;
}
