import { motion } from 'framer-motion'
import type { ComponentProps } from 'react'

export function AnimatedSection({ children }: ComponentProps<'div'>) {
	return (
		<motion.div
			initial={{ opacity: 0, y: -100 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8 }}
		>
			{children}
		</motion.div>
	)
}
