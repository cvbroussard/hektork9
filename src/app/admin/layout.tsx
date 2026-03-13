import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { AdminLogin } from "./login";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const session = cookieStore.get("hk9_admin");

  if (!session?.value) {
    return <AdminLogin />;
  }

  // Verify session token matches
  const validToken = process.env.ADMIN_SESSION_TOKEN;
  if (!validToken || session.value !== validToken) {
    return <AdminLogin />;
  }

  return (
    <div className="min-h-screen bg-schwarz pt-4">
      <div className="mx-auto max-w-2xl px-4">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="font-display text-lg font-bold tracking-wider text-kupfer">
            HK9 ADMIN
          </h1>
          <form action="/api/admin/logout" method="POST">
            <button
              type="submit"
              className="text-xs text-nebel hover:text-stahl"
            >
              Logout
            </button>
          </form>
        </div>
        {children}
      </div>
    </div>
  );
}
