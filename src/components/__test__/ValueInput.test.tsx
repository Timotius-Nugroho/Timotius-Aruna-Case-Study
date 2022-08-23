import { render, screen, fireEvent } from '@testing-library/react';
import ValueInput from '../ValueInput';

describe("ValueInput Component", () => {
  const idxMock = 0
  const initialValMock = NaN
  const valMock = 23
  const onInOrExcludeValMock = jest.fn()
  
  afterEach(() => {
    jest.clearAllMocks()
  })

  it("Should trigger callback when checkbox clicked", () => {
    render(<ValueInput idx={idxMock} onInOrExcludeVal={onInOrExcludeValMock} />)

    const checkbox = screen.getByLabelText("checklist-input")
    expect(checkbox).toBeInTheDocument()

    fireEvent.click(checkbox)
    expect(onInOrExcludeValMock).toBeCalled()
  })

  it("Should trigger callback when checkbox is checked and text input is filled", () => {
    render(<ValueInput idx={idxMock} onInOrExcludeVal={onInOrExcludeValMock} />)

    const checkbox = screen.getByLabelText("checklist-input")
    expect(checkbox).toBeInTheDocument()

    fireEvent.click(checkbox)
    expect(onInOrExcludeValMock).toBeCalled()

    const numInput = screen.getByLabelText("num-input")
    expect(numInput).toBeInTheDocument()

    fireEvent.change(numInput, {target: {value: valMock}})
    expect(onInOrExcludeValMock).toBeCalledWith(idxMock, initialValMock)
  })

  it("Should not trigger callback when checkbox is un-checked and text input is filled", () => {
    render(<ValueInput idx={idxMock} onInOrExcludeVal={onInOrExcludeValMock} />)

    const numInput = screen.getByLabelText("num-input")
    expect(numInput).toBeInTheDocument()

    fireEvent.change(numInput, {target: {value: valMock}})
    expect(onInOrExcludeValMock).not.toBeCalled()
  })

  it("Should disable checkbox when text input return NaN", () => {
    render(<ValueInput idx={idxMock} onInOrExcludeVal={onInOrExcludeValMock} />)

    const numInput = screen.getByLabelText("num-input")
    fireEvent.change(numInput, {target: {value: NaN}})

    const checkbox = screen.getByLabelText("checklist-input")
    expect((checkbox as HTMLInputElement).disabled).toEqual(true)
  })
})