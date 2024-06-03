import React from 'react';
import { Button, Column, Container, Font, Head, Heading, Hr, Html, Image, Link, Markdown, Preview, Section, Tailwind, Text } from '@react-email/components';
const AccordionEmail = () => (
  <Html>
    <Head>
      <Font fontFamily="Arial, sans-serif" />
    </Head>
    <Preview>Accordion Email Preview</Preview>
    <Tailwind>
      <Container>
        <Section>
          <Column>
            <Heading>Accordion Email</Heading>
            <Text>Welcome to our accordion email template.</Text>
            <Hr />
            <Button href="https://example.com">Click Me</Button>
          </Column>
        </Section>
      </Container>
    </Tailwind>
  </Html>
);
export default AccordionEmail;