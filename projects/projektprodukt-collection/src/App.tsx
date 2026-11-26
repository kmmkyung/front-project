import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom"
import Loading from "./components/Loading";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const { pathname } = useLocation();
  // 로딩 화면은 배포 빌드(npm run build)에서만 보여줌.
  // 개발 서버(npm run dev)에서는 작업 편의를 위해 건너뜀.
  const [showLoader, setShowLoader] = useState(import.meta.env.PROD);

  useEffect(()=>{
    window.scrollTo(0,0);
  },[pathname])

  useEffect(() => {
    if (showLoader) {
      document.body.style.overflow = "hidden";
    }
    else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    }
  }, [showLoader]);

  return (
    <>
      {showLoader ?
        <Loading onFinished={() => setShowLoader(false)} />
        :
        <>
        <Header />
        <Outlet />
        <Footer/>
        </>
      }
    </>
  )
}

export default App
