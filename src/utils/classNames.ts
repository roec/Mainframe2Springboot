import { clsx } from 'clsx';

export const classNames = (...items: Array<string | false | null | undefined>) => clsx(items);
