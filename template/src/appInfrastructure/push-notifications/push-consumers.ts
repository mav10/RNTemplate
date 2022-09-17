import { logger } from '../logging/logging';

export enum PushActionTypes {
  Demo = 'Demo',
  Promo = 'Promotions',
}

export async function consumeDemoMessage() {
  logger().info('Consumed demo message in foreground: no any actions');
}

export async function consumePromoMessage() {
  logger().info('Consumed promotion message in foreground: no any actions');
}

export async function consumeUnclassifiedMessage() {
  logger().info('Consumed unclassified message in foreground: no any actions');
}
