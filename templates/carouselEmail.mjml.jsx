import React from 'react';
import { Button, Column, Container, Font, Head, Heading, Hr, Html, Image, Link, Markdown, Preview, Section, Tailwind, Text } from '@react-email/components';

const CarouselEmail = () => (
  <Html>
    <Head>
      <Font />
      <style type="text/css">
        {`
          .mj-carousel {
            -webkit-user-select: none;
            -moz-user-select: none;
            user-select: none;
          }
          .mj-carousel-thumbnail:hover {
            border-color: #fead0d !important;
          }
          .mj-carousel-image img+div,
          .mj-carousel-thumbnail img+div {
            display: none !important;
          }
        `}
      </style>
    </Head>
    <Preview>Carousel Email</Preview>
    <Container>
      <Section>
        <Column>
          <div className="mj-carousel">
            <input className="mj-carousel-radio mj-carousel-639516635259275e-radio mj-carousel-639516635259275e-radio-1" checked="checked" type="radio" name="mj-carousel-radio-639516635259275e" id="mj-carousel-639516635259275e-radio-1" style={{ display: 'none' }} />
            <input className="mj-carousel-radio mj-carousel-639516635259275e-radio mj-carousel-639516635259275e-radio-2" type="radio" name="mj-carousel-radio-639516635259275e" id="mj-carousel-639516635259275e-radio-2" style={{ display: 'none' }} />
            <input className="mj-carousel-radio mj-carousel-639516635259275e-radio mj-carousel-639516635259275e-radio-3" type="radio" name="mj-carousel-radio-639516635259275e" id="mj-carousel-639516635259275e-radio-3" style={{ display: 'none' }} />
            <div className="mj-carousel-content mj-carousel-639516635259275e-content" style={{ display: 'table', width: '100%', tableLayout: 'fixed', textAlign: 'center', fontSize: '0px' }}>
              <a style={{ border: '2px solid transparent', borderRadius: '6px', display: 'inline-block', overflow: 'hidden', width: '110px' }} href="#1" target="_blank" className="mj-carousel-thumbnail mj-carousel-639516635259275e-thumbnail mj-carousel-639516635259275e-thumbnail-1">
                <label htmlFor="mj-carousel-639516635259275e-radio-1">
                  <Image style={{ display: 'block', width: '100%', height: 'auto' }} src="https://www.mailjet.com/wp-content/uploads/2016/11/ecommerce-guide.jpg" alt="" width="110" />
                </label>
              </a>
              <a style={{ border: '2px solid transparent', borderRadius: '6px', display: 'inline-block', overflow: 'hidden', width: '110px' }} href="#2" target="_blank" className="mj-carousel-thumbnail mj-carousel-639516635259275e-thumbnail mj-carousel-639516635259275e-thumbnail-2">
                <label htmlFor="mj-carousel-639516635259275e-radio-2">
                  <Image style={{ display: 'block', width: '100%', height: 'auto' }} src="https://www.mailjet.com/wp-content/uploads/2016/09/3@1x.png" alt="" width="110" />
                </label>
              </a>
              <a style={{ border: '2px solid transparent', borderRadius: '6px', display: 'inline-block', overflow: 'hidden', width: '110px' }} href="#3" target="_blank" className="mj-carousel-thumbnail mj-carousel-639516635259275e-thumbnail mj-carousel-639516635259275e-thumbnail-3">
                <label htmlFor="mj-carousel-639516635259275e-radio-3">
                  <Image style={{ display: 'block', width: '100%', height: 'auto' }} src="https://www.mailjet.com/wp-content/uploads/2016/09/1@1x.png" alt="" width="110" />
                </label>
              </a>
              <table style={{ captionSide: 'top', display: 'table-caption', tableLayout: 'fixed', width: '100%' }} border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation" className="mj-carousel-main">
                <tbody>
                  <tr>
                    <td style={{ padding: '0px' }}>
                      <div className="mj-carousel-images">
                        <div className="mj-carousel-image mj-carousel-image-1" style={{}}>
                          <Image src="https://www.mailjet.com/wp-content/uploads/2016/11/ecommerce-guide.jpg" alt="" style={{ borderRadius: '6px', display: 'block', width: '600px', maxWidth: '100%', height: 'auto' }} width="600" />
                        </div>
                        <div className="mj-carousel-image mj-carousel-image-2" style={{ display: 'none' }}>
                          <Image src="https://www.mailjet.com/wp-content/uploads/2016/09/3@1x.png" alt="" style={{ borderRadius: '6px', display: 'block', width: '600px', maxWidth: '100%', height: 'auto' }} width="600" />
                        </div>
                        <div className="mj-carousel-image mj-carousel-image-3" style={{ display: 'none' }}>
                          <Image src="https://www.mailjet.com/wp-content/uploads/2016/09/1@1x.png" alt="" style={{ borderRadius: '6px', display: 'block', width: '600px', maxWidth: '100%', height: 'auto' }} width="600" />
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Column>
      </Section>
    </Container>
  </Html>
);

export default CarouselEmail;