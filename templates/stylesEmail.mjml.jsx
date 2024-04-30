import React from 'react';
import { Button, Column, Container, Font, Head, Heading, Hr, Html, Image, Link, Markdown, Preview, Section, Tailwind, Text } from '@react-email/components';

const EmailTemplate = () => {
  return (
    <Html>
      <Head>
        <Tailwind />
      </Head>
      <Body>
        <Preview>Preview text here</Preview>
        <Container>
          <Section>
            <Heading level={1}>Welcome to Our Newsletter</Heading>
            <Text>Thank you for subscribing to our newsletter.</Text>
            <Image src="https://example.com/newsletter-image.jpg" alt="Newsletter" />
            <Hr />
            <Column>
              <Text>Stay tuned for updates.</Text>
              <Button href="https://example.com/unsubscribe">Unsubscribe</Button>
            </Column>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default EmailTemplate;