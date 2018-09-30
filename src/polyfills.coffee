# https://webpack.js.org/guides/shimming/
# Now while this is one approach,
# including polyfills in the main bundle is not recommended
# because this penalizes modern browsers users
# by making them download a bigger file with unneeded scripts.
# Let's move our import to a new file and add the whatwg-fetch polyfill:
import 'babel-polyfill'
import 'whatwg-fetch'