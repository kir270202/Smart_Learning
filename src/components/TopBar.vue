<template>
  <header class="top-bar">
    <div class="logo-section">

      <span class="app-name">QTI-Question-Parser</span>
    </div>
  </header>
</template>

<script>
export default {
  name: 'TopBar',
};
</script>

<style scoped>
.top-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #3c4e62; /* heller als vorher */
  color: #ffffff;
  padding: 0.75rem 1rem; /* vertikal schön, horizontal links fast am Rand */
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.logo-section {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-left: 0.25rem; /* nur minimaler linker Rand */
}

.icon {
  width: 28px;
  height: 28px;
}

.app-name {
  font-size: 1.25rem;
  font-weight: 600;
  white-space: nowrap;
}

@media (max-width: 600px) {
  .app-name {
    font-size: 1rem;
  }
}
</style>
