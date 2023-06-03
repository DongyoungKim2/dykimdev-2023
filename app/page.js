import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Landing />
      <Experiences />
    </div>
  )
}


export function Landing() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-xl">

          <h2 className="text-3xl font-bold">ARTIFICIAL</h2>
          <h2 className="text-3xl font-bold">INTELLIGENCE</h2>
          <h2 className="text-3xl font-bold">PROFESSIONAL</h2>
          <h2 className="text-3xl font-bold">FOR SCIENCE & INDUSTRY</h2>
          <h1 className="text-5xl font-bold">DONGYOUNG KIM, Ph.D.</h1>
          <div>
            <button className="btn btn-primary">이력서</button>
            <button className="btn btn-primary">Curriculum Vitae</button>
            <button className="btn btn-primary">Blog</button>
          </div>
        </div>
      </div>
    </div>
  )
}

// function for experiences, with hero class contains a table of list of my experiences
export function Experiences() {

  return (
    <div className="hero min-h-screen bg-base-100">
      <div className="hero-content text-center">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold py-10">EXPERIENCES</h1>

          <div className="overflow-x-auto">
            <table className="table  text-md ">
              {/* head */}
              <thead>
                <tr>
                  <th>YEARS</th>
                  <th>TITLE</th>
                  <th>COMPANY</th>
                </tr>
              </thead>
              <tbody>

                <tr>
                  <td>2022 - 현재</td>
                  <td>GPT Platform Project Lead</td>
                  <td>
                    <div className="font-bold text-gray-800">KB 국민은행, 금융AI센터</div>
                    <div>서울, 대한민국 </div>
                  </td>
                </tr>

                <tr>
                  <td>2021 - 2022</td>
                  <td>OCR Team Leader</td>
                  <td>
                    <div className="font-bold text-gray-800">KB 국민은행, 금융AI센터</div>
                    <div>서울, 대한민국 </div>
                  </td>
                </tr>

                <tr>
                  <td>2021 - 2021</td>
                  <td>Senior Manager</td>
                  <td>
                    <div className="font-bold text-gray-800">현대자동차, AIRS Company</div>
                    <div>서울, 대한민국 </div>
                  </td>
                </tr>

                <tr>
                  <td>2020 - 2021</td>
                  <td>Manager</td>
                  <td>
                    <div className="font-bold text-gray-800">삼성생명, Data Analytics Lab</div>
                    <div>서울, 대한민국 </div>
                  </td>
                </tr>

                <tr>
                  <td>2017 - 2019</td>
                  <td>Postdoctoral researcher</td>
                  <td>
                    <div className="font-bold text-gray-800">한국기초과학연구원 (IBS), 첨단연성물질 연구단 </div>
                    <div>울산, 대한민국 </div>
                  </td>
                </tr>

                <tr>
                  <td>2012 - 2016</td>
                  <td>Research Assistant</td>
                  <td>
                    <div className="font-bold text-gray-800">Texas A&M University </div>
                    <div>Texas, U.S.A </div>
                  </td>
                </tr>

                <tr>
                  <td>2010 - 2012</td>
                  <td>Research Assistant</td>
                  <td>
                    <div className="font-bold text-gray-800">The University of Southwestern Medical Center </div>
                    <div>Texas, U.S.A  </div>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}