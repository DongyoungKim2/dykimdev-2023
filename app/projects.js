"use client";
import Image from "next/image";
import { isMobile } from "is-mobile";
import { useEffect, useState } from "react";

var circleSize =
  "w-36 rounded-full ring ring-primary  ring-offset-base-100 ring-offset-2";

export function CircleSize() {
  const [isUserOnMobile, setIsUserOnMobile] = useState(false);

  useEffect(() => {
    setIsUserOnMobile(isMobile());
  }, []);

  if (isUserOnMobile) {
    return "w-16 rounded-full ring ring-primary  ring-offset-base-100 ring-offset-2";
  } else {
    return "w-36 rounded-full ring ring-primary  ring-offset-base-100 ring-offset-2";
  }
}

// function for projects, with hero class contains a table of list of my projects
export default async function Projects() {
  return (
    <div className="hero min-h-screen bg-base-200" id="project">
      <div className="hero-content text-center">
        <div className="max-w-4xl">
          <h1 className="text-3xl font-bold py-10">PROJECTS</h1>
          <div className="grid grid-cols-4 gap-4">
            <Gpt />
            <Lvlm />
            <Kbaiocr />
            <KBAIOCRModel />
            <DataLake />
            <SLIOCR />
            <GraphDB />
            <AIM />
            <Hist />
            <AITomography />
            <Spinner />
            <Evident />
            <SR />
            <RMUM />
            <HER23 />
            <HER2 />
          </div>
        </div>
      </div>
    </div>
  );
}
export function Gpt() {
  const circleSize = CircleSize();
  return (
    <div
      className="tooltip tooltip-bottom"
      data-tip="GPT (Generative Pretrained Transformer) Platform )roject"
    >
      <div className="avatar" onClick={() => window.gpt.showModal()}>
        <div className={circleSize}>
          <img src="/projects/gpt.png" />
        </div>
      </div>
      <dialog id="gpt" className="modal">
        <form method="dialog" className="modal-box w-11/12 max-w-5xl">
          <button
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
          <h1 className="text-3xl text-left font-bold py-10">
            GPT Platform Project
          </h1>
          <Image
            src="/projects/gpt.png"
            alt="Image"
            width="0"
            height="0"
            sizes="100vw"
            className="w-9/12 mx-auto h-auto"
          />
          <p>KB-GPT Platform</p>
          <div className="py-4">
            <ul className="list-disc list-inside py-2 text-left">
              <li>한글가능한 GPT 모델 SFT 및 RLHF 수행</li>
              <li>GPT 모델을 잘 활용하기 위한 GPT 플랫폼 기획 및 개발 </li>
              <li>
                GPT 사용에 대한 컴플라이언스 해결을 위한 GPT Complience Monitor
                개발
              </li>
            </ul>
          </div>
          <div class="modal-action">
            <button class="btn">Close</button>
          </div>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      <div className="font-bold py-2 text-base">GPT Platform (2023)</div>
    </div>
  );
}

export function Lvlm() {
  const circleSize = CircleSize();
  return (
    <div
      className="tooltip tooltip-bottom"
      data-tip="Large Vision-Language Model (LVLM) Training Project"
    >
      <div className="avatar" onClick={() => window.lvlm.showModal()}>
        <div className={circleSize}>
          <img src="/projects/lvlm.png" />
        </div>
      </div>
      <dialog id="lvlm" className="modal">
        <form method="dialog" className="modal-box w-11/12 max-w-5xl">
          <button
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
          <h1 className="text-3xl text-left font-bold py-10">
            Large Vision-Language Model (LVLM) Training Project
          </h1>
          <Image
            src="/projects/lvlm.png"
            alt="Image"
            width="0"
            height="0"
            sizes="100vw"
            className="w-9/12 mx-auto h-auto"
          />
          <p>LVLM 의 모식도 및 작동 예시</p>
          <div className="py-4">
            <ul className="list-disc list-inside py-2 text-left">
              <li>
                한글 및 영문 문서 이미지내 문자를 읽고 이해할 수 있는 Large
                Vision-Language Model 훈련 프로젝트 리드.
              </li>
              <li>
                Transformers Encoder-Decoder 구조로 이미지를 구획화하여
                인코딩하고, 이를 한글/영문 등의 문자열로 디코딩하는 End-to-End
                Vision-to-Language 처리 모델.
              </li>
              <li>
                문서 읽기(OCR: Optical Character Recognition), 문서 분류(DS:
                Document Sorting), 정보 추출(IE: Information Extraction) 및 문서
                질문 답변 (DQA: Document Question-Answering) 등의 기능을 가지는
                Fine-tuning 제공.
              </li>
            </ul>
          </div>
          <div class="modal-action">
            <button class="btn">Close</button>
          </div>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      <div className="font-bold py-2 text-base">LVLM (2023)</div>
    </div>
  );
}

