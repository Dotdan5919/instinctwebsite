'use client'
import React from 'react'
import LeadershipIntro from '@/components/leadership_components/Leadershipintro'
import LeadershipGrid from '@/components/leadership_components/Leadershipgrid'
import { type Member } from '@/components/leadership_components/Membercard'
import Image from 'next/image'
const MrOladokun = '/images/leadership/mroladokun.png'
const Mrbadejo = '/images/leadership/badejo.png'
const Mreugene = '/images/leadership/eugene.png'
const Mrfrancis = '/images/leadership/francis.png'
const Mrganiyu = '/images/leadership/ganiyu.png'
const Mroke = '/images/leadership/oke.png'
const Mrsoladolapo = '/images/leadership/oladolapo.png'
const MrOlumide = '/images/leadership/olumide.png'


// ─── Data ─────────────────────────────────────────────────────────────────────
// Replace image URLs with your actual assets.
// Members without an image will show the silhouette placeholder.

const boardMembers: Member[] = [
  {
    name: 'Mr. Olufemi Falola',
    role: 'Chairman',
    // no image → silhouette card with amber left border
    bio: 'Mr. Olufemi Falola serves as the Chairman of Instinct Engineering Construction Company Limited, providing strategic direction and governance oversight to the organisation.',
  },
  {
    name: 'Oladokun Michael Olumuyiwa',
    role: 'Managing Director/CEO',
    image: MrOladokun,
    bio: `Oladokun Michael Olumuyiwa is a Civil Engineer with over 25 years of experience across construction and real estate. A graduate of the University of Ibadan, he holds a BSc and is a member of the Nigerian Society of Engineers (MNSE) and the Nigerian Institution of Civil Engineers (MNICE).

He has led the execution of diverse projects, including residential developments, commercial buildings, and road infrastructure.

His leadership is defined by structured execution, technical precision, and consistent delivery standards.`,
  },
]

const operationsMembers: Member[] = [
  {
    name: 'Oladokun Francis Olarenwaju',
    role: 'Project Manager',
    image: Mrfrancis,
    bio: `Oladokun Francis Olarenwaju holds an HND in Urban and Regional Planning, with a postgraduate qualification in Planning Studies.
    
    With over 20 years of experience, he oversees project coordination and delivery, ensuring alignment across planning, execution, and completion phases.`,
  },
  {
    name: 'Eng. Eugene Okoror',
    role: 'Project Engineer',
    image: Mreugene,
    bio: 'Eng. Eugene Okoror is a seasoned project engineer responsible for the technical delivery and quality assurance across Instinct Engineering projects.',
  },
  {
    name: 'Arc. Badejo Adetimehin',
    role: 'Architect',
    image: Mrbadejo,
    bio: 'Arc. Badejo Adetimehin leads the architectural design and planning function, ensuring all projects meet the highest standards of design integrity.',
  },
  {
    name: 'Oke Oluwafemi',
    role: 'Builder',
    image: Mroke,
    bio: 'Oke Oluwafemi is a skilled builder with hands-on experience in residential and commercial construction.',
  },
  {
    name: 'Ojo Oluwasegun',
    role: 'Builder',
    // no image → silhouette
    bio: 'Ojo Oluwasegun contributes expert building skills to the operations team, supporting the delivery of quality construction works.',
  },
  {
    name: 'Ganiyu Joseph Bolutife',
    role: 'Site Engineer',
    image: Mrganiyu,
    bio: 'Ganiyu Joseph Bolutife supervises on-site engineering activities ensuring safe, efficient, and high-quality project execution.',
  },
  {
    name: 'Arc. Olumide Omisore',
    role: 'Architect',
    image: MrOlumide,
    bio: 'Arc. Olumide Omisore supports the architectural team in delivering thoughtful, technically sound designs for all project types.',
  },
]

const managementMembers: Member[] = [
  {
    name: 'Oladokun Omolara Olapo',
    role: 'Accountant/Administrator',
    image: Mrsoladolapo,
    bio: 'Oladokun Omolara Olapo manages the financial and administrative operations of Instinct Engineering, ensuring accurate reporting and smooth organisational processes.',
  },
]

// ─── Page body ────────────────────────────────────────────────────────────────
export default function OurLeadershipBody() {
  return (
    <>
      <LeadershipIntro />

      {/* Board section — up to 3 cols but only 2 members, so use 2-col grid */}
      <LeadershipGrid
        title="Board of Directors"
        members={boardMembers}
        columns={3}
      />

      <LeadershipGrid
        title="Operations"
        members={operationsMembers}
        columns={3}
      />

      <LeadershipGrid
        title="Management"
        members={managementMembers}
        columns={3}
      />
    </>
  )
}
