import React from 'react';
import { Button, Column, Container, Font, Head, Heading, Hr, Html, Image, Link, Markdown, Preview, Section, Tailwind, Text } from '@react-email/components';

const HelloWorldEmail = () => {
  return (
    <Html>
      <Head>
        <Font name="Arial" source="https://fonts.googleapis.com/css?family=Arial" />
        <Tailwind />
      </Head>
      <Body>
        <Preview>Preview text for email clients</Preview>
        <Container>
          <Section>
            <Heading level={1}>Hello World!</Heading>
            <Text>Welcome to our newsletter.</Text>
            <Hr />
            <Text>This is a simple example of an email built with React Email components.</Text>
            <Button href="https://example.com">Visit our website</Button>
          </Section>
          <Image src="https://example.com/logo.png" alt="Company Logo" />
          <Link href="https://example.com/unsubscribe">Unsubscribe</Link>
        </Container>
      </Body>
    </Html>
  );
};

export default HelloWorldEmail;