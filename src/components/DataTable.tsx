import { Table } from '@mantine/core';
import { YearlyAnalysis, CropAnalysis } from '../types/agriculture';

interface YearlyTableProps {
  data: YearlyAnalysis[];
}

interface CropTableProps {
  data: CropAnalysis[];
}

export function YearlyTable({ data }: YearlyTableProps) {
  return (
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
            <Table.Td>{row.year}</Table.Td>
            <Table.Td>{row.maxProductionCrop}</Table.Td>
            <Table.Td>{row.minProductionCrop}</Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
}

export function CropTable({ data }: CropTableProps) {
  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Crop</Table.Th>
          <Table.Th>Average Yield (1950-2020)</Table.Th>
          <Table.Th>Average Cultivation Area (1950-2020)</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {data.map((row) => (
          <Table.Tr key={row.crop}>
            <Table.Td>{row.crop}</Table.Td>
            <Table.Td>{row.averageYield}</Table.Td>
            <Table.Td>{row.averageArea}</Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
}