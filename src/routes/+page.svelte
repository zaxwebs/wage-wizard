<script>
	import { Heading, P, Span } from 'flowbite-svelte'
	import {
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell,
		Input,
	} from 'flowbite-svelte'

	import { groups, employees, settings } from '$lib/data'

	const employeesByGroup = (id) => {
		return employees.filter((employee) => employee.groupId === id)
	}

	const sumDays = (daysObject) => {
		return parseInt(daysObject.standard) + parseInt(daysObject.dh) + parseInt(daysObject.ed)
	}

	const daysToHours = (days, hoursPerDay) => {
		return days * hoursPerDay
	}
</script>

<div class="h-4 w-full bg-cover bg-bottom" style="background-image: url('/images/cover.jpg');" />
<div class="p-8">
	{#each groups as group (group.id)}
		<div class="mb-24">
			<div class="flex">
				<Heading tag="h5" class="mb-4">{group.name}</Heading>
				<div>${group.hourlyWage}/hr</div>
			</div>
			<Table hoverable={true}>
				<TableHead>
					<TableHeadCell>Name</TableHeadCell>
					<TableHeadCell>Standard Days</TableHeadCell>
					<TableHeadCell>Dock Holidays</TableHeadCell>
					<TableHeadCell>Extra Days</TableHeadCell>
					<TableHeadCell>Total Days</TableHeadCell>
					<TableHeadCell>Overtime Hours</TableHeadCell>
					<TableHeadCell>Total Hours</TableHeadCell>
					<TableHeadCell>Payout</TableHeadCell>
				</TableHead>
				<TableBody>
					{#each employeesByGroup(group.id) as employee (employee.id)}
						<TableBodyRow>
							<TableBodyCell>{employee.name}</TableBodyCell>
							<TableBodyCell>
								<Input
									type="number"
									min="0"
									step="1"
									bind:value={employee.days.standard}
								/>
							</TableBodyCell>
							<TableBodyCell>
								<Input
									type="number"
									min="0"
									step="1"
									bind:value={employee.days.dh}
								/>
							</TableBodyCell>
							<TableBodyCell>
								<Input
									type="number"
									min="0"
									step="1"
									bind:value={employee.days.ed}
								/>
							</TableBodyCell>
							<TableBodyCell>{sumDays(employee.days)}</TableBodyCell>
							<TableBodyCell>
								<Input
									type="number"
									min="0"
									step="1"
									bind:value={employee.overtime}
								/>
							</TableBodyCell>
							<TableBodyCell
								>{daysToHours(sumDays(employee.days), settings.dailyHours) +
									parseInt(employee.overtime)}</TableBodyCell
							>
							<TableBodyCell
								>{(daysToHours(sumDays(employee.days), settings.dailyHours) +
									parseInt(employee.overtime)) *
									group.hourlyWage}</TableBodyCell
							>
						</TableBodyRow>
					{/each}
				</TableBody>
			</Table>
		</div>
	{/each}
</div>
