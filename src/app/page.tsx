import { PasswordFilters } from '@/widgets/password-filters'

import styles from './page.module.css'

export default function Home() {
    return (
        <div className={styles.wrapper}>
            <div style={{ padding: '200px' }}>
                <PasswordFilters />
            </div>
        </div>
    )
}
