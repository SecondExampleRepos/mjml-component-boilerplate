import React from 'react';
import { Html, Head, Font, Container, Section, Column, Text, Image } from '@react-email/components';

const AccordionEmail = () => {
  return (
    <Html lang="und" dir="auto">
      <Head>
        <Font href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,500,700" />
        <Font href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" />
        <Font href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700" />
        <style>
          {`
            body {
              margin: 0;
              padding: 0;
              -webkit-text-size-adjust: 100%;
              -ms-text-size-adjust: 100%;
            }
            table, td {
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
            @media only screen and (min-width:480px) {
              .mj-column-per-100 {
                width: 100% !important;
                max-width: 100%;
              }
            }
            .mj-accordion-checkbox {
              display: none;
            }
            .mj-accordion-title {
              cursor: pointer;
              touch-action: manipulation;
              -webkit-user-select: none;
              -moz-user-select: none;
              user-select: none;
            }
            .mj-accordion-content {
              overflow: hidden;
              display: none;
            }
            .mj-accordion-more {
              display: block !important;
            }
            .mj-accordion-less {
              display: none !important;
            }
            input.mj-accordion-checkbox:checked + * .mj-accordion-content {
              display: block;
            }
            input.mj-accordion-checkbox:checked + * .mj-accordion-more {
              display: none !important;
            }
            input.mj-accordion-checkbox:checked + * .mj-accordion-less {
              display: block !important;
            }
          `}
        </style>
      </Head>
      <body style={{ wordSpacing: 'normal' }}>
        <Container style={{ backgroundColor: '#ffffff', margin: '0 auto', maxWidth: '600px' }}>
          <Section style={{ backgroundColor: '#dededd', padding: '20px' }}>
            <Column style={{ width: '100%' }}>
              <div className="mj-accordion">
                <label className="mj-accordion-element" style={{ fontSize: '13px' }}>
                  <input className="mj-accordion-checkbox" type="checkbox" />
                  <div>
                    <div className="mj-accordion-title" style={{ backgroundColor: '#ffffff', color: '#031017', fontSize: '18px', padding: '15px' }}>
                      Why use an accordion?
                      <Image src="https://i.imgur.com/Xvw0vjq.png" alt="+" className="mj-accordion-more" style={{ width: '24px', height: '24px' }} />
                      <Image src="https://i.imgur.com/KKHenWa.png" alt="-" className="mj-accordion-less" style={{ width: '24px', height: '24px' }} />
                    </div>
                    <div className="mj-accordion-content" style={{ backgroundColor: '#fafafa', fontSize: '14px', lineHeight: '1', color: '#505050', padding: '15px' }}>
                      <Text style={{ lineHeight: '20px' }}>
                        Because emails with a lot of content are most of the time a very bad experience on mobile, mj-accordion comes handy when you want to deliver a lot of information in a concise way.
                      </Text>
                    </div>
                  </div>
                </label>
                <label className="mj-accordion-element" style={{ fontSize: '13px' }}>
                  <input className="mj-accordion-checkbox" type="checkbox" />
                  <div>
                    <div className="mj-accordion-title" style={{ backgroundColor: '#ffffff', color: '#031017', fontSize: '18px', padding: '15px' }}>
                      How it works
                      <Image src="https://i.imgur.com/Xvw0vjq.png" alt="+" className="mj-accordion-more" style={{ width: '24px', height: '24px' }} />
                      <Image src="https://i.imgur.com/KKHenWa.png" alt="-" className="mj-accordion-less" style={{ width: '24px', height: '24px' }} />
                    </div>
                    <div className="mj-accordion-content" style={{ backgroundColor: '#fafafa', fontSize: '14px', lineHeight: '1', color: '#505050', padding: '15px' }}>
                      <Text style={{ lineHeight: '20px' }}>
                        Content is stacked into tabs and users can expand them at will. If responsive styles are not supported (mostly on desktop clients), tabs are then expanded and your content is readable at once.
                      </Text>
                    </div>
                  </div>
                </label>
              </div>
            </Column>
          </Section>
        </Container>
      </body>
    </Html>
  );
};

export default AccordionEmail;
