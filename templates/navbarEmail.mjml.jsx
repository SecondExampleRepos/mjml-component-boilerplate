import React from 'react';
import { Button, Column, Container, Font, Head, Heading, Hr, Html, Image, Link, Markdown, Preview, Section, Tailwind, Text } from '@react-email/components';
const NavbarEmail = () => (
  <Html>
    <Head>
      <Font fontFamily="Arial" />
    </Head>
    <Preview>Check out our new features</Preview>
    <Tailwind>
      <Container>
        <Section>
          <Column>
            <Image src="https://example.com/logo.png" alt="Company Logo" width="100" height="50" />
          </Column>
          <Column>
            <Link href="https://example.com">Home</Link>
            <Link href="https://example.com/about">About</Link>
            <Link href="https://example.com/services">Services</Link>
            <Link href="https://example.com/contact">Contact</Link>
          </Column>
        </Section>
        <Hr />
        <Section>
          <Heading>Welcome to Our Newsletter</Heading>
          <Text>We are excited to share our latest updates with you.</Text>
          <Button href="https://example.com">Learn More</Button>
        </Section>
      </Container>
    </Tailwind>
  </Html>
);
export default NavbarEmail;