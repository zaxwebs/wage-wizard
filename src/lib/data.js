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
		groupId: 2,
		days: {
			standard: 0,
			dh: 0,
			ed: 0,
		},
		overtime: 0,
	},
]