import { cx } from '../../utils/cx';

/**
 * Section title block: eyebrow + title + optional subtitle.
 */
const SectionHeading = ({ eyebrow, title, subtitle, align = 'center', className = '' }) => (
  <div
    className={cx(
      'mb-12 flex flex-col gap-3 sm:mb-16',
      align === 'center' ? 'items-center text-center' : 'items-start text-left',
      className
    )}
  >
    {eyebrow && (
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent-400">{eyebrow}</span>
    )}

    <h2 className="text-3xl font-bold tracking-tight text-mist-100 sm:text-4xl">{title}</h2>

    {subtitle && (
      <p className="max-w-2xl text-balance text-base leading-relaxed text-mist-400 sm:text-lg">
        {subtitle}
      </p>
    )}
  </div>
);

export default SectionHeading;
