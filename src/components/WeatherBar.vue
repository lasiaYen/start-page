<!-- eslint-disable vuejs-accessibility/mouse-events-have-key-events -->
<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <div @click="isShowDetail = !isShowDetail">
    <div
      class="weather-container"
      :class="isShowDetail ? 'weather-activate' : 'weather-inactivate'"
    >
      <span class="city">{{ city }}</span>
      <i :class="'qi-' + weather?.icon + '-fill'" />
      <span class="describe">{{ weather?.text }}</span>
      <span class="temperature">{{ weather?.temp }}℃</span>
      <transition name="detail" v-show="isShowDetail">
        <div class="weather-detail-container">
          <div class="wrapper">
            <p class="title">大气压强</p>
            <p class="figure">{{ weather?.pressure }}hPa</p>
          </div>
          <div class="wrapper">
            <p class="title">体感温度</p>
            <p class="figure">{{ weather?.feelsLike }}℃</p>
          </div>
          <div class="wrapper">
            <p class="title">相对湿度</p>
            <p class="figure">{{ weather?.humidity }}%</p>
          </div>
          <div class="wrapper">
            <p class="title">降水量</p>
            <p class="figure">{{ weather?.precip }}mm</p>
          </div>
          <div class="wrapper">
            <p class="title">风速</p>
            <p class="figure">{{ weather?.windSpeed }}km/h</p>
          </div>
          <div class="wrapper">
            <p class="title">风力等级</p>
            <p class="figure">{{ weather?.windScale }}级</p>
          </div>
          <div class="wrapper">
            <p class="title">风向</p>
            <p class="figure">{{ weather?.windDir }}</p>
          </div>
          <div class="wrapper">
            <p class="title">能见度</p>
            <p class="figure">{{ weather?.vis }}km</p>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import Api from '../api';

export default {
  name: 'WeatherBar',
  data() {
    return {
      city: '',
      weather: null,
      isShowDetail: false,
      onlineImg: true,
    };
  },
  async mounted() {
    const adcode = await this.fetchLocation();
    this.fetchWeather(adcode);
  },
  methods: {
    async fetchLocation() {
      const { rectangle, city, status } = await Api.fetchLocation();
      if (status === '1') {
        this.city = city;
        const res = rectangle.split(';')[0].split(',');
        return `${Number(res[0]).toFixed(2)},${Number(res[1]).toFixed(2)}`;
      }
      this.city = '北京市';
      return '101010100';
    },
    async fetchWeather(location) {
      const params = {
        location,
        key: '6f57852da59249cfabf99a11999cdbac',
      };
      const { now } = await Api.fetchWeather(params);
      this.weather = now;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@keyframes slide {
  0% {
    max-height: 0;
    opacity: 0;
  }

  100% {
    max-height: 200px;
    opacity: 0.8;
  }
}

.detail-enter-active {
  animation: slide 0.4s linear;
}

.detail-leave-active {
  animation: slide 0.4s ease-out reverse;
}

.weather-container {
  position: relative;
  box-sizing: border-box;
  padding: 10px 30px;
  color: #e9692c;
  text-align: center;
  text-align: left;
  cursor: pointer;
  user-select: none;
  border-radius: 10px;

  * {
    margin: 0 4px;
  }

  .weather-detail-container {
    position: absolute;
    left: 0;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
    width: 100%;
    width: 100%;
    padding: 10px;
    margin: 0;
    margin-top: 20px;
    overflow: hidden;
    font-size: 14px;
    color: #303133;
    border-radius: 8px;
    box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 30px 3px #fff;

    opacity: 0.8;

    .wrapper {
      width: 100%;
      margin: 0;
      text-align: center;

      .figure {
        color: #e9692c;
      }
    }
  }
}

.weather-activate {
  box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 30px 3px #fff;
}

.weather-inactivate {
  background-color: #fff;
  box-shadow: 2px 2px 5px #babecc, -5px -5px 30px 3px #fff;
}
</style>
