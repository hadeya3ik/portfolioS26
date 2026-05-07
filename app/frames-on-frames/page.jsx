import {ProjectContainer, Heading, Section, ParagraphGroup, ImageContainer} from '../../components/StyledComponents'
import Image from 'next/image'

function Page() {
  return (
    <ProjectContainer>
      <Heading title={"Frames on Frames"}/>
      <h1 className='text-3xl font-semibold'>Launching an Experimental Campaign Page for Warframes</h1>
      <Image src="/images/framesOnFrames.jpg"
        className="w-full h-full"
        alt="Warframes April Fools - Warframes wearing glasses"
        width={1100}
        height={1000} >
      </Image>
      <Details/>
      <Content/>
    </ProjectContainer>
  )
}

function Content() {
  return(
  <div className='flex flex-col gap-12'>

    <Section title="Context">
      <ParagraphGroup>
        <p>
          Warframe is an action video game developed by Digital Extremes.
        </p>
      </ParagraphGroup>
    </Section>

    <Section title="Overview" subTitle="An April Fools Campaign">
      <ParagraphGroup>
        <p>
          Frames for Frames is a store web page designed as a lighthearted prank for the community and fan 
          base. The page centred on an eyewear accessory designed specifically for Warframes. The goal was to treat an 
          intentionally unserious idea with an on-brand execution.
        </p>
      </ParagraphGroup>
    </Section>


    <Section title="The challenge" subTitle="Selling the illusion of a product without increasing production overhead">
      <ParagraphGroup>
        <p>
          The challenge was to present the concept as a branded product while maintaining a lightweight scope and minimal 
          production investment. The project was kept intentionally lightweight, with no additional asset requests and no 
          expectation of a real product.
        </p>
      </ParagraphGroup>
    </Section>


    <Section title="Solution" subTitle="Using blender to create key assets">
      <ParagraphGroup>
        <p>
          I was able to leverage my prior experience with Blender to create the necessary product assets using existing 
          resources. I then designed the web page to closely resemble other store product pages to help sell the 
          joke.
        </p>
      </ParagraphGroup>
        <ImageContainer>
          <Image src="/images/FramesBlender.png"
            className="w-full h-full bg-[#0000000b] rounded-sm"
            alt="Warframes with glasses as a Blender model"
            width={800}
            height={800} >
          </Image>
        </ImageContainer>
    </Section>


    <Section title="Brainstorm" subTitle="Exploration & Early Concepts">
      <ParagraphGroup>
        <p>
          Early concepts explored doodled eyewear and simple 3D glasses overlaid on characters. In both approaches, the eyewear looks 
          like an overlay rather than something designed for the character’s form, making the product feel less believable and undermining the tone.
        </p>
      </ParagraphGroup>
      <ImageContainer>
        <Image src="/images/FramesBrainstorm.png"
          className="w-full h-full bg-[#0000000b] rounded-sm"
          alt="Warframes April Fools Brainstorm ideas"
          width={800}
          height={800} >
        </Image>
      </ImageContainer>
    </Section>

    <Section title="Designing the Product" subTitle="Translating the concept into 3D">
      <ParagraphGroup>
        <p>
          I started by designing a simple SVG in Figma that outlined the main parts of the glasses: the frame, lenses, and legs.
          Each shape was then imported into Blender and converted into a mesh. From there, I extruded the geometry and softened the 
          edges and assembling the final 3D model.
        </p>
      </ParagraphGroup>
      <ImageContainer>
        <Image src="/images/Frames3dFrame.png"
          className="w-full h-full bg-[#0000000b] rounded-sm"
          alt="3D renders of glasses"
          width={800}
          height={800} >
        </Image>
      </ImageContainer>
    </Section>

    <Section title="Iteration 1" subTitle="3D Explorations">
      <ParagraphGroup>
        <p>
          <a 
            className="underline px-1 rounded text-foreground transition-colors duration-300 hover:text-secondary"
            href="https://www.warframe.com/steamworkshop/content-files-and-examples"
            target="_blank"
            rel="noopener noreferrer"
            >
              Warframe’s Steam Workshop
            </a>
          provides a publicly available set of character models and material sets. 
          Although the models are low-poly, working directly in Blender allowed the eyewear to be designed in relation 
          to the character’s form.
          The resulting model inherently resembled a showroom mannequin, an idea we leaned into.
        </p>
      </ParagraphGroup>
      <ImageContainer>
        <Image src="/images/FramesCharacterMaterial.png"
          className="w-full h-full bg-[#0000000b] rounded-sm"
          alt="Warframes April Fools material explorations"
          width={800}
          height={800} >
        </Image>
      </ImageContainer>
    </Section>
    
    <Section title="Iteration 2" subTitle="Lighting & Silhouette Studies">
      <ParagraphGroup>
        <p>
          The final assets uses darker silhouette renders as they mask the low-poly geometry while creating a more anonymous and 
          mysterious tone. Lights placed behind the models create a subtle glow that highlights the silhouettes.
        </p>
      </ParagraphGroup>
      <ImageContainer>
        <Image src="/images/FramesLighting.png"
          className="w-full h-full bg-[#0000000b] rounded-sm"
          alt="warframes silhouette gradient assets"
          width={800}
          height={800} >
        </Image>
      </ImageContainer>
    </Section>

    <Section title="Iteration 3" subTitle="Embracing the Joke ">
      <ParagraphGroup>
        <p>
          After feedback from the community and creative teams, the direction shifted toward a more silly and less realistic 
          tone. We revisited the original doodle concept and layering illustrated details over the Warframes.
        </p>
      </ParagraphGroup>
      <ImageContainer>
        <Image src="/images/FramesDoodle.png"
          className="w-full h-full bg-[#0000000b] rounded-sm"
          alt="Warframes April Fools doodled revisions"
          width={1000}
          height={1000} >
        </Image>
      </ImageContainer>
    </Section>

    <Section title="Final Designs" >
      <ImageContainer>
        <Image src="/images/FramesFinal.png"
          className="w-full h-full bg-[#0000000b] rounded-sm"
          alt="Warframes April Fools Wireframes"
          width={800}
          height={800} >
        </Image>
      </ImageContainer>
    </Section>

    <Section title="Live Website" >
      <div 
        className="w-full bg-[#17171a] aspect-video cursor-pointer rounded-sm overflow-hidden ring-1 ring-[#2b2a2d]"
      >
        <video
            className="h-full w-full object-cover"
            src="/videos/FramesWebPreview.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
      </div>
    </Section>

    <Section title="Outcome" subTitle="The April Fools experience was warmly received by the community.">
      <ParagraphGroup>
        <p>
          The April Fools experience was warmly received by the community! 
          The success of this gag has encouraged the team to continue exploring playful campaigns in future releases.
        </p>
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
          </div>
        </div>
        <div className='min-w-50  flex-1 flex flex-col gap-2'>
          <h3 className='font-semibold'>Team</h3>
          <div className='flex flex-col'>
            <span>1 Web developer</span>
            <span>1 Product Designer</span>
            <span>1 Product Manager</span>
          </div>
        </div>
      </div>
      <div className='flex flex-1 gap-8 md:gap-2 md:flex-row flex-col'>
        <div className='min-w-50  flex-1 flex flex-col gap-2'>
          <h3 className='font-semibold'>Skills</h3>
          <div className='flex flex-col'>
            <span>Product Design</span>
            <span>Web Design</span>
            <span>Blender</span>
          </div>
        </div>
        <div className='min-w-50  flex-1 flex flex-col gap-2'>
          <h3 className='font-semibold'>Timeline</h3>
          <div className='flex flex-col'>
            <span>Feb 2025 - April 2025</span>
          </div>
        </div>
      </div>
    </div>)
}

export default Page
