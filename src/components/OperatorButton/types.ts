import { OperatorTypeEnum } from "../../enums"

export interface iOperatorButton {
  type: OperatorTypeEnum
  onCalculate: (_:OperatorTypeEnum) => void
}