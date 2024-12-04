export interface RawAgricultureData {
  Country: string;
  Year: string;
  "Crop Name": string;
  "Crop Production (UOM:t(Tonnes))": string | number;
  "Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))": string | number;
  "Area Under Cultivation (UOM:Ha(Hectares))": string | number;
}

export interface CropData {
  Year: number;
  Crop: string;
  Production: number;
  Yield: number;
  Area: number;
}

export interface YearlyAnalysis {
  year: number;
  maxProductionCrop: string;
  minProductionCrop: string;
}

export interface CropAnalysis {
  crop: string;
  averageYield: number;
  averageArea: number;
}