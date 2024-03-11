import React from 'react'
import { Badge, Avatar } from '@nextui-org/react'
import search from '../svg/Search.svg'
import { CartIcon } from '../svg/CartIcon'

function SearchCart() {
    return (
        <div className='header__searchCart'>
            <img className='header__searchCart-img' src={search} alt='Search' />
            <Badge color='danger' content={2} shape='rectangle'>
                <CartIcon size={30}/>
            </Badge>
        </div>
    )
}

export { SearchCart }