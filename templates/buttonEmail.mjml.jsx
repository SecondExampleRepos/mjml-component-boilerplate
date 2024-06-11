import React from 'react';
import { Button, Column, Container, Head, Html, Section, Text } from '@react-email/components';

const ButtonEmail = () => (
  <Html>
    <Head>
      <style type="text/css">
        {`
          body {
            margin: 0;
            padding: 0;
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
          }
          table, td {
            border-collapse: collapse;
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
          }
          img {
            border: 0;
            height: auto;
            line-height: 100%;
            outline: none;
            text-decoration: none;
            -ms-interpolation-mode: bicubic;
          }
          p {
            display: block;
            margin: 13px 0;
          }
        `}
      </style>
    </Head>
    <body style={{ wordSpacing: 'normal' }}>
      <Container style={{ margin: '0 auto', maxWidth: '600px' }}>
        <Section style={{ padding: '20px 0', textAlign: 'center' }}>
          <Column style={{ width: '100%', display: 'inline-block', verticalAlign: 'top' }}>
            <Section style={{ padding: '10px 25px', wordBreak: 'break-word' }}>
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
            </Section>
          </Column>
        </Section>
      </Container>
    </body>
  </Html>
);

export default ButtonEmail;