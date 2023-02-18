import { useEffect, useState, useCallback } from 'react'
import Urbit from '@urbit/http-api'

// We attempt to load /session.js on page load in /pages/_app.js
// If window.ship is present, we assume session.js was loaded and
// we are authenticated
function isAuthenticated() {
  return window.ship != undefined
}

function isLocalEnvironment() {
  return process.env.NEXT_PUBLIC_URBIT_SHIP_NAME
    || process.env.NEXT_PUBLIC_URBIT_SHIP_URL
    || process.env.NEXT_PUBLIC_URBIT_SHIP_CODE
}

function isProduction() { return !isLocalEnvironment() }

function assertLocalEnvironment() {
  console.assert(process.env.NEXT_PUBLIC_URBIT_SHIP_NAME, "Environment var NEXT_PUBLIC_URBIT_SHIP_NAME required for local development")
  console.assert(process.env.NEXT_PUBLIC_URBIT_SHIP_URL, "Environment var NEXT_PUBLIC_URBIT_SHIP_URL required for local development")
  console.assert(process.env.NEXT_PUBLIC_URBIT_SHIP_CODE, "Environment var NEXT_PUBLIC_URBIT_SHIP_CODE required for local development")
}

async function initializeUrbit() {
  let urbit

  if (isProduction()) {
    urbit = new Urbit("")
    urbit.ship = window.ship

  } else {
    assertLocalEnvironment()

    if (isAuthenticated()) {
      console.log("Authenticated")
      urbit = new Urbit(
        `http://${process.env.NEXT_PUBLIC_URBIT_SHIP_URL}`,
        process.env.NEXT_PUBLIC_URBIT_SHIP_CODE)
      urbit.ship = window.ship

    } else {
      console.log("Not Authenticated")
      try {
        urbit = await Urbit.authenticate({
          ship: process.env.NEXT_PUBLIC_URBIT_SHIP_NAME,
          url:  process.env.NEXT_PUBLIC_URBIT_SHIP_URL,
          code: process.env.NEXT_PUBLIC_URBIT_SHIP_CODE})
      } catch (e) {
        console.error("Could not authenticate. Confirm correct urbit ship information in .env.development.local")
        throw e
      }
    }
  }

  return urbit
}

// Just one instance shared by all components
let urbitCache

export function useUrbit() {
  const [urbit, setUrbit] = useState(null)

  const getUrbitApi = useCallback(async () => {
    if (!urbitCache) {
      urbitCache = await initializeUrbit()
    }
    setUrbit(urbitCache)
  }, [])

  useEffect(() => {
    getUrbitApi()
  }, [getUrbitApi])

  return urbit
}

export function urbitSessionScriptUrl() {
  if (process.env.NEXT_PUBLIC_URBIT_SHIP_URL == undefined) {
    return "/session.js"
  } else {
    return `http://${process.env.NEXT_PUBLIC_URBIT_SHIP_URL}/session.js`
  }
}
