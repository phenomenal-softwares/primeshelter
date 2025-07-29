// Filter by advert type (e.g. "For Sale", "For Rent")
export function filterByAdvert(properties, advertType) {
  return properties.filter(p => p.advert.toLowerCase() === advertType.toLowerCase());
}

// Filter by state
export function filterByState(properties, state) {
  return properties.filter(p => p.state.toLowerCase() === state.toLowerCase());
}

// Filter by city
export function filterByCity(properties, city) {
  return properties.filter(p => p.city.toLowerCase() === city.toLowerCase());
}

// Filter by property type (e.g. land, apartment)
export function filterByType(properties, type) {
  return properties.filter(p => p.propertyType.toLowerCase() === type.toLowerCase());
}
