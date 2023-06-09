import { useEffect } from "react"
import { useParams, useLocation } from "react-router-dom"
import ModelPageHeroSection from "./component/ModelPageHeroSection"
import ModelPageDetailSection from "./component/ModelPageDetailSection"
import ModelPageCustomSection from "./component/ModelPageCustomSection"
import { modelData } from "../../data"
import state from "../../store"

const ModelPage = () => {
  const { model } = useParams()
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
    state.currentModel = model
  }, [location])

  const { modelPageHeroImage } = modelData[model]

  return (
    <main className={`bg-center`}>
      <img
        src={modelPageHeroImage}
        alt={`${model} photo`}
        className="fixed object-cover w-screen h-full"
      />
      <ModelPageHeroSection />
      <ModelPageDetailSection />
      <ModelPageCustomSection />
    </main>
  )
}
export default ModelPage
