import { Center, Container, Group, Paper, SimpleGrid, Text, Title } from '@mantine/core';
import {
  IconPackage,
  IconGitCommit,
  IconGitPullRequest,
  IconGitCherryPick,
} from '@tabler/icons-react';
import classes from './OpenSourceStats.module.css';

const icons = {
  user: IconGitCherryPick,
  discount: IconGitPullRequest,
  package: IconPackage,
  commit: IconGitCommit,
};

const data = [
  { title: 'Repositories', icon: 'package', value: '127+', diff: 34 },
  { title: 'Commits', icon: 'commit', value: '2818+', diff: -13 },
  { title: 'Pull Requests', icon: 'discount', value: '144+', diff: 18 },
  { title: 'Issues', icon: 'user', value: '128+', diff: -30 },
] as const;

export function OpenSourceStats() {
  const stats = data.map((stat) => {
    const Icon = icons[stat.icon];

    return (
      <Paper withBorder p="md" radius="md" key={stat.title}>
        <Group justify="space-between">
          <Text size="xs" c="dimmed" className={classes.title}>
            {stat.title}
          </Text>
          <Icon className={classes.icon} size="1.4rem" stroke={1.5} />
        </Group>

        <Group align="flex-end" gap="xs" mt={25}>
          <Text className={classes.value}>{stat.value}</Text>
        </Group>
      </Paper>
    );
  });
  return (
    <>
      <Container className={classes.wrapper} size={1400}>
        <Center>
          <Title pb={0} className={classes.heading}>
            Some Open Source Stats
          </Title>
        </Center>
        <div className={classes.root}>
          <SimpleGrid cols={{ base: 1, xs: 2, md: 4 }}>{stats}</SimpleGrid>
        </div>
      </Container>
    </>
  );
}
