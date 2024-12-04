import { useMemo } from 'react';
import { analyzeYearlyData, analyzeCropData } from '../utils/dataAnalysis';
import { RawAgricultureData } from '../types/agriculture';
import { transformData } from '../utils/dataTransform';
import rawData from '../data/data.json';

export function useAgriculturalData() {
  const transformedData = useMemo(() => 
    transformData(rawData as RawAgricultureData[]), 
    []
  );

  const yearlyAnalysis = useMemo(() => 
    analyzeYearlyData(transformedData), 
    [transformedData]
  );

  const cropAnalysis = useMemo(() => 
    analyzeCropData(transformedData), 
    [transformedData]
  );

  return {
    yearlyAnalysis,
    cropAnalysis
  };
}