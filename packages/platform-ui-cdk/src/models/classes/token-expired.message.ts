import { MessageType, IMessage } from '..';

export class TokenExpiredMessage implements IMessage {
  type = MessageType.TokenExpired;
}
