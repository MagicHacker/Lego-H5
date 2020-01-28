/**
 * 工具包
 */
const uuidV1 = require("uuid/v1");
const generateUUid = (): string => {
  return uuidV1().replace(/^(\w*)-.*/gi, "$1");
};
export { generateUUid };
