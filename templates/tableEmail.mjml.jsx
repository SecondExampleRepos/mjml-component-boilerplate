import React from 'react';
import { Button, Column, Container, Font, Head, Heading, Hr, Html, Image, Link, Markdown, Preview, Section, Tailwind, Text } from '@react-email/components';
const TableEmail = () => (
  <Html>
    <Head>
      <Font />
    </Head>
    <Preview>Table Email Preview</Preview>
    <Tailwind>
      <Container>
        <Section>
          <Heading>Table Email</Heading>
          <Hr />
          <Text>This is a sample table email template.</Text>
          <Section>
            <Column>
              <Text>Column 1</Text>
            </Column>
            <Column>
              <Text>Column 2</Text>
            </Column>
          </Section>
          <Button href="https://example.com">Click Me</Button>
        </Section>
      </Container>
    </Tailwind>
  </Html>
);
export default TableEmail;