import React, { useState, useEffect, useContext } from "react"

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [viewWidth, setViewWidth] = useState(window.innerWidth)
  const [isMobile, setIsMobile] = useState(false)

  const setWindowWidth = () => {
    setViewWidth(window.innerWidth)
    console.log(viewWidth)
  }

  useEffect(() => {
    window.addEventListener("resize", setWindowWidth)
    return () => window.removeEventListener("resize", setWindowWidth)
  })

  useEffect(() => {
    if (viewWidth < 768) {
      return setIsMobile(true)
    }
    return setIsMobile(false)
  }, [viewWidth])

  return (
    <AppContext.Provider value={{ isMobile, setIsMobile }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
