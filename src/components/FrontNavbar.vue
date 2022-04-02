<template>
  <!-- 前台導覽列 -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark | py-5">
    <div class="container">
      <!-- 首頁 logo -->
      <router-link to="/" class="text-light me-8">
        <i class="bi bi-house-heart-fill fs-4"></i>
        首頁
      </router-link>
      <router-link to="/products" class="text-light me-8">
        <i class="bi bi-boxes fs-4"></i>
        產品列表
      </router-link>
      <!-- 漢堡 -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarList"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- 選單內容 -->
      <div class="collapse navbar-collapse justify-content-end" id="navbarList">
        <ul class="navbar-nav">
          <!-- 購物車 -->
          <li class="nav-item d-flex align-items-center | me-4"
            @click="openCartCanvas" @keydown="canvas">
            <i class="bi bi-cart3 fs-4 text-light | me-2 me-lg-0"></i>
            <p class="d-lg-none text-light">購物車</p>
          </li>
          <!-- 後台管理人員登入 -->
          <li class="nav-item d-flex align-items-center" @click="openLoginModel" @keydown="login">
            <!-- <router-link to="/login"> -->
              <i class="bi bi-person-circle fs-4 text-light | me-2 me-lg-0"></i>
              <p class="d-lg-none text-light">後台管理人員登入</p>
            <!-- </router-link> -->
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <CanvasCart ref="cartCanvas" />
  <ModalLogin ref="loginModal" />
</template>

<script>
import CanvasCart from '@/components/CanvasCart.vue';
import ModalLogin from '@/components/ModalLogin.vue';

export default {
  name: 'FrontNavbar',
  components: {
    CanvasCart,
    ModalLogin,
  },
  methods: {
    openLoginModel() {
      this.$refs.loginModal.openModal();
    },
    openCartCanvas() {
      this.$refs.cartCanvas.openCanvas();
    },
  },
};
</script>
