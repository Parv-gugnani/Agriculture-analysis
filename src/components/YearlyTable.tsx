import { Table } from "@mantine/core";

interface YearlyData {
  year: string;
  maxCrop: string;
  minCrop: string;
}

const YearlyTable = ({ data }: { data: YearlyData[] }) => (
  <Table>
    <thead>
      <tr>
        <th>Year</th>
        <th>Max Crop</th>
        <th>Min Crop</th>
      </tr>
    </thead>
    <tbody>
      {data.map((row) => (
        <tr key={row.year}>
          <td>{row.year}</td>
          <td>{row.maxCrop}</td>
          <td>{row.minCrop}</td>
        </tr>
      ))}
    </tbody>
  </Table>
);

export default YearlyTable;
