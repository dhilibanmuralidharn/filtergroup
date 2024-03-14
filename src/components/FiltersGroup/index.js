import {BsSearch} from 'react-icons/bs'

import './index.css'

const FiltersGroup = props => {
  const {
    categoryOptions,
    ratingsList,
    updateCategoryId,
    updateRatingId,
    updateSearchInput,
    onClearAllFilters,
    searchInput,
    handleInputKeyPress,
  } = props

  const handleCategory = categoryId => {
    updateCategoryId(categoryId)
  }

  const handleRating = ratingId => {
    updateRatingId(ratingId)
  }

  const onChangeInput = event => {
    updateSearchInput(event.target.value)
  }

  const onClearFilters = () => {
    onClearAllFilters()
  }

  const handleSearchInputKeyPress = event => {
    handleInputKeyPress(event)
  }

  return (
    <div className="filters-group-container">
      <div className="input-container">
        <input
          type="search"
          placeholder="Search"
          className="input"
          value={searchInput}
          onChange={onChangeInput}
          onKeyPress={handleSearchInputKeyPress}
        />
        <button type="submit" className="search-btn">
          <BsSearch />
        </button>
      </div>
      <h1 className="fliter-heading">Category</h1>
      <ul className="category-container">
        {categoryOptions.map(category => (
          <li
            className="list-items"
            key={category.id}
            onClick={() => handleCategory(category.categoryId)}
          >
            {category.name}
          </li>
        ))}
      </ul>
      <h1 className="fliter-heading">Rating</h1>
      <ul className="ratings-container">
        {ratingsList.map(rating => (
          <li key={rating.id} onClick={() => handleRating(rating.ratingId)}>
            <img
              className="rating-image"
              key={rating.id}
              src={rating.imageUrl}
              alt={`rating${rating.ratingId}`}
            />
            & Up
          </li>
        ))}
      </ul>
      <button type="button" className="clear-btn" onClick={onClearFilters}>
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
