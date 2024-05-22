import { useEffect, useState } from 'react'
import './App.css'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'
import { ThemeProvider } from './contexts/Theme'

//Way#2 of using Context API ( Recommended! as its syntax is easy)

function App() {
  const [themeMode, setThemeMode] = useState("light")

  const darkMode = () => {
    setThemeMode("dark")   //These (themeMode) + darkmode and lightmode functionality will automatically add in ThemeContext b/c
  }                        //of ThemeProvider we defined below with its values.

  const lightMode = () => {
    setThemeMode("light")
  }

  //Actual change in theme
  useEffect(() => {

    const htmlElem = document.querySelector('html');
    htmlElem.classList.remove("light", "dark");
    htmlElem.classList.add(themeMode)

  }, [themeMode])

  return (
    <ThemeProvider value={{ themeMode, darkMode, lightMode }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App

//Imp note: While adding dark mode functionality in web using tailwind classes, we have to configure tailwind
//file(tailwind.config.js) too i.e adding a line  (darkMode: "class") it means dark mode will be active by 
// changing class