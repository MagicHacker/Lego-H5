/**
 * 与icon-svg有关的方法
 */
const req = require.context("../assets/svg", false, /\.svg$/);
const requireAll = (requireContext: __WebpackModuleApi.RequireContext) =>
  requireContext.keys().map(requireContext);
requireAll(req);
