import Card from "@/components/card";
import Link from "next/link";

export default function ArchivedNotifications() {
  return (
    <Card>
      Notifications
      <Link href="/complex-dashboard" className="p-4 bg-green-300 rounded-xl">
        Default
      </Link>
    </Card>
  );
}
