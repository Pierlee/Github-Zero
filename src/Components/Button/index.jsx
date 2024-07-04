import {ButtonComponent} from './style'

export default function Button({type, children}) {
  return (
    <ButtonComponent type={type}>
      {children}
    </ButtonComponent>
  )
}
