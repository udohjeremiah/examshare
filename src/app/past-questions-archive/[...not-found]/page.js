import { notFound } from "next/navigation";

export default function CatchAllUnmatchedRoutes() {
  notFound();
}