import React from 'react';
import { Button, Column, Container, Font, Head, Heading, Html, Image, Link, Section, Text } from '@react-email/components';

const HeroEmail = () => (
  <Html lang="und" dir="auto">
    <Head>
      <Font href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700" />
    </Head>
    <body style={{ wordSpacing: 'normal', margin: 0, padding: 0 }}>
      <Container style={{ margin: '0 auto', maxWidth: '600px' }}>
        <Section
          style={{
            backgroundColor: '#2a3448',
            backgroundImage: "url('https://cloud.githubusercontent.com/assets/1830348/15354890/1442159a-1cf0-11e6-92b1-b861dadf1750.jpg')",
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            padding: '100px 0px',
            height: '269px',
          }}
        >
          <Column>
            <Heading style={{ fontFamily: 'Helvetica', fontSize: '45px', fontWeight: 900, lineHeight: '45px', textAlign: 'center', color: '#ffffff' }}>
              GO TO SPACE
            </Heading>
            <Button
              href="https://mjml.io/"
              style={{
                display: 'inline-block',
                backgroundColor: '#414141',
                color: '#ffffff',
                fontFamily: 'Ubuntu, Helvetica, Arial, sans-serif',
                fontSize: '13px',
                lineHeight: '120%',
                textDecoration: 'none',
                textTransform: 'none',
                padding: '10px 25px',
                borderRadius: '3px',
              }}
              target="_blank"
            >
              ORDER YOUR TICKET NOW
            </Button>
          </Column>
        </Section>
      </Container>
    </body>
  </Html>
);

export default HeroEmail;
