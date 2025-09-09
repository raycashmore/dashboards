import Card from '../Card'
import ui from '../shared/ui.module.css'
import styles from './AccountOverview.module.css'

export default function AccountOverview(){
  return (
    <Card title="Account overview">
      <div className={styles.overview}>
        <div className={ui.card}><div className={ui.small}>Offices</div><div className={ui.balance}>33</div></div>
        <div className={ui.card}><div className={ui.small}>Account groups</div><div className={ui.balance}>71</div></div>
        <div className={ui.card}><div className={ui.small}>Accounts</div><div className={ui.balance}>173</div></div>
      </div>
    </Card>
  )
}
