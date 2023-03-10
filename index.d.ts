declare global {
  type HelloFunction = (name: string) => string;
}

declare module '#app' {
  interface NuxtApp {
    $hello: HelloFunction
  }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $hello: HelloFunction
  }
}

export {}
