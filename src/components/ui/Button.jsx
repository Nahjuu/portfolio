import { cx } from '../../utils/cx';

const base =
  'group inline-flex items-center justify-center gap-2 rounded-lg text-sm font-semibold transition-all duration-300 ease-snappy focus-visible:outline-none disabled:pointer-events-none disabled:opacity-60';

const variants = {
  primary:
    'bg-gradient-to-r from-accent-400 to-blue-500 text-ink-950 shadow-[0_10px_30px_-12px_rgb(34_211_238_/_0.6)] hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_18px_45px_-12px_rgb(34_211_238_/_0.75)]',
  secondary:
    'border border-white/15 bg-ink-800/70 text-mist-100 hover:-translate-y-0.5 hover:border-accent-400/50 hover:bg-ink-800',
  ghost: 'text-mist-300 hover:bg-white/5 hover:text-accent-300',
};

const sizes = {
  sm: 'px-3.5 py-2 text-xs',
  md: 'px-5 py-3',
  lg: 'px-6 py-3.5 text-base',
};

/**
 * Single button primitive for <button>, <a> and react-scroll <Link>.
 * Pass `as={Link}` plus `to` to get a smooth-scroll CTA.
 */
const Button = ({
  as: Tag = 'button',
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}) => (
  <Tag className={cx(base, variants[variant], sizes[size], className)} {...props}>
    {children}
  </Tag>
);

export default Button;
