"use client";
import { usePathname, useRouter } from "next/navigation";
import { KeyboardEvent, useEffect } from "react";
import debounce from "lodash/debounce";

export default function KeypressNav({
  children,
}: {
  children: React.ReactNode;
}) {
  const routes = ["/", "/skills/data", "/skills/dev", "/projects", "/contact"];
  const router = useRouter();
  const pathname = usePathname();

  function keypressHandler(event: globalThis.KeyboardEvent) {
    if (
      document.querySelector("input") === document.activeElement ||
      document.querySelector("textarea") === document.activeElement
    ) {
      return;
    }
    const currentPathIndex = routes.findIndex((path) => path == pathname);
    if (
      (event.key == "ArrowDown" || event.key == "ArrowRight") &&
      currentPathIndex < routes.length - 1
    ) {
      router.push(routes[currentPathIndex + 1]);
    } else if (
      (event.key == "ArrowUp" || event.key == "ArrowLeft") &&
      currentPathIndex > 0
    ) {
      router.push(routes[currentPathIndex - 1]);
    }
  }

  const keypressHandlerDebounced = debounce(keypressHandler, 0);

  useEffect(() => {
    document.addEventListener("keydown", keypressHandlerDebounced);

    return () =>
      document.removeEventListener("keydown", keypressHandlerDebounced);
  }, [pathname]);

  return <>{children}</>;
}
