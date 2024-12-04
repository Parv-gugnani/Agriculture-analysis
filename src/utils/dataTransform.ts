import { RawAgricultureData, CropData } from '../types/agriculture';

export function transformData(rawData: RawAgricultureData[]): CropData[] {
  return rawData.map(entry => {
    // Extract year from "Financial Year (Apr - Mar), YYYY" format
    const yearMatch = entry.Year.match(/\d{4}/);
    const year = yearMatch ? parseInt(yearMatch[0]) : 0;

    // Convert empty strings to 0 and handle string/number conversion
    const production = entry["Crop Production (UOM:t(Tonnes))"] === "" ? 0 : 
      Number(entry["Crop Production (UOM:t(Tonnes))"]);
    const yield_ = entry["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"] === "" ? 0 : 
      Number(entry["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"]);
    const area = entry["Area Under Cultivation (UOM:Ha(Hectares))"] === "" ? 0 : 
      Number(entry["Area Under Cultivation (UOM:Ha(Hectares))"]);

    return {
      Year: year,
      Crop: entry["Crop Name"],
      Production: production,
      Yield: yield_,
      Area: area
    };
  }).filter(entry => entry.Year !== 0); // Remove entries with invalid years
}