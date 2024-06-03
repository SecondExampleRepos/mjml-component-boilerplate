import React from 'react';
import { Button, Column, Container, Font, Head, Heading, Hr, Html, Image, Link, Markdown, Preview, Section, Tailwind, Text } from '@react-email/components';

const SocialEmail = () => (
  <Html>
    <Head>
      <Font href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700" />
    </Head>
    <Preview>Social Media Links</Preview>
    <Tailwind>
      <Container style={{ margin: '0px auto', maxWidth: '600px' }}>
        <Section style={{ padding: '20px 0', textAlign: 'center' }}>
          <Column style={{ width: '100%' }}>
            <Section style={{ padding: '10px 25px' }}>
              <Link href="https://www.facebook.com/sharer/sharer.php?u=https://mjml.io/" target="_blank">
                <Image src="https://www.mailjet.com/images/theme/v1/icons/ico-social/facebook.png" alt="Facebook" height="30" width="30" style={{ borderRadius: '3px', display: 'block' }} />
              </Link>
              <Text style={{ color: '#333333', fontSize: '15px', fontFamily: 'Ubuntu, Helvetica, Arial, sans-serif', lineHeight: '22px', textDecoration: 'none' }}>
                <Link href="https://www.facebook.com/sharer/sharer.php?u=https://mjml.io/" target="_blank">Facebook</Link>
              </Text>
            </Section>
            <Section style={{ padding: '10px 25px' }}>
              <Link href="https://plus.google.com/share?url=https://mjml.io/" target="_blank">
                <Image src="https://www.mailjet.com/images/theme/v1/icons/ico-social/google-plus.png" alt="Google" height="30" width="30" style={{ borderRadius: '3px', display: 'block' }} />
              </Link>
              <Text style={{ color: '#333333', fontSize: '15px', fontFamily: 'Ubuntu, Helvetica, Arial, sans-serif', lineHeight: '22px', textDecoration: 'none' }}>
                <Link href="https://plus.google.com/share?url=https://mjml.io/" target="_blank">Google</Link>
              </Text>
            </Section>
            <Section style={{ padding: '10px 25px' }}>
              <Link href="https://twitter.com/intent/tweet?url=https://mjml.io/" target="_blank">
                <Image src="https://www.mailjet.com/images/theme/v1/icons/ico-social/twitter.png" alt="Twitter" height="30" width="30" style={{ borderRadius: '3px', display: 'block' }} />
              </Link>
              <Text style={{ color: '#333333', fontSize: '15px', fontFamily: 'Ubuntu, Helvetica, Arial, sans-serif', lineHeight: '22px', textDecoration: 'none' }}>
                <Link href="https://twitter.com/intent/tweet?url=https://mjml.io/" target="_blank">Twitter</Link>
              </Text>
            </Section>
          </Column>
        </Section>
      </Container>
    </Tailwind>
  </Html>
);

export default SocialEmail;