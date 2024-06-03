import React from 'react';
import { Html, Head, Font, Container, Section, Column, Text, Link } from '@react-email/components';
const NavbarEmail = () => (
  <Html>
    <Head>
      <Font href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700" />
    </Head>
    <Container style={{ backgroundColor: '#ef6451', margin: '0 auto', maxWidth: '600px' }}>
      <Section>
        <Column>
          <Text style={{ textAlign: 'center', padding: '20px 0' }}>
            <div style={{ display: 'inline-block', verticalAlign: 'top', width: '100%' }}>
              <div style={{ display: 'none', maxHeight: '0px', maxWidth: '0px', fontSize: '0px', overflow: 'hidden' }}>
                <label style={{ display: 'block', cursor: 'pointer', color: '#ffffff', fontSize: '30px', fontFamily: 'Ubuntu, Helvetica, Arial, sans-serif', textTransform: 'uppercase', textDecoration: 'none', lineHeight: '30px', padding: '10px', textAlign: 'center' }}>
                  <span> &#9776; </span>
                  <span style={{ display: 'none' }}> &#8855; </span>
                </label>
              </div>
              <div>
                <Link href="https://mjml.io/gettings-started-onboard" style={{ display: 'inline-block', color: '#ffffff', fontFamily: 'Ubuntu, Helvetica, Arial, sans-serif', fontSize: '13px', fontWeight: 'normal', lineHeight: '22px', textDecoration: 'none', textTransform: 'uppercase', padding: '15px 10px' }}> Getting started </Link>
                <Link href="https://mjml.io/try-it-live" style={{ display: 'inline-block', color: '#ffffff', fontFamily: 'Ubuntu, Helvetica, Arial, sans-serif', fontSize: '13px', fontWeight: 'normal', lineHeight: '22px', textDecoration: 'none', textTransform: 'uppercase', padding: '15px 10px' }}> Try it live </Link>
                <Link href="https://mjml.io/templates" style={{ display: 'inline-block', color: '#ffffff', fontFamily: 'Ubuntu, Helvetica, Arial, sans-serif', fontSize: '13px', fontWeight: 'normal', lineHeight: '22px', textDecoration: 'none', textTransform: 'uppercase', padding: '15px 10px' }}> Templates </Link>
                <Link href="https://mjml.io/components" style={{ display: 'inline-block', color: '#ffffff', fontFamily: 'Ubuntu, Helvetica, Arial, sans-serif', fontSize: '13px', fontWeight: 'normal', lineHeight: '22px', textDecoration: 'none', textTransform: 'uppercase', padding: '15px 10px' }}> Components </Link>
              </div>
            </div>
          </Text>
        </Column>
      </Section>
    </Container>
  </Html>
);
export default NavbarEmail;