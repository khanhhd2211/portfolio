import * as React from 'react';
import styles from './Page.module.css'

export default function NavBtn () {
  return (
    <div className={styles.navBtn}>
	<div className={styles.activeNavBtn}>About Me</div>
	<div>Skills</div>
	<div>Projects</div>
	<div>Contact</div>
    </div>
  );
}
