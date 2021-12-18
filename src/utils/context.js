import React, { useState, useEffect, useContext } from "react"

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [viewWidth, setViewWidth] = useState(window.innerWidth)

  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
