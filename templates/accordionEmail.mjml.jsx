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
          <Heading>Accordion Email</Heading>
          <Hr />
          <Text>Here is an example of an accordion email template.</Text>
          <Button href="https://example.com">Click Me</Button>
        </Section>
      </Container>
    </Tailwind>
  </Html>
);
export default AccordionEmail;