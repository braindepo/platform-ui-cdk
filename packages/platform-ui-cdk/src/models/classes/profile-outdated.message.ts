import { MessageType, IMessage } from '..';

export class ProfileOutdatedMessage implements IMessage {
  type = MessageType.ProfileOutdated;
}
