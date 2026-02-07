import React from 'react'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from 'react-hook-form'

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type Props = {}

function ContactMe({}: Props) {
    const {
        register,
        handleSubmit,
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:sergiolcb2001@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`
    };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-[#6b7b8a] text-2xl font-bold">Contact</h3>

        <div className="flex flex-col space-y-10">
            <h4 className="text-4xl font-semibold text-center">
                I have got just what you need.{" "}
                <span className="decoration-[#A4805B]/50 underline">Lets Talk.</span>
            </h4>

            <div className="space-y-10">
                <div className="flex items-center space-x-5 justify-center">
                    <PhoneIcon className="text-[#A4805B] h-7 w-7 animate-pulse"/>
                    <p className="text-2xl">+57 3026372523</p>
                </div>

                <div className="flex items-center space-x-5 justify-center">
                    <EnvelopeIcon className="text-[#A4805B] h-7 w-7 animate-pulse"/>
                    <p className="text-2xl">sergiolcb2001@gmail.com</p>
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-fit mx-auto">
                <div className="flex space-x-2">
                    <input placeholder="Name" className="contactInput" type="text" {...register("name")}/>
                    <input placeholder="Email" className="contactInput" type="email" {...register("email")}/>
                </div>

                <input placeholder="Subject" className="contactInput" type="text" {...register("subject")}/>

                <textarea placeholder="Message" className="contactInput" {...register("message")}></textarea>
                <button 
                    type="submit"
                    className="bg-[#A4805B] py-5 px-10 rounded-md text-gray-300 font-bold text-lg"
                >
                    Submit
                </button>
            </form>
        </div>
    </div>
  )
}

export default ContactMe