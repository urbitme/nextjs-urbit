// https://codesandbox.io/s/headlessuireact-switch-example-y40i1

import React from 'react'
import { Switch } from "@headlessui/react"
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'
import { useDarkMode } from 'components/util/useDarkDefaultMode'

const DarkModeToggle = () => {
  const [isDark, toggleDarkMode] = useDarkMode()

  return (
    <Switch.Group as="div" className="flex items-center space-x-1">
      <Switch.Label className="transition duration-75">
        <SunIcon className="h-6 w-6"/>
      </Switch.Label>
      <Switch
        as="button"
        checked={isDark}
        onChange={toggleDarkMode}
        className="dark:bg-indigo-600 bg-gray-200 relative inline-flex flex-shrink-0 h-6 transition-colors duration-200 ease-in-out border-2 border-transparent rounded-full cursor-pointer w-11 focus:outline-none focus:shadow-outline">
        {({ checked }) => (
          <span
            className="dark:translate-x-5 translate-x-0 inline-block w-5 h-5 transition duration-200 ease-in-out transform bg-white rounded-full"
          />
        )}
      </Switch>
      <Switch.Label className="transition duration-75">
        <MoonIcon className="h-6 w-6"/>
      </Switch.Label>
    </Switch.Group>
  )
}

export default DarkModeToggle

