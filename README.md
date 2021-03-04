# weatherdashboard

The weather dashboard has a very simplistic, symmetrical design.
Input on lefthand side for query and results delivered on the righthand side, centered under a large header.

Weather info provided includes location, status (i.e. 'clear,' 'cloudy,' etc.), dates for five day forecast,
temperature and "feels like" comparison, humidity, wind speed and UV Index included in current day weather card.

Entries are filed into a generated list beneath the search input.

The current day function runs on a combination of current day and UV Index URL fetches. Information is extracted from
returned data coordinates and registered appropriately for the convenience of the users' discretion.

The five day forecast is an independent URL fetch that which also registers filtered information accordingly to mirror the
current day weather card.

City search entries are rendered between a few functions (search button, render storage and develop storage), and generated via
JavaScript to accrue a list of prior location searches for the user to toggle and compare and contrast.
