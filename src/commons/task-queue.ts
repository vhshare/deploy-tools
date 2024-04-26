import type { Key } from "../enums/Enums";
import { ProcessUtils } from "../utils/ProcessUtils";
import { getKeyPath } from "./constant";
import {v4 as uuidV4} from 'uuid'

/**
 * 生成任务队列管理器
 * @param task
 */
function genQueueManager(task: Task) {
  const waitQueue: Task[] = [];

  const runningQueue: Task[] = [];

  const completedQueue: Task[] = [];

  const keyIsRunning = (key: Key) : boolean => runningQueue.some(task => task.key === key)

  return {
    startTask(key: Key): Task {
      const uuid = uuidV4();
      const commands = getKeyPath(key);
      const task: Task = {
        id: uuid,
        key,
        status: TaskStatus.PENDING,
        startDate: new Date(),
        endDate: new Date(),
      }
      if (keyIsRunning(key)) {

      }



      return {
        id: uuid,
        key,
        status: TaskStatus.PENDING,
        startDate: new Date(),
        endDate: new Date(),
      }
    }
  }
}





enum TaskStatus {
  PENDING = "PENDING",
  RUNNING = "RUNNING",
  COMPLETED = "COMPLETED",
}

interface Task {
  id: string;
  key: Key;
  status: TaskStatus,
  startDate: Date,
  endDate: Date,
}
