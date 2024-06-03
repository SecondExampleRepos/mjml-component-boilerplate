import React from 'react';
import { Button, Column, Container, Font, Head, Heading, Hr, Html, Image, Link, Markdown, Preview, Section, Tailwind, Text } from '@react-email/components';

const HeroEmail = () => (
  <Html>
    <Head>
      <Font href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700" />
    </Head>
    <Preview>GO TO SPACE</Preview>
    <Tailwind>
      <Container>
        <Section style={{ backgroundImage: 'url(https://cloud.githubusercontent.com/assets/1830348/15354890/1442159a-1cf0-11e6-92b1-b861dadf1750.jpg)', backgroundSize: 'cover', padding: '100px 0', textAlign: 'center' }}>
          <Heading style={{ fontFamily: 'Helvetica', fontSize: '45px', fontWeight: '900', color: '#ffffff' }}>GO TO SPACE</Heading>
          <Button href="https://mjml.io/" style={{ backgroundColor: '#414141', color: '#ffffff', fontFamily: 'Ubuntu, Helvetica, Arial, sans-serif', fontSize: '13px', padding: '10px 25px', borderRadius: '3px', textDecoration: 'none' }}>
            ORDER YOUR TICKET NOW
          </Button>
        </Section>
      </Container>
    </Tailwind>
  </Html>
);

export default HeroEmail;