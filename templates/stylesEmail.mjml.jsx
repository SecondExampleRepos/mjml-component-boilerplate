import React from 'react';
import { Button, Column, Container, Font, Head, Heading, Hr, Html, Image, Link, Markdown, Preview, Section, Tailwind, Text } from '@react-email/components';

const EmailTemplate = () => {
  return (
    <Html>
      <Head>
        <Tailwind />
      </Head>
      <Body>
        <Preview>Special Offer Just For You!</Preview>
        <Container>
          <Section>
            <Heading level={1}>Welcome to Our Newsletter</Heading>
            <Text>Get ready for exclusive updates and offers directly to your inbox.</Text>
            <Hr />
            <Image src="https://example.com/banner.jpg" alt="Banner Image" />
            <Column>
              <Text>Check out our latest products:</Text>
              <Link href="https://example.com/product1">Product 1</Link>
              <Link href="https://example.com/product2">Product 2</Link>
            </Column>
            <Button href="https://example.com/subscribe">Subscribe Now</Button>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default EmailTemplate;
```