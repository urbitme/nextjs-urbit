import React from 'react'

export const Row = (props) => <div {...props} />
export const Main = ({className, ...props}) => <main className={`flex-1 ${className}`} {...props} />

//remove container class for fluid width
export const Container = ({className, ...props}) => <div className={`container xl:max-w-screen-xl mx-auto sm:px-4 lg:px-8 ${className}`} {...props} />

const Layout = ({className, ...props}) => <div className=""><div className={`flex flex-col min-h-screen ${className}`} {...props}/></div>
export default Layout

