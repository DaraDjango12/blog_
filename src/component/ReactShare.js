import React from 'react'
import { FacebookIcon,FacebookShareButton,WhatsappShareButton,WhatsappIcon } from 'react-share'


const ReactShare = () => {
  return (
    <>
    <container>
        <segment>
            <FacebookShareButton url='www.facebook.com' quote="hey awfar na" hashtag='#React'>
                <FacebookIcon> </FacebookIcon>
            </FacebookShareButton>


            <WhatsappShareButton className='facebook' url="www.whatsapp.com">
                <WhatsappIcon>

                </WhatsappIcon>
            </WhatsappShareButton>
        </segment>
    </container>


    </>
  )
}

export default ReactShare