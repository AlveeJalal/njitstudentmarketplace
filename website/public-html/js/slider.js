const minPrice = document.getElementById('min-price');
const maxPrice = document.getElementById('max-price');
const minPriceValue = document.getElementById('min-price-value');
const maxPriceValue = document.getElementById('max-price-value');

function updateValues() {
  const min = parseInt(minPrice.value);
  const max = parseInt(maxPrice.value);

  // Prevent overlap
  if (min >= max) {
    minPrice.value = max - 1;
  }

  if (max <= min) {
    maxPrice.value = min + 1;
  }

  // Update displayed values
  minPriceValue.textContent = `$${minPrice.value}`;
  maxPriceValue.textContent = `$${maxPrice.value}`;
}

// Add event listeners
minPrice.addEventListener('input', updateValues);
maxPrice.addEventListener('input', updateValues);
