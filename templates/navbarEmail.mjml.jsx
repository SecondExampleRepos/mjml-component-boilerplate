import React from 'react';
import { Button, Column, Container, Font, Head, Heading, Hr, Html, Image, Link, Markdown, Preview, Section, Tailwind, Text } from '@react-email/components';
const NavbarEmail = () => (
  <Html>
    <Head>
      <Font />
    </Head>
    <Preview>Preview text</Preview>
    <Tailwind>
      <Container>
        <Section>
          <Column>
            <Image src="logo.png" alt="Logo" />
          </Column>
          <Column>
            <Link href="https://example.com">Home</Link>
            <Link href="https://example.com/about">About</Link>
            <Link href="https://example.com/contact">Contact</Link>
          </Column>
        </Section>
        <Hr />
        <Section>
          <Heading>Welcome to Our Service</Heading>
          <Text>
            Thank you for joining us. We are excited to have you on board.
          </Text>
          <Button href="https://example.com/get-started">Get Started</Button>
        </Section>
      </Container>
    </Tailwind>
  </Html>
);
export default NavbarEmail;