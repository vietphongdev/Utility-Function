
<div class="my-8 py-24 bg-blue-600">
<div class="text-white font-hairline text-2xl text-center text-blue-100 mb-16">
  Static
</div>

<div class="flex flex-col lg:flex-row items-center lg:justify-center">
  <div class="flex flex-col items-center mx-12 w-64 mb-12 lg:mb-0">
    <div id="transaction-count" class="text-6xl font-extrabold text-white mb-6">
      4.000.000
    </div>
    <div class="text-xl text-blue-200">Transactions</div>
  </div>

  <div class="flex flex-col items-center mx-12 w-64 mb-12 lg:mb-0">
    <div id="city-count" class="text-6xl font-extrabold text-white mb-6">
      98
    </div>
    <div class="text-xl text-blue-200">Countries</div>
  </div>

  <div class="flex flex-col items-center mx-12 w-64 mb-12 lg:mb-0">
    <div id="customer-count" class="text-6xl font-extrabold text-white mb-6">
      1.500
    </div>
    <div class="text-xl text-blue-200">Customers</div>
  </div>
</div>
</div>

function easeOutExpo(x) {
    return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
  }
  
  function animateNumber(finalNumber, duration = 5000, startNumber = 0, callback) {
    const startTime = performance.now()
    function updateNumber(currentTime) {
      const elapsedTime = currentTime - startTime
      if (elapsedTime > duration) {
        callback(finalNumber)
      } else {
        const timeRate = (1.0 * elapsedTime) / duration
        const numberRate = easeOutExpo(timeRate)
        const currentNumber = Math.round(numberRate * finalNumber)
        callback(currentNumber)
        requestAnimationFrame(updateNumber);
      }
    }
    requestAnimationFrame(updateNumber)
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    animateNumber(4000000, 3000, 0, function (number) {
      const formattedNumber = number.toLocaleString()
      document.getElementById('transaction-count').innerText = formattedNumber
    })
    
    animateNumber(98, 3000, 0, function (number) {
      const formattedNumber = number.toLocaleString()
      document.getElementById('city-count').innerText = formattedNumber
    })
    
    animateNumber(1500, 3000, 0, function (number) {
      const formattedNumber = number.toLocaleString()
      document.getElementById('customer-count').innerText = formattedNumber
    })
  })