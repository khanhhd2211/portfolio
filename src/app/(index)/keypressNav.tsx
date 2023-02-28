"use client"
import { usePathname, useRouter } from "next/navigation";
import { KeyboardEvent, useEffect } from "react";
import debounce from 'lodash/debounce';

export default function KeypressNav({
  children,
}: {
  children: React.ReactNode;
}) {
	const routes = ['/', '/skills', '/projects', '/contact']
	const router = useRouter()
	const pathname = usePathname()

	function keypressHandler (event: globalThis.KeyboardEvent) {
		const currentPathIndex = routes.findIndex(path => path == pathname)
		if ((event.key == 'ArrowDown') && currentPathIndex < routes.length - 1) {
			router.push(routes[currentPathIndex + 1])
		} else if (event.key == 'ArrowUp' && currentPathIndex > 0) {
			router.push(routes[currentPathIndex - 1])
		} 
	}

	const keypressHandlerDebounced = debounce(keypressHandler)
	
	useEffect(() => {
		window.addEventListener('keydown', keypressHandlerDebounced)

		return () => window.removeEventListener('keydown', keypressHandlerDebounced);
	}, [pathname]);
	
  return <>{children}</>;
}
