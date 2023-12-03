<template>
  <p class="text-lg font-normal text-gray-600 my-2" data-test="user-id-view">
    아이디: {{ userId }}
  </p>
  <p class="text-lg font-normal text-gray-600 my-2" data-test="user-pw-view">
    비밀번호: {{ password }}
  </p>
</template>

<script>
export default {
  props: ['userId', 'password'],
};
</script>

<style></style>
