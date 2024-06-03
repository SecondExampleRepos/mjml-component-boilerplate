import React from 'react';
import { Button, Column, Container, Font, Head, Heading, Hr, Html, Image, Link, Markdown, Preview, Section, Tailwind, Text } from '@react-email/components';
const IndexMjmlTemplate = () => (
  <Html>
    <Head>
      <Font />
    </Head>
    <Preview>Preview text here</Preview>
    <Tailwind>
      <Container>
        <Section>
          <Column>
            <Heading>Welcome to Our Service</Heading>
            <Text>
              This is a sample email template using react-email components.
            </Text>
            <Button href="https://example.com">Click Here</Button>
          </Column>
        </Section>
        <Hr />
        <Section>
          <Column>
            <Text>
              For more information, visit our <Link href="https://example.com">website</Link>.
            </Text>
          </Column>
        </Section>
      </Container>
    </Tailwind>
  </Html>
);
export default IndexMjmlTemplate;