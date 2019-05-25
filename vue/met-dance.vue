<template>
  <div class="met-dance" :style="'transform:scale(' + scale + ')'">
    <div :class="'met met-' + currentFrame"></div>
    <button @click="stand">Stand</button>
    <button @click="sit">Sit</button>
    <button @click="walk">Walk</button>
    <input v-model="currentFrame" type="number" min="1" max="7" />
    <div v-show="false">{{ frameQueue }}</div>
  </div>
</template>

<script>
module.exports = {
  name: 'met-dance',
  props: {
    scale: {
      type: Number,
      required: false,
      default: 1.0,
      validator: function (value) {
        return value >= 0 && value <= 1;
      }
    }
  },
  data: function () {
    return {
      currentFrame: 1,
      frameDuration: 120,
      frameQueue: []
    };
  },
  methods: {
    startClock: function () {
      setInterval(() => {
        if (this.frameQueue.length) {
          this.currentFrame = this.frameQueue[0];
          this.frameQueue = this.frameQueue.splice(1);
        }
      }, this.frameDuration);
    },
    addFrames: function (frames) {
      frames.forEach((frame) => {
        if (!this.frameQueue.length) {
          this.frameQueue.push(this.lastFrameInQueue);
        }
        this.frameQueue.push(frame);
      });
    },
    stand: function () {
      let cases = {
        1: [2, 3, 4, 3],
        2: [3, 4, 3],
        3: [],
        4: [3],
        5: [6, 7, 3],
        6: [7, 3],
        7: [3]
      };
      this.addFrames(cases[this.lastFrameInQueue]);
    },
    sit: function () {
      let cases = {
        1: [],
        2: [1],
        3: [4, 3, 2, 1],
        4: [3, 2, 1],
        5: [6, 7, 3, 4, 3, 2, 1],
        6: [7, 3, 4, 3, 2, 1],
        7: [3, 4, 3, 2, 1]
      };
      this.addFrames(cases[this.lastFrameInQueue]);
    },
    walk: function () {
      this.stand();
      this.walkCycle();
      this.stand();
    },
    walkCycle: function () {
      let cycle = [3,5,6,7];
      let cycles = 3;
      // loop over `cycle` array `cycles` times
      let loop = new Array(cycles).fill(cycle).flat();
      this.addFrames(loop);
    }
  },
  computed: {
    lastFrameInQueue: function () {
      let lastFrameInQueue = this.currentFrame;
      if (this.frameQueue.length) {
        lastFrameInQueue = this.frameQueue[this.frameQueue.length - 1];
      }
      return lastFrameInQueue;
    }
  },
  created: function () {
    this.startClock();
  }
};
</script>

<style scoped>
.met {
  display: inline-block;
  width: 66px;
  height: 63px;
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAc4AAAA/CAMAAABegdiKAAAAKlBMVEX///85cTkhgkIAYSEAQQApEBA5ICFzIAi9WSlrWVqlkpT3aZzvqkLW09aTWLtaAAAAAXRSTlMAQObYZgAAA2BJREFUeNrtnImKG0EMRLP3/f+/myaFH9pDtY1RYGzqcdnOqEZK6Iewh/y5bh5+YiDhqCPc/gnXQ/45w/FVSe3T09Pz8/N7YX1Czn7CwiQMTDHQgD+dIbINYV6V1FIOHx8f5OwkdCEkbE4h6hTzDeR0GiLbEOZU6cvvTpgQLzpCbm9vq+58CNQpFvMN5HQ6ItsQ5lX5o6buTyxTKcQn/BiyahUiZ3pbdiGMwxQDDZjTGSLbEKZVieXkMSG53RfWW4zdJRDy+A9Caifelka2tOEbWPf1U9CAPZ0hsg1hXpXU+gTpejOhk61CvK4RJs3c3NwQwhS1nKqdKTZkGyLbkGcJ5lVZDVkXS+UIvd1JQJuELMdi2vUhCcaWZhyW2/0GmEINbMg2RLYhzxLMqxJHUVj5OEFIl8CtfQi6qwmdMMlEuZSbEfamuP7TGdmG7KX+Fy77K/y8Kms530gAcA0hPqELwbfNFFvGppwGKOS7iIWf4tpPZ2Qbspd603rfzqtSd6fwpYEcQpoEFyIBGltuGhtdn9cA5TmdByOyDfN7qX+WAMghZESVlFNL+evrq+6ot7yoIV2CVsofQ/S5QjrhEyX9mllMA3UK7ts0kNN5TCLbML+XUk4C8DS+cmrIgCobTamchEV9oZJOdDx85UMa0zphMovCf2yAv0mmEFpl64sL+YEsRLZhfi/tHpRFtoKQEVUqhHJ5kvKquOo6n8Bbor6EoMpO152xFahBugaIqrV1s6WBw262IbINs3spCQA8K1WpzxJ0nkFrnSqRbeN8EhpsgqjfHkuMS24SnV6b2ipM2dVvtkAIP4rhW6ABPQCszAOezhDZhoG9dE62XQ7bY9UjL/53Qv1L4JmBqkFqfQ9dM5h2v5y7C5rEtzmdBySyDbOqZJEDQNeU6/NmPf68TzY0S+lwQpVt9e3b25txtdmQ60Mdm7qmVuPQALKlz2uVbWQbIltj2s2n8dFdzen2yWo51jnKpxL8Nyo1pCs3/ahEU9PJfi3jINvKMU9niGzD7F76cC77+ySC4jJ0N5VAjkcJXXk3ES3Jt6sTU25qGeciTmeIbMPUXmq2QczABVzDn5oEIEHUy2YT4FfNwnn/VaOqKD+j9oJOZ4hsw8heCr9ec+QEjw/fvH6w/NJOZ4hsw1/i3rWcyhbIAwAAAABJRU5ErkJggg==');
  background-repeat: no-repeat;
}
.met-1 { background-position:    0px 0px; }
.met-2 { background-position:  -66px 0px; }
.met-3 { background-position: -132px 0px; }
.met-4 { background-position: -198px 0px; }
.met-5 { background-position: -264px 0px; }
.met-6 { background-position: -330px 0px; }
.met-7 { background-position: -396px 0px; }

</style>
