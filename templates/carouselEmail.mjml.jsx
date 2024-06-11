import React from 'react';
import { Html, Head, Font, Container, Section, Column, Image, Link } from '@react-email/components';

const CarouselEmail = () => {
  return (
    <Html>
      <Head>
        <Font
          fontFamily="Arial, sans-serif"
          fontWeight="normal"
          fontStyle="normal"
          fontSize="16px"
          lineHeight="1.5"
        />
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
            .mj-carousel { -webkit-user-select: none; -moz-user-select: none; user-select: none; }
            .mj-carousel-thumbnail:hover { border-color: #fead0d !important; }
            .mj-carousel noinput { display: block !important; }
            .mj-carousel noinput .mj-carousel-image-1 { display: block !important; }
            .mj-carousel noinput .mj-carousel-arrows, .mj-carousel noinput .mj-carousel-thumbnails { display: none !important; }
            [owa] .mj-carousel-thumbnail { display: none !important; }
            @media screen yahoo {
              .mj-carousel-0fe734544e7a8a8e-icons-cell, .mj-carousel-previous-icons, .mj-carousel-next-icons { display: none !important; }
              .mj-carousel-0fe734544e7a8a8e-radio-1:checked+*+*+.mj-carousel-content .mj-carousel-0fe734544e7a8a8e-thumbnail-1 { border-color: transparent; }
            }
          `}
        </style>
      </Head>
      <body style={{ wordSpacing: 'normal' }}>
        <Container style={{ margin: '0 auto', maxWidth: '600px' }}>
          <Section style={{ padding: '20px 0', textAlign: 'center' }}>
            <Column style={{ width: '100%' }}>
              <div className="mj-carousel">
                <input
                  className="mj-carousel-radio mj-carousel-0fe734544e7a8a8e-radio mj-carousel-0fe734544e7a8a8e-radio-1"
                  type="radio"
                  name="mj-carousel-radio-0fe734544e7a8a8e"
                  id="mj-carousel-0fe734544e7a8a8e-radio-1"
                  defaultChecked
                  style={{ display: 'none' }}
                />
                <input
                  className="mj-carousel-radio mj-carousel-0fe734544e7a8a8e-radio mj-carousel-0fe734544e7a8a8e-radio-2"
                  type="radio"
                  name="mj-carousel-radio-0fe734544e7a8a8e"
                  id="mj-carousel-0fe734544e7a8a8e-radio-2"
                  style={{ display: 'none' }}
                />
                <input
                  className="mj-carousel-radio mj-carousel-0fe734544e7a8a8e-radio mj-carousel-0fe734544e7a8a8e-radio-3"
                  type="radio"
                  name="mj-carousel-radio-0fe734544e7a8a8e"
                  id="mj-carousel-0fe734544e7a8a8e-radio-3"
                  style={{ display: 'none' }}
                />
                <div className="mj-carousel-content mj-carousel-0fe734544e7a8a8e-content" style={{ display: 'table', width: '100%', tableLayout: 'fixed', textAlign: 'center', fontSize: '0px' }}>
                  <Link href="#1" target="_blank" className="mj-carousel-thumbnail mj-carousel-0fe734544e7a8a8e-thumbnail mj-carousel-0fe734544e7a8a8e-thumbnail-1" style={{ border: '2px solid transparent', borderRadius: '6px', display: 'inline-block', overflow: 'hidden', width: '110px' }}>
                    <label htmlFor="mj-carousel-0fe734544e7a8a8e-radio-1">
                      <Image src="https://www.mailjet.com/wp-content/uploads/2016/11/ecommerce-guide.jpg" alt="" width="110" style={{ display: 'block', width: '100%', height: 'auto' }} />
                    </label>
                  </Link>
                  <Link href="#2" target="_blank" className="mj-carousel-thumbnail mj-carousel-0fe734544e7a8a8e-thumbnail mj-carousel-0fe734544e7a8a8e-thumbnail-2" style={{ border: '2px solid transparent', borderRadius: '6px', display: 'inline-block', overflow: 'hidden', width: '110px' }}>
                    <label htmlFor="mj-carousel-0fe734544e7a8a8e-radio-2">
                      <Image src="https://www.mailjet.com/wp-content/uploads/2016/09/3@1x.png" alt="" width="110" style={{ display: 'block', width: '100%', height: 'auto' }} />
                    </label>
                  </Link>
                  <Link href="#3" target="_blank" className="mj-carousel-thumbnail mj-carousel-0fe734544e7a8a8e-thumbnail mj-carousel-0fe734544e7a8a8e-thumbnail-3" style={{ border: '2px solid transparent', borderRadius: '6px', display: 'inline-block', overflow: 'hidden', width: '110px' }}>
                    <label htmlFor="mj-carousel-0fe734544e7a8a8e-radio-3">
                      <Image src="https://www.mailjet.com/wp-content/uploads/2016/09/1@1x.png" alt="" width="110" style={{ display: 'block', width: '100%', height: 'auto' }} />
                    </label>
                  </Link>
                  <table style={{ captionSide: 'top', display: 'table-caption', tableLayout: 'fixed', width: '100%' }} border="0" cellPadding="0" cellSpacing="0" width="100%" role="presentation" className="mj-carousel-main">
                    <tbody>
                      <tr>
                        <td className="mj-carousel-0fe734544e7a8a8e-icons-cell" style={{ fontSize: '0px', display: 'none', padding: '0px' }}>
                          <div className="mj-carousel-previous-icons" style={{ display: 'none' }}>
                            <label htmlFor="mj-carousel-0fe734544e7a8a8e-radio-1" className="mj-carousel-previous mj-carousel-previous-1">
                              <Image src="https://i.imgur.com/xTh3hln.png" alt="previous" width="44" style={{ display: 'block', width: '44px', height: 'auto' }} />
                            </label>
                            <label htmlFor="mj-carousel-0fe734544e7a8a8e-radio-2" className="mj-carousel-previous mj-carousel-previous-2">
                              <Image src="https://i.imgur.com/xTh3hln.png" alt="previous" width="44" style={{ display: 'block', width: '44px', height: 'auto' }} />
                            </label>
                            <label htmlFor="mj-carousel-0fe734544e7a8a8e-radio-3" className="mj-carousel-previous mj-carousel-previous-3">
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
                        <td className="mj-carousel-0fe734544e7a8a8e-icons-cell" style={{ fontSize: '0px', display: 'none', padding: '0px' }}>
                          <div className="mj-carousel-next-icons" style={{ display: 'none' }}>
                            <label htmlFor="mj-carousel-0fe734544e7a8a8e-radio-1" className="mj-carousel-next mj-carousel-next-1">
                              <Image src="https://i.imgur.com/os7o9kz.png" alt="next" width="44" style={{ display: 'block', width: '44px', height: 'auto' }} />
                            </label>
                            <label htmlFor="mj-carousel-0fe734544e7a8a8e-radio-2" className="mj-carousel-next mj-carousel-next-2">
                              <Image src="https://i.imgur.com/os7o9kz.png" alt="next" width="44" style={{ display: 'block', width: '44px', height: 'auto' }} />
                            </label>
                            <label htmlFor="mj-carousel-0fe734544e7a8a8e-radio-3" className="mj-carousel-next mj-carousel-next-3">
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
      </body>
    </Html>
  );
};

export default CarouselEmail;