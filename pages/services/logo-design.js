import { useRouter } from "next/router";
import { useEffect } from "react";

export default function LogoDesign() {
  const router = useRouter();

  useEffect(() => {
    router.push("/logo-design-services");
  }, []);

  return null;
}
