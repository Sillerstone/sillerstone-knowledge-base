<script setup lang="ts">
import {StaffRanks} from "../exports";

const {rank} = defineProps<{
  rank: StaffRanks
}>();

let type = "info";
if (rank == StaffRanks.Owner || rank == StaffRanks.Manager || rank == StaffRanks.Curator) {
  type = "danger";
} else if (rank == StaffRanks.BotDeveloper || rank == StaffRanks.HrManager || rank == StaffRanks.Launcher || rank == StaffRanks.MapBuilder) {
  type = "warning";
}
</script>

<template>
  <Badge :type="type" :text="rank"/>
</template>
