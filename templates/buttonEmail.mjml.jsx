import React from 'react';
import { Button, Column, Container, Font, Head, Heading, Hr, Html, Image, Link, Markdown, Preview, Section, Tailwind, Text } from '@react-email/components';
const ButtonEmail = () => (
  <Html>
    <Head>
      <Font />
    </Head>
    <Preview>Don't click me!</Preview>
    <Tailwind>
      <Container>
        <Section>
          <Column>
            <Button
              pX={25}
              pY={10}
              backgroundColor="#f45e43"
              color="white"
              borderRadius={3}
              href="#"
            >
              Don't click me!
            </Button>
          </Column>
        </Section>
      </Container>
    </Tailwind>
  </Html>
);
export default ButtonEmail;