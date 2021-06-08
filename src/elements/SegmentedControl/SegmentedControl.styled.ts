import { pressedStyle, styled } from '@yourssu/design-system'
import SegmentedControlProps, { ControlItemProps } from './SegmentedControl.types'

export const ControlItem = styled.div<ControlItemProps>`
  ${({ foundation, isFirstItem }) => (
    !isFirstItem && foundation?.border.getBorder(1 ,foundation.theme.buttonPoint, {
      top: false,
      right: false,
      bottom: false,
      left: true,
    })
  )}
  ${({ foundation }) => foundation?.transition.getTransitionsCSS([
    'color',
    'background-color',
  ])}
  
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  cursor: pointer;

  color: ${({ foundation, selected }) => (
    selected
      ? foundation?.theme.buttonReversed
      : foundation?.theme.buttonPoint
  )};
  background-color: ${({ foundation, selected }) => (
    selected
      ? foundation?.theme.buttonPoint
      : foundation?.theme.bgNormal
  )};


  &:hover {
    ${({ selected }) => !selected && pressedStyle}
  }
`

export const Wrapper = styled.div<Pick<SegmentedControlProps, 'disabled'>>`
  ${({ foundation }) => foundation?.border.getBorder(1, foundation.theme.buttonPoint)}
  ${({ foundation }) => foundation?.rounding.round4}

  display: flex;
  align-items: center;
  width: 100%;
  height: 32px;

  & > * {
    flex-grow: 1;
  }
`


