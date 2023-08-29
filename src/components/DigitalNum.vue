<template>
  <div class="digital-container">
    <div :class="['digital-center', arr[0] === 1 ? 'activate-center' : '']">
      <div class="digital-arrow-wrapper-right">
        <div class="digital-arrow-left" />
        <div class="digital-arrow-right" />
      </div>
      <div class="digital-row" />
      <div class="digital-arrow-wrapper-left">
        <div class="digital-arrow-left" />
        <div class="digital-arrow-right" />
      </div>
    </div>
    <div class="digital-mid-wrapper">
      <div :class="['digital-mid-left', arr[1] === 1 ? 'activate-left' : '']">
        <div class="digital-arrow-wrapper-left">
          <div class="digital-arrow-left" />
          <div class="digital-arrow-right" />
        </div>
        <div class="digital-row" />
        <div class="digital-arrow-wrapper-right">
          <div class="digital-arrow-left" />
          <div class="digital-arrow-right" />
        </div>
      </div>
      <div style="width: 35px" />
      <div :class="['digital-mid-right', , arr[2] === 1 ? 'activate-right' : '']">
        <div class="digital-arrow-wrapper-left">
          <div class="digital-arrow-left" />
          <div class="digital-arrow-right" />
        </div>
        <div class="digital-row" />
        <div class="digital-arrow-wrapper-right">
          <div class="digital-arrow-left" />
          <div class="digital-arrow-right" />
        </div>
      </div>
    </div>
    <div :class="['digital-center', arr[3] === 1 ? 'activate-center' : '']">
      <div class="digital-arrow-wrapper-right">
        <div class="digital-arrow-left" />
        <div class="digital-arrow-right" />
      </div>
      <div class="digital-row" />
      <div class="digital-arrow-wrapper-left">
        <div class="digital-arrow-left" />
        <div class="digital-arrow-right" />
      </div>
    </div>
    <div class="digital-mid-wrapper">
      <div :class="['digital-mid-left', arr[4] === 1 ? 'activate-left' : '']">
        <div class="digital-arrow-wrapper-left">
          <div class="digital-arrow-left" />
          <div class="digital-arrow-right" />
        </div>
        <div class="digital-row" />
        <div class="digital-arrow-wrapper-right">
          <div class="digital-arrow-left" />
          <div class="digital-arrow-right" />
        </div>
      </div>
      <div style="width: 35px" />
      <div :class="['digital-mid-right', , arr[5] === 1 ? 'activate-right' : '']">
        <div class="digital-arrow-wrapper-left">
          <div class="digital-arrow-left" />
          <div class="digital-arrow-right" />
        </div>
        <div class="digital-row" />
        <div class="digital-arrow-wrapper-right">
          <div class="digital-arrow-left" />
          <div class="digital-arrow-right" />
        </div>
      </div>
    </div>
    <div :class="['digital-center', arr[6] === 1 ? 'activate-center' : '']">
      <div class="digital-arrow-wrapper-right">
        <div class="digital-arrow-left" />
        <div class="digital-arrow-right" />
      </div>
      <div class="digital-row" />
      <div class="digital-arrow-wrapper-left">
        <div class="digital-arrow-left" />
        <div class="digital-arrow-right" />
      </div>
    </div>
  </div>
</template>
<script>
const numberArray = [
  [1, 1, 1, 0, 1, 1, 1],
  [0, 0, 1, 0, 0, 1, 0],
  [1, 0, 1, 1, 1, 0, 1],
  [1, 0, 1, 1, 0, 1, 1],
  [0, 1, 1, 1, 0, 1, 0],
  [1, 1, 0, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1],
  [1, 0, 1, 0, 0, 1, 0],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 0, 1, 1],
];
export default {
  name: 'DigitalNum',
  props: {
    num: String,
  },
  created() {
    this.initNumberArray();
  },
  data() {
    return {
      arr: null,
    };
  },
  watch: {
    num() {
      this.initNumberArray();
    },
  },
  methods: {
    initNumberArray() {
      const num = Number(this.num);
      if (!Number.isNaN(num) && num <= 9) {
        this.arr = numberArray[Number(this.num)];
      } else {
        this.arr = [1, 1, 0, 1, 1, 0, 1];
      }
    },
  },
};
</script>