export function Kbaiocr() {
  const circleSize = CircleSize();
  return (
    <div
      className="tooltip tooltip-bottom"
      data-tip="KB AI-OCR 공통플랫폼 구축 프로젝트"
    >
      <div className="avatar" onClick={() => window.kbaiocr.showModal()}>
        <div className={circleSize}>
          <img src="/projects/ocr.png" />
        </div>
      </div>
      <dialog id="kbaiocr" className="modal">
        <form method="dialog" className="modal-box w-11/12 max-w-5xl">
          <button
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
          <h1 className="text-3xl font-bold py-10 text-left">
            KB AI-OCR 공통플랫폼 구축 프로젝트
          </h1>
          <Image
            src="/projects/ocr.png"
            alt="KB AI-OCR 공통 플랫폼 Hybrid GPU Cluster 및 MLOps 시스템 구성도"
            width="0"
            height="0"
            sizes="100vw"
            className="w-9/12 mx-auto h-auto"
          />
          <div className="py-4">
            <ul className="list-disc list-inside py-2 text-left">
              <li>
                KB 국민은행내 모든 고객 및 직원 업무의 문서처리를 위한 자체개발
                OCR 플랫폼 개발 리드
              </li>
              <li>
                마이크로서비스(MSA) 문서 처리 플랫폼으로 재사용 및 확장 가능한
                구조
              </li>
              <li>
                금융 특화 Hybrid GPU Cluster 구축: on-premise kubernetes GPU
                cluster 및 AWS EKS 사용
              </li>
              <li>
                MLOps 시스템 구축: MLFlow, Kubeflow, Seldon Core, Argo, Jenkins,
                Gitlab CI/CD 등 사용
              </li>
              <li>
                2022년 9월~12월간 KB국민은행 고객 및 직원을 대상으로 9가지
                서비스 구축 및 운영
              </li>
              <li>
                직원 업무 경감 서비스: 법인 고객 확인 서류 사전점검 서비스,
                개인고객 확인 서류 사후 점검 서비스, 퇴직 연금 정보 입력 서비스,
                외환 생션 관리 보조 서비스, 외환 거래 신청서 입력 보조 서비스,
                위탁 회사 공문 처리 보조 서비스
              </li>
              <li>
                고객 편의 서비스: 계좌 촬영 이체 서비스, 쿠폰 등록 서비스,
                수험표 확인 서비스
              </li>
            </ul>
            <h2 className="font-bold text-xl pt-2 text-left">
              *관련 결과/수상/뉴스
            </h2>
            <ul className="list-disc list-inside py-2 text-left">
              <li>
                [수상] 2022 한국지능정보시스템학회 추계 학술대회 우수논문상
              </li>
              <li>[수상] 2022 대한민국 IT서비스 기술혁신 단체부문 혁신대상</li>
              <li>
                [뉴스] IT서비스 기술혁신 기업에 국민은행·CJ올리브네트웍스,
                전자신문, 2022, https://www.etnews.com/20221116000100
              </li>
            </ul>

            <h2 className="font-bold text-xl pt-2 text-left">
              *관련 논문/특허
            </h2>
            <ul className="list-disc list-inside py-2 text-left">
              <li>
                [논문] Kim, D., Kim, D.-H., Kwak, M., ... Choi, D., Deep
                Learning OCR based document processing platform and its
                application in financial domain. Journal of Intelligence and
                Information Systems. 2023.
              </li>
              <li>
                [특허] 김동영, 손동원, 손현수, 신예지, 김두형, 곽명성, 딥러닝
                이미지 변환 기법을 통한 금융 도메인 특화 이미지 데이터 증강
                시스템 (FINANCIAL DOMAIN-SPECIFIC IMAGE DATA AUGMENTATION SYSTEM
                THROUGH DEEP LEARNING IMAGE CONVERSION TECHNIQUE) 한국특허출원,
                2023
              </li>
              <li>
                [특허] 김동영, 신예지, 손현수, 김두형, 곽명성, 인공지능 금융
                문서 정보 추출 시스템 (ARTIFICIAL INTELLIGENCE FINANCIAL
                DOCUMENT INFORMATION EXTRACTION SYSTEM) 한국특허출원, 2023
              </li>
              <li>
                [특허] 김동영, 김두형, 곽명성, 딥러닝 기반 광학 문자 인식 기법을
                활용한 개인 고객 확인 의무 확인 자동화 시스템 및 방법 (AUTOMATED
                SYSTEM AND METHOD FOR CHECKING CDD(CUSTOMER DUE DILIGENCE) USING
                DEEP LEARNING-BASED OPTICAL CHARACTER RECOGNITION TECHNIQUE)
                한국특허출원, 10-2023-0000066, 2023
              </li>
            </ul>
          </div>
          <div class="modal-action">
            <button class="btn">Close</button>
          </div>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      <div className="font-bold py-2">
        KB AI-OCR 공통플랫폼 구축 프로젝트 (2021 - 2022)
      </div>
    </div>
  );
}

