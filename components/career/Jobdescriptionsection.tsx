'use client'
import { useState } from 'react'

// This would normally come from your data/API based on job ID
const job = {
  title: 'Site Engineer',
  location: 'Lagos, Nigeria',
  employmentType: 'Full-Time',
  department: 'Construction / Project Delivery',
  experienceLevel: 'Mid-Level',
  roleOverview: [
    'A career at Instinct Engineering offers the opportunity to work on real projects that demand technical skill, discipline, and accountability.',
    'From residential developments to infrastructure works, our teams operate in structured environments where every role contributes to successful delivery.',
    'We value individuals who are committed to growth, take ownership of their work, and understand the importance of precision in execution.',
  ],
  responsibilities: [
    'Supervise daily construction activities on site',
    'Ensure work is executed according to drawings and specifications',
    'Coordinate site teams, subcontractors, and suppliers',
    'Monitor progress against project timelines',
    'Conduct site inspections and quality checks',
    'Maintain site records and reporting',
    'Enforce health and safety standards',
    'Identify and resolve on-site challenges',
  ],
  requirements: [
    "Bachelor's degree in Civil Engineering or related field",
    '2–5 years of relevant construction experience',
    'Strong understanding of construction processes and site operations',
    'Ability to read and interpret technical drawings',
    'Good communication and coordination skills',
    'Familiarity with safety regulations and standards',
    'Proficiency in basic project documentation',
  ],
}

