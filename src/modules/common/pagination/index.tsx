import React from 'react'
import Button from '@/modules/common/button'
import TextContainer from '@/modules/common/textContainer'
import {paginationProps} from './types.d'

const Pagination: React.FC<paginationProps> = ({
  page,
  clickEvent,
  isDisabled,
  totalPages,
}) => (
  <div className='flex flex-col justify-between items-center px-5 sm:flex-row mt-5'>
    <TextContainer
      title='Current Page: '
      content={`${page} of ${totalPages}`}
    />
    <Button
      name='Previous'
      onClick={clickEvent.prev}
      isDisabled={isDisabled.prev}
    >
      Prev
    </Button>
    <Button name='Next' onClick={clickEvent.next} isDisabled={isDisabled.next}>
      Next
    </Button>
  </div>
)

export default Pagination
