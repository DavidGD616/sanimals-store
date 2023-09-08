import search from '../svg/Search.svg'

function SearchCart() {
    return (
        <div className='header__searchCart'>
            <img className='header__searchCart-img' src={search} alt='Search' />
            <label className='header__searchCart-label'>Cart - 0</label>
        </div>
    )
}

export { SearchCart }