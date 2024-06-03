import React from 'react';
import { Button, Column, Container, Font, Head, Heading, Hr, Html, Image, Link, Markdown, Preview, Section, Tailwind, Text } from '@react-email/components';

const TableEmail = () => (
  <Html>
    <Head>
      <Font href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700" />
    </Head>
    <Preview>Table Email</Preview>
    <Tailwind>
      <Container className="mx-auto max-w-lg">
        <Section className="text-center py-5">
          <Column className="w-full">
            <Text className="text-left px-6 py-2 border-b border-gray-300">
              <table className="w-full text-left">
                <thead>
                  <tr>
                    <th className="px-4 py-2">Year</th>
                    <th className="px-4 py-2">Language</th>
                    <th className="px-4 py-2">Inspired from</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2">1995</td>
                    <td className="px-4 py-2">PHP</td>
                    <td className="px-4 py-2">C, Shell Unix</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">1995</td>
                    <td className="px-4 py-2">JavaScript</td>
                    <td className="px-4 py-2">Scheme, Self</td>
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