import React from 'react';
import { Button, Column, Container, Font, Head, Heading, Hr, Html, Image, Link, Markdown, Preview, Section, Tailwind, Text } from '@react-email/components';

const ResponsiveEmailTemplate = () => {
  return (
    <Html>
      <Head>
        <Font name="Arial" source="https://fonts.googleapis.com/css?family=Arial" />
        <Tailwind />
      </Head>
      <Body>
        <Preview>Preview of the email content</Preview>
        <Container>
          <Section>
            <Heading level={1}>Welcome to Our Newsletter</Heading>
            <Text>Thank you for subscribing to our updates.</Text>
            <Hr />
            <Image src="https://example.com/banner.jpg" alt="Banner" />
            <Column>
              <Text>Discover our latest features:</Text>
              <Link href="https://example.com/features">Learn More</Link>
            </Column>
            <Button href="https://example.com/get-started">Get Started</Button>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default ResponsiveEmailTemplate;
```