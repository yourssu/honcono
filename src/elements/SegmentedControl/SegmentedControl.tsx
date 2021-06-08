import React, { useCallback, useMemo } from 'react'
import _ from 'lodash'

import SegmentedControlProps from './SegmentedControl.types'
import * as Styled from './SegmentedControl.styled'
import { Text, Typography } from '@yourssu/design-system'

function SegmentedControl({
  contents = [],
  selectedOptionIndex = 0,
  onChangeOption = _.noop,
  disabled,
}: SegmentedControlProps) {

  const renderOption = useCallback((content: string, index: number) => (
    <Styled.ControlItem
      isFirstItem={index === 0}
      selected={index === selectedOptionIndex}
      onClick={() => onChangeOption(index)}
    >
      <Text typo={Typography.Button2}>
        { content }
      </Text>
    </Styled.ControlItem>
  ), [
    selectedOptionIndex,
    onChangeOption,
  ])

  const Contents = useMemo(() => (
    React.Children.map(contents, renderOption)
  ), [
    contents,
    renderOption,
  ])

  if (_.isNil(contents) || _.isEmpty(contents)) { return null }

  return (
    <Styled.Wrapper
      disabled={disabled}
    >
      { Contents }
    </Styled.Wrapper>
  )
}

export default SegmentedControl
