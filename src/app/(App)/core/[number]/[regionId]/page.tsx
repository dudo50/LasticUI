'use client'

import BrokerRegionData from '@/app/(App)/core/[number]/[regionId]/Core'
import SubTitle from '../../../samesections/SubTitle'

import PastTransactions from './PastTransactions'

export default function PageCore({ params }: { params: { number: string; regionId: string } }) {
  const CoreNb = parseInt(params.number)
  const RegionId = parseInt(params.regionId)
  return (
    <>
      <SubTitle subtitle={`A deeper look into the core Nb. ${params.number}`} />
      <section className="mx-auto max-w-9xl px-4 sm:px-6 lg:px-8 flex flex-col items-stretch">
        <BrokerRegionData coreNb={CoreNb} regionId={RegionId} />
        <PastTransactions coreNb={CoreNb} />
      </section>
    </>
  )
}
