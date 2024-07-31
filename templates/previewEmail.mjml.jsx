﻿import React from 'react';
import { Html, Head, Font, Container, Section, Column, Text } from '@react-email/components';

const PreviewEmail = () => (
  <Html lang="und" dir="auto">
    <Head>
      <title></title>
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <style type="text/css">
        {`
          #outlook a { padding: 0; }
          body { margin: 0; padding: 0; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
          table, td { border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
          img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; }
          p { display: block; margin: 13px 0; }
        `}
      </style>
      <style type="text/css">
        {`
          @media only screen and (min-width:480px) {
            .mj-column-per-100 { width: 100% !important; max-width: 100%; }
          }
        `}
      </style>
      <style media="screen and (min-width:480px)">
        {`
          .moz-text-html .mj-column-per-100 { width: 100% !important; max-width: 100%; }
        `}
      </style>
      <Font href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700" />
    </Head>
    <body style={{ wordSpacing: 'normal' }}>
      <div style={{ display: 'none', fontSize: '1px', color: '#ffffff', lineHeight: '1px', maxHeight: '0px', maxWidth: '0px', opacity: 0, overflow: 'hidden' }}>
        Hello MJML
      </div>
      <Container style={{ margin: '0px auto', maxWidth: '600px' }}>
        <Section>
          <Column style={{ fontSize: '0px', textAlign: 'left', direction: 'ltr', display: 'inline-block', verticalAlign: 'top', width: '100%' }}>
            <Text style={{ fontFamily: 'Ubuntu, Helvetica, Arial, sans-serif', fontSize: '13px', lineHeight: '1', textAlign: 'left', color: '#000000', padding: '10px 25px' }}>
              Hello World!
            </Text>
          </Column>
        </Section>
      </Container>
    </body>
  </Html>
);

export default PreviewEmail;
