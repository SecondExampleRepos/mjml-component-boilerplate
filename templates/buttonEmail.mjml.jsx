import { Button, Column, Container, Font, Head, Heading, Hr, Html, Image, Link, Markdown, Preview, Section, Tailwind, Text } from '@react-email/components';
import React from 'react';
const ButtonEmail = () => (
  <Html>
    <Head>
      <Font />
    </Head>
    <Preview>Button Email</Preview>
    <Tailwind>
      <Container>
        <Section>
          <Column>
            <Heading>Welcome to Our Service</Heading>
            <Text>Click the button below to get started:</Text>
            <Button href="https://example.com">Get Started</Button>
          </Column>
        </Section>
        <Hr />
        <Section>
          <Column>
            <Text>If you have any questions, feel free to <Link href="mailto:support@example.com">contact us</Link>.</Text>
          </Column>
        </Section>
      </Container>
    </Tailwind>
  </Html>
);
export default ButtonEmail;