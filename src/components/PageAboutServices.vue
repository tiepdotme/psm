<template>
  <div class="AboutServices frame frame--columns text-gray-dark">
    <div class="grid-area-a">
      <h2>{{ design.title }}</h2>
      <p>{{ design.lede }}</p>
      <ul>
        <li v-for="(item, index) in design.items" :key="index">{{ item }}</li>
      </ul>
    </div>
    <div class="grid-area-b">
      <h2>{{ dev.title }}</h2>
      <p>{{ dev.lede }}</p>
      <ul>
        <li v-for="(item, index) in dev.items" :key="index">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    design: {
      title: "Thanh toán chuyển khoản",
      lede:
        "mình chỉ sử dụng duy nhất tài khoản ngân hàng mở tại Vietcombank thông tin thanh toán chi tiết bên dưới.",
      /* Designed to work, without losing the sense of ease that good craft delivers. */
      items: [
        "Phạm Xuân Tiếp",
        "0281000538644",
        "Vietcombank Chi nhánh Thủ Dầu Một, Bình Dương",
      ],
    },
    dev: {
      title: "Psm làm tốt nhất với",
      lede:
        "tập trung vào việc phát triển web và nội dung đăng ký tài khoản adsense, chạy traffic tăng thứ hạng, và tăng lượt click quảng cáo.",
      items: [
        "Phát triển web",
        "Viết nội dung content",
        "Xây dựng đơn đăng ký",
        "Đổ traffic vào Website, Youtube",
        "Tăng lượt xem, view click chất lượng từ các quốc gia Mỹ và châu âu",
        "Kéo pin cho tài khoản adsense",
      ],
    },
  }),
};
</script>

<style lang="postcss">
.AboutServices h2 {
  @apply mt-0 !important;
}
</style>
