import React from 'react';
import { Html, Head, Font, Container, Section, Column, Text } from '@react-email/components';

const StylesEmail = () => (
  <Html>
    <Head>
      <Font href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700" />
      <style type="text/css">
        {`
          #outlook a { padding: 0; }
          body { margin: 0; padding: 0; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
          table, td { border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
          img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; }
          p { display: block; margin: 13px 0; }
          @media only screen and (min-width:480px) {
            .mj-column-per-100 { width: 100% !important; max-width: 100%; }
          }
          .red-text div { color: red !important; text-decoration: underline !important; }
        `}
      </style>
    </Head>
    <body style={{ wordSpacing: 'normal' }}>
      <Container style={{ margin: '0px auto', maxWidth: '600px' }}>
        <Section>
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
    </body>
  </Html>
);

export default StylesEmail;