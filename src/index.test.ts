import { describe, it } from 'vitest'

import { init } from './index'

describe('index', () => {
  it('should run', async () => {
    await init()
  })
})
