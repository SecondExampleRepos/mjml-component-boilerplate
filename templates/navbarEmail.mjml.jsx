import React from 'react';
import { Button, Column, Container, Font, Head, Heading, Hr, Html, Image, Link, Markdown, Preview, Section, Tailwind, Text } from '@react-email/components';

const NavbarEmail = () => {
  return (
    <Html lang="und" dir="auto">
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
            noinput.mj-menu-checkbox {
              display:block !important;
              max-height:none !important;
              visibility:visible !important;
            }
            @media only screen and (max-width:479px) {
              .mj-menu-checkbox[type="checkbox"]~.mj-inline-links {
                display:none !important;
              }
              .mj-menu-checkbox[type="checkbox"]:checked~.mj-inline-links,
              .mj-menu-checkbox[type="checkbox"]~.mj-menu-trigger {
                display:block !important;
                max-width:none !important;
                max-height:none !important;
                font-size:inherit !important;
              }
              .mj-menu-checkbox[type="checkbox"]~.mj-inline-links>a {
                display:block !important;
              }
              .mj-menu-checkbox[type="checkbox"]:checked~.mj-menu-trigger .mj-menu-icon-close {
                display:block !important;
              }
              .mj-menu-checkbox[type="checkbox"]:checked~.mj-menu-trigger .mj-menu-icon-open {
                display:none !important;
              }
            }
          `}
        </style>
      </Head>
      <body style={{ wordSpacing: 'normal' }}>
        <Container style={{ backgroundColor: '#ef6451', margin: '0 auto', maxWidth: '600px' }}>
          <Section style={{ backgroundColor: '#ef6451', width: '100%' }}>
            <Column style={{ width: '100%' }}>
              <div className="mj-inline-links" style={{ textAlign:'center' }}>
                <Link href="https://mjml.io/gettings-started-onboard" target="_blank" style={linkStyle}>Getting started</Link>
                <Link href="https://mjml.io/try-it-live" target="_blank" style={linkStyle}>Try it live</Link>
                <Link href="https://mjml.io/templates" target="_blank" style={linkStyle}>Templates</Link>
                <Link href="https://mjml.io/components" target="_blank" style={linkStyle}>Components</Link>
              </div>
            </Column>
          </Section>
        </Container>
      </body>
    </Html>
  );
};

const linkStyle = {
  display:'inline-block',
  color:'#ffffff',
  fontFamily:'Ubuntu, Helvetica, Arial, sans-serif',
  fontSize:'13px',
  fontWeight:'normal',
  lineHeight:'22px',
  textDecoration:'none',
  textTransform:'uppercase',
  padding:'15px 10px'
};

export default NavbarEmail;
