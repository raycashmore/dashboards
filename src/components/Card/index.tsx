import type { ReactNode } from 'react'
import ui from '../shared/ui.module.css'

export default function Card({title, headerRight, children, className}:{title?:string, headerRight?:ReactNode, children:ReactNode, className?:string}){
  return (
    <div className={`${ui.card} ${className||''}`}>
      {(title || headerRight) && (
        <div className={`${ui.widgetTitle} ${ui.flex}`}>
          <span>{title}</span>
          {headerRight}
        </div>
      )}
      {children}
    </div>
  )
}
