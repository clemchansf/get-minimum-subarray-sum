//

export default function getUmbrellas(requirement, sizes) {
  console.log(`requirement: ${requirement}, sizes: ${sizes}`)

  // initialize min count
  let count = Number.MAX_SAFE_INTEGER

  // use short aliases
  let r = requirement
  let len = sizes.length

  // dual pointers for checking subarray sum
  // because left and right pointer at most will
  // pass the the array once, time complexity will be O(2n) ~ O(n)

  let left = 0
  let right = 1
  let sum = sizes[0]

  while (right <= len) {
    // check local sum
    while (sum > r && left < right) {
      sum = sum - sizes[left]
      left++
    }

    if (sum === r) {
      // get min between local sum's subarray length, and global sum subarray length
      count = Math.min(count, right - left)

      // grow the sum, so that in the next pass
      // the sum will trigger shrinking of the subarray
      // from the left side
      sum = sum + sizes[right]
    }

    if (sum < r && right <= len) {
      // grow sum to reach requirement
      sum = sum + sizes[right]
    }

    // adjust length of subarray by moving to the right
    right++
  }

  // if count is still the initialized value which is MAX_SAFE_INTEGER
  // it will definitely be greater than the length of the size, that
  // indicates no match is found, therefore -1 is returned ,
  // otherwise, one of the minimum size of subarray with sum matched
  // the requirement is found, the length of that subarray is returned.
  return count > len ? -1 : count
}
