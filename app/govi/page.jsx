import {ProjectContainer, Heading, Section, ParagraphGroup, ImageContainer} from '../../components/StyledComponents'
import Image from 'next/image'

function Page() {
  return (
    <ProjectContainer>
      <Heading title={"Govi"}/>
      <h1 className='text-3xl font-semibold'>Building a Smart Lighting Control System</h1>
      <div 
        className="w-full bg-[#17171a] aspect-video cursor-pointer overflow-hidden rounded-sm ring-1 ring-[#2b2a2d]"
      >
        <video
          className="h-full object-cover scale-[1.05] origin-bottom"
          src="/videos/Govi.mp4"
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
    <Section title="Background" subTitle="Govee is a smart-home app used to control Govee lighting devices">
      <ParagraphGroup>
        <p>
          Users interact with devices from a central dashboard. Each device supports a 
          set of capabilities and selecting a device opens a view with controls for each
          capability.
        </p>
      </ParagraphGroup>
    </Section>

    <Section title="Terminology">
      <ParagraphGroup>
        <ul>
          <li><span className='font-semibold'>Device:</span> A physical Govee light</li>
          <li><span className='font-semibold'>Capability:</span> An action a device supports (power, brightness, color)</li>
          <li><span className='font-semibold'>Control:</span> The UI element used to modify a capability</li>
        </ul>
      </ParagraphGroup>
    </Section>


    <Section title="Overview" subTitle="Govi is a remake of the Govee app">
      <ParagraphGroup>
        <p>
          By focusing solely on light controls, the interface is more minimal, direct,
           and easier to navigate.
        </p>
      </ParagraphGroup>
      <ImageContainer>
          <Image src="/images/GovePleasee.jpg"
            className="w-full h-full bg-[#0000000b] rounded-sm"
            alt="Gove Mobile and Tablet Interface"
            width={3000}
            height={3000} >
          </Image>
        </ImageContainer>
    </Section>


    <Section title="Motivation" subTitle="Why rebuild an app that already works?">
      <ParagraphGroup>
        <p>
          In July 2024, I was learning Next.js and deciding what to build alongside it. 
          As a frequent user of the Govee app, I noticed repeated friction in everyday 
          interactions and began exploring a redesign of the software, hashing out 
          quality-of-life improvements along the way.
        </p>
      </ParagraphGroup>
    </Section>


    <Section title="The Problem" subTitle="Synchronous interactions create friction in everyday control">
      <ParagraphGroup>
        <p>
          Feature wise, the Govee app is pretty on par with most smart home apps. 
          One of the biggest drawbacks is its reliance on synchronous request handling.
        </p>
        <p>
          When navigating between devices, users must wait for each device to load and 
          changing the control temporarily block the UI until a request resolves. Additionally, the UI does not show 
          the state of the bulb other than its on/off state.
        </p>
      </ParagraphGroup>
      
      <ImageContainer>
        <div 
          className="w-full bg-[#E2E4E5] flex flex-row cursor-pointer overflow-hidden rounded-sm "
        >
          <video
              className="flex-1 min-w-0 object-cover"
              src="/videos/GoveeLoading.mp4"
              autoPlay
              loop
              muted
              playsInline
          />
          <video
              className="flex-1 min-w-0 object-cover"
              src="/videos/GoveeStateResponse.mp4"
              autoPlay
              loop
              muted
              playsInline
          />
          <video
              className="flex-1 min-w-0 object-cover"
              src="/videos/GoveeUIBlock.mp4"
              autoPlay
              loop
              muted
              playsInline
          />
        </div>
      </ImageContainer>
      <ParagraphGroup>
        <p>
          This creates friction when making multiple changes, especially without predefined 
          groups, making exploratory adjustments and batch updates feel slow and interrupted.
        </p>
      </ParagraphGroup>
    </Section>


    <Section title="Existing Data Model" subTitle="A device-first data flow">
      <ParagraphGroup>
        <p>
          The original Govee interface mirrors the structure of the Govee API. The API returns
          a list of devices each which have its own supported capabilities. Capability is 
          controlled independently, forming a hierarchical model where devices act as containers 
          for capabilities and each capability maps to a distinct control.
        </p>
        <ImageContainer>
          <Image src="/images/GoviPrevFlow.png"
            className="w-full h-full bg-[#0000000b] rounded-sm"
            alt="Govi Previous Architecture Chart "
            width={2000}
            height={2000} >
          </Image>
        </ImageContainer>
        <p>
          This hierarchy introduces excessive navigation and interaction overhead. Users must 
          move through multiple layers to perform actions, wait for device state to load 
          before making changes, and repeat the same flow when adjusting multiple devices.
        </p>
      </ParagraphGroup>
    </Section>

    <Section title="Introducing Govi" subTitle="Reframing the smart lighting experience">
      <ParagraphGroup>
        <p>
          Govi is a faster smart-home dashboard designed specifically for lighting devices.
        </p>
        <p>
          It surfaces device state immediately, reduces navigation depth, and
          supports fast, non-blocking batch updates.
        </p>
      </ParagraphGroup>
    </Section>


    <Section title="Implemented Data Model" subTitle="Decoupling devices from controls">
      <ParagraphGroup>
        <p>
          Instead of mapping each device to its own nested capability views, Govi separates
           devices from controls. Devices are fetched from the API and filtered by supported 
           capabilities, allowing each control to operate independently of any single device. 
        </p>
      </ParagraphGroup>
      <ImageContainer>
        <Image src="/images/GoviAfterFlow.png"
          className="w-full h-full bg-[#0000000b] rounded-sm"
          alt="Govi After Architecture Chart"
          width={2000}
          height={2000} >
        </Image>
      </ImageContainer>
      <ParagraphGroup>
        <p>
          Controls apply updates based on the currently selected device(s).
        </p>
        <p>
          This architecture limits control groups to devices that share the same
          capabilities, a tradeoff that works well for a lighting only system.
        </p>
      </ParagraphGroup>
    </Section>
    

    <Section title="Device Navigation" subTitle="Staying in the flow while switching devices">
      <ParagraphGroup>
        <p>
          Instead of widgets, devices are displayed in a horizontal sequence with one
          device in focus. Users can swipe, scroll, or use navigation keys to quickly 
          adjust the selected device.
        </p>
        <div 
          className="w-full bg-[#111111] aspect-video cursor-pointer overflow-hidden rounded-sm"
        >
          <video
              className="h-full"
              src="/videos/GoviSwipe.mp4"
              autoPlay
              loop
              muted
              playsInline
          />
        </div>
        <p>
          Because device switching happens within the same view, tasks that once 
          required multiple pages can now be completed by simply swiping through the 
          dashboard.
        </p>
      </ParagraphGroup>
    </Section>


    <Section title="Grouping Without Setup" subTitle="Temporary device selection for Multi Select and Batch Controls">
      <ParagraphGroup>
        <p>
          Govi introduces a selection mode that lets users apply changes to multiple 
          devices at once by toggling active devices and controlling them together.
        </p>
        <div 
          className="w-full bg-[#111111] aspect-video cursor-pointer overflow-hidden rounded-sm"
        >
          <video
              className="h-full "
              src="/videos/GoviSelectMode.mp4"
              autoPlay
              loop
              muted
              playsInline
          />
        </div>
        <p>
          Most smart-home apps require predefined groups for batch controls. Here, users 
          can group devices without prior configuration, apply changes, and return to 
          individual control without additional navigation.
        </p>
      </ParagraphGroup>
    </Section>

    <Section title="Challenges" subTitle="Syncing UI to device updates">
      <ParagraphGroup>
        <p>
          One of the main challenges in building Govi was keeping the UI in sync with 
          the physical device state.
        </p>
        <p>
          Each device is represented by a light-bulb display that reflects its current 
          physical state. To keep this display accurate, the state is stored by device 
          ID, with each entry holding the latest values for that device.
        </p>
        <p>
          When a control request completes, the corresponding device state is updated, 
          triggering a re-render and keeping the UI aligned with any changes. Controls 
          can operate on one or many device IDs, allowing batch updates.
        </p>
      </ParagraphGroup>
    </Section>

    <Section title="Next Steps" subTitle="Iterations and insights for a future update">
      <ParagraphGroup>
        <p>
          Feel free to check it out on
          <a 
            className="underline px-1 rounded text-foreground transition-colors duration-300 hover:text-secondary"
            href="https://github.com/hadeya3ik/govi"
            target="_blank"
            rel="noopener noreferrer"
            >Github.
          </a>
          Overall, I’m very satisfied with the final 
          result, and it’s something I use over the original Govee app.
        </p>
        <p>
          In the future, I would like to better support users with a larger number of devices.
          I currently manage 6 lights, but for someone with double or more, a swipe-based 
          interface may not scale as well. To address this, I would explore adding a more compact grid view. 
        </p>
      </ParagraphGroup>
    </Section>

    <Section title="Learnings">
      <ParagraphGroup>
        <h3 className="text-[20px] mt-1 font-semibold ">Design and development as one</h3>
        <p>
          A lot of my time was spent developing the front-end of the product. 
          By studying the API’s design I was able to mentally map how the system behaves 
          and was able to make more informed design decisions. 
        </p>
        <h3 className="mt-2 text-[20px] font-semibold " >Simple designs hold a lot of complexity</h3>
        <p>
          Something as simple as swiping to select the current device required careful 
          research and iterations to implement. Through this process, I learned how to manage 
          multiple element references using 
          <a 
            className="underline px-1 rounded text-foreground transition-colors duration-300 hover:text-secondary"
            href="https://react.dev/learn/manipulating-the-dom-with-refs#how-to-manage-a-list-of-refs-using-a-ref-callback"
            target="_blank"
            rel="noopener noreferrer"
            >ref callbacks
          </a>
          to drive DOM behaviour.
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
            <span>Frontend Engineer</span>
            <span>Product Designer</span>
          </div>
        </div>
        <div className='min-w-50  flex-1 flex flex-col gap-2'>
          <h3 className='font-semibold'>Tools</h3>
          <div className='flex flex-col'>
            <span>Next.js</span>
            <span>TypeScript</span>
            <span>Figma</span>
          </div>
        </div>
      </div>
      <div className='flex flex-1 gap-8 md:gap-2 md:flex-row flex-col'>
        <div className='min-w-50  flex-1 flex flex-col gap-2'>
          <h3 className='font-semibold'>Skills</h3>
          <div className='flex flex-col'>
            <span>Product Design</span>
            <span>Frontend Engineering </span>
            <span>User Research</span>
          </div>
        </div>
        <div className='min-w-50  flex-1 flex flex-col gap-2'>
          <h3 className='font-semibold'>Timeline</h3>
          <div className='flex flex-col'>
            <span>July 2024 - Sep 2024</span>
          </div>
        </div>
      </div>
    </div>)
}

export default Page
