import { LoginForm } from "@/components/login-form";
import { getAuthenticatedAppForUser } from "@/lib/firebase/serverApp";
import { redirect } from "next/navigation";

export default function Page() {
  const { currentUser } = getAuthenticatedAppForUser();

  if (currentUser) {
    redirect(`/app`);
  } else {
    console.log("no user");
  }

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  );
}
