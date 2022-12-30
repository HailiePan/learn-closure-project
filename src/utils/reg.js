/*
 * Author  hailie.pan
 * Date  2022-12-11 22:49:06
 * LastEditors  hailie.pan
 * LastEditTime  2022-12-12 22:57:45
 * Description  file content
 */
// 模块化开发
const regName = /^[^_]\w{5,11}$/;
const regPwd = /^\w{6,12}$/;

function testName1(reg) {
  return function (username) {
    return reg.test(username);
  };
}
function testPwd1(reg) {
  return function (password) {
    return reg.test(password);
  };
}
// 导出一份整体
// export default { testName: testName1(regName), testPwd: testPwd1(regPwd) };

// 每一个内容单独导出一份 引用时按需引入
export const testName = testName1(regName);
export const testPwd = testPwd1(regPwd);
