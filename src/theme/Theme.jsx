import Modal from "../components/Modal"
import BackgroudColor from "./BackgroudColor"
import { primaryColors, backgroudColors } from "./data"
import PrimaryColor from "./PrimaryColor"
import './theme.css'

function Theme() {
  return (
    <Modal className="theme__modal">
      <h3>Customize your Theme</h3>
      <small>Change the primary and backgrou color to you preference.</small>
      <div className="theme__primary-wrapper">
        <h5>Primary Color</h5>
        <div className="theme__primary-colors">
          {
            primaryColors.map(pColor => 
            <PrimaryColor key={pColor.className} className={pColor.className}/>
            )
          }
        </div>
      </div>
      <div className="theme__backgroud-wrapper">
          <h5>Backgroud Color</h5>
          <div className="theme__backgroud-colors">
            {
              backgroudColors.map(bColor => <BackgroudColor key={bColor.className} 
              className={bColor.className}/>) 
            }
          </div>
      </div>
    </Modal>
  )
}

export default Theme