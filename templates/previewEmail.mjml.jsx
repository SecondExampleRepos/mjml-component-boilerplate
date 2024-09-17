import React from 'react';
import { Button, Column, Container, Font, Head, Heading, Hr, Html, Image, Link, Markdown, Preview, Section, Tailwind, Text } from '@react-email/components';

const PreviewEmail = () => {
  return (
    <Html lang="und" dir="auto">
      <Head>
        <title></title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
          `}
        </style>
      </Head>
      <body style={{ wordSpacing: 'normal' }}>
        <Preview>Hello MJML</Preview>
        <Container style={{ marginTop: '20px', maxWidth: '600px' }}>
          <Section>
            <Column width="100%">
              <Text style={{ fontFamily: 'Ubuntu, Helvetica, Arial, sans-serif', fontSize: '13px', lineHeight: '1', textAlign: 'left', color:'#000000' }}>
                Hello World!
              </Text>
            </Column>
          </Section>
        </Container>
      </body>
    </Html>
  );
};

export default PreviewEmail;
