const categories = [
  "Luxury Beauty",
  "Luxury Skin Care",
  "Luxury Nail Care",
  "Luxury Fragrance",
  "Luxury Hair Care & Styling",
  "Luxury Men's Grooming",
  "All Luxury Brands",
];

function CategoryBar() {
  return (
    <div className=" bg-blackBlue text-sm text-gray-100 font-bold pb-5 pt-2">
      <div className="container mx-auto">
        <ul className="flex justify-between">
          {categories.map((category) => (
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <a href="#" key={categories.indexOf(category)}>
              <li>{category}</li>
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CategoryBar;
