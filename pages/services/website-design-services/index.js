import { useEffect } from "react";
import { useRouter } from "next/router";

export default function WebsiteDesignServices() {
  const router = useRouter();

  useEffect(() => {
    router.push("/website-development-services");
  }, []);

  return null;
}
