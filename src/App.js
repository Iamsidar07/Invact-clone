
import React from "react";
function App() {
  return (
    <div>
     {/* header  */}
      <header className='bg-[#F7F4E9] p-5'>
      <div className='flex items-center justify-between '>
          <div className='flex items-center space-x-3'>
            <img src="https://pbs.twimg.com/profile_images/1597203076196478977/M28No3oa_400x400.png" alt="" className='h-16 object-contain ' />
            <span className='text-2xl font-bold'>INVACT</span>
          </div>
          <p className='px-14 py-3 border-[#F4410B] border-2 rounded-full cursor-pointer  text-[#F4410B] font-bold text-xl'>LOGIN</p>
      </div>
     </header>
     {/* main  */}
      <div className='bg-[#F7F4E9] p-5 h-screen items-center flex flex-col space-y-10'>
        <div className='text-center'>
          <h1 className='text-8xl font-bold'><span className='text-[#F4410B] text-center'>Craft</span> your way up,</h1>
          <h1 className='text-8xl font-bold'><span className='text-[#F4410B] text-center'>to</span> Suceess</h1>
        </div>
        <div className='text-center'>
          <p className='text-4xl '>Bring the will to Succeed,</p>
          <p className='text-4xl'>Get the Mentors & Opportunities</p>
        </div>
        <p className='px-[5%] py-4  rounded-full cursor-pointer  text-white font-bold text-xl bg-[#EB480C] shadow-xl shadow-white'>ENROLL NOW</p>

     </div>

     {/* about */}
      <div className='bg-[#F7F4E9] p-5 md:py-[5%]  items-center flex flex-col space-y-10'>
        
        <h1 className='text-7xl font-bold'>Invact Folio = Job Opportunities</h1>
        <div className="text-center">
          <p className='text-3xl'>Resumes alone don’t cut it anymore.</p>
          <p className='text-3xl'>Companies are looking for candidates that can solve problems and create solutions.</p>
        </div>
        <div className="text-center">
          <p className='text-3xl'>Invact solves these hurdles on your path to success, so you can</p>
          <p className='text-3xl'> learn well, grow strong and build powerful Folios to win opportunities.</p>
        </div>
      </div>
       {/* features  */}

      <div className='bg-[#F7F4E9] p-5 md:p-[5%]  items-center flex flex-col md:flex-row justify-center space-y-5  '>

        <div className='w-[29%] space-y-6 text-center p-5'>
          <img src="https://invact.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcraft_icon_v3.8117e99c.webp&w=1920&q=75" alt="" />
          <h1 className='text-2xl font-semibold'>Craft amazing Folios of Solutions</h1>
          <p className='text-lg'>Crafting Folios that showcase your ability to create solutions is part of the courses you do, boosting your employment opportunities.</p>
        </div>
        <div className='w-[29%] space-y-6 text-center p-5'>
          <img src="https://invact.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmentor_icon_v3.25e49bc3.webp&w=1920&q=75" alt="" />
          <h1 className='text-2xl font-semibold'>Mentorship by Industry Leaders</h1>
          <p className='text-lg'>Mentors with global industry experience to guide you on your journey for impactful and effective growth and learning, for life.</p>
        </div>
        <div className='w-[29%] space-y-6 text-center p-5'>
          <img src="https://invact.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmetaversity_icon_v3.3a56585e.webp&w=1920&q=75" alt="" />
          <h1 className='text-2xl font-semibold'>Metaverse + University = Metaversity</h1>
          <p className='text-lg'>Peer-to-peer learning with the community, engaging interactions, feedback loops in metaverse for a real-world experience.</p>
        </div>
      </div>

      {/* roadmaps  */}

      <div className='bg-white p-5 md:p-[5%] items-center flex flex-col space-y-10'>

        <h1 className='text-7xl font-bold'>Invact Courses for You</h1>
        <div className=' block md:flex text-center  justify-center items-center max-w-6xl mx-auto relative'>
          <div className='flex-1 '>
            <img src="https://invact.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcore_icon_v3.81b08bcd.webp&w=3840&q=75" alt="" className='bottom-44' />
          </div>
          <div className='w-[40%] space-y-4 text-left'>
            <h1 className='text-6xl font-bold'>Start with a</h1>
            <p className='text-6xl font-bold text-[#F4410B]'>Beginer</p>
            <p className='text-5xl font-bold text-[#F4410B]'>COURSE</p>
            <p className='text-2xl'><span className=' text-[#F4410B]'>Beginner</span> courses are designed to just get you into the course. It is an admission exercise for you to learn the basics and do some exercises.</p>
          </div>
          <img src="https://invact.com/firstline.svg" alt="" className='absolute w-1/2 bottom-[-12rem] left-[15rem]' />
        </div>
       
        <div className=' block md:flex text-center md:flex-row-reverse  justify-center items-center max-w-6xl mx-auto relative'>
          <div className='flex-1 '>
            <img src="https://invact.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffoundation_icon_v3.789cb5f0.webp&w=3840&q=75" alt="" className='bottom-44' />
          </div>
          <div className='w-[40%] space-y-4 text-left'>
            <h1 className='text-6xl font-bold'>Be an</h1>
            <p className='text-6xl font-bold text-[#F4410B]'>Associate</p>
            <p className='text-2xl'><span className=' text-[#F4410B]'>Associate courses </span> begin your Finance journey to get you job ready. Learn to create basic excel spreadsheets, understand the terms, and get your core skillset polished.</p>
          </div>
          <img src="https://invact.com/secondline.svg" alt="" className='absolute w-1/2 bottom-[-12rem] left-[15rem]' />
        </div>
       
        <div className=' block md:flex text-center  justify-center items-center max-w-6xl mx-auto relative'>
          <div className='flex-1 '>
            <img src="https://invact.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofessional_icon_v1.62f3d35a.webp&w=3840&q=75" alt="" className='bottom-44' />
          </div>
          <div className='w-[40%] space-y-4 text-left'>
            <h1 className='text-6xl font-bold'>Upgrade to</h1>
            <p className='text-6xl font-bold text-[#F4410B]'>Professional</p>
           
            <p className='text-2xl'><span className=' text-[#F4410B]'> Professional course</span> ensures your learning gets to a higher level. You build strong skill sets required on the job.</p>
          </div>
          <img src="https://invact.com/firstline.svg" alt="" className='absolute w-1/2 bottom-[-12rem] left-[15rem]' />
        </div>
        <div className=' block md:flex text-center md:flex-row-reverse justify-center items-center max-w-6xl mx-auto relative'>
          <div className='flex-1 '>
            <img src="https://invact.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffellowship_icon_v3.3c3a0169.webp&w=3840&q=75" alt="" className='bottom-44' />
          </div>
          <div className='w-[40%] space-y-4 text-left'>
            <h1 className='text-6xl font-bold'>Become an</h1>
            <p className='text-6xl font-bold text-[#F4410B]'>Expert</p>
            <p className='text-2xl'><span className=' text-[#F4410B]'>And the final </span>nail in the coffin. Here is the time for you to become an expert and create projects built by industry experts. You are all ready to get into a job from here.</p>
          </div>
          {/* <img src="https://invact.com/firstline.svg" alt="" className='absolute w-1/2 bottom-[-12rem] left-[15rem]' /> */}
        </div>
       
      </div>

      {/* programs  */}

      <div className='bg-[rgb(247,244,233)] p-5 md:p-[5%]  text-center space-y-10'>
        <h2 className='text-7xl font-bold'>Programs live now</h2>
        <div className='flex flex-col md:flex-row items-center justify-center md:w-[85%]  mx-auto md:space-x-4 bg-white shadow-lg'>
          <img src="https://invact.com/images/course/courseImage_v2.webp" alt="" className='object-contain max-w-lg' />
          <div className='space-y-6 p-2 text-left'>
            <p className='text-4xl font-semibold'>Invact <span className='text-[hsl(13.91,91.37%,50%)]'>Finance Program</span></p>
            <p className=' font-medium'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero delectus laudantium eos, impedit quasi optio saepe quia iure? Officia similique excepturi ea, quam labore voluptates totam nostrum quasi laborum quod repellat tempore esse ipsam magnam culpa neque debitis vel odit.</p>
            <p className='px-3 py-3 text-center max-w-[12rem]  rounded-full cursor-pointer  text-white font-bold text-lg bg-[#EB480C] shadow-xl shadow-white'>VIEW DETAIL</p>

          </div>
        </div>

      </div>

      {/* video  */}
      <div className='bg-white p-5 md:p-[5%] items-center justify-center h-screen flex flex-col space-y-10 relative'>
        <video src="https://invact.com/videos/Website_Video_Blured_v2.mp4" autoPlay muted loop className='absolute top-0 right-0 left-0 bottom-0'></video>
        <div className='absolute top-1/2 left-[24%] text-center space-y-4'>
          <h2 className='text-7xl font-bold text-white'>Explore</h2>
          <h2 className='text-7xl font-bold  text-white'>Invact Metaversity</h2>
        </div>
      </div>

      {/* get started  */}

      <div className='bg-black p-5 md:p-[5%]  items-center flex flex-col md:flex-row justify-center space-y-5 '>
        <div className=' block md:flex text-center md:flex-row-reverse  justify-center items-center max-w-6xl mx-auto'>
          <div className='flex-1 '>
            <img src="https://invact.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStart_icon_v2.66c37340.webp&w=3840&q=75" alt="" className='object-contain mt-20' />
          </div>
          <div className='w-[50%] space-y-4 text-left p-4'>
            <h2 className='text-7xl font-bold text-white'>Get started </h2>
            <span className='text-7xl font-bold text-[#F4410B]'><span className='text-white'>with</span> Invact</span>
            <p className='text-lg text-white'>Enroll into<span className=' text-[#F4410B]'> Invact’s Finance Program </span> to begin your Finance journey. The course is live NOW. Complete the beginner course on our platform to get access to the full course.</p>
            <p className='px-3 py-3 text-center max-w-[12rem]  rounded-full cursor-pointer  text-white font-bold text-lg bg-[#EB480C] shadow-xl shadow-black'>ENROLL NOW</p>
          </div>
        </div>

      </div>
      
      {/* footer  */}
      <footer className='text-center p-5 bg-black '>
        <p className='text-lg font-bold text-white'>made with 🧠 by <a href="http://www.twitter.com/iamsidar07" target="_blank" rel="noopener noreferrer" className='text-[#EB480C]'>Iamsidar07</a></p>
      </footer>
      
      



    </div>
  );
}

export default App;
