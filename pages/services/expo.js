import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Expo() {
  const router = useRouter();

  useEffect(() => {
    router.push("/expo");
  }, []);

  return null;
}
