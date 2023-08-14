import { useEffect } from "react";
import { useRouter } from "next/router";

export default function HealthcareWebDevelopmentServices() {
  const router = useRouter();

  useEffect(() => {
    router.push("/healthcare-web-development");
  }, []);

  return null;
}
