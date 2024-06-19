import React from 'react';
import { Html, Head, Font, Container, Section, Column, Button, Text } from '@react-email/components';

const ButtonEmail = () => (
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
          @media only screen and (min-width:480px) {
            .mj-column-per-100 { width: 100% !important; max-width: 100%; }
          }
          .moz-text-html .mj-column-per-100 { width: 100% !important; max-width: 100%; }
        `}
      </style>
    </Head>
    <body style={{ wordSpacing: 'normal' }}>
      <Container style={{ margin: '0px auto', maxWidth: '600px' }}>
        <Section style={{ width: '100%' }}>
          <Column style={{ width: '100%' }}>
            <Text align="center" style={{ fontSize: '0px', padding: '20px 0', textAlign: 'center' }}>
              <Button
                pX={25}
                pY={10}
                style={{
                  backgroundColor: '#f45e43',
                  borderRadius: '3px',
                  color: 'white',
                  fontFamily: 'Helvetica',
                  fontSize: '13px',
                  fontWeight: 'normal',
                  lineHeight: '120%',
                  textDecoration: 'none',
                  textTransform: 'none',
                  display: 'inline-block',
                  cursor: 'auto',
                }}
              >
                Don't click me!
              </Button>
            </Text>
          </Column>
        </Section>
      </Container>
    </body>
  </Html>
);

export default ButtonEmail;