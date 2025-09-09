import type { Listener, Context, Channel } from '@finos/fdc3';
import { useEffect, useRef, useState } from 'react';
import Card from '../Card'
import ui from '../shared/ui.module.css'
import styles from './IndicativeRates.module.css'

const RATES = {
  AUD: 1,
  USD: 1.51,
  NZD: 0.90,
  GBP: 2.05,
  EUR: 1.78,
}

export default function IndicativeRates(){
  const listenerRef = useRef<Listener | undefined>(undefined)
  const [currency, setCurrency] = useState<string>('USD')
  const channelRef = useRef<Channel | null>(null)

  useEffect(()=>{
    (async () => {
      if (window.fdc3) {
        channelRef.current = await window.fdc3.getOrCreateChannel('w1/dashboard-currency')
        console.log('Connected to channel w1/dashboard-currency')

        listenerRef.current = await channelRef.current?.addContextListener('w1.dashboard-currency', (context: Context) => {
          console.log('Received w1.dashboard-currency', context)
          setCurrency(context.currency)
        })
      } else {
        console.log('FDC3 not available')
      }
    })()
  }, [])

  let rate = 10_000
  if (currency === 'AUD') rate = rate * RATES.AUD;
  if (currency === 'USD') rate = rate * RATES.USD;
  if (currency === 'NZD') rate = rate * RATES.NZD;
  if (currency === 'GBP') rate = rate * RATES.GBP;
  if (currency === 'EUR') rate = rate * RATES.EUR;

  return (
    <Card title="Indicative rates">
      <div className={styles.rates}>
        <div className={ui.card}>
          <div className={ui.small}>Buy</div>
          <div className={ui.balance}>{rate.toLocaleString()} {currency}</div>
        </div>
        <div className={ui.card}>
          <div className={ui.small}>Sell</div>
          <div className={ui.balance}>10,000 🇦🇺</div>
        </div>
      </div>
      <div className={ui.small} style={{marginTop:8}}>1 AUD = {RATES[currency]} {currency}</div>
    </Card>
  )
}
