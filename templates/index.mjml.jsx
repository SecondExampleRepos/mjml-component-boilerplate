import React from 'react';
import { Button, Column, Container, Font, Head, Heading, Hr, Html, Image, Link, Markdown, Preview, Section, Tailwind, Text } from '@react-email/components';

const IndexTemplate = () => (
  <Html>
    <Head>
      <title></title>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
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
    </Head>
    <body style={{ wordSpacing: 'normal' }}>
      <div style={{ margin: '0px auto', maxWidth: '600px' }}>
        <Container>
          <Section>
            <Column width="100%">

              <Text>
                This is the content for the first component, mj-basic-component.
        <Container>
          <Section>

        <Container>
          <Section>
            <Column width="100%">
              <Image src="https://via.placeholder.com/600x200" alt="Placeholder Image" width="600" height="200" style={{ display: 'block', margin: '0 auto' }} />
              <Text style={{ textAlign: 'center', margin: '20px 0' }}>
                This is a placeholder text for the second component, mj-image-text.
              </Text>
            </Column>
          </Section>

        <Container>
          <Section>
            <Column width="100%">
              <Heading style={{ textAlign: 'center', margin: '20px 0' }}>Welcome to Our Newsletter</Heading>
              <Text style={{ textAlign: 'center', margin: '20px 0' }}>
                This is a placeholder text for the third component, mj-layout. Here you can add more detailed information or layout elements as needed.
              </Text>
            </Column>
          </Section>
              <Image src="https://via.placeholder.com/600x200" alt="Placeholder Image" width="600" height="200" style={{ display: 'block', margin: '0 auto' }} />
              <Text style={{ textAlign: 'center', margin: '20px 0' }}>
                This is a placeholder text for the second component, mj-image-text.
              </Text>
            </Column>
          </Section>

        <Container>
          <Section>
            <Column width="100%">
              <Text style={{ textAlign: 'center', margin: '20px 0' }}>
                This is a placeholder text for the third component, mj-layout.
              </Text>
            </Column>
          </Section>
        </Container>

        <Container>
          <Section>
            <Column width="100%">
              <Image src="https://via.placeholder.com/600x200" alt="Placeholder Image" width="600" height="200" style={{ display: 'block', margin: '0 auto' }} />
              <Text style={{ textAlign: 'center', margin: '20px 0' }}>
                This is a placeholder text for the second component, mj-image-text.
              </Text>
            </Column>
          </Section>

        <Container>
          <Section>
            <Column width="100%">
              <Heading style={{ textAlign: 'center', margin: '20px 0' }}>Welcome to Our Newsletter</Heading>
              <Text style={{ textAlign: 'center', margin: '20px 0' }}>
                This is a placeholder text for the third component, mj-layout. Here you can add more detailed information or layout elements as needed.
              </Text>
            </Column>
          </Section>
            <Column width="100%">
              <Image src="https://via.placeholder.com/600x200" alt="Placeholder Image" width="600" height="200" style={{ display: 'block', margin: '0 auto' }} />
              <Text style={{ textAlign: 'center', margin: '20px 0' }}>
                This is a placeholder text for the second component, mj-image-text.
              </Text>
            </Column>
          </Section>

        <Container>
          <Section>
            <Column width="100%">
              <Heading style={{ textAlign: 'center', margin: '20px 0' }}>Welcome to Our Newsletter</Heading>
              <Text style={{ textAlign: 'center', margin: '20px 0' }}>
                This is a placeholder text for the third component, mj-layout. Here you can add more detailed information or layout elements as needed.
              </Text>
            </Column>
          </Section>

          <Section>
            <Column width="100%">
              <Heading style={{ textAlign: 'center', margin: '20px 0' }}>Thank You for Reading</Heading>
              <Text style={{ textAlign: 'center', margin: '20px 0' }}>
                We hope you enjoyed this edition of our newsletter. Stay tuned for more updates and exciting content in the next issue.
              </Text>
              <Button href="https://example.com" style={{ display: 'block', margin: '20px auto', textAlign: 'center' }}>
                Visit Our Website
              </Button>
            </Column>
    </body>
  </Html>
);

export default IndexTemplate;
