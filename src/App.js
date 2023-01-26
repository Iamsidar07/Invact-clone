
import React from "react";
function App() {
  return (
    <div>
      {/* header  */}
      <header className='bg-[#F7F4E9] p-2 md:p-5'>
        <div className='flex items-center justify-between '>
          <div className='flex items-center space-x-3'>
            <img src="https://pbs.twimg.com/profile_images/1597203076196478977/M28No3oa_400x400.png" alt="" className='h-6 md:h-16 object-contain ' />
            <span className='text-lg md:text-2xl font-bold'>INVACT</span>
          </div>
          <p className='px-6 md:px-14 py-3 border-[#F4410B] border-2 rounded-full cursor-pointer  text-[#F4410B] font-bold text-xl'>LOGIN</p>
        </div>
      </header>
      {/* main  */}
      <div className='bg-[#F7F4E9] p-5 md:p-5 h-[50vh] justify-center md:h-screen items-center flex flex-col space-y-10'>
        <div className='text-center'>
          <h1 className='text-2xl md:text-7xl font-bold'><span className='text-[#F4410B] text-center'>Craft</span> your way up,</h1>
          <h1 className='text-2xl md:text-7xl font-bold'><span className='text-[#F4410B] text-center'>to</span> Suceess</h1>
        </div>
        <div className='text-center'>
          <p className='text-xl md:text-3xl '>Bring the will to Succeed,</p>
          <p className='text-xl md:text-3xl'>Get the Mentors & Opportunities</p>
        </div>
        <p className='px-5 md:px-[5%] py-3 md:py-4  rounded-full cursor-pointer  text-white font-bold text-xl bg-[#EB480C] shadow-xl shadow-white'>ENROLL NOW</p>

      </div>

      {/* about */}
      <div className='bg-[#F7F4E9] p-2 md:py-[4%]  items-center flex flex-col space-y-10'>

        <h1 className='text-xl md:text-6xl font-bold'>Invact Folio = Job Opportunities</h1>
        <div className="text-center">
          <p className='text-lg md:text-2xl'>Resumes alone don’t cut it anymore.</p>
          <p className='text-lg md:text-2xl'>Companies are looking for candidates that can solve problems and create solutions.</p>
        </div>
        <div className="text-center">
          <p className='text-lg md:text-2xl'>Invact solves these hurdles on your path to success, so you can</p>
          <p className='text-lg md:text-2xl'> learn well, grow strong and build powerful Folios to win opportunities.</p>
        </div>
      </div>
      {/* features  */}

      <div className='bg-[#F7F4E9] p-5 md:p-[5%]  items-center flex flex-col md:flex-row justify-center space-y-5 md:space-y-0 '>

        <div className='w-full md:w-[29%] space-y-6 text-center p-2 md:p-5'>
          <img src="https://invact.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcraft_icon_v3.8117e99c.webp&w=1920&q=75" alt="" className="object-contain" />
          <h1 className='text-lg md:text-2xl font-semibold'>Craft amazing Folios of Solutions</h1>
          <p className=' md:text-lg'>Crafting Folios that showcase your ability to create solutions is part of the courses you do, boosting your employment opportunities.</p>
        </div>
        <div className='w-full md:w-[29%] space-y-6 text-center p-2 md:p-5'>
          <img src="https://invact.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmentor_icon_v3.25e49bc3.webp&w=1920&q=75" alt="" className="object-contain" />
          <h1 className='text-lg md:text-2xl font-semibold'>Mentorship by Industry Leaders</h1>
          <p className=' md:text-lg'>Mentors with global industry experience to guide you on your journey for impactful and effective growth and learning, for life.</p>
        </div>
        <div className='w-full md:w-[29%] space-y-6 text-center p-2 md:p-5'>
          <img src="https://invact.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmetaversity_icon_v3.3a56585e.webp&w=1920&q=75" alt="" className="object-contain" />
          <h1 className='text-lg md:text-2xl font-semibold'>Metaverse + University = Metaversity</h1>
          <p className='text- md:text-lg'>Peer-to-peer learning with the community, engaging interactions, feedback loops in metaverse for a real-world experience.</p>
        </div>
      </div>

      {/* roadmaps  */}

      <div className='bg-white p-5 md:p-[5%] items-center flex flex-col space-y-10'>

        <h1 className='text-3xl md:text-7xl font-bold'>Invact Courses for You</h1>
        <div className=' flex flex-col md:flex-row text-center  justify-center items-center max-w-6xl mx-auto relative'>
          <div className='flex-1 '>
            <img src="https://invact.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcore_icon_v3.81b08bcd.webp&w=3840&q=75" alt="" className='bottom-44' />
          </div>
          <div className='md:w-[40%] space-y-1 md:space-y-4 text-left'>
            <h1 className='text-lg md:text-6xl font-bold'>Start with a</h1>
            <p className='text-lg md:text-6xl font-bold text-[#F4410B]'>Beginer</p>
            <p className=' md:text-5xl font-bold text-[#F4410B]'>COURSE</p>
            <p className=' md:text-2xl'><span className=' text-[#F4410B]'>Beginner</span> courses are designed to just get you into the course. It is an admission exercise for you to learn the basics and do some exercises.</p>
          </div>
          <img src="https://invact.com/firstline.svg" alt="" className='hidden md:inline-flex absolute w-1/2 bottom-[-12rem] left-[15rem]' />
        </div>

        <div className=' flex flex-col text-center md:flex-row-reverse  justify-center items-center max-w-6xl mx-auto relative'>
          <div className='flex-1 '>
            <img src="https://invact.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffoundation_icon_v3.789cb5f0.webp&w=3840&q=75" alt="" className='bottom-44' />
          </div>
          <div className='md:w-[40%] space-y-1 md:space-y-4 text-left'>
            <h1 className='text-lg md:text-6xl font-bold'>Be an</h1>
            <p className='text-lg md:text-6xl font-bold text-[#F4410B]'>Associate</p>
            <p className='md:text-2xl'><span className=' text-[#F4410B]'>Associate courses </span> begin your Finance journey to get you job ready. Learn to create basic excel spreadsheets, understand the terms, and get your core skillset polished.</p>
          </div>
          <img src="https://invact.com/secondline.svg" alt="" className='hidden md:inline-flex absolute w-1/2 bottom-[-12rem] left-[15rem]' />
        </div>

        <div className=' flex flex-col md:flex-row text-center  justify-center items-center max-w-6xl mx-auto relative'>
          <div className='flex-1 '>
            <img src="https://invact.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofessional_icon_v1.62f3d35a.webp&w=3840&q=75" alt="" className='bottom-44' />
          </div>
          <div className='md:w-[40%] space-y-1 md:space-y-4 text-left'>
            <h1 className='text-lg md:text-6xl font-bold'>Upgrade to</h1>
            <p className='text-lg md:text-6xl font-bold text-[#F4410B]'>Professional</p>

            <p className='md:text-2xl'><span className=' text-[#F4410B]'> Professional course</span> ensures your learning gets to a higher level. You build strong skill sets required on the job.</p>
          </div>
          <img src="https://invact.com/firstline.svg" alt="" className='hidden md:inline-flex absolute w-1/2 bottom-[-12rem] left-[15rem]' />
        </div>
        <div className='flex flex-col text-center md:flex-row-reverse justify-center items-center max-w-6xl mx-auto relative'>
          <div className='flex-1 '>
            <img src="https://invact.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffellowship_icon_v3.3c3a0169.webp&w=3840&q=75" alt="" className='bottom-44' />
          </div>
          <div className='md:w-[40%] space-y-1 md:space-y-4 text-left'>
            <h1 className='text-lg md:text-6xl font-bold'>Become an</h1>
            <p className='text-lg md:text-6xl font-bold text-[#F4410B]'>Expert</p>
            <p className='md:text-2xl'><span className=' text-[#F4410B]'>And the final </span>nail in the coffin. Here is the time for you to become an expert and create projects built by industry experts. You are all ready to get into a job from here.</p>
          </div>
          {/* <img src="https://invact.com/firstline.svg" alt="" className='absolute w-1/2 bottom-[-12rem] left-[15rem]' /> */}
        </div>

      </div>

      {/* programs  */}

      <div className='bg-[rgb(247,244,233)] p-2 md:p-[5%]  text-center space-y-10 '>
        <h2 className='text-3xl md:text-7xl font-bold'>Programs live now</h2>
        <div className='flex flex-col md:flex-row items-center justify-center md:w-[90%]  mx-auto md:space-x-4 bg-white shadow-lg rounded-lg md:rounded-3xl'>
          <img src="https://invact.com/images/course/courseImage_v2.webp" alt="" className='object-contain w-full md:w-[50%]' />
          <div className='space-y-6 p-2 text-left'>
            <p className='text-2xl md:text-5xl font-semibold'>Invact <span className='text-[hsl(13.91,91.37%,50%)]'>Finance Program</span></p>
            <p className=' font-medium'> A 6-month program, divided into 4 courses, designed to take you from zero to expert level in the Finance field. To join the course, you need to complete the 5 proofs of work comprising basic exercises using Excel and Google Slides. Click below button to know more about the program.</p>
            <p className='px-3 py-3 text-center max-w-[12rem]  rounded-full cursor-pointer  text-white font-bold text-lg bg-[#EB480C] shadow-xl shadow-white'>VIEW DETAIL</p>

          </div>
        </div>

      </div>

      {/* video  */}
      <div className='bg-[#F3F6FD]  items-center justify-center h-[25vh] md:h-screen flex flex-col space-y-10 relative'>
        <video src="https://invact.com/videos/Website_Video_Blured_v2.mp4" autoPlay muted loop  className='w-full  '></video>
        <div className='text-center space-y-4 absolute top-[40%'>
          <h2 className=' text-3xl md:text-7xl font-bold text-white'>Explore</h2>
          <h2 className=' text-3xl md:text-7xl font-bold  text-white'>Invact Metaversity</h2>
        </div>
      </div>

      {/* get started  */}

      <div className='bg-black p-2 md:p-[5%]  items-center flex flex-col md:flex-row justify-center space-y-5 '>
        <div className=' block md:flex text-center md:flex-row-reverse  justify-center items-center max-w-6xl mx-auto'>
          <div className='flex-1 '>
            <img src="https://invact.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStart_icon_v2.66c37340.webp&w=3840&q=75" alt="" className='object-contain mt-20' />
          </div>
          <div className='md:w-[50%] space-y-4 text-left p-4'>
            <h2 className='text-3xl md:text-7xl font-bold text-white'>Get started </h2>
            <span className='text-3xl md:text-7xl font-bold text-[#F4410B]'><span className='text-white'>with</span> Invact</span>
            <p className='text-sm md:text-lg text-white'>Enroll into<span className=' text-[#F4410B]'> Invact’s Finance Program </span> to begin your Finance journey. The course is live NOW. Complete the beginner course on our platform to get access to the full course.</p>
            <p className='px-3 py-3 text-center max-w-[12rem]  rounded-full cursor-pointer  text-white font-bold text-lg bg-[#EB480C] shadow-xl shadow-black'>ENROLL NOW</p>
          </div>
        </div>

      </div>

      {/* footer  */}
      <footer className='text-center p-2 md:p-5 bg-black '>
        <p className='text-sm md:text-lg font-bold text-white'>made with 🧠 by <a href="http://www.twitter.com/iamsidar07" target="_blank" rel="noopener noreferrer" className='text-[#EB480C]'>Iamsidar07</a></p>
      </footer>





    </div>
  );
}

export default App;
