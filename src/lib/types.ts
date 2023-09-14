export type Categories = 'Personal' | 'Work' | 'Misc' | 'School'

export type Post = {
	title: string
	desc: string
    blurb: string
    preview: string
	date: string
	categories: Categories[]
	published: boolean
}