import { useState } from 'react'
import { DarkModeSwitch } from 'react-toggle-dark-mode'
import useDarkSide from '../../hook/useDarkSide'

export default function Switcher() {
  const [colorTheme, setTheme] = useDarkSide()
  const [darkSide, setDarkSide] = useState(
    colorTheme === 'light' ? true : false
  )

  const toggleDarkMode = checked => {
    setTheme(colorTheme)
    setDarkSide(checked)
  }

  return (
    <>
      <div>
        <DarkModeSwitch
        moonColor='white'
          size={20}
          checked={darkSide}
          onChange={toggleDarkMode}
          sunColor='white'
        />
      </div>
    </>
  )
}

