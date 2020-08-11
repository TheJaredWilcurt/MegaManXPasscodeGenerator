// eslint-disable-next-line no-unused-vars
const mmxReversePassword = function (password) {
  if (typeof(password) === 'number') {
    password = password + '';
  }
  if (typeof(password) === 'string') {
    password = password.split('');
  }
  if (!Array.isArray(password)) {
    console.log('Password type is invalid');
    return;
  }
  if (password.length !== 12) {
    console.log('Password must contain exactly 12 digits');
    return;
  }
  password = password.map(function (digit) {
    return Number(digit);
  });

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
    p1: function () {
      const p1 = password[1 - 1];
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
      const p2 = password[2 - 1];
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
      const p3 = password[3 - 1];
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
      const p4 = password[4 - 1];
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
      const p5 = password[5 - 1];
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
      const p6 = password[6 - 1];
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
      const p7 = password[7 - 1];
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
      const p8 = password[8 - 1];
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
      const p9 = password[9 - 1];
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
      const p10 = password[10 - 1];
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
      const p11 = password[11 - 1];
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
      const p12 = password[12 - 1];
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

      return this.stages;
    }
  };

  return generator.updateStages();
};

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
      if (this.getStageTotals().hearts & 1) {
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
