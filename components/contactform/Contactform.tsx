'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

// ─── Shared input style ───────────────────────────────────────────────────────
const inputClass =
  'w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-500 outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors'

// ─── Label ───────────────────────────────────────────────────────────────────
function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="block text-sm font-semibold text-gray-900 mb-1.5">
      {children}
    </label>
  )
}

// ─── Phone icon ───────────────────────────────────────────────────────────────
function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.82 19.79 19.79 0 01.01 1.19 2 2 0 012 .01h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
    </svg>
  )
}

// ─── Mail icon ────────────────────────────────────────────────────────────────
function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M2 7l10 7 10-7" />
    </svg>
  )
}

// ─── Map pin icon ─────────────────────────────────────────────────────────────
function PinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  )
}

// ─── Left amber info card ─────────────────────────────────────────────────────
function ContactInfoCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.55 }}
      viewport={{ once: true }}
      className="relative rounded-2xl overflow-hidden flex flex-col justify-around font-montserrat"
      style={{ background: '#996300', minHeight:647, padding: '48px 48px 36px' }}
    >
      {/* Title */}
      <div>
        <h2 className="text-white text-[28px] font-semibold font-montserrat  mb-2">Contact Information</h2>
        <p className="text-white/70 text-lg">We are here for you</p>
      </div>

      {/* Contact details */}
      <div className="mt-12 space-y-6">
        {/* Phone */}
        <a
          href="tel:+2348023050847"
          className="flex items-center gap-4 text-white/90 hover:text-white transition-colors no-underline group"
        >
          <span className="text-white/80 group-hover:text-white transition-colors">
            <PhoneIcon />
          </span>
          <span className="text-sm underline underline-offset-2">+2348023050847,</span>
        </a>

        {/* Email */}
        <a
          href="mailto:instinct@gmail.com"
          className="flex items-center gap-4 text-white/90 hover:text-white transition-colors no-underline"
        >
          <span className="text-white/80">
            <MailIcon />
          </span>
          <span className="text-sm">instinct@gmail.com</span>
        </a>

        {/* Address */}
        <div className="flex items-start gap-4 text-white/90">
          <span className="text-white/80 mt-0.5 shrink-0">
            <PinIcon />
          </span>
          <span className="text-sm leading-relaxed">
            6, Abosede Odebowale Close, Nepa B/Stop,<br />Ifako Gbagada, Lagos State.
          </span>
        </div>
      </div>

      {/* Decorative circle — bottom right */}
      <div
        className="absolute bottom-[-50px] right-[-70px] w-44 h-44 rounded-full pointer-events-none"
        style={{ background: 'rgba(255,255,255,0.08)' }}
      />
      <div
        className="absolute bottom-[30px] right-[30px] w-24 h-24 rounded-full pointer-events-none"
        style={{ background: 'rgba(255,255,255,0.06)' }}
      />
    </motion.div>
  )
}

// ─── Right form ───────────────────────────────────────────────────────────────
function ContactFormFields() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    // Replace with your actual form submission logic
    await new Promise((r) => setTimeout(r, 1200))
    setSending(false)
    setSent(true)
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center h-full py-20 text-center">
        <div className="w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center mb-4">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e8a020" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h3 className="text-lg font-bold text-black mb-2">Message sent!</h3>
        <p className="text-sm text-gray-700">We'll get back to you as soon as possible.</p>
      </div>
    )
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, x: 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.55, delay: 0.1 }}
      viewport={{ once: true }}
      className="space-y-5  h-[647px] rounded-2xl p-8"
    >
      {/* Row 1: First + Last name */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label>First Name</Label>
          <input
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            placeholder="Enter first name"
            className={inputClass}
            required
          />
        </div>
        <div>
          <Label>Last Name</Label>
          <input
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            placeholder="Enter last name"
            className={inputClass}
            required
          />
        </div>
      </div>

      {/* Row 2: Email + Phone */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label>Email</Label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter email address"
            className={inputClass}
            required
          />
        </div>
        <div>
          <Label>Phone Number</Label>
          <input
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="Enter contact number"
            className={inputClass}
          />
        </div>
      </div>

      {/* Row 3: Select Subject dropdown */}
      <div>
        <Label>Select Subject</Label>
        <div className="relative">
          <select
            name="subject"
            value={form.subject}
            onChange={handleChange}
            className={`${inputClass} appearance-none pr-10 cursor-pointer`}
          >
            <option value="" disabled>Select a subject</option>
            <option value="project-inquiry">General Inquiry</option>
            <option value="job-opportunity">Business Inquiry</option>
            <option value="vendor">Career Inquiry</option>
            <option value="general">Supplier Inquiry</option>
            <option value="other">Other</option>
          </select>
          {/* Chevron */}
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </div>

      {/* Row 4: Message */}
      <div>
        <Label>Message</Label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Write your message here"
          rows={5}
          className={`${inputClass} resize-none`}
          required
        />
      </div>

      {/* Submit button — right aligned */}
      <div className="flex justify-end pt-1">
        <button
          type="submit"
          disabled={sending}
          className="px-8 py-3 rounded-md text-sm font-semibold text-white transition-opacity disabled:opacity-70 cursor-pointer hover:bg-amber-600 bg-amber-500"
          
        >
          {sending ? 'Sending…' : 'Send Message'}
        </button>
      </div>
    </motion.form>
  )
}

// ─── Default export ───────────────────────────────────────────────────────────
export default function ContactForm() {
  return (
    <section className="bg-white pb-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-[491px_1fr] gap-8 items-start">
          <ContactInfoCard />
          <div className="py-2">
            <ContactFormFields />
          </div>
        </div>
      </div>
    </section>
  )
}