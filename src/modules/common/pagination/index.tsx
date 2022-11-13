import React, { useState } from 'react'
import Button from '../button'
import TextContainer from '../textContainer'

type paginationProps = {
    page: number
    clickEvent: {
        next: React.MouseEventHandler<HTMLButtonElement>
        prev: React.MouseEventHandler<HTMLButtonElement>
    }
    isDisabled: {
        next: boolean
        prev: boolean
    }

}

const Pagination: React.FC<paginationProps> = ({ page, clickEvent, isDisabled }) => (


    <div className='flex flex-col justify-between items-center px-5 sm:flex-row mt-5'>
        <TextContainer title='Current Page: ' content={page} />
        <Button name='Previous' onClick={clickEvent.prev} isDisabled={isDisabled.prev}>Prev</Button>
        <Button name='Next' onClick={clickEvent.next} isDisabled={isDisabled.next}>Next</Button>
    </div>

)

export default Pagination