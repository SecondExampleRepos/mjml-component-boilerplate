import React from 'react';
import { Html, Head, Font, Container, Section, Column, Text } from '@react-email/components';

const HelloWorldEmail = () => {
  return (
    <Html>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style type="text/css">
          {`
            #outlook a { padding: 0; }
            body { margin: 0; padding: 0; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
            table, td { border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
            img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; }
            p { display: block; margin: 13px 0; }
          `}
        </style>
        <style type="text/css">
          {`
            @media only screen and (min-width:480px) {
              .mj-column-per-100 { width: 100% !important; max-width: 100%; }
            }
          `}
        </style>
        <style media="screen and (min-width:480px)">
          {`
            .moz-text-html .mj-column-per-100 { width: 100% !important; max-width: 100%; }
          `}
        </style>
      </Head>
      <body style={{ wordSpacing: 'normal' }}>
        <Container style={{ margin: '0px auto', maxWidth: '600px' }}>
          <Section>
            <Column style={{ fontSize: '0px', textAlign: 'left', direction: 'ltr', display: 'inline-block', verticalAlign: 'top', width: '100%' }}>
              <Text style={{ fontFamily: 'Arial', fontSize: '20px', lineHeight: '1', textAlign: 'left', color: 'blue' }}>
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