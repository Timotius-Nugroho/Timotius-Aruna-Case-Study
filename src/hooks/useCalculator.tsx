import { useState } from "react"
import { OperatorTypeEnum } from "../enums"

const useCalculator = () => {
  const [ valueContainer, setValueContainer ] = useState<(number|null)[]>([null, null, null])
  const [ result, setResult ] = useState<number | null>(null)
  const [ errorMsg, setErrorMsg ] = useState<string>("")

  const addOrRemoveValue = (idx: number, target: number) => {
    const tmpContainer = [...valueContainer]
    if (valueContainer[idx] === null) {
      tmpContainer[idx] = target
      setValueContainer(tmpContainer)
    } else {
      tmpContainer[idx] = null
      setValueContainer(tmpContainer)
    }
  }

  const calculate = (type: OperatorTypeEnum) => {
    if (valueContainer.filter(e => e !== null).length < 2) {
      setResult(null)
      setErrorMsg("Mohon cheklist lebih dari satu input!")
      return
    }

    let res: number | null = 0
    setErrorMsg("")

    switch(type) {
      case OperatorTypeEnum.BAGI:
        res = valueContainer.reduce((acc, curVal) => (acc === null ? 1 : acc) / (curVal ? curVal : 1))
        setResult(res)
        return
      case OperatorTypeEnum.KALI:
        res = valueContainer.reduce((acc, curVal) => (acc === null ? 1 : acc) * (curVal === null ? 1 : curVal))
        setResult(res)
        return
      case OperatorTypeEnum.TAMBAH:
        res = valueContainer.reduce((acc, curVal) => (acc === null ? 0 : acc) + (curVal === null ? 0 : curVal))
        setResult(res)
        return
      case OperatorTypeEnum.KURANG:
        res = valueContainer.reduce((acc, curVal) => (acc === null ? 0 : acc) - (curVal === null ? 0 : curVal))
        setResult(res)
        return
      default: 
        setResult(0)
        return
    }
  }

  return { valueContainer, result, addOrRemoveValue, calculate, errorMsg }
}

export default useCalculator