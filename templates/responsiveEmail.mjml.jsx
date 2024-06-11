import React from 'react';
import { Button, Column, Container, Font, Head, Heading, Hr, Html, Image, Link, Markdown, Preview, Section, Tailwind, Text } from '@react-email/components';

const ResponsiveEmail = () => (
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
            .mj-column-per-50 { width: 50% !important; max-width: 50%; }
          }
          @media only screen and (max-width:479px) {
            table.mj-full-width-mobile { width: 100% !important; }
            td.mj-full-width-mobile { width: auto !important; }
          }
        `}
      </style>
    </Head>
    <body style={{ wordSpacing: 'normal' }}>
      <Container style={{ margin: '0px auto', maxWidth: '600px' }}>
        <Section>
          <Column width="50%">
            <Image src="https://mjml.io/assets/img/easy-and-quick.png" alt="" width="137" height="185" style={{ border: 0, display: 'block', outline: 'none', textDecoration: 'none', height: '185px', width: '100%', fontSize: '13px' }} />
            <Text style={{ fontFamily: 'Ubuntu, Helvetica, Arial, sans-serif', fontSize: '13px', lineHeight: 1, textAlign: 'center', color: '#000000' }}>
              <Heading as="h2">Easy and quick</Heading>
              <p>Write less code, save time and code more efficiently with MJML’s semantic syntax.</p>
            </Text>
          </Column>
          <Column width="50%">
            <Image src="https://mjml.io/assets/img/responsive.png" alt="" width="166" height="185" style={{ border: 0, display: 'block', outline: 'none', textDecoration: 'none', height: '185px', width: '100%', fontSize: '13px' }} />
            <Text style={{ fontFamily: 'Ubuntu, Helvetica, Arial, sans-serif', fontSize: '13px', lineHeight: 1, textAlign: 'center', color: '#000000' }}>
              <Heading as="h2">Responsive</Heading>
              <p>MJML is responsive by design on most-popular email clients, even Outlook.</p>
            </Text>
          </Column>
        </Section>
      </Container>
    </body>
  </Html>
);

export default ResponsiveEmail;