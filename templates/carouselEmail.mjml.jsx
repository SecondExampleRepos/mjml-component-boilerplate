import React from 'react';
import { Button, Column, Container, Font, Head, Heading, Hr, Html, Image, Link, Markdown, Preview, Section, Tailwind, Text } from '@react-email/components';
const CarouselEmail = () => (
  <Html>
    <Head>
      <Font />
    </Head>
    <Preview>Check out our latest products!</Preview>
    <Tailwind>
      <Container>
        <Section>
          <Heading>Our Latest Products</Heading>
          <Hr />
          <Column>
            <Image src="https://via.placeholder.com/150" alt="Product 1" />
            <Text>Product 1 Description</Text>
            <Button href="https://example.com/product1">Buy Now</Button>
          </Column>
          <Column>
            <Image src="https://via.placeholder.com/150" alt="Product 2" />
            <Text>Product 2 Description</Text>
            <Button href="https://example.com/product2">Buy Now</Button>
          </Column>
          <Column>
            <Image src="https://via.placeholder.com/150" alt="Product 3" />
            <Text>Product 3 Description</Text>
            <Button href="https://example.com/product3">Buy Now</Button>
          </Column>
        </Section>
      </Container>
    </Tailwind>
  </Html>
);
export default CarouselEmail;