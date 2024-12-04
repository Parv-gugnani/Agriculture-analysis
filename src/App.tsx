import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { AppShell } from './components/Layout/AppShell';
import { YearlyAnalysisTable } from './components/Tables/YearlyAnalysisTable';
import { CropAnalysisTable } from './components/Tables/CropAnalysisTable';
import { useAgriculturalData } from './hooks/useAgriculturalData';
import { theme } from './theme';

export default function App() {
  const { yearlyAnalysis, cropAnalysis } = useAgriculturalData();

  return (
    <>
      <ColorSchemeScript />
      <MantineProvider theme={theme} defaultColorScheme="light">
        <AppShell>
          <YearlyAnalysisTable data={yearlyAnalysis} />
          <CropAnalysisTable data={cropAnalysis} />
        </AppShell>
      </MantineProvider>
    </>
  );
}