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
  },
  paramsToString: function (params) {
    // { generate: true, passcode: '1111-2222-3333' } => 'generate=true&passcode=1111-2222-3333'
    return Object.keys(params)
      .map(function (param) {
        return param + '=' + params[param];
      })
      .join('&');
  },
  pushNewUrl: function (params) {
    params = this.paramsToString(params);
    let newurl = window.location.protocol + '//' + window.location.host + window.location.pathname + '?' + params;
    window.history.pushState({ path: newurl }, '', newurl);
  }
};