export default function JobDescriptionSection() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    coverLetter: '',
    cv: null as File | null,
    agreed: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, cv: e.target.files?.[0] ?? null }))
  }

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, agreed: e.target.checked }))
  }

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault()
    console.log('Form submitted:', form)
  }

  return (
    <section className="w-full bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-14">

        {/* Page heading */}
        <h1 className="font-bebas text-gray-900 text-[44px] sm:text-[56px] lg:text-[64px]
                       leading-none tracking-wide text-center mb-16">
          JOB DESCRIPTION
        </h1>

        {/* Two column layout — job details left, form right */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 lg:gap-16 items-start">

          {/* ─── LEFT — Job details ─────────────────────────────── */}
          <div className="flex flex-col gap-10">

            {/* Job meta */}
            <div className="flex flex-col gap-3">
              <h2 className="text-gray-900 text-xl font-bold font-montserrat">
                {job.title}
              </h2>
              <p className="text-gray-700 text-sm font-montserrat">
                <span className="font-bold">Location:</span>{' '}
                <span className="font-normal">{job.location}</span>
              </p>
              <p className="text-gray-700 text-sm font-montserrat">
                <span className="font-bold">Employment Type:</span>{' '}
                <span className="font-normal">{job.employmentType}</span>
              </p>
              <p className="text-gray-700 text-sm font-montserrat">
                <span className="font-bold">Department:</span>{' '}
                <span className="font-normal">{job.department}</span>
              </p>
              <p className="text-gray-700 text-sm font-montserrat">
                <span className="font-bold">Experience Level:</span>{' '}
                <span className="font-normal">{job.experienceLevel}</span>
              </p>
            </div>

            {/* Role Overview */}
            <div className="flex flex-col gap-4">
              <h3 className="text-gray-900 text-lg font-bold font-montserrat">
                Role Overview
              </h3>
              {job.roleOverview.map((para, i) => (
                <p key={i} className="text-gray-600 text-sm font-montserrat leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            {/* Key Responsibilities */}
            <div className="flex flex-col gap-4">
              <h3 className="text-gray-900 text-lg font-bold font-montserrat">
                Key Responsibilities
              </h3>
              <ul className="flex flex-col gap-3">
                {job.responsibilities.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600 text-sm font-montserrat leading-relaxed">
                    <span className="text-gray-400 flex-shrink-0 mt-0.5">·</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Requirements */}
            <div className="flex flex-col gap-4">
              <h3 className="text-gray-900 text-lg font-bold font-montserrat">
                Requirements
              </h3>
              <ul className="flex flex-col gap-3">
                {job.requirements.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600 text-sm font-montserrat leading-relaxed">
                    <span className="text-gray-400 flex-shrink-0 mt-0.5">·</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* ─── RIGHT — Application form ───────────────────────── */}
          <div
            className="rounded-2xl p-8 flex flex-col gap-5 sticky top-8"
            style={{ backgroundColor: '#8B6200' }}
          >
            <h3 className="text-white text-lg font-semibold font-montserrat">
              Apply for this position
            </h3>

            {/* First Name + Last Name */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-white text-xs font-montserrat font-medium">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Enter first name"
                  value={form.firstName}
                  onChange={handleChange}
                  className="bg-white rounded px-3 py-2.5 text-gray-700 text-xs
                             font-montserrat outline-none focus:ring-2 focus:ring-amber-400
                             placeholder:text-gray-400 w-full"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-white text-xs font-montserrat font-medium">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Enter last name"
                  value={form.lastName}
                  onChange={handleChange}
                  className="bg-white rounded px-3 py-2.5 text-gray-700 text-xs
                             font-montserrat outline-none focus:ring-2 focus:ring-amber-400
                             placeholder:text-gray-400 w-full"
                />
              </div>
            </div>

            {/* Email + Phone */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-white text-xs font-montserrat font-medium">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email address"
                  value={form.email}
                  onChange={handleChange}
                  className="bg-white rounded px-3 py-2.5 text-gray-700 text-xs
                             font-montserrat outline-none focus:ring-2 focus:ring-amber-400
                             placeholder:text-gray-400 w-full"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-white text-xs font-montserrat font-medium">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter contact number"
                  value={form.phone}
                  onChange={handleChange}
                  className="bg-white rounded px-3 py-2.5 text-gray-700 text-xs
                             font-montserrat outline-none focus:ring-2 focus:ring-amber-400
                             placeholder:text-gray-400 w-full"
                />
              </div>
            </div>

            {/* Cover Letter */}
            <div className="flex flex-col gap-1">
              <label className="text-white text-xs font-montserrat font-medium">
                Cover Letter
              </label>
              <textarea
                name="coverLetter"
                placeholder="Write here"
                value={form.coverLetter}
                onChange={handleChange}
                rows={6}
                className="bg-white rounded px-3 py-2.5 text-gray-700 text-xs
                           font-montserrat outline-none focus:ring-2 focus:ring-amber-400
                           placeholder:text-gray-400 w-full resize-none"
              />
            </div>

            {/* Upload CV */}
            <div className="flex flex-col gap-1">
              <label className="text-white text-xs font-montserrat font-medium">
                Upload CV/Resume
              </label>
              <div className="flex items-center gap-3">
                <label
                  htmlFor="cv-upload"
                  className="cursor-pointer bg-[#FFFFFF] border border-[#D0D5DD] transition-colors
                             text-[#98A2B3] text-xs font-montserrat font-medium px-4 py-2 rounded"
                >
                  Choose file
                </label>
                <span className="text-white/70 text-xs font-montserrat">
                  {form.cv ? form.cv.name : 'No file choosen'}
                </span>
                <input
                  id="cv-upload"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFile}
                  className="hidden"
                />
              </div>
              <p className="text-white/50 text-[10px] font-montserrat mt-1">
                Allowed Type(s): .pdf, .doc, .docx
              </p>
            </div>

            {/* Consent checkbox */}
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id="agree"
                checked={form.agreed}
                onChange={handleCheckbox}
                className="mt-0.5 accent-amber-500 flex-shrink-0"
              />
              <label htmlFor="agree" className="text-white/70 text-xs font-montserrat leading-relaxed">
                By using this form you agree with the storage & handling of your data. *
              </label>
            </div>

            {/* Submit button */}
            <div className="flex justify-end">
              <button
                onClick={handleSubmit}
                className="bg-amber-500 hover:bg-amber-600 transition-colors text-white
                           text-sm font-semibold font-montserrat px-8 py-3 rounded-lg"
              >
                Submit
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}