export function KBAIOCRModel() {
  const circleSize = CircleSize();
  return (
    <div
      className="tooltip tooltip-bottom"
      data-tip="KB AI-OCR 모델 개발 프로젝트"
    >
      <div className="avatar" onClick={() => window.kbaiocrmodel.showModal()}>
        <div className={circleSize}>
          <img src="/projects/ocr_model.png" />
        </div>
      </div>
      <dialog id="kbaiocrmodel" className="modal">
        <form method="dialog" className="modal-box w-11/12 max-w-5xl">
          <button
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
          <h1 className="text-3xl text-left font-bold py-10">
            KB AI-OCR 모델 개발 프로젝트
          </h1>
          <Image
            src="/projects/ocr_model.png"
            alt="Image"
            width="0"
            height="0"
            sizes="100vw"
            className="w-9/12 mx-auto h-auto"
          />
          <p>KB AI-OCR 공통 플랫폼 Hybrid GPU Cluster 및 MLOps 시스템 구성도</p>
          <div className="py-4">
            <ul className="list-disc list-inside py-2 text-left">
              <li>데이터 생성모델의 데이터를 이용한 OCR 모델 개발 리드</li>
              <li>
                Attention 기반의 데이터 생성모델을 통한 데이터 생성 및 이를
                이용한 다양한 OCR 모델 개발
              </li>
              <li>
                GAN을 이용한 이미지 전처리 모델, GAN을 이용한 문자 탐지 모델,
                STN, CNN, RNN, Attention을 이용한 문자 인식 모델, Transformer를
                이용한 표 인식 및 문서 처리 모델 개발 및 적용
              </li>
            </ul>
          </div>
          <div className="py-4">
            <h2 className="font-bold text-xl pt-2 text-left">
              *관련 결과/수상/뉴스
            </h2>
            <ul className="list-disc list-inside py-2 text-left">
              <li>
                [수상] 2022 한국지능정보시스템학회 추계 학술대회 우수논문상
              </li>
            </ul>
          </div>
          <div className="py-4">
            <h2 className="font-bold text-xl pt-2 text-left">
              *관련 논문/특허
            </h2>
            <ul className="list-disc list-inside py-2 text-left">
              <li>
                [논문] Kim, D., Kim, D.-H., Kwak, M., ... Choi, D., Deep
                Learning OCR based document processing platform and its
                application in financial domain. Journal of Intelligence and
                Information Systems. 2023.
              </li>
              <li>
                [특허] 김동영, 손동원, 손현수, 신예지, 김두형, 곽명성, 딥러닝
                이미지 변환 기법을 통한 금융 도메인 특화 이미지 데이터 증강
                시스템 (FINANCIAL DOMAIN-SPECIFIC IMAGE DATA AUGMENTATION SYSTEM
                THROUGH DEEP LEARNING IMAGE CONVERSION TECHNIQUE)
                한국특허출원중, 2023
              </li>
              <li>
                [특허] 김동영, 신예지, 손현수, 김두형, 곽명성, 인공지능 금융
                문서 정보 추출 시스템 (ARTIFICIAL INTELLIGENCE FINANCIAL
                DOCUMENT INFORMATION EXTRACTION SYSTEM) 한국특허출원중, 2023
              </li>
              <li>
                [특허] 김동영, 김두형, 곽명성, 딥러닝 기반 광학 문자 인식 기법을
                활용한 개인 고객 확인 의무 확인 자동화 시스템 및 방법 (AUTOMATED
                SYSTEM AND METHOD FOR CHECKING CDD(CUSTOMER DUE DILIGENCE) USING
                DEEP LEARNING-BASED OPTICAL CHARACTER RECOGNITION TECHNIQUE)
                한국특허출원, 10-2023-0000066, 2023
              </li>
            </ul>
          </div>
          <div class="modal-action">
            <button class="btn">Close</button>
          </div>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      <div className="font-bold py-2">OCR Model (2021 - 2022)</div>
    </div>
  );
}

export function DataLake() {
  const circleSize = CircleSize();
  return (
    <div
      className="tooltip tooltip-bottom"
      data-tip="셔클 서비스 DataLake 구축 프로젝트"
    >
      <div className="avatar" onClick={() => window.datalake.showModal()}>
        <div className={circleSize}>
          <img src="/projects/datalake.png" />
        </div>
      </div>
      <dialog id="datalake" className="modal">
        <form method="dialog" className="modal-box w-11/12 max-w-5xl">
          <button
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
          <h1 className="text-3xl text-left font-bold py-10">
            셔클 서비스 DataLake 구축 프로젝트
          </h1>
          <Image
            src="/projects/datalake.png"
            alt="Image"
            width="0"
            height="0"
            sizes="100vw"
            className="w-9/12 mx-auto h-auto"
          />
          <p>셔클 서비스 DataLake내 데이터 처리 파이프라인</p>
          <div className="py-4">
            <ul className="list-disc list-inside py-2 text-left">
              <li>
                현대자동차에서 서비스하는 셔클 서비스에서 실시간으로 생성되는
                데이터를 저장, 정제하여 비지니스 인텔리전스(BI) 및 서비스
                리포팅에 필요한 API로 데이터를 제공할 수 있는 DataLake 구축 리드
              </li>
              <li>
                마이크로서비스 컨테이너내 gRPC 로 통신되는 모든 데이터를 Kafka
                및 Kafka stream 을 통해 수집하고, 이를 Amazon EMR(Apache
                Spark)을 이용해 Delta Lake 에 수집, 처리, 정제하여 저장
              </li>
              <li>
                Delta Lake 의 데이터는 Hive 구조화하고, 이를 Amazon Athena 를
                통해 rehash 와 같은 BI Tool 에서 호출할수 있도록 함. Redash 는
                데이터 시각화{" "}
              </li>
              <li>
                도출된 자료는 필요에 따라 자동화된 API 루틴을 통해 보안
                공개되며, 이는 Amazon Lambda 및 API G/W 를 통해 데이터
                서비스로서 제공할수 있는 파이프라인 구성
              </li>
            </ul>
          </div>
          <div class="modal-action">
            <button class="btn">Close</button>
          </div>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      <div className="font-bold py-2">DataLake (2021 - 2021)</div>
    </div>
  );
}

