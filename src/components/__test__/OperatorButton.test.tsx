import { OperatorTypeEnum } from '../../enums';
import { render, screen, fireEvent } from '@testing-library/react';
import OperatorButton from '../OperatorButton';

describe("OperatorButton Component", () => {
  const onCalculateMock = jest.fn()

  afterEach(() => {
    jest.clearAllMocks()
  })

  it("Should render + button and trigger callback when clicked", () => {
    render(<OperatorButton type={OperatorTypeEnum.TAMBAH} onCalculate={onCalculateMock} />)

    const plusBtn = screen.getByLabelText("btn-tambah")
    expect(plusBtn).toBeInTheDocument()

    fireEvent.click(plusBtn)
    expect(onCalculateMock).toBeCalledTimes(1)
  })

  it("Should render - button and trigger callback when clicked", () => {
    render(<OperatorButton type={OperatorTypeEnum.KURANG} onCalculate={onCalculateMock} />)

    const plusBtn = screen.getByLabelText("btn-kurang")
    expect(plusBtn).toBeInTheDocument()

    fireEvent.click(plusBtn)
    expect(onCalculateMock).toBeCalledTimes(1)
  })

  it("Should render x button and trigger callback when clicked", () => {
    render(<OperatorButton type={OperatorTypeEnum.KALI} onCalculate={onCalculateMock} />)

    const plusBtn = screen.getByLabelText("btn-kali")
    expect(plusBtn).toBeInTheDocument()

    fireEvent.click(plusBtn)
    expect(onCalculateMock).toBeCalledTimes(1)
  })

  it("Should render / button and trigger callback when clicked", () => {
    render(<OperatorButton type={OperatorTypeEnum.BAGI} onCalculate={onCalculateMock} />)

    const plusBtn = screen.getByLabelText("btn-bagi")
    expect(plusBtn).toBeInTheDocument()

    fireEvent.click(plusBtn)
    expect(onCalculateMock).toBeCalledTimes(1)
  })
})