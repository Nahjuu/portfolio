/**
 * Tiny class-name joiner.
 * Keeps components readable without pulling an extra dependency.
 */
export const cx = (...classes) => classes.filter(Boolean).join(' ');

export default cx;
