import { Table, Paper, Title, Text, Group, ThemeIcon } from '@mantine/core';
import { IconChartBar } from '@tabler/icons-react';
import { YearlyAnalysis } from '../../types/agriculture';

interface YearlyTableProps {
  data: YearlyAnalysis[];
}

export function YearlyAnalysisTable({ data }: YearlyTableProps) {
  return (
    <Paper>
      <Group mb="md">
        <ThemeIcon size="lg" variant="light" color="green">
          <IconChartBar size={20} />
        </ThemeIcon>
        <div>
          <Title order={2}>Yearly Production Analysis</Title>
          <Text c="dimmed" size="sm">Analysis of maximum and minimum crop production by year</Text>
        </div>
      </Group>
      
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Year</Table.Th>
            <Table.Th>Crop with Maximum Production</Table.Th>
            <Table.Th>Crop with Minimum Production</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {data.map((row) => (
            <Table.Tr key={row.year}>
              <Table.Td fw={500}>{row.year}</Table.Td>
              <Table.Td>{row.maxProductionCrop}</Table.Td>
              <Table.Td>{row.minProductionCrop}</Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </Paper>
  );
}