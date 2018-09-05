// 获取本地目录列表
// 先尝试获取home
const fs = require("fs");

let resources = fs.readdirSync(".", { encoding: 'utf8' });

export default {
  hello: resources
}