<style scoped lang="scss">
.digital-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 1;

  .digital-mid-wrapper {
    display: flex;
    margin: -3px 0;

    .digital-mid-left {
      position: relative;
      display: flex;
      flex-direction: column;

      .digital-row {
        width: 12px;
        height: 40px;
        box-shadow: inset 2px 2px 6px #babecc, inset -2px -2px 4px #fff;
      }

      .digital-arrow-wrapper-left {
        position: absolute;
        top: 0;
        display: flex;

        .digital-arrow-left {
          box-sizing: border-box;
          border-top: 3px solid #ebecf0;
          border-right: 3px solid transparent;
          border-bottom: 3px solid transparent;
          border-left: 3px solid #ebecf0;
        }

        .digital-arrow-right {
          box-sizing: border-box;
          border-top: 3px solid #ebecf0;
          border-right: 3px solid #ebecf0;
          border-bottom: 3px solid transparent;
          border-left: 3px solid transparent;
        }
      }

      .digital-arrow-wrapper-right {
        position: absolute;
        bottom: 0;
        display: flex;

        .digital-arrow-left {
          box-sizing: border-box;
          border-top: 3px solid transparent;
          border-right: 3px solid transparent;
          border-bottom: 3px solid #ebecf0;
          border-left: 3px solid #ebecf0;
        }

        .digital-arrow-right {
          box-sizing: border-box;
          border-top: 3px solid transparent;
          border-right: 3px solid #ebecf0;
          border-bottom: 3px solid #ebecf0;
          border-left: 3px solid transparent;
        }
      }
    }

    .digital-mid-right {
      position: relative;
      display: flex;
      flex-direction: column;

      .digital-row {
        width: 12px;
        height: 40px;
        box-shadow: inset 2px 2px 6px #babecc, inset -2px -2px 4px #fff;
      }

      .digital-arrow-wrapper-left {
        position: absolute;
        top: 0;
        display: flex;

        .digital-arrow-left {
          box-sizing: border-box;
          border-top: 3px solid #ebecf0;
          border-right: 3px solid transparent;
          border-bottom: 3px solid transparent;
          border-left: 3px solid #ebecf0;
        }

        .digital-arrow-right {
          box-sizing: border-box;
          border-top: 3px solid #ebecf0;
          border-right: 3px solid #ebecf0;
          border-bottom: 3px solid transparent;
          border-left: 3px solid transparent;
        }
      }

      .digital-arrow-wrapper-right {
        position: absolute;
        bottom: 0;
        display: flex;

        .digital-arrow-left {
          box-sizing: border-box;
          border-top: 3px solid transparent;
          border-right: 3px solid transparent;
          border-bottom: 3px solid #ebecf0;
          border-left: 3px solid #ebecf0;
        }

        .digital-arrow-right {
          box-sizing: border-box;
          border-top: 3px solid transparent;
          border-right: 3px solid #ebecf0;
          border-bottom: 3px solid #ebecf0;
          border-left: 3px solid transparent;
        }
      }
    }

    .activate-left {
      .digital-row {
        background-color: #e9692c;
        box-shadow: none;
      }
    }

    .activate-right {
      .digital-row {
        background-color: #e9692c;
        box-shadow: none;
      }
    }
  }

  .digital-center {
    position: relative;
    display: flex;

    .digital-row {
      z-index: -1;
      width: 40px;
      height: 12px;
      box-shadow: inset 2px 2px 6px #babecc, inset -2px -2px 4px #fff;
    }

    .digital-arrow-wrapper-right {
      position: absolute;
      right: 0;

      .digital-arrow-left {
        z-index: 10;
        box-sizing: border-box;
        border-top: 3px solid #ebecf0;
        border-right: 3px solid #ebecf0;
        border-bottom: 3px solid transparent;
        border-left: 3px solid transparent;
      }

      .digital-arrow-right {
        z-index: 10;
        box-sizing: border-box;
        border-top: 3px solid transparent;
        border-right: 3px solid #ebecf0;
        border-bottom: 3px solid #ebecf0;
        border-left: 3px solid transparent;
      }
    }

    .digital-arrow-wrapper-left {
      position: absolute;
      left: 0;

      .digital-arrow-left {
        z-index: 10;
        box-sizing: border-box;
        border-top: 3px solid #ebecf0;
        border-right: 3px solid transparent;
        border-bottom: 3px solid transparent;
        border-left: 3px solid #ebecf0;
      }

      .digital-arrow-right {
        z-index: 10;
        box-sizing: border-box;
        border-top: 3px solid transparent;
        border-right: 3px solid transparent;
        border-bottom: 3px solid #ebecf0;
        border-left: 3px solid #ebecf0;
      }
    }
  }

  .activate-center {
    .digital-row {
      background-color: #e9692c;
      box-shadow: none;
    }
  }
}
</style>
