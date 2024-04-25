import React from 'react';
import { Button, Column, Container, Font, Head, Heading, Hr, Html, Image, Link, Markdown, Preview, Section, Tailwind, Text } from '@react-email/components';

const HelloWorldEmail = () => {
  return (
    <Html>
      <Head>
        <Preview>Hello World Preview</Preview>
        <Tailwind />
      </Head>
      <Body>
        <Container>
          <Section>
            <Heading level={1}>Hello World!</Heading>
            <Text>Welcome to our newsletter.</Text>
            <Hr />
            <Image src="https://example.com/welcome-image.jpg" alt="Welcome" />
            <Text>Stay tuned for more updates.</Text>
            <Button href="https://example.com/get-started">Get Started</Button>
            <Link href="https://example.com/unsubscribe">Unsubscribe</Link>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default HelloWorldEmail;