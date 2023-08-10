import { useFilters } from '../hooks/useFilters'
import './Footer.css'
useFilters

export function Footer () {
 const { filters } = useFilters()

  return (
    <footer className='footer'>
      <h4>Prueba técnica de React ⚛️ <span>Gabriel Bocchio</span></h4>
      <h5>Shopping Cart con useContext & useReducer</h5>
    </footer>
  )
}