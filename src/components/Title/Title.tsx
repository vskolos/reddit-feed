import React from 'react'
import noop from '../../utils/noop'
import * as S from './Title.styled'

export enum ETitleType {
  Page = 'h2',
  Post = 'h3',
}

interface ITitleProps {
  className?: string
  type: ETitleType
  text: string
  onClick?: () => void
}

export default function Title({
  className = '',
  type,
  text,
  onClick = noop,
}: ITitleProps) {
  return (
    <S.Title as={type} type={type} className={className} onClick={onClick}>
      {text}
    </S.Title>
  )
}