import { accessorType } from '~/store'

type AccessorType = typeof accessorType

declare module 'vue/types/vue' {
  interface Vue {
    $accessor: AccessorType;
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $accessor: AccessorType;
  }

  interface Context {
    $accessor: AccessorType;
  }
}
