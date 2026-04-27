'use client'
import React from 'react'
import ApproachIntro from '@/components/ourapproach/Approachintro'
import ApproachSection from '@/components/ourapproach/Approachsection'
import ApproachBanner from '@/components/ourapproach/Approachbanner'
import Image from 'next/image'
import { motion } from 'framer-motion'
import constructionmanagement from "@/images/ourapproach/constructionmanagement.jpg";
import leanconstruction from "@/images/ourapproach/leanconstruction.jpg";
import preconstruction from "@/images/ourapproach/preconstruction.jpg";
import projectmanagement from "@/images/ourapproach/project-management.jpg";

// ─── Section data ─────────────────────────────────────────────────────────────
// Replace image URLs with your actual project photos

const sections = [
  {
    id: 'preconstruction',
    title: 'PRECONSTRUCTION',
    imagePosition: 'right' as const,
    image: preconstruction,
    imageAlt: 'Preconstruction site workers',
    paragraphs: [
      'Preconstruction establishes the foundation for successful project delivery. At this stage, we define scope, evaluate feasibility, and develop execution strategies that align with project objectives.',
      'By addressing critical factors early, including cost, timelines, materials, and technical requirements.',
      'We reduce uncertainty and create a clear path for execution.',
    ],
    tags: [
      'Scope definition & feasibility analysis',
      'Cost planning & budget alignment',
      'Scheduling & resource planning',
      'Risk identification and mitigation',
    ],
  },
  {
    id: 'project-management',
    title: 'PROJECT MANAGEMENT',
    imagePosition: 'left' as const,
    image: projectmanagement,
    imageAlt: 'Project management on site',
    paragraphs: [
      'Our project management approach ensures that all aspects of delivery are aligned, from design coordination to site execution.',
      'We maintain continuous oversight of timelines, resources, and stakeholders, ensuring that progress remains consistent and aligned with defined objectives.',
    ],
    tags: [
      'Stakeholder coordination & communication',
      'Schedule monitoring & progress tracking',
      'Quality assurance and compliance',
      'Resource allocation & management',
    ],
  },
  {
    id: 'lean-construction',
    title: 'LEAN CONSTRUCTION',
    imagePosition: 'right' as const,
    image: leanconstruction,
    imageAlt: 'Lean construction team meeting',
    paragraphs: [
      'Lean construction principles guide how we optimize processes, reduce inefficiencies, and improve productivity across all project stages.',
      'By focusing on value-driven execution, we ensure that resources are used effectively and that workflows remain efficient and structured.',
    ],
    tags: [
      'Workflow optimization',
      'Waste reduction',
      'Process efficiency',
      'Continuous performance evaluation',
    ],
  },
  {
      id: 'construction-management',
    title: 'CONSTRUCTION MANAGEMENT',
    imagePosition: 'left' as const,
    image: constructionmanagement,
    imageAlt: 'Construction management on site',
    paragraphs: [
      'Construction management focuses on the delivery phase, where planning is translated into physical execution.',
      'We oversee site operations, coordinate teams, and ensure that all work is carried out in accordance with defined specifications, safety standards, and project timelines.',
    ],
    tags: [
      'Site supervision and coordination',
      'Quality control & inspections',
      'Health & safety compliance',
      'Progress reporting & performance tracking',
    ],
  },
]

// ─── Page body ────────────────────────────────────────────────────────────────
export default function Ourapproachbody() {
  return (
    <>
      <ApproachIntro />
      {sections.map((s, i) => (
        <ApproachSection
          key={s.title}
          title={s.title}
          imagePosition={s.imagePosition}
          image={s.image}
          imageAlt={s.imageAlt}
          paragraphs={s.paragraphs}
          tags={s.tags}
          index={i}
          id={s.id}
        />
      ))}
      <ApproachBanner />
    </>
  )
}