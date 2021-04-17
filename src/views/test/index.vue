<template>
  <div class="test">
    <h4>Author list:</h4>
    <p v-for="user in users" :key="user">
      {{user}}
    </p>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState('User', ['users']),
  },
  methods: {
    ...mapActions('User', ['getUsers']),
  },
  created() {
    this.getUsers();
  },
};
</script>
