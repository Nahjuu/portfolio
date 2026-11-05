import { cx } from '../../utils/cx';

/**
 * Skill chip: icon + label inside a surface card.
 */
const Badge = ({ icon: Icon, label, className = '' }) => (
  <div
    className={cx(
      'card-surface group flex h-full items-center gap-3 px-4 py-3 hover:-translate-y-1 hover:border-accent-400/40 hover:shadow-glow',
      className
    )}
  >
    {Icon && (
      <Icon aria-hidden="true" className="h-5 w-5 shrink-0 text-accent-300 transition-colors duration-300 group-hover:text-accent-400" />
    )}
    <span className="text-sm font-medium text-mist-100">{label}</span>
  </div>
);

export default Badge;
