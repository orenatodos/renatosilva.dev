type Category = 'Pessoais' | 'Freelas' | 'Cursos'

type Project = {
	id: number
	name: string
	excerpt: string
	url: string
	stacks: string[]
	category: Category
}

export const projectCategories: Category[] = ['Freelas', 'Pessoais', 'Cursos']

export const projects: Project[] = [
	{
		id: 1,
		name: 'Fincheck',
		excerpt:
			'Aplicação para gerenciamento de Finanças pessoais. Monitore seus gastos de forma simples, podendo filtrar por conta, categoria e data.',
		url: 'https://fincheck.renatosilva.dev/',
		stacks: ['React.js', 'Nest.js', 'Tailwind'],
		category: 'Cursos'
	},
	{
		id: 2,
		name: 'MyContacts',
		excerpt:
			'Aplicação para gerenciamento de pedidos de um estabelecimento. Por intermédio dele, os garçons e a cozinha estão mais conectados do que nunca.',
		url: '#',
		stacks: ['React.js', 'React Native', 'Express.js'],
		category: 'Cursos'
	},
	{
		id: 3,
		name: 'Portfólio',
		excerpt: 'Meu website pessoal 🔥',
		url: 'https://renatosilva.dev/',
		stacks: ['Astro.js', 'React.js', 'Tailwind'],
		category: 'Pessoais'
	},
	{
		id: 5,
		name: 'Sergio Rio',
		excerpt: 'Site pessoal do Sergio Rio.',
		url: 'https://sergiorio.tech/pt-br',
		stacks: ['Next.js', 'Prismic CMS', 'Tailwind'],
		category: 'Freelas'
	},
	{
		id: 6,
		name: 'Plann.er',
		excerpt: 'Aplicação para planejamento de viagens.',
		url: '#',
		stacks: ['React.js', 'Tailwind'],
		category: 'Cursos'
	},
	{
		id: 7,
		name: 'Pizza.shop',
		excerpt: 'Gestão de pedidos de estabelecimento.',
		url: '#',
		stacks: ['Next.js', 'Tailwind'],
		category: 'Cursos'
	},
	{
		id: 8,
		name: 'Ignews',
		excerpt: 'Blog com acesso a conteúdos por assinatura.',
		url: '#',
		stacks: ['Next.js', 'Prismic CMS'],
		category: 'Cursos'
	},
	{
		id: 9,
		name: 'WaiterApp',
		excerpt: 'Gestão de pedidos de estabelecimento.',
		url: '#',
		stacks: ['React.js', 'React Native', 'Express.js'],
		category: 'Cursos'
	},
	{
		id: 10,
		name: 'Next SaaS RBAC',
		excerpt: '',
		url: '#',
		stacks: ['Next.js', 'Fastify', 'CASL'],
		category: 'Cursos'
	}
]
