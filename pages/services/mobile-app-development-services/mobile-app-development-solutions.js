import { useEffect } from "react";
import { useRouter } from "next/router";

export default function MobileAppDevelopmentSolutions() {
  const router = useRouter();

  useEffect(() => {
    router.push("/mobile-app-design-service");
  }, []);

  return null;
}
