import { Table } from "@mantine/core";

interface CropAverage {
  crop: string;
  avgYield: string;
  avgArea: string;
}

const CropAverageTable = ({ data }: { data: CropAverage[] }) => (
  <Table>
    <thead>
      <tr>
        <th>Crop</th>
        <th>Average Yield</th>
        <th>Average Area</th>
      </tr>
    </thead>
    <tbody>
      {data.map((row) => (
        <tr key={row.crop}>
          <td>{row.crop}</td>
          <td>{row.avgYield}</td>
          <td>{row.avgArea}</td>
        </tr>
      ))}
    </tbody>
  </Table>
);

export default CropAverageTable;
