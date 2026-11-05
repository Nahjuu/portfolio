import { cx } from '../../utils/cx';

/**
 * Page container: max width + fluid horizontal padding.
 */
const Container = ({ className = '', children, ...props }) => (
  <div className={cx('container-page', className)} {...props}>
    {children}
  </div>
);

export default Container;
