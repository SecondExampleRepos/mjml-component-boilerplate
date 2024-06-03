import React from 'react';
import { Button, Column, Container, Font, Head, Heading, Hr, Html, Image, Link, Markdown, Preview, Section, Tailwind, Text } from '@react-email/components';
const NavbarEmail = () => (
  <Html>
    <Head>
      <Font fontFamily="Arial" />
    </Head>
    <Preview>Preview text for the email</Preview>
    <Tailwind>
      <Container>
        <Section>
          <Column>
            <Heading>Welcome to Our Service</Heading>
            <Text>Thank you for joining us. We are excited to have you!</Text>
            <Hr />
            <Button href="https://example.com">Get Started</Button>
          </Column>
        </Section>
      </Container>
    </Tailwind>
  </Html>
);
export default NavbarEmail;