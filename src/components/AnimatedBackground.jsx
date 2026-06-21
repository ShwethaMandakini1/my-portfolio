import { motion } from "framer-motion"

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-navy">

      {/* aurora blobs, blended together for a smooth premium glow */}
      <div className="absolute inset-0" style={{ mixBlendMode: "screen" }}>
        <motion.div
          animate={{
            x: ["-10%", "12%", "-6%", "-10%"],
            y: ["-8%", "8%", "14%", "-8%"],
            scale: [1, 1.25, 1.05, 1],
          }}
          transition={{ duration: 34, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -left-40 w-[40rem] h-[40rem] rounded-full blur-[140px] opacity-[0.22]"
          style={{ background: "radial-gradient(circle, #7C3AED, transparent 70%)" }}
        />

        <motion.div
          animate={{
            x: ["8%", "-14%", "4%", "8%"],
            y: ["6%", "-10%", "-2%", "6%"],
            scale: [1, 1.15, 1.3, 1],
          }}
          transition={{ duration: 40, repeat: Infinity, ease: "easeInOut", delay: 5 }}
          className="absolute top-1/4 -right-40 w-[36rem] h-[36rem] rounded-full blur-[140px] opacity-[0.18]"
          style={{ background: "radial-gradient(circle, #3B82F6, transparent 70%)" }}
        />

        <motion.div
          animate={{
            x: ["-6%", "10%", "-12%", "-6%"],
            y: ["10%", "-6%", "8%", "10%"],
            scale: [1, 1.2, 1.05, 1],
          }}
          transition={{ duration: 46, repeat: Infinity, ease: "easeInOut", delay: 10 }}
          className="absolute -bottom-40 left-1/4 w-[34rem] h-[34rem] rounded-full blur-[140px] opacity-[0.16]"
          style={{ background: "radial-gradient(circle, #22D3EE, transparent 70%)" }}
        />

        <motion.div
          animate={{
            x: ["4%", "-10%", "6%", "4%"],
            y: ["-4%", "10%", "-8%", "-4%"],
            scale: [1, 1.1, 1.2, 1],
          }}
          transition={{ duration: 52, repeat: Infinity, ease: "easeInOut", delay: 16 }}
          className="absolute bottom-1/4 right-1/4 w-[28rem] h-[28rem] rounded-full blur-[140px] opacity-[0.12]"
          style={{ background: "radial-gradient(circle, #EC4899, transparent 70%)" }}
        />
      </div>

      {/* soft vignette to keep edges grounded and focus toward center */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 35%, rgba(5,5,16,0.55) 100%)",
        }}
      />

      {/* faint grain for texture, far subtler than a grid */}
      <div
        className="absolute inset-0 opacity-[0.025] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

    </div>
  )
}