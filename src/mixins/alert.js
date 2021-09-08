// import UserAlert from '@/components/UserAlert';

// !! you can't call components in this file.js

export default {
  //   components: {
  //     UserAlert
  //   },
  data() {
    return {
      alertIsVisible: false
    };
  },
  methods: {
    showAlert() {
      this.alertIsVisible = true;
    },
    hideAlert() {
      this.alertIsVisible = false;
    }
  }
};
