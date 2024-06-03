import React from 'react';
import { Button, Column, Container, Font, Head, Heading, Hr, Html, Image, Link, Markdown, Preview, Section, Tailwind, Text } from '@react-email/components';

const AccordionEmail = () => (
  <Html>
    <Head>
      <Font href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,500,700" />
      <Font href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" />
      <Font href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700" />
      <style type="text/css">
        {`
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
          .mj-accordion-checkbox:checked + * .mj-accordion-content {
            display: block;
          }
          .mj-accordion-checkbox:checked + * .mj-accordion-more {
            display: none !important;
          }
          .mj-accordion-checkbox:checked + * .mj-accordion-less {
            display: block !important;
          }
        `}
      </style>
    </Head>
    <Preview>Accordion Email</Preview>
    <Tailwind>
      <Container className="bg-white mx-auto max-w-lg">
        <Section>
          <Column className="bg-gray-200">
            <div className="mj-accordion">
              <label className="mj-accordion-element">
                <input type="checkbox" className="mj-accordion-checkbox" />
                <div>
                  <div className="mj-accordion-title bg-white text-black text-lg p-4">
                    Why use an accordion?
                    <Image src="https://i.imgur.com/Xvw0vjq.png" alt="+" className="mj-accordion-more w-6 h-6" />
                    <Image src="https://i.imgur.com/KKHenWa.png" alt="-" className="mj-accordion-less w-6 h-6" />
                  </div>
                  <div className="mj-accordion-content bg-gray-100 text-sm p-4">
                    <Text>Because emails with a lot of content are most of the time a very bad experience on mobile, mj-accordion comes handy when you want to deliver a lot of information in a concise way.</Text>
                  </div>
                </div>
              </label>
              <label className="mj-accordion-element">
                <input type="checkbox" className="mj-accordion-checkbox" />
                <div>
                  <div className="mj-accordion-title bg-white text-black text-lg p-4">
                    How it works
                    <Image src="https://i.imgur.com/Xvw0vjq.png" alt="+" className="mj-accordion-more w-6 h-6" />
                    <Image src="https://i.imgur.com/KKHenWa.png" alt="-" className="mj-accordion-less w-6 h-6" />
                  </div>
                  <div className="mj-accordion-content bg-gray-100 text-sm p-4">
                    <Text>Content is stacked into tabs and users can expand them at will. If responsive styles are not supported (mostly on desktop clients), tabs are then expanded and your content is readable at once.</Text>
                  </div>
                </div>
              </label>
            </div>
          </Column>
        </Section>
      </Container>
    </Tailwind>
  </Html>
);

export default AccordionEmail;