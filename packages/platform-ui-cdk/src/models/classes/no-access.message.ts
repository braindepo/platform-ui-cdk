import { MessageType, IMessage } from '..';

export class NoAccessMessage implements IMessage {
  type = MessageType.NoAccess;
}
