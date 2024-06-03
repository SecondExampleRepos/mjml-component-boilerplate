import React from 'react';
import { Button, Column, Container, Font, Head, Heading, Hr, Html, Image, Link, Markdown, Preview, Section, Tailwind, Text } from '@react-email/components';
const FontEmail = () => (
  <Html>
    <Head>
      <Font href="https://fonts.googleapis.com/css?family=Raleway" />
    </Head>
    <Preview>Hello World!</Preview>
    <Tailwind>
      <Container style={{ margin: '0 auto', maxWidth: '600px' }}>
        <Section style={{ padding: '20px 0', textAlign: 'center' }}>
          <Column style={{ width: '100%', textAlign: 'left', padding: '10px 25px' }}>
            <Text style={{ fontFamily: 'Raleway, Arial', fontSize: '13px', lineHeight: '1', color: '#000000' }}>
              Hello World!
            </Text>
          </Column>
        </Section>
      </Container>
    </Tailwind>
  </Html>
);
export default FontEmail;