import React from 'react';
import { Button, Column, Container, Font, Head, Heading, Hr, Html, Image, Link, Markdown, Preview, Section, Tailwind, Text } from '@react-email/components';

const ButtonEmailTemplate = () => {
  return (
    <Html>
      <Head>
        <Font name="Arial" source="https://fonts.googleapis.com/css?family=Arial" />
      </Head>
      <Body>
        <Container>
          <Section>
            <Column>
              <Heading level={1}>Welcome to Our Newsletter</Heading>
              <Text>Thank you for subscribing to our updates.</Text>
              <Button href="https://example.com">Visit Us</Button>
            </Column>
          </Section>
          <Hr />
          <Section>
            <Column>
              <Image src="https://example.com/logo.png" alt="Company Logo" width={200} />
              <Text>Stay connected with us for more updates.</Text>
              <Link href="https://example.com/unsubscribe">Unsubscribe</Link>
            </Column>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default ButtonEmailTemplate;