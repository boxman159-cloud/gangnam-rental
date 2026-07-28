import type { Metadata } from 'next'
import { rentalVenues } from '@/data/venues'
import VenueDetailClient from './VenueDetailClient'

const BASE = 'https://gangnam-rental.netlify.app'

export async function generateStaticParams() {
  return rentalVenues.map((v) => ({ id: v.id }))
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const venue = rentalVenues.find((v) => v.id === params.id)
  if (!venue) return {}
  return {
    title: `${venue.name} 대관`,
    description: `${venue.name} 대관 안내. ${venue.features.slice(0, 3).join(', ')}. 기업파티·브랜드론칭·팝업·촬영·피로연 문의 010-8215-8571`,
    alternates: { canonical: `${BASE}/venues/${venue.id}` },
    openGraph: {
      title: `${venue.name} 대관 | 강남 대관센터`,
      description: `${venue.rentalDesc.slice(0, 100)}...`,
      url: `${BASE}/venues/${venue.id}`,
      images: venue.thumbnail ? [{ url: venue.thumbnail, width: 1200, height: 630, alt: venue.name }] : [],
    },
  }
}

export default function Page() {
  return <VenueDetailClient />
}
