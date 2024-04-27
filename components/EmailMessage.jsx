import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Preview,
    Tailwind,
    Text,
  } from '@react-email/components';
  import * as React from 'react';

  
  const MessageUsEmail = ({ name, email, message }) => {
    const previewText = `You have an email from ${name}`;
  
    return (
      <Html>
        <Head />
        <Preview>{previewText}</Preview>
        <Tailwind>
          <Body className='bg-white my-auto mx-auto font-sans'>
            <Container className='my-[20px] mx-auto p-[20px] max-w-4xl'>
              <Heading className='text-black text-[20px] font-normal text-left'>
                <strong>Hello Ayush,</strong>
              </Heading>
              
  
              <Hr className='my-[16px] mx-0 w-full' />
              <Text className='text-[#666666] text-[12px]'>
                Name : {name}
              </Text>
              <Text className='text-[#666666] text-[12px]'>
                Email : {email}
              </Text>
              <Text className='text-black text-[14px] leading-[24px]'>
                {message}
              </Text>
            </Container>
          </Body>
        </Tailwind>
      </Html>
    );
  };
  
  export default MessageUsEmail;