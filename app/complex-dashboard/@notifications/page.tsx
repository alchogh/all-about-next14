import Card from "@/components/card";
import Link from "next/link";

export default function Notifications() {
  return (
    <Card>
      Notifications
      <Link
        href="/complex-dashboard/archived"
        className="p-4 bg-green-300 rounded-xl"
      >
        Archived
      </Link>
    </Card>
  );
}
