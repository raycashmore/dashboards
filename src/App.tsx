import styles from './App.module.css'
import TopBar from './components/TopBar'
import AccountGroupSummary from './components/AccountGroupSummary'
import PaymentsTracking from './components/PaymentsTracking'
import AccountGroups from './components/AccountGroups'
import IndicativeRates from './components/IndicativeRates'
import AccountOverview from './components/AccountOverview'
import ui from './components/shared/ui.module.css'

import { Link, Route, Routes, Outlet } from 'react-router-dom'

function Layout(){
  return (
    <div className={styles.app}>
      <aside className={styles.sidebar}></aside>
      <main className={styles.main}>
        <TopBar />
        <div className={styles.content}>
          <div className={styles.row} style={{marginBottom:12}}>
            <div className={ui.small} style={{flex:1}}>Overview • Alphanumeric Co.</div>
            <nav className={styles.row} style={{gap:12}}>
              <Link to="/">Dashboard</Link>
              <Link to="/account-group-summary">Account group summary</Link>
              <Link to="/payments-tracking">Payments tracking</Link>
              <Link to="/account-overview">Account overview</Link>
              <Link to="/account-groups">Account groups</Link>
              <Link to="/indicative-rates">Indicative rates</Link>
            </nav>
          </div>
          <Outlet />
        </div>
      </main>
    </div>
  )
}

function Dashboard(){
  return (
    <>
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
    </>
  )
}

function App(){
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="account-group-summary" element={<AccountGroupSummary />} />
        <Route path="payments-tracking" element={<PaymentsTracking />} />
        <Route path="account-overview" element={<AccountOverview />} />
        <Route path="account-groups" element={<AccountGroups />} />
        <Route path="indicative-rates" element={<IndicativeRates />} />
      </Route>
    </Routes>
  )
}

export default App
