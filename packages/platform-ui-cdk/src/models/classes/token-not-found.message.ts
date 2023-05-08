import { MessageType, IMessage } from '..';

export class TokenNotFoundMessage implements IMessage {
  type = MessageType.TokenNotFound;
}
