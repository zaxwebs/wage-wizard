<script>
	import { onMount } from 'svelte'
	import { Heading, P, Span, Badge } from 'flowbite-svelte'
	import {
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell,
		Input,
		Avatar,
	} from 'flowbite-svelte'

	import { groups as groupsSource, employees as employeesSource, settings } from '$lib/data'

	let employees = []
	let groups = []

	onMount(() => {
		groups = groupsSource
		employees = employeesSource.map((employee) => {
			const hourlyWage = groups.filter((group) => group.id === employee.groupId)[0].hourlyWage
			return {
				...employee,
				days: {
					standard: 0,
					dh: 0,
					ed: 0,
				},
				overtime: 0,
				get totalDays() {
					return this.days.standard + this.days.dh + this.days.ed
				},
				get totalHours() {
					return this.totalDays * settings.dailyHours + this.overtime
				},
				get payout() {
					return this.totalHours * hourlyWage
				},
			}
		})
	})

	const handleDaysChange = (e, employee, dayType) => {
		employee.days[dayType] = parseInt(e.target.value) || 0
		employees = employees
	}

	const handleOvertimeChange = (e, employee) => {
		employee.overtime = parseInt(e.target.value) || 0
		employees = employees
	}

	const formatCurrency = (amount) => {
		return amount.toLocaleString('en-IN', {
			style: 'currency',
			currency: 'USD',
			maximumFractionDigits: amount % 1 === 0 ? 0 : 2,
		})
	}

	const formatNumber = (number) => {
		return number.toLocaleString('en-US')
	}
</script>

<div class="h-24 w-full bg-cover bg-bottom" style="background-image: url('/images/cover.jpg');" />
<div class="p-4">
	{#each groups as group (group.id)}
		<div class="mb-12">
			<div class="flex mb-4 items-end">
				<Heading tag="h5">{group.name}</Heading>
				<Badge class="uppercase font-semibold">${group.hourlyWage}/hr</Badge>
			</div>
			<Table hoverable={true}>
				<TableHead>
					<TableHeadCell class="!py-2 !px-3">Picture</TableHeadCell>
					<TableHeadCell class="!py-2 !px-3">Name</TableHeadCell>
					<TableHeadCell class="!py-2 !px-3">Standard Days</TableHeadCell>
					<TableHeadCell class="!py-2 !px-3">Dock Holidays</TableHeadCell>
					<TableHeadCell class="!py-2 !px-3">Extra Days</TableHeadCell>
					<TableHeadCell class="!py-2 !px-3">Total Days</TableHeadCell>
					<TableHeadCell class="!py-2 !px-3">Overtime Hours</TableHeadCell>
					<TableHeadCell class="!py-2 !px-3">Total Hours</TableHeadCell>
					<TableHeadCell class="!py-2 !px-3 text-right min-w-[120px]"
						>Payout</TableHeadCell
					>
				</TableHead>
				<TableBody>
					{#each employees.filter((employee) => employee.groupId === group.id) as employee (employee.id)}
						<TableBodyRow>
							<TableBodyCell class="!py-2 !px-3">
								<Avatar
									class="flex-1"
									data-name={employee.name}
									src={employee.image}
								/>
							</TableBodyCell>
							<TableBodyCell class="!py-2 !px-3">{employee.name}</TableBodyCell>
							<TableBodyCell class="!py-2 !px-3">
								<Input
									class="!p-1.5"
									type="number"
									min="0"
									step="1"
									value={employee.days.standard}
									on:change={(e) => {
										handleDaysChange(e, employee, 'standard')
									}}
								/>
							</TableBodyCell>
							<TableBodyCell class="!py-2 !px-3">
								<Input
									class="!p-1.5"
									type="number"
									min="0"
									step="1"
									value={employee.days.dh}
									on:change={(e) => {
										handleDaysChange(e, employee, 'dh')
									}}
								/>
							</TableBodyCell>
							<TableBodyCell class="!py-2 !px-3">
								<Input
									class="!p-1.5"
									type="number"
									min="0"
									step="1"
									value={employee.days.ed}
									on:change={(e) => {
										handleDaysChange(e, employee, 'ed')
									}}
								/>
							</TableBodyCell>
							<TableBodyCell class="!py-2 !px-3">{employee.totalDays}</TableBodyCell>
							<TableBodyCell class="!py-2 !px-3">
								<Input
									class="!p-1.5"
									type="number"
									min="0"
									step="1"
									value={employee.overtime}
									on:change={(e) => {
										handleOvertimeChange(e, employee)
									}}
								/>
							</TableBodyCell>
							<TableBodyCell>{employee.totalHours}</TableBodyCell>
							<TableBodyCell class="text-right"
								>{formatNumber(employee.payout)}</TableBodyCell
							>
						</TableBodyRow>
					{/each}
				</TableBody>
				<tfoot
					class="text-gray-700 dark:text-gray-400 bg-gray-50 dark:bg-gray-700 font-semibold"
				>
					<tr>
						<td colspan="8" />
						<td class="px-6 py-4 text-right"
							>{formatCurrency(
								employees
									.filter((employee) => employee.groupId === group.id)
									.reduce((sum, employee) => {
										return sum + employee.payout
									}, 0)
							)}</td
						>
					</tr></tfoot
				>
			</Table>
		</div>
	{/each}
</div>
