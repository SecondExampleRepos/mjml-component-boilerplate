import { Button, Column, Container, Font, Head, Heading, Hr, Html, Image, Link, Markdown, Preview, Section, Tailwind, Text } from '@react-email/components';
import React from 'react';
const SocialEmail = () => (
  <Html>
    <Head>
      <Font />
    </Head>
    <Preview>Social Media Notification</Preview>
    <Tailwind>
      <Container>
        <Section>
          <Column>
            <Heading>Welcome to Our Social Media Platform</Heading>
            <Text>Hi there,</Text>
            <Text>We are excited to have you on board. Stay tuned for updates and notifications.</Text>
            <Button href="https://www.example.com">Visit our website</Button>
          </Column>
        </Section>
        <Hr />
        <Section>
          <Column>
            <Text>Follow us on:</Text>
            <Link href="https://www.facebook.com">Facebook</Link>
            <Link href="https://www.twitter.com">Twitter</Link>
            <Link href="https://www.instagram.com">Instagram</Link>
          </Column>
        </Section>
      </Container>
    </Tailwind>
  </Html>
);
export default SocialEmail;