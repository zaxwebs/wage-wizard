export const settings = {
	dailyHours: 12,
}

export const groups = [
	{
		id: 1,
		name: 'Office Staff',
		hourlyWage: 40,
	},
	{
		id: 2,
		name: 'Crew Members',
		hourlyWage: 80,
	},
]

export const employees = [
	{
		id: 1,
		name: 'Jackson Tanner',
		image: 'https://randomuser.me/api/portraits/men/1.jpg',
		groupId: 1,
		days: {
			standard: 0,
			dh: 0,
			ed: 0,
		},
		overtime: 0,
	},
	{
		id: 2,
		name: 'Grace McKinney',
		image: 'https://randomuser.me/api/portraits/women/2.jpg',
		groupId: 1,
		days: {
			standard: 0,
			dh: 0,
			ed: 0,
		},
		overtime: 0,
	},
	{
		id: 3,
		name: 'Owen Parker',
		image: 'https://randomuser.me/api/portraits/men/54.jpg',
		groupId: 1,
		days: {
			standard: 0,
			dh: 0,
			ed: 0,
		},
		overtime: 0,
	},
	{
		id: 4,
		name: 'Lillian Spencer',
		image: 'https://randomuser.me/api/portraits/men/61.jpg',
		groupId: 2,
		days: {
			standard: 0,
			dh: 0,
			ed: 0,
		},
		overtime: 0,
	},
]