import * as moment from 'moment';

export function formatPercent(value: number, decimals = 3): string {
  return value ? `${(value * 100).toFixed(decimals)}%` : '';
}

export function formatPrice(value: number): string {
  return value ? value.toFixed(8) : '';
}

/**
 *
 * @param ts Timestamp as number or date (in utc!!)
 */
export function timestampms(ts: number | Date): string {
  return moment.utc(ts).format('YYYY-MM-DD HH:mm:ss');
}

export function timestampHour(ts: number | Date): number {
  return moment.utc(ts).hour();
}

export default {
  formatPrice,
  formatPercent,
  timestampms,
};
