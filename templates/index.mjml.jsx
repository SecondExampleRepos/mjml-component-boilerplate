import React from 'react';
import { Html, Head, Font, Container, Section, Column, Text } from '@react-email/components';

const IndexTemplate = () => {
  return (
    <Html>
      <Head>
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
            @media only screen and (min-width:480px) {
              .mj-column-per-100 { width: 100% !important; max-width: 100%; }
            }
            .moz-text-html .mj-column-per-100 { width: 100% !important; max-width: 100%; }
          `}
        </style>
        <Font />
      </Head>
      <body style={{ wordSpacing: 'normal' }}>
        <Container style={{ margin: '0px auto', maxWidth: '600px' }}>
          <Section>
            <Column style={{ width: '100%' }}>
              <Text>

                Welcome to our email template! This is the content for the first component, mj-basic-component.
              </Text>
              </Text>
            </Column>
          

            <Column style={{ width: '100%' }}>
          

            <Container style={{ margin: '0px auto', maxWidth: '600px' }}>
              <Text>
                {/* Content for the third component, mj-layout */}
                This is the content for the third component, mj-layout. You can add more details or components here as needed.
              </Text>
            </Container>
          </Section>
                {/* Content for the second component, mj-image-text */}
                <img src="https://via.placeholder.com/600x200" alt="Placeholder Image" style={{ width: '100%', height: 'auto' }} />
                <p style={{ margin: '13px 0', textAlign: 'center' }}>This is a placeholder text below the image.</p>
              </Text>
            </Column>
          </Section>
          <Section>

            <Column style={{ width: '100%' }}>
              <Image src="https://via.placeholder.com/600x200" alt="Placeholder Image" style={{ width: '100%', height: 'auto' }} />
          

            <Container style={{ margin: '0px auto', maxWidth: '600px' }}>
              <Text>
                {/* Content for the second component, mj-image-text */}
                <img src="https://via.placeholder.com/600x200" alt="Placeholder Image" style={{ width: '100%', height: 'auto' }} />
                <p style={{ margin: '13px 0', textAlign: 'center' }}>This is a placeholder text below the image.</p>
              </Text>
            </Container>
          </Section>
                This is a placeholder text below the image.
              </Text>
            </Column>
          </Section>
          </Section>
          <Section>
          

            <Column style={{ width: '100%' }}>
              <Text>
                This is the content for the third component, mj-layout. You can add more details or components here as needed.
              </Text>
            </Column>
          </Section>
          </Section>
        </Container>
      </body>
    </Html>
  );
};

export default IndexTemplate;