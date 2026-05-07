import Link from 'next/link'
import RollText from './RollText'

export function ProjectContainer({children}) {
  return (
  <div className="flex flex-col items-center min-h-screen font-sans max-w-screen">
    <main className="w-full max-w-4xl px-4 py-16 pb-16 pb-2 flex flex-col gap-8"> 
      {children}
    </main>
  </div>)

}

export function Heading({title}) {
  return (<div>
    <div className='flex justify-between'>
      <div className='flex gap-2'> 
        <Link href="/projects" className='flex gap-2'>←</Link>
        <RollText href="/projects" openInNewTab={false} >back</RollText>
      </div>
      <h3 className='font-semibold'>{title}</h3>
    </div>
    <hr className='mt-2'/>
  </div>) 
}


export function Section({ title, subTitle = "", children }) {
  return (
    <section className="flex flex-col gap-1">
      <div className='flex flex-col gap-1 mb-'>
        
        <h2 className="text-[18px] font-medium capitalize">{title}</h2>
        {subTitle && 
          <h3 className="text-[20px] font-semibold ">{subTitle}</h3>
        }
      </div>
      {children}
    </section>
  )
}

export function ParagraphGroup({ children }) {
  return (
    <div className="flex flex-col gap-1.5 ">
      {children}
    </div>
  )
}

export function ImageContainer({children}) {
  return (
    <div className='my-4 select-none'>
      {children}
    </div>
  )
}
