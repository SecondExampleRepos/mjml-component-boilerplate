import React from 'react';
import { Button, Column, Container, Font, Head, Heading, Hr, Html, Image, Link, Markdown, Preview, Section, Tailwind, Text } from '@react-email/components';
const AccordionEmail = () => (
  <Html>
    <Head>
      <Font fontFamily="Open Sans" fallbackFontFamily="Helvetica" webFont="https://fonts.googleapis.com/css?family=Open+Sans:300,400,500,700" />
      <Font fontFamily="Roboto" fallbackFontFamily="Helvetica" webFont="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" />
      <Font fontFamily="Ubuntu" fallbackFontFamily="Helvetica" webFont="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700" />
    </Head>
    <Preview>Accordion Email</Preview>
    <Tailwind>
      <Container className="bg-white mx-auto max-w-lg">
        <Section className="bg-gray-200">
          <Column>
            <div className="accordion">
              <input type="checkbox" id="accordion-1" className="hidden" />
              <label htmlFor="accordion-1" className="block text-lg font-bold bg-white p-4 cursor-pointer">
                Why use an accordion?
                <span className="float-right">
                  <Image src="https://i.imgur.com/Xvw0vjq.png" alt="+" className="accordion-more hidden w-6 h-6" />
                  <Image src="https://i.imgur.com/KKHenWa.png" alt="-" className="accordion-less hidden w-6 h-6" />
                </span>
              </label>
              <div className="accordion-content hidden bg-gray-100 p-4">
                <Text className="text-sm text-gray-700">
                  Because emails with a lot of content are most of the time a very bad experience on mobile, mj-accordion comes handy when you want to deliver a lot of information in a concise way.
                </Text>
              </div>
            </div>
            <div className="accordion">
              <input type="checkbox" id="accordion-2" className="hidden" />
              <label htmlFor="accordion-2" className="block text-lg font-bold bg-white p-4 cursor-pointer">
                How it works
                <span className="float-right">
                  <Image src="https://i.imgur.com/Xvw0vjq.png" alt="+" className="accordion-more hidden w-6 h-6" />
                  <Image src="https://i.imgur.com/KKHenWa.png" alt="-" className="accordion-less hidden w-6 h-6" />
                </span>
              </label>
              <div className="accordion-content hidden bg-gray-100 p-4">
                <Text className="text-sm text-gray-700">
                  Content is stacked into tabs and users can expand them at will. If responsive styles are not supported (mostly on desktop clients), tabs are then expanded and your content is readable at once.
                </Text>
              </div>
            </div>
          </Column>
        </Section>
      </Container>
    </Tailwind>
  </Html>
);
export default AccordionEmail;