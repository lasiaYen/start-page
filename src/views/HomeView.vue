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
    opacity: 1;

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
}
</style>
