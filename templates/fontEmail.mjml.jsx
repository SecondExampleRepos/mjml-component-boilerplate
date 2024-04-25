import React from 'react';
import { Button, Column, Container, Font, Head, Heading, Hr, Html, Image, Link, Markdown, Preview, Section, Tailwind, Text } from '@react-email/components';

const EmailTemplate = () => {
  return (
    <Html>
      <Head>
        <Font name="Arial" href="https://fonts.googleapis.com/css?family=Arial" />
        <Tailwind />
      </Head>
      <Body>
        <Preview>Preview text here</Preview>
        <Container>
          <Section>
            <Heading level={1}>Welcome to Our Newsletter</Heading>
            <Text>Thank you for subscribing to our updates.</Text>
            <Image src="https://example.com/banner.jpg" alt="Banner" />
            <Hr />
            <Column>
              <Text>Find out more about our services:</Text>
              <Button href="https://example.com">Visit Us</Button>
            </Column>
            <Link href="https://example.com/unsubscribe">Unsubscribe</Link>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default EmailTemplate;
```