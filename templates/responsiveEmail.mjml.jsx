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
          <Heading>Welcome to Our Service</Heading>
          <Text>
            Thank you for joining our service. We are excited to have you on board.
          </Text>
          <Button href="https://example.com">Get Started</Button>
        </Section>
        <Hr />
        <Section>
          <Column>
            <Image src="https://via.placeholder.com/150" alt="Placeholder Image" />
          </Column>
          <Column>
            <Text>
              If you have any questions, feel free to <Link href="https://example.com/contact">contact us</Link>.
            </Text>
          </Column>
        </Section>
      </Container>
    </Tailwind>
  </Html>
);
export default ResponsiveEmail;