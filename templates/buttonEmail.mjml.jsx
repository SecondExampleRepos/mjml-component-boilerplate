import React from 'react';
import { Button, Column, Container, Head, Html, Section, Text } from '@react-email/components';
const ButtonEmail = () => (
  <Html>
    <Head />
    <Container style={{ margin: '0 auto', maxWidth: '600px' }}>
      <Section style={{ padding: '20px 0', textAlign: 'center' }}>
        <Column style={{ width: '100%' }}>
          <Section style={{ padding: '10px 25px' }}>
            <Button
              style={{
                backgroundColor: '#f45e43',
                borderRadius: '3px',
                color: 'white',
                fontFamily: 'Helvetica',
                fontSize: '13px',
                fontWeight: 'normal',
                lineHeight: '120%',
                padding: '10px 25px',
                textDecoration: 'none',
                textTransform: 'none',
              }}
            >
              Don't click me!
            </Button>
          </Section>
        </Column>
      </Section>
    </Container>
  </Html>
);
export default ButtonEmail;