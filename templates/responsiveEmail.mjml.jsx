import React from 'react';
import { Button, Column, Container, Font, Head, Heading, Hr, Html, Image, Link, Markdown, Preview, Section, Tailwind, Text } from '@react-email/components';
const ResponsiveEmailTemplate = () => {
  return (
    <Html>
      <Head>
        <Tailwind />
      </Head>
      <Body>
        <Preview>Preview text for email clients</Preview>
        <Container>
          <Section>
            <Heading level={1}>Welcome to Our Newsletter</Heading>
            <Text>Thank you for subscribing to our newsletter. Here's what you can expect...</Text>
            <Hr />
            <Column>
              <Image src="https://example.com/banner.jpg" alt="Banner Image" />
            </Column>
            <Column>
              <Text>We have exciting news to share!</Text>
              <Button href="https://example.com/read-more">Read More</Button>
            </Column>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};
export default ResponsiveEmailTemplate;