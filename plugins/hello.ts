import { hello } from '~/utils/hello';

export default defineNuxtPlugin(() => {
  return {
    provide: {
      hello
    }
  }
})
