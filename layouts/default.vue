<template>
  <div ref="scrollDetect" class="hidden lg:block" />
  <CommonHeader />

  <InterfaceContainer tag="main" class="py-normal md:mt-normal">
    <slot />
  </InterfaceContainer>

  <CommonFooter class="mt-normal" />
</template>
