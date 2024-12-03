export interface Row {
  year: string;
  crop: string;
  production: string;
  area: string;
}

export const getYearlyMaxMin = (data: Row[]) => {
  const yearlyData = {};
  data.forEach((row) => {
    const year = row.year;
    const production = parseFloat(row.production || "0");
    if (!yearlyData[year]) {
      yearlyData[year] = { maxCrop: row.crop, minCrop: row.crop, max: production, min: production };
    } else {
      if (production > yearlyData[year].max) {
        yearlyData[year].max = production;
        yearlyData[year].maxCrop = row.crop;
      }
      if (production < yearlyData[year].min) {
        yearlyData[year].min = production;
        yearlyData[year].minCrop = row.crop;
      }
    }
  });

  return Object.entries(yearlyData).map(([year, { maxCrop, minCrop }]) => ({
    year,
    maxCrop,
    minCrop,
  }));
};

export const getCropAverages = (data: Row[]) => {
  const cropData = {};
  data.forEach((row) => {
    const crop = row.crop;
    const production = parseFloat(row.production || "0");
    const area = parseFloat(row.area || "0");

    if (!cropData[crop]) {
      cropData[crop] = { totalProduction: production, totalArea: area, count: 1 };
    } else {
      cropData[crop].totalProduction += production;
      cropData[crop].totalArea += area;
      cropData[crop].count += 1;
    }
  });

  return Object.entries(cropData).map(([crop, { totalProduction, totalArea, count }]) => ({
    crop,
    avgYield: (totalProduction / count).toFixed(3),
    avgArea: (totalArea / count).toFixed(3),
  }));
};
