import React from 'react';
import { Html, Head, Font, Container, Section, Column, Text } from '@react-email/components';

const HelloWorldEmail = () => {
  return (
    <Html lang="und" dir="auto">
      <Head>
        <Font
          fontFamily="Arial"
          fallbackFontFamily="sans-serif"
          webFont={{
            url: 'https://fonts.googleapis.com/css?family=Arial',
            format: 'woff2',
          }}
        />
      </Head>
      <body style={{ margin: 0, padding: 0, wordSpacing: 'normal' }}>
        <Container style={{ maxWidth: '600px', margin: '0 auto' }}>
          <Section>
            <Column>
              <Text style={{ fontFamily: 'Arial', fontSize: '20px', lineHeight: 1, textAlign: 'left', color: 'blue' }}>
                Hello World!
              </Text>
            </Column>
          </Section>
        </Container>
      </body>
    </Html>
  );
};

export default HelloWorldEmail;
