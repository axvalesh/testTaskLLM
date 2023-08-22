import { useEffect, useRef, useState } from "react"

export const useElementOnScreen = (element: React.RefObject<HTMLElement> | null = null,) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  const callback = (entries: any) => {
    const [entry] = entries
    setIsVisible(entry.isIntersecting)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(callback)
    const target = element ? element.current : containerRef.current

    if (target) observer.observe(target)

    return () => {
      if (target) observer.unobserve(target)
    }
  }, [containerRef, element])

  return [containerRef, isVisible]
}