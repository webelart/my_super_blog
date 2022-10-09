import React from 'react';
import cl from 'classnames';

import styles from './index.module.scss';

const Section = ({
    children,
    className
}) => {
  return (
    <section className={cl(className, styles.section)}>
        {children}
    </section>
  )
}

export default Section;