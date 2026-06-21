import { useEffect, useRef } from "react"

export default function CursorNetwork() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    let animationId
    let width, height

    const COLOR = "34, 211, 238" // cyan
    const TRAIL_LENGTH = 16

    const mouse = { x: -9999, y: -9999, active: false }
    let trail = []

    function handleMouseMove(e) {
      mouse.x = e.clientX
      mouse.y = e.clientY
      mouse.active = true
    }
    function handleMouseLeave() {
      mouse.active = false
    }

    function resize() {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    function step() {
      ctx.clearRect(0, 0, width, height)

      if (mouse.active) {
        trail.unshift({ x: mouse.x, y: mouse.y })
        if (trail.length > TRAIL_LENGTH) trail.pop()
      } else if (trail.length > 0) {
        trail.pop()
      }

      // fading tail
      for (let i = trail.length - 1; i >= 0; i--) {
        const p = trail[i]
        const t = 1 - i / TRAIL_LENGTH
        const radius = 0.5 + t * 3
        ctx.fillStyle = `rgba(${COLOR}, ${t * 0.35})`
        ctx.beginPath()
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2)
        ctx.fill()
      }

      // glowing head
      if (trail.length > 0) {
        const head = trail[0]
        const glow = ctx.createRadialGradient(head.x, head.y, 0, head.x, head.y, 40)
        glow.addColorStop(0, `rgba(${COLOR}, 0.35)`)
        glow.addColorStop(1, `rgba(${COLOR}, 0)`)
        ctx.fillStyle = glow
        ctx.beginPath()
        ctx.arc(head.x, head.y, 40, 0, Math.PI * 2)
        ctx.fill()

        ctx.fillStyle = `rgba(${COLOR}, 0.9)`
        ctx.beginPath()
        ctx.arc(head.x, head.y, 2.5, 0, Math.PI * 2)
        ctx.fill()
      }

      animationId = requestAnimationFrame(step)
    }

    resize()
    step()

    window.addEventListener("resize", resize)
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseleave", handleMouseLeave)
    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  )
}