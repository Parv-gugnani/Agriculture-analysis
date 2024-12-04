import { AppShell as MantineAppShell, Container, Title, Stack, Group, Text } from '@mantine/core';
import { ReactNode } from 'react';

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <MantineAppShell>
      <MantineAppShell.Header bg="green.6" c="white">
        <Container size="lg" py="md">
          <Group justify="space-between">
            <div>
              <Title order={1} c="white">Indian Agriculture Data Analysis</Title>
              <Text c="gray.1" size="sm">National Data and Analytics Platform, NITI Aayog</Text>
            </div>
          </Group>
        </Container>
      </MantineAppShell.Header>

      <MantineAppShell.Main pt={90} pb={40} bg="gray.0">
        <Container size="lg">
          <Stack gap="xl">
            {children}
          </Stack>
        </Container>
      </MantineAppShell.Main>
    </MantineAppShell>
  );
}