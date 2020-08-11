<template>
  <div class="mmx-reverse-passcode">
    <div>
      <div
        v-for="(stageData, stageName) in stages"
        :key="stageName"
        class="stage"
      >
        <div class="stage-title">
          {{ formatName(stageName) }}
        </div>
        <div
          v-for="(flagValue, flagName) in stageData"
          :key="flagName"
        >
          <strong v-if="stages[stageName][flagName]">
            {{ formatName(flagName) }}
          </strong>
          <template v-else>
            {{ formatName(flagName) }}
          </template>
        </div>
      </div>
    </div>
    <div class="code-container">
      <label>
        Passcode:
        <input v-model="password" />
      </label>
      <span v-if="password && passcode.length !== 12" class="warning">
        Passcode must contain exactly 12 digits.
      </span>
    </div>
  </div>
</template>

<script>
module.exports = {
  name: 'reverse-passcode',
  data: function () {
    return {
      password: '',
      stages: {
        armoredArmadillo: {
          defeated: false,
          heart: false,
          subTank: false
        },
        boomerKuwanger: {
          defeated: false,
          heart: false
        },
        chillPenguin: {
          capsule: false,
          defeated: false,
          heart: false
        },
        flameMammoth: {
          capsule: false,
          defeated: false,
          heart: false,
          subTank: false
        },
        launchOctopus: {
          defeated: false,
          heart: false
        },
        sparkMandrill: {
          defeated: false,
          heart: false,
          subTank: false
        },
        stingChameleon: {
          capsule: false,
          defeated: false,
          heart: false
        },
        stormEagle: {
          capsule: false,
          defeated: false,
          heart: false,
          subTank: false
        }
      }
    };
  },
  methods: {
    formatName: function (val) {
      if (val === 'subTank') {
        return 'Sub-Tank';
      }
      let name = val.split(/(?=[A-Z])/).join(' ');
      name = name[0].toUpperCase() + name.slice(1, name.length);
      return name;
    },
    p1: function () {
      const p1 = this.passcode[1 - 1];
      if (p1 === 8) {
        this.stages.armoredArmadillo.subTank = true;
        this.stages.chillPenguin.heart = true;
      } else if (p1 === 6) {
        this.stages.armoredArmadillo.subTank = true;
      } else if (p1 === 2) {
        this.stages.chillPenguin.heart = true;
      } else if (p1 === 3) {
        this.stages.armoredArmadillo.subTank = true;
        this.stages.chillPenguin.heart = true;
      } else if (p1 === 5) {
        this.stages.armoredArmadillo.subTank = true;
      } else if (p1 === 7) {
        this.stages.chillPenguin.heart = true;
      }
    },
    p2: function () {
      const p2 = this.passcode[2 - 1];
      if (p2 === 1) {
        this.stages.flameMammoth.defeated = true;
        this.stages.stormEagle.capsule = true;
      } else if (p2 === 2) {
        this.stages.flameMammoth.defeated = true;
      } else if (p2 === 5) {
        this.stages.stormEagle.capsule = true;
      } else if (p2 === 4) {
        this.stages.flameMammoth.defeated = true;
        this.stages.stormEagle.capsule = true;
      } else if (p2 === 3) {
        this.stages.flameMammoth.defeated = true;
      } else if (p2 === 6) {
        this.stages.stormEagle.capsule = true;
      }
    },
    p3: function () {
      const p3 = this.passcode[3 - 1];
      if (p3 === 4) {
        this.stages.flameMammoth.subTank = true;
        this.stages.flameMammoth.heart = true;
      } else if (p3 === 2) {
        this.stages.flameMammoth.subTank = true;
      } else if (p3 === 7) {
        this.stages.flameMammoth.heart = true;
      }
    },
    p4: function () {
      const p4 = this.passcode[4 - 1];
      if (p4 === 1) {
        this.stages.stormEagle.defeated = true;
        this.stages.stormEagle.heart = true;
      } else if (p4 === 7) {
        this.stages.stormEagle.defeated = true;
      } else if (p4 === 8) {
        this.stages.stormEagle.heart = true;
      }
    },
    p5: function () {
      const p5 = this.passcode[5 - 1];
      if (p5 === 2) {
        this.stages.launchOctopus.defeated = true;
        this.stages.stingChameleon.capsule = true;
      } else if (p5 === 4) {
        this.stages.launchOctopus.defeated = true;
      } else if (p5 === 7) {
        this.stages.stingChameleon.capsule = true;
      } else if (p5 === 3) {
        this.stages.launchOctopus.defeated = true;
        this.stages.stingChameleon.capsule = true;
      } else if (p5 === 6) {
        this.stages.launchOctopus.defeated = true;
      } else if (p5 === 5) {
        this.stages.stingChameleon.capsule = true;
      }
    },
    p6: function () {
      const p6 = this.passcode[6 - 1];
      if (p6 === 3) {
        this.stages.boomerKuwanger.defeated = true;
        this.stages.boomerKuwanger.heart = true;
      } else if (p6 === 2) {
        this.stages.boomerKuwanger.defeated = true;
      } else if (p6 === 5) {
        this.stages.boomerKuwanger.heart = true;
      } else if (p6 === 1) {
        this.stages.boomerKuwanger.defeated = true;
        this.stages.boomerKuwanger.heart = true;
      } else if (p6 === 8) {
        this.stages.boomerKuwanger.defeated = true;
      } else if (p6 === 6) {
        this.stages.boomerKuwanger.heart = true;
      }
    },
    p7: function () {
      const p7 = this.passcode[7 - 1];
      if (p7 === 7) {
        this.stages.armoredArmadillo.defeated = true;
        this.stages.flameMammoth.capsule = true;
      } else if (p7 === 4) {
        this.stages.armoredArmadillo.defeated = true;
      } else if (p7 === 2) {
        this.stages.flameMammoth.capsule = true;
      } else if (p7 === 3) {
        this.stages.armoredArmadillo.defeated = true;
        this.stages.flameMammoth.capsule = true;
      } else if (p7 === 5) {
        this.stages.armoredArmadillo.defeated = true;
      } else if (p7 === 6) {
        this.stages.flameMammoth.capsule = true;
      }
    },
    p8: function () {
      const p8 = this.passcode[8 - 1];
      if (p8 === 6) {
        this.stages.sparkMandrill.defeated = true;
        this.stages.stingChameleon.heart = true;
      } else if (p8 === 7) {
        this.stages.sparkMandrill.defeated = true;
      } else if (p8 === 2) {
        this.stages.stingChameleon.heart = true;
      }
    },
    p9: function () {
      const p9 = this.passcode[9 - 1];
      if (p9 === 4) {
        this.stages.chillPenguin.capsule = true;
        this.stages.armoredArmadillo.heart = true;
      } else if (p9 === 1) {
        this.stages.chillPenguin.capsule = true;
      } else if (p9 === 2) {
        this.stages.armoredArmadillo.heart = true;
      } else if (p9 === 6) {
        this.stages.chillPenguin.capsule = true;
        this.stages.armoredArmadillo.heart = true;
      } else if (p9 === 8) {
        this.stages.chillPenguin.capsule = true;
      } else if (p9 === 5) {
        this.stages.armoredArmadillo.heart = true;
      }
    },
    p10: function () {
      const p10 = this.passcode[10 - 1];
      if (p10 === 4) {
        this.stages.stingChameleon.defeated = true;
        this.stages.stormEagle.subTank = true;
      } else if (p10 === 6) {
        this.stages.stingChameleon.defeated = true;
      } else if (p10 === 5) {
        this.stages.stormEagle.subTank = true;
      }
    },
    p11: function () {
      const p11 = this.passcode[11 - 1];
      if (p11 === 6) {
        this.stages.launchOctopus.heart = true;
        this.stages.sparkMandrill.subTank = true;
      } else if (p11 === 3) {
        this.stages.launchOctopus.heart = true;
      } else if (p11 === 7) {
        this.stages.sparkMandrill.subTank = true;
      } else if (p11 === 2) {
        this.stages.launchOctopus.heart = true;
        this.stages.sparkMandrill.subTank = true;
      } else if (p11 === 5) {
        this.stages.launchOctopus.heart = true;
      } else if (p11 === 8) {
        this.stages.sparkMandrill.subTank = true;
      }
    },
    p12: function () {
      const p12 = this.passcode[12 - 1];
      if (p12 === 1) {
        this.stages.chillPenguin.defeated = true;
        this.stages.sparkMandrill.heart = true;
      } else if (p12 === 6) {
        this.stages.chillPenguin.defeated = true;
      } else if (p12 === 4) {
        this.stages.sparkMandrill.heart = true;
      }
    },
    resetStages: function () {
      Object.keys(this.stages).forEach(function (stage) {
        Object.keys(this.stages[stage]).forEach(function (upgrade) {
          this.stages[stage][upgrade] = false;
        }.bind(this));
      }.bind(this));
    },
    updateStages: function () {
      this.resetStages();
      this.p1();
      this.p2();
      this.p3();
      this.p4();
      this.p5();
      this.p6();
      this.p7();
      this.p8();
      this.p9();
      this.p10();
      this.p11();
      this.p12();
    }
  },
  computed: {
    passcode: function () {
      let passcode = this.password.split('');
      passcode = passcode.filter(function (digit) {
        return ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].inlcudes(digit);
      });
      passcode = passcode.map(function (digit) {
        return Number(digit);
      });
      return passcode;
    }
  },
  watch: {
    passcode: function () {
      this.updateStages();
    }
  }
};
</script>

<style scoped>
.mmx-reverse-passcode {
    font-family: sans-serif;
}
.stage {
  display: inline-block;
  width: auto;
  border: 1px solid #008;
  margin: 10px;
  padding: 0px 0px 8px 0px;
  vertical-align: top;
}
.stage-title {
  background: #008;
  margin: 0px 0px 8px 0px;
  padding: 10px;
  color: #FFF;
}
.code-container {
  width: 160px;
  border: 1px solid #008;
}
.warning {
  color:  #800;
  font-weight:  bold;
}
</style>
