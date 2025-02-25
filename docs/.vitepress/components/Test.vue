<script setup>
import NavLink from './NavLink.vue'
const props = defineProps({
  navData: []
})
</script>

<template>
 <div v-for="navItem in navData">

  <h2 v-if="navItem.title" :id="formatTitle" tabindex="-1">
    {{ navItem.title }}
  </h2>
  <div class="m-nav-links">
    <NavLink
      v-for="item in navItem.items"
      :key="item.link"
      :icon="item.icon"
      :title="item.title"
      :desc="item.desc"
      :link="item.link"
    />
  </div>
 </div>
</template>

<style lang="scss" scoped>
.m-nav-links {
  --m-nav-icon-box-size: 40px;
  --m-nav-icon-size: 24px;
  --m-nav-box-gap: 12px;

  --m-nav-gap: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  grid-row-gap: var(--m-nav-gap);
  grid-column-gap: var(--m-nav-gap);
  grid-auto-flow: row dense;
  justify-content: center;
  padding: var(--m-nav-gap);
  border: 1px solid #f0f0f0; /* 替换 var(--vp-c-bg-soft) */
  border-radius: 8px;
  height: 100%;
  text-decoration: inherit;
  background-color: #f5f5f5; /* 替换 var(--vp-c-bg-alt) */
  transition: all 0.25s;
  &:hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 替换 var(--vp-shadow-2) */
    border-color: #42b983; /* 替换 var(--vp-c-brand) */
    text-decoration: initial;
    background-color: #fff; /* 替换 var(--vp-c-bg) */
  }

  .box {
    display: flex;
    flex-direction: column;
    padding: var(--m-nav-box-gap);
    height: 100%;
    color: #333; /* 替换 var(--vp-c-text-1) */
    &-header {
      display: flex;
      align-items: center;
    }
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: calc(var(--m-nav-box-gap) - 2px);
    border-radius: 6px;
    width: var(--m-nav-icon-box-size);
    height: var(--m-nav-icon-box-size);
    font-size: var(--m-nav-icon-size);
    background-color: #e9e9e9; /* 替换 var(--vp-c-default-soft) */
    transition: background-color 0.25s;
    :deep(svg) {
      width: var(--m-nav-icon-size);
      fill: currentColor;
    }
    :deep(img) {
      border-radius: 4px;
      width: var(--m-nav-icon-size);
    }
  }

  .title {
    overflow: hidden;
    flex-grow: 1;
    white-space: nowrap;
    text-overflow: ellipsis;
    line-height: var(--m-nav-icon-box-size);
    font-size: 16px;
    font-weight: 600;
  }

  .desc {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    flex-grow: 1;
    margin: calc(var(--m-nav-box-gap) - 2px) 0 0;
    line-height: 1.5;
    font-size: 12px;
    color: #666; /* 替换 var(--vp-c-text-2) */
  }
}

@media (max-width: 960px) {
  .m-nav-link {
    --m-nav-icon-box-size: 36px;
    --m-nav-icon-size: 20px;
    --m-nav-box-gap: 8px;

    .title {
      font-size: 14px;
    }
  }
}
</style>