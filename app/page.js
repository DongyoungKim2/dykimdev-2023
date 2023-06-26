import Image from "next/image";
import Projects from "./projects";
import Publications from "./publications";
import Patents from "./patents";
import Landing from "./landing";
export default function Home() {
  return (
    <div>
      <Landing />
      <Experiences />
      <Education />
      <Projects />
      <Awards />
      <Patents />
      <Publications />
    </div>
  );
}

// function for education, with hero class contains a table of list of my education
export function Education() {
  return (
    <div className="hero min-h-screen bg-dreamy-gradient" id="education">
      <div className="hero-content text-center">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold py-10">EDUCATION</h1>

          <div className="overflow-x-auto">
            <table className="table  text-md ">
              {/* head */}
              <thead>
                <tr>
                  <th>YEARS</th>
                  <th>TITLE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2012 - 2016</td>

                  <td>
                    <div className="font-bold text-gray-800">
                      Doctor of Philosophy in Biomedical Engineering
                    </div>
                    <div>Texas A&M University Texas, U.S.A. </div>
                  </td>
                </tr>

                <tr>
                  <td>2010 - 2012</td>

                  <td>
                    <div className="font-bold text-gray-800">
                      Bachelor's degree in Electrical Engineering and Computer
                      Science
                    </div>
                    <div>The University of Texas at Dallas Texas, U.S.A. </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

// function for experiences, with hero class contains a table of list of my experiences
export function Experiences() {
  return (
    <div className="hero min-h-screen bg-base-100" id="experience">
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
                  <td>GPT Project Lead</td>
                  <td>
                    <div className="font-bold text-gray-800">
                      KB 국민은행, 금융AI센터
                    </div>
                    <div>서울, 대한민국 </div>
                  </td>
                </tr>

                <tr>
                  <td>2021 - 2022</td>
                  <td>OCR Team Leader</td>
                  <td>
                    <div className="font-bold text-gray-800">
                      KB 국민은행, 금융AI센터
                    </div>
                    <div>서울, 대한민국 </div>
                  </td>
                </tr>

                <tr>
                  <td>2021 - 2021</td>
                  <td>Senior Manager</td>
                  <td>
                    <div className="font-bold text-gray-800">
                      현대자동차, AIRS Company
                    </div>
                    <div>서울, 대한민국 </div>
                  </td>
                </tr>

                <tr>
                  <td>2020 - 2021</td>
                  <td>Manager</td>
                  <td>
                    <div className="font-bold text-gray-800">
                      삼성생명, Data Analytics Lab
                    </div>
                    <div>서울, 대한민국 </div>
                  </td>
                </tr>

                <tr>
                  <td>2017 - 2019</td>
                  <td>Postdoctoral researcher</td>
                  <td>
                    <div className="font-bold text-gray-800">
                      한국기초과학연구원 (IBS), 첨단연성물질 연구단{" "}
                    </div>
                    <div>울산, 대한민국 </div>
                  </td>
                </tr>

                <tr>
                  <td>2012 - 2016</td>
                  <td>Research Assistant</td>
                  <td>
                    <div className="font-bold text-gray-800">
                      Texas A&M University{" "}
                    </div>
                    <div>Texas, U.S.A </div>
                  </td>
                </tr>

                <tr>
                  <td>2010 - 2012</td>
                  <td>Research Assistant</td>
                  <td>
                    <div className="font-bold text-gray-800">
                      The University of Southwestern Medical Center{" "}
                    </div>
                    <div>Texas, U.S.A </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Awards() {
  return (
    <div className="hero min-h-screen bg-base-100" id="award">
      <div className="hero-content text-center">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold py-10">AWARDS</h1>

          <div className="overflow-x-auto">
            <table className="table  text-md ">
              {/* head */}
              <thead>
                <tr>
                  <th>YEARS</th>
                  <th>TITLE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2022</td>
                  <td>
                    <div className="font-bold text-gray-800">
                      한국지능정보시스템학회 추계 학술대회 우수논문상
                    </div>
                    <div>
                      Deep Learning OCR based document processing platform and
                      its application in financial domain.
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>2020</td>
                  <td>
                    <div className="font-bold text-gray-800">
                      IEEE ICDAR SROIE text localization task 2020 1 위
                    </div>
                    <div>
                      https://rrc.cvc.uab.es/?ch=13&com=evaluation&task=1
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>2020</td>
                  <td>
                    <div className="font-bold text-gray-800">
                      IEEE ICDAR SROIE text recognition task 2020 1 위
                    </div>
                    <div>
                      https://rrc.cvc.uab.es/?ch=13&com=evaluation&task=2
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>2018</td>
                  <td>
                    <div className="font-bold text-gray-800">
                      Shark Tank Competition 1 위
                    </div>
                    <div>
                      The 22nd International Conference On Miniaturized Systems
                      For Chemistry And Life Sciences, Taiwan
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>2016</td>
                  <td>
                    <div className="font-bold text-gray-800">
                      3D single molecule localization microscopy 부문 1 위
                    </div>
                    <div>SMLMS Challenge (EPFL), Swissland</div>
                  </td>
                </tr>

                <tr>
                  <td>2014 - 2016 </td>
                  <td>
                    <div className="font-bold text-gray-800">
                      Texas A&M University 연구 장학금{" "}
                    </div>
                    <div>Texas A&M University, Texas, U.S.A.</div>
                  </td>
                </tr>

                <tr>
                  <td>2011 - 2014 </td>
                  <td>
                    <div className="font-bold text-gray-800">
                      The University of Texas at Dallas 연구 장학금
                    </div>
                    <div>The University of Texas at Dallas, Texas, U.S.A.</div>
                  </td>
                </tr>

                <tr>
                  <td>2011</td>
                  <td>
                    <div className="font-bold text-gray-800">
                      Senior Design Project 2 위
                    </div>
                    <div>The University of Texas at Dallas, Texas, U.S.A.</div>
                  </td>
                </tr>

                <tr>
                  <td>2010 - 2012</td>
                  <td>
                    <div className="font-bold text-gray-800">
                      The University of Texas at Dallas 학사 장학금
                    </div>
                    <div>The University of Texas at Dallas, Texas, U.S.A.</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
