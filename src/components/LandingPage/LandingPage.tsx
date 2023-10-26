import { Title, Text, Button, Container } from '@mantine/core';
import classes from './LandingPage.module.css';

export function LandingPage() {
  return (
    <Container className={classes.wrapper} size={1400}>

      <div className={classes.inner}>
        <Title className={classes.title}>
          Hola Amigos!{' '}
          <Text component="span" className={classes.highlight} inherit>
            Welcome
          </Text>{' '}
          to my website
        </Title>

        <Container p={0} size={600}>
          <Text size="lg" c="dimmed" className={classes.description}>
            This is my personal portfolio website designed as a part of showcasing my journey till
            now.
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button className={classes.control} size="lg" variant="default" color="gray">
            Projects
          </Button>
          <Button className={classes.control} size="lg">
            Timeline
          </Button>
        </div>
      </div>
    </Container>
  );
}
