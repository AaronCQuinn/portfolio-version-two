import React from 'react'
import Transition from './Transition'

const Layout = ({ children, className='' }) => {
  return (
    <div className={`w-full h-full inline-block z-0 bg-light p-32 ${className} dark:bg-dark xl:p-24 lg:p-16 md:p-12 sm:p-8`}>
      <Transition />
      {children}
    </div>
  )
}

export default Layout