import Card from '../Card'
import ui from '../shared/ui.module.css'
import styles from './AccountGroupSummary.module.css'

import CurrencySelect from '../CurrencySelect'

export default function AccountGroupSummary(){
  return (
    <Card title="Account group summary" headerRight={<CurrencySelect initial="USD" /> }>
      <div className={styles.cards}>
        <div className={ui.card}>
          <div className={ui.small}>Current balance</div>
          <div className={ui.balance}>A$1.25M</div>
        </div>
        <div className={ui.card}>
          <div className={ui.small}>Closing balance</div>
          <div className={ui.balance}>A$1.20M</div>
        </div>
        <div className={ui.card}>
          <div className={ui.small}>Available balance</div>
          <div className={ui.balance}>A$1.18M</div>
        </div>
        <div className={ui.card}>
          <div className={ui.small}>Total payments due</div>
          <div className={ui.balance}>A$70K</div>
        </div>
      </div>
    </Card>
  )
}