export function SLIOCR() {
  const circleSize = CircleSize();
  return (
    <div
      className="tooltip tooltip-bottom"
      data-tip="SLI-OCR 모델 개발 프로젝트"
    >
      <div className="avatar" onClick={() => window.sliocr.showModal()}>
        <div className={circleSize}>
          <img src="/projects/sliocr.png" />
        </div>
      </div>
      <dialog id="sliocr" className="modal">
        <form method="dialog" className="modal-box w-11/12 max-w-5xl">
          <button
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
          <h1 className="text-3xl text-left font-bold py-10">
            SLI-OCR 모델 개발 프로젝트
          </h1>
          <Image
            src="/projects/sliocr.png"
            alt="Image"
            width="0"
            height="0"
            sizes="100vw"
            className="w-9/12 mx-auto h-auto"
          />
          <p>
            서류 지옥서 구해준 ‘딥러닝 OCR’에 세계가 ‘엄지 척’ , 조선일보 2010.
            10. 29
          </p>
          <div className="py-4">
            <ul className="list-disc list-inside py-2 text-left">
              <li>
                인공지능 기술을 이용한 OCR 및 데이터 구조화 모델 개발 프로젝트
                리드
              </li>
              <li>
                데이터 생성 시뮬레이터, 이미지 전처리, 문자 탐지, 문자 인식,
                데이터 구조화 모델 설계 및 훈련
              </li>
              <li>Redis/Celery 를 이용한 OCR 서비스 프로그램 구현</li>
            </ul>
          </div>
          <div className="py-4">
            <h2 className="font-bold text-xl pt-2 text-left">
              *관련 결과/수상/뉴스
            </h2>
            <ul className="list-disc list-inside py-2 text-left">
              <li>
                [뉴스] 조선일보 2010. 10. 29. 서류 지옥서 구해준 ‘딥러닝 OCR’에
                세계가 ‘엄지 척’
              </li>
              <li>
                [수상] ICDAR SROIE leaderboard text localization 1st place
                (2020/12)
              </li>
              <li>
                [수상] ICDAR SROIE leaderboard text recognition 1st place
                (2020/12)
              </li>
            </ul>
          </div>
          <div className="py-4">
            <Image
              src="/projects/sliocr2.png"
              alt="Image"
              width="0"
              height="0"
              sizes="100vw"
              className="w-9/12 mx-auto h-auto"
            />
            <p>
              ICDAR SROIE leaderboard text localization & recognition 1위,
              2020/12
            </p>
          </div>
          <div className="py-4">
            <h2 className="font-bold text-xl pt-2 text-left">
              *관련 논문/특허
            </h2>
            <ul className="list-disc list-inside py-2 text-left">
              <li>
                [논문] Kim, D., Kwak, M., Won, E., Shin, S., & Nam, J. TLGAN:
                document Text Localization using Generative Adversarial Nets.
                Arxiv 2010.1154, 2020.
              </li>
              <li>
                [특허] 김동영, 곽명성, 원은지, 신세정, 인공지능 기반 광학 이미지
                데이터 고품질화 방법 (METHOD FOR MAKING HIGH QUALITY OF OPTICAL
                IMAGE DATA BASED ON ARTIFICIAL INTELLIGENCE) 한국특허등록
                1024182080000, 2022.
              </li>
              <li>
                [특허] 김동영, 곽명성, 원은지, 광학이미지문서 생성을 위한
                인공지능 기반 시뮬레이터 (METHOD FOR MANAGING TRAINING DATA FOR
                OPTICAL CHARACTER RECOGNITION), 한국특허등록 1024861050000,
                2022.
              </li>
              <li>
                [특허] 김동영, 곽명성, 남정연, 인공지능 기반 비정형 데이터
                해석방법 (METHOD FOR INTERPRETATING UNSTRUCTURED DATA BASED ON
                ARTIFICIAL INTELLIGENCE), 한국특허등록 1024576500000, 2022.
              </li>
            </ul>
          </div>
          <div class="modal-action">
            <button class="btn">Close</button>
          </div>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      <div className="font-bold py-2">SLIOCR (2020 - 2021)</div>
    </div>
  );
}

export function GraphDB() {
  const circleSize = CircleSize();
  return (
    <div
      className="tooltip tooltip-bottom"
      data-tip="금융 지식 그래프 / 기계 독해 검색 엔진 개발"
    >
      <div className="avatar" onClick={() => window.graphdb.showModal()}>
        <div className={circleSize}>
          <img src="/projects/OIG.jpeg" />
        </div>
      </div>
      <dialog id="graphdb" className="modal">
        <form method="dialog" className="modal-box w-11/12 max-w-3xl">
          <h1 className="text-3xl text-left font-bold py-10">
            금융 지식 그래프 / 기계 독해 검색 엔진 개발
          </h1>
          <div className="py-4">
            <ul className="list-disc list-inside py-2 text-left">
              <li>
                사내 금융 지식 (KMS) 및 상품정보의 인공지능 분석 기술 개발 리드
              </li>
              <li>SLI-BERT pretrained model 훈련</li>
              <li>
                사내 금융 지식 및 상품정보 벡터화를 통한 context search engine
                개발
              </li>
              <li>
                Context serach engine을 활용한 RDB to GraphDB (Neo4J) 방법론
                개발 및 GraphDB 구축
              </li>
              <li>
                SLI-miniGPT 엔진 개발 및 topic specific text generation engine
                구축
              </li>
            </ul>
          </div>
          <div class="modal-action">
            <button class="btn">Close</button>
          </div>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      <div className="font-bold py-2">GraphDB (2020 - 2021)</div>
    </div>
  );
}

