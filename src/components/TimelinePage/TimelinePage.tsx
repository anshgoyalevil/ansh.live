import { Grid, Container, Timeline, Text, Center, Paper } from '@mantine/core';
import {
  IconGitBranch,
  IconGitCommit,
  IconGitPullRequest,
  IconMessageDots,
} from '@tabler/icons-react';
import classes from './TimelinePage.module.css';

export function TimelinePage() {
  return (
    <Container my="md" mt={100}>
      <Center>
        <Grid>
          <Grid.Col span={{ base: 12, xs: 12 }}>
            <Paper className={classes.glass_effect} shadow="xl" radius="md" p="xl">
              <Timeline radius="md" active={1} bulletSize={24} lineWidth={4} reverseActive>
                <Timeline.Item bullet={<IconGitBranch size={12} />} title="New branch">
                  <Text c="dimmed" size="sm">
                    You&apos;ve created new branch{' '}
                    <Text variant="link" component="span" inherit>
                      fix-notifications
                    </Text>{' '}
                    from master
                  </Text>
                  <Text size="xs" mt={4}>
                    2 hours ago
                  </Text>
                </Timeline.Item>

                <Timeline.Item bullet={<IconGitCommit size={12} />} title="Commits">
                  <Text c="dimmed" size="sm">
                    You&apos;ve pushed 23 commits to
                    <Text variant="link" component="span" inherit>
                      fix-notifications branch
                    </Text>
                  </Text>
                  <Text size="xs" mt={4}>
                    52 minutes ago
                  </Text>
                </Timeline.Item>

                <Timeline.Item
                  title="Pull request"
                  bullet={<IconGitPullRequest size={12} />}
                  lineVariant="dashed"
                >
                  <Text c="dimmed" size="sm">
                    You&apos;ve submitted a pull request
                    <Text variant="link" component="span" inherit>
                      Fix incorrect notification message (#187)
                    </Text>
                  </Text>
                  <Text size="xs" mt={4}>
                    34 minutes ago
                  </Text>
                </Timeline.Item>

                <Timeline.Item title="Code review" bullet={<IconMessageDots size={12} />}>
                  <Text c="dimmed" size="sm">
                    <Text variant="link" component="span" inherit>
                      Robert Gluesticker
                    </Text>{' '}
                    left a code review on your pull request
                  </Text>
                  <Text size="xs" mt={4}>
                    12 minutes ago
                  </Text>
                </Timeline.Item>
              </Timeline>
            </Paper>
          </Grid.Col>
        </Grid>
      </Center>
    </Container>
  );
}