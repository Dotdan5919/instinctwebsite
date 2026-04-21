'use client'
import React from 'react'
import LeadershipIntro from '@/components/leadership_components/Leadershipintro'
import LeadershipGrid from '@/components/leadership_components/Leadershipgrid'
import { type Member } from '@/components/leadership_components/MemberCard'

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
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80',
    bio: `Oladokun Michael Olumuyiwa is a Civil Engineer with over 25 years of experience across construction and real estate. A graduate of the University of Ibadan, he holds a BSc and is a member of the Nigerian Society of Engineers (MNSE) and the Nigerian Institution of Civil Engineers (MNICE).

He has led the execution of diverse projects, including residential developments, commercial buildings, and infrastructure works across Lagos and beyond.`,
  },
]

const operationsMembers: Member[] = [
  {
    name: 'Oladokun Francis Olarenwaju',
    role: 'Project Manager',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    bio: 'Oladokun Francis Olarenwaju brings extensive experience in construction project management, overseeing multiple complex site operations across Lagos.',
  },
  {
    name: 'Eng. Eugene Okoror',
    role: 'Project Engineer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80',
    bio: 'Eng. Eugene Okoror is a seasoned project engineer responsible for the technical delivery and quality assurance across Instinct Engineering projects.',
  },
  {
    name: 'Arc. Badejo Adetimehin',
    role: 'Architect',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80',
    bio: 'Arc. Badejo Adetimehin leads the architectural design and planning function, ensuring all projects meet the highest standards of design integrity.',
  },
  {
    name: 'Oke Oluwafemi',
    role: 'Builder',
    image: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80',
    bio: 'Ganiyu Joseph Bolutife supervises on-site engineering activities ensuring safe, efficient, and high-quality project execution.',
  },
  {
    name: 'Arc. Ohumide Omisore',
    role: 'Architect',
    image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=800&q=80',
    bio: 'Arc. Ohumide Omisore supports the architectural team in delivering thoughtful, technically sound designs for all project types.',
  },
]

const managementMembers: Member[] = [
  {
    name: 'Oladokun Omolara Olapo',
    role: 'Accountant/Administrator',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80',
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
        columns={2}
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