export function AIM() {
  const circleSize = CircleSize();
  return (
    <div
      className="tooltip tooltip-bottom"
      data-tip="인공지능현미경 (AI-powered transmitted light microscopy for functional analysis of live cells)"
    >
      <div className="avatar" onClick={() => window.aim.showModal()}>
        <div className={circleSize}>
          <img src="/projects/aim.png" />
        </div>
      </div>
      <dialog id="aim" className="modal">
        <form method="dialog" className="modal-box w-11/12 max-w-5xl">
          <button
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
          <h1 className="text-3xl text-left font-bold py-10">
            인공지능현미경 (AI-powered transmitted light microscopy for
            functional analysis of live cells)
          </h1>
          <Image
            src="/projects/aim.png"
            alt="Image"
            width="0"
            height="0"
            sizes="100vw"
            className="w-9/12 mx-auto h-auto"
          />
          <p>인공지능 현미경 시스템 구조 및 동작 예시</p>
          <div className="py-4">
            <ul className="list-disc list-inside py-2 text-left">
              <li>
                Unsupervised machine learning 과 supervised semantic
                segmentation을 이용한 transmitted light microscopy image를
                fluorescence microscopy image로 바꾸는 기술 개발
              </li>
              <li>
                Region proposal convolutional neural network 및 convolutional
                neural network를 이용한 transmitted light microscopy image 내의
                세포 상태 실시간 모니터링
              </li>
              <li>
                Time-lapse 영상 내의 세포를 complementary learner를 이용한
                tracking 및 모니터링
              </li>
            </ul>
          </div>
          <div className="py-4">
            <h2 className="font-bold text-xl pt-2 text-left">
              *관련 논문/특허
            </h2>
            <ul className="list-disc list-inside py-2 text-left">
              <li>
                [논문] Kim, D., Min, Y., Oh, J.M. et al. AI-powered transmitted
                light microscopy for functional analysis of live cells. Sci Rep
                9, 18428 (2019) doi:10.1038/s41598-019-54961-x
              </li>
              <li>
                [특허] 김동영, 민유홍, 조윤경, 인공신경망을 이용한 세포 영상
                분석 방법 및 세포 영상 처리 장치 (ANALYSING METHOD FOR CELL
                IMAGE USING ARTIFICIAL NEURAL NETWORK AND IMAGE PROCESSING
                APPARATUS FOR CELL IMAGE). 한국특허등록 1020846830000, 2020.
              </li>
            </ul>
          </div>
          <div class="modal-action">
            <button class="btn">Close</button>
          </div>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      <div className="font-bold py-2">AIM (2017 - 2019)</div>
    </div>
  );
}

export function Hist() {
  const circleSize = CircleSize();
  return (
    <div
      className="tooltip tooltip-bottom"
      data-tip="인공지능 조직학 이미지 촬영 기술 (In-silico histology staining on NIR LED array-based quantitative phase imaging)"
    >
      <div className="avatar" onClick={() => window.hist.showModal()}>
        <div className={circleSize}>
          <img src="/projects/hist.png" />
        </div>
      </div>
      <dialog id="hist" className="modal">
        <form method="dialog" className="modal-box w-11/12 max-w-5xl">
          <button
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
          <h1 className="text-3xl text-left font-bold py-10">
            인공지능 조직학 이미징 시스템 구조 및 동작 예시
          </h1>
          <Image
            src="/projects/hist.png"
            alt="Image"
            width="0"
            height="0"
            sizes="100vw"
            className="w-9/12 mx-auto h-auto"
          />
          <div className="py-4">
            <ul className="list-disc list-inside py-2 text-left">
              <li>
                Near-Infrared LED array를 이용한 absorption-free quantitative
                phase imaging 기술 개발
              </li>
              <li>
                Stained histology slides의 NIR quantitative phase imaging 및
                Transmitted light imaging을 통한 registration-free single-shot
                training data acquisition
              </li>
              <li>
                Generative adversarial networks (GAN)을 이용한 phase image to
                histology image translation model training
              </li>
              <li>
                Brain 및 Kidney에 대해 모델 훈련 및 결과물에 대해 20명의
                병리연구사의 Mean Opinion Score 평가에 있어 유의미한 차이 없음
                확인
              </li>
            </ul>
          </div>
          <div class="modal-action">
            <button class="btn">Close</button>
          </div>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      <div className="font-bold py-2">Hist (2019 - 2020)</div>
    </div>
  );
}

