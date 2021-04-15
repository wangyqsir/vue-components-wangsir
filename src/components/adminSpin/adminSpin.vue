<template>
  <Spin size="large" fix v-show="isLoading">
    <div slot>
      <div class="next-loading-fusion-reactor">
        <span class="next-loading-dot"></span>
        <span class="next-loading-dot"></span>
        <span class="next-loading-dot"></span>
        <span class="next-loading-dot"></span>
      </div>
    </div>
  </Spin>
</template>

<script>
export default {
  name: 'admin-spin',
  props: {
    isLoading: {
      type: Boolean,
      default: false
    },
    // 预留字段
    large: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="less">
@import '~@/assets/style/color-theme.less';
@keyframes nextVectorRoute {
  0% {
    transform: rotate(0deg);
  }

  5% {
    transform: rotate(90deg);
  }

  25% {
    transform: rotate(90deg);
  }

  30% {
    transform: rotate(180deg);
  }

  50% {
    transform: rotate(180deg);
  }

  55% {
    -webkit-transform: rotate(270deg);
    -ms-transform: rotate(270deg);
    transform: rotate(270deg);
  }

  75% {
    transform: rotate(270deg);
  }

  80% {
    transform: rotate(360deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes nextVectorDotsYR {
  25% {
    bottom: 0;
  }

  45%,
  50% {
    bottom: 16.8px;
    height: 14.4px;
    width: 14.4px;
  }

  90% {
    bottom: 0;
    height: 12px;
    width: 12px;
  }
}

@keyframes nextVectorDotsY {
  25% {
    top: 0;
  }

  45%,
  50% {
    top: 16.8px;
    height: 14.4px;
    width: 14.4px;
  }

  90% {
    top: 0;
    height: 12px;
    width: 12px;
  }
}

@keyframes nextVectorDotsX {
  25% {
    left: 0;
  }

  45%,
  50% {
    left: 16.8px;
    width: 14.4px;
    height: 14.4px;
  }

  90% {
    left: 0;
    height: 12px;
    width: 12px;
  }
}

@keyframes nextVectorDotsXR {
  25% {
    right: 0;
  }

  45%,
  50% {
    right: 16.8px;
    width: 14.4px;
    height: 14.4px;
  }

  90% {
    right: 0;
    height: 12px;
    width: 12px;
  }
}

@keyframes nextVectorDotsYR-medium {
  25% {
    bottom: 0;
  }

  45%,
  50% {
    bottom: 11.2px;
    height: 9.6px;
    width: 9.6px;
  }

  90% {
    bottom: 0;
    height: 8px;
    width: 8px;
  }
}

@keyframes nextVectorDotsY-medium {
  25% {
    top: 0;
  }

  45%,
  50% {
    top: 11.2px;
    height: 9.6px;
    width: 9.6px;
  }

  90% {
    top: 0;
    height: 8px;
    width: 8px;
  }
}

@keyframes nextVectorDotsX-medium {
  25% {
    left: 0;
  }

  45%,
  50% {
    left: 11.2px;
    width: 9.6px;
    height: 9.6px;
  }

  90% {
    left: 0;
    height: 8px;
    width: 8px;
  }
}

@keyframes nextVectorDotsXR-medium {
  25% {
    right: 0;
  }

  45%,
  50% {
    right: 11.2px;
    width: 9.6px;
    height: 9.6px;
  }

  90% {
    right: 0;
    height: 8px;
    width: 8px;
  }
}
.next-loading-fusion-reactor {
  display: inline-block;
  width: 48px;
  height: 48px;
  position: relative;
  margin: 0;
  animation-duration: 5.6s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-name: nextVectorRoute;
}

.next-loading-fusion-reactor .next-loading-dot {
  position: absolute;
  margin: auto;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: @primary-color;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-duration: 1.4s;
}

.next-loading-fusion-reactor .next-loading-dot:nth-child(1) {
  top: 0;
  bottom: 0;
  left: 0;
  animation-name: nextVectorDotsX;
}

.next-loading-fusion-reactor .next-loading-dot:nth-child(2) {
  left: 0;
  right: 0;
  top: 0;
  opacity: 0.8;
  animation-name: nextVectorDotsY;
}

.next-loading-fusion-reactor .next-loading-dot:nth-child(3) {
  top: 0;
  bottom: 0;
  right: 0;
  opacity: 0.6;
  animation-name: nextVectorDotsXR;
}

.next-loading-fusion-reactor .next-loading-dot:nth-child(4) {
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.2;
  animation-name: nextVectorDotsYR;
}
</style>
