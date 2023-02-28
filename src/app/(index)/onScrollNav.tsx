"use client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import debounce from 'lodash/debounce';

export default function OnScrollNav({
  children,
}: {
  children: React.ReactNode;
}) {
  const routes = ["/", "/skills", "/projects", "/contact"];
  const router = useRouter();
  const pathname = usePathname();

  function onScrollHandler(event: WheelEvent) {
    const currentPathIndex = routes.findIndex((path) => path == pathname);
    if (event.deltaY > 0 && currentPathIndex < routes.length - 1) {
      router.push(routes[currentPathIndex + 1]);
    } else if (event.deltaY < 0 && currentPathIndex > 0) {
      router.push(routes[currentPathIndex - 1]);
    }
  }

	const onScrollHandlerDebounced = debounce(onScrollHandler, 200)

  useEffect(() => {
    window.addEventListener("wheel", onScrollHandlerDebounced);
    return () => window.removeEventListener("wheel", onScrollHandlerDebounced);
  }, [pathname]);

  return <>{children}</>;
}
