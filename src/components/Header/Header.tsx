import {
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Anchor,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
  useMantineTheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  IconChevronDown,
  IconLink,
  IconSchool,
  IconDatabase,
  IconWifi,
  IconRobot,
  IconExposure,
} from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import classes from './Header.module.css';

const mockdata = [
  {
    icon: IconLink,
    title: 'Linker',
    description: 'Link Shortner Web App with Link Analytics and User authentication.',
    link: 'https://github.com/anshgoyalevil/Linker',
  },
  {
    icon: IconSchool,
    title: 'LeCours',
    description: 'E-Learning Web App with Live Chat and Deep Learning',
    link: 'https://github.com/anshgoyalevil/lecours-e-learning-webapp',
  },
  {
    icon: IconDatabase,
    title: 'CodifyPlus CRM',
    description: 'Fully featured CRM for personal brand managemenet',
    link: 'https://github.com/anshgoyalevil/CodifyPlusCRM',
  },
  {
    icon: IconWifi,
    title: 'wifiGOD',
    description: 'Bash script to clear and renew DNS Cache',
    link: 'https://github.com/anshgoyalevil/wifiGOD',
  },
  {
    icon: IconExposure,
    title: 'Experience',
    description: 'An overview of my Open-Source Experience',
    link: 'https://github.com/anshgoyalevil/Experience',
  },
  {
    icon: IconRobot,
    title: 'TreeGPT',
    description: 'A GitHub File Tree Generator for GPT-3 and 4 Model',
    link: 'https://github.com/anshgoyalevil/TreeGPT',
  },
];

export function Header() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();

  const links = mockdata.map((item) => (
    <UnstyledButton
      component={Link}
      target="_blank"
      to={item.link}
      className={classes.subLink}
      key={item.title}
    >
      <Group wrap="nowrap" align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon style={{ width: rem(22), height: rem(22) }} color={theme.colors.blue[6]} />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
          <Text size="xs" c="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));

  return (
    <Box pb={0}>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <Text component={Link} to="/">Ansh&apos;s Portfolio</Text>

          <Group h="100%" gap={0} visibleFrom="sm">
            <Link to="/" className={classes.link}>
              Home
            </Link>
            <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
              <HoverCard.Target>
                <a href="#" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Projects
                    </Box>
                    <IconChevronDown
                      style={{ width: rem(16), height: rem(16) }}
                      color={theme.colors.blue[6]}
                    />
                  </Center>
                </a>
              </HoverCard.Target>

              <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
                <Group justify="space-between" px="md">
                  <Text fw={500}>Projects</Text>
                  <Anchor href="#" fz="xs">
                    View all
                  </Anchor>
                </Group>

                <Divider my="sm" />

                <SimpleGrid cols={2} spacing={0}>
                  {links}
                </SimpleGrid>

                <div className={classes.dropdownFooter}>
                  <Group justify="space-between">
                    <div>
                      <Text fw={500} fz="sm">
                        Visit GitHub
                      </Text>
                      <Text size="xs" c="dimmed">
                        50+ projects to solve some day-to-day life chores and problems
                      </Text>
                    </div>
                    <Button
                      target="_blank"
                      component={Link}
                      to="https://github.com/anshgoyalevil?tab=repositories"
                      variant="default"
                    >
                      Visit GitHub
                    </Button>
                  </Group>
                </div>
              </HoverCard.Dropdown>
            </HoverCard>
            <Link to="/timeline" className={classes.link}>
              Timeline
            </Link>
          </Group>

          <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />

          <Link onClick={closeDrawer} to="/" className={classes.link}>
            Home
          </Link>
          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                Projects
              </Box>
              <IconChevronDown
                style={{ width: rem(16), height: rem(16) }}
                color={theme.colors.blue[6]}
              />
            </Center>
          </UnstyledButton>
          <Collapse pl={15} pr={15} in={linksOpened}>{links}</Collapse>
          <Link to="/timeline" onClick={closeDrawer} className={classes.link}>
            Timeline
          </Link>

          <Divider my="sm" />
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
