import styles from './BigMenu.module.scss';
import { IconArrowDown } from '../../../assets/svg/IconArrowDown';
import { IconArrowUp } from '../../../assets/svg/IconArrowUp';
import { useState } from 'react';


const BigMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.bigMenuContainer} style={open ?{ height: '180px'}:{ height: '108px'}}>
      <div className={styles.BigMenu}>
        <ul className={styles.ulBigMenu}>
            <li>Page 1</li>
            <li>Page 2</li>
            <li className={styles.section}  onClick={() => setOpen(!open)}>Page 3 <span>{open ? <IconArrowUp color={'#fff'} width={'10px'} height={'10px'} /> : <IconArrowDown color={'#fff'} width={'10px'} height={'10px'} />}</span>
                {
                  open && <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ul>
                }
            </li>
        </ul>
      </div>
    </div>
  )
}

export { BigMenu }
