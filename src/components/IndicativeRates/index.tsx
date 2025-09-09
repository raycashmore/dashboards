import Card from '../Card'
import ui from '../shared/ui.module.css'
import styles from './IndicativeRates.module.css'

export default function IndicativeRates(){
  return (
    <Card title="Indicative rates">
      <div className={styles.rates}>
        <div className={ui.card}>
          <div className={ui.small}>Buy</div>
          <div className={ui.balance}>15,300 🇺🇸</div>
        </div>
        <div className={ui.card}>
          <div className={ui.small}>Sell</div>
          <div className={ui.balance}>10,000 🇦🇺</div>
        </div>
      </div>
      <div className={ui.small} style={{marginTop:8}}>1 AUD = 0.6539 USD</div>
    </Card>
  )
}
