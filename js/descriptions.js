const sriLankaTrainTrips = {
  CMB_KDY: {
    origin: "Colombo",
    destination: "Kandy",
    direction: "West Coast to Central Highlands (Climbing)",
    vibe: "The quintessential Sri Lankan hill climb transition.",
    description: "You start at sea level in the humid, bustling Fort Station. For the first hour, it’s a standard commuter ride through Colombo's suburbs. The magic happens after Rambukkana, where the train begins its heavy, chugging climb into the mountains.",
    seatingTip: "Sit on the right side of the train.",
    keyHighlights: "As the train snakes upward, the ground drops away to reveal the spectacular Kadugannawa Pass. You’ll peer down into sheer vertical drops, deep green valleys, and get a perfect view of Bible Rock jutting out of the mist. The air turns noticeably cooler and crisper by the minute."
  },
  KDY_CMB: {
    origin: "Kandy",
    destination: "Colombo",
    direction: "Central Highlands to West Coast (Descending)",
    vibe: "A relaxing, gravity-assisted descent back to the coast.",
    description: "Leaving the cool mountain capital, this journey is a smooth descent back to the coast. It is highly favored by travelers who want a relaxing ride after days of trekking and hiking around the hills.",
    seatingTip: "Sit on the left side of the train.",
    keyHighlights: "Because the train is moving downhill, it tends to travel slightly faster. The dramatic mountain vistas and deep valley drops slowly give way to sprawling banana plantations, rubber estates, and eventually, the urban, tropical warmth of Colombo."
  },
  CMB_JAF: {
    origin: "Colombo",
    destination: "Jaffna",
    direction: "South-West to the Extreme North",
    vibe: "A long-distance cultural voyage spanning almost the entire length of the island.",
    description: "A long-distance voyage aboard iconic trains like the Yal Devi. You leave the wet, bustling Western Province and head straight through the heart of the country towards the northern peninsula.",
    seatingTip: "Either side offers vast changing vistas; landscape watching is prime here.",
    keyHighlights: "Watch the topography radically shift. The dense coconut palms of the south gradually give way to the dry plains of the North Central province. The definitive highlight is crossing the Elephant Pass causeway—a thin strip of land surrounded by glittering lagoons that acts as the physical gateway to the Jaffna Peninsula, opening up to flat terrains dotted with towering palmyra palms."
  },
  JAF_CMB: {
    origin: "Jaffna",
    destination: "Colombo",
    direction: "Extreme North to South-West",
    vibe: "A daytime transition from vibrant northern heritage back to the commercial hub.",
    description: "The journey back from the cultural heart of the north. It’s an excellent daytime ride to watch Sri Lankan life and architecture transition dynamically across several provinces.",
    seatingTip: "Keep an eye out on both sides for changing regional architectures.",
    keyHighlights: "You leave behind the bright, sun-baked landscape, shallow lagoons, and distinct Hindu Kovils of Jaffna. As you head south, the dry scrublands slowly morph back into the lush, dense, rain-fed greenery and vibrant paddy fields of the wet zone before pulling into Colombo's chaotic center."
  },
  CMB_GAL: {
    origin: "Colombo",
    destination: "Galle",
    direction: "West Coast to South Coast (Southbound)",
    vibe: "One of the most famous coastal rail journeys in the world.",
    description: "A breathtaking cruise along the southwestern coastline connecting the commercial capital to the historic, colonial-era fortified city of Galle.",
    seatingTip: "You must sit on the right side of the train.",
    keyHighlights: "For the first half of the trip, the tracks run literally meters away from the Indian Ocean. You can roll the windows down and feel the salty sea spray on your face. You’ll glide past backyard cricket games, local fishermen, and famous beach towns like Hikkaduwa and Ambalangoda."
  },
  GAL_CMB: {
    origin: "Galle",
    destination: "Colombo",
    direction: "South Coast to West Coast (Northbound)",
    vibe: "A gorgeous commuter stretch known for its dramatic sunset views.",
    description: "Often packed with travelers heading back from their beach holidays or daily commuters heading back into the heart of the capital city.",
    seatingTip: "Sit on the left side of the train.",
    keyHighlights: "Taking this train in the late afternoon is unbeatable; you will get a front-row seat to a spectacular sunset over the Indian Ocean for almost the entire duration of the ride into Colombo."
  },
  CMB_TRI: {
    origin: "Colombo",
    destination: "Trincomalee",
    direction: "West Coast to East Coast (Cross-Country)",
    vibe: "A coast-to-coast journey slicing horizontally through the island.",
    description: "This route cuts directly across the waist of the island from the West Coast to the East Coast. Most people opt for the overnight 'Night Mail' train for this route, though day trains offer great rustic views.",
    seatingTip: "Keep a lookout out the window as you enter the wilder interior provinces.",
    keyHighlights: "If you take the day train, you’ll watch the bustling metro area transition into the tranquil, wild, and heavily forested 'Dry Zone'. The tracks cut through known elephant corridors near Gal Oya, offering a genuine chance of spotting wild elephants from your window."
  },
  TRI_CMB: {
    origin: "Trincomalee",
    destination: "Colombo",
    direction: "East Coast to West Coast",
    vibe: "From the quiet, serene beaches of the east back to the commercial grid.",
    description: "Traveling from the majestic, deep-water harbor and white sands of Trincomalee back to the heavy commercial hub of the west.",
    seatingTip: "Relax and enjoy the shifting density of rural to urban life.",
    keyHighlights: "If traveling by day, you enjoy the serene, rustic countryside of the Eastern Province, passing isolated villages and vast lakes (tanks) built by ancient kings. As you approach the western grid, the quiet nature rapidly transforms back into urban traffic and neon signs."
  },
  KDY_JAF: {
    origin: "Kandy",
    destination: "Jaffna",
    direction: "Central Hills to the Far North",
    vibe: "A fascinating cultural leap bypassing Colombo completely.",
    description: "Connecting the historic hill capital and last kingdom with the northern peninsula, offering a complete geographic swap from high altitude to sea-level plains.",
    seatingTip: "Watch the right side as you descend the hill country foothills.",
    keyHighlights: "The train winds its way down from Kandy's dense, misty hills into the historic, flat plains of the Cultural Triangle (passing near Anuradhapura). The scenery undergoes a total makeover—from mountain rainforests to dry-zone forests, finally opening up into the vast, sun-drenched northern lagoons."
  },
  JAF_KDY: {
    origin: "Jaffna",
    destination: "Kandy",
    direction: "Far North to Central Hills",
    vibe: "A journey of ascending elevation, cooling climates, and landscape shifts.",
    description: "An incredible trip that takes you from the flat, arid, northern landscapes and gradually elevates you into the sacred mountain country.",
    seatingTip: "Sit back and prepare for the climate change as the train climbs.",
    keyHighlights: "You leave the flat, arid, palmyra-strewn landscape of Jaffna behind. After hours of fast, flat riding through the northern plains, the train begins to labor and tilt as it climbs into the foothills of the central massif. The hot northern breeze gradually softens into the cool, refreshing mountain air of Kandy."
  },
  KDY_GAL: {
    origin: "Kandy",
    destination: "Galle",
    direction: "Central Hills to South Coast",
    vibe: "The ultimate geography lesson in a single train ride.",
    description: "An all-in-one journey that takes you from the misty tea estates of the central highlands right down to the crashing waves of the southern coast without needing to swap trains.",
    seatingTip: "Sit on the right side once the train hits the coastal tracks past Colombo.",
    keyHighlights: "You start surrounded by tea estates and misty peaks. The train descends the dramatic Kadugannawa incline, sweeps around the outer edge of Colombo, and immediately links onto the southern coastal track. Within a matter of hours, your view switches from mountain cliffs to crashing ocean waves."
  },
  GAL_KDY: {
    origin: "Galle",
    destination: "Kandy",
    direction: "South Coast to Central Hills",
    vibe: "Leaving the beach lifestyle behind to head into the spiritual highlands.",
    description: "The reverse geographic marvel, taking you from the sun-drenched southern coast up to the cooler, mountain-ringed hill capital.",
    seatingTip: "Sit on the right side for the mountain climb portion.",
    keyHighlights: "You ride alongside the coastal surf up to the edges of Colombo, where the train bypasses the main traffic and begins its long, scenic trek upward. The humid sea air replaces itself with the scent of damp earth, pine trees, and tea plantations as you climb toward Kandy."
  },
  KDY_TRI: {
    origin: "Kandy",
    destination: "Trincomalee",
    direction: "Central Hills to East Coast",
    vibe: "Connecting the mountain canopy to deep blue eastern bays.",
    description: "A highly scenic, off-the-beaten-path route that bypasses Colombo entirely, often requiring a smooth connection or transition near Gal Oya junction.",
    seatingTip: "Look out for wild fauna in the rural stretches.",
    keyHighlights: "The train moves out of Kandy's wet zone, descending into the lower plains of the Eastern Province. You’ll pass through remote, heavily wooded areas and agricultural lands. It feels distinctly off-the-beaten-path, offering a peaceful look at Sri Lanka's rural heartland before opening up to the eastern coast."
  },
  TRI_KDY: {
    origin: "Trincomalee",
    destination: "Kandy",
    direction: "East Coast to Central Hills",
    vibe: "Moving from hot, dry beach ecosystems back up into the lush, cooler interior.",
    description: "A wonderful return trip from the eastern beaches, taking you inland and ascending straight into the mountain ring that cradles Kandy.",
    seatingTip: "Sit on the left side during the upper climbs for mountain pass views.",
    keyHighlights: "You leave the coastal scrublands and ancient port vistas of Trincomalee. The train cuts west through elephant country, and then begins its steady, winding ascent into the Knuckles mountain range foothills that cradle Kandy."
  },
  JAF_GAL: {
    origin: "Jaffna",
    destination: "Galle",
    direction: "Extreme North to Extreme South-West",
    vibe: "The Ultimate Island Odyssey.",
    description: "One of the longest possible rail journeys on the island, cutting from the extreme north to the southwestern tip. A massive voyage traversing multiple provinces.",
    seatingTip: "Right side for the final coastal third of the journey.",
    keyHighlights: "This trip covers it all. You start with the arid, flat, Hindu-dominated landscape of the north, travel through the vast agricultural dry zones, cut right through the urban jungle of Colombo, and finish with hours of riding alongside the palm-fringed Indian Ocean beaches."
  },
  GAL_JAF: {
    origin: "Galle",
    destination: "Jaffna",
    direction: "Extreme South-West to Extreme North",
    vibe: "The reverse island odyssey from coastal south to resilient north.",
    description: "An epic cross-island train trip taking you from the colonial, coastal south, up through the capital city, and all the way to the top of the island.",
    seatingTip: "Left side for the initial ocean views, then sit back for the long northern haul.",
    keyHighlights: "You begin with the ocean on your left, pass through the capital, and then settle in for the long haul north. The lush green scenery slowly dries out, the architecture changes, and the coconut trees give way to palmyra as you cross the lagoon into the peninsula."
  },
  JAF_TRI: {
    origin: "Jaffna",
    destination: "Trincomalee",
    direction: "Far North to East Coast",
    vibe: "A rugged, rustic journey connecting the major hubs of the North and East.",
    description: "This route highlights the untamed side of Sri Lanka, cutting across dry zones, rural outposts, and rarely visited junctions.",
    seatingTip: "Keep an eye out for exceptional birdwatching and wildlife spotting.",
    keyHighlights: "This route highlights the untamed side of Sri Lanka. You travel through sparsely populated areas, vast nature reserves, and dry-zone shrub forests. It’s quiet, slow-paced, and offers excellent opportunities for birdwatching and spotting wildlife from the open doorways."
  },
  TRI_JAF: {
    origin: "Trincomalee",
    destination: "Jaffna",
    direction: "East Coast to Far North",
    vibe: "Traveling up the eastern and northern dry plains.",
    description: "A peaceful transit from the deep bays of the east up to the sun-baked northern peninsula, crossing pristine rural country.",
    seatingTip: "Look out for salt pans and palmyra horizons near the end.",
    keyHighlights: "Leaving behind the white sands of Trincomalee, the train tracks head inland through elephant-frequented wilderness before hooking onto the main northern line. The landscape becomes flatter and more sun-baked until the iconic palmyra trees and salt pans of Jaffna come into view."
  }
};