<template>
  <div class="about-container">
    <section class="about-header">
      <h1>What's bakin'?</h1>
      <p>
        BakerTime is an open-source project management tool for bakers. Our mission is to empower
        bakers and pastry chefs to create, manage, and collaborate on their culinary masterpieces.
      </p>
    </section>
    <div class="about-image">
      <img src="@/assets/bakingApps.png" />
    </div>
  </div>
</template>

<style scoped>
.about-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
  align-items: center;
  margin: 0 auto;
  padding: 40px 20px;
  min-height: 100vh;
}

.about-header {
  padding: 70px 0;
}

.about-header h1 {
  font-size: 48px;
  margin-bottom: 20px;
  color: #000;
}

.about-header p {
  font-size: 20px;
  color: #555;
  max-width: 1000px;
  margin: 0 auto;
}

.about-image img {
  width: 95%;
  height: auto;
  vertical-align: middle;
}
</style>
