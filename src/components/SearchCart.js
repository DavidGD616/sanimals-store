import React from 'react'
import { Badge } from '@nextui-org/react'
import { CartIcon } from '../svg/CartIcon'
import { Search } from '../svg/Search'

function SearchCart() {
    return (
        <div className='header__searchCart'>
            <Search size={33} height={33} width={33} className='header__searchCart-img' />
            <Badge color='danger' content={2} shape='rectangle'>
                <CartIcon size={30}/>
            </Badge>
        </div>
    )
}

export { SearchCart }