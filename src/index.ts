#!/usr/bin/env node

export const init = async (): Promise<void> => {
  // eslint-disable-next-line no-console
  console.log('Starting...')
  // eslint-disable-next-line no-console
  console.log('Done!')
}

init().catch((err) => {
  console.error(err)
  process.exit(1)
})
