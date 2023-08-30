<template>
  <div class="container">
    <div class="weather-wrapper">
      <WeatherBar />
    </div>
    <div class="time-wrapper">
      <DigitalNum class="digital-number" :num="timeArr[0]" />
      <DigitalNum class="digital-number" :num="timeArr[1]" />
      <div class="dot-container">
        <div class="dot-wrapper">
          <div class="dot slow-flash" />
        </div>
        <div class="dot-wrapper">
          <div class="dot slow-flash" />
        </div>
      </div>
      <DigitalNum class="digital-number" :num="timeArr[2]" />
      <DigitalNum class="digital-number" :num="timeArr[3]" />
      <div class="dot-container">
        <div class="dot-wrapper">
          <div class="dot quick-flash" />
        </div>
        <div class="dot-wrapper">
          <div class="dot quick-flash" />
        </div>
      </div>
      <DigitalNum class="digital-number" :num="timeArr[4]" />
      <DigitalNum class="digital-number" :num="timeArr[5]" />
    </div>

    <div class="search-container">
      <transition name="scroll" v-show="isShowSearchBar">
        <input v-model="searchContent" ref="search" class="search-input" @keyup.enter="onSearch" />
      </transition>

      <button
        @click="handleSearch"
        class="search-btn-wrapper"
        :class="isShowSearchBar ? 'search-btn-activate' : 'search-btn-inactivate'"
      >
        <Search style="width: 1em; height: 1em; margin-top: 16px" />
      </button>
    </div>
  </div>
</template>

<script>
import WeatherBar from '../components/WeatherBar.vue';
import DigitalNum from '../components/DigitalNum.vue';

export default {
  name: 'HomeView',

  components: {
    WeatherBar,
    DigitalNum,
  },

  data() {
    return {
      timeArr: ['1', '2', '0', '0', '0', '0'],
      isShowSearchBar: false,
      searchContent: '',
    };
  },
  mounted() {
    this.setTime();
  },
  methods: {
    setTime() {
      this.timeArr = new Date().toLocaleString().split(' ')[1].split(':').join('').split('');
      setInterval(() => {
        this.timeArr = new Date().toLocaleString().split(' ')[1].split(':').join('').split('');
      }, 1000);
    },
    handleSearch() {
      this.isShowSearchBar = !this.isShowSearchBar;
      if (this.isShowSearchBar) {
        setTimeout(() => {
          this.$refs.search.focus();
        }, 200);
      }
    },
    onSearch() {
      const url = `https://cn.bing.com/search?q=${this.searchContent}`;
      window.open(url, '_blank');
    },
  },
};
</script>
<style scoped lang="scss">
@keyframes flash {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes scroll {
  0% {
    width: 0;
  }

  100% {
    width: 40%;
  }
}

.scroll-enter-active {
  animation: scroll 0.3s ease-in;
}

.scroll-leave-active {
  animation: scroll 0.3s ease-out reverse;
}

.container {
  display: flex;
  flex-direction: column;

  .weather-wrapper {
    display: flex;
    margin: 30px 0 0 20px;
  }

  .time-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 20px;

    .digital-number {
      margin: 0 5px;
    }

    .dot-container {
      display: flex;
      flex-direction: column;
      height: 100%;
      padding: 0 8px;

      .dot-wrapper {
        width: 15px;
        height: 15px;
        margin: 10px 0;
        border-radius: 3px;
        box-shadow: inset 2px 2px 6px #babecc, inset -2px -2px 4px #fff;

        .dot {
          width: 15px;
          height: 15px;
          background-color: #e9692c;
          border-radius: 3px;
        }

        .slow-flash {
          animation: flash 3s ease-in-out infinite alternate;
        }

        .quick-flash {
          animation: flash 1s ease-in-out infinite alternate;
        }
      }
    }
  }

  .search-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;

    .search-input {
      width: 40%;
      height: 50px;
      padding-top: 5px;
      padding-left: 20px;
      margin-right: 20px;
      font-size: 18px;
      font-weight: lighter;
      border: 0;
      border-radius: 10px;
      outline: none;
      box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;
    }

    .search-btn-wrapper {
      width: 55px;
      height: 55px;
      font-size: 22px;
      line-height: 55px;
      cursor: pointer;
      user-select: none;
      background-color: #fff;
      border: 0;
      border-radius: 10px;
      outline: none;
    }

    .search-btn-activate {
      color: #e9692c;
      box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 30px 3px #fff;
    }

    .search-btn-inactivate {
      box-shadow: 2px 2px 5px #babecc, -5px -5px 30px 3px #fff;
    }
  }
}
</style>
