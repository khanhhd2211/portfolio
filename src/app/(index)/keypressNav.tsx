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
    if (event.key == "ArrowDown" || event.key == "ArrowRight") {
      if (currentPathIndex < routes.length - 1) {
        router.push(routes[currentPathIndex + 1]);
      } else {
        router.push(routes[0]);
      }
    } else if (event.key == "ArrowUp" || event.key == "ArrowLeft") {
      if (currentPathIndex > 0) {
        router.push(routes[currentPathIndex - 1]);
      } else {
        router.push(routes[routes.length - 1]);
      }
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
