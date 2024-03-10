import { ReactNode } from "react";

export default function ComplexDashboardLayout({
  children,
  users,
  revenue,
  notifications,
  login,
}: {
  children: ReactNode;
  users: ReactNode;
  revenue: ReactNode;
  notifications: ReactNode;
  login: ReactNode;
}) {
  const isLoggedIn = true;

  return isLoggedIn ? (
    <>
      <div>{children}</div>
      <div className="flex">
        <div className="flex flex-col">
          {revenue}
          {users}
        </div>
        <div className="flex flex-1">{notifications}</div>
      </div>
    </>
  ) : (
    login
  );
}
