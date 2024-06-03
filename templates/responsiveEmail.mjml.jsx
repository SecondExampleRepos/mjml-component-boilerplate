import React from 'react';
import { Button, Column, Container, Font, Head, Heading, Hr, Html, Image, Link, Markdown, Preview, Section, Tailwind, Text } from '@react-email/components';
const ResponsiveEmail = () => (
  <Html>
    <Head>
      <Font fontFamily="Arial" />
    </Head>
    <Preview>Responsive Email Template</Preview>
    <Tailwind>
      <Container>
        <Section>
          <Column>
            <Heading>Welcome to Our Service</Heading>
            <Text>
              We are excited to have you on board. Please find the details below.
            </Text>
            <Hr />
            <Image src="https://via.placeholder.com/150" alt="Placeholder Image" />
            <Text>
              Click the button below to get started:
            </Text>
            <Button href="https://example.com">Get Started</Button>
          </Column>
        </Section>
      </Container>
    </Tailwind>
  </Html>
);
export default ResponsiveEmail;