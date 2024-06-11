import React from 'react';
import { Html, Head, Font, Container, Section, Column, Text, Image } from '@react-email/components';

const AccordionEmail = () => {
  return (
    <Html>
      <Head>
        <Font href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,500,700" />
        <Font href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" />
        <Font href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700" />
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
            .mj-accordion-checkbox { display: block !important; }
            @media yahoo, only screen and (min-width:0) {
              .mj-accordion-element { display: block; }
              input.mj-accordion-checkbox, .mj-accordion-less { display: none !important; }
              input.mj-accordion-checkbox+* .mj-accordion-title { cursor: pointer; touch-action: manipulation; -webkit-user-select: none; -moz-user-select: none; user-select: none; }
              input.mj-accordion-checkbox+* .mj-accordion-content { overflow: hidden; display: none; }
              input.mj-accordion-checkbox+* .mj-accordion-more { display: block !important; }
              input.mj-accordion-checkbox:checked+* .mj-accordion-content { display: block; }
              input.mj-accordion-checkbox:checked+* .mj-accordion-more { display: none !important; }
              input.mj-accordion-checkbox:checked+* .mj-accordion-less { display: block !important; }
            }
            .moz-text-html input.mj-accordion-checkbox+* .mj-accordion-title { cursor: auto; touch-action: auto; -webkit-user-select: auto; -moz-user-select: auto; user-select: auto; }
            .moz-text-html input.mj-accordion-checkbox+* .mj-accordion-content { overflow: hidden; display: block; }
            .moz-text-html input.mj-accordion-checkbox+* .mj-accordion-ico { display: none; }
          `}
        </style>
      </Head>
      <body style={{ wordSpacing: 'normal' }}>
        <Container style={{ backgroundColor: '#ffffff', margin: '0 auto', maxWidth: '600px' }}>
          <Section style={{ backgroundColor: '#ffffff', padding: '20px', textAlign: 'center' }}>
            <Column style={{ backgroundColor: '#dededd', padding: '1px' }}>
              <AccordionElement title="Why use an accordion?">
                <Text style={{ backgroundColor: '#fafafa', fontSize: '14px', lineHeight: '1', color: '#505050', padding: '15px' }}>
                  Because emails with a lot of content are most of the time a very bad experience on mobile, mj-accordion comes handy when you want to deliver a lot of information in a concise way.
                </Text>
              </AccordionElement>
              <AccordionElement title="How it works">
                <Text style={{ backgroundColor: '#fafafa', fontSize: '14px', lineHeight: '1', color: '#505050', padding: '15px' }}>
                  Content is stacked into tabs and users can expand them at will. If responsive styles are not supported (mostly on desktop clients), tabs are then expanded and your content is readable at once.
                </Text>
              </AccordionElement>
            </Column>
          </Section>
        </Container>
      </body>
    </Html>
  );
};

const AccordionElement = ({ title, children }) => {
  return (
    <label className="mj-accordion-element" style={{ fontSize: '13px' }}>
      <input className="mj-accordion-checkbox" type="checkbox" style={{ display: 'none' }} />
      <div>
        <div className="mj-accordion-title">
          <table style={{ width: '100%', borderBottom: 'none' }}>
            <tbody>
              <tr>
                <td style={{ width: '100%', backgroundColor: '#ffffff', color: '#031017', fontSize: '18px', padding: '15px' }}>{title}</td>
                <td className="mj-accordion-ico" style={{ padding: '16px', backgroundColor: '#ffffff', verticalAlign: 'middle' }}>
                  <Image src="https://i.imgur.com/Xvw0vjq.png" alt="+" className="mj-accordion-more" style={{ display: 'none', width: '24px', height: '24px' }} />
                  <Image src="https://i.imgur.com/KKHenWa.png" alt="-" className="mj-accordion-less" style={{ display: 'none', width: '24px', height: '24px' }} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mj-accordion-content">
          <table style={{ width: '100%', borderBottom: 'none' }}>
            <tbody>
              <tr>
                <td>{children}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </label>
  );
};

export default AccordionEmail;