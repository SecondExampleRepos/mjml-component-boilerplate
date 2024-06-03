import React from 'react';
import { Button, Column, Container, Font, Head, Heading, Hr, Html, Image, Link, Markdown, Preview, Section, Tailwind, Text } from '@react-email/components';

const SocialEmail = () => (
  <Html>
    <Head>
      <Font href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700" />
    </Head>
    <Preview>Social Media Links</Preview>
    <Tailwind>
      <Container className="mx-auto max-w-lg">
        <Section className="text-center py-5">
          <Column className="w-full">
            <Text className="text-lg font-bold">Follow us on social media</Text>
            <Hr className="my-4" />
            <Section className="flex justify-center">
              <Column className="mx-2">
                <Link href="https://www.facebook.com/sharer/sharer.php?u=https://mjml.io/" target="_blank">
                  <Image src="https://www.mailjet.com/images/theme/v1/icons/ico-social/facebook.png" alt="Facebook" className="rounded" width="30" height="30" />
                  <Text className="text-sm">Facebook</Text>
                </Link>
              </Column>
              <Column className="mx-2">
                <Link href="https://plus.google.com/share?url=https://mjml.io/" target="_blank">
                  <Image src="https://www.mailjet.com/images/theme/v1/icons/ico-social/google-plus.png" alt="Google" className="rounded" width="30" height="30" />
                  <Text className="text-sm">Google</Text>
                </Link>
              </Column>
              <Column className="mx-2">
                <Link href="https://twitter.com/intent/tweet?url=https://mjml.io/" target="_blank">
                  <Image src="https://www.mailjet.com/images/theme/v1/icons/ico-social/twitter.png" alt="Twitter" className="rounded" width="30" height="30" />
                  <Text className="text-sm">Twitter</Text>
                </Link>
              </Column>
            </Section>
          </Column>
        </Section>
      </Container>
    </Tailwind>
  </Html>
);

export default SocialEmail;