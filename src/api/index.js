import service from '@/utils/request';

class Api {
  static async fetchLocation() {
    const { data } = await service.request({
      method: 'GET',
      url: 'https://restapi.amap.com/v3/ip?parameters',
      params: {
        key: '038b70bb7c6b200a973e43df3b82e206',
      },
    });
    return data;
  }

  static async fetchWeather(params) {
    const { data } = await service.request({
      method: 'GET',
      url: 'https://devapi.qweather.com/v7/weather/now',
      params,
    });
    return data;
  }
}

export default Api;
