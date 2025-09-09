import styles from './App.module.css'
import TopBar from './components/TopBar'
import AccountGroupSummary from './components/AccountGroupSummary'
import PaymentsTracking from './components/PaymentsTracking'
import AccountGroups from './components/AccountGroups'
import IndicativeRates from './components/IndicativeRates'
import AccountOverview from './components/AccountOverview'
import ui from './components/shared/ui.module.css'

function App(){
  return (
    <div className={styles.app}>
      <aside className={styles.sidebar}></aside>
      <main className={styles.main}>
        <TopBar />
        <div className={styles.content}>
          <div className={styles.row} style={{marginBottom:12}}>
            <div className={ui.small}>Overview • Alphanumeric Co.</div>
          </div>
          <AccountGroupSummary />
          <div className={styles.grid} style={{marginTop:16}}>
            <div>
              <PaymentsTracking />
              <AccountOverview />
            </div>
            <div>
              <AccountGroups />
              <IndicativeRates />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
