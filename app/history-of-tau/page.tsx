'use client'
import {ProjectContainer, Heading, Section, ParagraphGroup, ImageContainer} from '../../components/StyledComponents'
import FloralReveal from '../../components/animationComponents/floralReveal'
import Parallax from '../../components/animationComponents/parallax'
import ButtonHover from "../../components/animationComponents/buttonHover"
import TextReveal from '../../components/animationComponents/textReveal'
import { useState } from 'react'
import Image from 'next/image'

function page() {
  return (
    <ProjectContainer>
          <Heading title={"History of Tau Teaser"}/>
          <h1 className='text-3xl font-semibold'>Designing a Narrative Web Experience for Warframes</h1>
          <div className='overflow-hidden'>
            <video
              className="h-full object-cover scale-[1.1] origin-bottom"
              src="/videos/TauTeaser.mp4"
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
  const [count, setCount] = useState(0)
  return(
  <div className='flex flex-col gap-12'>

    <Section title="Context" >
      <ParagraphGroup>
        <p>
          Warframe is an action video game developed by Digital Extremes. The Old Peace is a new narrative chapter to the game’s story.
        </p>
      </ParagraphGroup>
    </Section>

    <Section title="Overview" subTitle="The History of Tau Teaser is an interactive web page that invites players to step into the game. ">
      <ParagraphGroup>
        <p>
          The goal was to immerse players in the narrative, build hype for the Old Peace update, and encouraging 
          new players to sign up and existing players to return to the game. 
        </p>
      </ParagraphGroup>
    </Section>


    <Section title="Challenge" subTitle="Creating impact under tight timelines">
      <ParagraphGroup>
        <p>
          Due to planning issues this project had a tight timeline and we needed to balance ambition with fast and realistic 
          execution. The teaser was to release ahead of the game update, meaning we needed to generate excitement without revealing 
          major story spoilers.
        </p>
        <p>
          As a result, we needed to focused on quick wins to make navigation feel 
          tactile and rewarding, all without increasing production overhead. 
        </p>
      </ParagraphGroup>
    </Section>


    <Section title="Solution" subTitle="Using motion and interaction to deliver immersion">
      <ParagraphGroup>
        <p>
          I collaborating closely with our web developer to prototype animations and effects to move quickly without 
          added overhead.
        </p>
      </ParagraphGroup>
      <ImageContainer>
        <Image src="/images/TauMainFlows.png"
          className="w-full h-full bg-[#0000000b] rounded-sm"
          alt="History of Tau selected wireframes"
          width={800}
          height={800} >
        </Image>
      </ImageContainer>
    </Section>

    <div className='flex flex-col'>
      <h2 className='text-lg font-medium mb-2'>Outcomes</h2>
      <div className='flex justify-between md:flex-row flex-col gap-4'>
        <div className='flex flex-col '>
          <h3 className='text-2xl font-semibold'>325,000+</h3>
          <p className='text-md'>User interactions </p>
        </div>
        <div className='flex flex-col'>
          <h3 className='text-2xl font-semibold'>Top 5</h3>
          <p className='text-md'>Most-played games within a week of launch</p>
        </div>
        <div className='flex flex-col'>
          <h3 className='text-2xl font-semibold'>Increased Revenue</h3>
          <p className='text-md'>Following release</p>
        </div>
      </div>  
    </div>
    


    <Section title="User Flow" subTitle="Guiding players through an interactive journey">
      <ParagraphGroup>
        <p>
          The trailer invites players to choose their own path by selecting options tied to one of five Focus Schools. 
          After selecting an option, players are prompted to enter the game and complete a challenge. 
        </p>
        <p>
          Each mission must 
          be completed before progressing to the next. At the end, a page displays aggregate data showing the path made 
          by players across the experience as well as a button to replay the experience to unlock new paths. 
        </p>
      </ParagraphGroup>

      <ImageContainer>
          <Image src="/images/TauUserFlows.png"
            className="w-full h-full bg-[#0000000b] rounded-sm"
            alt="History of Tau user flows"
            width={900}
            height={900} >
          </Image>
        </ImageContainer>
    </Section>


    <Section title="Design Direction" subTitle="Translating in-game visuals for the web">
      <ParagraphGroup>
        <p>
          {/* The project aligned with Warframe’s current web design system, while drawing inspiration from in-game elements. */}
          After reviewing early visuals for the upcoming update, I noticed many in-game elements featured subtle blue 
          glows and ambient particle effects, which I incorporated these details in the website.
        </p>
        <ImageContainer>
          <Image src="/images/TauBrainStorm.png"
            className="w-full h-full bg-[#0000000b] rounded-sm"
            alt="History of Tau brainstorm images"
            width={800}
            height={800} >
          </Image>
        </ImageContainer>
        <p>
          I initially explored a stone-like background with engraved or filigree details. However, because The Old Peace 
          is closely tied to themes of blooms and xenoflora, I shifted toward a geometric floral motif instead.
        </p>
        <ImageContainer>
          <Image src="/images/TauDesign.png"
            className="w-full h-full bg-[#0000000b] rounded-sm"
            alt="History of Tau floral designs"
            width={800}
            height={800} >
          </Image>
        </ImageContainer>
        <p>
          The final design was built in layers, using blend modes and soft blurs to create a glowing, textured effect that 
          echoes the game’s visual art.
        </p>
      </ParagraphGroup>
    </Section>


    <Section title="Final Designs" >
      <ParagraphGroup>
        <ImageContainer>
          <Image src="/images/TauFigmaOverview.png"
            className="w-full h-full bg-[#0000000b] rounded-sm"
            alt="History of Tau main figma wireframes"
            width={800}
            height={800} >
          </Image>
        </ImageContainer>
      </ParagraphGroup>
    </Section>

    <Section title="Motion & Interaction" subTitle="Using GSAP to animate the designs ">
      <ParagraphGroup>
        <p>
          Given the tight timeline, we had limited support from the multimedia team and worked primarily with the static 
          assets available. Animation became a key tool for adding depth and interactivity. I used GSAP to bring the designs 
          to life and add subtle motion throughout.
        </p>
      </ParagraphGroup>
    </Section>

    <Section title="SVG Draw" subTitle="Animating the floral motif SVG">
      <ParagraphGroup>
        <p>
          I used GSAP’s
          <a 
            className="underline px-1 rounded text-foreground transition-colors duration-300 hover:text-secondary"
            href="https://gsap.com/docs/v3/Plugins/DrawSVGPlugin/"
            target="_blank"
            rel="noopener noreferrer"
            >Draw SVG Plugin
          </a>
           to progressively draw the illustration, sequencing each element with a timeline to reveal 
          the main decorative element of the web page. 
        </p>
      </ParagraphGroup>
      <ImageContainer>
        <div className='relative w-full h-full'>
          <FloralReveal key={count} count={count} ></FloralReveal>
          <button className='rounded-xs bg-[#f4f0ea] text-[#161616] absolute top-0 cursor-pointer border border-[#b9b1a7] px-2 py-1 m-2 transition-colors hover:bg-[#e2d3c3]' onClick={() => {setCount(count + 1)}}>reset animation</button>
        </div>
      </ImageContainer>

    </Section>


    <Section title="Image interactions" subTitle="Creating depth through parallax">
      <ParagraphGroup>
        <p>
          I layered each of the static images in photoshop and used GSAP to drive a subtle mouse hover parallax effect, 
          creating an illusion of dept.
        </p>
      </ParagraphGroup>
      <ImageContainer>
        <div className='w-full h-full rounded-sm overflow-hidden'>
          <Parallax></Parallax>
        </div>
      </ImageContainer>

    </Section>

    <Section title="Text animation" subTitle="Syncing the narration with the visuals">
      <ParagraphGroup>
        <p>
          As the narration plays, the text reveals itself to guide the user through the story.
        </p>
      </ParagraphGroup>
      <ImageContainer>
        <div className='w-full h-full rounded-sm overflow-hidden'>
          <TextReveal></TextReveal>
        </div>
      </ImageContainer>
    </Section>

    <Section title="Button Hover" subTitle="subtle glow based interactions">
      <ParagraphGroup>
        <p>
          A simple hover effect using blend modes to introduce a soft glow on interaction.
        </p>
      </ParagraphGroup>
      <ImageContainer>
        <div className='w-full h-full rounded-sm overflow-hidden'>
          <ButtonHover></ButtonHover>
        </div>
      </ImageContainer>
    </Section>

    <Section title="Impact">
      <ParagraphGroup>
        <p>
          The interactive teaser marked our first use of an immersive, web-based experience ahead of a major release. 
          It was officially Launched on December 10th 2025. Released alongside The Old Peace, it successfully built 
          anticipation and increased engagement ahead of launch.
        </p>
        <ul className='list-disc pl-5'>
          <li>
            Over 325,000 unique completions of the interactive teaser
          </li>
          <li>
            A significant lift in revenue following release
          </li>
          <li>
            Warframe reached the top 5 most-played games within three days of launch
          </li>
        </ul>
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
            <span>Product Designer</span>
            <span>Interaction Developer</span>
          </div>
        </div>
        <div className='min-w-50  flex-1 flex flex-col gap-2'>
          <h3 className='font-semibold'>Team</h3>
          <div className='flex flex-col'>
            <span>1 Web developer</span>
            <span>1 Product Designer</span>
            <span>1 Web Producer</span>
          </div>
        </div>
      </div>
      <div className='flex flex-1 gap-8 md:gap-2 md:flex-row flex-col'>
        <div className='min-w-50  flex-1 flex flex-col gap-2'>
          <h3 className='font-semibold'>Skills</h3>
          <div className='flex flex-col'>
            <span>Product Design</span>
            <span>User Research</span>
            <span>GSAP animations</span>
          </div>
        </div>
        <div className='min-w-50  flex-1 flex flex-col gap-2'>
          <h3 className='font-semibold'>Timeline</h3>
          <div className='flex flex-col'>
            <span>Oct 2025 - Dec 2025</span>
          </div>
        </div>
      </div>
    </div>)
}

export default page