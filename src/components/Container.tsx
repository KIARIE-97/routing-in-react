import React from 'react'

interface containerProps  {
    children: React.ReactNode
    className?: string
}
const Container = (props: Readonly<containerProps>) => {
  return (
    <div className={'mx-auto xl:px-0 ${props.className ? props.className : ""}'}>
        {props.children}

    </div>
  )
}

export default Container