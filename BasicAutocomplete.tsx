import React from 'react'

type IconSize = "sm" | "xs" | string
type LooseAutocomplete<T extends string> = T | Omit<string, T>


interface Props {
    size: LooseAutocomplete<"sm" | "xs">
}


export default function Icon(props: Props) {
  return <></>
}

function Test() {
  return (
    <Icon size={"test"} />
  )
}

