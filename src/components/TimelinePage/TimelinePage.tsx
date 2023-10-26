import { Grid, Container, Timeline, Text, Center, Paper, Button } from '@mantine/core';
import {
  IconDeviceLaptop,
  IconGoGame,
  IconLink,
  IconShoppingBag,
  IconSkull,
} from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import classes from './TimelinePage.module.css';

export function TimelinePage() {
  return (
    <Container my="md" mt={60}>
      <Center>
        <Text
          mr={2}
          ta="center"
          mb={40}
          size="xl"
          fw={900}
          variant="gradient"
          gradient={{ from: 'orange', to: 'grape', deg: 221 }}
        >
          My Journey in Reverse Chronological Order
        </Text>
      </Center>
      <Center>
        <Grid>
          <Grid.Col span={{ base: 12, xs: 12 }}>
            <Paper className={classes.glass_effect} shadow="xl" radius="md" p="xl">
              <Timeline radius="md" active={4} bulletSize={24} lineWidth={4} reverseActive>
                <Timeline.Item
                  bullet={<IconGoGame size={12} />}
                  title="Started Game Development with Unity"
                  lineVariant="dashed"
                >
                  <Text c="dimmed" size="sm">
                    Started developing some cool 3d games with Unity <br /> Game Development Engine
                  </Text>
                  <Text c="dimmed" size="sm">
                    <Center inline>
                      Wanna try one?&nbsp;&nbsp;{' '}
                      <Button
                        size="compact-xs"
                        variant="light"
                        component={Link}
                        rightSection={<IconLink size={15} />}
                        target="_blank"
                        to="https://drive.google.com/file/d/1FjlCDEO6BbbN_Kmz3l38BYXaHSCIq1Xz/view?usp=sharing"
                      >
                        Download
                      </Button>
                    </Center>
                  </Text>
                  <Text size="xs" mt={4}>
                    2017 (Grade 8)
                  </Text>
                </Timeline.Item>

                <Timeline.Item
                  bullet={<IconShoppingBag size={12} />}
                  title="Started an eCommerce Store"
                  lineVariant="dashed"
                >
                  <Text c="dimmed" size="sm">
                    Started an eCommerce Store with WordPress and <br />
                    WooCommerce
                  </Text>
                  <Text size="xs" mt={4}>
                    2017 (Grade 7)
                  </Text>
                </Timeline.Item>

                <Timeline.Item
                  title="Started Learning Ethical Hacking"
                  bullet={<IconSkull size={12} />}
                  lineVariant="dashed"
                >
                  <Text size="xs" mt={4}>
                    2014 (Grade 5)
                  </Text>
                </Timeline.Item>

                <Timeline.Item
                  title="Started with a Computer"
                  bullet={<IconDeviceLaptop size={12} />}
                >
                  <Text size="xs" mt={4}>
                    2010 (Grade 1)
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
