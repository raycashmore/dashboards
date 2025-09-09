import { useEffect, useRef, useState } from 'react'
import styles from './CurrencySelect.module.css'
import type { Channel } from '@finos/fdc3'

const options = [
  { code: 'AUD', label: 'AUD — A$' },
  { code: 'USD', label: 'USD — $' },
  { code: 'NZD', label: 'NZD — NZ$' },
  { code: 'GBP', label: 'GBP — £' },
  { code: 'EUR', label: 'EUR — €' },
]

export default function CurrencySelect({ initial = 'AUD', onChange }:{ initial?:string, onChange?:(code:string)=>void }){
  const [value, setValue] = useState(initial)
  const channelRef = useRef<Channel | null>(null)

  useEffect(()=>{
    (async () => {
      if (window.fdc3) {
        channelRef.current = await window.fdc3.getOrCreateChannel('w1/dashboard-currency')
        console.log('Connected to channel w1/dashboard-currency')
      } else {
        console.log('FDC3 not available')
      }
    })()
  }, [])

  useEffect(() => {
    if (window.fdc3) {
      console.log(`Broadcasting w1.dashboard-currency`, value)
      channelRef.current?.broadcast({ type: 'w1.dashboard-currency', currency: value })
    }
  }, [value]);

  return (
    <label className={styles.wrap}>
      <select
        aria-label="Select currency"
        className={styles.select}
        value={value}
        onChange={(e)=>{ setValue(e.target.value); onChange?.(e.target.value) }}
      >
        {options.map(opt => (
          <option key={opt.code} value={opt.code}>{opt.label}</option>
        ))}
      </select>
      <svg className={styles.chev} viewBox="0 0 24 24" aria-hidden>
        <path d="M7 10l5 5 5-5"/>
      </svg>
    </label>
  )
}
