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
		url: 'https://mycontacts.renatosilva.dev/',
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
		id: 4,
		name: '5Era',
		excerpt:
			'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
		url: 'https://5era.com/',
		stacks: ['Next.js', 'Prismic CMS', 'Tailwind'],
		category: 'Freelas'
	},
	{
		id: 5,
		name: 'Sergio Rio',
		excerpt:
			'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
		url: 'https://sergiorio.tech/pt-br',
		stacks: ['Next.js', 'Prismic CMS', 'Tailwind'],
		category: 'Freelas'
	},
	{
		id: 6,
		name: 'Plann.er',
		excerpt: 'Aplicação para planejamento de viagens.',
		url: 'https://sergiorio.tech/pt-br',
		stacks: ['React.js', 'Tailwind'],
		category: 'Cursos'
	},
	{
		id: 7,
		name: 'Pizza.shop',
		excerpt:
			'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
		url: 'https://sergiorio.tech/pt-br',
		stacks: ['Next.js', 'Tailwind'],
		category: 'Cursos'
	},
	{
		id: 8,
		name: 'Ignews',
		excerpt:
			'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
		url: 'https://sergiorio.tech/pt-br',
		stacks: ['Next.js', 'Prismic CMS'],
		category: 'Cursos'
	},
	{
		id: 9,
		name: 'WaiterApp',
		excerpt:
			'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
		url: 'https://sergiorio.tech/pt-br',
		stacks: ['React.js', 'React Native', 'Express.js'],
		category: 'Cursos'
	},
	{
		id: 10,
		name: 'Next SaaS RBAC',
		excerpt:
			'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
		url: 'https://sergiorio.tech/pt-br',
		stacks: ['Next.js', 'Fastify', 'CASL'],
		category: 'Cursos'
	}
]
