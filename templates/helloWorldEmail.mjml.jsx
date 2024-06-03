import { Html, Head, Font, Preview, Tailwind, Container, Section, Column, Text } from '@react-email/components';

const HelloWorldEmail = () => (
  <Html>
    <Head>
      <Font fontFamily="Arial" />
    </Head>
    <Preview>Hello World Email</Preview>
    <Tailwind>
      <Container>
        <Section>
          <Column>
            <Text style={{ fontFamily: 'Arial', fontSize: '20px', lineHeight: '1', textAlign: 'left', color: 'blue' }}>
              Hello World!
            </Text>
          </Column>
        </Section>
      </Container>
    </Tailwind>
  </Html>
);

export default HelloWorldEmail;