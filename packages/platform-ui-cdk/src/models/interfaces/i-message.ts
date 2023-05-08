import { MessageType } from '../enums';

export interface IMessage {
  type: MessageType;
  data?: unknown;
}
