import { useEffect } from "react";
import { useRouter } from "next/router";

export default function WebSiteServices() {
  const router = useRouter();

  useEffect(() => {
    router.push("/website-development-services");
  }, []);

  return null;
}
