<template>
  <div>
    <header>头部</header>
    <nav>导航栏</nav>
    <slot />
    <footer>底部</footer>
  </div>
</template>
<style lang="scss">
header {
  background-color: #f00;
}

nav {
  background-color: #0f0;
}

footer {
  background-color: #00f;
}
</style>
