import { FC } from "react"
import { OperatorTypeEnum } from "../../enums"
import { iOperatorButton } from "./types"

const OperatorButton:FC<iOperatorButton> = ({ type, onCalculate }) => {
  switch (type) {
    case OperatorTypeEnum.BAGI:
      return(
        <button aria-label="btn-bagi" style={{ height: "35px", width: "35px" }} onClick={()=>{onCalculate(OperatorTypeEnum.BAGI)}}>{"/"}</button>
      )
    case OperatorTypeEnum.KALI:
      return(
        <button aria-label="btn-kali" style={{ height: "35px", width: "35px" }} onClick={()=>{onCalculate(OperatorTypeEnum.KALI)}}>{"X"}</button>
      )
    case OperatorTypeEnum.KURANG:
      return(
        <button aria-label="btn-kurang" style={{ height: "35px", width: "35px" }} onClick={()=>{onCalculate(OperatorTypeEnum.KURANG)}}>{"-"}</button>
      )
    case OperatorTypeEnum.TAMBAH:
      return(
        <button aria-label="btn-tambah" style={{ height: "35px", width: "35px" }} onClick={()=>{onCalculate(OperatorTypeEnum.TAMBAH)}}>{"+"}</button>
      )
    default:
      return(
        <button>{"Uknow"}</button>
      )
  }
}

export default OperatorButton