import { FC, ChangeEvent, useState } from "react"
import { iValueInput } from "./types"

const ValueInput:FC<iValueInput> = ({ idx, onInOrExcludeVal }) => {
  const [val, setVal] = useState<number>(NaN)
  const [isChecked, setIsChecked] = useState<boolean>(false)

  const handleOnChangeTextInput = (event:ChangeEvent<HTMLInputElement>) => {
    const convertedValue = parseInt(event.target.value)
    if(isChecked) {
      onInOrExcludeVal(idx, isNaN(convertedValue) ? null : convertedValue)
    }
    setVal(convertedValue)
  }

  const handleChangeCheckbox = (event:ChangeEvent<HTMLInputElement>) => {
    if(event.target.checked) {
      onInOrExcludeVal(idx, val)
    } else {
      onInOrExcludeVal(idx, null)
    }
    setIsChecked(event.target.checked)
  }

  return(
    <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
      <input
        type="number"
        aria-label="num-input"
        style={{ height: "30px" }}
        onChange={handleOnChangeTextInput}
      />
      <input
        type="checkbox"
        aria-label="checklist-input"
        disabled={isNaN(val)}
        checked={isChecked && !isNaN(val)}
        style={{ marginLeft: "10px", width: "30px", height: "30px" }}
        onChange={handleChangeCheckbox}
      />
    </div>
  )
}

export default ValueInput