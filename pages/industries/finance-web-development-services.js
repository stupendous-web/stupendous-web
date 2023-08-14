import { useEffect } from "react";
import { useRouter } from "next/router";

export default function HealthcareWebDevelopmentServices() {
  const router = useRouter();

  useEffect(() => {
    router.push("/finance-web-development");
  }, []);

  return null;
}
