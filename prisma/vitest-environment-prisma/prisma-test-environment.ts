import { Environment } from 'vitest'

export default <Environment>{
  name: 'prisma',
  async setup() {
    console.log('rodou')

    return {
      teardown() {},
    }
  },
}
