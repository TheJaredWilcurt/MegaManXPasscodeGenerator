<template>
  <div class="mmx-passcode-generator">
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
          <label>
            <input
              v-model="stages[stageName][flagName]"
              type="checkbox"
            />
            {{ formatName(flagName) }}
          </label>
        </div>
      </div>
    </div>
    <div class="code-container">
      <div
        v-for="(code, codeIndex) in passcode"
        class="code"
      >
        {{ code }}
      </div>
      <met-dance></met-dance>
    </div>
  </div>
</template>

<script>
module.exports = {
  name: 'passcode-generator',
  components: {
    'met-dance': httpVueLoader('./met-dance.vue')
  },
  data: function () {
    return {
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
        return 'Sub-Tank'
      }
      let name = val.split(/(?=[A-Z])/).join(' ');
      name = name[0].toUpperCase() + name.slice(1, name.length);
      return name;
    }
  },
  computed: {
    getStageTotals: function () {
      let defeated = 0;
      let hearts = 0;
      let subTanksAndCapsules = 0;
      Object.keys(this.stages).forEach((stage) => {
        defeated = defeated + Number(!!this.stages[stage].defeated);
        hearts = hearts + Number(!!this.stages[stage].heart);
        subTanksAndCapsules = subTanksAndCapsules + Number(!!this.stages[stage].subTank) + Number(!!this.stages[stage].capsule);
      });
      return { defeated, hearts, subTanksAndCapsules };
    },
    p1: function () {
      if (
        Number(this.stages.chillPenguin.defeated) +
        Number(this.stages.flameMammoth.capsule) +
        Number(this.stages.flameMammoth.defeated) +
        Number(this.stages.launchOctopus.heart) +
        Number(this.stages.sparkMandrill.subTank) +
        Number(this.stages.stingChameleon.capsule) +
        Number(this.stages.stingChameleon.heart) +
        Number(this.stages.stormEagle.capsule) +
        Number(this.stages.stormEagle.subTank) & 1
      ) {
        if (this.stages.armoredArmadillo.subTank && this.stages.chillPenguin.heart) {
          return 8;
        } else if (this.stages.armoredArmadillo.subTank) {
          return 6;
        } else if (this.stages.chillPenguin.heart) {
          return 2;
        } else {
          return 4;
        }
      } else {
        if (this.stages.armoredArmadillo.subTank && this.stages.chillPenguin.heart) {
          return 3;
        } else if (this.stages.armoredArmadillo.subTank) {
          return 5;
        } else if (this.stages.chillPenguin.heart) {
          return 7;
        } else {
          return 1;
        }
      }
    },
    p2: function () {
      if (this.getStageTotals.hearts & 1) {
        if (this.stages.flameMammoth.defeated && this.stages.stormEagle.capsule) {
          return 1;
        } else if (this.stages.flameMammoth.defeated) {
          return 2;
        } else if (this.stages.stormEagle.capsule) {
          return 5;
        } else {
          return 8;
        }
      } else {
        if (this.stages.flameMammoth.defeated && this.stages.stormEagle.capsule) {
          return 4;
        } else if (this.stages.flameMammoth.defeated) {
          return 3;
        } else if (this.stages.stormEagle.capsule) {
          return 6;
        } else {
          return 7;
        }
      }
    },
    p3: function () {
      if (this.stages.flameMammoth.subTank && this.stages.flameMammoth.heart) {
        return 4;
      } else if (this.stages.flameMammoth.subTank) {
        return 2;
      } else if (this.stages.flameMammoth.heart) {
        return 7;
      } else {
        return 6;
      }
    },
    p4: function () {
      if (this.stages.stormEagle.defeated && this.stages.stormEagle.heart) {
        return 1;
      } else if (this.stages.stormEagle.defeated) {
        return 7;
      } else if (this.stages.stormEagle.heart) {
        return 8;
      } else {
        return 4;
      }
    },
    p5: function () {
      if (
        Number(this.stages.armoredArmadillo.defeated) +
        Number(this.stages.armoredArmadillo.heart) +
        Number(this.stages.armoredArmadillo.subTank) +
        Number(this.stages.boomerKuwanger.defeated) +
        Number(this.stages.boomerKuwanger.heart) +
        Number(this.stages.chillPenguin.defeated) +
        Number(this.stages.flameMammoth.capsule) +
        Number(this.stages.flameMammoth.defeated) +
        Number(this.stages.stormEagle.defeated) & 1
      ) {
        if (this.stages.launchOctopus.defeated && this.stages.stingChameleon.capsule) {
          return 2;
        } else if (this.stages.launchOctopus.defeated) {
          return 4;
        } else if (this.stages.stingChameleon.capsule) {
          return 7;
        } else {
          return 8;
        }
      } else {
        if (this.stages.launchOctopus.defeated && this.stages.stingChameleon.capsule) {
          return 3;
        } else if (this.stages.launchOctopus.defeated) {
          return 6;
        } else if (this.stages.stingChameleon.capsule) {
          return 5;
        } else {
          return 1;
        }
      }
    },
    p6: function () {
      if (this.getStageTotals.subTanksAndCapsules & 1) {
        if (this.stages.boomerKuwanger.defeated && this.stages.boomerKuwanger.heart) {
          return 3;
        } else if (this.stages.boomerKuwanger.defeated) {
          return 2;
        } else if (this.stages.boomerKuwanger.heart) {
          return 5;
        } else {
          return 7;
        }
      } else {
        if (this.stages.boomerKuwanger.defeated && this.stages.boomerKuwanger.heart) {
          return 1;
        } else if (this.stages.boomerKuwanger.defeated) {
          return 8;
        } else if (this.stages.boomerKuwanger.heart) {
          return 6;
        } else {
          return 4;
        }
      }
    },
    p7: function () {
      if (
        Number(this.stages.chillPenguin.heart) +
        Number(this.stages.flameMammoth.heart) +
        Number(this.stages.launchOctopus.defeated) +
        Number(this.stages.stormEagle.capsule) +
        Number(this.stages.stormEagle.defeated) +
        Number(this.stages.stormEagle.subTank) & 1
      ) {
        if (this.stages.armoredArmadillo.defeated && this.stages.flameMammoth.capsule) {
          return 7;
        } else if (this.stages.armoredArmadillo.defeated) {
          return 4;
        } else if (this.stages.flameMammoth.capsule) {
          return 2;
        } else {
          return 1;
        }
      } else {
        if (this.stages.armoredArmadillo.defeated && this.stages.flameMammoth.capsule) {
          return 3;
        } else if (this.stages.armoredArmadillo.defeated) {
          return 5;
        } else if (this.stages.flameMammoth.capsule) {
          return 6;
        } else {
          return 8;
        }
      }
    },
    p8: function () {
      if (this.stages.sparkMandrill.defeated && this.stages.stingChameleon.heart) {
        return 6;
      } else if (this.stages.sparkMandrill.defeated) {
        return 7;
      } else if (this.stages.stingChameleon.heart) {
        return 2;
      } else {
        return 8;
      }
    },
    p9: function () {
      if (
        Number(this.stages.armoredArmadillo.defeated) +
        Number(this.stages.boomerKuwanger.defeated) +
        Number(this.stages.boomerKuwanger.heart) +
        Number(this.stages.chillPenguin.heart) +
        Number(this.stages.flameMammoth.heart) +
        Number(this.stages.launchOctopus.heart) +
        Number(this.stages.sparkMandrill.subTank) +
        Number(this.stages.stingChameleon.capsule) +
        Number(this.stages.stingChameleon.heart) & 1
      ) {
        if (this.stages.chillPenguin.capsule && this.stages.armoredArmadillo.heart) {
          return 4;
        } else if (this.stages.chillPenguin.capsule) {
          return 1;
        } else if (this.stages.armoredArmadillo.heart) {
          return 2;
        } else {
          return 3;
        }
      } else {
        if (this.stages.chillPenguin.capsule && this.stages.armoredArmadillo.heart) {
          return 6;
        } else if (this.stages.chillPenguin.capsule) {
          return 8;
        } else if (this.stages.armoredArmadillo.heart) {
          return 5;
        } else {
          return 7;
        }
      }
    },
    p10: function () {
      if (this.stages.stingChameleon.defeated && this.stages.stormEagle.subTank) {
        return 4;
      } else if (this.stages.stingChameleon.defeated) {
        return 6;
      } else if (this.stages.stormEagle.subTank) {
        return 5;
      } else {
        return 7;
      }
    },
    p11: function () {
      if (this.getStageTotals.defeated & 1) {
        if (this.stages.launchOctopus.heart && this.stages.sparkMandrill.subTank) {
          return 6;
        } else if (this.stages.launchOctopus.heart) {
          return 3;
        } else if (this.stages.sparkMandrill.subTank) {
          return 7;
        } else {
          return 1;
        }
      } else {
        if (this.stages.launchOctopus.heart && this.stages.sparkMandrill.subTank) {
          return 2;
        } else if (this.stages.launchOctopus.heart) {
          return 5;
        } else if (this.stages.sparkMandrill.subTank) {
          return 8;
        } else {
          return 4;
        }
      }
    },
    p12: function () {
      if (this.stages.chillPenguin.defeated && this.stages.sparkMandrill.heart) {
        return 1;
      } else if (this.stages.chillPenguin.defeated) {
        return 6;
      } else if (this.stages.sparkMandrill.heart) {
        return 4;
      } else {
        return 8;
      }
    },
    passcode: function () {
      return [
        this.p1,
        this.p2,
        this.p3,
        this.p4,
        this.p5,
        this.p6,
        this.p7,
        this.p8,
        this.p9,
        this.p10,
        this.p11,
        this.p12
      ];
    }
  }
};
</script>

<style scoped>
.mmx-passcode-generator {
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
.code {
  display: inline-block;
  width: 30px;
  height: 30px;
  background: #CCC;
  border: 1px solid #000;
  margin: 4px;
  line-height: 30px;
  text-align: center;
}
</style>
