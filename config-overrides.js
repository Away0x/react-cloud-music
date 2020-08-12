const { override, addBabelPlugins, addBundleVisualizer } = require('customize-cra');
const { overrideProcessEnv } = require('cra-define-override');

function yymmddhhmmss(date_obj, delimiter = '-') {
  const yy = date_obj.getFullYear().toString();
  const mm = (date_obj.getMonth() + 1).toString();
  const dd = date_obj.getDate().toString();
  const hh = date_obj.getHours().toString();
  const MM = date_obj.getMinutes().toString();
  const ss = date_obj.getSeconds().toString();

  return (
    yy +
    delimiter +
    (mm[1] ? mm : `0${mm[0]}`) +
    delimiter +
    (dd[1] ? dd : `0${dd[0]}`) +
    ' ' +
    (hh[1] ? hh : `0${hh[0]}`) +
    ':' +
    (MM[1] ? MM : `0${MM[0]}`) +
    ':' +
    (ss[1] ? ss : `0${ss[0]}`)
  );
}

const env_map = {
  version: '1.0.0',
  branche: 'master',
  build_time: yymmddhhmmss(new Date()),
  desc: '',
};

Object.keys(env_map).forEach(k => env_map[k] = JSON.stringify(env_map[k]));

module.exports = override(
  addBabelPlugins(['babel-plugin-styled-components']),
  // define env
  overrideProcessEnv(env_map),
  // bundle analyze
  addBundleVisualizer(
    {
      analyzerMode: 'static',
      reportFilename: 'report.html',
    },
    true,
  ),
);
