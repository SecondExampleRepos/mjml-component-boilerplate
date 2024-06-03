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
          .mj-carousel noinput {
            display: block !important;
          }
          .mj-carousel noinput .mj-carousel-image-1 {
            display: block !important;
          }
          .mj-carousel noinput .mj-carousel-arrows,
          .mj-carousel noinput .mj-carousel-thumbnails {
            display: none !important;
          }
          [owa] .mj-carousel-thumbnail {
            display: none !important;
          }
          @media screen yahoo {
            .mj-carousel-ea788b20ab8efc20-icons-cell,
            .mj-carousel-previous-icons,
            .mj-carousel-next-icons {
              display: none !important;
            }
            .mj-carousel-ea788b20ab8efc20-radio-1:checked+*+*+.mj-carousel-content .mj-carousel-ea788b20ab8efc20-thumbnail-1 {
              border-color: transparent;
            }
          }
        `}
      </style>
    </Head>
    <Preview>Carousel Email</Preview>
    <Tailwind>
      <Container>
        <Section>
          <Column>
            <div className="mj-carousel">
              <input className="mj-carousel-radio mj-carousel-ea788b20ab8efc20-radio mj-carousel-ea788b20ab8efc20-radio-1" checked="checked" type="radio" name="mj-carousel-radio-ea788b20ab8efc20" id="mj-carousel-ea788b20ab8efc20-radio-1" style={{ display: 'none' }} />
              <input className="mj-carousel-radio mj-carousel-ea788b20ab8efc20-radio mj-carousel-ea788b20ab8efc20-radio-2" type="radio" name="mj-carousel-radio-ea788b20ab8efc20" id="mj-carousel-ea788b20ab8efc20-radio-2" style={{ display: 'none' }} />
              <input className="mj-carousel-radio mj-carousel-ea788b20ab8efc20-radio mj-carousel-ea788b20ab8efc20-radio-3" type="radio" name="mj-carousel-radio-ea788b20ab8efc20" id="mj-carousel-ea788b20ab8efc20-radio-3" style={{ display: 'none' }} />
              <div className="mj-carousel-content mj-carousel-ea788b20ab8efc20-content" style={{ display: 'table', width: '100%', tableLayout: 'fixed', textAlign: 'center', fontSize: '0px' }}>
                <Link href="#1" target="_blank" className="mj-carousel-thumbnail mj-carousel-ea788b20ab8efc20-thumbnail mj-carousel-ea788b20ab8efc20-thumbnail-1" style={{ border: '2px solid transparent', borderRadius: '6px', display: 'inline-block', overflow: 'hidden', width: '110px' }}>
                  <label htmlFor="mj-carousel-ea788b20ab8efc20-radio-1">
                    <Image src="https://www.mailjet.com/wp-content/uploads/2016/11/ecommerce-guide.jpg" alt="" width="110" style={{ display: 'block', width: '100%', height: 'auto' }} />
                  </label>
                </Link>
                <Link href="#2" target="_blank" className="mj-carousel-thumbnail mj-carousel-ea788b20ab8efc20-thumbnail mj-carousel-ea788b20ab8efc20-thumbnail-2" style={{ border: '2px solid transparent', borderRadius: '6px', display: 'inline-block', overflow: 'hidden', width: '110px' }}>
                  <label htmlFor="mj-carousel-ea788b20ab8efc20-radio-2">
                    <Image src="https://www.mailjet.com/wp-content/uploads/2016/09/3@1x.png" alt="" width="110" style={{ display: 'block', width: '100%', height: 'auto' }} />
                  </label>
                </Link>
                <Link href="#3" target="_blank" className="mj-carousel-thumbnail mj-carousel-ea788b20ab8efc20-thumbnail mj-carousel-ea788b20ab8efc20-thumbnail-3" style={{ border: '2px solid transparent', borderRadius: '6px', display: 'inline-block', overflow: 'hidden', width: '110px' }}>
                  <label htmlFor="mj-carousel-ea788b20ab8efc20-radio-3">
                    <Image src="https://www.mailjet.com/wp-content/uploads/2016/09/1@1x.png" alt="" width="110" style={{ display: 'block', width: '100%', height: 'auto' }} />
                  </label>
                </Link>
                <table style={{ captionSide: 'top', display: 'table-caption', tableLayout: 'fixed', width: '100%' }} border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation" className="mj-carousel-main">
                  <tbody>
                    <tr>
                      <td className="mj-carousel-ea788b20ab8efc20-icons-cell" style={{ fontSize: '0px', display: 'none', padding: '0px' }}>
                        <div className="mj-carousel-previous-icons" style={{ display: 'none' }}>
                          <label htmlFor="mj-carousel-ea788b20ab8efc20-radio-1" className="mj-carousel-previous mj-carousel-previous-1">
                            <Image src="https://i.imgur.com/xTh3hln.png" alt="previous" width="44" style={{ display: 'block', width: '44px', height: 'auto' }} />
                          </label>
                          <label htmlFor="mj-carousel-ea788b20ab8efc20-radio-2" className="mj-carousel-previous mj-carousel-previous-2">
                            <Image src="https://i.imgur.com/xTh3hln.png" alt="previous" width="44" style={{ display: 'block', width: '44px', height: 'auto' }} />
                          </label>
                          <label htmlFor="mj-carousel-ea788b20ab8efc20-radio-3" className="mj-carousel-previous mj-carousel-previous-3">
                            <Image src="https://i.imgur.com/xTh3hln.png" alt="previous" width="44" style={{ display: 'block', width: '44px', height: 'auto' }} />
                          </label>
                        </div>
                      </td>
                      <td style={{ padding: '0px' }}>
                        <div className="mj-carousel-images">
                          <div className="mj-carousel-image mj-carousel-image-1" style={{ display: 'block' }}>
                            <Image src="https://www.mailjet.com/wp-content/uploads/2016/11/ecommerce-guide.jpg" alt="" width="600" style={{ borderRadius: '6px', display: 'block', width: '600px', maxWidth: '100%', height: 'auto' }} />
                          </div>
                          <div className="mj-carousel-image mj-carousel-image-2" style={{ display: 'none' }}>
                            <Image src="https://www.mailjet.com/wp-content/uploads/2016/09/3@1x.png" alt="" width="600" style={{ borderRadius: '6px', display: 'block', width: '600px', maxWidth: '100%', height: 'auto' }} />
                          </div>
                          <div className="mj-carousel-image mj-carousel-image-3" style={{ display: 'none' }}>
                            <Image src="https://www.mailjet.com/wp-content/uploads/2016/09/1@1x.png" alt="" width="600" style={{ borderRadius: '6px', display: 'block', width: '600px', maxWidth: '100%', height: 'auto' }} />
                          </div>
                        </div>
                      </td>
                      <td className="mj-carousel-ea788b20ab8efc20-icons-cell" style={{ fontSize: '0px', display: 'none', padding: '0px' }}>
                        <div className="mj-carousel-next-icons" style={{ display: 'none' }}>
                          <label htmlFor="mj-carousel-ea788b20ab8efc20-radio-1" className="mj-carousel-next mj-carousel-next-1">
                            <Image src="https://i.imgur.com/os7o9kz.png" alt="next" width="44" style={{ display: 'block', width: '44px', height: 'auto' }} />
                          </label>
                          <label htmlFor="mj-carousel-ea788b20ab8efc20-radio-2" className="mj-carousel-next mj-carousel-next-2">
                            <Image src="https://i.imgur.com/os7o9kz.png" alt="next" width="44" style={{ display: 'block', width: '44px', height: 'auto' }} />
                          </label>
                          <label htmlFor="mj-carousel-ea788b20ab8efc20-radio-3" className="mj-carousel-next mj-carousel-next-3">
                            <Image src="https://i.imgur.com/os7o9kz.png" alt="next" width="44" style={{ display: 'block', width: '44px', height: 'auto' }} />
                          </label>
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
    </Tailwind>
  </Html>
);

export default CarouselEmail;