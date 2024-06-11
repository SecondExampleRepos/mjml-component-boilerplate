import React from 'react';
import { Button, Column, Container, Font, Head, Heading, Hr, Html, Image, Link, Markdown, Preview, Section, Tailwind, Text } from '@react-email/components';

const MjmlConfigTemplate = () => {
  return (
    <Html>
      <Head>
        <Font href="https://fonts.googleapis.com/css?family=Roboto" />
      </Head>
      <Preview>This is a preview text</Preview>
      <Tailwind>
        <Container>
          <Section>
            <Column>
              <Heading>Welcome to Our Service</Heading>
              <Text>
                Hello, we are excited to have you on board. Please find the details below.
              </Text>
              <Hr />
              <Image src="https://via.placeholder.com/150" alt="Placeholder Image" />
              <Text>
                For more information, visit our <Link href="https://example.com">website</Link>.
              </Text>
              <Button href="https://example.com">Get Started</Button>
            </Column>
          </Section>
        </Container>
      </Tailwind>
    </Html>
  );
};

export default MjmlConfigTemplate;