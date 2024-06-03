import React from 'react';
import { Button, Column, Container, Font, Head, Heading, Hr, Html, Image, Link, Markdown, Preview, Section, Tailwind, Text } from '@react-email/components';
const PreviewEmail = () => (
  <Html>
    <Head>
      <Font href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700" />
    </Head>
    <Preview>Hello MJML</Preview>
    <Tailwind>
      <Container style={{ margin: '0 auto', maxWidth: '600px' }}>
        <Section style={{ padding: '20px 0', textAlign: 'center' }}>
          <Column style={{ width: '100%', textAlign: 'left', padding: '10px 25px' }}>
            <Text style={{ fontFamily: 'Ubuntu, Helvetica, Arial, sans-serif', fontSize: '13px', lineHeight: '1', color: '#000000' }}>
              Hello World!
            </Text>
          </Column>
        </Section>
      </Container>
    </Tailwind>
  </Html>
);
export default PreviewEmail;