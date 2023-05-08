import { MessageType, IMessage } from '..';

export class TokenInvalidMessage implements IMessage {
  type = MessageType.TokenInvalid;
}
