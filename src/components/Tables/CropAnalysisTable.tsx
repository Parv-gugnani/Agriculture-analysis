import { Table, Paper, Title, Text, Group, ThemeIcon } from '@mantine/core';
import { IconPlant2 } from '@tabler/icons-react';
import { CropAnalysis } from '../../types/agriculture';
import React from 'react';

interface CropTableProps {
  data: CropAnalysis[];
}

export function CropAnalysisTable({ data }: CropTableProps) {
  return (
    <Paper>
      <Group mb="md">
        <ThemeIcon size="lg" variant="light" color="green">
          <IconPlant2 size={20} />
        </ThemeIcon>
        <div>
          <Title order={2}>Crop Analysis (1950-2020)</Title>
          <Text c="dimmed" size="sm">Average yield and cultivation area for each crop</Text>
        </div>
      </Group>
      
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Crop</Table.Th>
            <Table.Th>Average Yield</Table.Th>
            <Table.Th>Average Cultivation Area</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {data.map((row) => (
            <Table.Tr key={row.crop}>
              <Table.Td fw={500}>{row.crop}</Table.Td>
              <Table.Td>{row.averageYield.toFixed(3)} Kg/Ha</Table.Td>
              <Table.Td>{row.averageArea.toFixed(3)} Ha</Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </Paper>
  );
}