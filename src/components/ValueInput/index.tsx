import { FC, ChangeEvent, useState } from "react"
import { iValueInput } from "./types"

const ValueInput:FC<iValueInput> = ({ idx, onInOrExcludeVal }) => {
  const [val, setVal] = useState<number>(0)
  const [isChecked, setIsChecked] = useState<boolean>(false)
  
  return(
    <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
      <input
        type="number"
        style={{ height: "30px" }}
        onChange={(event:ChangeEvent<HTMLInputElement>) => {
          if(isChecked) {
            onInOrExcludeVal(idx,val)
          }
          setVal(parseInt(event.target.value ? event.target.value : "0"))
          setIsChecked(false)
        }}
      />
      <input
        type="checkbox"
        disabled={val === NaN}
        checked={isChecked}
        style={{ marginLeft: "10px", width: "30px", height: "30px" }}
        onChange={(event:ChangeEvent<HTMLInputElement>) => {
          setIsChecked(event.target.checked)
          onInOrExcludeVal(idx,val)
        }}
      />
    </div>
  )
}

export default ValueInput