import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import { useState, useEffect } from "react";
import Papa from "papaparse";
import YearlyTable from "./components/YearlyTable";
import CropAverageTable from "./components/CropAverageTable";
import { getCropAverages, getYearlyMaxMin, Row } from "./utils/dataProcessing";

export default function App() {
  interface YearlyData {
    year: string;
    maxCrop: string;
    minCrop: string;
  }

  interface CropAverage {
    crop: string;
    avgYield: string;
    avgArea: string;
  }

  const [yearlyData, setYearlyData] = useState<YearlyData[]>([]);
  const [cropData, setCropData] = useState<CropAverage[]>([]);

  useEffect(() => {
    Papa.parse<Row>("/data.csv", {
      download: true,
      header: true,
      complete: (result) => {
        const data = result.data as Row[];
        setYearlyData(getYearlyMaxMin(data));
        setCropData(getCropAverages(data));
      },
    });
  }, []);

  return (
    <MantineProvider theme={theme}>
      <div style={{ padding: "20px" }}>
        <h1>Yearly Max/Min Crops</h1>
        <YearlyTable data={yearlyData} />

        <h1>Crop Averages</h1>
        <CropAverageTable data={cropData} />
      </div>
    </MantineProvider>
  );
}
