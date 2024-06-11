import React from 'react';
import { Button, Column, Container, Font, Head, Heading, Hr, Html, Image, Link, Markdown, Preview, Section, Tailwind, Text } from '@react-email/components';

const HeroEmail = () => {
  return (
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
          `}
        </style>
      </Head>
      <body style={{ wordSpacing: 'normal' }}>
        <Container style={{ margin: '0 auto', maxWidth: '600px' }}>
          <Section style={{ background: '#2a3448 url(https://cloud.githubusercontent.com/assets/1830348/15354890/1442159a-1cf0-11e6-92b1-b861dadf1750.jpg) no-repeat center center / cover', padding: '100px 0', height: '269px' }}>
            <Column>
              <Heading style={{ fontFamily: 'Helvetica', fontSize: '45px', fontWeight: '900', lineHeight: '45px', textAlign: 'center', color: '#ffffff' }}>
                GO TO SPACE
              </Heading>
              <Button href="https://mjml.io/" style={{ background: '#414141', color: '#ffffff', fontFamily: 'Ubuntu, Helvetica, Arial, sans-serif', fontSize: '13px', fontWeight: 'normal', lineHeight: '120%', margin: '0', textDecoration: 'none', textTransform: 'none', padding: '10px 25px', borderRadius: '3px' }}>
                ORDER YOUR TICKET NOW
              </Button>
            </Column>
          </Section>
        </Container>
      </body>
    </Html>
  );
};

export default HeroEmail;