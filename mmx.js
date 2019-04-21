// eslint-disable-next-line no-unused-vars
const mmxPasscodeGenerator = function (options) {
  const generator = {
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
    },
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
      if (this.getStageTotals().subTanksAndCapsules & 1) {
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
      if (this.getStageTotals().defeated & 1) {
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
        this.p1(),
        this.p2(),
        this.p3(),
        this.p4(),
        this.p5(),
        this.p6(),
        this.p7(),
        this.p8(),
        this.p9(),
        this.p10(),
        this.p11(),
        this.p12()
      ];
    }
  };

  for (const stage in options) {
    generator.stages[stage].capsule = options[stage].capsule;
    generator.stages[stage].defeated = options[stage].defeated;
    generator.stages[stage].heart = options[stage].heart;
    generator.stages[stage].subTank = options[stage].subTank;
  }

  return generator.passcode();
};
