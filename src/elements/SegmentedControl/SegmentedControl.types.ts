import { UIComponentProps } from '@yourssu/design-system'

export interface ControlItemProps {
  isFirstItem: boolean
  selected: boolean
}

export default interface SegmentedControl<OptionKeyType = string> extends UIComponentProps {
  contents?: string[]
  selectedOptionIndex?: number
  onChangeOption?: (optionIndex: number, optionKey?: OptionKeyType) => void
  disabled?: boolean
}
