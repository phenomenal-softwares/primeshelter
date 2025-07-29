// Format price: 5000000 -> ₦5,000,000
export function formatPrice(price) {
  return `₦${price.toLocaleString('en-NG')}`;
}

// Format "20 days ago"
export function formatDaysAgo(dateAdded) {
  const then = new Date(dateAdded);
  const now = new Date();
  const diffInMs = now - then;
  const days = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  return `${days} day${days !== 1 ? 's' : ''} ago`;
}
