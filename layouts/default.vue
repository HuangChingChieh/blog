<template>
  <div ref="scrollDetect" class="hidden lg:block" />
  <CommonHeader />

  <InterfaceContainer tag="main" class="py-normal mt-normal">
    <slot />
  </InterfaceContainer>

  <CommonFooter class="mt-normal" />
</template>
