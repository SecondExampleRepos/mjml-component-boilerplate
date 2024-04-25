import React from 'react';
import { Button, Column, Container, Font, Head, Heading, Hr, Html, Image, Link, Markdown, Preview, Section, Tailwind, Text } from '@react-email/components';

const SocialEmailTemplate = () => {
  return (
    <Html>
      <Head>
        <Font name="Inter" href="https://fonts.googleapis.com/css?family=Inter" />
        <Tailwind />
      </Head>
      <Body>
        <Preview>Preview text for email clients</Preview>
        <Container>
          <Section>
            <Heading level={1}>Welcome to Our Newsletter</Heading>
            <Text>Thank you for subscribing to our updates.</Text>
            <Image src="https://example.com/banner.jpg" alt="Banner" />
            <Column>
              <Text>Stay tuned for our latest news.</Text>
              <Button href="https://example.com">Visit Us</Button>
            </Column>
            <Hr />
            <Link href="https://example.com/unsubscribe">Unsubscribe</Link>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default SocialEmailTemplate;