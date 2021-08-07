<template lang='pug'>
.alert(role='alert')
  span.alert-context Content warning!
  span.alert-message
    slot
.alert.alert-error(role='alert')
  .flex-1
    strong.mr-2 Content warning!
    span.alert-message
      slot
</template>
