---
layoutClass: m-nav-layout
outline: [2, 3, 4]
---

 <script setup>
import NavLinks from '../.vitepress/components/NavLinks.vue'
import { NAV_DATA } from './data'
</script>
<style src="./index.scss"></style>

# 前端导航

> 汇聚前端常用导航、资源，帮助前端学习、提高效率。 

<NavLinks :navData="NAV_DATA"/>

<br /> 
