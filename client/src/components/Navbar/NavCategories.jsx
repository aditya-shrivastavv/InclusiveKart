function NavCategories() {
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

  return (
    <div className="bg-gray-700 text-xs text-gray-100 py-2 border-b-4 border-gray-800">
      <div className="container mx-auto">
        <ul className="flex justify-between">
          {categories.map((category) => (
            <a href="#" key={categories.indexOf(category)}>
              <li>{category}</li>
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NavCategories;
