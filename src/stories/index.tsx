import React from 'react'

import { storiesOf } from '@storybook/react'
import { Photo } from '../components'

storiesOf('TypeScript and Storybook', module).add('Photo Widget', () => (
  <Photo url="https://www.bing.com/th?id=OIP.Jaxf_fJCiNSK855whRasrgHaEp&pid=Api&rs=1&p=0" />
))
