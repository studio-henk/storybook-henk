export default {
  multipass: true,
  plugins: [
    'removeComments',
    'removeMetadata',
    'removeTitle',
    'removeDesc',
    'removeUselessDefs',
    'collapseGroups',
    { name: 'convertPathData', params: { floatPrecision: 2 } },
    'mergePaths',
    { name: 'convertColors', active: false },
    { name: 'convertStyleToAttrs', active: false }
  ]
};
