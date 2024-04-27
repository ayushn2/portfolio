'use client';

import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast'; // updated code



export default function ContactUsForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm();

   /**
   * The function sends a POST request to a server with form data and displays a success notification.
   * @param {FormInput} formData - The formData parameter is an object that contains the input values
   * from the form.
   */
  async function onSubmit(formData) { 
    await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }),
    }).then(() => {
      // Toast notification
      toast.success('Your email message has been sent successfully');
    });

    reset();
  }

  return (
    <div className='w-full'>
      <form
        onSubmit={handleSubmit(onSubmit)} // updated code
        className='mb-10 mt-5 flex w-full flex-col rounded-md bg-input-trans p-5 py-14 shadow-lg md:max-w-3xl md:px-10 mx-auto'
      >
        <input
          className='bg-transparent border-b py-6 pl-4 focus:outline-none focus:rounded-md focus:border-stone-500 ring-green-500 font-light text-gray-500'
          type='text'
          placeholder='Name'
          required
          {...register('name')}
        />
        <input
          className='bg-transparent border-b py-6 pl-4 focus:outline-none focus:rounded-md focus:border-stone-500 ring-green-500 font-light text-gray-500'
          type='email'
          placeholder='Email'
          required
          {...register('email')}
        />
        <textarea
          className='mt-4 mb-5 block border-b w-fullrounded-md px-3 text-gray-300 bg-transparent outline-none focus:border-stone-500 focus:outline-none md:mb-0'
          placeholder='Message'
          rows={6}
          required
          {...register('message')}
        />

        <button
          disabled={isSubmitting}
          type='submit'
          className='px-10 mt-8 py-2 bg-[#130F49] text-gray-50 font-light rounded-md text-lg flex flex-row items-center justify-center'
        >
          Send Message
        </button>
      </form>
    </div>
  );
}