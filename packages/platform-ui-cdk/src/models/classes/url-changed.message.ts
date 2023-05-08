import { MessageType, IMessage } from '..';

export class UrlChangedMessage implements IMessage {
  type = MessageType.UrlChange;
  constructor(readonly data: { url: string }) {}
}
