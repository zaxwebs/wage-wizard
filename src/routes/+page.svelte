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
		Avatar,
	} from 'flowbite-svelte'

	import { groups, employees, settings } from '$lib/data'

	const employeesByGroup = (id) => {
		return employees.filter((employee) => employee.groupId === id)
	}

	const sumDays = (daysObject) => {
		return daysObject.standard + daysObject.dh + daysObject.ed
	}

	const daysToHours = (days, hoursPerDay) => {
		return days * hoursPerDay
	}
</script>

<div class="h-24 w-full bg-cover bg-bottom" style="background-image: url('/images/cover.jpg');" />
<div class="p-4">
	{#each groups as group (group.id)}
		<div class="mb-24">
			<div class="flex">
				<Heading tag="h5" class="mb-4">{group.name}</Heading>
				<div>${group.hourlyWage}/hr</div>
			</div>
			<Table hoverable={true}>
				<TableHead>
					<TableHeadCell class="!py-2 !py-2">Picture</TableHeadCell>
					<TableHeadCell class="!py-2 !py-2">Name</TableHeadCell>
					<TableHeadCell class="!py-2 !py-2">Standard Days</TableHeadCell>
					<TableHeadCell class="!py-2 !py-2">Dock Holidays</TableHeadCell>
					<TableHeadCell class="!py-2 !py-2">Extra Days</TableHeadCell>
					<TableHeadCell class="!py-2 !py-2">Total Days</TableHeadCell>
					<TableHeadCell class="!py-2 !py-2">Overtime Hours</TableHeadCell>
					<TableHeadCell class="!py-2 !py-2">Total Hours</TableHeadCell>
					<TableHeadCell class="!py-2 !py-2">Payout</TableHeadCell>
				</TableHead>
				<TableBody>
					{#each employeesByGroup(group.id) as employee (employee.id)}
						<TableBodyRow>
							<TableBodyCell class="!py-2 !py-2">
								<Avatar
									class="flex-1"
									data-name={employee.name}
									src={employee.image}
								/>
							</TableBodyCell>
							<TableBodyCell class="!py-2 !py-2">{employee.name}</TableBodyCell>
							<TableBodyCell class="!py-2 !py-2">
								<Input
									class="!p-1.5"
									type="number"
									min="0"
									step="1"
									value={employee.days.standard}
									on:change={(e) => {
										employee.days.standard = parseInt(e.target.value) || 0
									}}
								/>
							</TableBodyCell>
							<TableBodyCell class="!py-2 !py-2">
								<Input
									class="!p-1.5"
									type="number"
									min="0"
									step="1"
									value={employee.days.dh}
									on:change={(e) => {
										employee.days.dh = parseInt(e.target.value) || 0
									}}
								/>
							</TableBodyCell>
							<TableBodyCell class="!py-2 !py-2">
								<Input
									class="!p-1.5"
									type="number"
									min="0"
									step="1"
									value={employee.days.ed}
									on:change={(e) => {
										employee.days.ed = parseInt(e.target.value) || 0
									}}
								/>
							</TableBodyCell>
							<TableBodyCell class="!py-2 !py-2"
								>{sumDays(employee.days)}</TableBodyCell
							>
							<TableBodyCell class="!py-2 !py-2">
								<Input
									class="!p-1.5"
									type="number"
									min="0"
									step="1"
									value={employee.overtime}
									on:change={(e) => {
										employee.overtime = parseInt(e.target.value) || 0
									}}
								/>
							</TableBodyCell>
							<TableBodyCell
								>{daysToHours(sumDays(employee.days), settings.dailyHours) +
									employee.overtime}</TableBodyCell
							>
							<TableBodyCell
								>{(daysToHours(sumDays(employee.days), settings.dailyHours) +
									employee.overtime) *
									group.hourlyWage}</TableBodyCell
							>
						</TableBodyRow>
					{/each}
				</TableBody>
			</Table>
		</div>
	{/each}
</div>
