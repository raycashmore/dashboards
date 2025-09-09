import Card from '../Card'
import ui from '../shared/ui.module.css'
import styles from './PaymentsTracking.module.css'

export default function PaymentsTracking(){
  return (
    <Card title="Payments tracking">
      <div className={styles.payments}>
        <div className={`${ui.card} ${styles.payBox}`}>
          <div className={ui.small}>Authorised</div>
          <div className={ui.flex}><span className={ui.balance}>9</span><span className={ui.small}>A$9.8K</span></div>
        </div>
        <div className={`${ui.card} ${styles.payBoxRed}`}>
          <div className={ui.small}>Unauthorised</div>
          <div className={ui.flex}><span className={ui.balance}>2</span><span className={ui.small}>A$9.8K</span></div>
        </div>
        <div className={`${ui.card} ${styles.payBoxBlue}`}>
          <div className={ui.small}>Processing</div>
          <div className={ui.flex}><span className={ui.balance}>3</span><span className={ui.small}>A$5.6K</span></div>
        </div>
        <div className={`${ui.card} ${styles.payBoxGray}`}>
          <div className={ui.small}>Processed</div>
          <div className={ui.flex}><span className={ui.balance}>9</span><span className={ui.small}>A$5.6K</span></div>
        </div>
      </div>
    </Card>
  )
}
