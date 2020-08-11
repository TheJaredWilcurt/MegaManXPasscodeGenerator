const mmxHelpers = {
  parseUrlParams: function () {
    // '?passcode=1111-1111-1111&generate=false' => 'passcode=1111-1111-1111&generate=false'
    let paramsUrl = location.search.replace('?', '');
    // 'passcode=1111-1111-1111&generate=false' => ['passcode=1111-1111-1111', 'generate=false']
    let paramPairs = paramsUrl.split('&');
    let params = {};
    // ['passcode=1111-1111-1111', 'generate=false'].forEach
    paramPairs.forEach(function (paramPair) {
      // 'generate=false' => 'generate'
      let key = paramPair.split('=')[0];
      // 'generate=false' => 'false'
      let value = paramPair.split('=')[1];
      if (value === 'false') {
        params[key] = false;
      } else if (value === 'true') {
        params[key] = true;
      } else {
        params[key] = value;
      }
    });
    return params;
  }
};
