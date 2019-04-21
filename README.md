# MegaMan X Passcode Generator

JavaScript Library to generate passcodes for MegaMan X

Pass in an options object to get an array of 12 single digit numbers.

```js
let options = {
  armoredArmadillo: {
    defeated: true,
    heart: true,
    subTank: true
  },
  boomerKuwanger: {
    defeated: true,
    heart: true
  },
  chillPenguin: {
    capsule: true,
    defeated: true,
    heart: true
  },
  flameMammoth: {
    capsule: true,
    defeated: true,
    heart: true,
    subTank: true
  },
  launchOctopus: {
    defeated: true,
    heart: true
  },
  sparkMandrill: {
    defeated: true,
    heart: true,
    subTank: true
  },
  stingChameleon: {
    capsule: true,
    defeated: true,
    heart: true
  },
  stormEagle: {
    capsule: true,
    defeated: true,
    heart: true,
    subTank: true
  }
};

// Outputs Array of Numbers by default
mmxPasscodeGenerator(options);
// [8, 4, 4, 1, 2, 1, 3, 6, 4, 4, 2, 1]

// Use .join to produce String
mmxPasscodeGenerator(options).join('');
// '844121364421'

// Wrap string in parseInt for Number
parseInt(mmxPasscodeGenerator(options).join(''), 10);
// 844121364421
 ```

**NOTE:** When passing in the options object, you do not need to send in `false` values.

**Examples:**

```js
// Skip Intro
mmxPasscodeGenerator({});
// [1, 7, 6, 4, 1, 4, 8, 8, 7, 7, 4, 8]

mmxPasscodeGenerator({
  launchOctopus: {
    defeated: true
  }
});
// [1, 7, 6, 4, 6, 4, 1, 8, 7, 7, 1, 8]

mmxPasscodeGenerator({
  chillPenguin: {
    capsule: true,
    defeated: true
  }
});
// [4, 7, 6, 4, 8, 7, 8, 8, 8, 7, 1, 6]

mmxPasscodeGenerator({
  chillPenguin: {
    heart: true
  },
  flameMammoth: {
    defeated: true,
    heart: true
  },
  launchOctopus: {
    defeated: true
  },
  sparkMandrill: {
    heart: true
  },
  stormEagle: {
    capsule: true,
    heart: true
  }
});
// [7, 4, 7, 8, 4, 7, 8, 8, 7, 7, 4, 4]
```
