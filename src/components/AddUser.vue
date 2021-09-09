<template>
  <user-alert v-if="alertIsVisible" title="Add a User?" @close="hideAlert">
    <p>Do you want to continue with adding a user?</p>
  </user-alert>
  <section>
    <h2>Add a User</h2>
    <button @click="showAlert">Add User</button>
  </section>
</template>

<script>
import UserAlert from './UserAlert.vue';
import useAlert from '@/composables/alert.js';

export default {
  components: {
    UserAlert
  },
  setup() {
    //you can use this
    // const alertArray = useAlert();

    // or use this "destructuring"
    const [alertIsVisible, showAlert, hideAlert] = useAlert(true);

    return {
      alertIsVisible,
      showAlert,
      hideAlert
    };
  }
};
</script>
