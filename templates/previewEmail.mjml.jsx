import React from 'react';
import { Button, Column, Container, Font, Head, Heading, Hr, Html, Image, Link, Markdown, Preview, Section, Tailwind, Text } from '@react-email/components';

const PreviewEmailTemplate = () => {
  return (
    <Html>
      <Head>
        <Tailwind />
      </Head>
      <Body>
        <Container>
          <Section>
            <Heading level={1}>Welcome to Our Newsletter</Heading>
            <Text>Thank you for subscribing to our updates.</Text>
            <Image src="https://example.com/banner.jpg" alt="Banner" />
            <Column>
              <Text>Stay tuned for more news.</Text>
              <Button href="https://example.com/unsubscribe">Unsubscribe</Button>
            </Column>
            <Hr />
            <Link href="https://example.com">Visit our website</Link>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default PreviewEmailTemplate;