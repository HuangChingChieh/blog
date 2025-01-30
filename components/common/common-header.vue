<template>
  <CommonWrapper
    tag="header"
    class="border-b-2 border-primary sticky top-0 left-0 shadow-sm w-full py-3 z-50"
  >
    <InterfaceContainer class="flex flex-row items-center">
      <CommonIcon bordered class="w-8 h-8 md:w-10 md:h-10" />
      <div class="ms-4 grow">
        <NuxtLink class="font-bold block" to="/">隨機手札</NuxtLink>
        <small class="text-muted hidden lg:block">雜七雜八之地</small>
      </div>

      <div id="header-icons" class="flex items-center justify-end">
        <HeaderIconCategories show-text />
        <HeaderIconTheme />
        <HeaderIconSearch />
      </div>
    </InterfaceContainer>
  </CommonWrapper>
</template>
