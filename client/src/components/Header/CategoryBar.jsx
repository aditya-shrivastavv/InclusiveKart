const categories = [
  "Luxury Beauty",
  "Luxury Skin Care",
  "Luxury Nail Care",
  "Luxury Fragrance",
  "Luxury Hair Care & Styling",
  "Luxury Men's Grooming",
  "All Luxury Brands",
  "All Beauty",
];

function CategoryBar() {
  return (
    <div className=" bg-slate-400 text-xs text-gray-900 font-bold py-2 border-y-4 border-gray-800">
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
