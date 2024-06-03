import { Button, Column, Container, Font, Head, Heading, Hr, Html, Image, Link, Markdown, Preview, Section, Tailwind, Text } from '@react-email/components';
import * as React from 'react';

const HelloWorldEmail = () => (
  <Html>
    <Head />
    <Preview>Hello World Email</Preview>
    <Tailwind>
      <Container>
        <Section>
          <Column>
            <Text style={{ fontFamily: 'Arial', fontSize: '20px', lineHeight: '1', textAlign: 'left', color: 'blue' }}>
              Hello World!
            </Text>
          </Column>
        </Section>
      </Container>
    </Tailwind>
  </Html>
);

export default HelloWorldEmail;