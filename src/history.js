import { createHistory, useBasename } from 'history'

const history = useBasename(createHistory)({
  basename: '/channels'
})

export default history