export function AITomography() {
  const circleSize = CircleSize();
  return (
    <div
      className="tooltip tooltip-bottom"
      data-tip="인공지능 초고속 3차원 단층촬영 기법 (AI assisted rapid tomography imaging modality)"
    >
      <div className="avatar" onClick={() => window.aitomography.showModal()}>
        <div className={circleSize}>
          <img src="/projects/aitomography.png" />
        </div>
      </div>
      <dialog id="aitomography" className="modal">
        <form method="dialog" className="modal-box w-11/12 max-w-3xl">
          <h1 className="text-3xl text-left font-bold py-10">
            인공지능 초고속 단층촬영
          </h1>
          <Image
            src="/projects/aitomography.png"
            alt="Image"
            width="0"
            height="0"
            sizes="100vw"
            className="w-9/12 mx-auto h-auto"
          />
          <div className="py-4">
            <ul className="list-disc list-inside py-2 text-left">
              <li>
                의료용 단층촬영 수행에 있어 여러 장의 2차원 슬라이스 단층
                이미지를 획득하고, 이로부터 3차원 볼륨을 재구성하는 작업을
                수행함에 있어 적은 수의 2차원 슬라이스 단층 이미지로부터
                고해상도 3차원 볼륨을 복원하는 인공지능 기법 개발
              </li>
              <li>
                촬영 시간 단축을 통해 피사체의 움직임을 최소화함으로 고품질의
                3차원 볼륨을 얻을 수 있음
              </li>
            </ul>
          </div>
          <div class="modal-action">
            <button class="btn">Close</button>
          </div>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      <div className="font-bold py-2">AITomography (2019 - 2020)</div>
    </div>
  );
}
export function Spinner() {
  const circleSize = CircleSize();
  return (
    <div
      className="tooltip tooltip-bottom"
      data-tip="A FIDGET SPINNER FOR THE POINT-OF-CARE DIAGNOSIS OF URINARY TRACT INFECTION"
    >
      <div className="avatar" onClick={() => window.spinner.showModal()}>
        <div className={circleSize}>
          <img src="/projects/spinner.png" />
        </div>
      </div>
      <dialog id="spinner" className="modal">
        <form method="dialog" className="modal-box w-11/12 max-w-5xl">
          <button
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
          <h1 className="text-3xl text-left font-bold py-10">
            A FIDGET SPINNER FOR THE POINT-OF-CARE DIAGNOSIS OF URINARY TRACT
            INFECTION
          </h1>
          <Image
            src="/projects/spinner.png"
            alt="Image"
            width="0"
            height="0"
            sizes="100vw"
            className="w-9/12 mx-auto h-auto"
          />
          <p>요로 감염 검사를 위한 피잿 스피너 구조 및 작동 원리</p>
          <div className="py-4">
            <ul className="list-disc list-inside py-2 text-left">
              <li>
                Bacterial cell enrichment 를 위한 Hand-powered microfluidic
                system 개발
              </li>
              <li>
                Urine 내의 bacterial 함량 측정 및 drug resistance test 를 통한
                Extreme Point-Of-Care-Testing 실현
              </li>
              <li>
                Enriched bacterial cell의 정량화를 위한 computer vision 도구 및
                모델 개발
              </li>
            </ul>
          </div>
          <div className="py-4">
            <h2 className="font-bold text-xl pt-2 text-left">
              *관련 결과/수상/뉴스
            </h2>
            <ul className="list-disc list-inside py-2 text-left">
              <li>
                [수상] 대만 The 22nd International Conference On Miniaturized
                Systems For Chemistry And Life Sciences, Shark Tank Competition
                1 위 (2018)
              </li>
              <li>
                [뉴스] MBC 뉴스 “장난감 원리로 감연진단… 피젯 스피너의 변신”
                (2020)
              </li>
              <li>
                [뉴스] NewScientist 뉴스 “Fidget spinner device can diagnose
                UTIs in under an hour without a lab” (2020)
              </li>
            </ul>
          </div>
          <div className="py-4">
            <h2 className="font-bold text-xl pt-2 text-left">
              *관련 논문/특허
            </h2>
            <ul className="list-disc list-inside py-2 text-left">
              <li>
                [논문] Kim, D., Michael, I., Gulenko, O., Kumar, S., Kumar, S.,
                Clara, J., … Cho, Y.-K. (2020). A fidget spinner for the
                point-of-care diagnosis of urinary tract infection. Nature
                Biomedical Engineering.
                https://doi.org/10.1038/s41551-020-0557-2.
              </li>
              <li>
                [특허] 김동영, 미카엘 아이작, 기동엽, 조윤경, 원심력 기반 무전원
                입자 농축장치 및 입자 농축방법(Centrifugal force based
                non-powered particle concentration apparatus and method of
                particle concentration). 한국특허1021037840000, 2020.
              </li>
              <li>
                [특허] 김동영, 김치주, 기동엽, 조윤경, 원심력 기반 혈소판 분리
                및 검진 장치(Centrifugal force based platelet isolation and
                testing system). 한국특허1020638650000, 2020.
              </li>
            </ul>
          </div>
          <div class="modal-action">
            <button class="btn">Close</button>
          </div>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      <div className="font-bold py-2">Spinner (2017 - 2020)</div>
    </div>
  );
}

export function Evident() {
  const circleSize = CircleSize();
  return (
    <div
      className="tooltip tooltip-bottom"
      data-tip="EV-IDENT: IDENTIFYING TUMOR-SPECIFIC EXTRACELLULAR VESICLES BY SIZE FRACTIONATION AND SINGLE-VESICLE ANALYSIS"
    >
      <div className="avatar" onClick={() => window.evident.showModal()}>
        <div className={circleSize}>
          <img src="/projects/evident.png" />
        </div>
      </div>
      <dialog id="evident" className="modal">
        <form method="dialog" className="modal-box w-11/12 max-w-5xl">
          <button
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
          <h1 className="text-3xl text-left font-bold py-10">
            EV-IDENT: IDENTIFYING TUMOR-SPECIFIC EXTRACELLULAR VESICLES BY SIZE
            FRACTIONATION AND SINGLE-VESICLE ANALYSIS
          </h1>
          <Image
            src="/projects/evident.png"
            alt="Image"
            width="0"
            height="0"
            sizes="100vw"
            className="w-9/12 mx-auto h-auto"
          />
          <p>EV-IDENT의 작동 구조 및 분석 방법</p>
          <div className="py-4">
            <ul className="list-disc list-inside py-2 text-left">
              <li>
                혈액내 나노소포체 분석 및 기계학습을 통한 암 조기 진단 기술 개발
              </li>
              <li>
                Particle optical image modeling / localization optimization 을
                통한 정량화 및 single photon count 를 통한 정확한 protein marker
                expression 측정
              </li>
              <li>
                Unsupervised / supervised machine learning 을 이용한 혈액 내
                체내 건강정보 및 암 세포 조기 검출 수행
              </li>
            </ul>
          </div>
          <div className="py-4">
            <h2 className="font-bold text-xl pt-2 text-left">
              *관련 논문/특허
            </h2>
            <ul className="list-disc list-inside py-2 text-left">
              <li>
                [논문] Kim, D., Woo, H.-K., Lee, C., Min, Y., Kumar, S.,
                Sunkara, V., … Cho, Y.-K. (2020). EV-Ident: Identifying
                Tumor-Specific Extracellular Vesicles by Size Fractionation and
                Single-Vesicle Analysis. Analytical Chemistry, 92(8), 6010–6018.
                https://doi.org/10.1021/acs.analchem.0c00285
              </li>
            </ul>
          </div>
          <div class="modal-action">
            <button class="btn">Close</button>
          </div>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      <div className="font-bold py-2">Evident (2017 - 2020)</div>
    </div>
  );
}
export function SR() {
  const circleSize = CircleSize();
  return (
    <div
      className="tooltip tooltip-bottom"
      data-tip="THREE-DIMENSIONAL SINGLE-MOLECULE LOCALIZATION SUPER-RESOLUTION MICROSCOPY"
    >
      <div className="avatar" onClick={() => window.sr.showModal()}>
        <div className={circleSize}>
          <img src="/projects/sr.png" />
        </div>
      </div>
      <dialog id="sr" className="modal">
        <form method="dialog" className="modal-box w-11/12 max-w-5xl">
          <button
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
          <h1 className="text-3xl text-left font-bold py-10">
            THREE-DIMENSIONAL SINGLE-MOLECULE LOCALIZATION SUPER-RESOLUTION
            MICROSCOPY
          </h1>
          <Image
            src="/projects/sr.png"
            alt="Image"
            width="0"
            height="0"
            sizes="100vw"
            className="w-9/12 mx-auto h-auto"
          />
          <p>SINGLE-MOLECULE LOCALIZATION SUPER-RESOLUTION MICROSCOPY 예시</p>
          <div className="py-4">
            <ul className="list-disc list-inside py-2 text-left">
              <li>
                광학현미경을 이용하여 광학한계인 250nm 해상도의 100배인 2.5 nm
                초고해상도의 영상을 얻어내는 기술 개발
              </li>
              <li>
                Photon modeling 및 localization (MLE, EM) 을 통한 이미지 내
                광자의 위치 추적.
              </li>
              <li>
                다초점 기술 (multifocal plane microscopy) 의 적용으로 3차원 구현
              </li>
            </ul>
          </div>
          <div className="py-4">
            <h2 className="font-bold text-xl pt-2 text-left">
              *관련 결과/수상/뉴스
            </h2>
            <ul className="list-disc list-inside py-2 text-left">
              <li>
                [수상] 스위스 SMLMS Challenge (EPFL) 3D single molecule
                localization microscopy 부문 1 위
              </li>
            </ul>
          </div>
          <div className="py-4">
            <h2 className="font-bold text-xl pt-2 text-left">
              *관련 논문/특허
            </h2>
            <ul className="list-disc list-inside py-2 text-left">
              <li>
                [논문] Cohen E. A. K.,. Kim D., Ober R.J, Cramer-Rao Lower Bound
                for Point Based Image Registration with Heteroscedastic Error
                Model for Application in Single Molecule Microscopy. IEEE
                Transactions on Medical Imaging 2015
              </li>
              <li>
                [논문] Ram S, Kim D, Ober RJ, Ward ES. 3D Single Molecule
                Tracking with Multifocal Plane Microscopy Reveals Rapid
                Intercellular Transferrin Transport at Epithelial Cell Barriers.
                Biophysical Journal 2012
              </li>
            </ul>
          </div>
          <div class="modal-action">
            <button class="btn">Close</button>
          </div>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      <div className="font-bold py-2">
        SR (2012 - 2016 | Texas A&M University)
      </div>
    </div>
  );
}

