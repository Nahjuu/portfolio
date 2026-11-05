import { cx } from '../../utils/cx';

/**
 * Semantic section with consistent vertical rhythm.
 * `scroll-mt-*` keeps native anchor jumps clear of the fixed navbar.
 */
const Section = ({ id, className = '', children, ...props }) => (
  <section id={id} className={cx('section-shell scroll-mt-20', className)} {...props}>
    {children}
  </section>
);

export default Section;
