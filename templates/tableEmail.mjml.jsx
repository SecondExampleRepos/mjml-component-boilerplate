import React from 'react';
import { Html, Head, Font, Container, Section, Column, Text, Hr } from '@react-email/components';

const TableEmail = () => {
  return (
    <Html lang="und" dir="auto">
      <Head>
        <Font href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700" />
        <style type="text/css">
          {`
            body {
              margin: 0;
              padding: 0;
              -webkit-text-size-adjust: 100%;
              -ms-text-size-adjust: 100%;
            }
            table,
            td {
              border-collapse: collapse;
              mso-table-lspace: 0pt;
              mso-table-rspace: 0pt;
            }
            img {
              border: 0;
              height: auto;
              line-height: 100%;
              outline: none;
              text-decoration: none;
              -ms-interpolation-mode: bicubic;
            }
            p {
              display: block;
              margin: 13px 0;
            }
          `}
        </style>
      </Head>
      <body style={{ wordSpacing: 'normal' }}>
        <Container style={{ margin: '0px auto', maxWidth: '600px' }}>
          <Section>
            <Column style={{ width: '100%' }}>
              <Text style={{ fontSize: '13px', lineHeight: '22px', fontFamily: 'Ubuntu, Helvetica, Arial, sans-serif', color:'#000000' }}>
                <table width="100%" border="0" style={{ tableLayout: 'auto', width:'100%', border:'none' }}>
                  <thead>
                    <tr style={{ borderBottom:'1px solid #ecedee', textAlign:'left', padding:'15px 0' }}>
                      <th style={{ padding:'0 15px 0 0' }}>Year</th>
                      <th style={{ padding:'0 15px' }}>Language</th>
                      <th style={{ padding:'0 0 0 15px' }}>Inspired from</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ padding:'0 15px 0 0' }}>1995</td>
                      <td style={{ padding:'0 15px' }}>PHP</td>
                      <td style={{ padding:'0 0 0 15px' }}>C, Shell Unix</td>
                    </tr>
                    <tr>
                      <td style={{ padding:'0 15px 0 0' }}>1995</td>
                      <td style={{ padding:'0 15px' }}>JavaScript</td>
                      <td style={{ padding:'0 0 0 15px' }}>Scheme, Self</td>
                    </tr>
                  </tbody>
                </table>
              </Text>
            </Column>
          </Section>
        </Container>
      </body>
    </Html>
  );
};

export default TableEmail;
