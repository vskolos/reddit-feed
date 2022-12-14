import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../app/store'
import { fetchComments } from '../app/commentsSlice'
import { clear as clearComments } from '../app/commentsSlice'

export default function usePostCommentsData(postId: string) {
  const token = useSelector((state: RootState) => state.token.value)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!token) return
    dispatch(fetchComments({ token: token, postId: postId }))
    return () => {
      dispatch(clearComments())
    }
  }, [token])
}
