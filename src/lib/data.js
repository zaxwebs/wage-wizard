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
		name: 'Crew / A',
		hourlyWage: 80,
	},
]

export const employees = [
	{
		id: 1,
		name: 'Employee A',
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
		name: 'Employee C',
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
		name: 'Employee D',
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
		name: 'Employee E',
		groupId: 2,
		days: {
			standard: 0,
			dh: 0,
			ed: 0,
		},
		overtime: 0,
	},
]