export function RMUM() {
  const circleSize = CircleSize();
  return (
    <div
      className="tooltip tooltip-bottom"
      data-tip="REMOTE FOCUSING MULTIFOCAL PLANE MICROSCOPY FOR THE IMAGING OF 3D SINGLE MOLECULE DYNAMICS WITH CELLULAR CONTEXT"
    >
      <div className="avatar" onClick={() => window.rmum.showModal()}>
        <div className={circleSize}>
          <img src="/projects/rmum.png" />
        </div>
      </div>
      <dialog id="rmum" className="modal">
        <form method="dialog" className="modal-box w-11/12 max-w-5xl">
          <button
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
          <h1 className="text-3xl text-left font-bold py-10">
            REMOTE FOCUSING MULTIFOCAL PLANE MICROSCOPY FOR THE IMAGING OF 3D
            SINGLE MOLECULE DYNAMICS WITH CELLULAR CONTEXT
          </h1>
          <Image
            src="/projects/rmum.png"
            alt="Image"
            width="0"
            height="0"
            sizes="100vw"
            className="w-9/12 mx-auto h-auto"
          />
          <p>REMOTE FOCUSING MULTIFOCAL PLANE MICROSCOPY 구조</p>
          <div className="py-4">
            <ul className="list-disc list-inside py-2 text-left">
              <li>
                세포 내 분자의 움직임과 그 주변환경을 3차원 영상으로 보여주는
                기술 개발
              </li>
              <li>
                영상으로부터 분자의 3차원 위치를 10nm 정확도로 초정밀 추정
              </li>
              <li>주변환경의 3차원 영상을 광학 허상으로부터 기록</li>
              <li>
                여러 카메라 및 센서로부터 기록된 다차원 영상데이터의 시공간의
                초정밀 합성 (Spatial-temporal registration)
              </li>
            </ul>
          </div>
          <div className="py-4">
            <h2 className="font-bold text-xl pt-2 text-left">
              *관련 결과/수상/뉴스
            </h2>
            <ul className="list-disc list-inside py-2 text-left">
              <li>
                [수상] 스위스 SMLMS Challenge (EPFL) 3D single molecule
                localization microscopy 부문 1 위
              </li>
            </ul>
          </div>
          <div className="py-4">
            <h2 className="font-bold text-xl pt-2 text-left">
              *관련 논문/특허
            </h2>
            <ul className="list-disc list-inside py-2 text-left">
              <li>
                [특허] Kim D., Ober R.J, Advanced multi-dimensional microscopy
                system for single particle & structure imaging. U.S. Patent,
                2017
              </li>
              <li>
                [논문] Kim, D., Chao, J., Velmurugan, R., You, S., Ward, E. S.,
                and Ober, R. J. Remote focusing multifocal plane microscopy for
                the imaging of 3D single molecule dynamics with cellular
                context. Proceedings of the SPIE, Three-Dimensional and
                Multidimensional Microscopy: Image Acquisition and Processing
                XXIV, 10070: 2017
              </li>
              <li>
                [논문] Kim D, You S, Ward E.S., Ober R.J, Imaging of
                three-dimensional single molecule dynamics with cellular
                context: Antibody trafficking and interaction with cell membrane
                and sorting endosomes. ASCB, San Francisco, CA. 2016
              </li>
              <li>
                [논문] Cohen E. A. K.,. Kim D., Ober R.J, Cramer-Rao Lower Bound
                for Point Based Image Registration with Heteroscedastic Error
                Model for Application in Single Molecule Microscopy. IEEE
                Transactions on Medical Imaging 2015
              </li>
            </ul>
          </div>
          <div class="modal-action">
            <button class="btn">Close</button>
          </div>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      <div className="font-bold py-2">RMUM (2014 - 2016)</div>
    </div>
  );
}

