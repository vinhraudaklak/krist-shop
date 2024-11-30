import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

import styles from './Breadcrumbs.module.scss'
import Separate from '../Separate/Separate'
const Breadcrumbs = () => {
  
  return (
    <>
      <Separate />
      <div className={`${styles.wrap} container`}>
        <ul className={styles.wrapBreadcrumbs}>
          <li className={styles.itemBreadcrumbs}>
            Home
            <FontAwesomeIcon className={styles.iconRight} icon={faChevronRight} />
          </li>
          <li className={styles.itemBreadcrumbs}>
            Casual
          </li>
        </ul>
      </div>
    </>
   
  )
}

export default Breadcrumbs