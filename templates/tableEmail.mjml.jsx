import React from 'react';
import { Button, Column, Container, Font, Head, Heading, Hr, Html, Image, Link, Markdown, Preview, Section, Tailwind, Text } from '@react-email/components';

const TableEmail = () => (
  <Html>
    <Head>
      <Font href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700" />
    </Head>
    <Preview>Programming Languages Table</Preview>
    <Tailwind>
      <Container style={{ margin: '0 auto', maxWidth: '600px' }}>
        <Section style={{ padding: '20px 0', textAlign: 'center' }}>
          <Column style={{ width: '100%' }}>
            <Text style={{ fontFamily: 'Ubuntu, Helvetica, Arial, sans-serif', fontSize: '13px', lineHeight: '22px', color: '#000000' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid #ecedee', textAlign: 'left', padding: '15px 0' }}>
                    <th style={{ padding: '0 15px 0 0' }}>Year</th>
                    <th style={{ padding: '0 15px' }}>Language</th>
                    <th style={{ padding: '0 0 0 15px' }}>Inspired from</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: '0 15px 0 0' }}>1995</td>
                    <td style={{ padding: '0 15px' }}>PHP</td>
                    <td style={{ padding: '0 0 0 15px' }}>C, Shell Unix</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '0 15px 0 0' }}>1995</td>
                    <td style={{ padding: '0 15px' }}>JavaScript</td>
                    <td style={{ padding: '0 0 0 15px' }}>Scheme, Self</td>
                  </tr>
                </tbody>
              </table>
            </Text>
          </Column>
        </Section>
      </Container>
    </Tailwind>
  </Html>
);

export default TableEmail;