<template>
  <div>
    <h2 class="Heading Heading-4xl font-medium">Tiếp adsense</h2>
    <p class="Space-t mb-2px">{{ about }}</p>
    <p class="Text Link mb-2px">
      <a :href="`mailto:${contact.email}`">
        <span class="Text-contact-type">E: </span>
        <span>{{ contact.email }}</span>
      </a>
    </p>
    <p class="Text Link">
      <a :href="`tel:${contact.phone.replace(/ /g, '-')}`">
        <span class="Text-contact-type">T: </span>
        <span>+84 {{ contact.phone }}</span>
      </a>
    </p>
    <div class="Space-y">
      <p class="Text mb-2px">{{ signup }}</p>
      <FormNewsletter></FormNewsletter>
    </div>
    <p class="Text-xs text-gray-dark">
      © Tiếp adsense đã làm adsense kể từ năm 2015 đến nay năm {{ new Date().getFullYear() }}. <br />Facebook cá nhân <a href="https://www.facebook.com/profile.php?id=100050845217346"><strong>Fb.com/phusa</strong></a> <br />Các bạn có thể liên lạc với mình qua Facebook và zalo nhé. hoặc gọi điện trực tiếp sẽ tốt hơn. <br />Ngoài ra trang này còn đăng nội dung cá nhân, và kinh nghiệm mà kdo đã trải qua và mong muốn hướng dẫn lại đóng góp cho cuộc đời, cho đi để được nhận lại.
    </p>
  </div>
</template>

<script>
import FormNewsletter from "../components/FormNewsletter";

export default {
  components: {
    FormNewsletter,
  },
  props: {},
  data: () => ({
    about: "Để liên lạc với Tiếp nhanh chóng hãy gọi điện thoại:",
    signup: "Để kết bạn, chơi với nhau lâu dài và nhận giá ưu đãi đăng ký:",
    contact: {
      email: "Psm@phusa.me",
      phone: "0337036819",
    },
  }),
};
</script>

<style lang="postcss" scoped>
.Text-contact-type {
  @apply inline-block;
  font-size: 85%;
  width: 1.2em;
}
</style>
