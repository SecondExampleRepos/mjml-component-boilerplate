﻿import React from 'react';
import { Button, Column, Container, Font, Head, Heading, Hr, Html, Image, Link, Markdown, Preview, Section, Tailwind, Text } from '@react-email/components';

const SocialEmail = () => (
  <Html lang="und" dir="auto">
    <Head>
      <title></title>
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
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
          .moz-text-html .mj-column-per-100 { width: 100% !important; max-width: 100%; }
        `}
      </style>
    </Head>
    <body style={{ wordSpacing: 'normal' }}>
      <Container style={{ margin: '0px auto', maxWidth: '600px' }}>
        <Section style={{ direction: 'ltr', fontSize: '0px', padding: '20px 0', textAlign: 'center' }}>
          <Column style={{ fontSize: '0px', textAlign: 'left', direction: 'ltr', display: 'inline-block', verticalAlign: 'top', width: '100%' }}>
            <Section style={{ fontSize: '0px', padding: '10px 25px', wordBreak: 'break-word' }}>
              <Container style={{ display: 'inline-table', float: 'none' }}>
                <Section style={{ padding: '4px', verticalAlign: 'middle' }}>
                  <Container style={{ background: '#3b5998', borderRadius: '3px', width: '30px' }}>
                    <Link href="https://www.facebook.com/sharer/sharer.php?u=https://mjml.io/" target="_blank">
                      <Image alt="" height="30" src="https://www.mailjet.com/images/theme/v1/icons/ico-social/facebook.png" style={{ borderRadius: '3px', display: 'block' }} width="30" />
                    </Link>
                  </Container>
                  <Link href="https://www.facebook.com/sharer/sharer.php?u=https://mjml.io/" style={{ color: '#333333', fontSize: '15px', fontFamily: 'Ubuntu, Helvetica, Arial, sans-serif', lineHeight: '22px', textDecoration: 'none' }} target="_blank">
                    Facebook
                  </Link>
                </Section>
                <Section style={{ padding: '4px', verticalAlign: 'middle' }}>
                  <Container style={{ background: '#dc4e41', borderRadius: '3px', width: '30px' }}>
                    <Link href="https://plus.google.com/share?url=https://mjml.io/" target="_blank">
                      <Image alt="" height="30" src="https://www.mailjet.com/images/theme/v1/icons/ico-social/google-plus.png" style={{ borderRadius: '3px', display: 'block' }} width="30" />
                    </Link>
                  </Container>
                  <Link href="https://plus.google.com/share?url=https://mjml.io/" style={{ color: '#333333', fontSize: '15px', fontFamily: 'Ubuntu, Helvetica, Arial, sans-serif', lineHeight: '22px', textDecoration: 'none' }} target="_blank">
                    Google
                  </Link>
                </Section>
                <Section style={{ padding: '4px', verticalAlign: 'middle' }}>
                  <Container style={{ background: '#55acee', borderRadius: '3px', width: '30px' }}>
                    <Link href="https://twitter.com/intent/tweet?url=https://mjml.io/" target="_blank">
                      <Image alt="" height="30" src="https://www.mailjet.com/images/theme/v1/icons/ico-social/twitter.png" style={{ borderRadius: '3px', display: 'block' }} width="30" />
                    </Link>
                  </Container>
                  <Link href="https://twitter.com/intent/tweet?url=https://mjml.io/" style={{ color: '#333333', fontSize: '15px', fontFamily: 'Ubuntu, Helvetica, Arial, sans-serif', lineHeight: '22px', textDecoration: 'none' }} target="_blank">
                    Twitter
                  </Link>
                </Section>
              </Container>
            </Section>
          </Column>
        </Section>
      </Container>
    </body>
  </Html>
);

export default SocialEmail;
