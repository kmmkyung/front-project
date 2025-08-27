import { about_video, aboutBg01, aboutBg02, aboutBg03 } from "../data/imageImportData";
import ReactLenis, { useLenis } from "lenis/react";
import { useEffect, useRef } from "react";

export default function About(){
  const lenis = useLenis();

  const mainRef = useRef<HTMLElement|null>(null);
  const idxRef  = useRef(0); // 현재 보여줄 슬라이드 인덱스
  const lockRef = useRef(false); // 전환 중 입력 잠금(더블 스크롤 방지)

  useEffect(()=>{
    const main = mainRef.current;
    if (!main || !lenis) return;
    const sections = Array.from(main.querySelectorAll<HTMLElement>("section"));

    function wheelTransform(){
      const currentId = idxRef.current;      
      sections.forEach((ele, idx)=>{
        const sectionWrap = ele.querySelector<HTMLElement>(".section-wrapper");        
        if(idx < currentId ){ // 페이지가 있으면
          ele.style.transform = "translate3d(0,-130vh,0)";
          if(sectionWrap)sectionWrap.style.transform = "translateY(40vh)";
        }
        else if(currentId === idx ){
          ele.style.transform = "translate3d(0,-15vh,0)";
          if(sectionWrap)sectionWrap.style.transform = "translateY(15vh)";
        }
        else {
          ele.style.transform = "translate3d(0,0vh,0)";
          if(sectionWrap)sectionWrap.style.transform = "translateY(0)";
        }
      })
    }
    wheelTransform()

    // 휠 한 번 = 인덱스 +-1 (기본 스크롤 차단)
    function onWheel(event: WheelEvent){
      if (lockRef.current) return;
      event.preventDefault();
      
      const dir = event.deltaY > 0 ? 1 : -1; // 아래로 스크롤(+1), 위 스크롤(-1)
      const last = sections.length - 1;
      const proposed = idxRef.current + dir; // 인덱스에서 방향만큼 ±1
      const lowerBounded = Math.max(0, proposed); // 최소 0   
      const next = Math.min(last, lowerBounded); // 최대 sections.length - 1
      if (next === idxRef.current) return;

      idxRef.current = next;
      lockRef.current = true;
      wheelTransform()
      setTimeout(()=>{ lockRef.current = false; }, 700);
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [lenis]);

  return (
    <ReactLenis root options={{ duration: 10, syncTouch: true, wheelMultiplier: 1 }}>
      <main ref={mainRef}>
        <section className="w-full h-screen sticky inset-0 transition-transform duration-700 z-[4]">
          <div className="section-wrapper w-full h-full">
            <video src={about_video} className="w-full h-full object-cover object-center" playsInline loop muted />
            <div className="absolute top-0 left-0 flex justify-center md:justify-start items-center w-full h-full px-5 lg:px-10">
              <p className="text-sm text-white break-keep text-center md:text-start leading-[30px] about-text-shadow">
                PROJEKT PRODUKT는 안경 광학사의 철학과 디자이너의 감성, 이 두 축의 견고한 결합으로 만들어진 브랜드입니다.<br/>
                고품질의 재료만을 엄선하여 아이웨어 본연의 기능에 충실한 제품을 만들고자 하는 안경 광학사의 소망을 담아<br/>
                Modern, Wearable을 디자인 배경에 두고 매 시즌 새로운 컬렉션을 전개합니다.<br/>
                <br/>
                프로젝트 프로덕트는 과장되지 않은 지적인 고급스러움과 따뜻한 미니멀을 추구합니다.<br/>
                우리는 조용하고 시적인, 조금은 특별한 일상을 경험하길 바랍니다.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full bg-no-repeat bg-center bg-cover about-after sticky inset-0 z-[3] transition-transform duration-700" style={{ backgroundImage: `url(${aboutBg01})` }}>
          <div className="section-wrapper w-full h-full">
            <div className="flex flex-col justify-center items-center md:items-end w-full h-full px-5 lg:px-10 text-sm text-white break-keep z-[1]">
              <h6 className="font-semibold text-xl font-ppSans">Basics to Perfection</h6>
              <p className="mt-10 text-center md:text-end leading-[30px] about-text-shadow">
              20년 이상 경험을 가진 안경 광학사들이 설립한 브랜드, 프로젝트 프로덕트는 아이웨어의 본질을 끝까지 지켜나가고자 합니다.<br/>
              피팅에 최적화된 프로젝트 프로덕트의 아이웨어는 세심한 형태와 비례감으로 온종일 착용해도 편안한 균형감을 선사합니다.<br/>
              또한 절대로 타협하지 않는 소재의 품질은 안경의 구조적 완성도뿐만 아니라 수준 높은 디자인의 밑바탕이 됩니다.
              </p>
            </div>
          </div>
        </section>
        {/* <section className="w-full h-screen bg-no-repeat bg-center bg-cover about-after sticky inset-0 z-[2] transition-transform duration-700" style={{ backgroundImage: `url(${aboutBg02})` }}>
          <div className="section-wrapper w-full h-full">
            <div className="flex flex-col justify-center items-center md:items-start w-full h-full px-5 lg:px-10 text-sm text-white break-keep">
              <h6 className="font-semibold text-xl font-ppSans">Our Collections</h6>
              <p className="mt-10 text-center md:text-start leading-[30px] about-text-shadow">
              20년 이상 경험을 가진 안경 광학사들이 설립한 브랜드, 프로젝트 프로덕트는 아이웨어의 본질을 끝까지 지켜나가고자 합니다.<br/>
              피팅에 최적화된 프로젝트 프로덕트의 아이웨어는 세심한 형태와 비례감으로 온종일 착용해도 편안한 균형감을 선사합니다.<br/>
              또한 절대로 타협하지 않는 소재의 품질은 안경의 구조적 완성도뿐만 아니라 수준 높은 디자인의 밑바탕이 됩니다.
              </p>
            </div>  
          </div>
        </section>
        <section className="w-full h-screen bg-no-repeat bg-center bg-cover about-after sticky inset-0 z-[1] transition-transform duration-700" style={{ backgroundImage: `url(${aboutBg03})` }}>
          <div className="section-wrapper w-full h-full">
            <div className="flex flex-col justify-center items-center md:items-end w-full h-full px-5 lg:px-10 text-sm text-white break-keep z-[1]">
              <h6 className="font-semibold text-xl font-ppSans">Our Collections</h6>
              <p className="mt-10 text-center md:text-end leading-[30px] about-text-shadow">
              프로젝트 프로덕트는 매해 새로운 테마의 "메인 컬렉션'과 '캡슐 컬렉션' 선보이며<br/>
              다양한 분야의 아티스트와 '협업 컬렉션'을 통해 아이웨어 컬쳐의 새로운 방향성을 제시합니다.<br/>
              이와 같은 프로젝트를 통해 프로젝트 프로덕트는 브랜드 아이덴티티를 견고하게 완성해 나가며 그 에너지를 유지하고 있습니다.
              </p>
            </div>
          </div>
        </section> */}
      </main>
    </ReactLenis>
  )
}