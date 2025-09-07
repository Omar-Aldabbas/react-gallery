import { useState } from "react"
import { CardsGrid } from "../components/CardsGrid"
import { ImageSearch } from "../components/ImageSearch"

export const HomePage = () => {
  const [term, setTerm] = useState("")
  return (
    <div className="p-6 space-y-6">
      <ImageSearch setTerm={setTerm}/>
      <CardsGrid term={term} />
    </div>
  )
}
