import React from 'react';
import { Button, Column, Container, Font, Head, Heading, Hr, Html, Image, Link, Markdown, Preview, Section, Tailwind, Text } from '@react-email/components';
const PreviewEmail = () => (
  <Html>
    <Head>
      <Font />
    </Head>
    <Preview>Preview Text</Preview>
    <Tailwind>
      <Container>
        <Section>
          <Column>
            <Heading>Welcome to Our Service</Heading>
            <Text>Thank you for joining us. We are excited to have you!</Text>
            <Button href="https://example.com">Get Started</Button>
          </Column>
        </Section>
        <Hr />
        <Section>
          <Column>
            <Text>If you have any questions, feel free to <Link href="mailto:support@example.com">contact our support team</Link>.</Text>
          </Column>
        </Section>
      </Container>
    </Tailwind>
  </Html>
);
export default PreviewEmail;