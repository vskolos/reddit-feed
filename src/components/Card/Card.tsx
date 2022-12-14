import React, { useRef, useState } from 'react'
import createdAtLabel from '../../utils/createdAtLabel'
import counterLabel from '../../utils/counterLabel'
import ActionsMenu from '../ActionsMenu/ActionsMenu'
import Button from '../Button/Button'
import { EIcon } from '../Icon/Icon'
import { PostData } from '../Post/Post'
import { ETitleType } from '../Title/Title'
import UserLink, { EUserLinkType } from '../UserLink/UserLink'
import * as S from './Card.styled'

type CardProps = {
  post: PostData
}

export default function Card({ post }: CardProps) {
  const data = post.data
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  return (
    <S.Card>
      <S.Info>
        <UserLink
          type={EUserLinkType.Post}
          name={data.author}
          iconImg={data.sr_detail.icon_img}
        />
        <S.CreatedAt>
          <S.PublishedLabel>опубликовано </S.PublishedLabel>
          {createdAtLabel(data.created)}
        </S.CreatedAt>
        <S.CardTitle type={ETitleType.Post} text={data.title} href={data.id} />
      </S.Info>
      <S.CardImage src={data.url} />
      <S.Controls>
        <S.CardVotesCounter votes={counterLabel(data.score)} />
        <S.CommentsButton
          icon={EIcon.Comments}
          text={counterLabel(data.num_comments)}
        />
        <S.Actions>
          <Button icon={EIcon.Share} />
          <Button icon={EIcon.Save} />
        </S.Actions>
      </S.Controls>
      <S.Dropdown ref={dropdownRef}>
        <S.MenuButton
          icon={EIcon.ThreeDots}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
        <ActionsMenu
          container={dropdownRef}
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
        />
      </S.Dropdown>
    </S.Card>
  )
}
