import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Nextjs() {
  const router = useRouter();

  useEffect(() => {
    router.push("/nextjs");
  }, []);

  return null;
}
