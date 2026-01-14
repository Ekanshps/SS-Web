// Secret developer page - redirects to main developer page
// Access via: /dev-e2k (your secret code)

import { redirect } from "next/navigation";

export default function SecretDevPage() {
  redirect("/developer");
}
