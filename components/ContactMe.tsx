import React, { useState } from 'react'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from 'react-hook-form'
import { motion, AnimatePresence } from 'framer-motion'

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const EMAIL = "sergiolcb2001@gmail.com";
const PHONE = "+57 3026372523";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
  }
};

function ContactMe() {
    const [copied, setCopied] = useState(false);
    
    const {
        register,
        handleSubmit,
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:${EMAIL}?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`
    };

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(EMAIL);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy email');
        }
    };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
      className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-10 py-24"
    >
      {/* Title - same style as About */}
      <motion.h3 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="absolute top-24 section-heading"
      >
        Contact
      </motion.h3>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full max-w-2xl"
      >
        {/* Title */}
        <motion.h4 
          variants={itemVariants}
          className="text-2xl md:text-4xl font-semibold text-center mb-8"
        >
          I have got just what you need.{" "}
          <span className="text-accent">Let&apos;s Talk.</span>
        </motion.h4>

        {/* Contact info cards */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-sm">
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
              <PhoneIcon className="text-accent h-5 w-5"/>
            </div>
            <p className="text-zinc-300">{PHONE}</p>
          </div>

          <motion.button
            onClick={copyEmail}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-sm hover:border-accent/30 transition-colors group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
              <EnvelopeIcon className="text-accent h-5 w-5"/>
            </div>
            <AnimatePresence mode="wait">
              {copied ? (
                <motion.span
                  key="check"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-accent font-medium"
                >
                  ✓ Copied!
                </motion.span>
              ) : (
                <motion.span 
                  key="email"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="text-zinc-300 group-hover:text-accent transition-colors"
                >
                  {EMAIL}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.div>

        {/* Form card */}
        <motion.div 
          variants={itemVariants}
          className="glass-card p-6 md:p-8 rounded-3xl border border-zinc-800/50"
          style={{
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4), 0 0 60px rgba(251, 191, 36, 0.03)'
          }}
        >
          {/* Decorative accent */}
          <div className="absolute -top-px left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
          
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
            <div className="flex flex-col md:flex-row gap-4 w-full">
              <input placeholder="Name" className="contactInput w-full md:flex-1" type="text" {...register("name")}/>
              <input placeholder="Email" className="contactInput w-full md:flex-1" type="email" {...register("email")}/>
            </div>

            <input placeholder="Subject" className="contactInput" type="text" {...register("subject")}/>

            <textarea placeholder="Message" className="contactInput min-h-[140px] resize-none" {...register("message")}></textarea>
            
            <motion.button 
              type="submit"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="bg-accent hover:bg-accent-hover py-4 px-10 rounded-xl text-zinc-900 font-semibold text-lg transition-all duration-300 shadow-glow mt-2"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* Bottom text */}
        <motion.p
          variants={itemVariants}
          className="mt-8 text-center text-zinc-600 text-xs tracking-widest uppercase"
        >
          Available for freelance opportunities
        </motion.p>
      </motion.div>
    </motion.div>
  )
}

export default ContactMe