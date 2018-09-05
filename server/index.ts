// 获取本地目录列表
// 先尝试获取home
import fs from "fs";

const REPLAY_PATH: string = ".";

export class ReplayTool {
  getReplayList() : string[] {
    return fs.readdirSync(REPLAY_PATH, { encoding: 'utf8' });
  }
}