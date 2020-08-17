(function (name, definition, context) {
  if (typeof module !== 'undefined' && module.exports) module.exports = definition();
  else if (typeof context['define'] === 'function' && (context['define']['amd'] || context['define']['cmd']))
    define(definition);
  else context[name] = definition();
})(
  'APP_CONFIG',
  function () {
    return {
      API_ROOT: '/m-api',
      // API_ROOT: 'http://localhost:3000',

      // ---------------------------- key ----------------------------
      LOCALSTROAGE_PREFIX: 'react_cloud_music_app_', // localstroage prefix
      TOKEN_KEY: 'react_cloud_music_app_token', // token key

      // ---------------------------- dev ----------------------------
      // 是否开启 eruda
      ERUDA_ENABLED: false
    };
  },
  this
);