export function HER23() {
  const circleSize = CircleSize();
  return (
    <div
      className="tooltip tooltip-bottom"
      data-tip="HER2/HER3 SIGNALING OVERCOMES HEREGULIN-INDUCED RESISTANCE TO PI3K INHIBITION IN PROSTATE CANCER"
    >
      <div className="avatar" onClick={() => window.her23.showModal()}>
        <div className={circleSize}>
          <img src="/projects/her23.png" />
        </div>
      </div>
      <dialog id="her23" className="modal">
        <form method="dialog" className="modal-box w-11/12 max-w-5xl">
          <button
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
          <h1 className="text-3xl text-left font-bold py-10">
            HER2/HER3 SIGNALING OVERCOMES HEREGULIN-INDUCED RESISTANCE TO PI3K
            INHIBITION IN PROSTATE CANCER
          </h1>
          <Image
            src="/projects/her23.png"
            alt="Image"
            width="0"
            height="0"
            sizes="100vw"
            className="w-9/12 mx-auto h-auto"
          />
          <p>
            HER2-HER3 Engineered Antibody 와 그에 따른 암세포에서의 PI3K 신호
            변화 및 intracellular trafficking
          </p>
          <div className="py-4">
            <ul className="list-disc list-inside py-2 text-left">
              <li>
                HER2 및 HER3 를 동시에 targeting 하는 HER2-HER3 Engineered
                Antibody 개발 및 특성 연구
              </li>
              <li>
                HER2/HER3 co-binding 시 prostate cancer 에서 PI3K 억제에 효과
                있음을 입증
              </li>
            </ul>
          </div>
          <div className="py-4">
            <h2 className="font-bold text-xl pt-2 text-left">
              *관련 논문/특허
            </h2>
            <ul className="list-disc list-inside py-2 text-left">
              <li>
                [논문] Poovasery J.S., Kang J.C., Kim D., Ober R.J, Ward E.S.
                Antibody targeting of HER2/HER3 signaling overcomes
                heregulin-induced resistance to PI3K inhibition in prostate
                cancer. International Journal of Cancer 2017
              </li>
              <li>
                [논문] Li, R., Chiguru, S., Li, L., Kim, D., Velmurugan, R.,
                Kim, D., Tian, H., Schroit, A., Mason, R., Ober, R. J. and Ward,
                E. S. Targeting phosphatidylserine with calcium-dependent
                protein-drug conjugates for the treatment of cancer. Molecular
                Cancer Therapeutics, 2018.
              </li>
            </ul>
          </div>
          <div class="modal-action">
            <button class="btn">Close</button>
          </div>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      <div className="font-bold py-2">
        HER23 (2014 - 2016 | Texas A&amp;M University)
      </div>
    </div>
  );
}
export function HER2() {
  const circleSize = CircleSize();
  return (
    <div
      className="tooltip tooltip-bottom"
      data-tip="THE LEVEL OF HER2 EXPRESSION IS A PREDICTOR OF ANTIBODY-HER2 TRAFFICKING BEHAVIOR IN CANCER CELLS"
    >
      <div className="avatar" onClick={() => window.her2.showModal()}>
        <div className={circleSize}>
          <img src="/projects/her2.png" />
        </div>
      </div>
      <dialog id="her2" className="modal">
        <form method="dialog" className="modal-box w-11/12 max-w-5xl">
          <button
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
          <h1 className="text-3xl text-left font-bold py-10">
            THE LEVEL OF HER2 EXPRESSION IS A PREDICTOR OF ANTIBODY-HER2
            TRAFFICKING BEHAVIOR IN CANCER CELLS
          </h1>
          <Image
            src="/projects/her2.png"
            alt="Image"
            width="0"
            height="0"
            sizes="100vw"
            className="w-95 mx-auto h-auto"
          />
          <p>
            HER2 expression 에 따른 cellular trafficking 변화 및 형광현미경 증적
          </p>
          <div className="py-4">
            <ul className="list-disc list-inside py-2 text-left">
              <li>
                세포 표면의 HER2 생성량에 따라 HER2 의 intracellular trafficking
                이 상이함을 밝힘
              </li>
              <li>
                Fluorescence quenching 을 이용한 세포 내외부 단백질 발현 및 그
                위치에 대한 정량화
              </li>
            </ul>
          </div>
          <div className="py-4">
            <h2 className="font-bold text-xl pt-2 text-left">
              *관련 논문/특허
            </h2>
            <ul className="list-disc list-inside py-2 text-left">
              <li>
                [논문] Ram S, Kim D, Ober RJ, Ward ES. The level of HER2
                expression is a predictor of antibody- HER2 trafficking behavior
                in cancer cells. mAbs 2014
              </li>
              <li>
                [논문] Devanaboyina SC, Lynch SM, Ober RJ, Ram S, Kim D,
                Puig-Canto A, Breen S, Kasturirangan S, Fowler S, Peng L, et al.
                The effect of pH dependence of antibody-antigen interactions on
                subcellular trafficking dynamics. mAbs 2013
              </li>
            </ul>
          </div>
          <div class="modal-action">
            <button class="btn">Close</button>
          </div>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      <div className="font-bold py-2">HER2 (2013 - 2016)</div>
    </div>
  );
}
