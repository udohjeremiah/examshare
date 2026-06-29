import pqa from "@/utils/past-questions-archive";
import LinkList from "@/components/link-list";

export default async function Institution({
  params,
}: {
  params: Promise<{ institution: string }>;
}) {
  const { institution } = await params;

  // @ts-expect-error — dynamic string index on inferred JSON type
  const departmentKeys = Object.keys(pqa[institution]["departments"]);
  const departments = departmentKeys.map((departmentKey) => ({
    href: `/past-questions-archive/${institution}/${departmentKey}`,
    // @ts-expect-error — dynamic string index on inferred JSON type
    name: pqa[institution]["departments"][departmentKey]["name"],
  }));

  return <LinkList items={departments} isOrdered={true} />;
}
