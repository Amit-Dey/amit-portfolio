"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Swal  from "sweetalert2";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

import { motion } from 'framer-motion';

const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    description: '(+880) 1867-134455'
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    description: 'amitdey9020@gmail.com'
  },
  {
    icon: <FaMapMarkerAlt />,
    title: 'Address',
    description: 'Mehedibag, Chattogram, Bangladesh'
  }
]

function Contact() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      firstname: { value: string };
      lastname: { value: string };
      email: { value: string };
      phone: { value: string };
      service: { value: string };
      message: { value: string };
    };
    e.preventDefault();
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "eaf0a122-d77f-4112-a7cc-6ab058012695",
        name: target.firstname.value + " " + target.lastname.value,
        email: target.email.value,
        phone: target.phone.value,
        service: target.service.value,
        message: target.message.value,
      }),
    });
    const result = await response.json();
    if (result.success) {
      Swal.fire({
        title: "Success!",
        text: "We received your submission.",
        icon: "success"
      });

      target.firstname.value = "";
      target.lastname.value = "";
      target.email.value = "";
      target.phone.value = "";
      target.service.value = "";
      target.message.value = "";
    }
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 0.3,
          duration: 0.8,
          ease: 'easeIn'
        }
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60" >
                Fill out the form and describe your project needs. I'll get back to you as soon as possible.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" required name="firstname" aria-label="First Name" placeholder="First Name" />
                <Input type="lastname" name="lastname" aria-label="Last Name" placeholder="Last Name" />
                <Input type="email" required name="email" aria-label="Email Address" placeholder="Email Address" />
                <Input type="phone" name="phone" aria-label="Phone Number" placeholder="Phone Number" />
              </div>
              {/* select */}
              <Select name="service" >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="Web Development">Web Development</SelectItem>
                    <SelectItem value="Mobile Development">Mobile Development</SelectItem>
                    <SelectItem value="Ui-Ux Design">UI/UX Design</SelectItem>
                    <SelectItem value="SEO">SEO</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea
                className="h-[200px]"
                name="message"
                required
                placeholder="Type your message here." />
              {/* button */}
              <Button size="md"
                type="submit"
                className="max-w-44">
                Send message
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h4 className="text-xl">{item.description}</h4>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact