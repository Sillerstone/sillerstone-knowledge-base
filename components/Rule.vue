<script setup lang="ts">
import {MARKDOWN_IT} from "../exports";

const props = defineProps<{ clause: string, rule: string, punishment?: string, abuse?: string }>();
const rule = MARKDOWN_IT.render(props.rule).replaceAll(/<\/?p>/g, "");
let punishment = null;
if (props.punishment) {
  punishment = MARKDOWN_IT.render(props.punishment).replaceAll(/<\/?p>/g, "");
}
let abuse = null;
if (props.abuse) {
  abuse = MARKDOWN_IT.render(props.abuse).replaceAll(/<\/?p>/g, "");
}
</script>

<template>
  <blockquote :id="clause">
    <p> <Badge type="info" :text="clause"/> <span v-html="rule"></span></p>
    <p v-if="punishment"><span class="punishment"><strong>Наказание:</strong></span> <span v-html="punishment"></span></p>
    <p v-if="abuse"><span class="abuse"><strong>Злоупотребление:</strong></span> <span v-html="abuse"></span></p>
  </blockquote>
</template>

<style scoped>
.punishment {
  color: var(--c-warning);
}

.abuse {
  color: var(--c-danger);
}
</style>