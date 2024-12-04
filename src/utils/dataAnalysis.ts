import { CropData, YearlyAnalysis, CropAnalysis } from '../types/agriculture';

export function analyzeYearlyData(data: CropData[]): YearlyAnalysis[] {
  const yearlyData = new Map<number, CropData[]>();
  
  // Handle missing values as 0
  const sanitizedData = data.map(entry => ({
    ...entry,
    Production: entry.Production || 0,
    Area: entry.Area || 0,
    Yield: entry.Yield || 0
  }));

  // Group data by year
  sanitizedData.forEach(entry => {
    if (!yearlyData.has(entry.Year)) {
      yearlyData.set(entry.Year, []);
    }
    yearlyData.get(entry.Year)?.push(entry);
  });

  return Array.from(yearlyData.entries())
    .map(([year, crops]) => {
      const productionData = crops.map(crop => ({
        crop: crop.Crop,
        production: crop.Production
      }));

      const maxProduction = productionData.reduce((max, curr) => 
        curr.production > max.production ? curr : max
      );

      const minProduction = productionData.reduce((min, curr) => 
        curr.production < min.production ? curr : min
      );

      return {
        year,
        maxProductionCrop: maxProduction.crop,
        minProductionCrop: minProduction.crop
      };
    })
    .sort((a, b) => a.year - b.year);
}

export function analyzeCropData(data: CropData[]): CropAnalysis[] {
  const cropData = new Map<string, { yields: number[], areas: number[] }>();
  
  // Handle missing values as 0 and group by crop
  data.forEach(entry => {
    if (!cropData.has(entry.Crop)) {
      cropData.set(entry.Crop, { yields: [], areas: [] });
    }
    const stats = cropData.get(entry.Crop);
    if (stats) {
      stats.yields.push(entry.Yield || 0);
      stats.areas.push(entry.Area || 0);
    }
  });

  return Array.from(cropData.entries())
    .map(([crop, stats]) => ({
      crop,
      averageYield: calculateAverage(stats.yields),
      averageArea: calculateAverage(stats.areas)
    }))
    .sort((a, b) => a.crop.localeCompare(b.crop));
}

function calculateAverage(numbers: number[]): number {
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b, 0);
  return Number((sum / numbers.length).toFixed(3));
}