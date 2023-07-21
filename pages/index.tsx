import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className="flex justify-center py-4 ">
      <Head>
        <title>Kris Oldale</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className="text-left sm:w-11/12 md:w-10/12 lg:w-5/12">
        <div className="grid sm:grid-cols-4 lg:grid-cols-5">
          <div></div>
          <div className="col-span-5 px-4">
            <center><h1 className="font-normal text-5xl pb-4">Kris Oldale</h1></center>
            <center className="pb-4">
            <div className="inline-grid gap-2 grid-cols-3">
            <div className="leading-sm grid items-center rounded-full border bg-sky-300 px-3 py-1 text-sm uppercase text-grey-700">
              React
            </div>
            <div className="leading-sm grid items-center rounded-full border bg-neutral-700 px-3 py-1 text-sm  uppercase text-gray-50">
              NextJS
            </div>
            <div className="leading-sm grid cols-3  items-center rounded-full border bg-yellow-300 px-3 py-1 text-sm uppercase text-grey-700">
              JavaScript
            </div>
            </div>
          </center>
            <p className="py-2 text-justify font-light text-gray-600">
            I’m Kris, I have a variety of experience in multiple sectors and am constantly looking to expand and enhance my skills. 
            I thrive off problems that require creative solutions and enjoy bringing ideas to fruition.
            I am currently looking for a trainee/junior React/NextJS Developer role and have recently completed a bootcamp to get closer to this goal. 
            I am also learning C++ to broaden my skillset.

              .
            </p>
            <div className="container flex justify-between py-4">
              
              <div>
                <img
                  className="inline w-6"
                  src="https://img.icons8.com/fluency/48/000000/github.png"
                />
                <span className="pl-1">
                  <a
                    className="text-sm font-light text-sky-700"
                    href="https://github.com/kris-o93"
                  >
                    @kris-o93
                  </a>
                </span>
              </div>
              <div>
                <img
                  className="inline w-6"
                  src="https://img.icons8.com/fluency/48/000000/linkedin.png"
                />
                <span className="pl-1">
                  <a
                    className="text-sm font-light text-sky-700"
                    href="https://www.linkedin.com/in/krisoldale/"
                  >
                    @krisoldale
                  </a>
                </span>
              </div>
              <div>
                <img
                  className="inline w-6"
                  src="https://img.icons8.com/color/48/000000/pdf.png"
                />
                <span className="pl-1">
                  <a
                    className="text-sm font-light text-sky-700"
                    href="/PDF/CV - Kris Oldale.pdf"
                  >
                    CV
                  </a>
                </span>
              </div>
            </div>
            <hr />
          </div>

          {/* Education Section */}
          <div></div>
          <div className="col-span-4 px-4">
            <h1 className="pt-8 pb-4 text-3xl font-light">Education</h1>
          </div>

          <div className="md: pl-4 text-left sm:pl-4 sm:text-left lg:pr-4 lg:text-right">
            <p className="py-4 text-xs font-light">2012</p>
          </div>
          <div className="col-span-4 px-4">
            <h3 className="pt-3 pb-1 text-base text-blue-800">NVQ Level 3 IT</h3>
            <h4 className="text-base font-normal">
              Training for Today{' '}
            </h4>
          </div>
          <div className="md: pl-4 text-left sm:pl-4 sm:text-left lg:pr-4 lg:text-right">
            <p className="py-4 text-xs font-light">2009</p>
          </div>
          <div className="col-span-4 px-4">
            <h3 className="pt-3 pb-1 text-base text-blue-800">9 GCSE's B-C</h3>
            <h4 className="text-base font-normal">
              Our Lady and St John Catholic Arts College{' '}
            </h4>
          </div>

          {/* Experience Section */}
          <div></div>
          <div className="col-span-4 px-4">
            <h1 className="pt-6 pb-4 text-3xl font-light">Experience</h1>
          </div>
          

          {/* CODE Lancs*/}
          <div className="md: pl-4 text-left sm:pl-4 sm:text-left lg:pr-4 lg:text-right">
            <p className="py-4 text-xs font-light">May 2023 - Present</p>
          </div>
          <div className="col-span-4 px-4">
            <h3 className="pt-3 pb-1 text-base text-blue-800">Student</h3>
            <h4 className="text-base font-normal">
              CODE Lancashire{' '}
            </h4>
           
            <p className="text-sm font-light pb-2">
            12-week coding bootcamp which offers guided learning via group sessions. This course involved a final project where 
            I created an online chat platform with NextJS. Communication with other students was key in aiding each other with 
            any issues that came up during the building of our web applications.
            </p>
            <p className="text-sm font-light pb-1">
               •	 Learning concepts in HTML, CSS, Python, Databases, Machine learning, JavaScript, React and NextJS.
             </p>
             <p className="text-sm font-light pb-4">  
               •	Bringing all these concepts together to create a final project.
            </p>
          </div>
          {/* Sapphire */}
          <div className="md: pl-4 text-left sm:pl-4 sm:text-left lg:pr-4 lg:text-right">
            <p className="py-4 text-xs font-light">Jan. 2022 - May 2023</p>
          </div>
          <div className="col-span-4 px-4">
            <h3 className="pt-3 pb-1 text-base text-blue-800 ">Operative</h3>
            <h4 className="text-base font-normal">
              Sapphire Utility Solutions{' '}
            </h4>
            <p className="text-sm font-light pb-2">
            Involved in the Highways Department working across national sites for contracts overseen by United Utilities, 
            Carnells, Amey, BT and various county councils. In this role I initially started with high pressure jetting of 
            gullys, but after demonstrating technical aptitude, was quickly moved into a role that involved using the crawler
            camera for video surveys, survey plotting and reports of drainage infrastructure.
            </p>
            <p className="text-sm font-light pb-1">
               •	Surveys of infrastructure using iPEK camera equipment alongside Kaarbontech.
             </p>
             <p className="text-sm font-light pb-4">  
               •	High pressure jetting of gullys, storm drains and BT boxes.
            </p>
          </div>

          {/* G&B */}
          <div className="md: pl-4 text-left sm:pl-4 sm:text-left lg:pr-4 lg:text-right">
            <p className="py-4 text-xs font-light">July 2018 - Aug. 2018</p>
          </div>
          <div className="col-span-4 px-4">
            <h3 className="pt-3 pb-1 text-base text-blue-800">App Development Intern</h3>
            <h4 className="text-base font-normal">
              Graham & Brown{' '}
            </h4>
            <p className="text-sm font-light pb-2">
            Worked on an internal mobile application that helped the business with customer service, customer retention and data 
            collection of trends. During my 8-week internship, I was 1 of 4 interns involved and given full autonomy of the process 
            of building a mobile app, with the assistance of the senior IT team if required. No specific roles in the team where given, 
            but I quickly identified myself and others strengths and weaknesses and ensured the team worked as a cohesive unit.
            </p>
            <p className="text-sm font-light pb-1">
               •	Aided with project management, user testing and stakeholder meetings.             </p>
             <p className="text-sm font-light pb-4">  
               •	Designed front end using XAML alongside learning some basic C# to aid with the backend development. Xamarin forms was used for the framework.
            </p>
          </div>

          
          {/* End */}
        </div>
      </main>
    </div>
  )
}

export default Home
