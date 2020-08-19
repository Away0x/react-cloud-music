/* COMPONENT DOCUMENT
 * author: wutong
 * desc: 全局事件
 * date: 2020/08/19
 */

import { EventEmitter } from 'tools/event';

type GlobalEventTypes = {
  ShowToastGlobalEvent: string; // 显示 toast
};

export const globalEventEmitter = new EventEmitter<GlobalEventTypes>();

// 显示 toast 事件
export function emitShowToastGlobalEvent(text?: React.ReactNode) {
  globalEventEmitter.emit('ShowToastGlobalEvent', text);
}
