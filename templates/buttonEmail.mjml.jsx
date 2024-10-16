import React from 'react';
import { Button, Column, Container, Head, Html, Section, Text } from '@react-email/components';

const ButtonEmailTemplate = () => {
  return (
    <Html lang="und" dir="auto">
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
          <Section>
            <Column width="100%">
              <Text align="center" style={{ padding: '20px 0' }}>
                <Button
                  style={{
                    backgroundColor: '#f45e43',
                    border: 'none',
                    borderRadius: '3px',
                    color: 'white',
                    display: 'inline-block',
                    fontFamily: 'Helvetica',
                    fontSize: '13px',
                    fontWeight: 'normal',
                    lineHeight: '120%',
                    margin: '0',
                    padding: '10px 25px',
                    textDecoration: 'none',
                    textTransform: 'none',
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
};

export default ButtonEmailTemplate;
