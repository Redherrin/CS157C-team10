export interface User {
	id: number;
	name: string;
	password: string;
	isAuthor: boolean;
}

export const users = [
{
	id: 1,
	name: 'YRC',
	password: 'go',
	isAuthor: true,
},
{
	id: 2,
	name: 'Shiold',
	password: '1208',
	isAuthor: true,
},
{
	id: 3,
	name: 'Sheepy',
	password: '0606',
	isAuthor: false,
},
{
	id: 4,
	name: 'Melty',
	password: '1031',
	isAuthor: true,
}
]