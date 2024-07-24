import {
	TabsContent as RadixTabsContent,
	TabsList as RadixTabsList,
	Root as RadixTabsRoot,
	TabsTrigger as RadixTabsTrigger
} from '@radix-ui/react-tabs'
import clsx from 'clsx'

import { projectCategories, projects } from '../../data/projects'

export function ProjectsBoard() {
	return (
		<div className="bg-zinc-900 p-3 rounded-lg shadow-shape">
			<div className="ml-0.5 mb-3 flex items-center">
				<div className="flex items-center gap-1.5">
					<span className="size-3 bg-red-400 rounded-full" />
					<span className="size-3 bg-yellow-400 rounded-full" />
					<span className="size-3 bg-green-400 rounded-full" />
				</div>

				<span className="absolute left-1/2 -translate-x-1/2 text-zinc-400 tracking-tight font-mono">
					~/www
				</span>
			</div>

			<RadixTabsRoot defaultValue={projectCategories[0]}>
				<RadixTabsList className="flex">
					{projectCategories.map((category) => (
						<RadixTabsTrigger
							key={category}
							value={category}
							className={clsx(
								'rounded-t px-5 py-3 text-zinc-400 font-medium hover:text-zinc-50 transition-colors data-[state=active]:bg-zinc-950 data-[state=active]:text-zinc-50'
							)}
						>
							{category}
						</RadixTabsTrigger>
					))}
				</RadixTabsList>

				{projectCategories.map((category) => (
					<RadixTabsContent
						key={category}
						value={category}
						className="rounded -mt-1 space-y-3 overflow-hidden"
					>
						{projects
							.filter((project) => project.category === category)
							.map((project) => (
								<article
									key={project.id}
									className="bg-zinc-950 p-5 flex gap-5 cursor-pointer"
								>
									<div className="space-y-4 flex-1">
										<div className="flex items-center gap-4 flex-wrap">
											<h3 className="text-zinc-50 font-semibold tracking-tight">
												{project.name}
											</h3>
											<ul className="flex items-center gap-2 flex-wrap">
												{project.stacks.map((stack) => (
													<li
														key={stack}
														className={clsx(
															'text-xs bg-zinc-800 px-2 py-1.5 rounded-2xl font-semibold',
															stack.toLowerCase().includes('react') &&
																'text-cyan-400 !bg-cyan-950',
															stack.toLowerCase().includes('node.js') &&
																'text-green-400 !bg-green-950',
															stack.toLowerCase().includes('express') &&
																'text-green-400 !bg-green-950',
															stack.toLowerCase().includes('mongo') &&
																'text-green-400 !bg-green-950',
															stack.toLowerCase().includes('fastify') &&
																'text-green-400 !bg-green-950',
															stack.toLowerCase().includes('nest.js') &&
																'text-green-400 !bg-green-950',
															stack.toLowerCase().includes('tailwind') &&
																'text-sky-400 !bg-sky-950',
															stack.toLowerCase().includes('astro') &&
																'text-amber-400 !bg-amber-950',
															stack.toLowerCase().includes('next') &&
																'text-zinc-950 !bg-zinc-50'
														)}
													>
														{stack}
													</li>
												))}
											</ul>
										</div>
										<p className="text-zinc-400 leading-relaxed max-w-lg">
											{project.excerpt}
										</p>
									</div>
								</article>
							))}
					</RadixTabsContent>
				))}
			</RadixTabsRoot>
		</div>
	)
}
