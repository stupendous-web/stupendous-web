import { useEffect } from "react";
import { useRouter } from "next/router";

export default function WebApplicationDevelopmentServices() {
  const router = useRouter();

  useEffect(() => {
    router.push("/custom-web-app-development-services");
  }, []);

  return null;
}
