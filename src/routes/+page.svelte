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
</script>

<div class="container mx-auto p-4">
	{#each groups as group (group.id)}
		<div class="mb-6">
			<Heading tag="h4" class="mb-4">{group.name}</Heading>
			<Table hoverable={true}>
				<TableHead>
					<TableHeadCell>Name</TableHeadCell>
					<TableHeadCell>Standard Days</TableHeadCell>
					<TableHeadCell>Dock Holidays</TableHeadCell>
					<TableHeadCell>Extra Days</TableHeadCell>
					<TableHeadCell>Total Days</TableHeadCell>
					<TableHeadCell>Overtime Hours</TableHeadCell>
				</TableHead>
				<TableBody>
					{#each employeesByGroup(group.id) as employee (employee.id)}
						<TableBodyRow>
							<TableBodyCell>{employee.name}</TableBodyCell>
							<TableBodyCell>
								<Input type="number" />
							</TableBodyCell>
							<TableBodyCell>
								<Input type="number" />
							</TableBodyCell>
							<TableBodyCell>
								<Input type="number" />
							</TableBodyCell>
							<TableBodyCell>
								<Input type="number" />
							</TableBodyCell>
							<TableBodyCell>
								<Input type="number" />
							</TableBodyCell>
						</TableBodyRow>
					{/each}
				</TableBody>
			</Table>
		</div>
	{/each}
</div>
