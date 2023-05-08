import {
  IMessage,
  NoAccessMessage,
  TokenExpiredMessage,
  TokenInvalidMessage,
  TokenNotFoundMessage,
  UrlChangedMessage,
} from '../models';

export class MessagesService {
  private readonly parentContainer: Window | null;

  constructor(private readonly document: Document) {
    this.parentContainer = this.document.defaultView?.top ?? null;
  }

  private sendMessage(message: IMessage): void {
    if (this.parentContainer) {
      this.parentContainer.postMessage(message, '*');
    }
  }

  sendNoAccessMessage(): void {
    this.sendMessage(new NoAccessMessage());
  }

  sendTokenExpiredMessage(): void {
    this.sendMessage(new TokenExpiredMessage());
  }

  sendTokenInvalidMessage(): void {
    this.sendMessage(new TokenInvalidMessage());
  }

  sendTokenNotFoundMessage(): void {
    this.sendMessage(new TokenNotFoundMessage());
  }

  sendUrlChangeMessage(url: string): void {
    this.sendMessage(new UrlChangedMessage({ url }));
  }
}
