import {ProjectContainer, Heading, Section, ParagraphGroup, ImageContainer} from '../../components/StyledComponents'
import Image from 'next/image'

function page() {
  return (
    <ProjectContainer>
      <Heading title={"Smile"}/>
      <h1 className='text-3xl font-semibold'>Revamping a Student Led Brand for a Growing Community</h1>
      <div className='aspect-video'>
        <video
          className="h-full w-full object-cover"
          src="/videos/smile.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
      <Details/>
      <Content/>
    </ProjectContainer>
  )
}

function Content() {
  return(
  <div className='flex flex-col gap-12'>

    <Section title="Background" >
      <ParagraphGroup>
        <p>
          Smile is a student mental health and inner-life enrichment club focused on promoting campus wellness. 
          As the lead of the design team for a year, I have been responsible for revamping the current website, 
          designing posts for the Instagram page and establishing a clear visual Identity for SMILE.
        </p>
      </ParagraphGroup>
      <ImageContainer>
        <Image src="/images/smile/Logo.png"
          className="w-full h-full"
          alt="smile club logo and design motif"
          width={800}
          height={800} >
        </Image>
      </ImageContainer>
    </Section>

    

    <Section title="Instagram Posts">
      <ParagraphGroup>
        <p>
          I created a design guideline for our social media team to simplify and streamline the process of creating posts. 
          The guideline highlights our typography, color palette, and key visual elements to maintain a consistent look 
          across all our content. You can read more about it on this 
          <a 
            className="underline px-1 rounded transition-colors hover:bg-[#242428]"
            href="https://cloud-durian-fe8.notion.site/Smile-Club-Design-Guidelines-16ee0528e56180c899cfc891838d5339"
            target="_blank"
            rel="noopener noreferrer"
            >
            Notion page.
          </a>
        </p>
      </ParagraphGroup>
      <ImageContainer>
        <Image src="/images/smile/InstagramPosts.png"
          className="w-full h-full"
          alt="Smile club instagram posts"
          width={800}
          height={800} >
        </Image>
      </ImageContainer>
    </Section>

    <Section title="Designing the Website">
      <ParagraphGroup>
        <p>
          Similar to our Instagram, the web designs features vibrant gradients as the key visual element aligning with 
          SMILES positive values.
        </p>
        <ImageContainer>
          <Image src="/images/smile/WebWireframes.png"
            className="w-full h-full"
            alt="smile club website wireframes"
            width={800}
            height={800} >
          </Image>
        </ImageContainer>
        <p>
          CSS has properties like 
          <span className='font-mono px-1 py-0.5 rounded-sm text-sm bg-[#242428] text-[#f4f0ea] mx-1 whitespace-nowrap'>
            radial-gradient
          </span>
          , 
          <span className='font-mono px-1 py-0.5 rounded-sm text-sm bg-[#242428] text-[#f4f0ea] mx-1 whitespace-nowrap'>
            layer-blur
          </span>  
          and
          <span className='font-mono px-1 py-0.5 rounded-sm text-sm bg-[#242428] text-[#f4f0ea] mx-1 whitespace-nowrap'>
            linear-gradient
          </span> 
          which can be used to create gradients and then animated using a keyframes transformation. While these methods work 
          well for simpler effects, they are not ideal for creating layered gradient patterns as seen in the hero section.
        </p>
      </ParagraphGroup>
    </Section>

    <Section title="Shaders">
      <ParagraphGroup>
        <p>
          Shaders allow us to fully customize the patterns of the gradient by using dynamic, noise-based or volumetric
          methods to compute them. It runs on the GPU and calculated the colour for each pixel rendered and is optimized
          to work independently from the React render cycle.
        </p>
        <p>
          To generate the gradient we utilized the cosine gradient Library by 
          <a 
            className="underline px-1 rounded transition-colors hover:bg-[#242428]"
            href="https://github.com/thi-ng/color/blob/master/src/gradients.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Thi.ng/Color.
          </a> The formula allows to create a 
          smooth, continuous gradient based on the cosine function. It works by oscillating the intensity of RGB values using 
          in the function where each wave represents a color channel, and their amplitudes, frequencies, and phases determine 
          the gradients appearance.
        </p>
        <p>
          View the code for the fragment shader on 
          <a 
            className="underline px-1 rounded transition-colors hover:bg-[#242428]"
            href="https://github.com/hadeya3ik/shaders"
            target="_blank"
            rel="noopener noreferrer"
            >
            Github
          </a>
        </p>
        <ImageContainer>
          <video
            className="h-full w-full object-cover"
            src="/videos/Shader.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </ImageContainer>
      </ParagraphGroup>
    </Section>
    
  </div>)
}


function Details() {
  return (
    <div className=' flex justify-between gap-4 pb-8'>
      <div className='flex flex-1 gap-8 md:gap-2 md:flex-row flex-col'>
        <div className='min-w-50  flex-1 flex flex-col gap-2'>
          <h3 className='font-semibold'>Role</h3>
          <div className='flex flex-col'>
            <span>Lead Designer</span>
            <span>Lead Developer</span>
          </div>
        </div>
        <div className='min-w-50  flex-1 flex flex-col gap-2'>
          <h3 className='font-semibold'>Tools</h3>
          <div className='flex flex-col'>
            <span>Figma</span>
            <span>Next.js</span>
            <span>Three.js</span>
          </div>
        </div>
      </div>
      <div className='flex flex-1 gap-8 md:gap-2 md:flex-row flex-col'>
        <div className='min-w-50  flex-1 flex flex-col gap-2'>
          <h3 className='font-semibold'>Skills</h3>
          <div className='flex flex-col'>
            <span>Product Design</span>
            <span>Web Design</span>
            <span>Web Development</span>
          </div>
        </div>
        <div className='min-w-50  flex-1 flex flex-col gap-2'>
          <h3 className='font-semibold'>Timeline</h3>
          <div className='flex flex-col'>
            <span>April 2024 - April 2025</span>
          </div>
        </div>
      </div>
    </div>)
}

export default page
