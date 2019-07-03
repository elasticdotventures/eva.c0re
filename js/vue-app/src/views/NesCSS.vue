<template>
<div>
https://nostalgic-css.github.io/NES.css/


<h2>nes-text class</h2>


<span class="nes-text is-primary">Primary</span>
<span class="nes-text is-success">Success</span>
<span class="nes-text is-warning">Warning</span>
<span class="nes-text is-error">Error</span>
<span class="nes-text is-disabled">Disabled</span>

<v-spacer />
<h2>nes-btn class</h2>
<a class="nes-btn">Normal</a>


<button type="button" class="nes-btn is-primary">Primary</button>
<button type="button" class="nes-btn is-success">Success</button>
<button type="button" class="nes-btn is-warning">Warning</button>
<button type="button" class="nes-btn is-error">Error</button>
<button type="button" class="nes-btn is-disabled">Disabled</button>

<v-spacer />
<h2>nes-progress class</h2>

<progress class="nes-progress" value="90" max="100"></progress>
<progress class="nes-progress is-primary" value="80" max="100"></progress>
<progress class="nes-progress is-success" value="50" max="100"></progress>
<progress class="nes-progress is-warning" value="30" max="100"></progress>
<progress class="nes-progress is-error" value="10" max="100"></progress>
<progress class="nes-progress is-pattern" value="50" max="100"></progress>

<v-spacer />
<h2>nes-ballon class</h2>
<i>buggy; not working. </i>
<section class="message-list">
  <section class="message -left">
    <i class="nes-bcrikko"></i>
    <!-- Balloon -->
    <div class="nes-balloon from-left">
      <p class="nes-text">Hello NES.css</p>
    </div>
  </section>

  <section class="message -right">
    <!-- Balloon -->
    <div class="nes-balloon from-right">
      <p class="nes-text">Good morning. Thou hast had a good night's sleep, I hope.</p>
    </div>
    <i class="nes-bcrikko"></i>
  </section>
</section>

<v-spacer />
<h2>nes-icon class</h2>

<section class="icon-list">
  <!-- close -->
  <i class="nes-icon close is-large"></i>

  <!-- trophy -->
  <i class="nes-icon trophy is-large"></i>

  <!-- coin -->
  <i class="nes-icon coin is-large"></i>
</section>


</div>
</template>



<style>
@import url("https://unpkg.com/nes.css/css/nes-core.min.css");
.nes-text, .nes-btn, .nes-ballon {
  font-family: 'Press Start 2P';
}
</style>



