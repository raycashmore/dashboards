import type { ReactNode } from 'react'
import ui from '../shared/ui.module.css'

export default function Card({title, children, className}:{title?:string, children:ReactNode, className?:string}){
  return (
    <div className={`${ui.card} ${className||''}`}>
      {title && <div className={ui.widgetTitle}>{title}</div>}
      {children}
    </div>
  )
}
