import { renderHook, act } from "@testing-library/react";
import { OperatorTypeEnum } from "../../enums";
import useCalculator from "../useCalculator";

describe("Render hooks", () => {
  it("Should able to enter and output values ​​at a specific index", () => {
    const { result } = renderHook(() => useCalculator())
    expect(result.current.valueContainer).toEqual([null, null, null])

    act(() => {
      result.current.addOrRemoveValue(0, 21)
    })
    act(() => {
      result.current.addOrRemoveValue(1, 22)
    })
    expect(result.current.valueContainer).toEqual([21, 22, null])

    act(() => {
      result.current.addOrRemoveValue(0, null)
    })
    act(() => {
      result.current.addOrRemoveValue(1, 42)
    })
    expect(result.current.valueContainer).toEqual([null, 42, null])
  })

  it("Should able to make calculations based on the operator type", () => {
    const { result } = renderHook(() => useCalculator())
    expect(result.current.result).toBeNull()

    act(() => {
      result.current.addOrRemoveValue(0, 10)
    })
    act(() => {
      result.current.addOrRemoveValue(2, 5)
    })
    expect(result.current.valueContainer).toEqual([10, null, 5])

    act(() => {
      result.current.calculate(OperatorTypeEnum.TAMBAH)
    })
    expect(result.current.result).toEqual(10 + 5)

    act(() => {
      result.current.calculate(OperatorTypeEnum.KURANG)
    })
    expect(result.current.result).toEqual(10 - 5)

    act(() => {
      result.current.calculate(OperatorTypeEnum.BAGI)
    })
    expect(result.current.result).toEqual(10 / 5)

    act(() => {
      result.current.calculate(OperatorTypeEnum.KALI)
    })
    expect(result.current.result).toEqual(10 * 5)
  })
})