import React from 'react';
import { Button, Column, Container, Font, Head, Heading, Hr, Html, Image, Link, Markdown, Preview, Section, Tailwind, Text } from '@react-email/components';
const CarouselEmail = () => (
  <Html>
    <Head>
      <Font fontFamily="Arial" />
    </Head>
    <Preview>Check out our latest updates!</Preview>
    <Tailwind>
      <Container>
        <Section>
          <Heading>Welcome to Our Newsletter</Heading>
          <Text>We are excited to share our latest updates with you.</Text>
        </Section>
        <Hr />
        <Section>
          <Column>
            <Image src="https://via.placeholder.com/150" alt="Image 1" />
            <Text>Image 1 Description</Text>
          </Column>
          <Column>
            <Image src="https://via.placeholder.com/150" alt="Image 2" />
            <Text>Image 2 Description</Text>
          </Column>
          <Column>
            <Image src="https://via.placeholder.com/150" alt="Image 3" />
            <Text>Image 3 Description</Text>
          </Column>
        </Section>
        <Hr />
        <Section>
          <Button href="https://example.com">Learn More</Button>
        </Section>
      </Container>
    </Tailwind>
  </Html>
);
export default CarouselEmail;