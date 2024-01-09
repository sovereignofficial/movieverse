import { LandingSection } from '../LandingSection'

export const Team = () => {
  return (
    <LandingSection name='team'>
        <div className='flex flex-col justify-center items-center gap-10 col-span-2  w-full h-full'>
            <h2 className='text-5xl'>Open Source</h2>
            <p className='text-gray-400'>Movieverse is an open-source project. We welcome contributors and movie enthusiasts to join our mission!</p>
        </div>
    </LandingSection>
  )
}
