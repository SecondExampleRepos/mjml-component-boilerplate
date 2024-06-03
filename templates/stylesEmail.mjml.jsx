import React from 'react';
import { Button, Column, Container, Font, Head, Heading, Hr, Html, Image, Link, Markdown, Preview, Section, Tailwind, Text } from '@react-email/components';
const EmailTemplate = () => (
  <Html>
    <Head>
      <Font href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700" />
      <style>
        {`
          .red-text div {
            color: red !important;
            text-decoration: underline !important;
          }
        `}
      </style>
    </Head>
    <Preview>I'm red and underlined</Preview>
    <Tailwind>
      <Container style={{ margin: '0 auto', maxWidth: '600px' }}>
        <Section style={{ padding: '20px 0', textAlign: 'center' }}>
          <Column style={{ width: '100%' }}>
            <Text className="red-text" style={{ fontFamily: 'Ubuntu, Helvetica, Arial, sans-serif', fontSize: '13px', lineHeight: '1', textAlign: 'left', color: '#000000', padding: '10px 25px' }}>
              I'm red and underlined
            </Text>
            <Text style={{ fontFamily: 'Ubuntu, Helvetica, Arial, sans-serif', fontSize: '13px', lineHeight: '1', textAlign: 'left', color: 'blue', padding: '10px 25px' }}>
              I'm blue because of inline
            </Text>
            <Text style={{ fontFamily: 'Ubuntu, Helvetica, Arial, sans-serif', fontSize: '30px', lineHeight: '1', textAlign: 'left', color: 'green', padding: '10px 25px' }}>
              I'm green
            </Text>
          </Column>
        </Section>
      </Container>
    </Tailwind>
  </Html>
);
export default EmailTemplate;