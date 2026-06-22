import "./CategoryFilter.css"

const categories = [
  "All",
  "Electronics",
  "Books",
  "Fashion",
  "Sports",
  "Beauty",
  "Home",
  "Toys"
]

function CategoryFilter({category, setCategory}) {
  return (
    <div className="categories">

      {categories.map(item => (

        <button
          key={item}
          className={
            category === item || (category === "" && item === "All")
              ? "active-category"
              : "category-btn"
          }

          onClick={() =>
            setCategory(item === "All" ? "" : item)
          }
        >
          {item}
        </button>

      ))}

    </div>
  )
}

export default CategoryFilter