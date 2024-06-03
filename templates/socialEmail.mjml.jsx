import React from 'react';
import { Button, Column, Container, Font, Head, Heading, Hr, Html, Image, Link, Markdown, Preview, Section, Tailwind, Text } from '@react-email/components';
const SocialEmail = () => (
  <Html>
    <Head>
      <Font href="https://fonts.googleapis.com/css?family=Roboto" />
    </Head>
    <Preview>Social Media Notification</Preview>
    <Tailwind>
      <Container>
        <Section>
          <Column>
            <Heading>New Social Media Notification</Heading>
            <Text>Hello, you have a new notification!</Text>
            <Hr />
            <Image src="https://via.placeholder.com/150" alt="Notification Image" />
            <Text>Check out the latest updates on your social media account.</Text>
            <Button href="https://www.example.com">View Notification</Button>
          </Column>
        </Section>
      </Container>
    </Tailwind>
  </Html>
);
export default SocialEmail;