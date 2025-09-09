import Card from '../Card'
import DonutSVG from '../DonutSVG'
import styles from './AccountGroups.module.css'

export default function AccountGroups(){
  return (
    <Card title="Account groups">
      <div className={styles.donutWrap}>
        <DonutSVG />
        <div className={styles.legend}>
          <div>• Core operations — A$1.25M</div>
          <div>• Global FX reserve — NZ$0.87M</div>
          <div>• Strategic projects pool — A$0.5M</div>
          <div>• Marketing initiatives — £0.39M</div>
        </div>
      </div>
    </Card>
  )
}
