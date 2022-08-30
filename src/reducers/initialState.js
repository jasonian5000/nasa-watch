const initialState = {
  nasaSearchResult: {"collection":{"version":"1.0","href":"http://images-api.nasa.gov/search?media_type=image","items":[{"href":"https://images-assets.nasa.gov/image/PIA16573/collection.json","data":[{"center":"JPL","title":"Heating Martian Sand Grains","nasa_id":"PIA16573","date_created":"2012-12-03T17:00:06Z","keywords":["Mars","Mars Science Laboratory MSL"],"media_type":"image","description_508":"This plot of data from NASA Mars rover Curiosity shows the variety of gases that were released from sand grains upon heating in the Sample Analysis at Mars instrument, or SAM.","secondary_creator":"NASA/JPL-Caltech/GSFC","description":"This plot of data from NASA Mars rover Curiosity shows the variety of gases that were released from sand grains upon heating in the Sample Analysis at Mars instrument, or SAM."}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16573/PIA16573~thumb.jpg","rel":"preview","render":"image"}]},{"href":"https://images-assets.nasa.gov/image/PIA16574/collection.json","data":[{"center":"JPL","title":"Atmospheric Loss on Mars","nasa_id":"PIA16574","date_created":"2012-12-03T17:00:07Z","keywords":["Mars","Mars Science Laboratory MSL"],"media_type":"image","description_508":"This plot shows the first-ever look at the deuterium to hydrogen ratio measured from the surface of Mars, as detected by the Sample Analysis at Mars instrument, or SAM, on NASA Curiosity rover.","secondary_creator":"NASA/JPL-Caltech/GSFC","description":"This plot shows the first-ever look at the deuterium to hydrogen ratio measured from the surface of Mars, as detected by the Sample Analysis at Mars instrument, or SAM, on NASA Curiosity rover."}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16574/PIA16574~thumb.jpg","rel":"preview","render":"image"}]},{"href":"https://images-assets.nasa.gov/image/PIA16576/collection.json","data":[{"center":"JPL","title":"Chlorinated Compounds at Rocknest","nasa_id":"PIA16576","date_created":"2012-12-03T17:00:09Z","keywords":["Mars","Mars Science Laboratory MSL"],"media_type":"image","description_508":"The first examinations of Martian soil by the Sample Analysis at Mars, or SAM, instrument on NASA Mars Curiosity rover show no definitive detection of Martian organic molecules at this point.","secondary_creator":"NASA/JPL-Caltech/GSFC","description":"The first examinations of Martian soil by the Sample Analysis at Mars, or SAM, instrument on NASA Mars Curiosity rover show no definitive detection of Martian organic molecules at this point."}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16576/PIA16576~thumb.jpg","rel":"preview","render":"image"}]},{"href":"https://images-assets.nasa.gov/image/PIA16578/collection.json","data":[{"center":"JPL","title":"Gravity of the Moon Crust","nasa_id":"PIA16578","date_created":"2012-12-05T17:00:01Z","keywords":["Moon","Gravity Recovery and Interior Laboratory GRAIL"],"media_type":"image","description_508":"These maps of the moon show the Bouguer gravity anomalies as measured by NASA GRAIL mission. Red areas have stronger gravity, while blue areas have weaker gravity.","secondary_creator":"NASA/JPL-Caltech/CSM","description":"These maps of the moon show the Bouguer gravity anomalies as measured by NASA GRAIL mission. Red areas have stronger gravity, while blue areas have weaker gravity."}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16578/PIA16578~thumb.jpg","rel":"preview","render":"image"}]},{"href":"https://images-assets.nasa.gov/image/PIA16579/collection.json","data":[{"center":"JPL","title":"GRAIL Gravity Gradients","nasa_id":"PIA16579","date_created":"2012-12-05T17:00:02Z","keywords":["Moon","Gravity Recovery and Interior Laboratory GRAIL"],"media_type":"image","description_508":"These maps of the near and far side of the moon show gravity gradients as measured by NASA GRAIL mission. Red and blue areas indicate stronger gradients due to underlying mass anomalies.","secondary_creator":"NASA/JPL-Caltech/CSM","description":"These maps of the near and far side of the moon show gravity gradients as measured by NASA GRAIL mission. Red and blue areas indicate stronger gradients due to underlying mass anomalies."}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16579/PIA16579~thumb.jpg","rel":"preview","render":"image"}]},{"href":"https://images-assets.nasa.gov/image/PIA16583/collection.json","data":[{"center":"JPL","title":"GRAIL Identifies Moon Dikes","nasa_id":"PIA16583","date_created":"2012-12-05T17:00:06Z","keywords":["Moon","Gravity Recovery and Interior Laboratory GRAIL"],"media_type":"image","description_508":"A profile across one of the linear gravity anomalies found by NASA GRAIL mission shows that it has higher gravity than the surroundings.","secondary_creator":"Left: NASA/JPL-Caltech/CSM, Right: Photo Copyright ? Louis Maher","description":"A profile across one of the linear gravity anomalies found by NASA GRAIL mission shows that it has higher gravity than the surroundings."}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16583/PIA16583~thumb.jpg","rel":"preview","render":"image"}]},{"href":"https://images-assets.nasa.gov/image/PIA16584/collection.json","data":[{"center":"JPL","title":"Moon Dike Map","nasa_id":"PIA16584","date_created":"2012-12-05T17:00:07Z","keywords":["Moon","Gravity Recovery and Interior Laboratory GRAIL,Lunar Reconnais"],"media_type":"image","description_508":"This map of one side of the moon shows the location of some of the giant dikes identified by NASA GRAIL mission.","secondary_creator":"NASA/JPL-Caltech/CSM","description":"This map of one side of the moon shows the location of some of the giant dikes identified by NASA GRAIL mission."}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16584/PIA16584~thumb.jpg","rel":"preview","render":"image"}]},{"href":"https://images-assets.nasa.gov/image/PIA16585/collection.json","data":[{"center":"JPL","title":"Lunar Gravity Gradients","nasa_id":"PIA16585","date_created":"2012-12-05T17:00:08Z","keywords":["Moon","Gravity Recovery and Interior Laboratory GRAIL"],"media_type":"image","description_508":"This moon map shows the gravity gradients calculated by NASA GRAIL mission. Red and blue correspond to stronger gravity gradients.","secondary_creator":"NASA/JPL-Caltech/CSM","description":"This moon map shows the gravity gradients calculated by NASA GRAIL mission. Red and blue correspond to stronger gravity gradients."}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16585/PIA16585~thumb.jpg","rel":"preview","render":"image"}]},{"href":"https://images-assets.nasa.gov/image/PIA16586/collection.json","data":[{"center":"JPL","title":"Moon Gravity Field Using Prospector Data","nasa_id":"PIA16586","date_created":"2012-12-05T17:00:09Z","keywords":["Moon","Gravity Recovery and Interior Laboratory GRAIL"],"media_type":"image","description_508":"This map shows the gravity field of the moon from the Lunar Prospector mission. The viewing perspective, known as a Mercator projection, shows the far side of the moon in the center and the nearside as viewed from Earth at either side.","secondary_creator":"NASA/ARC/MIT","description":"This map shows the gravity field of the moon from the Lunar Prospector mission. The viewing perspective, known as a Mercator projection, shows the far side of the moon in the center and the nearside as viewed from Earth at either side."}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16586/PIA16586~thumb.jpg","rel":"preview","render":"image"}]},{"href":"https://images-assets.nasa.gov/image/PIA16587/collection.json","data":[{"center":"JPL","title":"GRAIL Gravity Field of the Moon","nasa_id":"PIA16587","date_created":"2012-12-05T17:00:10Z","keywords":["Moon","Gravity Recovery and Interior Laboratory GRAIL"],"media_type":"image","description_508":"This map shows the gravity field of the moon as measured by NASA GRAIL mission. The viewing perspective, known as a Mercator projection, shows the far side of the moon in the center and the nearside as viewed from Earth at either side.","secondary_creator":"NASA/ARC/MIT","description":"This map shows the gravity field of the moon as measured by NASA GRAIL mission. The viewing perspective, known as a Mercator projection, shows the far side of the moon in the center and the nearside as viewed from Earth at either side."}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16587/PIA16587~thumb.jpg","rel":"preview","render":"image"}]},{"href":"https://images-assets.nasa.gov/image/PIA16588/collection.json","data":[{"center":"JPL","title":"Closer Look at Lunar Highland Crust","nasa_id":"PIA16588","date_created":"2012-12-05T17:00:11Z","keywords":["Moon","Gravity Recovery and Interior Laboratory GRAIL"],"media_type":"image","description_508":"This image depicting the porosity of the lunar highland crust was derived using bulk density data from NASA GRAIL mission and independent grain density measurements from NASA Apollo moon mission samples as well as orbital remote-sensing data.","secondary_creator":"NASA/JPL-Caltech/IPGP","description":"This image depicting the porosity of the lunar highland crust was derived using bulk density data from NASA GRAIL mission and independent grain density measurements from NASA Apollo moon mission samples as well as orbital remote-sensing data."}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16588/PIA16588~thumb.jpg","rel":"preview","render":"image"}]},{"href":"https://images-assets.nasa.gov/image/PIA16591/collection.json","data":[{"center":"JPL","title":"Hallowed Hollows","keywords":["Mercury","MESSENGER"],"nasa_id":"PIA16591","date_created":"2012-12-07T19:10:31Z","media_type":"image","description_508":"Hallowed Hollows","secondary_creator":"NASA/Johns Hopkins University Applied Physics Laboratory/Carnegie Institution of Washington","description":"Hallowed Hollows"}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16591/PIA16591~thumb.jpg","rel":"preview","render":"image"}]},{"href":"https://images-assets.nasa.gov/image/PIA16593/collection.json","data":[{"center":"JPL","title":"Arcuate Fractures","nasa_id":"PIA16593","date_created":"2012-12-12T16:30:19Z","keywords":["Mars","2001 Mars Odyssey"],"media_type":"image","description_508":"This region of arcuate or curved fractures is located north of Apollinaris Mons as seen by NASA 2001 Mars Odyssey spacecraft.","secondary_creator":"NASA/JPL/ASU","description":"This region of arcuate or curved fractures is located north of Apollinaris Mons as seen by NASA 2001 Mars Odyssey spacecraft."}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16593/PIA16593~thumb.jpg","rel":"preview","render":"image"}]},{"href":"https://images-assets.nasa.gov/image/PIA16597/collection.json","data":[{"center":"JPL","title":"Daedalia Planum","nasa_id":"PIA16597","date_created":"2012-12-17T16:30:19Z","keywords":["Mars","2001 Mars Odyssey"],"media_type":"image","description_508":"Layer upon layer of volcanic flows make up Daedalia Planum as shown in this image from NASA 2001 Mars Odyssey spacecraft.","secondary_creator":"NASA/JPL/ASU","description":"Layer upon layer of volcanic flows make up Daedalia Planum as shown in this image from NASA 2001 Mars Odyssey spacecraft."}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16597/PIA16597~thumb.jpg","rel":"preview","render":"image"}]},{"href":"https://images-assets.nasa.gov/image/PIA16606/collection.json","data":[{"center":"JPL","title":"Sizzling Remains of a Dead Star","nasa_id":"PIA16606","date_created":"2013-01-07T22:29:02Z","keywords":["Cassiopeia A","NuSTAR"],"media_type":"image","description_508":"This new view of the historical supernova remnant Cassiopeia A, located 11,000 light-years away, was taken by NASA Nuclear Spectroscopic Telescope Array, or NuSTAR. While the star is long dead, its remains are still bursting with action.","secondary_creator":"NASA/JPL-Caltech/DSS","description":"This new view of the historical supernova remnant Cassiopeia A, located 11,000 light-years away, was taken by NASA Nuclear Spectroscopic Telescope Array, or NuSTAR. While the star is long dead, its remains are still bursting with action."}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16606/PIA16606~thumb.jpg","rel":"preview","render":"image"}]},{"href":"https://images-assets.nasa.gov/image/PIA16609/collection.json","data":[{"center":"JPL","title":"Forecast for Exotic Weather Artist Concept","nasa_id":"PIA16609","date_created":"2013-01-08T22:28:09Z","keywords":["Hubble Space Telescope,Spitzer Space Telescope"],"media_type":"image","description_508":"This artist conception illustrates the brown dwarf named 2MASSJ22282889-431026. NASA Hubble and Spitzer space telescopes observed the object to learn more about its turbulent atmosphere.","secondary_creator":"NASA/JPL-Caltech","description":"This artist conception illustrates the brown dwarf named 2MASSJ22282889-431026. NASA Hubble and Spitzer space telescopes observed the object to learn more about its turbulent atmosphere."}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16609/PIA16609~thumb.jpg","rel":"preview","render":"image"}]},{"href":"https://images-assets.nasa.gov/image/PIA16611/collection.json","data":[{"center":"JPL","title":"Vega: Two Belts and the Possibility of Planets","nasa_id":"PIA16611","date_created":"2013-01-08T22:28:11Z","keywords":["Herschel Space Observatory,Spitzer Space Telescope"],"media_type":"image","description_508":"In this diagram, the Vega system, which was already known to have a cooler outer belt of comets orange, is compared to our solar system with its asteroid and Kuiper belts. The ring of warm, rocky debris was detected using NASA Spitzer Space Telescope,","secondary_creator":"NASA/JPL-Caltech","description":"In this diagram, the Vega system, which was already known to have a cooler outer belt of comets orange, is compared to our solar system with its asteroid and Kuiper belts. The ring of warm, rocky debris was detected using NASA Spitzer Space Telescope,"}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16611/PIA16611~thumb.jpg","rel":"preview","render":"image"}]},{"href":"https://images-assets.nasa.gov/image/PIA16614/collection.json","data":[{"center":"JPL","title":"Simulation of Galactic Collision Simulation","nasa_id":"PIA16614","date_created":"2013-01-10T20:44:02Z","keywords":["Galaxy Evolution Explorer GALEX"],"media_type":"image","description_508":"Computer simulations of the collision between NGC 6872 and IC 4970 reproduce the basic features of the galaxies as we see them today.","secondary_creator":"NASA Goddard Space Flight Center, after C. Horellou Onsala Space Observatory and B. Koribalski ATNF","description":"Computer simulations of the collision between NGC 6872 and IC 4970 reproduce the basic features of the galaxies as we see them today."}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16614/PIA16614~thumb.jpg","rel":"preview","render":"image"}]},{"href":"https://images-assets.nasa.gov/image/PIA16620/collection.json","data":[{"center":"JPL","title":"Mare Orientale Flyover","nasa_id":"PIA16620","date_created":"2012-12-05T17:00:13Z","keywords":["Moon","Gravity Recovery and Interior Laboratory GRAIL"],"media_type":"image","description_508":"Mare Orientale Flyover","secondary_creator":"Movie credit: NASA/JPL-Caltech/Sally Ride Science","description":"Mare Orientale Flyover"}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16620/PIA16620~thumb.jpg","rel":"preview","render":"image"}]},{"href":"https://images-assets.nasa.gov/image/PIA16622/collection.json","data":[{"center":"JPL","title":"GRAIL Gravity Tour of the Moon","keywords":["Moon","Gravity Recovery and Interior Laboratory GRAIL"],"nasa_id":"PIA16622","date_created":"2012-12-05T17:00:15Z","media_type":"image","description_508":"GRAIL Gravity Tour of the Moon","secondary_creator":"NASA/JPL-Caltech/MIT/GSFC","description":"GRAIL Gravity Tour of the Moon"}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16622/PIA16622~thumb.jpg","rel":"preview","render":"image"}]},{"href":"https://images-assets.nasa.gov/image/PIA16624/collection.json","data":[{"center":"JPL","title":"The Sublime Kert&eacute;sz","nasa_id":"PIA16624","date_created":"2012-12-10T18:00:23Z","keywords":["Mercury","MESSENGER"],"media_type":"image","description_508":"The Sublime Kert&eacute;sz","secondary_creator":"NASA/Johns Hopkins University Applied Physics Laboratory/Carnegie Institution of Washington","description":"The Sublime Kert&eacute;sz"}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16624/PIA16624~thumb.jpg","rel":"preview","render":"image"}]},{"href":"https://images-assets.nasa.gov/image/PIA16625/collection.json","data":[{"center":"JPL","title":"A Study in Contrasts","nasa_id":"PIA16625","date_created":"2012-12-11T18:00:23Z","keywords":["Mercury","MESSENGER"],"media_type":"image","description_508":"A Study in Contrasts","secondary_creator":"NASA/Johns Hopkins University Applied Physics Laboratory/Carnegie Institution of Washington","description":"A Study in Contrasts"}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16625/PIA16625~thumb.jpg","rel":"preview","render":"image"}]},{"href":"https://images-assets.nasa.gov/image/PIA16626/collection.json","data":[{"center":"JPL","title":"Blue Rays","nasa_id":"PIA16626","date_created":"2012-12-12T18:00:23Z","keywords":["Mercury","MESSENGER"],"media_type":"image","description_508":"Blue Rays","secondary_creator":"NASA/Johns Hopkins University Applied Physics Laboratory/Carnegie Institution of Washington","description":"Blue Rays"}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16626/PIA16626~thumb.jpg","rel":"preview","render":"image"}]},{"href":"https://images-assets.nasa.gov/image/PIA16627/collection.json","data":[{"center":"JPL","title":"As Soft As Velvet","keywords":["Mercury","MESSENGER"],"nasa_id":"PIA16627","date_created":"2012-12-13T18:00:23Z","media_type":"image","description_508":"As Soft As Velvet","secondary_creator":"NASA/Johns Hopkins University Applied Physics Laboratory/Carnegie Institution of Washington","description":"As Soft As Velvet"}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16627/PIA16627~thumb.jpg","rel":"preview","render":"image"}]},{"href":"https://images-assets.nasa.gov/image/PIA16628/collection.json","data":[{"center":"JPL","title":"Broken Fire","nasa_id":"PIA16628","date_created":"2012-12-14T18:00:23Z","keywords":["Mercury","MESSENGER"],"media_type":"image","description_508":"Broken Fire","secondary_creator":"NASA/Johns Hopkins University Applied Physics Laboratory/Carnegie Institution of Washington","description":"Broken Fire"}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16628/PIA16628~thumb.jpg","rel":"preview","render":"image"}]},{"href":"https://images-assets.nasa.gov/image/PIA16632/collection.json","data":[{"center":"JPL","title":"Distribution of Vesta Dark Materials, Southern View","nasa_id":"PIA16632","date_created":"2013-01-03T15:58:03Z","keywords":["Vesta","Dawn"],"media_type":"image","description_508":"This map shows the distribution of dark materials throughout the southern hemisphere of the giant asteroid Vesta. The circles, diamonds, and stars show where the dark material appears in craters, spots and topographic highs.","secondary_creator":"NASA/JPL-Caltech/UCLA/MPS/DLR/IDA","description":"This map shows the distribution of dark materials throughout the southern hemisphere of the giant asteroid Vesta. The circles, diamonds, and stars show where the dark material appears in craters, spots and topographic highs."}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16632/PIA16632~thumb.jpg","rel":"preview","render":"image"}]},{"href":"https://images-assets.nasa.gov/image/PIA16634/collection.json","data":[{"center":"JPL","title":"Floating Ice on Titan Lakes?","nasa_id":"PIA16634","date_created":"2013-01-08T16:59:01Z","keywords":["Titan","Cassini-Huygens"],"media_type":"image","description_508":"This artist concept envisions what hydrocarbon ice forming on a liquid hydrocarbon sea of Saturn moon Titan might look like.","secondary_creator":"NASA/JPL-Caltech/USGS","description":"This artist concept envisions what hydrocarbon ice forming on a liquid hydrocarbon sea of Saturn moon Titan might look like."}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16634/PIA16634~thumb.jpg","rel":"preview","render":"image"}]},{"href":"https://images-assets.nasa.gov/image/PIA16637/collection.json","data":[{"center":"JPL","title":"Does this Vial Contain Organics?","nasa_id":"PIA16637","date_created":"2013-01-16T21:44:02Z","media_type":"image","description_508":"The NASA Astrobiology Icy Worlds team at NASA Jet Propulsion Laboratory are collecting samples from a simulated ocean vent to see if they can detect organic molecules being brewed.","secondary_creator":"NASA/JPL-Caltech","description":"The NASA Astrobiology Icy Worlds team at NASA Jet Propulsion Laboratory are collecting samples from a simulated ocean vent to see if they can detect organic molecules being brewed."}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16637/PIA16637~thumb.jpg","rel":"preview","render":"image"}]},{"href":"https://images-assets.nasa.gov/image/PIA16639/collection.json","data":[{"center":"JPL","title":"Storm Head, Meet Tail","nasa_id":"PIA16639","date_created":"2013-01-31T17:55:01Z","keywords":["Saturn","Cassini-Huygens"],"media_type":"image","description_508":"This set of images from NASA Cassini mission shows the evolution of a massive thunder-and-lightning storm that circled all the way around Saturn and fizzled when it ran into its own tail.","secondary_creator":"NASA/JPL-Caltech/SSI/Hampton University","description":"This set of images from NASA Cassini mission shows the evolution of a massive thunder-and-lightning storm that circled all the way around Saturn and fizzled when it ran into its own tail."}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16639/PIA16639~thumb.jpg","rel":"preview","render":"image"}]},{"href":"https://images-assets.nasa.gov/image/PIA16640/collection.json","data":[{"center":"JPL","title":"Exposed","nasa_id":"PIA16640","date_created":"2012-12-18T13:00:21Z","keywords":["Mercury","MESSENGER"],"media_type":"image","description_508":"Exposed","secondary_creator":"NASA/Johns Hopkins University Applied Physics Laboratory/Carnegie Institution of Washington","description":"Exposed"}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16640/PIA16640~thumb.jpg","rel":"preview","render":"image"}]},{"href":"https://images-assets.nasa.gov/image/PIA16644/collection.json","data":[{"center":"JPL","title":"South Polar Surface","nasa_id":"PIA16644","date_created":"2012-12-21T16:30:42Z","keywords":["Mars","2001 Mars Odyssey"],"media_type":"image","description_508":"One type of surface seen on the south pole is this wiss-cheese terrain of circular depressions as seen in this image from NASA 2001 Mars Odyssey spacecraft.","secondary_creator":"NASA/JPL/ASU","description":"One type of surface seen on the south pole is this wiss-cheese terrain of circular depressions as seen in this image from NASA 2001 Mars Odyssey spacecraft."}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16644/PIA16644~thumb.jpg","rel":"preview","render":"image"}]},{"href":"https://images-assets.nasa.gov/image/PIA16646/collection.json","data":[{"center":"JPL","title":"Polar Layers","nasa_id":"PIA16646","date_created":"2012-12-25T16:30:42Z","keywords":["Mars","2001 Mars Odyssey"],"media_type":"image","description_508":"The south polar cap is comprised of many layers of ice, as seen in this image from NASA 2001 Mars Odyssey spacecraft.","secondary_creator":"NASA/JPL/ASU","description":"The south polar cap is comprised of many layers of ice, as seen in this image from NASA 2001 Mars Odyssey spacecraft."}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16646/PIA16646~thumb.jpg","rel":"preview","render":"image"}]},{"href":"https://images-assets.nasa.gov/image/PIA16649/collection.json","data":[{"center":"JPL","title":"Dunes","nasa_id":"PIA16649","date_created":"2012-12-28T16:30:42Z","keywords":["Mars","2001 Mars Odyssey"],"media_type":"image","description_508":"This image from NASA 2001 Mars Odyssey spacecraft shows sand dunes on the floor of an unnamed crater near Meridiani Planum.","secondary_creator":"NASA/JPL/ASU","description":"This image from NASA 2001 Mars Odyssey spacecraft shows sand dunes on the floor of an unnamed crater near Meridiani Planum."}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16649/PIA16649~thumb.jpg","rel":"preview","render":"image"}]},{"href":"https://images-assets.nasa.gov/image/PIA16650/collection.json","data":[{"center":"JPL","title":"Lava Channels","nasa_id":"PIA16650","date_created":"2012-12-31T16:30:42Z","keywords":["Mars","2001 Mars Odyssey"],"media_type":"image","description_508":"The lava channels in this image are located in the Tharsis plains as seen by NASA 2001 Mars Odyssey spacecraft.","secondary_creator":"NASA/JPL/ASU","description":"The lava channels in this image are located in the Tharsis plains as seen by NASA 2001 Mars Odyssey spacecraft."}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16650/PIA16650~thumb.jpg","rel":"preview","render":"image"}]},{"href":"https://images-assets.nasa.gov/image/PIA16652/collection.json","data":[{"center":"JPL","title":"Streamlined Islands","nasa_id":"PIA16652","date_created":"2013-01-02T16:30:42Z","keywords":["Mars","2001 Mars Odyssey"],"media_type":"image","description_508":"The streamlined islands in this image from NASA 2001 Mars Odyssey spacecraft are located in the channel of Marte Vallis.","secondary_creator":"NASA/JPL/ASU","description":"The streamlined islands in this image from NASA 2001 Mars Odyssey spacecraft are located in the channel of Marte Vallis."}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16652/PIA16652~thumb.jpg","rel":"preview","render":"image"}]},{"href":"https://images-assets.nasa.gov/image/PIA16660/collection.json","data":[{"center":"JPL","title":"Daedalia Planum","nasa_id":"PIA16660","date_created":"2013-01-14T16:30:00Z","keywords":["Mars","2001 Mars Odyssey"],"media_type":"image","description_508":"This image captured by NASA 2001 Mars Odyssey spacecraft shows a small portion of Daedalia Planun, the result of vast eruptions of Arsia Mons.","secondary_creator":"NASA/JPL/ASU","description":"This image captured by NASA 2001 Mars Odyssey spacecraft shows a small portion of Daedalia Planun, the result of vast eruptions of Arsia Mons."}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16660/PIA16660~thumb.jpg","rel":"preview","render":"image"}]},{"href":"https://images-assets.nasa.gov/image/PIA16661/collection.json","data":[{"center":"JPL","title":"A Nursery for Hollows?","nasa_id":"PIA16661","date_created":"2012-12-19T19:00:18Z","keywords":["Mercury","MESSENGER"],"media_type":"image","description_508":"A Nursery for Hollows?","secondary_creator":"NASA/Johns Hopkins University Applied Physics Laboratory/Carnegie Institution of Washington","description":"A Nursery for Hollows?"}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16661/PIA16661~thumb.jpg","rel":"preview","render":"image"}]},{"href":"https://images-assets.nasa.gov/image/PIA16662/collection.json","data":[{"center":"JPL","title":"Fossae Posse","nasa_id":"PIA16662","date_created":"2012-12-20T19:00:18Z","keywords":["Mercury","MESSENGER"],"media_type":"image","description_508":"Fossae Posse","secondary_creator":"NASA/Johns Hopkins University Applied Physics Laboratory/Carnegie Institution of Washington","description":"Fossae Posse"}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16662/PIA16662~thumb.jpg","rel":"preview","render":"image"}]},{"href":"https://images-assets.nasa.gov/image/PIA16663/collection.json","data":[{"center":"JPL","title":"And I Feel Fine","nasa_id":"PIA16663","date_created":"2012-12-21T19:00:38Z","keywords":["Mercury","MESSENGER"],"media_type":"image","description_508":"And I Feel Fine","secondary_creator":"NASA/Johns Hopkins University Applied Physics Laboratory/Carnegie Institution of Washington","description":"And I Feel Fine"}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16663/PIA16663~thumb.jpg","rel":"preview","render":"image"}]},{"href":"https://images-assets.nasa.gov/image/PIA16664/collection.json","data":[{"center":"JPL","title":"How to Locate the Newly Named Craters","nasa_id":"PIA16664","date_created":"2012-12-21T19:00:39Z","keywords":["Mercury","MESSENGER"],"media_type":"image","description_508":"How to Locate the Newly Named Craters","secondary_creator":"NASA/Johns Hopkins University Applied Physics Laboratory/Carnegie Institution of Washington","description":"How to Locate the Newly Named Craters"}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16664/PIA16664~thumb.jpg","rel":"preview","render":"image"}]},{"href":"https://images-assets.nasa.gov/image/PIA16665/collection.json","data":[{"center":"JPL","title":"North Pole Tidings","nasa_id":"PIA16665","date_created":"2012-12-24T19:00:39Z","keywords":["Mercury","MESSENGER"],"media_type":"image","description_508":"North Pole Tidings","secondary_creator":"NASA/Johns Hopkins University Applied Physics Laboratory/Carnegie Institution of Washington","description":"North Pole Tidings"}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16665/PIA16665~thumb.jpg","rel":"preview","render":"image"}]},{"href":"https://images-assets.nasa.gov/image/PIA16666/collection.json","data":[{"center":"JPL","title":"A Mercury Christmas Carol","nasa_id":"PIA16666","date_created":"2012-12-25T19:00:39Z","keywords":["Mercury","MESSENGER"],"media_type":"image","description_508":"A Mercury Christmas Carol","secondary_creator":"NASA/Johns Hopkins University Applied Physics Laboratory/Carnegie Institution of Washington","description":"A Mercury Christmas Carol"}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16666/PIA16666~thumb.jpg","rel":"preview","render":"image"}]},{"href":"https://images-assets.nasa.gov/image/PIA16667/collection.json","data":[{"center":"JPL","title":"2012 in MESSENGER Images","nasa_id":"PIA16667","date_created":"2012-12-26T19:00:39Z","keywords":["Mercury","MESSENGER"],"media_type":"image","description_508":"2012 in MESSENGER Images","secondary_creator":"NASA/Johns Hopkins University Applied Physics Laboratory/Carnegie Institution of Washington","description":"2012 in MESSENGER Images"}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16667/PIA16667~thumb.jpg","rel":"preview","render":"image"}]},{"href":"https://images-assets.nasa.gov/image/PIA16669/collection.json","data":[{"center":"JPL","title":"Ring in the New Year to Some Ragtime","nasa_id":"PIA16669","date_created":"2013-01-01T19:00:39Z","keywords":["Mercury","MESSENGER"],"media_type":"image","description_508":"Ring in the New Year to Some Ragtime","secondary_creator":"NASA/Johns Hopkins University Applied Physics Laboratory/Carnegie Institution of Washington","description":"Ring in the New Year to Some Ragtime"}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16669/PIA16669~thumb.jpg","rel":"preview","render":"image"}]},{"href":"https://images-assets.nasa.gov/image/PIA16674/collection.json","data":[{"center":"JPL","title":"A Tale of Two Terrains","nasa_id":"PIA16674","date_created":"2013-01-08T19:00:39Z","keywords":["Mercury","MESSENGER"],"media_type":"image","description_508":"A Tale of Two Terrains","secondary_creator":"NASA/Johns Hopkins University Applied Physics Laboratory/Carnegie Institution of Washington","description":"A Tale of Two Terrains"}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16674/PIA16674~thumb.jpg","rel":"preview","render":"image"}]},{"href":"https://images-assets.nasa.gov/image/PIA16676/collection.json","data":[{"description":"Ring of Fire","title":"Ring of Fire","nasa_id":"PIA16676","date_created":"2013-01-09T19:00:52Z","keywords":["Mercury","MESSENGER"],"media_type":"image"}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16676/PIA16676~thumb.jpg","rel":"preview","render":"image"}]},{"href":"https://images-assets.nasa.gov/image/PIA16677/collection.json","data":[{"center":"JPL","title":"It All Over Now, Baby Blue","nasa_id":"PIA16677","date_created":"2013-01-10T23:27:52Z","keywords":["Mercury","MESSENGER"],"media_type":"image","description_508":"It All Over Now, Baby Blue","secondary_creator":"NASA/Johns Hopkins University Applied Physics Laboratory/Carnegie Institution of Washington","description":"It All Over Now, Baby Blue"}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16677/PIA16677~thumb.jpg","rel":"preview","render":"image"}]},{"href":"https://images-assets.nasa.gov/image/PIA16680/collection.json","data":[{"center":"JPL","title":"Betelgeuse Enigmatic Environment","nasa_id":"PIA16680","date_created":"2013-01-22T22:28:03Z","keywords":["Herschel Space Observatory"],"media_type":"image","description_508":"The red supergiant star Betelgeuse center is surrounded by a clumpy envelope of material in its immediate vicinity in this view from the Herschel Space Observatory.","secondary_creator":"ESA/Herschel/PACS/L. Decin et al.","description":"The red supergiant star Betelgeuse center is surrounded by a clumpy envelope of material in its immediate vicinity in this view from the Herschel Space Observatory."}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16680/PIA16680~thumb.jpg","rel":"preview","render":"image"}]},{"href":"https://images-assets.nasa.gov/image/PIA16686/collection.json","data":[{"center":"JPL","title":"Investigating Curiosity Drill Area","nasa_id":"PIA16686","date_created":"2013-02-09T15:58:01Z","keywords":["Mars","Mars Science Laboratory MSL"],"media_type":"image","description_508":"NASA Mars rover Curiosity used its Mast Camera Mastcam to take the images combined into this mosaic of the drill area, called John Klein, where the rover ultimately performed its first sample drilling.","secondary_creator":"NASA/JPL-Caltech/MSSS","description":"NASA Mars rover Curiosity used its Mast Camera Mastcam to take the images combined into this mosaic of the drill area, called John Klein, where the rover ultimately performed its first sample drilling."}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16686/PIA16686~thumb.jpg","rel":"preview","render":"image"}]},{"href":"https://images-assets.nasa.gov/image/PIA16690/collection.json","data":[{"center":"JPL","title":"Protostar LRLL 54361","nasa_id":"PIA16690","date_created":"2013-02-07T18:14:17Z","keywords":["Hubble Space Telescope,Spitzer Space Telescope"],"media_type":"image","description_508":"NASA Spitzer and Hubble space telescopes have teamed up to uncover a mysterious infant star that behaves like a police strobe light.","secondary_creator":"NASA/ESA/JPL-Caltech/STScI/NOAO/University of Arizona/ Max Planck Institute for Astronomy/University of Massachusetts, Amherst","description":"NASA Spitzer and Hubble space telescopes have teamed up to uncover a mysterious infant star that behaves like a police strobe light."}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16690/PIA16690~thumb.jpg","rel":"preview","render":"image"}]},{"href":"https://images-assets.nasa.gov/image/PIA16691/collection.json","data":[{"center":"JPL","title":"Preparing Samples on Mars","nasa_id":"PIA16691","date_created":"2013-02-20T19:55:06Z","keywords":["Mars","Mars Science Laboratory MSL"],"media_type":"image","description_508":"This figure shows the location of CHIMRA on the turret of NASA Curiosity rover, together with a cutaway view of the device. CHIMRA processes samples from the rover scoop or drill and delivers them to science instruments.","secondary_creator":"NASA/JPL-Caltech","description":"This figure shows the location of CHIMRA on the turret of NASA Curiosity rover, together with a cutaway view of the device. CHIMRA processes samples from the rover scoop or drill and delivers them to science instruments."}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16691/PIA16691~thumb.jpg","rel":"preview","render":"image"}]},{"href":"https://images-assets.nasa.gov/image/PIA16696/collection.json","data":[{"center":"JPL","title":"How to Measure the Spin of a Black Hole Artist Concept","nasa_id":"PIA16696","date_created":"2013-02-27T17:50:02Z","keywords":["NuSTAR,XMM-Newton"],"media_type":"image","description_508":"Black holes are tremendous objects whose immense gravity can distort and twist space-time, the fabric that shapes our universe as this chart from NASA NuSTAR and ESA XMM-Newton telescope illustrates.","secondary_creator":"NASA/JPL-Caltech","description":"Black holes are tremendous objects whose immense gravity can distort and twist space-time, the fabric that shapes our universe as this chart from NASA NuSTAR and ESA XMM-Newton telescope illustrates."}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16696/PIA16696~thumb.jpg","rel":"preview","render":"image"}]},{"href":"https://images-assets.nasa.gov/image/PIA16700/collection.json","data":[{"center":"JPL","title":"Wide View of Shaler Outcrop, Sol 120","nasa_id":"PIA16700","date_created":"2013-01-15T18:18:33Z","keywords":["Mars","Mars Science Laboratory MSL"],"media_type":"image","description_508":"The Shaler outcrop is dramatically layered, as seen in this mosaic of telephoto images from the right Mast Camera Mastcam on NASA Mars rover Curiosity.","secondary_creator":"NASA/JPL-Caltech/MSSS","description":"The Shaler outcrop is dramatically layered, as seen in this mosaic of telephoto images from the right Mast Camera Mastcam on NASA Mars rover Curiosity."}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16700/PIA16700~thumb.jpg","rel":"preview","render":"image"}]},{"href":"https://images-assets.nasa.gov/image/PIA16703/collection.json","data":[{"center":"JPL","title":"Matijevic Hill Panorama for Rover Ninth Anniversary","nasa_id":"PIA16703","date_created":"2013-01-22T21:30:01Z","keywords":["Mars","Mars Exploration Rover MER"],"media_type":"image","description_508":"NASA rover Opportunity takes a look at Matijevic Hill, an area within the Cape York segment of Endeavour rim where clay minerals have been detected from orbit.","secondary_creator":"NASA/JPL-Caltech/Cornell/Arizona State Univ.","description":"NASA rover Opportunity takes a look at Matijevic Hill, an area within the Cape York segment of Endeavour rim where clay minerals have been detected from orbit."}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16703/PIA16703~thumb.jpg","rel":"preview","render":"image"}]},{"href":"https://images-assets.nasa.gov/image/PIA16704/collection.json","data":[{"center":"JPL","title":"Matijevic Hill Panorama for Rover Ninth Anniversary False Color","nasa_id":"PIA16704","date_created":"2013-01-22T21:30:02Z","keywords":["Mars","Mars Exploration Rover MER"],"media_type":"image","description_508":"This false color image from NASA rover Opportunity takes a look at Matijevic Hill, an area within the Cape York segment of Endeavour rim where clay minerals have been detected from orbit.","secondary_creator":"NASA/JPL-Caltech/Cornell/Arizona State Univ.","description":"This false color image from NASA rover Opportunity takes a look at Matijevic Hill, an area within the Cape York segment of Endeavour rim where clay minerals have been detected from orbit."}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16704/PIA16704~thumb.jpg","rel":"preview","render":"image"}]},{"href":"https://images-assets.nasa.gov/image/PIA16705/collection.json","data":[{"center":"JPL","title":"Veins in Sheepbed Outcrop","nasa_id":"PIA16705","date_created":"2013-01-15T18:18:36Z","keywords":["Mars","Mars Science Laboratory MSL"],"media_type":"image","description_508":"This image of an outcrop at the Sheepbed locality, taken by NASA Curiosity Mars rover shows well-defined veins filled with whitish minerals, interpreted as calcium sulfate.","secondary_creator":"NASA/JPL-Caltech/MSSS","description":"This image of an outcrop at the Sheepbed locality, taken by NASA Curiosity Mars rover shows well-defined veins filled with whitish minerals, interpreted as calcium sulfate."}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16705/PIA16705~thumb.jpg","rel":"preview","render":"image"}]},{"href":"https://images-assets.nasa.gov/image/PIA16706/collection.json","data":[{"center":"JPL","title":"Spherules in Yellowknife Bay","nasa_id":"PIA16706","date_created":"2013-01-15T18:18:37Z","keywords":["Mars","Mars Science Laboratory MSL"],"media_type":"image","description_508":"This image from the right Mast Camera Mastcam of NASA Curiosity Mars rover shows roughly spherical features.","secondary_creator":"NASA/JPL-Caltech/MSSS","description":"This image from the right Mast Camera Mastcam of NASA Curiosity Mars rover shows roughly spherical features."}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16706/PIA16706~thumb.jpg","rel":"preview","render":"image"}]},{"href":"https://images-assets.nasa.gov/image/PIA16709/collection.json","data":[{"center":"JPL","title":"Matijevic Hill Panorama for Rover Ninth Anniversary Stereo","nasa_id":"PIA16709","date_created":"2013-01-22T21:30:03Z","keywords":["Mars","Mars Exploration Rover MER"],"media_type":"image","description_508":"This 3-D image from NASA rover Opportunity takes a look at Matijevic Hill, an area within the Cape York segment of Endeavour rim where clay minerals have been detected from orbit.","secondary_creator":"NASA/JPL-Caltech/Cornell/Arizona State Univ.","description":"This 3-D image from NASA rover Opportunity takes a look at Matijevic Hill, an area within the Cape York segment of Endeavour rim where clay minerals have been detected from orbit."}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16709/PIA16709~thumb.jpg","rel":"preview","render":"image"}]},{"href":"https://images-assets.nasa.gov/image/PIA16719/collection.json","data":[{"center":"JPL","title":"Drill Bit Tip on Mars Rover Curiosity, Head-on View","nasa_id":"PIA16719","date_created":"2013-02-04T21:10:40Z","keywords":["Mars","Mars Science Laboratory MSL"],"media_type":"image","description_508":"This head-on view shows the tip of the drill bit on NASA Mars rover Curiosity. The view merges two exposures taken by the remote micro-imager in the rover ChemCam instrument at different focus settings.","secondary_creator":"NASA/JPL-Caltech/LANL/CNES/IRAP/LPGNantes/CNRS","description":"This head-on view shows the tip of the drill bit on NASA Mars rover Curiosity. The view merges two exposures taken by the remote micro-imager in the rover ChemCam instrument at different focus settings."}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16719/PIA16719~thumb.jpg","rel":"preview","render":"image"}]},{"href":"https://images-assets.nasa.gov/image/PIA16720/collection.json","data":[{"center":"JPL","title":"Northern Storm in Full Force","nasa_id":"PIA16720","date_created":"2013-01-31T17:55:02Z","keywords":["Saturn","Cassini-Huygens"],"media_type":"image","description_508":"This mosaic of images from NASA Cassini spacecraft shows the trail of a great northern storm on Saturn raging in full force. The contrast in the images has been enhanced to make the turbulent parts of the storm in white stand out.","secondary_creator":"NASA/JPL-Caltech/SSI/Hampton University","description":"This mosaic of images from NASA Cassini spacecraft shows the trail of a great northern storm on Saturn raging in full force. The contrast in the images has been enhanced to make the turbulent parts of the storm in white stand out."}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16720/PIA16720~thumb.jpg","rel":"preview","render":"image"}]},{"href":"https://images-assets.nasa.gov/image/PIA16721/collection.json","data":[{"center":"JPL","title":"First Chapter of the Northern Storm","nasa_id":"PIA16721","date_created":"2013-01-31T17:55:03Z","keywords":["Saturn","Cassini-Huygens"],"media_type":"image","description_508":"This mosaic of false-color images from NASA Cassini spacecraft shows what a giant storm in Saturn northern hemisphere looked like about a month after it began. The bright head of the storm is on the left.","secondary_creator":"NASA/JPL-Caltech/SSI/Hampton University","description":"This mosaic of false-color images from NASA Cassini spacecraft shows what a giant storm in Saturn northern hemisphere looked like about a month after it began. The bright head of the storm is on the left."}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16721/PIA16721~thumb.jpg","rel":"preview","render":"image"}]},{"href":"https://images-assets.nasa.gov/image/PIA16729/collection.json","data":[{"center":"JPL","title":"First Curiosity Drilling Sample in the Scoop","nasa_id":"PIA16729","date_created":"2013-02-20T19:55:15Z","keywords":["Mars","Mars Science Laboratory MSL"],"media_type":"image","description_508":"NASA Curiosity rover shows the first sample of powdered rock extracted by the rover drill. The image was taken after the sample was transferred from the drill to the rover scoop.","secondary_creator":"NASA/JPL-Caltech/MSSS","description":"NASA Curiosity rover shows the first sample of powdered rock extracted by the rover drill. The image was taken after the sample was transferred from the drill to the rover scoop."}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16729/PIA16729~thumb.jpg","rel":"preview","render":"image"}]},{"href":"https://images-assets.nasa.gov/image/PIA16734/collection.json","data":[{"center":"JPL","title":"Magnetic Field Line Pile-Up Artist Concept","nasa_id":"PIA16734","date_created":"2013-02-12T21:20:40Z","keywords":["Sun","Voyager"],"media_type":"image","description_508":"This artist concept shows NASA Voyager 1 spacecraft in a new region at the edge of our solar system where the magnetic field lines generated by our sun are piling up and intensifying.","secondary_creator":"NASA/JPL-Caltech","description":"This artist concept shows NASA Voyager 1 spacecraft in a new region at the edge of our solar system where the magnetic field lines generated by our sun are piling up and intensifying."}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16734/PIA16734~thumb.jpg","rel":"preview","render":"image"}]},{"href":"https://images-assets.nasa.gov/image/PIA16738/collection.json","data":[{"center":"JPL","title":"Outbound Near-Earth Asteroid, as Seen from Spain","nasa_id":"PIA16738","date_created":"2013-02-15T23:32:22Z","keywords":["Asteroid","Astronomical Observatory of Mallorca"],"media_type":"image","description_508":"This set of images from the La Sagra Sky Survey, operated by the Astronomical Observatory of Mallorca in Spain, shows the passage of asteroid 2012 DA14 shortly after its closest, and safe, approach to Earth.","secondary_creator":"Courtesy of La Sagra Sky Survey","description":"This set of images from the La Sagra Sky Survey, operated by the Astronomical Observatory of Mallorca in Spain, shows the passage of asteroid 2012 DA14 shortly after its closest, and safe, approach to Earth."}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16738/PIA16738~thumb.jpg","rel":"preview","render":"image"}]},{"href":"https://images-assets.nasa.gov/image/PIA16739/collection.json","data":[{"center":"JPL","title":"Cassini at Saturn Bow Shock Artist Concept","nasa_id":"PIA16739","date_created":"2013-02-19T21:10:01Z","keywords":["Saturn","Cassini-Huygens"],"media_type":"image","description_508":"This artist impression by the European Space Agency shows NASA Cassini spacecraft exploring the magnetic environment of Saturn. The image is not to scale.","secondary_creator":"ESA","description":"This artist impression by the European Space Agency shows NASA Cassini spacecraft exploring the magnetic environment of Saturn. The image is not to scale."}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16739/PIA16739~thumb.jpg","rel":"preview","render":"image"}]},{"href":"https://images-assets.nasa.gov/image/PIA16740/collection.json","data":[{"center":"JPL","title":"Raditladi Rings","nasa_id":"PIA16740","date_created":"2013-01-14T22:07:21Z","keywords":["Mercury","MESSENGER"],"media_type":"image","description_508":"Raditladi Rings","secondary_creator":"NASA/Johns Hopkins University Applied Physics Laboratory/Carnegie Institution of Washington","description":"Raditladi Rings"}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16740/PIA16740~thumb.jpg","rel":"preview","render":"image"}]},{"href":"https://images-assets.nasa.gov/image/PIA16742/collection.json","data":[{"center":"JPL","title":"Fracture","nasa_id":"PIA16742","date_created":"2013-01-15T16:30:14Z","keywords":["Mars","2001 Mars Odyssey"],"media_type":"image","description_508":"This image from NASA 2001 Mars Odyssey spacecraft shows a small portion of a east/west trending fracture in Thaumasia Planum.","secondary_creator":"NASA/JPL/ASU","description":"This image from NASA 2001 Mars Odyssey spacecraft shows a small portion of a east/west trending fracture in Thaumasia Planum."}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16742/PIA16742~thumb.jpg","rel":"preview","render":"image"}]},{"href":"https://images-assets.nasa.gov/image/PIA16746/collection.json","data":[{"center":"JPL","title":"Dittaino Valles","nasa_id":"PIA16746","date_created":"2013-01-21T16:30:14Z","keywords":["Mars","2001 Mars Odyssey"],"media_type":"image","description_508":"This image from NASA 2001 Mars Odyssey spacecraft shows a portion of Dittaino Valles.","secondary_creator":"NASA/JPL/ASU","description":"This image from NASA 2001 Mars Odyssey spacecraft shows a portion of Dittaino Valles."}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16746/PIA16746~thumb.jpg","rel":"preview","render":"image"}]},{"href":"https://images-assets.nasa.gov/image/PIA16752/collection.json","data":[{"center":"JPL","title":"Oblique Origins","keywords":["Mercury","MESSENGER"],"nasa_id":"PIA16752","date_created":"2013-01-15T19:00:01Z","media_type":"image","description_508":"Oblique Origins","secondary_creator":"NASA/Johns Hopkins University Applied Physics Laboratory/Carnegie Institution of Washington","description":"Oblique Origins"}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16752/PIA16752~thumb.jpg","rel":"preview","render":"image"}]},{"href":"https://images-assets.nasa.gov/image/PIA16755/collection.json","data":[{"center":"JPL","title":"A Toast to Dear Old Poe","nasa_id":"PIA16755","date_created":"2013-01-18T19:00:01Z","keywords":["Mercury","MESSENGER"],"media_type":"image","description_508":"A Toast to Dear Old Poe","secondary_creator":"NASA/Johns Hopkins University Applied Physics Laboratory/Carnegie Institution of Washington","description":"A Toast to Dear Old Poe"}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16755/PIA16755~thumb.jpg","rel":"preview","render":"image"}]},{"href":"https://images-assets.nasa.gov/image/PIA16758/collection.json","data":[{"center":"JPL","title":"Over the Hills and Far Away","nasa_id":"PIA16758","date_created":"2013-01-23T19:00:01Z","keywords":["Mercury","MESSENGER"],"media_type":"image","description_508":"Over the Hills and Far Away","secondary_creator":"NASA/Johns Hopkins University Applied Physics Laboratory/Carnegie Institution of Washington","description":"Over the Hills and Far Away"}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16758/PIA16758~thumb.jpg","rel":"preview","render":"image"}]},{"href":"https://images-assets.nasa.gov/image/PIA16762/collection.json","data":[{"center":"JPL","title":"Before-and-After Blink of Curiosity Mini Drill into Mars Rock","nasa_id":"PIA16762","date_created":"2013-02-07T20:39:17Z","keywords":["Mars","Mars Science Laboratory MSL"],"media_type":"image","description_508":"A blink pair of images taken before and after NASA Curiosity performed a mini drill test on a Martian rock shows changes resulting from that activity.","secondary_creator":"NASA/JPL-Caltech/MSSS","description":"A blink pair of images taken before and after NASA Curiosity performed a mini drill test on a Martian rock shows changes resulting from that activity."}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16762/PIA16762~thumb.jpg","rel":"preview","render":"image"}]},{"href":"https://images-assets.nasa.gov/image/PIA16764/collection.json","data":[{"center":"JPL","title":"Curiosity Rover Self Portrait at John Klein Drilling Site, Cropped","nasa_id":"PIA16764","date_created":"2013-02-07T23:23:45Z","keywords":["Mars","Mars Science Laboratory MSL"],"media_type":"image","description_508":"This rectangular version of a self-portrait of NASA Mars rover Curiosity combines dozens of exposures taken by the rover Mars Hand Lens Imager MAHLI during the 177th Martian day, or sol, of Curiosity work on Mars Feb. 3, 2013.","secondary_creator":"NASA/JPL-Caltech/MSSS","description":"This rectangular version of a self-portrait of NASA Mars rover Curiosity combines dozens of exposures taken by the rover Mars Hand Lens Imager MAHLI during the 177th Martian day, or sol, of Curiosity work on Mars Feb. 3, 2013."}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16764/PIA16764~thumb.jpg","rel":"preview","render":"image"}]},{"href":"https://images-assets.nasa.gov/image/PIA16765/collection.json","data":[{"center":"JPL","title":"Laser Hits on Martian Drill Tailings","nasa_id":"PIA16765","date_created":"2013-02-13T23:33:08Z","keywords":["Mars","Mars Science Laboratory MSL"],"media_type":"image","description_508":"A day after NASA Mars rover Curiosity drilled the first sample-collection hole into a rock on Mars, the rover Chemistry and Camera ChemCam instrument shot laser pulses into the fresh rock powder that the drilling generated.","secondary_creator":"NASA/JPL-Caltech/LANL/IRAP/CNES/LPGNantes/IAS/CNRS/MSSS","description":"A day after NASA Mars rover Curiosity drilled the first sample-collection hole into a rock on Mars, the rover Chemistry and Camera ChemCam instrument shot laser pulses into the fresh rock powder that the drilling generated."}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16765/PIA16765~thumb.jpg","rel":"preview","render":"image"}]},{"href":"https://images-assets.nasa.gov/image/PIA16767/collection.json","data":[{"center":"JPL","title":"Visualization of Buried Marte Vallis Channels","nasa_id":"PIA16767","date_created":"2013-03-07T18:50:35Z","keywords":["Mars","Mars Reconnaissance Orbiter MRO"],"media_type":"image","description_508":"This illustration schematically shows where the Shallow Radar instrument on NASA Mars Reconnaissance Orbiter detected flood channels that had been buried by lava flows in the Elysium Planitia region of Mars.","secondary_creator":"NASA/JPL-Caltech/Sapienza University of Rome/Smithsonian Institution/USGS","description":"This illustration schematically shows where the Shallow Radar instrument on NASA Mars Reconnaissance Orbiter detected flood channels that had been buried by lava flows in the Elysium Planitia region of Mars."}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16767/PIA16767~thumb.jpg","rel":"preview","render":"image"}]},{"href":"https://images-assets.nasa.gov/image/PIA16768/collection.json","data":[{"center":"JPL","title":"Mount Sharp Panorama in White-Balanced Colors","nasa_id":"PIA16768","date_created":"2013-03-15T20:25:01Z","keywords":["Mars","Mars Science Laboratory MSL"],"media_type":"image","description_508":"This mosaic of images from the Mast Camera Mastcam on NASA Mars rover Curiosity shows Mount Sharp in a white-balanced color adjustment that makes the sky look overly blue but shows the terrain as if under Earth-like lighting.","secondary_creator":"NASA/JPL-Caltech/MSSS","description":"This mosaic of images from the Mast Camera Mastcam on NASA Mars rover Curiosity shows Mount Sharp in a white-balanced color adjustment that makes the sky look overly blue but shows the terrain as if under Earth-like lighting."}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16768/PIA16768~thumb.jpg","rel":"preview","render":"image"}]},{"href":"https://images-assets.nasa.gov/image/PIA16769/collection.json","data":[{"center":"JPL","title":"Mount Sharp Panorama in Raw Colors","nasa_id":"PIA16769","date_created":"2013-03-15T20:25:02Z","keywords":["Mars","Mars Science Laboratory MSL"],"media_type":"image","description_508":"This mosaic of images from the Mastcam onboard NASA Mars rover Curiosity shows Mount Sharp in raw color. Raw color shows the scene colors as they would look in a typical smart-phone camera photo, before any adjustment.","secondary_creator":"NASA/JPL-Caltech/MSSS","description":"This mosaic of images from the Mastcam onboard NASA Mars rover Curiosity shows Mount Sharp in raw color. Raw color shows the scene colors as they would look in a typical smart-phone camera photo, before any adjustment."}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16769/PIA16769~thumb.jpg","rel":"preview","render":"image"}]},{"href":"https://images-assets.nasa.gov/image/PIA16770/collection.json","data":[{"center":"JPL","title":"Crazy Kertesz","nasa_id":"PIA16770","date_created":"2013-01-25T19:00:38Z","keywords":["Mercury","MESSENGER"],"media_type":"image","description_508":"Crazy Kertesz","secondary_creator":"NASA/Johns Hopkins University Applied Physics Laboratory/Carnegie Institution of Washington","description":"Crazy Kertesz"}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16770/PIA16770~thumb.jpg","rel":"preview","render":"image"}]},{"href":"https://images-assets.nasa.gov/image/PIA16775/collection.json","data":[{"center":"JPL","title":"Eject! Eject! Eject!","nasa_id":"PIA16775","date_created":"2013-01-30T21:31:50Z","keywords":["Mercury","MESSENGER"],"media_type":"image","description_508":"Eject! Eject! Eject!","secondary_creator":"NASA/Johns Hopkins University Applied Physics Laboratory/Carnegie Institution of Washington","description":"Eject! Eject! Eject!"}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16775/PIA16775~thumb.jpg","rel":"preview","render":"image"}]},{"href":"https://images-assets.nasa.gov/image/PIA16780/collection.json","data":[{"center":"JPL","title":"Holden Crater Dunes","nasa_id":"PIA16780","date_created":"2013-01-30T16:30:40Z","keywords":["Mars","2001 Mars Odyssey"],"media_type":"image","description_508":"The small dark dunes in this image captured by NASA 2001 Mars Odyssey spacecraft are located on the floor of Holden Crater.","secondary_creator":"NASA/JPL/ASU","description":"The small dark dunes in this image captured by NASA 2001 Mars Odyssey spacecraft are located on the floor of Holden Crater."}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16780/PIA16780~thumb.jpg","rel":"preview","render":"image"}]},{"href":"https://images-assets.nasa.gov/image/PIA16785/collection.json","data":[{"center":"JPL","title":"Off-Central Peaks","nasa_id":"PIA16785","date_created":"2013-02-05T19:00:00Z","keywords":["Mercury","MESSENGER"],"media_type":"image","description_508":"Off-Central Peaks","secondary_creator":"NASA/Johns Hopkins University Applied Physics Laboratory/Carnegie Institution of Washington","description":"Off-Central Peaks"}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16785/PIA16785~thumb.jpg","rel":"preview","render":"image"}]},{"href":"https://images-assets.nasa.gov/image/PIA16798/collection.json","data":[{"center":"JPL","title":"Mast Camera and Its Calibration Target on Curiosity Rover","nasa_id":"PIA16798","date_created":"2013-03-18T17:08:09Z","keywords":["Mars","Mars Science Laboratory MSL"],"media_type":"image","description_508":"This set of images illustrates the twin cameras of the Mastcam instrument on NASA Curiosity Mars rover upper left, the Mastcam calibration target lower center, and the locations of the cameras and target on the rover.","secondary_creator":"NASA/JPL-Caltech/MSSS/ASU","description":"This set of images illustrates the twin cameras of the Mastcam instrument on NASA Curiosity Mars rover upper left, the Mastcam calibration target lower center, and the locations of the cameras and target on the rover."}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16798/PIA16798~thumb.jpg","rel":"preview","render":"image"}]},{"href":"https://images-assets.nasa.gov/image/PIA16800/collection.json","data":[{"center":"JPL","title":"Raw, Natural and White-Balanced Views of Martian Terrain","nasa_id":"PIA16800","date_created":"2013-03-18T17:08:11Z","keywords":["Mars","Mars Science Laboratory MSL"],"media_type":"image","description_508":"These three versions of the same image taken by the Mast Camera Mastcam on NASA Mars rover Curiosity illustrate different choices that scientists can make in presenting the colors recorded by the camera.","secondary_creator":"NASA/JPL-Caltech/MSSS","description":"These three versions of the same image taken by the Mast Camera Mastcam on NASA Mars rover Curiosity illustrate different choices that scientists can make in presenting the colors recorded by the camera."}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16800/PIA16800~thumb.jpg","rel":"preview","render":"image"}]},{"href":"https://images-assets.nasa.gov/image/PIA16801/collection.json","data":[{"center":"JPL","title":"Using Curiosity Mast Camera to View Scene in Natural Color","nasa_id":"PIA16801","date_created":"2013-03-18T17:08:12Z","keywords":["Mars","Mars Science Laboratory MSL"],"media_type":"image","description_508":"NASA rover Curiosity uses its calibration target for the Mastcam to approximate colors we would see on Mars, using the known colors of materials on the target.","secondary_creator":"NASA/JPL-Caltech/MSSS/ASU","description":"NASA rover Curiosity uses its calibration target for the Mastcam to approximate colors we would see on Mars, using the known colors of materials on the target."}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16801/PIA16801~thumb.jpg","rel":"preview","render":"image"}]},{"href":"https://images-assets.nasa.gov/image/PIA16803/collection.json","data":[{"center":"JPL","title":"Bluish-Black Rock with White Crystals on Mars","nasa_id":"PIA16803","date_created":"2013-03-18T17:08:14Z","keywords":["Mars","Mars Science Laboratory MSL"],"media_type":"image","description_508":"The Mast Camera Mastcam on NASA Mars rover Curiosity showed researchers interesting color and patterns in this unnamed rock.","secondary_creator":"NASA/JPL-Caltech/MSSS","description":"The Mast Camera Mastcam on NASA Mars rover Curiosity showed researchers interesting color and patterns in this unnamed rock."}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16803/PIA16803~thumb.jpg","rel":"preview","render":"image"}]},{"href":"https://images-assets.nasa.gov/image/PIA16804/collection.json","data":[{"center":"JPL","title":"Bluish Color in Broken Rock in Yellowknife Bay","nasa_id":"PIA16804","date_created":"2013-03-18T17:08:15Z","keywords":["Mars","Mars Science Laboratory MSL"],"media_type":"image","description_508":"The Mast Camera Mastcam on NASA Mars rover Curiosity showed researchers interesting internal color in this rock called Sutton_Inlier, which was broken by the rover driving over it.","secondary_creator":"NASA/JPL-Caltech/MSSS/ASU","description":"The Mast Camera Mastcam on NASA Mars rover Curiosity showed researchers interesting internal color in this rock called Sutton_Inlier, which was broken by the rover driving over it."}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16804/PIA16804~thumb.jpg","rel":"preview","render":"image"}]},{"href":"https://images-assets.nasa.gov/image/PIA16811/collection.json","data":[{"center":"JPL","title":"Geometry of Mars Solar Conjunction","nasa_id":"PIA16811","date_created":"2013-03-20T18:56:20Z","media_type":"image","description_508":"This diagram illustrates the positions of Mars, Earth and the sun during a period that occurs approximately every 26 months, when Mars passes almost directly behind the sun from Earth perspective.","secondary_creator":"NASA/JPL-Caltech","description":"This diagram illustrates the positions of Mars, Earth and the sun during a period that occurs approximately every 26 months, when Mars passes almost directly behind the sun from Earth perspective."}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16811/PIA16811~thumb.jpg","rel":"preview","render":"image"}]},{"href":"https://images-assets.nasa.gov/image/PIA16815/collection.json","data":[{"center":"JPL","title":"Dust from Mars Drilling: Tailings and Discard Piles","nasa_id":"PIA16815","date_created":"2013-04-08T14:45:01Z","keywords":["Mars","Mars Science Laboratory MSL"],"media_type":"image","description_508":"This image shows the first holes into rock drilled by NASA Mars rover Curiosity, with drill tailings around the holes plus piles of powdered rock collected from the deeper hole and later discarded.","secondary_creator":"NASA/JPL-Caltech/MSSS","description":"This image shows the first holes into rock drilled by NASA Mars rover Curiosity, with drill tailings around the holes plus piles of powdered rock collected from the deeper hole and later discarded."}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16815/PIA16815~thumb.jpg","rel":"preview","render":"image"}]},{"href":"https://images-assets.nasa.gov/image/PIA16816/collection.json","data":[{"center":"JPL","title":"The SAM Suite","nasa_id":"PIA16816","date_created":"2013-04-08T14:45:02Z","keywords":["Mars","Mars Science Laboratory MSL"],"media_type":"image","description_508":"This illustration shows the instruments and subsystems of the Sample Analysis at Mars SAM suite on the Curiosity Rover of NASA Mars Science Laboratory Project. SAM analyzes the gases in the Martian atmosphere.","secondary_creator":"NASA/JPL-Caltech","description":"This illustration shows the instruments and subsystems of the Sample Analysis at Mars SAM suite on the Curiosity Rover of NASA Mars Science Laboratory Project. SAM analyzes the gases in the Martian atmosphere."}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16816/PIA16816~thumb.jpg","rel":"preview","render":"image"}]},{"href":"https://images-assets.nasa.gov/image/PIA16818/collection.json","data":[{"center":"JPL","title":"Argon Isotopes Provide Robust Signature of Atmospheric Loss","nasa_id":"PIA16818","date_created":"2013-04-08T14:45:04Z","keywords":["Mars","Mars Science Laboratory MSL"],"media_type":"image","description_508":"This image, made by the quadrupole mass spectrometer in the SAM suite of instruments in NASA Curiosity Mars rover. shows the ratio of the argon isotope argon-36 to the heavier argon isotope argon-38, in various measurements.","secondary_creator":"NASA/JPL-Caltech","description":"This image, made by the quadrupole mass spectrometer in the SAM suite of instruments in NASA Curiosity Mars rover. shows the ratio of the argon isotope argon-36 to the heavier argon isotope argon-38, in various measurements."}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16818/PIA16818~thumb.jpg","rel":"preview","render":"image"}]},{"href":"https://images-assets.nasa.gov/image/PIA16819/collection.json","data":[{"center":"JPL","title":"Curiosity ChemCam Removes Dust","nasa_id":"PIA16819","date_created":"2013-04-08T14:45:05Z","keywords":["Mars","Mars Science Laboratory MSL"],"media_type":"image","description_508":"This pair of images taken a few minutes apart show how laser firing by NASA Mars rover Curiosity removes dust from the surface of a rock. The images were taken by the remote micro-imager camera in the laser-firing Chemistry and Camera ChemCam.","secondary_creator":"NASA/JPL-Caltech/LANL/CNES/IRAP/LPGNantes/CNRS/IAS","description":"This pair of images taken a few minutes apart show how laser firing by NASA Mars rover Curiosity removes dust from the surface of a rock. The images were taken by the remote micro-imager camera in the laser-firing Chemistry and Camera ChemCam."}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16819/PIA16819~thumb.jpg","rel":"preview","render":"image"}]},{"href":"https://images-assets.nasa.gov/image/PIA16821/collection.json","data":[{"center":"JPL","title":"Simulation of Curiosity Rover Drilling into Martian Bedrock","nasa_id":"PIA16821","date_created":"2009-10-13T18:12:01Z","keywords":["Mars Science Laboratory MSL"],"media_type":"image","secondary_creator":"NASA/JPL-Caltech","description":"This animation depicts NASA Mars rover Curiosity drilling a hole to collect a rock-powder sample at a target site called John"}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16821/PIA16821~thumb.jpg","rel":"preview","render":"image"}]},{"href":"https://images-assets.nasa.gov/image/PIA16822/collection.json","data":[{"center":"JPL","title":"Ancient Heritage","nasa_id":"PIA16822","date_created":"2013-02-11T19:00:47Z","keywords":["Mercury","MESSENGER"],"media_type":"image","description_508":"Ancient Heritage","secondary_creator":"NASA/Johns Hopkins University Applied Physics Laboratory/Carnegie Institution of Washington","description":"Ancient Heritage"}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16822/PIA16822~thumb.jpg","rel":"preview","render":"image"}]},{"href":"https://images-assets.nasa.gov/image/PIA16824/collection.json","data":[{"center":"JPL","title":"NASA Satellite Captures New Russian Volcanic Eruption","nasa_id":"PIA16824","date_created":"2013-02-15T18:11:29Z","keywords":["Earth","Terra"],"media_type":"image","description_508":"NASA Terra spacecraft reveals the still-active lava flows in the snowy winter landscape of Plosky Tolbachik volcano, which erupted for the first time in 35 years on Nov. 27, 2012, in Russia far eastern Kamchatka Peninsula.","secondary_creator":"NASA/GSFC/METI/ERSDAC/JAROS, and U.S./Japan ASTER Science Team","description":"NASA Terra spacecraft reveals the still-active lava flows in the snowy winter landscape of Plosky Tolbachik volcano, which erupted for the first time in 35 years on Nov. 27, 2012, in Russia far eastern Kamchatka Peninsula."}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16824/PIA16824~thumb.jpg","rel":"preview","render":"image"}]},{"href":"https://images-assets.nasa.gov/image/PIA16825/collection.json","data":[{"center":"JPL","title":"Magnetic Fields and Bow Shocks Illustration","nasa_id":"PIA16825","date_created":"2013-02-19T21:10:02Z","keywords":["Saturn","Cassini-Huygens"],"media_type":"image","description_508":"This illustration shows quasi-parallel top and quasi-perpendicular bottom magnetic field conditions at a planetary bow shock. Bow shocks are shockwaves created when the solar wind blows on a planet magnetic field.","secondary_creator":"ESA","description":"This illustration shows quasi-parallel top and quasi-perpendicular bottom magnetic field conditions at a planetary bow shock. Bow shocks are shockwaves created when the solar wind blows on a planet magnetic field."}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16825/PIA16825~thumb.jpg","rel":"preview","render":"image"}]},{"href":"https://images-assets.nasa.gov/image/PIA16826/collection.json","data":[{"center":"JPL","title":"Taste of the Ocean on Europa Surface Artist Concept","nasa_id":"PIA16826","date_created":"2013-03-05T16:53:27Z","media_type":"image","description_508":"Based on new evidence from Jupiter moon Europa, astronomers hypothesize that chloride salts bubble up from its global liquid ocean and reach the frozen surface where they are bombarded with sulfur from volcanoes on Jupiter innermost large moon, Io.","secondary_creator":"NASA/JPL-Caltech","description":"Based on new evidence from Jupiter moon Europa, astronomers hypothesize that chloride salts bubble up from its global liquid ocean and reach the frozen surface where they are bombarded with sulfur from volcanoes on Jupiter innermost large moon, Io."}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16826/PIA16826~thumb.jpg","rel":"preview","render":"image"}]},{"href":"https://images-assets.nasa.gov/image/PIA16827/collection.json","data":[{"center":"JPL","title":"Repeated Flybys Yield a Pole-to-Pole View of Europa","nasa_id":"PIA16827","date_created":"2013-03-05T16:53:28Z","keywords":["Europa","Galileo"],"media_type":"image","description_508":"This view of Jupiter moon Europa features several regional-resolution mosaics overlaid on a lower resolution global view for context. The regional views were obtained during several different flybys of the moon by NASA Galileo mission.","secondary_creator":"NASA/JPL-Caltech/University of Arizona","description":"This view of Jupiter moon Europa features several regional-resolution mosaics overlaid on a lower resolution global view for context. The regional views were obtained during several different flybys of the moon by NASA Galileo mission."}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16827/PIA16827~thumb.jpg","rel":"preview","render":"image"}]},{"href":"https://images-assets.nasa.gov/image/PIA16830/collection.json","data":[{"center":"JPL","title":"Minerals at Rocknest and John Klein","nasa_id":"PIA16830","date_created":"2013-03-12T17:00:01Z","keywords":["Mars","Mars Science Laboratory MSL"],"media_type":"image","description_508":"These images, made from data obtained by Curiosity CheMin, show the patterns obtained from a drift of windblown dust and sand called Rocknest and from a powdered rock sample drilled from the John Klein bedrock.","secondary_creator":"NASA/JPL-Caltech/Ames","description":"These images, made from data obtained by Curiosity CheMin, show the patterns obtained from a drift of windblown dust and sand called Rocknest and from a powdered rock sample drilled from the John Klein bedrock."}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16830/PIA16830~thumb.jpg","rel":"preview","render":"image"}]},{"href":"https://images-assets.nasa.gov/image/PIA16833/collection.json","data":[{"center":"JPL","title":"Two Different Aqueous Environments","nasa_id":"PIA16833","date_created":"2013-03-12T17:00:04Z","keywords":["Mars","Mars Exploration Rover MER,Mars Science Laboratory MSL"],"media_type":"image","description_508":"This set of images compares rocks seen by NASA Opportunity rover and Curiosity rover at two different parts of Mars.","secondary_creator":"NASA/JPL-Caltech/Cornell/MSSS","description":"This set of images compares rocks seen by NASA Opportunity rover and Curiosity rover at two different parts of Mars."}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16833/PIA16833~thumb.jpg","rel":"preview","render":"image"}]},{"href":"https://images-assets.nasa.gov/image/PIA16838/collection.json","data":[{"center":"JPL","title":"Vortices Bump into a Hot Spot in Jupiter Atmosphere","nasa_id":"PIA16838","date_created":"2013-03-14T18:30:02Z","keywords":["Jupiter","Cassini-Huygens"],"media_type":"image","description_508":"In this series of images from NASA Cassini spacecraft, a dark, rectangular hot spot interacts with a line of vortices that approaches from on the upper-right side. The interaction distorts the shape of the hot spot, leaving it diminished.","secondary_creator":"NASA/JPL-Caltech/SSI/GSFC","description":"In this series of images from NASA Cassini spacecraft, a dark, rectangular hot spot interacts with a line of vortices that approaches from on the upper-right side. The interaction distorts the shape of the hot spot, leaving it diminished."}],"links":[{"href":"https://images-assets.nasa.gov/image/PIA16838/PIA16838~thumb.jpg","rel":"preview","render":"image"}]}],"metadata":{"total_hits":204660},"links":[{"rel":"next","prompt":"Next","href":"http://images-api.nasa.gov/search?media_type=image&page=2"}]}},
  apod100: [{"date":"2007-01-16","explanation":"What caused this mess? Some type of star exploded to create the unusually shaped nebula known as Kepler's supernova remnant, but which type? Light from the stellar explosion that created this energized cosmic cloud was first seen on planet Earth in October 1604, a mere four hundred years ago. The supernova produced a bright new star in early 17th century skies within the constellation Ophiuchus. It was studied by astronomer Johannes Kepler and his contemporaries, with out the benefit of a telescope, as they searched for an explanation of the heavenly apparition.  Armed with a modern understanding of stellar evolution, early 21st century astronomers continue to explore the expanding debris cloud, but can now use orbiting space telescopes to survey Kepler's supernova remnant (SNR) across the spectrum.  Recent X-ray data and images of Kepler's supernova remnant taken by the orbiting Chandra X-ray Observatory has shown relative elemental abundances more typical of a Type Ia supernova, indicating that the progenitor was a white dwarf star that exploded when it accreted too much material and went over Chandrasekhar's limit. About 13,000 light years away, Kepler's supernova represents the most recent stellar explosion seen to occur within our Milky Way galaxy.","hdurl":"https://apod.nasa.gov/apod/image/0701/keplersnr_chandra_big.jpg","media_type":"image","service_version":"v1","title":"Kepler's Supernova Remnant in X-Rays","url":"https://apod.nasa.gov/apod/image/0701/keplersnr_chandra.jpg"},{"copyright":"El Cielo de Canarias","date":"2020-03-22","explanation":"These people are not in danger. What is coming down from the left is just the Moon, far in the distance. Luna appears so large here because she is being photographed through a telescopic lens.  What is moving is mostly the Earth, whose spin causes the Moon to slowly disappear behind Mount Teide, a volcano in the Canary Islands off the northwest coast of Africa. The people pictured are 16 kilometers away and  many are facing the camera because they are watching the Sun rise behind the photographer. It is not a coincidence that a full moon rises just when the Sun sets because the Sun is always on the opposite side of the sky from a full moon. The featured video was made two years ago during the full Milk Moon.  The video is not time-lapse -- this was really how fast the Moon was setting.   Free Video Lectures: Introductory Astronomy","media_type":"video","service_version":"v1","title":"Moon Setting Behind Teide Volcano","url":"https://www.youtube.com/embed/afHfMMC-MJE?rel=0"},{"date":"1999-09-29","explanation":"Why does the Crab Nebula still glow? In the year 1054 A.D. a supernova was observed that left a nebula that even today glows brightly in every color possible, across the entire electromagnetic spectrum.  At the nebula's center is an ultra-dense neutron star that rotates 30 times a second.  The power liberated as this neutron star slows its rotation matches the power radiated by the Crab Nebula.  The above picture by the recently launched Chandra X-Ray Observatory shows new details of the nebula's center in X-ray light, yielding important clues to how the neutron star powers the nebula.  Visible are rings of high-energy particles that are being flung outward near light-speed from the center, and powerful jets emerging from the poles.  Astrophysicists continue to study and learn from this unusual engine which continually transfers 30 million times more power than lightning at nearly perfect efficiency.","hdurl":"https://apod.nasa.gov/apod/image/9909/crab_chandra.jpg","media_type":"image","service_version":"v1","title":"The Crab Nebula in X-Rays","url":"https://apod.nasa.gov/apod/image/9909/crab_chandra_big.jpg"},{"copyright":"Janus Team","date":"2018-05-10","explanation":"Large galaxies grow by eating small ones. Even our own galaxy practices galactic cannibalism, absorbing small galaxies that get too close and are captured by the Milky Way's gravity. In fact, the practice is common in the universe and illustrated by this striking pair of interacting galaxies from the banks of the southern constellation Eridanus, The River. Located over 50 million light years away, the large, distorted spiral NGC 1532 is seen locked in a gravitational struggle with dwarf galaxy NGC 1531 (right of center), a struggle the smaller galaxy will eventually lose. Seen edge-on, spiral NGC 1532 spans about 100,000 light-years. Nicely detailed in this sharp image, the NGC 1532/1531 pair is thought to be similar to the well-studied system of face-on spiral and small companion known as M51.","hdurl":"https://apod.nasa.gov/apod/image/1805/NGC1532Meunier2048.jpg","media_type":"image","service_version":"v1","title":"Galaxies in the River","url":"https://apod.nasa.gov/apod/image/1805/NGC1532Meunier1024.jpg"},{"date":"2003-04-01","explanation":"A new constellation has taken hold of the sky, much to the surprise of many sky gazers.  The constellation of Ollie the Owl has suddenly started dominating the southern hemisphere, as shown above.  The constellation is taking the place of Wrinkles the Rhinoceros, who was unexpectedly voted off the sky by the other constellations.  Happy April Fools day from the folks at APOD!  Pictured above, a bird was photographed taking the Tololo All Sky Camera (TASCA) as a perch, a situation that would be even funnier if the bird's talons hadn't scratched the plastic enclosing dome.  TASCA continues to monitor the entire night sky as visible from the Cerro Tololo Inter-american Observatory located in Chile.  Given the unusual vantage point, one guess is that the bird is a Great Horned Owl, although it is hoped that a properly under-schooled ornithologist can e-mail Dr. Schwarz with the bird's true species.","hdurl":"https://apod.nasa.gov/apod/image/0304/bird_tasca_big.jpg","media_type":"image","service_version":"v1","title":"A New Constellation Takes Hold","url":"https://apod.nasa.gov/apod/image/0304/bird_tasca.jpg"},{"copyright":"Gregg Ruppel","date":"2011-10-20","explanation":"A good target for binoculars and small telescopes, Comet Garradd (C/2009 P1) now shines in planet Earth's evening skies, a steady performer but just below naked-eye visibility. Telescopic images like this composite from October 15 can find the comet with a lovely green coma, sporting multiple tails, and lingering against a background of faint stars. The field of view spans over 1 degree or about 2 full moons within the southern boundaries of the constellation Hercules. Now around 16 light minutes (2 astronomical units) away, P1 Garradd is an intrinsically large comet, but will never make a very close approach to Earth or the Sun while sweeping through the inner solar system. As a result, the comet will likely stay a sight for telescopic eyes only, moving slowly through the sky and remaining in Hercules during the coming months.","hdurl":"https://apod.nasa.gov/apod/image/1110/P1Garradd_ruppel101511.jpg","media_type":"image","service_version":"v1","title":"Tails of Comet Garradd","url":"https://apod.nasa.gov/apod/image/1110/P1Garradd_ruppel101511_900.jpg"},{"date":"1997-05-02","explanation":"The life-cycles of stars help drive the ecology of our Galaxy, churning, processing, and redistributing matter. Massive stars reach a spectacular evolutionary endpoint - supernovae explosions which blast off their outer layers, violently merging stellar material with the gas and dust of the Milky Way. The supernova remnant IC 443 is typical of the aftermath. Seen in this false color X-ray image are the shocked, expanding shells of gas from a star which exploded thousands of years ago. Known to be interacting with galactic molecular clouds, the expanding supernova remnant was also recently discovered to have regions of intense higher energy X-ray emission (coded blue in this map) near the molecular cloud boundaries. This X-ray emission may indicate that electrons are being accelerated within the remnant, gaining in energy as they surf back and forth across the expanding shock wave. If so, IC 443 could also be one source of our Galaxy's puzzling high energy cosmic-rays.","hdurl":"https://apod.nasa.gov/apod/image/9705/ic443_asca_orig.jpg","media_type":"image","service_version":"v1","title":"X-Rays From IC 443\nCredit:","url":"https://apod.nasa.gov/apod/image/9705/ic443_asca.jpg"},{"copyright":"Dani Caxete","date":"2022-01-02","explanation":"Sometimes falling ice crystals make the atmosphere into a giant lens causing arcs and halos to appear around the Sun or Moon. One Saturday night in 2012 was just such a time near Madrid, Spain, where a winter sky displayed not only a bright Moon but four rare lunar halos.  The brightest object, near the top of the featured image, is the Moon. Light from the Moon refracts through tumbling hexagonal ice crystals into a somewhat rare 22-degree halo seen surrounding the Moon. Elongating the 22-degree arc horizontally is a more rare circumscribed halo caused by column ice crystals. Even more rare, some moonlight refracts through more distant tumbling ice crystals to form a (third) rainbow-like arc 46 degrees from the Moon and appearing here just above a picturesque winter landscape. Furthermore, part of a whole 46-degree circular halo is also visible, so that an extremely rare -- especially for the Moon --  quadruple halo  was captured. Far in the background is a famous winter skyscape that includes Sirius, the belt of Orion, and Betelgeuse -- visible between the inner and outer arcs. Halos and arcs typically last for minutes to hours, so if you do see one there should be time to invite family, friends or neighbors to share your unusual lensed vista of the sky.","hdurl":"https://apod.nasa.gov/apod/image/2201/lunararcs_caxete_1280.jpg","media_type":"image","service_version":"v1","title":"Quadruple Lunar Halo Over Winter Road","url":"https://apod.nasa.gov/apod/image/2201/lunararcs_caxete_960.jpg"},{"date":"2005-08-16","explanation":"The International Space Station (ISS) is the largest human-made object ever to orbit the Earth.  Late last month and earlier this month, the station was visited and resupplied by space shuttle Discovery.  The ISS is currently operated by the Expedition 11 crew, consisting a Russian and an American astronaut.  After departing the ISS, the crew of Discovery captured this spectacular vista of the orbiting space city.  Visible components include modules, trusses, and expansive solar arrays that gather sunlight that is turned into needed electricity.","hdurl":"https://apod.nasa.gov/apod/image/0508/iss_sts114_big.jpg","media_type":"image","service_version":"v1","title":"The International Space Station from Orbit","url":"https://apod.nasa.gov/apod/image/0508/iss_sts114.jpg"},{"date":"2010-11-22","explanation":"Was this image taken with a telescope or a microscope? Perhaps this clue will help: if the dark forms were bacteria, they would each span over football field across. What is actually being seen are large sand dunes on the floor of Proctor Crater on Mars. The above picture was taken by HiRISE camera on board the Mars Reconnaissance Orbiter (MRO), a robot spacecraft currently in orbit around Mars. The dark rippled dunes likely formed more recently than the lighter rock forms they appear to cover, and are thought to slowly shift in response to pervasive winds.  The dunes arise from a complex relationship between the sandy surface and high winds on Mars.  Similar dunes were first seen in Proctor Crater by Mariner 9 more than 35 years ago.    Challenge:  Can you find a microscopic picture that resembles this astronomical one?","hdurl":"https://apod.nasa.gov/apod/image/1011/marsdunes_mro_big.jpg","media_type":"image","service_version":"v1","title":"A Dark Dune Field in Proctor Crater on Mars","url":"https://apod.nasa.gov/apod/image/1011/marsdunes_mro.jpg"},{"date":"2006-08-29","explanation":"It's the blue wisp near the bottom that's the remnant of a tremendous recent supernova explosion.  The large pink structure looming to the upper right is part of N76, a large star forming region in our neighboring Small Magellanic Cloud (SMC) galaxy.   The supernova remnant wisp, with full coordinate name 1E0102.2-7219 and frequently abbreviated as E0102, also lies in the SMC, about 50 light years away from N76.   The above image is a composite of several images taken by the Hubble Space Telescope.  E0102 is of research interest because we see it as it appeared only 2,000 years after its explosion.  Examination of E0102 therefore gives clues about how an enigmatic supernova works and what materials it dispersed into the surrounding interstellar medium.","hdurl":"https://apod.nasa.gov/apod/image/0608/e0102_hst_big.jpg","media_type":"image","service_version":"v1","title":"Supernova Remnant E0102 from Hubble","url":"https://apod.nasa.gov/apod/image/0608/e0102_hst.jpg"},{"copyright":"Jordan Sirokie","date":"2021-12-22","explanation":"Birds don't fly this high.  Airplanes don't go this fast.  The Statue of Liberty weighs less.  No species other than human can even comprehend what is going on, nor could any human just a millennium ago. The launch of a rocket bound for space is an event that inspires awe and challenges description.  Pictured here, a SpaceX Falcon 9 rocket lifted off from Kennedy Space Center, Florida earlier this month carrying the Imaging X-ray Polarimetry Explorer (IXPE).  IXPE is scheduled to observe high-energy objects such as neutron stars, black holes, and the centers of distant galaxies to better determine the physics and geometries that create and control them.  From a standing start, the 300,000+ kilogram rocket ship lifted IXPE up to circle the Earth, where the outside air is too thin to breathe. Rockets bound for space are now launched from somewhere on Earth every few days.    Launch Update: James Webb Space Telescope","hdurl":"https://apod.nasa.gov/apod/image/2112/IxpeLaunch_Sirokie_1875.jpg","media_type":"image","service_version":"v1","title":"Launch of the IXPE Observatory","url":"https://apod.nasa.gov/apod/image/2112/IxpeLaunch_Sirokie_960.jpg"},{"date":"1998-10-08","explanation":"Locked in synchronous rotation, the Moon always presents its well-known near side to Earth. But from lunar orbit, Apollo astronauts also grew to know the Moon's far side. This sharp picture from Apollo 16's mapping camera shows the eastern edge of the familiar near side (left) and the strange and heavily cratered far side of the Moon. Surprisingly, the rough and battered surface of the far side looks very different from the near side which is covered with smooth dark lunar maria. The likely explanation is that the far side crust is thicker, making it harder for molten material from the interior to flow to the surface and form the smooth maria.","hdurl":"https://apod.nasa.gov/apod/image/9810/farside_apollo16_big.gif","media_type":"image","service_version":"v1","title":"Far Side of the Moon","url":"https://apod.nasa.gov/apod/image/9810/farside_apollo16.jpg"},{"copyright":"Dominique\nDierick and Dirk De la Marche","date":"1996-06-18","explanation":"In the lower left corner, dressed in blue, is the Pleiades.  Also known as the Seven Sisters and M45, the Pleiades is one of the brightest and most easily visible open clusters on the sky. The Pleiades contains over 3000 stars, is about 400 light years away, and only 13 light years across. Surrounding the stars is a spectacular blue reflection nebula made of fine dust.  A common legend is that one of the brighter stars faded since the cluster was named. In the upper right corner, dressed in red, the California Nebula.  Named for its shape, the California Nebula is much dimmer and hence harder to see than the Pleiades. Also known as NGC 1499, this mass of red glowing hydrogen gas is about 1500 light years away.","hdurl":"https://apod.nasa.gov/apod/image/pleiadesCal_dd_big.jpg","media_type":"image","service_version":"v1","title":"Seven Sisters Versus California","url":"https://apod.nasa.gov/apod/image/pleiadesCal_dd.gif"},{"date":"2002-09-30","explanation":"These bacteria could survive on another planet.  In an Earth lab, Deinococcus radiodurans (D. rad) survive extreme levels of radiation, extreme temperatures, dehydration, and exposure to genotoxic chemicals.  Amazingly, they even have the ability to repair their own DNA, usually with 48 hours.  Known as an extremophile, bacteria such as D. rad are of interest to NASA partly because they might be adaptable to help human astronauts survive on other worlds.  A recent map of D. rad's DNA might allow biologists to augment their survival skills with the ability to produce medicine, clean water, and oxygen.  Already they have been genetically engineered to help clean up spills of toxic mercury.  Likely one of the oldest surviving life forms, D. rad was discovered by accident in the 1950s when scientists investigating food preservation techniques could not easily kill it.  Pictured above, Deinococcus radiodurans grow quietly in a dish.","hdurl":"https://apod.nasa.gov/apod/image/0209/drad_daly_big.jpg","media_type":"image","service_version":"v1","title":"D. rad Bacteria: Candidate Astronauts","url":"https://apod.nasa.gov/apod/image/0209/drad_daly.jpg"},{"copyright":"AAO ITSO OfficeGemini Obs.AURAT. A. RectorU. Alaska Anchorage","date":"2016-03-01","explanation":"The party is still going on in spiral galaxy NGC 3310.  Roughly 100 million years ago, NGC 3310 likely collided with a smaller galaxy causing the large spiral galaxy to light up with a tremendous burst of star formation.  The changing gravity during the collision created density waves that compressed existing clouds of gas and triggered the star-forming party.  The featured image from the Gemini North Telescope shows the galaxy in great detail, color-coded so that pink highlights gas while white and blue highlight stars.  Some of the star clusters in the galaxy are quite young, indicating that starburst galaxies may remain in star-burst mode for quite some time.  NGC 3310 spans about 50,000 light years, lies about 50 million light years away, and is visible with a small telescope towards the constellation of Ursa Major.","hdurl":"https://apod.nasa.gov/apod/image/1603/ngc3310_gemini_1837.jpg","media_type":"image","service_version":"v1","title":"NGC 3310: A Starburst Spiral Galaxy","url":"https://apod.nasa.gov/apod/image/1603/ngc3310_gemini_960.jpg"},{"copyright":"Tony Hallas","date":"2010-08-19","explanation":"The prominent ridge of emission featured in this vivid skyscape is designated IC 5067. Part of a larger emission nebula with a distinctive shape, popularly called The Pelican Nebula, the ridge spans about 10 light-years and follows the curve of the cosmic pelican's head and neck. Fantastic, dark shapes inhabiting the view are clouds of cool gas and dust sculpted by energetic radiation from hot, massive stars. But stars are also forming within the dark shapes. In fact, twin jets emerging from the tip of the central, dark tendril are the telltale signs of an embedded protostar cataloged as Herbig-Haro 555. The Pelican Nebula itself, also known as IC 5070, is about 2,000 light-years away. To find it, look northeast of bright star Deneb in the high flying constellation Cygnus.","hdurl":"https://apod.nasa.gov/apod/image/1008/PelicanIC5067_hallas.jpg","media_type":"image","service_version":"v1","title":"Pelican Nebula Close-up","url":"https://apod.nasa.gov/apod/image/1008/PelicanIC5067_hallas900c.jpg"},{"date":"2009-02-16","explanation":"A jewel of the southern sky, the Great Carina Nebula, aka NGC 3372, spans over 300 light-years, one of our Galaxy's largest star forming regions. Like the smaller, more northerly Great Orion Nebula, the Carina Nebula is easily visible to the unaided eye, though at a distance of 7,500 light-years it is some 5 times farther away. This stunning telescopic view from the 2.2-meter ESO/MPG telescope La Silla Observatory in Chile reveals remarkable details of the region's glowing filaments of interstellar gas and dark cosmic dust clouds. The Carina Nebula is home to young, extremely massive stars, including the still enigmatic variable Eta Carinae, a star with well over 100 times the mass of the Sun.  Eta Carinae is the bright star left of the central dark notch in this field and near the dusty Keyhole Nebula (NGC 3324).   digg_url = 'http://apod.nasa.gov/apod/ap090216.html'; digg_skin = 'compact';","hdurl":"https://apod.nasa.gov/apod/image/0902/carina_eso_big.jpg","media_type":"image","service_version":"v1","title":"The Great Carina Nebula","url":"https://apod.nasa.gov/apod/image/0902/carina_eso.jpg"},{"date":"1997-03-11","explanation":"What happened to Jupiter's Great Red Spot? Operating at a chilly 55 degrees Kelvin, the Galileo Spacecraft's Near Infrared Mapping Spectrometer (NIMS) recorded this composite image of Jupiter's Great Red Spot in late June 1996. Red, green, and blue colors were chosen to represent three different infrared wavelengths detected by the NIMS instrument. The resulting yellowish green appearance of the massive Jovian storm system - a cold, high pressure area 2 to 3 Earth diameters wide - indicates that it lies high above the surrounding cloud features. Blue corresponds to regions where the clouds are relatively thin and the features lie at greater depths.","hdurl":"https://apod.nasa.gov/apod/image/9703/yellowsp_gal_big.jpg","media_type":"image","service_version":"v1","title":"Jupiter: The Great Yellow Spot\n\nCredit:","url":"https://apod.nasa.gov/apod/image/9703/yellowsp_gal.jpg"},{"copyright":"Jeff Dai","date":"2015-10-05","explanation":"This night was so serene you could see Orion rise downwards. The unusual spectacle was captured in this single-exposure image, featuring a deep sky around the famous constellation of Orion that appeared both above -- and reflected in -- a peaceful lake in the Gyirong Valley of Tibet, China.  Taken last year at this time, the three belt stars of Orion can be seen lined up almost vertically above and below the Himalayan Mountains. The complex Orion Nebula can be seen to the belt stars' right, while the red-glowing circular structure surrounding Orion is Barnard's Loop.  Also, the bright red star Betelgeuse is doubly visible on the image left, while bright blue Rigel appears twice on the image right. Familiar Orion is becoming increasingly visible as Winter (Summer) descends on the Northern (Southern) hemisphere.   Follow APOD on: Facebook,  Google Plus, or Twitter","hdurl":"https://apod.nasa.gov/apod/image/1510/OrionTibet_Dai_1000.jpg","media_type":"image","service_version":"v1","title":"Orion Over and Under Tibet","url":"https://apod.nasa.gov/apod/image/1510/OrionTibet_Dai_960.jpg"},{"date":"2000-04-08","explanation":"Nine years ago the massive Compton Gamma Ray Observatory was deployed in low earth orbit. Sparkling interior reflections and the bright limb of the Earth are visible in this 1991 window view of Compton's release by the crew of the Space Shuttle Atlantis. Lofted above the protective atmosphere, Compton's instruments could explore the extreme high-energy Universe in gamma rays, photons with 100,000 times or more the energy of visible light. The premier gamma-ray observatory far exceeded expectations for a two- to five-year mission, but a recent gyroscope failure has prompted NASA to decide to steer the satellite safely back into the atmosphere. Compton's lasting legacy of discovery will include the detection of more than 400 celestial gamma-ray sources, 10 times more than were previously known; and more than 2,500 gamma-ray bursts.","hdurl":"https://apod.nasa.gov/apod/image/0004/compton2_sts37_big.jpg","media_type":"image","service_version":"v1","title":"Compton Observatory In Orbit","url":"https://apod.nasa.gov/apod/image/0004/compton2_sts37.jpg"},{"date":"2001-08-23","explanation":"This stunning color deep sky view toward the constellation Pisces was made with data from a fast, sensitive, digital detector known as the Big Throughput Camera operating at Cerro Tololo Inter-American Observatory in Chile. Hardly noticeable in the original picture is the small cluster of about 15 galaxies nearly 3 billion light-years distant, circled at the lower right. In fact, this distant cluster was not discovered by noticing its appearance in the image at all, but instead by mapping the subtle distortions created by its gravity. As predicted by Einstein's General Relativity theory, the cluster's gravitational mass acts like a lens, bending light and distorting the shape of background galaxies. The effect is known as gravitational lensing. Computer mapping of weak distortions of background galaxy shapes across the Big Throughput image revealed that the large scale distribution of mass in that part of the sky was concentrated in a small region. That region turned out to correspond to the galaxy cluster -- the first time such an object has been discovered on the basis of its mass properties rather than its light.","hdurl":"https://apod.nasa.gov/apod/image/0108/lenscluster_btc_big.jpg","media_type":"image","service_version":"v1","title":"Distortion from a Distant Cluster","url":"https://apod.nasa.gov/apod/image/0108/lenscluster_btc.jpg"},{"copyright":"Catching the Light","date":"2012-12-24","explanation":"Recognized since antiquity and depicted on the shield of Achilles according to Homer, stars of the Hyades cluster form the head of the constellation Taurus the Bull. Their general V-shape is anchored by Aldebaran, the eye of the Bull and by far the constellation's brightest star. Yellowish in appearance, red giant Aldebaran is not a Hyades cluster member, though. Modern astronomy puts the Hyades cluster 151 light-years away making it the nearest established open star cluster, while Aldebaran lies at less than half that distance, along the same line-of-sight. Along with colorful Hyades stars, this stellar holiday portrait locates Aldebaran just below center, as well as another open star cluster in Taurus, NGC 1647 at the left, some 2,000 light-years or more in the background. Just slide your cursor over the image to identify the stars. The central Hyades stars are spread out over about 15 light-years. Formed some 800 million years ago, the Hyades star cluster may share a common origin with M44 (Praesepe), a naked-eye open star cluster in Cancer, based on M44's motion through space and remarkably similar age.","hdurl":"https://apod.nasa.gov/apod/image/1212/HyadesLodriguss.jpg","media_type":"image","service_version":"v1","title":"Hyades for the Holidays","url":"https://apod.nasa.gov/apod/image/1212/HyadesLodriguss900.jpg"},{"date":"2001-01-30","explanation":"The Great Nebula in Orion is a colorful place.  Visible to the unaided eye, it appears as a small fuzzy patch in the constellation of Orion. But this image, a representative-color composite of 81 near-infrared light images taken with VLT's ISAAC, shows the Orion Nebula to be a busy neighborhood of young stars, hot gas, and dark dust.  The power behind much of the Orion Nebula (M42) is the Trapezium - four of the brightest stars in the nebula.  The eerie blue glow surrounding the bright stars pictured here is their own starlight reflected by nearby dust.  Dark brown dust filaments cover much of the region.  The whole Orion Nebula cloud complex, which includes the Horsehead Nebula, will slowly disperse over the next 100,000 years.","hdurl":"https://apod.nasa.gov/apod/image/0101/orion2_vlt_big.jpg","media_type":"image","service_version":"v1","title":"The Orion Nebula from VLT","url":"https://apod.nasa.gov/apod/image/0101/orion2_vlt.jpg"},{"copyright":"Steve Cullen","date":"2018-07-05","explanation":"At sunset look east not west. As Earth's dark shadow rises from the eastern horizon, faint and subtle colors will appear opposite the setting Sun. This beautiful evening sea and skyscape records the reflective scene from a cruise on the well-traveled Alaskan Inside Passage in the Pacific Northwest. Along the horizon the fading sunset gives way to the pinkish anti-twilight arch, more poetically known as the Belt of Venus. Often overlooked at sunset in favor of the brighter western horizon, the lovely arch is tinted by filtered sunlight backscattered in the dense atmosphere, hugging the planet's rising blue-grey shadow.","hdurl":"https://apod.nasa.gov/apod/image/1807/BeltofVenus062718_Cullen.jpeg","media_type":"image","service_version":"v1","title":"Shadow Rise on the Inside Passage","url":"https://apod.nasa.gov/apod/image/1807/BeltofVenus062718_Cullen1067.jpeg"},{"date":"2016-05-09","explanation":"Move over Hubble -- here comes the James Webb Space Telescope (JWST). JWST promises to be the new most powerful telescope in space.  In the last month, the 18-segment gold-plated primary mirror for JWST was unveiled. In the featured time-lapse video taken last week, the 6.5-meter diameter mirror was raised to a vertical position.  The dramatic 30-second sequence shows NASA engineers monitoring the test as room lights glint brightly off the mirror's highly reflective surface.  The beryllium mirrors have been coated with a thin film of gold to make them more reflective to infrared light.  The science goals of JWST include studying the workings of the early universe and the properties of planets orbiting nearby stars.  Because of the mirror's great size, it will be folded for launch and then, assuming all goes as planned, dramatically unfolded again in space.  The JWST, a joint mission of the space agencies of the USA, Europe, and Canada, is currently scheduled to be launched in late 2018.    NASA Coverage: Today's Transit of Mercury across the Sun","media_type":"video","service_version":"v1","title":"Webb Telescope Mirror Rises after Assembly","url":"https://www.youtube.com/embed/3LdZ_NftIh8?rel=0"},{"date":"2020-01-27","explanation":"Where do comet tails come from?  There are no obvious places on the nuclei of comets from which the jets that create comet tails emanate.  One of the best images of emerging jets is shown in the featured picture, taken in 2015 by ESA's robotic Rosetta spacecraft that orbited Comet 67P/Churyumov-Gerasimenko (Comet CG) from 2014 to 2016.  The picture shows plumes of gas and dust escaping numerous places from Comet CG's nucleus as it neared the Sun and heated up.  The comet has two prominent lobes, the larger one spanning about 4 kilometers, and a smaller 2.5-kilometer lobe connected by a narrow neck. Analyses indicate that evaporation must be taking place well inside the comet's surface to create the jets of dust and ice that we see emitted through the surface.  Comet CG (also known as Comet 67P) loses in jets about a meter of radius during each of its 6.44-year orbits around the Sun, a rate at which will completely destroy the comet in only thousands of years. In 2016, Rosetta's mission ended with a controlled impact onto Comet CG's surface.   Outreach Astronomers: Future APOD writers sought.","hdurl":"https://apod.nasa.gov/apod/image/2001/Comet67P_Rosetta_1024.jpg","media_type":"image","service_version":"v1","title":"Comet CG Evaporates","url":"https://apod.nasa.gov/apod/image/2001/Comet67P_Rosetta_1024.jpg"},{"date":"1995-09-22","explanation":"Pictured, the second person to walk on the Moon: Edwin \"Buzz\" Aldrin. During this Apollo 11 mission, Neil Armstrong and Buzz Aldrin landed on the Moon while Michael Collins circled in the Command Module above.  The lunar team erected a plaque on the surface that reads: HERE MEN FROM THE PLANET EARTH, FIRST SET FOOT UPON THE MOON JULY 1969 A.D., WE CAME IN PEACE FOR ALL MANKIND.  The Apollo missions demonstrated that it is possible to land humans on the Moon and return them safely.","hdurl":"https://apod.nasa.gov/apod/image/buzz_a11.gif","media_type":"image","service_version":"v1","title":"Standing on the Moon","url":"https://apod.nasa.gov/apod/image/buzz_a11.gif"},{"date":"2005-01-14","explanation":"Today's descent to the surface of Titan by the European Space Agency's Huygens probe was the most distant landing ever by a spacecraft from Earth. At 10:13 UT (5:13am EST, 11:13 CET), Huygens entered the atmosphere of Saturn's large mystery moon at an altitude of 180 kilometers. Radio astronomers reported detecting signals from the probe indicating that that Huygens began to deployed a series of parachutes to control its 2 hour descent through Titan's dense atmosphere. Huygens' anticipated landing point is marked by a yellow dot in this near-infrared image from the Cassini spacecraft ... but it is not known if a solid or liquid surface awaited it. The outermost of the nested octagons is about 1,120 kilometers across. The outlines are labeled by altitude and indicate areas of coverage by Huygens' imaging instruments during the descent.   News: Updates on the Huygens landing.","hdurl":"https://apod.nasa.gov/apod/image/0501/descentTitan_cassini_f.jpg","media_type":"image","service_version":"v1","title":"Descent to Titan","url":"https://apod.nasa.gov/apod/image/0501/descentTitan_cassini_c.jpg"},{"copyright":"ESA","date":"2014-08-12","explanation":"What's happened in Hebes Chasma on Mars? Hebes Chasma is a depression just north of the enormous Valles Marineris canyon.  Since the depression is unconnected to other surface features, it is unclear where the internal material went. Inside Hebes Chasma is Hebes Mensa, a 5 kilometer high mesa that appears to have undergone an unusual partial collapse -- a collapse that might be providing clues. The above image, taken by the robotic Mars Express spacecraft currently orbiting Mars, shows great details of the chasm and the unusual horseshoe shaped indentation in the central mesa. Material from the mesa appears to have flowed onto the floor of the chasm, while a possible dark layer appears to have pooled like ink on a downslope landing.  A recent hypothesis holds that salty rock composes some lower layers in Hebes Chasma, with the salt dissolving in melted ice flows that drained through holes into an underground aquifer.    Help APOD: Take the APOD 2014 Calendar Usage Poll","hdurl":"https://apod.nasa.gov/apod/image/1408/HebesChasma_esa_1024.jpg","media_type":"image","service_version":"v1","title":"Collapse in Hebes Chasma on Mars","url":"https://apod.nasa.gov/apod/image/1408/HebesChasma_esa_960.jpg"},{"date":"2006-03-25","explanation":"Astronomical spring came to planet Earth's northern hemisphere this week (and autumn to the south) with the equinox on March 20th. But on Mars, northern spring began on January 22nd.  Still in northern springtime, the Red Planet currently has a similar appearance to this composite of images from previous years taken by the long-lasting Mars Global Surveyor spacecraft. The sprawling dark region near picture center is Syrtis Major, with the whitish Hellas impact basin just below, in the southern hemisphere. The four seasons on Earth each last about 90 earth days, while Mars' larger and more eccentric elliptical orbit results in seasons that are longer and vary more widely in length - from about 140 to 190 martian sols.","hdurl":"https://apod.nasa.gov/apod/image/0603/marsSyrtis_mgs_f.jpg","media_type":"image","service_version":"v1","title":"Northern Spring on Mars","url":"https://apod.nasa.gov/apod/image/0603/marsSyrtis_mgs_c.jpg"},{"copyright":"Brian Lula","date":"2007-10-18","explanation":"Like an illustration in a galactic Just So Story, the Elephant's Trunk Nebula winds through the emission nebula and young star cluster complex IC 1396, in the high and far off constellation of Cepheus. Of course, this cosmic elephant's trunk is over 20 light-years long. The false-color view was recorded through narrow band filters that transmit the light from hydrogen (in green), sulfur (in red), and oxygen (in blue) atoms in the region. The resulting composite highlights the bright swept-back ridges that outline pockets of cool interstellar dust and gas. Such embedded, dark, tendril-shaped clouds contain the raw material for star formation and hide protostars within the obscuring cosmic dust. Nearly 3,000 light-years distant, the relatively faint IC 1396 complex covers a large region on the sky, spanning about 5 degrees. This dramatic close-up covers a 1/2 degree wide field, about the size of the Full Moon.","hdurl":"https://apod.nasa.gov/apod/image/0710/vdB142_lula.jpg","media_type":"image","service_version":"v1","title":"The Elephant's Trunk in IC 1396","url":"https://apod.nasa.gov/apod/image/0710/vdB142_lula800.jpg"},{"copyright":"Josch Hambsch","date":"2007-08-06","explanation":"Can a gas cloud eat a galaxy?  It's not even close.  The odd looking \"creature\" or \"hand\" extending down from the top of the above photo is a gas cloud known as a cometary globule.  This globule, however, has ruptured.  Cometary globules are typically characterized by dusty heads and elongated tails.  These features cause cometary globules to have visual similarities to comets, but in reality they are very much different.  Globules are frequently the birthplaces of stars, and many show very young stars in their heads. The reason for the rupture in the head of this object is not completely known.  The galaxy to the near the bottom of the image is huge, very far in the distance, and only placed near CG4 by chance superposition.   News Flash: Phoenix Spacecraft Launches to Mars","hdurl":"https://apod.nasa.gov/apod/image/0708/cg4_hambsch_big.jpg","media_type":"image","service_version":"v1","title":"CG4: A Ruptured Cometary Globule","url":"https://apod.nasa.gov/apod/image/0708/cg4_hambsch.jpg"},{"date":"2009-10-05","explanation":"After undocking, the space shuttle Discovery crew got a memorable view of the developing International Space Station (ISS). Pictured orbiting high above Earth last month, numerous solar panels, trusses, and science modules of the ISS were visible.  The Discovery crew brought mission specialist Nicole Stott to the ISS, and returned astronaut Timothy Kopra to Earth. Among the many mission and expedition accomplishments of the Discovery crew included delivering and placing the Fluids Integrated Rack and the Materials Science Research Rack in the Destiny module as well as the Minus Eighty Degree Laboratory Freezer in the Kibo module.  Better known, however, was the delivery of the COLBERT treadmill for keeping astronauts fit.  Over this past week the Soyuz TMA-16 spacecraft carrying three more astronauts docked with the ISS as Expedition 21 is set to begin.  The next shuttle trip to the ISS is currently scheduled for 2009 November 12.   digg_url = 'http://apod.nasa.gov/apod/ap091005.html'; digg_skin = 'compact';","hdurl":"https://apod.nasa.gov/apod/image/0910/iss_sts128_big.jpg","media_type":"image","service_version":"v1","title":"The International Space Station Over Earth","url":"https://apod.nasa.gov/apod/image/0910/iss_sts128.jpg"},{"date":"1998-09-13","explanation":"Galileo Galilei made a good discovery great. Upon hearing at age 40 that a Dutch optician had invented a glass that made distant objects appear larger, Galileo crafted his own telescope and turned it toward the sky. Galileo quickly discovered that our Moon had craters, that Jupiter had its own moons, that the Sun has spots, and that Venus has phases like our Moon. Galileo, who lived from 1564 to 1642, made many more discoveries.  Galileo claimed that his observations only made sense if all the planets revolved around the Sun, as championed by Aristarchus and Copernicus, not the Earth, as was commonly believed then. The powerful Inquisition made Galileo publicly recant this conclusion, but today we know he was correct.","hdurl":"https://apod.nasa.gov/apod/image/galileo_hist_big.gif","media_type":"image","service_version":"v1","title":"Galileo Demonstrates the Telescope","url":"https://apod.nasa.gov/apod/image/galileo_hist.gif"},{"copyright":"Li Zhaoqi","date":"2019-01-11","explanation":"On January 6 the New Moon rose in silhouette with the Sun seen from northeastern Asia. Near maximum, the dramatic partial solar eclipse is captured in this telephoto view through hazy skies. In the foreground, the hill top Wanchun pavilion overlooking central Beijing's popular Forbidden City hosts eclipse-watching early morning risers. This was the first of five, three solar and two lunar, eclipses for 2019. Next up is a total lunar eclipse during this month's Full Perigee Moon. At night on January 21, that celestial shadow play will be visible from the hemisphere of planet Earth that includes the Americas, Europe, and western Africa.","hdurl":"https://apod.nasa.gov/apod/image/1901/Beijing_pse-s.jpg","media_type":"image","service_version":"v1","title":"Partial Eclipse over Beijing","url":"https://apod.nasa.gov/apod/image/1901/Beijing_pse-c1024.jpg"},{"date":"1997-10-17","explanation":"An icy mist and late afternoon clouds cover much of this section of Valles Marineris on Mars. The Valles Marineris or Mariner Valley is a huge canyon system about 2,000 miles long and up to 5 miles deep. This test image was produced using data from Mars Global Surveyor's wide angle cameras viewing the canyon from a distance of 360-600 miles. Color was synthesized using images recorded through blue and red filters. Mission controllers have recently raised the spacecraft's aerobraking orbit to study the unexpected motion of one of the Surveyor's solar panels.","hdurl":"https://apod.nasa.gov/apod/image/9710/marval1_mgs_big.jpg","media_type":"image","service_version":"v1","title":"Mars: A Mist In Mariner Valley","url":"https://apod.nasa.gov/apod/image/9710/marval1_mgs.jpg"},{"date":"2001-08-22","explanation":"dge-on spiral galaxy NGC 3079 is a mere 50 million light-years away toward the constellation Ursa Major. Shown in this stunning false-color Hubble Space Telescope image, the galaxy's disk - composed of spectacular star clusters in winding spiral arms and dramatic dark lanes of dust - spans some 70,000 light-years. Still, NGC 3079's most eye-catching features are the pillars of gas which tower above a swirling cosmic cauldron of activity at the galaxy's center. Seen in the close-up inset at lower right, the pillars rise to a height of about 2,000 light-years and seem to lie on the surface of an immense bubble rising from the galactic core. Measurements indicate that the gaseous pillars are streaming away from the core at 6 million kilometers per hour. What makes this galaxy's cauldron bubble? Astronomers are exploring the possibility that the superbubble is formed by winds from massive stars. If so, these massive stars were likely born all at once as the galactic center underwent a sudden burst of star formation.","hdurl":"https://apod.nasa.gov/apod/image/0108/ngc3079_hst_big.jpg","media_type":"image","service_version":"v1","title":"The Bubbling Cauldron of NGC 3079","url":"https://apod.nasa.gov/apod/image/0108/ngc3079_hst_comp.jpg"},{"copyright":"Adam Block","date":"2011-01-01","explanation":"Celebrate the New Year with the Fireworks Galaxy! Also known as NGC 6946, the big, beautiful spiral galaxy is located just 10 million light-years away, behind a veil of foreground dust and stars in the high and far-off constellation of Cepheus. From our vantage point in the Milky Way Galaxy, we see NGC 6946 face-on. In this colorful cosmic portrait, the galaxy's colors change from the yellowish light of old stars in the core to young blue star clusters and reddish star forming regions along the loose, fragmented spiral arms. NGC 6946 is bright in infrared light and rich in gas and dust, exhibiting a furious rate of star formation. Nearly 40,000 light-years across, the nearby spiral is fittingly referred to as the Fireworks Galaxy. Over the last 100 years, at least nine supernovae, the death explosions of massive stars, were discovered in NGC 6946. By comparison, the average rate for supernovae in the Milky Way is about 1 per century.","hdurl":"https://apod.nasa.gov/apod/image/1101/n6946_block.jpg","media_type":"image","service_version":"v1","title":"Fireworks Galaxy NGC 6946","url":"https://apod.nasa.gov/apod/image/1101/n6946_block900c.jpg"},{"copyright":"MASIL Imaging Team","date":"2007-03-19","explanation":"Galaxies, like stars, frequently form groups.  A group of galaxies is a system containing more than two galaxies but less than the tens or hundreds typically found in a cluster of galaxies.  A most notable example is the Local Group of Galaxies, which houses over 30 galaxies including our Milky Way, Andromeda, and the Magellanic Clouds.  Pictured above is nearby compact group Hickson 44.  This group is located about 60 million light-years away toward the constellation of Leo.  Also known as the NGC 3190 Group, Hickson 44 contains several bright spiral galaxies and one bright elliptical galaxy on the upper left. The bright source on the upper right is a foreground star.  Many galaxies in Hickson 44 and other compact groups are either slowly merging or gravitationally pulling each other apart.","hdurl":"https://apod.nasa.gov/apod/image/0703/hickson44_masil_big.jpg","media_type":"image","service_version":"v1","title":"Galaxy Group Hickson 44","url":"https://apod.nasa.gov/apod/image/0703/hickson44_masil.jpg"},{"copyright":"Tom AbelRalf KaehlerKIPACSLACAMNH","date":"2017-10-31","explanation":"Is our universe haunted?  It might look that way on this dark matter map.  The gravity of unseen dark matter is the leading explanation for why galaxies rotate so fast, why galaxies orbit clusters so fast, why gravitational lenses so strongly deflect light, and why visible matter is distributed as it is both in the local universe and on the cosmic microwave background.  The featured image from the American Museum of Natural History\ufffds Hayden Planetarium Space Show Dark Universe highlights one example of how pervasive dark matter might haunt our universe.  In this frame from a detailed computer simulation, complex filaments of dark matter, shown in black, are strewn about the universe like spider webs, while the relatively rare clumps of familiar baryonic matter are colored orange. These simulations are good statistical matches to astronomical observations.  In what is perhaps a scarier turn of events, dark matter -- although quite strange and in an unknown form -- is no longer thought to be the strangest source of gravity in the universe. That honor now falls to dark energy, a more uniform source of repulsive gravity that seems to now dominate the expansion of the entire universe.    Not only Halloween: Today is Dark Matter Day.","hdurl":"https://apod.nasa.gov/apod/image/1710/DarkMatter_KipacAmnh_1200.jpg","media_type":"image","service_version":"v1","title":"Dark Matter in a Simulated Universe","url":"https://apod.nasa.gov/apod/image/1710/DarkMatter_KipacAmnh_960.jpg"},{"date":"2001-08-08","explanation":"Tomorrow's picture: Ray Craters  < | Archive | Index | Search | Calendar | Glossary | Education | About APOD | >  Authors & editors: Robert Nemiroff (MTU) & Jerry Bonnell (USRA) NASA Technical Rep.: Jay Norris. Specific rights apply. A service of: LHEA at NASA/ GSFC & Michigan Tech. U.","hdurl":"https://apod.nasa.gov/apod/image/0108/jupitercrescent_cassini_big.jpg","media_type":"image","service_version":"v1","title":"Farewell Jupiter","url":"https://apod.nasa.gov/apod/image/0108/jupitercrescent_cassini.jpg"},{"date":"2004-12-11","explanation":"An energetic jet from the core of giant elliptical galaxy M87 stretches outward for 5,000 light-years. This monstrous jet appears in the panels above to be a knotted and irregular structure, detected across the spectrum, from x-ray to optical to radio wavelengths. In all these bands, the observed emission is likely created as high energy electrons spiral along magnetic field lines, so called synchrotron radiation. But what powers this cosmic blowtorch? Ultimately, the jet is thought to be produced as matter near the center of M87 swirls toward a spinning, supermassive black hole. Strong electromagnetic forces are generated and eject material away from the black hole along the axis of rotation in a narrow jet. Galaxy M87 is about 50 million light-years away and reigns as the large central elliptical galaxy in the Virgo cluster.   News: The answer to Lewin's Challenge APOD can be found here.","hdurl":"https://apod.nasa.gov/apod/image/0412/m87_comp.jpg","media_type":"image","service_version":"v1","title":"M87's Energetic Jet","url":"https://apod.nasa.gov/apod/image/0412/m87_comp.jpg"},{"date":"1996-06-26","explanation":"French astronomer Charles Messier was born on June 26, 1730. Inspired by childhood sightings of comets and a solar eclipse visible from his home town of Badonvillier, he became an astronomer and comet hunter who kept careful records of his observations. While hunting for comets in the skies above France he made a now famous list of the positions of about 100 fuzzy, diffuse looking objects which appeared at fixed positions in the sky. Although these objects looked like comets, Messier knew that since they did not move with respect to the background stars they could not be the comets he was searching for. These objects are now well known to modern astronomers to be among the brightest and most striking nebulae, star clusters, and galaxies. Objects on Messier's list are still referred to by their \"Messier number\". The first object in his catalog, M1 pictured above - also known as the Crab Nebula, was recorded during his search for the return of comet Halley in 1758. Messier died in his home in Paris in 1817.","hdurl":"https://apod.nasa.gov/apod/image/crab_noao_big.tif","media_type":"image","service_version":"v1","title":"Happy Birthday Charles Messier: M1","url":"https://apod.nasa.gov/apod/image/crab_noao.gif"},{"date":"1996-08-21","explanation":"In the central part of the Lagoon Nebula lies the above pictured Hourglass Nebula. In this region of recent star formation, obscuring dark lanes of dust permeate the red-glowing hydrogen gas. Blocking some of the gas cloud from our view, they chance to create a glowing shape that appears from our vantage point like an hourglass. In the upper right of this picture from the Hubble Space Telescope is a bright young blue star from the open cluster NGC 6530 - visible below center in yesterday's APOD. A recent study of the Lagoon Nebula (M8), has shown that this emission nebula houses large magnetic fields and unusually large dust particles.","hdurl":"https://apod.nasa.gov/apod/image/hourglass_hst_big.jpg","media_type":"image","service_version":"v1","title":"A Close-Up of the Lagoon's Hourglass","url":"https://apod.nasa.gov/apod/image/hourglass_hst.gif"},{"date":"1997-01-24","explanation":"Ten years ago the most notable supernova\r of modern times was observed. In February 1987, light reached\r Earth from a star which exploded in the nearby Large Magellanic Cloud\r galaxy. Supernova 1987a\r remains the closest supernova\r since the invention of the telescope.  The explosion\r catapulted a tremendous amount of gas,\r light,\r and neutrinos\r into interstellar space. When observed by the Hubble Space Telescope\r (HST) in 1994, large strange rings\r were discovered whose origin is still mysterious, although thought\r to have been expelled even before the main explosion. More recent HST observations\r shown in the inset, however, have uncovered something actually predicted:\r the expanding fireball from the exploding star. The above high resolution images\r resolve two blobs flung out from the central explosion.\r","hdurl":"https://apod.nasa.gov/apod/image/9701/sn1987ares_hst_big.jpg","media_type":"image","service_version":"v1","title":"Supernova 1987a Fireball Resolved\r\nCredit:","url":"https://apod.nasa.gov/apod/image/9701/sn1987ares_hst.jpg"},{"date":"2014-02-18","explanation":"An important threshold on Mars has now been crossed. Landing in mid-2012, the Curiosity rover is searching for clues of whether life could ever have existed on the red planet.  Recent findings of Curiosity include evidence for an ancient (but now dried) freshwater lake, and the non-detection of the biomarker methane in the Martian atmosphere. To continue its investigation, the car-sized rover is on an expedition to roll up Mt. Sharp, the central peak of the large crater in which it landed. Life might have shown preference for water that once ran down the Martian mountain.  Two weeks ago, to avoid more dangerous and rocky terrain, Curiosity was directed to roll across a one-meter high sand dune that blocked a useful entrance to Mt. Sharp. Just after the short trip over Dingo Gap was successful, the robotic rover took the above image showing the now-traversed sand mound covered with its wheel tracks.   Organize Your Universe: Free APOD 2014 Calendar in PDF format","hdurl":"https://apod.nasa.gov/apod/image/1402/dingogap_curiositybouric_2288.jpg","media_type":"image","service_version":"v1","title":"Crossing Dingo Gap on Mars","url":"https://apod.nasa.gov/apod/image/1402/dingogap_curiositybouric_960.jpg"},{"date":"2001-05-09","explanation":"The International Space Station (ISS) continues to grow.  Last month, the crew of the Space Shuttle Endeavor delivered new Logistics Modules and installed the new Canadarm2 on the growing outpost. The ISS -- complete with its new arm -- was photographed 400 kilometers above planet Earth by the Space Shuttle Endeavor crew soon after they undocked.  The shuttle then flew around the station for a survey.  Three members of the Expedition Two Crew remain aboard the ISS running scientific experiments and unpacking over two tons of material delivered by the shuttle.  The next shuttle scheduled to visit the ISS will be Atlantis in June.","hdurl":"https://apod.nasa.gov/apod/image/0105/newarm_iss_big.jpg","media_type":"image","service_version":"v1","title":"Space Station Shows Off New Robot Arm","url":"https://apod.nasa.gov/apod/image/0105/newarm_iss.jpg"},{"copyright":"ESA/Herschel/PACS/SPIRE","date":"2016-10-14","explanation":"This dramatic image peers within M42, the Orion Nebula, the closest large star-forming region. Using data at infrared wavelengths from the Herschel Space Observatory, the false-color composite explores the natal cosmic cloud a mere 1,500 light-years distant. Cold, dense filaments of dust that would otherwise be dark at visible wavelengths are shown in reddish hues. Light-years long, the filaments weave together bright spots that correspond to regions of collapsing protostars. The brightest bluish area near the top of the frame is warmer dust heated by the hot Trapezium cluster stars that also power the nebula's visible glow. Herschel data has recently indicated ultraviolet starlight from the hot newborn stars likely contributes to the creation of carbon-hydrogen molecules, basic building blocks of life. This Herschel image spans about 3 degrees on the sky. That's about 80 light-years at the distance of the Orion Nebula.","hdurl":"https://apod.nasa.gov/apod/image/1610/OrionHerschel-nhsc2016-003b.jpg","media_type":"image","service_version":"v1","title":"Herschel's Orion","url":"https://apod.nasa.gov/apod/image/1610/OrionHerschel-nhsc2016-003b_1024.jpg"},{"copyright":"Robert Fedez","date":"2021-11-20","explanation":"Predawn hours of November 19 found the Moon in partly cloudy skies over Cancun, Mexico. Captured in this telephoto snapshot, the lunar disk is not quite entirely immersed in Earth's dark umbral shadow during a long partial lunar eclipse. The partial eclipse was deep though, deep enough to show the dimmed but reddened light in Earth's shadow. That's a sight often anticipated by fans of total lunar eclipses. Wandering through the constellation Taurus, the eclipsed Moon's dimmer light also made it easier to spot the Pleiades star cluster. The stars of the Seven Sisters share this frame at the upper right, with the almost totally eclipsed Moon.   Notable APOD Submissions (so far): Lunar Eclipse of 2021 November 19","hdurl":"https://apod.nasa.gov/apod/image/2111/IMG_8522-1.png","media_type":"image","service_version":"v1","title":"An Almost Total Lunar Eclipse","url":"https://apod.nasa.gov/apod/image/2111/IMG_8522-1_1024.jpg"},{"date":"2018-10-04","explanation":"On Mars dust storms can't actually blow spacecraft over, but they can blot out the Sun. Over three months ago a planet-wide dust storm caused a severe lack of sunlight for the Mars rover Opportunity at its location near the west rim of Endeavour crater. The lack of sunlight sent the solar-powered Opportunity into hibernation and for over 115 sols controllers have not received any communication from the rover. The dust is clearing as the storm subsides though. On September 20th, when this image was taken by the Mars Reconnaissance Orbiter's HiRISE camera, about 25 percent of the sunlight was reaching the surface again. The white box marks a 47-meter-wide (154-foot-wide) area centered on a blip identified as the silent-for-now Opportunity rover.","hdurl":"https://apod.nasa.gov/apod/image/1810/PIA22549_fig1.jpg","media_type":"image","service_version":"v1","title":"Opportunity After the Storm","url":"https://apod.nasa.gov/apod/image/1810/PIA22549_fig1s.jpg"},{"date":"2003-09-09","explanation":"Where will Gemini take us tonight? It is dusk and Gemini North, one of the largest telescopes on planet Earth, prepares to peer into the distant universe.  Gemini's flexible 8.1-mirror has taken already effectively taken humanity to distant stars, nebulas, galaxies, and quasars, telling us about the geometry, composition, and evolution of our universe. The above picture is actually a composite of over 40 images taken while the Gemini dome rotated, later adding an image of the star field taken from the same location. The Gemini dome is not transparent -- it only appears so because it rotated during the exposures of this image. The constellations of Scorpius and Sagittarius can be seen above the dome, as well as the sweeping band of our Milky Way Galaxy, including the direction toward the Galactic center. Gemini North's twin, Gemini South, resides in Cerro Pach\u007fn, Chile.  This night, 2003 August 19, Gemini North took us only into the outer Solar System, observing Pluto in an effort to better determine the composition of its thin atmosphere.","hdurl":"https://apod.nasa.gov/apod/image/0309/mwsky_gemini_big.jpg","media_type":"image","service_version":"v1","title":"A Gemini Sky","url":"https://apod.nasa.gov/apod/image/0309/mwsky_gemini.jpg"},{"copyright":"Adam Block","date":"2010-05-20","explanation":"In spiral galaxies, majestic winding arms of young stars, gas, and dust rotate in a flat disk around a bulging galactic nucleus. But elliptical galaxies seem to be simpler. Lacking gas and dust to form new stars, their randomly swarming older stars, give them an ellipsoidal (egg-like) shape. Still, elliptical galaxies can be very large. Centered in this telescopic view and over 120,000 light-years in diameter, larger than our own Milky Way, elliptical galaxy M87 (NGC 4486) is the dominant galaxy of the Virgo Galaxy Cluster. Some 50 million light-years away, M87 is likely home to a supermassive black hole responsible for a high-energy jet of particles emerging from the giant galaxy's central region. In this well-processed image, M87's jet is near the one o'clock position. Other galaxies are also in the field of view, including large Virgo Cluster ellipticals NGC 4478 right of center and NGC 4476 near the right edge.","hdurl":"https://apod.nasa.gov/apod/image/1005/m87jet_block.jpg","media_type":"image","service_version":"v1","title":"M87: Elliptical Galaxy with Jet","url":"https://apod.nasa.gov/apod/image/1005/m87jet_block900.jpg"},{"date":"2021-03-28","explanation":"A spacesuit floated away from the International Space Station 15 years ago, but no investigation was conducted.  Everyone knew that it was pushed by the space station crew.   Dubbed Suitsat-1, the unneeded Russian Orlan spacesuit filled mostly with old clothes was fitted with a faint radio transmitter and released to orbit the Earth. The suit circled the Earth twice before its radio signal became unexpectedly weak. Suitsat-1 continued to orbit every 90 minutes until it burned up in the Earth's atmosphere after a few weeks.  Pictured, the lifeless spacesuit was photographed in 2006 just as it drifted away from  space station.    Portal Universe: Random APOD Generator","hdurl":"https://apod.nasa.gov/apod/image/2103/suitsat1_nasa_2008.jpg","media_type":"image","service_version":"v1","title":"SuitSat-1: A Spacesuit Floats Free","url":"https://apod.nasa.gov/apod/image/2103/suitsat1_nasa_1080.jpg"},{"copyright":"Hidden Valley Observatory","date":"2008-01-11","explanation":"Centered on North Star Polaris, this 4 degree wide field of view covers part of a complex of relatively unfamiliar, diffuse dust clouds soaring high above the plane of our Milky Way Galaxy. The combined light of the Milky Way stars are reflected by the dusty, galactic cirrus, the reflected starlight having the same blue tint characteristic of better known reflection nebulae. But this deep color image also records a faint reddish luminescence from the dust grains as they convert invisible stellar ultraviolet radiation to visible red light.  Dubbed extended red emission, the dim cosmic glow is thought to be caused by complex organic molecules known as PAHs (polycyclic aromatic hydrocarbons), common constituents of interstellar dust. On planet Earth, PAHs are widely encountered as the sooty products of combustion.","hdurl":"https://apod.nasa.gov/apod/image/0801/PolarisNebula_mandel.jpg","media_type":"image","service_version":"v1","title":"Polaris Dust Nebula","url":"https://apod.nasa.gov/apod/image/0801/PolarisNebula_mandel800.jpg"},{"date":"1995-11-19","explanation":"","hdurl":"https://apod.nasa.gov/apod/image/nyc_night_sts59.gif","media_type":"image","service_version":"v1","title":"New York at Night","url":"https://apod.nasa.gov/apod/image/nyc_night_sts59.gif"},{"copyright":"Kristine Richer","date":"2020-07-02","explanation":"The Old Astronomer's Milky Way arcs through this peaceful northern sky. Against faint, diffuse starlight you can follow dark rifts of interstellar dust clouds stretching from the galaxy's core. They lead toward bright star Antares at the right, almost due south above the horizon. The brightest beacon in the twilight is Jupiter, though. From the camera's perspective it seems to hang from the limb of a tree framing the foreground, an apple tree of course. The serene maritime nightscape was recorded in tracked and untracked exposures on June 16 from Dover, Nova Scotia, planet Earth.","hdurl":"https://apod.nasa.gov/apod/image/2007/Kristine-Rose-Photography-20200616_001.jpg","media_type":"image","service_version":"v1","title":"The Galaxy, the Planet, and the Apple Tree","url":"https://apod.nasa.gov/apod/image/2007/Kristine-Rose-Photography-20200616_001s1024.jpg"},{"copyright":"Yuichi Takasaka","date":"2011-09-23","explanation":"September's equinox arrives today at 0905 UT. As the Sun crosses the celestial equator heading south, spring begins in the southern hemisphere and autumn in the north. And though the seasonal connection is still puzzling, both spring and autumn bring an increase in geomagnetic storms. So as northern nights grow longer, the equinox also heralds the arrival of a good season for viewing aurora. Recorded earlier this month, these curtains of September's shimmering green light sprawl across a gorgeous night skyscape. In the foreground lies Hidden Lake Territorial Park near Yellowknife, Northwest Territories, Canada. Calm water reflects the aurora, with bright star trails peering through the mesmerizing sky glow. Of course, shining at altitudes of 100 kilometers or so, planet Earth's auroras are visible from space.","hdurl":"https://apod.nasa.gov/apod/image/1109/C404-5244-6082AuroraTakasaka.jpg","media_type":"image","service_version":"v1","title":"September's Aurora","url":"https://apod.nasa.gov/apod/image/1109/C404-5244-6082AuroraTakasaka900.jpg"},{"date":"2004-04-06","explanation":"How did this huge cyclone form?  An unusually strong storm -- perhaps the strongest storm in the recorded history of the South Atlantic Ocean -- crossed the coast of Brazil last week.  Cyclones this powerful, classified by some as the first ever Category 1 Hurricane, are very rare in the South Atlantic.  Tropical cyclones are large regions of low pressure with little vertical wind shear that typically form over regions of warm water, which power the cyclone through evaporation.  Reports of relatively cold air in the center indicate, however, that this storm was extratropical.  The storm was dubbed Caterina by local meteorologists, although no formal naming precedents exist in this part of the world.","hdurl":"https://apod.nasa.gov/apod/image/0404/brazilcyclone_modis_big.jpg","media_type":"image","service_version":"v1","title":"Unusually Strong Cyclone Off the Brazilian Coast","url":"https://apod.nasa.gov/apod/image/0404/brazilcyclone_modis.jpg"},{"copyright":"Kurt Voigts","date":"2010-08-11","explanation":"What could cause such rays of dark? Dark sky rays were caught in spectacular fashion earlier last month from Pentwater, Michigan, USA, looking west over Lake Michigan. The cause is something surprisingly familiar: shadows.  Clouds near the horizon can block sunlight from reflecting off air, making columns outward from the Sun appear unusually dark. Cloud shadows can be thought of as the complement of the more commonly highlighted crepuscular rays, also visible above, where sunlight pours though cloud holes. Sometimes, on the opposite side of the sky, anticrepuscular rays can also be seen.","hdurl":"https://apod.nasa.gov/apod/image/1008/crepuscular_voigts_big.jpg","media_type":"image","service_version":"v1","title":"Crepuscular Rays Over Lake Michigan","url":"https://apod.nasa.gov/apod/image/1008/crepuscular_voigts.jpg"},{"date":"1998-12-24","explanation":"Looking down from atop a Delta II rocket blasting skyward, solid fuel boosters fall away (left) and the Earth's limb slides into view. These pictures from the launch of the Mars Climate Orbiter were taken as it climbed away from Cape Canaveral Air Station Space Launch Complex 17 on December 11. This spacecraft won't arrive at Mars in time for Christmas though, as its cruise to the red planet will require about 9 1/2 Earth months to complete. Once it does get there it will use aerobraking to help establish a polar science mapping orbit for studying the martian atmosphere. The orbiter is also scheduled to act as a communications relay for the soon to be launched Mars Polar Lander.","hdurl":"https://apod.nasa.gov/apod/image/9812/m98boost1.jpg","media_type":"image","service_version":"v1","title":"Mars Climate Orbiter Launches","url":"https://apod.nasa.gov/apod/image/9812/m98boost1.jpg"},{"copyright":"Frank Barrett","date":"2009-03-27","explanation":"Images from two different cameras, a digital SLR and an astronomical CCD camera, are combined in this color starscape. Both cameras made use of the same telescope at the oceanside Winter Star Party in the Florida Keys, appropriately creating this portrait of the Seagull Nebula. The wide view covers a 4x3 degree swath across the plane of the Milky Way, near the direction of Sirius, alpha star of the constellation Canis Major. Of course, the broad region includes objects with other catalog designations: notably NGC 2327 - a compact, dusty emission region with an embedded massive star that forms the bird's head (above center), and IC 2177 - forming the sweeping arc of the seagull's wings. Dominated by the reddish glow of atomic hydrogen, the complex of cosmic gas and dust clouds with bright young stars spans over 250 light-years at an estimated 3,800 light-year distance.   digg_url = 'http://apod.nasa.gov/apod/ap090327.html'; digg_skin = 'compact';","hdurl":"https://apod.nasa.gov/apod/image/0903/Seagull_BarrettDavis.jpg","media_type":"image","service_version":"v1","title":"The Seagull Nebula","url":"https://apod.nasa.gov/apod/image/0903/Seagull_BarrettDavis900.jpg"},{"date":"1995-10-17","explanation":"If you look closely at the center of the above photograph, you will see a spiral galaxy behind the field of stars. Named Dwingeloo 1, this nearby galaxy was only discovered recently (1994) because much of its light was obscured by dust, gas and bright stars of our own Milky Way galaxy.  In fact, all the individually discernible stars in the above photograph are in our Galaxy. Dwingeloo 1 turned out to be a large galaxy located only five times as distant as the closest major galaxy  - M31.","hdurl":"https://apod.nasa.gov/apod/image/dwingeloo1_int.gif","media_type":"image","service_version":"v1","title":"Galaxy Dwingeloo 1 Emerges","url":"https://apod.nasa.gov/apod/image/dwingeloo1_int.gif"},{"copyright":"Peter WienerroitherU. Wien","date":"2005-07-14","explanation":"As the Earth spins on its axis, the sky seems to rotate around us.  This motion, called diurnal motion, produces the beautiful concentric trails traced by stars during time exposures.  In the middle of the picture is the North Celestial Pole (NCP), easily identified as the point in the sky at the center of all the star trail arcs.  The star Polaris, commonly known as the North Star, made the very short bright circle near the NCP.  Full circle star trails are pictured over Vienna, Austria.   This image, a relatively short exposure followed by a digital trick, could not have been taken during a single night because 24-hours are needed for one full rotation, and the Sun is sure to dominate the frame at some time.","hdurl":"https://apod.nasa.gov/apod/image/0507/startrails_wienerroither_big.jpg","media_type":"image","service_version":"v1","title":"Star Trails Over Vienna","url":"https://apod.nasa.gov/apod/image/0507/startrails_wienerroither.jpg"},{"date":"2008-03-23","explanation":"Where did all the stars go?  What used to be considered a hole in the sky is now known to astronomers as a dark molecular cloud.  Here, a high concentration of  dust and molecular gas absorb practically all the visible light emitted from background stars.  The eerily dark surroundings help make the interiors of molecular clouds some of the coldest and most isolated places in the universe.  One of the most notable of these dark absorption nebulae  is a cloud toward the constellation Ophiuchus known as Barnard 68, pictured above.  That no stars are visible in the center indicates that  Barnard 68 is relatively nearby, with measurements placing it about 500 light-years away and half a light-year across.  It is not known exactly how molecular clouds like Barnard 68 form, but it is known that these clouds are themselves  likely places for new stars to form. It is possible to look right through the cloud in infrared light.   digg_url = 'http://apod.nasa.gov/apod/ap080323.html'; digg_skin = 'compact';","hdurl":"https://apod.nasa.gov/apod/image/0803/barnard68_vlt_big.jpg","media_type":"image","service_version":"v1","title":"Molecular Cloud Barnard 68","url":"https://apod.nasa.gov/apod/image/0803/barnard68_vlt.jpg"},{"date":"2018-01-22","explanation":"What if you could look out from the center of our Galaxy -- what might you see? Two scientifically-determined possibilities are shown in the featured video, an immersive 360-degree view which allows you to look around in every direction. The pictured computer simulation is based on infrared data from ESO's Very Large Telescope in Chile and X-ray data from NASA's orbiting Chandra X-ray Observatory.  As the video starts, you quickly approach Sgr A*, the supermassive black hole in the Galactic center. Then looking out, this 500-year time-lapse simulation shows glowing gas and many points of light orbiting all around you.  Many of these points are young Wolf-Rayet stars that have visible hot winds blowing out into surrounding nebulas. Clouds approaching close become elongated, while objects approaching too close fall in. Toward the video's end the simulation repeats, but this time with the dynamic region surrounding Sgr A* expelling hot gas that pushes back against approaching material.","media_type":"video","service_version":"v1","title":"An Immersive Visualization of the Galactic Center","url":"https://www.youtube.com/embed/YKzxmeABbkU?rel=0&showinfo=0"},{"copyright":"\nJames W. Young","date":"2018-07-17","explanation":"What's that spot next to the Moon?  Venus.  Two days ago, the crescent Moon slowly drifted past Venus, appearing within just one degree at its closest.  This conjunction, though, was just one of several photographic adventures for our Moon this month  (moon-th), because, for one, a partial solar eclipse occurred just a few days before, on July 12. Currently, the Moon appears to be brightening, as seen from the Earth, as the fraction of its face illuminated by the Sun continues to increase.  In a few days, the Moon will appear more than half full, and therefore be in its gibbous phase.  Next week the face of the Moon that always faces the Earth will become, as viewed from the Earth, completely illuminated by the Sun. Even this full phase will bring an adventure, though, as a total eclipse of this Thunder Moon will occur on July 27.  Don't worry about our Luna getting tired, though, because she'll be new again next month (moon-th) -- August 11 to be exact -- just as she causes another partial eclipse of the Sun.  Pictured,  Venus and the Moon were captured from Cannon Beach above a rock formation off the Oregon (USA) coast known as the Needles.  About an hour after this image was taken, the spin of the Earth caused both Venus and the Moon to set.","hdurl":"https://apod.nasa.gov/apod/image/1807/VenusMoonNeedles_Young_2400.jpg","media_type":"image","service_version":"v1","title":"Moon and Venus over Cannon Beach","url":"https://apod.nasa.gov/apod/image/1807/VenusMoonNeedles_Young_1080.jpg"},{"date":"2004-05-19","explanation":"What caused this unusual looking crater floor on Mars?  Appearing at first glance to resemble the human brain, the natural phenomena that created the unusual texture on the floor of this Martian impact crater are currently under investigation. The light colored region surrounding the brain-textured region is likely sand dunes sculpted by winds.  The Mars Global Surveyor robot spacecraft that has been orbiting Mars since 1997 took the above image.  Meanwhile, down on the surface, robots Spirit and Opportunity continue to roll, inspecting landscape, rocks, and soil for clues to the ancient watery past of the red planet.  Humorously, this brain-terrain on Mars spans about a kilometer, making it just about the right size to fit inside the rock formation once dubbed the Face on Mars.","hdurl":"https://apod.nasa.gov/apod/image/0405/brain_mgs_big.gif","media_type":"image","service_version":"v1","title":"Brain Crater on Mars","url":"https://apod.nasa.gov/apod/image/0405/brain_mgs.jpg"},{"copyright":"Paulo RaymundoReaiche\nObservatory animation courtesy Tony Phillips\n(SpaceWeather.com)\n\n","date":"2001-11-30","explanation":"This dramatic four-frame animation shows a fireball meteor and its developing persistent \"smoke\" train, recorded two weeks ago in skies near Salvador, Brazil. Indeed similar sights are astonishingly familiar world-wide to witnesses of this November's fireball-rich Leonid meteor storm. A few skygazers even discovered that some bright Leonid fireballs made faint, gentle, hissing sounds(!), a surprising effect only recently appreciated and understood. Accounts of fireball meteors making noise have long been viewed with skepticism, particularly because sounds were reportedly heard just as the meteor was seen overhead. But light travels much faster than sound so, like delayed thunder from a distant lightning stroke, a meteor produced sound should only be heard long after the meteor streak was seen. A sound explanation supported by laboratory tests is that turbulent plasma created by the meteor's passage generates very low frequency radio waves. Traveling at light speed the radio waves reach the ground simultaneously with visible light where they are strong enough to induce oscillating currents and audible vibrations in common objects like grass, leaves, wire-frame glasses, and perhaps even dry, frizzy hair.","hdurl":"https://apod.nasa.gov/apod/image/0111/leonidfire_raymundo.gif","media_type":"image","service_version":"v1","title":"Meteor Storm Sights and Sounds","url":"https://apod.nasa.gov/apod/image/0111/leonidfire_raymundo.gif"},{"date":"2003-02-12","explanation":"Analyses of a new high-resolution map of microwave light emitted only 380,000 years after the Big Bang appear to define our universe more precisely than ever before.  The eagerly awaited results from the orbiting Wilkinson Microwave Anisotropy Probe resolve several long-standing disagreements in cosmology rooted in less precise data.  Specifically, present analyses of above WMAP all-sky image indicate that the universe is 13.7 billion years old (accurate to 1 percent), composed of 73 percent dark energy, 23 percent cold dark matter, and only 4 percent atoms, is currently expanding at the rate of 71 km/sec/Mpc (accurate to 5 percent), underwent episodes of rapid expansion called inflation, and will expand forever.  Astronomers will likely research the foundations and implications of these results for years to come.   APOD Update: APOD now available in Portuguese from Brazil.","hdurl":"https://apod.nasa.gov/apod/image/0302/sky_wmap_big.jpg","media_type":"image","service_version":"v1","title":"WMAP Resolves the Universe","url":"https://apod.nasa.gov/apod/image/0302/sky_wmap.jpg"},{"date":"1998-11-15","explanation":"Mars has two tiny moons, Phobos and Deimos. Pictured above is Deimos, the smaller moon of Mars. In fact, Deimos is one of the smallest known moons in the Solar System measuring only 9 miles across. The diminutive Martian moons were discovered in 1877 by Asaph Hall, an American astronomer working at the US Naval Observatory in Washington D.C. The existence of two Martian moons was predicted around 1610 by Johannes Kepler, the astronomer who derived the laws of planetary motion. In this case, Kepler's prediction was not based on scientific principles, but his writings and ideas were so influential that the two Martian moons are discussed in works of fiction such as Jonathan Swift's \"Gulliver's Travels\", written in 1726, over 150 years before their actual discovery.","hdurl":"https://apod.nasa.gov/apod/image/9811/deimos_viking.gif","media_type":"image","service_version":"v1","title":"Deimos: A Small Martian Moon","url":"https://apod.nasa.gov/apod/image/9811/deimos_viking_big.jpg"},{"date":"1996-11-21","explanation":"Will the Sun one day look like - a blue snowball?\r Maybe! The Blue Snowball is a planetary nebula\r - and in 5 billion years the Sun\r will throw off its outer layers and go through a planetary nebula\r phase. A star can appear \"normal\" only so long as there\r are sufficient nuclear reactions in its core. Soon thereafter,\r gravity will win out and compress the stellar core to higher temperatures.\r Eventually the core becomes a white dwarf.\r These high temperatures somehow cause the expulsion of star's\r outer layers, creating a planetary nebula\r such as the Blue Snowball\r pictured above. Although the Blue Snowball, also known as NGC\r 7662, does appear blue, the above picture's colors\r are not real and were chosen to highlight the emission of certain\r ions in the nebula. Many things are still not known about planetary nebula,\r including details of the physical mechanism that creates the nebula,\r and the reason for fast knots of gas in the outer regions known\r as fliers.\r","hdurl":"https://apod.nasa.gov/apod/image/9611/bluesnowball_hst.gif","media_type":"image","service_version":"v1","title":"The Blue Snowball Planetary Nebula\r\nCredit:","url":"https://apod.nasa.gov/apod/image/9611/bluesnowball_hst.gif"},{"copyright":"David McDavidLimber Observatory","date":"1998-08-28","explanation":"Clouds of glowing hydrogen gas mingle with dark dust lanes in the Trifid Nebula, a star forming region in the constellation Sagittarius. In this and other similar emission nebulae, energetic ultraviolet light from an embedded hot young star strips electrons from the surrounding hydrogen atoms. As the electrons and atoms recombine they emit longer wavelength, lower energy light in a well known characteristic pattern of bright spectral lines. At visible wavelengths, the strongest emission line in this pattern is in the red part of the spectrum and is known as \"Hydrogen-alpha\" or just H-alpha. This image of the nebula was taken using a filter to select only light near the H-alpha wavelength. It shows those regions with substantial emission from atomic hydrogen. The relative strength of this emission can trace the densities of atoms within the gas cloud.","hdurl":"https://apod.nasa.gov/apod/image/9808/trifid_david_big.gif","media_type":"image","service_version":"v1","title":"Hydrogen Trifid","url":"https://apod.nasa.gov/apod/image/9808/trifid_david.jpg"},{"copyright":"Loic Michel","date":"2019-06-28","explanation":"The night of June 21 was the shortest night for planet Earth's northern latitudes, so at latitude 48.9 degrees north, Paris was no exception. Still, the City of Light had an exceptionally luminous evening. Its skies were flooded with silvery night shining or noctilucent clouds after the solstice sunset. Hovering at the edge of space, the icy condensations on meteoric dust or volcanic ash are still in full sunlight at the extreme altitudes of the mesophere. Seen at high latitudes in summer months, stunning, wide spread displays of northern noctilucent clouds are now being reported.","hdurl":"https://apod.nasa.gov/apod/image/1906/D7X7411-2Loic.jpg","media_type":"image","service_version":"v1","title":"A Solstice Night in Paris","url":"https://apod.nasa.gov/apod/image/1906/D7X7411-2Loic_1024.jpg"},{"date":"1996-07-06","explanation":"Sir Edmond Halley was quite a discoverer.  Born in 1656, he computed in 1705 that a bright comet was periodic and would make another appearance in 1758. The comet appeared as predicted and is now known as Comet Halley. Unfortunately, Halley died in 1742 and never saw his prediction come true. In 1716  Halley proposed two types of diving bells that would enable people to explore the deep sea.  Halley pioneered our understanding of trade winds, tides, cartography, naval navigation, mortality tables, and stellar proper motions.  Halley (incorrectly) proposed that the Earth was made of concentric spheres the size of the inner planets each of which might contain life. Perhaps Halley's greatest discovery, however, was that his contemporary Isaac Newton had discovered a powerful mathematical formulation of gravity.","hdurl":"https://apod.nasa.gov/apod/image/EdmondHalley_big.jpg","media_type":"image","service_version":"v1","title":"Edmond Halley's Greatest Discoveries","url":"https://apod.nasa.gov/apod/image/EdmondHalley.gif"},{"copyright":"Anglo-Australian Telescope\nBoard","date":"1997-10-23","explanation":"Can you find Supernova 1987a?  It's not hard - it occurred in the center of the bulls-eye pattern. Although this stellar detonation was seen more than a decade ago, light from it continues to bounce off nearby interstellar dust and be reflected to us.  These two rings are thus echoes of the powerful supernova.  As time goes on, these echoes appear to expand outward from the center.  The above image was created by subtracting a picture taken before 1987, from a picture taken after.","hdurl":"https://apod.nasa.gov/apod/image/9710/sn87echo_aat.gif","media_type":"image","service_version":"v1","title":"Echos of Supernova 1987A","url":"https://apod.nasa.gov/apod/image/9710/sn87echo_aat_big.jpg"},{"copyright":"Emmanuel Mallart","date":"2002-05-30","explanation":"Tomorrow's picture: in a canyon on Mars  < | Archive | Index | Search | Calendar | Glossary | Education | About APOD | >  Authors & editors: Robert Nemiroff (MTU) & Jerry Bonnell (USRA) NASA Technical Rep.: Jay Norris. Specific rights apply. A service of: LHEA at NASA/ GSFC & Michigan Tech. U.","hdurl":"https://apod.nasa.gov/apod/image/0205/orione_mallart_full.jpg","media_type":"image","service_version":"v1","title":"Orion Nebulosities","url":"https://apod.nasa.gov/apod/image/0205/orione_mallart_c1.jpg"},{"date":"2001-03-11","explanation":"Globular clusters once ruled the Milky Way.  Back in the old days, back when our Galaxy first formed, perhaps thousands of globular clusters roamed our Galaxy.  Today, there are perhaps 200 left.  Many globular clusters were destroyed over the eons by repeated fateful encounters with each other or the Galactic center.  Surviving relics are older than any Earth fossil, older than any other structures in our Galaxy, and limit the universe itself in raw age.  There are few, if any, young globular clusters in our Milky Way Galaxy because conditions are not ripe for more to form.  Things are different next door, however, in the neighboring LMC galaxy. Pictured above is a \"young\" globular cluster residing there: NGC 1818.  Observations show it formed only about 40 million years ago - just yesterday compared to the 12 billion year ages of globular clusters in our own Milky Way","hdurl":"https://apod.nasa.gov/apod/image/0103/ngc1818_hst_big.jpg","media_type":"image","service_version":"v1","title":"NGC 1818: A Young Globular Cluster","url":"https://apod.nasa.gov/apod/image/0103/ngc1818_hst.jpg"},{"date":"2000-09-01","explanation":"SOHO, the space-based SOlar and Heliospheric Observatory, has become by far the reigning champion facility for discovering comets, its total having recently reached 200. As might be expected of a solar observatory, most of the SOHO discovered comets are sungrazers, destined to dive within a mere 50 thousand kilometers or so of the solar photosphere. At that range the intense heat and gravitational forces make it unlikely these primitive chunks of ice and dust will survive. Based on their similar orbits, as first worked out by 19th century German astronomer Heinrich Kreutz, all sungrazers are believed to originate from a single large parent comet which broke up during a perihelion passage perhaps 2,000 years ago. Over time, pieces have continued to split off producing a family of smaller comets which seem to travel in the same orbit. These frames from SOHO's coronograph were taken two hours apart on April 29 of this year. They show a sungrazer (SOHO comet discovery number 111) with a long, bright tail headed toward its fiery encounter. The sun itself is hidden behind the coronograph's occulting disk at each frame's upper right.","hdurl":"https://apod.nasa.gov/apod/image/0009/slasc2_20000429_2154.gif","media_type":"image","service_version":"v1","title":"SOHO Sungrazer","url":"https://apod.nasa.gov/apod/image/0009/sohocomet_20000429_2154.jpg"},{"copyright":"Dirk Ewers","date":"2008-05-24","explanation":"Still bathed in sunlight, the International Space Station tracked through night skies above Hombressen, Germany on May 12. From a range of at least 360 kilometers, astronomer Dirk Ewers was able to record an impressively sharp video sequence of the passage with a small telescope, using some of the individual frames to construct this composite image. Sporting solar arrays, the station's integrated truss structure is nearly 90 meters long. The ATV Jules Verne is docked with the station, while the space station itself is orbiting at aproximately 27,800 kilometers per hour (17,200 mph). A complete video sequence is available as a 1 megabyte mpeg file or avi file.   digg_url = 'http://apod.nasa.gov/apod/ap080524.html'; digg_skin = 'compact';","hdurl":"https://apod.nasa.gov/apod/image/0805/080512iss_dewers.jpg","media_type":"image","service_version":"v1","title":"Space Station in the Sun","url":"https://apod.nasa.gov/apod/image/0805/080512iss_dewers800.jpg"},{"date":"1999-02-06","explanation":"The first US spacecraft was Explorer 1. The cylindrical 30 pound satellite was launched (above) as the fourth stage of a Jupiter-C rocket (a modified US Army Redstone ballistic missile) and achieved orbit on January 31, 1958. Explorer I carried instrumentation to measure internal and external temperatures, micrometeorite impacts, and an experiment designed by James A. Van Allen to measure the density of electrons and ions in space. The measurements made by Van Allen's experiment led to an unexpected and startling discovery -- an earth-encircling belt of high energy electrons and ions trapped in the magnetosphere now known as the Van Allen Belt. Explorer I ceased transmitting on February 28 of that year but remained in orbit until March of 1970.","hdurl":"https://apod.nasa.gov/apod/image/explaunch_abma_big.gif","media_type":"image","service_version":"v1","title":"The First Explorer","url":"https://apod.nasa.gov/apod/image/explaunch_abma.gif"},{"copyright":"P-M Hed\ufffdn","date":"2006-11-21","explanation":"This past weekend, small remnant bits of a distant comet lit up the skies over much of planet Earth.  Incoming reports, however, have this year's Leonid meteor shower as less active than Leonid meteor showers a few years ago.  Nevertheless, some sky enthusiasts reported peak meteor bursts as high as one visual meteor per minute.  The parent body of the Leonids meteor shower, Comet Tempel-Tuttle, leaves a trail of expelled sand-size particles every 33 years when it returns to the inner Solar System.  When the Earth passes through a stream of these Sun-orbiting particles, a meteor shower results.   Pictured above, a Leonid meteor was captured two days ago during the early morning hours of November 19 over Vallentuna, Sweden. Although activity levels in meteor showers are notoriously hard to predict, some astronomers speculate that Aurigids meteor shower next September might be unusually rich in bright meteors.","hdurl":"https://apod.nasa.gov/apod/image/0611/leonid06_heden_big.jpg","media_type":"image","service_version":"v1","title":"A Leonid Meteor Over Sweden \n","url":"https://apod.nasa.gov/apod/image/0611/leonid06_heden.jpg"},{"copyright":"Jurgen Blignaut","date":"1997-05-15","explanation":"Fighting the glow of the setting sun and the city lights of Cape Town, South Africa, comet Hale-Bopp is just visible near the center of this panoramic view - photographed on May 3rd. In the foreground is the Strand beach front, about 50 km East of Cape Town, while the Cape Peninsula mountain ranges can be seen at the left along the horizon. The bright star visible above and to the left of the comet is the red giant Aldebaran in the constellation Taurus. As Hale-Bopp continues its outbound journey during the month of May it will climb higher into evening southern skies. Still a bright comet it is now providing an enjoyable and much anticipated showing for Southern Hemisphere observers.","hdurl":"https://apod.nasa.gov/apod/image/9705/hb_jurgen_big.jpg","media_type":"image","service_version":"v1","title":"Hale-Bopp: Climbing Into Southern Skies","url":"https://apod.nasa.gov/apod/image/9705/hb_jurgen.jpg"},{"date":"2010-05-11","explanation":"Why is this giant crater on Mimas oddly colored? Mimas, one of the smaller round moons of Saturn, sports Herschel crater, one of the larger impact craters in the entire Solar System. The robotic Cassini spacecraft now orbiting Saturn took the above image of Herschel crater in unprecedented detail while making a 10,000-kilometer record close pass by the icy world just over one month ago. Shown in contrast-enhanced false color, the above image includes color information from older Mimas images that together show more clearly that Herschel's landscape is colored slightly differently from more heavily cratered terrain nearby.  The color difference could yield surface composition clues to the violent history of Mimas.  An impact on Mimas much larger than the one that created the 130-kilometer Herschel would likely have destroyed the entire world.","hdurl":"https://apod.nasa.gov/apod/image/1005/mimas2_cassini_big.jpg","media_type":"image","service_version":"v1","title":"Herschel Crater on Mimas of Saturn","url":"https://apod.nasa.gov/apod/image/1005/mimas2_cassini.jpg"},{"date":"2005-08-01","explanation":"Has a tenth planet been discovered?  A newly discovered object, designated 2003 UB313 and located more than twice the distance of Pluto, is expected to be at least as large as Pluto and probably larger, given current measurements. 2003 UB313's dimness and highly tilted orbit (44 degrees) prevented it from being discovered sooner.  Many astronomers speculate that numerous other icy objects larger than Pluto likely exist in the Kuiper Belt of the far distant Solar System.  If so, and if some are found closer in than 2003 UB313, it may be premature to call 2003 UB313 the tenth planet. Illustrated above is an artist's drawing showing how 2003 UB313 might look.  The unusually bright star on the right is the Sun.  Much of the world eagerly await the decision by the International Astronomical Union on whether 2003 UB313 will be designated a planet or given a name without subscripts.","hdurl":"https://apod.nasa.gov/apod/image/0508/2003ub313drawing_palomar_big.jpg","media_type":"image","service_version":"v1","title":"2003 UB313: A Tenth Planet?","url":"https://apod.nasa.gov/apod/image/0508/2003ub313drawing_palomar.jpg"},{"date":"2016-11-25","explanation":"Get out your red/blue glasses and check out this stereo scene from Taurus-Littrow valley on the Moon! The color anaglyph features a detailed 3D view of Apollo 17's Lunar Rover in the foreground -- behind it lies the Lunar Module and distant lunar hills. Because the world was  going to be able to watch the Lunar Module's ascent stage liftoff via the rover's TV camera, this parking place was also known as the VIP Site. In December of 1972, Apollo 17 astronauts Eugene Cernan and Harrison Schmitt spent about 75 hours on the Moon, while colleague Ronald Evans orbited overhead. The crew returned with 110 kilograms of rock and soil samples, more than from any of the other lunar landing sites. Cernan and Schmitt are still the last to walk (or drive) on the Moon.","hdurl":"https://apod.nasa.gov/apod/image/1611/a17anaglyph_vanMeijgaarden_f.jpg","media_type":"image","service_version":"v1","title":"Apollo 17 VIP Site Anaglyph","url":"https://apod.nasa.gov/apod/image/1611/a17anaglyph_vanMeijgaarden_c800.jpg"},{"copyright":"Gabriel Funes","date":"2021-07-10","explanation":"On July 8th early morning risers saw Mercury near an old Moon low on the eastern horizon. On that date bright planet, faint glow of lunar night side, and sunlit crescent were captured in this predawn skyscape from Tenerife's Teide National Park in the Canary Islands.  Never far from the Sun in planet Earth's sky, the fleeting inner planet shines near its brightest in the morning twilight scene. Mercury lies just below the zeta star of the constellation Taurus, Zeta Tauri, near the tip of the celestial bull's horn. Of course the Moon's ashen glow is earthshine, earthlight reflected from the Moon's night side. A description of earthshine, in terms of sunlight reflected by Earth's oceans illuminating the Moon's dark surface, was written over 500 years ago by Leonardo da Vinci. Waiting for the coming dawn in the foreground are the Teide Observatory's sentinels of the Sun, also known as (large domes left to right) the THEMIS, VTT, and GREGOR solar telescopes.","hdurl":"https://apod.nasa.gov/apod/image/2107/IMG_2021_07_08_29558_APOD.jpg","media_type":"image","service_version":"v1","title":"Mercury and the Da Vinci Glow","url":"https://apod.nasa.gov/apod/image/2107/IMG_2021_07_08_29558_APOD1024.jpg"},{"date":"2020-03-13","explanation":"A dramatic nocturnal landscape from around 1850, this oil painting is the work of French artist Jean-Francois Millet. In the dark and atmospheric night sky are shooting stars, known too as meteors, above a landscape showing a path through the faintly lit countryside that leads toward trees and a cart in silhouette on the horizon. Millet was raised in a farming family in Normandy and is known for his paintings of rural scenes and peasant life. This Starry Night was painted after the artist moved to Barbizon, about 30 kilometers southeast of any 19th century light pollution from Paris. Millet wrote to his brother at this time, \"If only you knew how beautiful the night is ... the calm and grandeur of it are so awesome that I find that I actually feel overwhelmed.\" Dutch artist Vincent van Gogh was an admirer of Millet's work, and later also painted two dramatic starry nights.","hdurl":"https://apod.nasa.gov/apod/image/2003/ag-obj-52945-001-pub-large.jpg","media_type":"image","service_version":"v1","title":"Starry Night by Jean-Francois Millet","url":"https://apod.nasa.gov/apod/image/2003/ag-obj-52945-001-1024b05.jpg"},{"date":"2013-09-09","explanation":"It is one of the most important stars in the sky. This is partly because, by coincidence, it is surrounded by a dazzling reflection nebula. Pulsating RS Puppis, the brightest star in the image center, is some ten times more massive than our Sun and on average 15,000 times more luminous. In fact, RS Pup is a Cepheid type variable star, a class of stars whose brightness is used to estimate distances to nearby galaxies as one of the first steps in establishing the cosmic distance scale. As RS Pup pulsates over a period of about 40 days, its regular changes in brightness are also seen along the nebula delayed in time, effectively a light echo. Using measurements of the time delay and angular size of the nebula, the known speed of light allows astronomers to geometrically determine the distance to RS Pup to be 6,500 light-years, with a remarkably small error of plus or minus 90 light-years. An impressive achievement for stellar astronomy, the echo-measured distance also more accurately establishes the true brightness of RS Pup, and by extension other Cepheid stars, improving the knowledge of distances to galaxies beyond the Milky Way. The above image was taken by the Hubble Space Telescope and digitally processed by a volunteer.   Star Party? List it here.","hdurl":"https://apod.nasa.gov/apod/image/1309/rspuppis_bryne_3938.jpg","media_type":"image","service_version":"v1","title":"Nearby Cepheid Variable RS Pup","url":"https://apod.nasa.gov/apod/image/1309/rspuppis_bryne_960.jpg"},{"copyright":"Sergio Mont\ufffdfarPlanetario Ciudad de La Plata","date":"2016-11-30","explanation":"What happened to this ship? It was carried aground by a giant storm that struck the coast of Argentina in 2002.  The pictured abandoned boat, dubbed Naufragio del Chubasco, wrecked near the nearly abandoned town of Cabo Raso (population: 1). The rusting ship provides a picturesque but perhaps creepy foreground for the beautiful sky above. This sky is crowned by the grand arch of our Milky Way and features galaxies including the Large and Small Magellanic Clouds, stars including Canopus and Altair, planets including Mars and Neptune, and nebulas including the Lagoon, Carina, and the Coal Sack. The mosaic was composed from over 80 images taken in early September.  A 360-degree interactive panoramic version of this image is also available.  The adventurous astrophotographer reports that the creepiest part of taking this picture was not the abandoned ship, but the unusual prevalence of black and hairy caterpillars.","hdurl":"https://apod.nasa.gov/apod/image/1611/OldShip_Montufar_3000_annotated.jpg","media_type":"image","service_version":"v1","title":"Milky Way over Shipwreck","url":"https://apod.nasa.gov/apod/image/1611/OldShip_Montufar_1080.jpg"},{"copyright":"Yin Hao","date":"2017-12-15","explanation":"rth's annual Geminid meteor shower did not disappoint as our fair planet plowed through dust from active asteroid 3200 Phaethon. Captured in this northern hemisphere nightscape, the meteors stream away from the shower's radiant in Gemini. To create the image, 37 individual frames recording meteor streaks were taken over period of 8.5 hours during the night of December 12/13. In the final composite they were selected and registered against the starry sky above a radio telescope dish of MUSER, a solar-dedicated radio telescope array at astronomically-named Mingantu Station in Inner Mongolia, China, about 400 kilometers from Beijing. Sirius, alpha star of Canis Major, shines brightly just above the radio dish and the Milky Way stretches toward the zenith. Yellowish Betelgeuse is a standout in Orion to the right of the northern Milky Way. The shower's radiant is at top left, high above the horizon near Castor and Pollux the twin stars of Gemini. The radiant effect is due to perspective as the parallel meteor tracks appear to converge in the distance.  Gemini's meteors enter Earth's atmosphere traveling at about 22 kilometers per second.   Submitted to APOD: Best images (so far) of the Geminid Meteor Shower 2017.","hdurl":"https://apod.nasa.gov/apod/image/1712/GeminidsYinHaoC.jpg","media_type":"image","service_version":"v1","title":"Geminids of the North","url":"https://apod.nasa.gov/apod/image/1712/GeminidsYinHao1024.jpg"},{"date":"2018-04-16","explanation":"What would it look like to fly over the North Pole of Jupiter? A fictional animation made from real images and data captured by NASA's Juno spacecraft shows an answer. Since the pole is presently in shadow, the video uses infrared light emitted by Jupiter -- specifically an infrared color where the hottest features glows the brightest.  As the animation starts, Juno zooms in on the enormous world.  Soon, one of the eight cyclones orbiting the North Pole is featured.  One by one, all eight cyclones circling the pole are inspected, each the size of an entire continent on Earth, and each containing bumpy and fragmented spiral walls.  The virtual trip ends with a zoom out.  Studying Jovian cyclones helps humanity to better understand dangerous storm systems that occur here on Earth.  Juno has recently concluded another close pass by Jupiter -- Perijove 12 -- and seems healthy enough to complete several more of the two-month orbits.","media_type":"video","service_version":"v1","title":"Flyover of Jupiter's North Pole in Infrared","url":"https://www.youtube.com/embed/By6sZ6RGCEQ?rel=0"},{"copyright":"Jordi Coy","date":"2022-07-11","explanation":"What is the oldest thing you can see? At 2.5 million light years distant, the answer for the unaided eye is the Andromeda galaxy, because its photons are 2.5 million years old when they reach you. Most other apparent denizens of the night sky -- stars, clusters, and nebulae -- appear as they were only a few hundred to a few thousand years ago, as they lie well within our own Milky Way Galaxy.  Given its distance, light from Andromeda is likely also the farthest object that you can see.  Also known as M31, the Andromeda Galaxy dominates the center of the featured zoomed image, taken from the Sahara Desert in Morocco last month.  The featured image is a combination of three background and one foreground exposure -- all taken with the same camera and from the same location and on the same calendar day -- with the foreground image taken during the evening blue hour. M110, a satellite galaxy of Andromenda is visible just above and to the left of M31's core. As cool as it may be to see this neighboring galaxy to our Milky Way with your own eyes, long duration camera exposures can pick up many faint and breathtaking details.  Recent data indicates that our Milky Way Galaxy will collide and combine with the similarly-sized Andromeda galaxy in a few billion years.","hdurl":"https://apod.nasa.gov/apod/image/2207/SaharaAndromeda_Coy_6135.jpg","media_type":"image","service_version":"v1","title":"Andromeda over the Sahara Desert","url":"https://apod.nasa.gov/apod/image/2207/SaharaAndromeda_Coy_1080.jpg"},{"date":"2005-06-01","explanation":"About 1,600 light-years away, in a binary star system fondly known as J0806, two dense white dwarf stars orbit each other once every 321 seconds. Interpreting x-ray data from the Chandra Observatory astronomers argue that the stars' already impressively short orbital period is steadily getting shorter as the stars spiral closer together. Even though they are separated by about 80,000 kilometers (the Earth-Moon distance is 400,000 kilometers) the two stars are therefore destined to merge. Depicted in this artist's vision, the death spiral of the remarkable J0806 system is a consequence of Einstein's theory of General Relativity that predicts the white dwarf stars will lose their orbital energy by generating gravity waves. In fact, J0806 could be one of the brightest sources of gravitational waves in our galaxy, directly detectable by future space-based gravity wave instruments.","hdurl":"https://apod.nasa.gov/apod/image/0506/wd_cxc_full.jpg","media_type":"image","service_version":"v1","title":"White Dwarf Star Spiral","url":"https://apod.nasa.gov/apod/image/0506/wd_cxc_c33.jpg"},{"date":"2020-12-01","explanation":"Are stars still forming in the Milky Way's satellite galaxies?  Found among the Small Magellanic Cloud's (SMC's) clusters and nebulas, NGC 346 is a star forming region about 200 light-years across, pictured here in the center of a Hubble Space Telescope image. A satellite galaxy of the Milky Way, the Small Magellanic Cloud (SMC) is a wonder of the southern sky, a mere 210,000 light-years distant in the constellation of the Toucan (Tucana). Exploring NGC 346, astronomers have identified a population of embryonic stars strung along the dark, intersecting dust lanes visible here on the right. Still collapsing within their natal clouds, the stellar infants' light is reddened by the intervening dust. Toward the top of the frame is another star cluster with intrinsically older and redder stars. A small, irregular galaxy, the SMC itself represents a type of galaxy more common in the early Universe. These small galaxies, though, are thought to be building blocks for the larger galaxies present today.   All 30: 2020 November APODs voiced by AI","hdurl":"https://apod.nasa.gov/apod/image/2012/Ngc346_HubbleSchmidt_3375.jpg","media_type":"image","service_version":"v1","title":"NGC 346: Star Forming Cluster in the SMC","url":"https://apod.nasa.gov/apod/image/2012/Ngc346_HubbleSchmidt_960.jpg"},{"copyright":"Frank Barrett","date":"2007-07-28","explanation":"The brilliant full Moon might not look quite like this to skygazers next Monday, but the image is a mosaic of 18 digital frames recorded when the Moon was only about seven hours past its exact full phase or time of maximum illumination as viewed from Earth. Here, the pixel values corresponding to light and dark areas have been translated in reverse, or inverted, producing a false-color representation reminiscent of a black and white photographic negative. Normally bright rays from the large crater Tycho dominate the southern (bottom) features as easily followed dark lines emanating from the 85 kilometer diameter impact site. Normally dark lunar mare appear light and silvery. Traditionally, astronomical images recorded on photographic plates were directly examined in this negative color scheme, which can help the eye pick out faint details.","hdurl":"https://apod.nasa.gov/apod/image/0707/InvertedFullMoon50_barrett_full.jpg","media_type":"image","service_version":"v1","title":"Full Moondark","url":"https://apod.nasa.gov/apod/image/0707/InvertedFullMoon_barrett_c1.jpg"},{"date":"2007-12-15","explanation":"This fantastic skyscape lies at the eastern edge of giant stellar nursery W5, about 7,000 light-years away in the constellation Cassiopeia. An infrared view from the Spitzer Space Telescope, it features interstellar clouds of cold gas and dust sculpted by winds and radiation from a hot, massive star outside the picture (just above and to the right). Still swaddled within the cosmic clouds, newborn stars are revealed by Spitzer's penetrating gaze, their formation also triggered by the massive star. Fittingly dubbed \"Mountains of Creation\", these interstellar clouds are about 10 times the size of the analogous Pillars of Creation in M16, made famous in a 1995 Hubble Space Telescope view. W5 is also known as IC 1848 and together with IC 1805 it is part of a complex region popularly dubbed the Heart and Soul Nebulae. The Spitzer image spans about 70 light-years at the distance of W5.","hdurl":"https://apod.nasa.gov/apod/image/0712/Mountains_spitzer_f.jpg","media_type":"image","service_version":"v1","title":"Mountains of Creation","url":"https://apod.nasa.gov/apod/image/0712/Mountains_spitzer_f800.jpg"},{"date":"2009-04-19","explanation":"In the center of a swirling whirlpool of hot gas is likely a beast that has never been seen directly: a black hole.  Studies of the bright light emitted by the swirling gas frequently indicate not only that a black hole is present, but also likely attributes.  The gas surrounding GRO J1655-40, for example, has been found to display an unusual flickering at a rate of 450 times a second.  Given a previous mass estimate for the central object of seven times the mass of our Sun, the rate of the fast flickering can be explained by a black hole that is rotating very rapidly.  What physical mechanisms actually cause the flickering -- and a slower quasi-periodic oscillation (QPO) -- in accretion disks surrounding black holes and neutron stars remains a topic of much research.   digg_url = 'http://apod.nasa.gov/apod/ap090419.html'; digg_skin = 'compact';","hdurl":"https://apod.nasa.gov/apod/image/0904/blackhole_hobart_big.jpg","media_type":"image","service_version":"v1","title":"The View Near a Black Hole","url":"https://apod.nasa.gov/apod/image/0904/blackhole_hobart.jpg"},{"date":"2019-07-03","explanation":"If you could fly across Titan, what would you see? To find out and to better explore this exotic moon of Saturn, NASA recently green-lighted Dragonfly, a mission to Titan with plans to deploy a helicopter-like drone. Saturn's moon Titan is one of the largest moons in the Solar System and the only moon known to have a thick atmosphere and changing hydrocarbon lakes. After development, building, testing, and launch, Dragonfly is currently scheduled to reach Titan in 2034. The featured animated video envisions Dragonfly arriving at Titan, beginning its airborne exploration, landing to establishing a radio link back to Earth, and then continuing on to another trans-Titanian flight. It is hoped that Dragonfly will not only help humanity better understanding Titan's weather, chemistry, and changing landscape, but also bolster humanity's understanding of how life first developed on our young Earth.   Astrophysicists: Browse 1,900+ codes in the Astrophysics Source Code Library","media_type":"video","service_version":"v1","title":"Robotic Dragonfly Selected to Fly Across Titan","url":"https://www.youtube.com/embed/t9-0p9KjHv8?rel=0"},{"copyright":"Adam Block","date":"2018-07-25","explanation":"What kind of celestial object is this? A relatively normal galaxy -- but seen from its edge.  Many disk galaxies are actually just as thin as NGC 5866, pictured here, but are not seen edge-on from our vantage point.  A perhaps more familiar galaxy seen edge-on is our own Milky Way Galaxy.  Cataloged as M102 and NGC 5866, the Spindle galaxy has numerous and complex dust lanes appearing dark and red, while many of the bright stars in the disk give it a more blue underlying hue.  The blue disk of young stars can be seen extending past the dust in the extremely thin galactic plane. There is evidence that the Spindle galaxy has cannibalized smaller galaxies over the past billion years or so, including multiple streams of faint stars, dark dust that extends away from the main galactic plane, and a surrounding group of galaxies (not shown).  In general, many disk galaxies become thin because the gas that forms them collides with itself as it rotates about the gravitational center. The Spindle galaxy lies about 50 million light years distant toward the constellation of the Dragon (Draco).","hdurl":"https://apod.nasa.gov/apod/image/1807/NGC5866_Block_1518.jpg","media_type":"image","service_version":"v1","title":"The Edge-On Spindle Galaxy","url":"https://apod.nasa.gov/apod/image/1807/NGC5866_Block_960.jpg"}],
  jamesWebbImages: [
    {
        "id": "jw02731001001_02105_00004_nrca1_cal.jpg",
        "observation_id": "jw02731001001_02105_00004_nrca1",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "FGS"
                },
                {
                    "instrument": "NIRCam"
                },
                {
                    "instrument": "NIRISS"
                },
                {
                    "instrument": "NIRSpec"
                },
                {
                    "instrument": "MIRI"
                }
            ],
            "suffix": "_cal",
            "description": "exposure (L2b): 2D calibrated exposure average over integrations"
        },
        "file_type": "jpg",
        "thumbnail": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001001/jw02731001001_02105_00004_nrca1_cal_thumb.jpg",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001001/jw02731001001_02105_00004_nrca1_cal.jpg"
    },
    {
        "id": "jw02731001001_02103_00001_nrcblong_cal.jpg",
        "observation_id": "jw02731001001_02103_00001_nrcblong",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "FGS"
                },
                {
                    "instrument": "NIRCam"
                },
                {
                    "instrument": "NIRISS"
                },
                {
                    "instrument": "NIRSpec"
                },
                {
                    "instrument": "MIRI"
                }
            ],
            "suffix": "_cal",
            "description": "exposure (L2b): 2D calibrated exposure average over integrations"
        },
        "file_type": "jpg",
        "thumbnail": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001001/jw02731001001_02103_00001_nrcblong_cal_thumb.jpg",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001001/jw02731001001_02103_00001_nrcblong_cal.jpg"
    },
    {
        "id": "jw02731001002_02103_00001_nrca2_cal.jpg",
        "observation_id": "jw02731001002_02103_00001_nrca2",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "FGS"
                },
                {
                    "instrument": "NIRCam"
                },
                {
                    "instrument": "NIRISS"
                },
                {
                    "instrument": "NIRSpec"
                },
                {
                    "instrument": "MIRI"
                }
            ],
            "suffix": "_cal",
            "description": "exposure (L2b): 2D calibrated exposure average over integrations"
        },
        "file_type": "jpg",
        "thumbnail": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001002/jw02731001002_02103_00001_nrca2_cal_thumb.jpg",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001002/jw02731001002_02103_00001_nrca2_cal.jpg"
    },
    {
        "id": "jw02731001003_02105_00002_nrcblong_o001_crf.jpg",
        "observation_id": "jw02731001003_02105_00002_nrcblong_o001",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "NIRCam"
                }
            ],
            "suffix": "_crf",
            "description": "exposure (L2c): 2D Calibrated data averaged over integrations"
        },
        "file_type": "jpg",
        "thumbnail": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001003/jw02731001003_02105_00002_nrcblong_o001_crf_thumb.jpg",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001003/jw02731001003_02105_00002_nrcblong_o001_crf.jpg"
    },
    {
        "id": "jw02731002005_02107_00005_mirimage_o002_crf.jpg",
        "observation_id": "jw02731002005_02107_00005_mirimage_o002",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "NIRCam"
                }
            ],
            "suffix": "_crf",
            "description": "exposure (L2c): 2D Calibrated data averaged over integrations"
        },
        "file_type": "jpg",
        "thumbnail": "",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731002005/jw02731002005_02107_00005_mirimage_o002_crf.jpg"
    },
    {
        "id": "jw02731001002_02103_00005_nrca2_cal.jpg",
        "observation_id": "jw02731001002_02103_00005_nrca2",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "FGS"
                },
                {
                    "instrument": "NIRCam"
                },
                {
                    "instrument": "NIRISS"
                },
                {
                    "instrument": "NIRSpec"
                },
                {
                    "instrument": "MIRI"
                }
            ],
            "suffix": "_cal",
            "description": "exposure (L2b): 2D calibrated exposure average over integrations"
        },
        "file_type": "jpg",
        "thumbnail": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001002/jw02731001002_02103_00005_nrca2_cal_thumb.jpg",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001002/jw02731001002_02103_00005_nrca2_cal.jpg"
    },
    {
        "id": "jw02731001004_02103_00001_nrcb2_o001_crf.jpg",
        "observation_id": "jw02731001004_02103_00001_nrcb2_o001",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "NIRCam"
                }
            ],
            "suffix": "_crf",
            "description": "exposure (L2c): 2D Calibrated data averaged over integrations"
        },
        "file_type": "jpg",
        "thumbnail": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001004/jw02731001004_02103_00001_nrcb2_o001_crf_thumb.jpg",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001004/jw02731001004_02103_00001_nrcb2_o001_crf.jpg"
    },
    {
        "id": "jw02731001002_02103_00001_nrcb3_o001_crf.jpg",
        "observation_id": "jw02731001002_02103_00001_nrcb3_o001",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "NIRCam"
                }
            ],
            "suffix": "_crf",
            "description": "exposure (L2c): 2D Calibrated data averaged over integrations"
        },
        "file_type": "jpg",
        "thumbnail": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001002/jw02731001002_02103_00001_nrcb3_o001_crf_thumb.jpg",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001002/jw02731001002_02103_00001_nrcb3_o001_crf.jpg"
    },
    {
        "id": "jw02731001001_02101_00001_nrca1_cal.jpg",
        "observation_id": "jw02731001001_02101_00001_nrca1",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "FGS"
                },
                {
                    "instrument": "NIRCam"
                },
                {
                    "instrument": "NIRISS"
                },
                {
                    "instrument": "NIRSpec"
                },
                {
                    "instrument": "MIRI"
                }
            ],
            "suffix": "_cal",
            "description": "exposure (L2b): 2D calibrated exposure average over integrations"
        },
        "file_type": "jpg",
        "thumbnail": "",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001001/jw02731001001_02101_00001_nrca1_cal.jpg"
    },
    {
        "id": "jw02731001004_02103_00002_nrcb4_o001_crf.jpg",
        "observation_id": "jw02731001004_02103_00002_nrcb4_o001",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "NIRCam"
                }
            ],
            "suffix": "_crf",
            "description": "exposure (L2c): 2D Calibrated data averaged over integrations"
        },
        "file_type": "jpg",
        "thumbnail": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001004/jw02731001004_02103_00002_nrcb4_o001_crf_thumb.jpg",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001004/jw02731001004_02103_00002_nrcb4_o001_crf.jpg"
    },
    {
        "id": "jw02731001003_02101_00002_nrca3_o001_crf.jpg",
        "observation_id": "jw02731001003_02101_00002_nrca3_o001",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "NIRCam"
                }
            ],
            "suffix": "_crf",
            "description": "exposure (L2c): 2D Calibrated data averaged over integrations"
        },
        "file_type": "jpg",
        "thumbnail": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001003/jw02731001003_02101_00002_nrca3_o001_crf_thumb.jpg",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001003/jw02731001003_02101_00002_nrca3_o001_crf.jpg"
    },
    {
        "id": "jw02731002004_02103_00006_mirimage_cal.jpg",
        "observation_id": "jw02731002004_02103_00006_mirimage",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "FGS"
                },
                {
                    "instrument": "NIRCam"
                },
                {
                    "instrument": "NIRISS"
                },
                {
                    "instrument": "NIRSpec"
                },
                {
                    "instrument": "MIRI"
                }
            ],
            "suffix": "_cal",
            "description": "exposure (L2b): 2D calibrated exposure average over integrations"
        },
        "file_type": "jpg",
        "thumbnail": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731002004/jw02731002004_02103_00006_mirimage_cal_thumb.jpg",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731002004/jw02731002004_02103_00006_mirimage_cal.jpg"
    },
    {
        "id": "jw02731002003_02101_00004_mirimage_o002_crf.jpg",
        "observation_id": "jw02731002003_02101_00004_mirimage_o002",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "NIRCam"
                }
            ],
            "suffix": "_crf",
            "description": "exposure (L2c): 2D Calibrated data averaged over integrations"
        },
        "file_type": "jpg",
        "thumbnail": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731002003/jw02731002003_02101_00004_mirimage_o002_crf_thumb.jpg",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731002003/jw02731002003_02101_00004_mirimage_o002_crf.jpg"
    },
    {
        "id": "jw02731001003_02103_00004_nrcb2_cal.jpg",
        "observation_id": "jw02731001003_02103_00004_nrcb2",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "FGS"
                },
                {
                    "instrument": "NIRCam"
                },
                {
                    "instrument": "NIRISS"
                },
                {
                    "instrument": "NIRSpec"
                },
                {
                    "instrument": "MIRI"
                }
            ],
            "suffix": "_cal",
            "description": "exposure (L2b): 2D calibrated exposure average over integrations"
        },
        "file_type": "jpg",
        "thumbnail": "",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001003/jw02731001003_02103_00004_nrcb2_cal.jpg"
    },
    {
        "id": "jw02731001003_02103_00003_nrcb3_cal.jpg",
        "observation_id": "jw02731001003_02103_00003_nrcb3",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "FGS"
                },
                {
                    "instrument": "NIRCam"
                },
                {
                    "instrument": "NIRISS"
                },
                {
                    "instrument": "NIRSpec"
                },
                {
                    "instrument": "MIRI"
                }
            ],
            "suffix": "_cal",
            "description": "exposure (L2b): 2D calibrated exposure average over integrations"
        },
        "file_type": "jpg",
        "thumbnail": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001003/jw02731001003_02103_00003_nrcb3_cal_thumb.jpg",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001003/jw02731001003_02103_00003_nrcb3_cal.jpg"
    },
    {
        "id": "jw02731001004_02101_00001_nrcb4_o001_crf.jpg",
        "observation_id": "jw02731001004_02101_00001_nrcb4_o001",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "NIRCam"
                }
            ],
            "suffix": "_crf",
            "description": "exposure (L2c): 2D Calibrated data averaged over integrations"
        },
        "file_type": "jpg",
        "thumbnail": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001004/jw02731001004_02101_00001_nrcb4_o001_crf_thumb.jpg",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001004/jw02731001004_02101_00001_nrcb4_o001_crf.jpg"
    },
    {
        "id": "jw02731001004_02101_00002_nrcb2_o001_crf.jpg",
        "observation_id": "jw02731001004_02101_00002_nrcb2_o001",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "NIRCam"
                }
            ],
            "suffix": "_crf",
            "description": "exposure (L2c): 2D Calibrated data averaged over integrations"
        },
        "file_type": "jpg",
        "thumbnail": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001004/jw02731001004_02101_00002_nrcb2_o001_crf_thumb.jpg",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001004/jw02731001004_02101_00002_nrcb2_o001_crf.jpg"
    },
    {
        "id": "jw02731001001_02103_00005_nrcblong_o001_crf.jpg",
        "observation_id": "jw02731001001_02103_00005_nrcblong_o001",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "NIRCam"
                }
            ],
            "suffix": "_crf",
            "description": "exposure (L2c): 2D Calibrated data averaged over integrations"
        },
        "file_type": "jpg",
        "thumbnail": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001001/jw02731001001_02103_00005_nrcblong_o001_crf_thumb.jpg",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001001/jw02731001001_02103_00005_nrcblong_o001_crf.jpg"
    },
    {
        "id": "jw02731001002_02103_00003_nrcb3_cal.jpg",
        "observation_id": "jw02731001002_02103_00003_nrcb3",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "FGS"
                },
                {
                    "instrument": "NIRCam"
                },
                {
                    "instrument": "NIRISS"
                },
                {
                    "instrument": "NIRSpec"
                },
                {
                    "instrument": "MIRI"
                }
            ],
            "suffix": "_cal",
            "description": "exposure (L2b): 2D calibrated exposure average over integrations"
        },
        "file_type": "jpg",
        "thumbnail": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001002/jw02731001002_02103_00003_nrcb3_cal_thumb.jpg",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001002/jw02731001002_02103_00003_nrcb3_cal.jpg"
    },
    {
        "id": "jw02731002001_02107_00005_mirimage_o002_crf.jpg",
        "observation_id": "jw02731002001_02107_00005_mirimage_o002",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "NIRCam"
                }
            ],
            "suffix": "_crf",
            "description": "exposure (L2c): 2D Calibrated data averaged over integrations"
        },
        "file_type": "jpg",
        "thumbnail": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731002001/jw02731002001_02107_00005_mirimage_o002_crf_thumb.jpg",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731002001/jw02731002001_02107_00005_mirimage_o002_crf.jpg"
    },
    {
        "id": "jw02731001004_02105_00003_nrcb2_o001_crf.jpg",
        "observation_id": "jw02731001004_02105_00003_nrcb2_o001",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "NIRCam"
                }
            ],
            "suffix": "_crf",
            "description": "exposure (L2c): 2D Calibrated data averaged over integrations"
        },
        "file_type": "jpg",
        "thumbnail": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001004/jw02731001004_02105_00003_nrcb2_o001_crf_thumb.jpg",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001004/jw02731001004_02105_00003_nrcb2_o001_crf.jpg"
    },
    {
        "id": "jw02731002004_02101_00004_mirimage_o002_crf.jpg",
        "observation_id": "jw02731002004_02101_00004_mirimage_o002",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "NIRCam"
                }
            ],
            "suffix": "_crf",
            "description": "exposure (L2c): 2D Calibrated data averaged over integrations"
        },
        "file_type": "jpg",
        "thumbnail": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731002004/jw02731002004_02101_00004_mirimage_o002_crf_thumb.jpg",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731002004/jw02731002004_02101_00004_mirimage_o002_crf.jpg"
    },
    {
        "id": "jw02731001001_02103_00005_nrcb4_cal.jpg",
        "observation_id": "jw02731001001_02103_00005_nrcb4",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "FGS"
                },
                {
                    "instrument": "NIRCam"
                },
                {
                    "instrument": "NIRISS"
                },
                {
                    "instrument": "NIRSpec"
                },
                {
                    "instrument": "MIRI"
                }
            ],
            "suffix": "_cal",
            "description": "exposure (L2b): 2D calibrated exposure average over integrations"
        },
        "file_type": "jpg",
        "thumbnail": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001001/jw02731001001_02103_00005_nrcb4_cal_thumb.jpg",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001001/jw02731001001_02103_00005_nrcb4_cal.jpg"
    },
    {
        "id": "jw02731001004_02105_00002_nrca1_cal.jpg",
        "observation_id": "jw02731001004_02105_00002_nrca1",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "FGS"
                },
                {
                    "instrument": "NIRCam"
                },
                {
                    "instrument": "NIRISS"
                },
                {
                    "instrument": "NIRSpec"
                },
                {
                    "instrument": "MIRI"
                }
            ],
            "suffix": "_cal",
            "description": "exposure (L2b): 2D calibrated exposure average over integrations"
        },
        "file_type": "jpg",
        "thumbnail": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001004/jw02731001004_02105_00002_nrca1_cal_thumb.jpg",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001004/jw02731001004_02105_00002_nrca1_cal.jpg"
    },
    {
        "id": "jw02731001004_02103_00004_nrca4_cal.jpg",
        "observation_id": "jw02731001004_02103_00004_nrca4",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "FGS"
                },
                {
                    "instrument": "NIRCam"
                },
                {
                    "instrument": "NIRISS"
                },
                {
                    "instrument": "NIRSpec"
                },
                {
                    "instrument": "MIRI"
                }
            ],
            "suffix": "_cal",
            "description": "exposure (L2b): 2D calibrated exposure average over integrations"
        },
        "file_type": "jpg",
        "thumbnail": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001004/jw02731001004_02103_00004_nrca4_cal_thumb.jpg",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001004/jw02731001004_02103_00004_nrca4_cal.jpg"
    },
    {
        "id": "jw02731001004_02105_00002_nrca4_o001_crf.jpg",
        "observation_id": "jw02731001004_02105_00002_nrca4_o001",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "NIRCam"
                }
            ],
            "suffix": "_crf",
            "description": "exposure (L2c): 2D Calibrated data averaged over integrations"
        },
        "file_type": "jpg",
        "thumbnail": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001004/jw02731001004_02105_00002_nrca4_o001_crf_thumb.jpg",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001004/jw02731001004_02105_00002_nrca4_o001_crf.jpg"
    },
    {
        "id": "jw02731001002_02101_00003_nrcb2_o001_crf.jpg",
        "observation_id": "jw02731001002_02101_00003_nrcb2_o001",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "NIRCam"
                }
            ],
            "suffix": "_crf",
            "description": "exposure (L2c): 2D Calibrated data averaged over integrations"
        },
        "file_type": "jpg",
        "thumbnail": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001002/jw02731001002_02101_00003_nrcb2_o001_crf_thumb.jpg",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001002/jw02731001002_02101_00003_nrcb2_o001_crf.jpg"
    },
    {
        "id": "jw02731001001_02101_00004_nrcb2_o001_crf.jpg",
        "observation_id": "jw02731001001_02101_00004_nrcb2_o001",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "NIRCam"
                }
            ],
            "suffix": "_crf",
            "description": "exposure (L2c): 2D Calibrated data averaged over integrations"
        },
        "file_type": "jpg",
        "thumbnail": "",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001001/jw02731001001_02101_00004_nrcb2_o001_crf.jpg"
    },
    {
        "id": "jw02731002005_02107_00002_mirimage_o002_crf.jpg",
        "observation_id": "jw02731002005_02107_00002_mirimage_o002",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "NIRCam"
                }
            ],
            "suffix": "_crf",
            "description": "exposure (L2c): 2D Calibrated data averaged over integrations"
        },
        "file_type": "jpg",
        "thumbnail": "",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731002005/jw02731002005_02107_00002_mirimage_o002_crf.jpg"
    },
    {
        "id": "jw02731002002_02107_00001_mirimage_o002_crf.jpg",
        "observation_id": "jw02731002002_02107_00001_mirimage_o002",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "NIRCam"
                }
            ],
            "suffix": "_crf",
            "description": "exposure (L2c): 2D Calibrated data averaged over integrations"
        },
        "file_type": "jpg",
        "thumbnail": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731002002/jw02731002002_02107_00001_mirimage_o002_crf_thumb.jpg",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731002002/jw02731002002_02107_00001_mirimage_o002_crf.jpg"
    },
    {
        "id": "jw02731001001_02105_00004_nrca3_cal.jpg",
        "observation_id": "jw02731001001_02105_00004_nrca3",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "FGS"
                },
                {
                    "instrument": "NIRCam"
                },
                {
                    "instrument": "NIRISS"
                },
                {
                    "instrument": "NIRSpec"
                },
                {
                    "instrument": "MIRI"
                }
            ],
            "suffix": "_cal",
            "description": "exposure (L2b): 2D calibrated exposure average over integrations"
        },
        "file_type": "jpg",
        "thumbnail": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001001/jw02731001001_02105_00004_nrca3_cal_thumb.jpg",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001001/jw02731001001_02105_00004_nrca3_cal.jpg"
    },
    {
        "id": "jw02731001003_02103_00004_nrca2_cal.jpg",
        "observation_id": "jw02731001003_02103_00004_nrca2",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "FGS"
                },
                {
                    "instrument": "NIRCam"
                },
                {
                    "instrument": "NIRISS"
                },
                {
                    "instrument": "NIRSpec"
                },
                {
                    "instrument": "MIRI"
                }
            ],
            "suffix": "_cal",
            "description": "exposure (L2b): 2D calibrated exposure average over integrations"
        },
        "file_type": "jpg",
        "thumbnail": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001003/jw02731001003_02103_00004_nrca2_cal_thumb.jpg",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001003/jw02731001003_02103_00004_nrca2_cal.jpg"
    },
    {
        "id": "jw02731001004_02101_00002_nrcalong_cal.jpg",
        "observation_id": "jw02731001004_02101_00002_nrcalong",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "FGS"
                },
                {
                    "instrument": "NIRCam"
                },
                {
                    "instrument": "NIRISS"
                },
                {
                    "instrument": "NIRSpec"
                },
                {
                    "instrument": "MIRI"
                }
            ],
            "suffix": "_cal",
            "description": "exposure (L2b): 2D calibrated exposure average over integrations"
        },
        "file_type": "jpg",
        "thumbnail": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001004/jw02731001004_02101_00002_nrcalong_cal_thumb.jpg",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001004/jw02731001004_02101_00002_nrcalong_cal.jpg"
    },
    {
        "id": "jw02731001004_02101_00005_nrcb4_cal.jpg",
        "observation_id": "jw02731001004_02101_00005_nrcb4",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "FGS"
                },
                {
                    "instrument": "NIRCam"
                },
                {
                    "instrument": "NIRISS"
                },
                {
                    "instrument": "NIRSpec"
                },
                {
                    "instrument": "MIRI"
                }
            ],
            "suffix": "_cal",
            "description": "exposure (L2b): 2D calibrated exposure average over integrations"
        },
        "file_type": "jpg",
        "thumbnail": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001004/jw02731001004_02101_00005_nrcb4_cal_thumb.jpg",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001004/jw02731001004_02101_00005_nrcb4_cal.jpg"
    },
    {
        "id": "jw02731001002_02105_00004_nrcblong_o001_crf.jpg",
        "observation_id": "jw02731001002_02105_00004_nrcblong_o001",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "NIRCam"
                }
            ],
            "suffix": "_crf",
            "description": "exposure (L2c): 2D Calibrated data averaged over integrations"
        },
        "file_type": "jpg",
        "thumbnail": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001002/jw02731001002_02105_00004_nrcblong_o001_crf_thumb.jpg",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001002/jw02731001002_02105_00004_nrcblong_o001_crf.jpg"
    },
    {
        "id": "jw02731001003_02101_00003_nrca4_o001_crf.jpg",
        "observation_id": "jw02731001003_02101_00003_nrca4_o001",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "NIRCam"
                }
            ],
            "suffix": "_crf",
            "description": "exposure (L2c): 2D Calibrated data averaged over integrations"
        },
        "file_type": "jpg",
        "thumbnail": "",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001003/jw02731001003_02101_00003_nrca4_o001_crf.jpg"
    },
    {
        "id": "jw02731001004_02105_00001_nrca3_o001_crf.jpg",
        "observation_id": "jw02731001004_02105_00001_nrca3_o001",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "NIRCam"
                }
            ],
            "suffix": "_crf",
            "description": "exposure (L2c): 2D Calibrated data averaged over integrations"
        },
        "file_type": "jpg",
        "thumbnail": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001004/jw02731001004_02105_00001_nrca3_o001_crf_thumb.jpg",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001004/jw02731001004_02105_00001_nrca3_o001_crf.jpg"
    },
    {
        "id": "jw02731001002_02101_00004_nrca2_o001_crf.jpg",
        "observation_id": "jw02731001002_02101_00004_nrca2_o001",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "NIRCam"
                }
            ],
            "suffix": "_crf",
            "description": "exposure (L2c): 2D Calibrated data averaged over integrations"
        },
        "file_type": "jpg",
        "thumbnail": "",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001002/jw02731001002_02101_00004_nrca2_o001_crf.jpg"
    },
    {
        "id": "jw02731002004_02107_00005_mirimage_cal.jpg",
        "observation_id": "jw02731002004_02107_00005_mirimage",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "FGS"
                },
                {
                    "instrument": "NIRCam"
                },
                {
                    "instrument": "NIRISS"
                },
                {
                    "instrument": "NIRSpec"
                },
                {
                    "instrument": "MIRI"
                }
            ],
            "suffix": "_cal",
            "description": "exposure (L2b): 2D calibrated exposure average over integrations"
        },
        "file_type": "jpg",
        "thumbnail": "",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731002004/jw02731002004_02107_00005_mirimage_cal.jpg"
    },
    {
        "id": "jw02731001002_02103_00001_nrcb3_cal.jpg",
        "observation_id": "jw02731001002_02103_00001_nrcb3",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "FGS"
                },
                {
                    "instrument": "NIRCam"
                },
                {
                    "instrument": "NIRISS"
                },
                {
                    "instrument": "NIRSpec"
                },
                {
                    "instrument": "MIRI"
                }
            ],
            "suffix": "_cal",
            "description": "exposure (L2b): 2D calibrated exposure average over integrations"
        },
        "file_type": "jpg",
        "thumbnail": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001002/jw02731001002_02103_00001_nrcb3_cal_thumb.jpg",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001002/jw02731001002_02103_00001_nrcb3_cal.jpg"
    },
    {
        "id": "jw02731001003_02101_00005_nrcb4_o001_crf.jpg",
        "observation_id": "jw02731001003_02101_00005_nrcb4_o001",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "NIRCam"
                }
            ],
            "suffix": "_crf",
            "description": "exposure (L2c): 2D Calibrated data averaged over integrations"
        },
        "file_type": "jpg",
        "thumbnail": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001003/jw02731001003_02101_00005_nrcb4_o001_crf_thumb.jpg",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001003/jw02731001003_02101_00005_nrcb4_o001_crf.jpg"
    },
    {
        "id": "jw02731001004_02101_00003_nrca3_o001_crf.jpg",
        "observation_id": "jw02731001004_02101_00003_nrca3_o001",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "NIRCam"
                }
            ],
            "suffix": "_crf",
            "description": "exposure (L2c): 2D Calibrated data averaged over integrations"
        },
        "file_type": "jpg",
        "thumbnail": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001004/jw02731001004_02101_00003_nrca3_o001_crf_thumb.jpg",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001004/jw02731001004_02101_00003_nrca3_o001_crf.jpg"
    },
    {
        "id": "jw02731002003_02103_00005_mirimage_o002_crf.jpg",
        "observation_id": "jw02731002003_02103_00005_mirimage_o002",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "NIRCam"
                }
            ],
            "suffix": "_crf",
            "description": "exposure (L2c): 2D Calibrated data averaged over integrations"
        },
        "file_type": "jpg",
        "thumbnail": "",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731002003/jw02731002003_02103_00005_mirimage_o002_crf.jpg"
    },
    {
        "id": "jw02731002002_02101_00002_mirimage_o002_crf.jpg",
        "observation_id": "jw02731002002_02101_00002_mirimage_o002",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "NIRCam"
                }
            ],
            "suffix": "_crf",
            "description": "exposure (L2c): 2D Calibrated data averaged over integrations"
        },
        "file_type": "jpg",
        "thumbnail": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731002002/jw02731002002_02101_00002_mirimage_o002_crf_thumb.jpg",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731002002/jw02731002002_02101_00002_mirimage_o002_crf.jpg"
    },
    {
        "id": "jw02731002005_02105_00002_mirimage_o002_crf.jpg",
        "observation_id": "jw02731002005_02105_00002_mirimage_o002",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "NIRCam"
                }
            ],
            "suffix": "_crf",
            "description": "exposure (L2c): 2D Calibrated data averaged over integrations"
        },
        "file_type": "jpg",
        "thumbnail": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731002005/jw02731002005_02105_00002_mirimage_o002_crf_thumb.jpg",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731002005/jw02731002005_02105_00002_mirimage_o002_crf.jpg"
    },
    {
        "id": "jw02731002001_02107_00004_mirimage_o002_crf.jpg",
        "observation_id": "jw02731002001_02107_00004_mirimage_o002",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "NIRCam"
                }
            ],
            "suffix": "_crf",
            "description": "exposure (L2c): 2D Calibrated data averaged over integrations"
        },
        "file_type": "jpg",
        "thumbnail": "",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731002001/jw02731002001_02107_00004_mirimage_o002_crf.jpg"
    },
    {
        "id": "jw02731002003_02105_00004_mirimage_cal.jpg",
        "observation_id": "jw02731002003_02105_00004_mirimage",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "FGS"
                },
                {
                    "instrument": "NIRCam"
                },
                {
                    "instrument": "NIRISS"
                },
                {
                    "instrument": "NIRSpec"
                },
                {
                    "instrument": "MIRI"
                }
            ],
            "suffix": "_cal",
            "description": "exposure (L2b): 2D calibrated exposure average over integrations"
        },
        "file_type": "jpg",
        "thumbnail": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731002003/jw02731002003_02105_00004_mirimage_cal_thumb.jpg",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731002003/jw02731002003_02105_00004_mirimage_cal.jpg"
    },
    {
        "id": "jw02731001003_02105_00004_nrca4_cal.jpg",
        "observation_id": "jw02731001003_02105_00004_nrca4",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "FGS"
                },
                {
                    "instrument": "NIRCam"
                },
                {
                    "instrument": "NIRISS"
                },
                {
                    "instrument": "NIRSpec"
                },
                {
                    "instrument": "MIRI"
                }
            ],
            "suffix": "_cal",
            "description": "exposure (L2b): 2D calibrated exposure average over integrations"
        },
        "file_type": "jpg",
        "thumbnail": "",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001003/jw02731001003_02105_00004_nrca4_cal.jpg"
    },
    {
        "id": "jw02731001004_02101_00001_nrcb1_cal.jpg",
        "observation_id": "jw02731001004_02101_00001_nrcb1",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "FGS"
                },
                {
                    "instrument": "NIRCam"
                },
                {
                    "instrument": "NIRISS"
                },
                {
                    "instrument": "NIRSpec"
                },
                {
                    "instrument": "MIRI"
                }
            ],
            "suffix": "_cal",
            "description": "exposure (L2b): 2D calibrated exposure average over integrations"
        },
        "file_type": "jpg",
        "thumbnail": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001004/jw02731001004_02101_00001_nrcb1_cal_thumb.jpg",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001004/jw02731001004_02101_00001_nrcb1_cal.jpg"
    },
    {
        "id": "jw02731001001_02101_00005_nrcalong_o001_crf.jpg",
        "observation_id": "jw02731001001_02101_00005_nrcalong_o001",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "NIRCam"
                }
            ],
            "suffix": "_crf",
            "description": "exposure (L2c): 2D Calibrated data averaged over integrations"
        },
        "file_type": "jpg",
        "thumbnail": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001001/jw02731001001_02101_00005_nrcalong_o001_crf_thumb.jpg",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001001/jw02731001001_02101_00005_nrcalong_o001_crf.jpg"
    },
    {
        "id": "jw02731002004_02101_00004_mirimage_cal.jpg",
        "observation_id": "jw02731002004_02101_00004_mirimage",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "FGS"
                },
                {
                    "instrument": "NIRCam"
                },
                {
                    "instrument": "NIRISS"
                },
                {
                    "instrument": "NIRSpec"
                },
                {
                    "instrument": "MIRI"
                }
            ],
            "suffix": "_cal",
            "description": "exposure (L2b): 2D calibrated exposure average over integrations"
        },
        "file_type": "jpg",
        "thumbnail": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731002004/jw02731002004_02101_00004_mirimage_cal_thumb.jpg",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731002004/jw02731002004_02101_00004_mirimage_cal.jpg"
    },
    {
        "id": "jw02731001004_02105_00004_nrca3_o001_crf.jpg",
        "observation_id": "jw02731001004_02105_00004_nrca3_o001",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "NIRCam"
                }
            ],
            "suffix": "_crf",
            "description": "exposure (L2c): 2D Calibrated data averaged over integrations"
        },
        "file_type": "jpg",
        "thumbnail": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001004/jw02731001004_02105_00004_nrca3_o001_crf_thumb.jpg",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001004/jw02731001004_02105_00004_nrca3_o001_crf.jpg"
    },
    {
        "id": "jw02731002005_02105_00006_mirimage_o002_crf.jpg",
        "observation_id": "jw02731002005_02105_00006_mirimage_o002",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "NIRCam"
                }
            ],
            "suffix": "_crf",
            "description": "exposure (L2c): 2D Calibrated data averaged over integrations"
        },
        "file_type": "jpg",
        "thumbnail": "",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731002005/jw02731002005_02105_00006_mirimage_o002_crf.jpg"
    },
    {
        "id": "jw02731002001_02103_00003_mirimage_cal.jpg",
        "observation_id": "jw02731002001_02103_00003_mirimage",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "FGS"
                },
                {
                    "instrument": "NIRCam"
                },
                {
                    "instrument": "NIRISS"
                },
                {
                    "instrument": "NIRSpec"
                },
                {
                    "instrument": "MIRI"
                }
            ],
            "suffix": "_cal",
            "description": "exposure (L2b): 2D calibrated exposure average over integrations"
        },
        "file_type": "jpg",
        "thumbnail": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731002001/jw02731002001_02103_00003_mirimage_cal_thumb.jpg",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731002001/jw02731002001_02103_00003_mirimage_cal.jpg"
    },
    {
        "id": "jw02731001003_02103_00003_nrcalong_o001_crf.jpg",
        "observation_id": "jw02731001003_02103_00003_nrcalong_o001",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "NIRCam"
                }
            ],
            "suffix": "_crf",
            "description": "exposure (L2c): 2D Calibrated data averaged over integrations"
        },
        "file_type": "jpg",
        "thumbnail": "",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001003/jw02731001003_02103_00003_nrcalong_o001_crf.jpg"
    },
    {
        "id": "jw02731001001_02101_00004_nrcb1_o001_crf.jpg",
        "observation_id": "jw02731001001_02101_00004_nrcb1_o001",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "NIRCam"
                }
            ],
            "suffix": "_crf",
            "description": "exposure (L2c): 2D Calibrated data averaged over integrations"
        },
        "file_type": "jpg",
        "thumbnail": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001001/jw02731001001_02101_00004_nrcb1_o001_crf_thumb.jpg",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001001/jw02731001001_02101_00004_nrcb1_o001_crf.jpg"
    },
    {
        "id": "jw02731002003_02107_00006_mirimage_o002_crf.jpg",
        "observation_id": "jw02731002003_02107_00006_mirimage_o002",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "NIRCam"
                }
            ],
            "suffix": "_crf",
            "description": "exposure (L2c): 2D Calibrated data averaged over integrations"
        },
        "file_type": "jpg",
        "thumbnail": "",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731002003/jw02731002003_02107_00006_mirimage_o002_crf.jpg"
    },
    {
        "id": "jw02731001001_02101_00005_nrca3_cal.jpg",
        "observation_id": "jw02731001001_02101_00005_nrca3",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "FGS"
                },
                {
                    "instrument": "NIRCam"
                },
                {
                    "instrument": "NIRISS"
                },
                {
                    "instrument": "NIRSpec"
                },
                {
                    "instrument": "MIRI"
                }
            ],
            "suffix": "_cal",
            "description": "exposure (L2b): 2D calibrated exposure average over integrations"
        },
        "file_type": "jpg",
        "thumbnail": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001001/jw02731001001_02101_00005_nrca3_cal_thumb.jpg",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001001/jw02731001001_02101_00005_nrca3_cal.jpg"
    },
    {
        "id": "jw02731001001_02103_00002_nrcb1_cal.jpg",
        "observation_id": "jw02731001001_02103_00002_nrcb1",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "FGS"
                },
                {
                    "instrument": "NIRCam"
                },
                {
                    "instrument": "NIRISS"
                },
                {
                    "instrument": "NIRSpec"
                },
                {
                    "instrument": "MIRI"
                }
            ],
            "suffix": "_cal",
            "description": "exposure (L2b): 2D calibrated exposure average over integrations"
        },
        "file_type": "jpg",
        "thumbnail": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001001/jw02731001001_02103_00002_nrcb1_cal_thumb.jpg",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001001/jw02731001001_02103_00002_nrcb1_cal.jpg"
    },
    {
        "id": "jw02731001001_02103_00005_nrcb4_o001_crf.jpg",
        "observation_id": "jw02731001001_02103_00005_nrcb4_o001",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "NIRCam"
                }
            ],
            "suffix": "_crf",
            "description": "exposure (L2c): 2D Calibrated data averaged over integrations"
        },
        "file_type": "jpg",
        "thumbnail": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001001/jw02731001001_02103_00005_nrcb4_o001_crf_thumb.jpg",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001001/jw02731001001_02103_00005_nrcb4_o001_crf.jpg"
    },
    {
        "id": "jw02731001001_02103_00004_nrcb2_cal.jpg",
        "observation_id": "jw02731001001_02103_00004_nrcb2",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "FGS"
                },
                {
                    "instrument": "NIRCam"
                },
                {
                    "instrument": "NIRISS"
                },
                {
                    "instrument": "NIRSpec"
                },
                {
                    "instrument": "MIRI"
                }
            ],
            "suffix": "_cal",
            "description": "exposure (L2b): 2D calibrated exposure average over integrations"
        },
        "file_type": "jpg",
        "thumbnail": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001001/jw02731001001_02103_00004_nrcb2_cal_thumb.jpg",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001001/jw02731001001_02103_00004_nrcb2_cal.jpg"
    },
    {
        "id": "jw02731001002_02105_00005_nrca4_o001_crf.jpg",
        "observation_id": "jw02731001002_02105_00005_nrca4_o001",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "NIRCam"
                }
            ],
            "suffix": "_crf",
            "description": "exposure (L2c): 2D Calibrated data averaged over integrations"
        },
        "file_type": "jpg",
        "thumbnail": "",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001002/jw02731001002_02105_00005_nrca4_o001_crf.jpg"
    },
    {
        "id": "jw02731001001_02103_00002_nrcb1_o001_crf.jpg",
        "observation_id": "jw02731001001_02103_00002_nrcb1_o001",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "NIRCam"
                }
            ],
            "suffix": "_crf",
            "description": "exposure (L2c): 2D Calibrated data averaged over integrations"
        },
        "file_type": "jpg",
        "thumbnail": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001001/jw02731001001_02103_00002_nrcb1_o001_crf_thumb.jpg",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001001/jw02731001001_02103_00002_nrcb1_o001_crf.jpg"
    },
    {
        "id": "jw02731002004_02103_00001_mirimage_o002_crf.jpg",
        "observation_id": "jw02731002004_02103_00001_mirimage_o002",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "NIRCam"
                }
            ],
            "suffix": "_crf",
            "description": "exposure (L2c): 2D Calibrated data averaged over integrations"
        },
        "file_type": "jpg",
        "thumbnail": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731002004/jw02731002004_02103_00001_mirimage_o002_crf_thumb.jpg",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731002004/jw02731002004_02103_00001_mirimage_o002_crf.jpg"
    },
    {
        "id": "jw02731001001_02105_00002_nrcalong_o001_crf.jpg",
        "observation_id": "jw02731001001_02105_00002_nrcalong_o001",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "NIRCam"
                }
            ],
            "suffix": "_crf",
            "description": "exposure (L2c): 2D Calibrated data averaged over integrations"
        },
        "file_type": "jpg",
        "thumbnail": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001001/jw02731001001_02105_00002_nrcalong_o001_crf_thumb.jpg",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001001/jw02731001001_02105_00002_nrcalong_o001_crf.jpg"
    },
    {
        "id": "jw02731002005_02103_00005_mirimage_o002_crf.jpg",
        "observation_id": "jw02731002005_02103_00005_mirimage_o002",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "NIRCam"
                }
            ],
            "suffix": "_crf",
            "description": "exposure (L2c): 2D Calibrated data averaged over integrations"
        },
        "file_type": "jpg",
        "thumbnail": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731002005/jw02731002005_02103_00005_mirimage_o002_crf_thumb.jpg",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731002005/jw02731002005_02103_00005_mirimage_o002_crf.jpg"
    },
    {
        "id": "jw02731001001_02101_00001_nrcalong_o001_crf.jpg",
        "observation_id": "jw02731001001_02101_00001_nrcalong_o001",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "NIRCam"
                }
            ],
            "suffix": "_crf",
            "description": "exposure (L2c): 2D Calibrated data averaged over integrations"
        },
        "file_type": "jpg",
        "thumbnail": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001001/jw02731001001_02101_00001_nrcalong_o001_crf_thumb.jpg",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001001/jw02731001001_02101_00001_nrcalong_o001_crf.jpg"
    },
    {
        "id": "jw02731001004_02105_00002_nrca1_o001_crf.jpg",
        "observation_id": "jw02731001004_02105_00002_nrca1_o001",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "NIRCam"
                }
            ],
            "suffix": "_crf",
            "description": "exposure (L2c): 2D Calibrated data averaged over integrations"
        },
        "file_type": "jpg",
        "thumbnail": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001004/jw02731001004_02105_00002_nrca1_o001_crf_thumb.jpg",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001004/jw02731001004_02105_00002_nrca1_o001_crf.jpg"
    },
    {
        "id": "jw02731001002_02101_00002_nrcb1_o001_crf.jpg",
        "observation_id": "jw02731001002_02101_00002_nrcb1_o001",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "NIRCam"
                }
            ],
            "suffix": "_crf",
            "description": "exposure (L2c): 2D Calibrated data averaged over integrations"
        },
        "file_type": "jpg",
        "thumbnail": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001002/jw02731001002_02101_00002_nrcb1_o001_crf_thumb.jpg",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001002/jw02731001002_02101_00002_nrcb1_o001_crf.jpg"
    },
    {
        "id": "jw02731001004_02101_00003_nrcb2_o001_crf.jpg",
        "observation_id": "jw02731001004_02101_00003_nrcb2_o001",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "NIRCam"
                }
            ],
            "suffix": "_crf",
            "description": "exposure (L2c): 2D Calibrated data averaged over integrations"
        },
        "file_type": "jpg",
        "thumbnail": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001004/jw02731001004_02101_00003_nrcb2_o001_crf_thumb.jpg",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001004/jw02731001004_02101_00003_nrcb2_o001_crf.jpg"
    },
    {
        "id": "jw02731001002_02105_00002_nrca2_cal.jpg",
        "observation_id": "jw02731001002_02105_00002_nrca2",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "FGS"
                },
                {
                    "instrument": "NIRCam"
                },
                {
                    "instrument": "NIRISS"
                },
                {
                    "instrument": "NIRSpec"
                },
                {
                    "instrument": "MIRI"
                }
            ],
            "suffix": "_cal",
            "description": "exposure (L2b): 2D calibrated exposure average over integrations"
        },
        "file_type": "jpg",
        "thumbnail": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001002/jw02731001002_02105_00002_nrca2_cal_thumb.jpg",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001002/jw02731001002_02105_00002_nrca2_cal.jpg"
    },
    {
        "id": "jw02731001001_02101_00003_nrcalong_o001_crf.jpg",
        "observation_id": "jw02731001001_02101_00003_nrcalong_o001",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "NIRCam"
                }
            ],
            "suffix": "_crf",
            "description": "exposure (L2c): 2D Calibrated data averaged over integrations"
        },
        "file_type": "jpg",
        "thumbnail": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001001/jw02731001001_02101_00003_nrcalong_o001_crf_thumb.jpg",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001001/jw02731001001_02101_00003_nrcalong_o001_crf.jpg"
    },
    {
        "id": "jw02731001003_02105_00002_nrca2_o001_crf.jpg",
        "observation_id": "jw02731001003_02105_00002_nrca2_o001",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "NIRCam"
                }
            ],
            "suffix": "_crf",
            "description": "exposure (L2c): 2D Calibrated data averaged over integrations"
        },
        "file_type": "jpg",
        "thumbnail": "",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001003/jw02731001003_02105_00002_nrca2_o001_crf.jpg"
    },
    {
        "id": "jw02731001001_02101_00002_nrcb2_cal.jpg",
        "observation_id": "jw02731001001_02101_00002_nrcb2",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "FGS"
                },
                {
                    "instrument": "NIRCam"
                },
                {
                    "instrument": "NIRISS"
                },
                {
                    "instrument": "NIRSpec"
                },
                {
                    "instrument": "MIRI"
                }
            ],
            "suffix": "_cal",
            "description": "exposure (L2b): 2D calibrated exposure average over integrations"
        },
        "file_type": "jpg",
        "thumbnail": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001001/jw02731001001_02101_00002_nrcb2_cal_thumb.jpg",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001001/jw02731001001_02101_00002_nrcb2_cal.jpg"
    },
    {
        "id": "jw02731001002_02103_00002_nrcb3_o001_crf.jpg",
        "observation_id": "jw02731001002_02103_00002_nrcb3_o001",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "NIRCam"
                }
            ],
            "suffix": "_crf",
            "description": "exposure (L2c): 2D Calibrated data averaged over integrations"
        },
        "file_type": "jpg",
        "thumbnail": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001002/jw02731001002_02103_00002_nrcb3_o001_crf_thumb.jpg",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001002/jw02731001002_02103_00002_nrcb3_o001_crf.jpg"
    },
    {
        "id": "jw02731001003_02103_00002_nrcblong_cal.jpg",
        "observation_id": "jw02731001003_02103_00002_nrcblong",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "FGS"
                },
                {
                    "instrument": "NIRCam"
                },
                {
                    "instrument": "NIRISS"
                },
                {
                    "instrument": "NIRSpec"
                },
                {
                    "instrument": "MIRI"
                }
            ],
            "suffix": "_cal",
            "description": "exposure (L2b): 2D calibrated exposure average over integrations"
        },
        "file_type": "jpg",
        "thumbnail": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001003/jw02731001003_02103_00002_nrcblong_cal_thumb.jpg",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001003/jw02731001003_02103_00002_nrcblong_cal.jpg"
    },
    {
        "id": "jw02731001001_02101_00004_nrca4_cal.jpg",
        "observation_id": "jw02731001001_02101_00004_nrca4",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "FGS"
                },
                {
                    "instrument": "NIRCam"
                },
                {
                    "instrument": "NIRISS"
                },
                {
                    "instrument": "NIRSpec"
                },
                {
                    "instrument": "MIRI"
                }
            ],
            "suffix": "_cal",
            "description": "exposure (L2b): 2D calibrated exposure average over integrations"
        },
        "file_type": "jpg",
        "thumbnail": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001001/jw02731001001_02101_00004_nrca4_cal_thumb.jpg",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001001/jw02731001001_02101_00004_nrca4_cal.jpg"
    },
    {
        "id": "jw02731001004_02105_00002_nrcb4_cal.jpg",
        "observation_id": "jw02731001004_02105_00002_nrcb4",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "FGS"
                },
                {
                    "instrument": "NIRCam"
                },
                {
                    "instrument": "NIRISS"
                },
                {
                    "instrument": "NIRSpec"
                },
                {
                    "instrument": "MIRI"
                }
            ],
            "suffix": "_cal",
            "description": "exposure (L2b): 2D calibrated exposure average over integrations"
        },
        "file_type": "jpg",
        "thumbnail": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001004/jw02731001004_02105_00002_nrcb4_cal_thumb.jpg",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001004/jw02731001004_02105_00002_nrcb4_cal.jpg"
    },
    {
        "id": "jw02731002003_02105_00005_mirimage_cal.jpg",
        "observation_id": "jw02731002003_02105_00005_mirimage",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "FGS"
                },
                {
                    "instrument": "NIRCam"
                },
                {
                    "instrument": "NIRISS"
                },
                {
                    "instrument": "NIRSpec"
                },
                {
                    "instrument": "MIRI"
                }
            ],
            "suffix": "_cal",
            "description": "exposure (L2b): 2D calibrated exposure average over integrations"
        },
        "file_type": "jpg",
        "thumbnail": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731002003/jw02731002003_02105_00005_mirimage_cal_thumb.jpg",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731002003/jw02731002003_02105_00005_mirimage_cal.jpg"
    },
    {
        "id": "jw02731001004_02101_00004_nrca2_cal.jpg",
        "observation_id": "jw02731001004_02101_00004_nrca2",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "FGS"
                },
                {
                    "instrument": "NIRCam"
                },
                {
                    "instrument": "NIRISS"
                },
                {
                    "instrument": "NIRSpec"
                },
                {
                    "instrument": "MIRI"
                }
            ],
            "suffix": "_cal",
            "description": "exposure (L2b): 2D calibrated exposure average over integrations"
        },
        "file_type": "jpg",
        "thumbnail": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001004/jw02731001004_02101_00004_nrca2_cal_thumb.jpg",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001004/jw02731001004_02101_00004_nrca2_cal.jpg"
    },
    {
        "id": "jw02731001002_02105_00004_nrcblong_cal.jpg",
        "observation_id": "jw02731001002_02105_00004_nrcblong",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "FGS"
                },
                {
                    "instrument": "NIRCam"
                },
                {
                    "instrument": "NIRISS"
                },
                {
                    "instrument": "NIRSpec"
                },
                {
                    "instrument": "MIRI"
                }
            ],
            "suffix": "_cal",
            "description": "exposure (L2b): 2D calibrated exposure average over integrations"
        },
        "file_type": "jpg",
        "thumbnail": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001002/jw02731001002_02105_00004_nrcblong_cal_thumb.jpg",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001002/jw02731001002_02105_00004_nrcblong_cal.jpg"
    },
    {
        "id": "jw02731001003_02105_00001_nrcblong_o001_crf.jpg",
        "observation_id": "jw02731001003_02105_00001_nrcblong_o001",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "NIRCam"
                }
            ],
            "suffix": "_crf",
            "description": "exposure (L2c): 2D Calibrated data averaged over integrations"
        },
        "file_type": "jpg",
        "thumbnail": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001003/jw02731001003_02105_00001_nrcblong_o001_crf_thumb.jpg",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001003/jw02731001003_02105_00001_nrcblong_o001_crf.jpg"
    },
    {
        "id": "jw02731001004_02105_00003_nrcb1_cal.jpg",
        "observation_id": "jw02731001004_02105_00003_nrcb1",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "FGS"
                },
                {
                    "instrument": "NIRCam"
                },
                {
                    "instrument": "NIRISS"
                },
                {
                    "instrument": "NIRSpec"
                },
                {
                    "instrument": "MIRI"
                }
            ],
            "suffix": "_cal",
            "description": "exposure (L2b): 2D calibrated exposure average over integrations"
        },
        "file_type": "jpg",
        "thumbnail": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001004/jw02731001004_02105_00003_nrcb1_cal_thumb.jpg",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001004/jw02731001004_02105_00003_nrcb1_cal.jpg"
    },
    {
        "id": "jw02731001003_02105_00002_nrcblong_cal.jpg",
        "observation_id": "jw02731001003_02105_00002_nrcblong",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "FGS"
                },
                {
                    "instrument": "NIRCam"
                },
                {
                    "instrument": "NIRISS"
                },
                {
                    "instrument": "NIRSpec"
                },
                {
                    "instrument": "MIRI"
                }
            ],
            "suffix": "_cal",
            "description": "exposure (L2b): 2D calibrated exposure average over integrations"
        },
        "file_type": "jpg",
        "thumbnail": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001003/jw02731001003_02105_00002_nrcblong_cal_thumb.jpg",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001003/jw02731001003_02105_00002_nrcblong_cal.jpg"
    },
    {
        "id": "jw02731001002_02103_00004_nrcb4_cal.jpg",
        "observation_id": "jw02731001002_02103_00004_nrcb4",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "FGS"
                },
                {
                    "instrument": "NIRCam"
                },
                {
                    "instrument": "NIRISS"
                },
                {
                    "instrument": "NIRSpec"
                },
                {
                    "instrument": "MIRI"
                }
            ],
            "suffix": "_cal",
            "description": "exposure (L2b): 2D calibrated exposure average over integrations"
        },
        "file_type": "jpg",
        "thumbnail": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001002/jw02731001002_02103_00004_nrcb4_cal_thumb.jpg",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001002/jw02731001002_02103_00004_nrcb4_cal.jpg"
    },
    {
        "id": "jw02731001003_02105_00001_nrcb4_cal.jpg",
        "observation_id": "jw02731001003_02105_00001_nrcb4",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "FGS"
                },
                {
                    "instrument": "NIRCam"
                },
                {
                    "instrument": "NIRISS"
                },
                {
                    "instrument": "NIRSpec"
                },
                {
                    "instrument": "MIRI"
                }
            ],
            "suffix": "_cal",
            "description": "exposure (L2b): 2D calibrated exposure average over integrations"
        },
        "file_type": "jpg",
        "thumbnail": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001003/jw02731001003_02105_00001_nrcb4_cal_thumb.jpg",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001003/jw02731001003_02105_00001_nrcb4_cal.jpg"
    },
    {
        "id": "jw02731001004_02101_00002_nrca2_cal.jpg",
        "observation_id": "jw02731001004_02101_00002_nrca2",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "FGS"
                },
                {
                    "instrument": "NIRCam"
                },
                {
                    "instrument": "NIRISS"
                },
                {
                    "instrument": "NIRSpec"
                },
                {
                    "instrument": "MIRI"
                }
            ],
            "suffix": "_cal",
            "description": "exposure (L2b): 2D calibrated exposure average over integrations"
        },
        "file_type": "jpg",
        "thumbnail": "",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001004/jw02731001004_02101_00002_nrca2_cal.jpg"
    },
    {
        "id": "jw02731001001_02103_00001_nrcb2_cal.jpg",
        "observation_id": "jw02731001001_02103_00001_nrcb2",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "FGS"
                },
                {
                    "instrument": "NIRCam"
                },
                {
                    "instrument": "NIRISS"
                },
                {
                    "instrument": "NIRSpec"
                },
                {
                    "instrument": "MIRI"
                }
            ],
            "suffix": "_cal",
            "description": "exposure (L2b): 2D calibrated exposure average over integrations"
        },
        "file_type": "jpg",
        "thumbnail": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001001/jw02731001001_02103_00001_nrcb2_cal_thumb.jpg",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001001/jw02731001001_02103_00001_nrcb2_cal.jpg"
    },
    {
        "id": "jw02731001003_02101_00001_nrcb3_cal.jpg",
        "observation_id": "jw02731001003_02101_00001_nrcb3",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "FGS"
                },
                {
                    "instrument": "NIRCam"
                },
                {
                    "instrument": "NIRISS"
                },
                {
                    "instrument": "NIRSpec"
                },
                {
                    "instrument": "MIRI"
                }
            ],
            "suffix": "_cal",
            "description": "exposure (L2b): 2D calibrated exposure average over integrations"
        },
        "file_type": "jpg",
        "thumbnail": "",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001003/jw02731001003_02101_00001_nrcb3_cal.jpg"
    },
    {
        "id": "jw02731002003_02103_00002_mirimage_cal.jpg",
        "observation_id": "jw02731002003_02103_00002_mirimage",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "FGS"
                },
                {
                    "instrument": "NIRCam"
                },
                {
                    "instrument": "NIRISS"
                },
                {
                    "instrument": "NIRSpec"
                },
                {
                    "instrument": "MIRI"
                }
            ],
            "suffix": "_cal",
            "description": "exposure (L2b): 2D calibrated exposure average over integrations"
        },
        "file_type": "jpg",
        "thumbnail": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731002003/jw02731002003_02103_00002_mirimage_cal_thumb.jpg",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731002003/jw02731002003_02103_00002_mirimage_cal.jpg"
    },
    {
        "id": "jw02731002001_02103_00002_mirimage_cal.jpg",
        "observation_id": "jw02731002001_02103_00002_mirimage",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "FGS"
                },
                {
                    "instrument": "NIRCam"
                },
                {
                    "instrument": "NIRISS"
                },
                {
                    "instrument": "NIRSpec"
                },
                {
                    "instrument": "MIRI"
                }
            ],
            "suffix": "_cal",
            "description": "exposure (L2b): 2D calibrated exposure average over integrations"
        },
        "file_type": "jpg",
        "thumbnail": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731002001/jw02731002001_02103_00002_mirimage_cal_thumb.jpg",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731002001/jw02731002001_02103_00002_mirimage_cal.jpg"
    },
    {
        "id": "jw02731001003_02105_00004_nrca1_cal.jpg",
        "observation_id": "jw02731001003_02105_00004_nrca1",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "FGS"
                },
                {
                    "instrument": "NIRCam"
                },
                {
                    "instrument": "NIRISS"
                },
                {
                    "instrument": "NIRSpec"
                },
                {
                    "instrument": "MIRI"
                }
            ],
            "suffix": "_cal",
            "description": "exposure (L2b): 2D calibrated exposure average over integrations"
        },
        "file_type": "jpg",
        "thumbnail": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001003/jw02731001003_02105_00004_nrca1_cal_thumb.jpg",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001003/jw02731001003_02105_00004_nrca1_cal.jpg"
    },
    {
        "id": "jw02731002004_02105_00003_mirimage_o002_crf.jpg",
        "observation_id": "jw02731002004_02105_00003_mirimage_o002",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "NIRCam"
                }
            ],
            "suffix": "_crf",
            "description": "exposure (L2c): 2D Calibrated data averaged over integrations"
        },
        "file_type": "jpg",
        "thumbnail": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731002004/jw02731002004_02105_00003_mirimage_o002_crf_thumb.jpg",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731002004/jw02731002004_02105_00003_mirimage_o002_crf.jpg"
    },
    {
        "id": "jw02731001004_02101_00005_nrcb3_cal.jpg",
        "observation_id": "jw02731001004_02101_00005_nrcb3",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "FGS"
                },
                {
                    "instrument": "NIRCam"
                },
                {
                    "instrument": "NIRISS"
                },
                {
                    "instrument": "NIRSpec"
                },
                {
                    "instrument": "MIRI"
                }
            ],
            "suffix": "_cal",
            "description": "exposure (L2b): 2D calibrated exposure average over integrations"
        },
        "file_type": "jpg",
        "thumbnail": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001004/jw02731001004_02101_00005_nrcb3_cal_thumb.jpg",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001004/jw02731001004_02101_00005_nrcb3_cal.jpg"
    },
    {
        "id": "jw02731002001_02107_00007_mirimage_o002_crf.jpg",
        "observation_id": "jw02731002001_02107_00007_mirimage_o002",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "NIRCam"
                }
            ],
            "suffix": "_crf",
            "description": "exposure (L2c): 2D Calibrated data averaged over integrations"
        },
        "file_type": "jpg",
        "thumbnail": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731002001/jw02731002001_02107_00007_mirimage_o002_crf_thumb.jpg",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731002001/jw02731002001_02107_00007_mirimage_o002_crf.jpg"
    },
    {
        "id": "jw02731-o002_t017_miri_f770w_i2d.jpg",
        "observation_id": "jw02731-o002_t017_miri_f770w",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "FGS"
                },
                {
                    "instrument": "NIRCam"
                },
                {
                    "instrument": "NIRISS"
                },
                {
                    "instrument": "NIRSpec"
                },
                {
                    "instrument": "MIRI"
                }
            ],
            "suffix": "_i2d",
            "description": "exposure/target (L2b/L3): rectified 2D image"
        },
        "file_type": "jpg",
        "thumbnail": "https://stpubdata-jwst.stsci.edu/ero/jw02731/L3/t/jw02731-o002_t017_miri_f770w_i2d_thumb.jpg",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/L3/t/jw02731-o002_t017_miri_f770w_i2d.jpg"
    },
    {
        "id": "jw02731001004_02101_00004_nrca3_o001_crf.jpg",
        "observation_id": "jw02731001004_02101_00004_nrca3_o001",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "NIRCam"
                }
            ],
            "suffix": "_crf",
            "description": "exposure (L2c): 2D Calibrated data averaged over integrations"
        },
        "file_type": "jpg",
        "thumbnail": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001004/jw02731001004_02101_00004_nrca3_o001_crf_thumb.jpg",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001004/jw02731001004_02101_00004_nrca3_o001_crf.jpg"
    },
    {
        "id": "jw02731001001_02103_00005_nrcb2_o001_crf.jpg",
        "observation_id": "jw02731001001_02103_00005_nrcb2_o001",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "NIRCam"
                }
            ],
            "suffix": "_crf",
            "description": "exposure (L2c): 2D Calibrated data averaged over integrations"
        },
        "file_type": "jpg",
        "thumbnail": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001001/jw02731001001_02103_00005_nrcb2_o001_crf_thumb.jpg",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731001001/jw02731001001_02103_00005_nrcb2_o001_crf.jpg"
    },
    {
        "id": "jw02731002004_02107_00008_mirimage_cal.jpg",
        "observation_id": "jw02731002004_02107_00008_mirimage",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "FGS"
                },
                {
                    "instrument": "NIRCam"
                },
                {
                    "instrument": "NIRISS"
                },
                {
                    "instrument": "NIRSpec"
                },
                {
                    "instrument": "MIRI"
                }
            ],
            "suffix": "_cal",
            "description": "exposure (L2b): 2D calibrated exposure average over integrations"
        },
        "file_type": "jpg",
        "thumbnail": "",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731002004/jw02731002004_02107_00008_mirimage_cal.jpg"
    },
    {
        "id": "jw02731002003_02101_00007_mirimage_o002_crf.jpg",
        "observation_id": "jw02731002003_02101_00007_mirimage_o002",
        "program": 2731,
        "details": {
            "mission": "JWST",
            "instruments": [
                {
                    "instrument": "NIRCam"
                }
            ],
            "suffix": "_crf",
            "description": "exposure (L2c): 2D Calibrated data averaged over integrations"
        },
        "file_type": "jpg",
        "thumbnail": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731002003/jw02731002003_02101_00007_mirimage_o002_crf_thumb.jpg",
        "location": "https://stpubdata-jwst.stsci.edu/ero/jw02731/jw02731002003/jw02731002003_02101_00007_mirimage_o002_crf.jpg"
    }
],
twitterFeed: {
    "data": [
        {
            "attachments": {
                "media_keys": [
                    "3_1564355473012363265"
                ]
            },
            "id": "1564355515513245702",
            "created_at": "2022-08-29T20:53:13.000Z",
            "text": "Engineers continue to assess #Artemis I launch attempt data. On Tuesday, Aug. 30 at 6pm ET (22:00 UTC) we’ll provide an update on the status of the @NASAArtemis flight test. Details: https://t.co/aYUGR2rT2r https://t.co/lt3o6x6GXg"
        },
        {
            "id": "1564296989571010567",
            "created_at": "2022-08-29T17:00:40.000Z",
            "text": "LIVE: NASA leaders give an update on today's launch attempt of the #Artemis I flight test. https://t.co/icEW4IZio0"
        },
        {
            "id": "1564281425188249602",
            "created_at": "2022-08-29T15:58:49.000Z",
            "text": "Our #Artemis I media update from NASA leaders is now scheduled for 1pm ET (1700 UTC). Details: https://t.co/0j8GGQsyeB https://t.co/oYJU7Jy5Rv"
        },
        {
            "attachments": {
                "media_keys": [
                    "3_1564252054708781057"
                ]
            },
            "id": "1564253031507660804",
            "created_at": "2022-08-29T14:05:59.000Z",
            "text": "Safety is always first. Following today's #Artemis I launch attempt, @NASAArtemis teams are working through an issue with engine number 3, and expect to give a news briefing later today. Stay tuned for broadcast details. https://t.co/z1RgZwQkWS https://t.co/BxpIOGyId9"
        },
        {
            "id": "1564239965197942784",
            "created_at": "2022-08-29T13:14:04.000Z",
            "text": "NOW: NASA Administrator @SenBillNelson speaks about today's #Artemis I launch attempt.  https://t.co/l65YUBc4KI"
        },
        {
            "attachments": {
                "media_keys": [
                    "13_1564231054826823684"
                ]
            },
            "id": "1564232429279272962",
            "created_at": "2022-08-29T12:44:07.000Z",
            "text": "The launch of #Artemis I is no longer happening today as teams work through an issue with an engine bleed. Teams will continue to gather data, and we will keep you posted on the timing of the next launch attempt. https://t.co/tQ0lp6Ruhv https://t.co/u6Uiim2mom"
        },
        {
            "id": "1564224808933539840",
            "created_at": "2022-08-29T12:13:50.000Z",
            "text": "#Artemis I update: Launch is currently in an unplanned hold as the team works on an issue with engine number 3 on the @NASA_SLS core stage. Operations commentary continues at https://t.co/z1RgZwQkWS https://t.co/mFyoeRMC6q"
        },
        {
            "attachments": {
                "media_keys": [
                    "13_1564213343803539456"
                ]
            },
            "id": "1564215569695514627",
            "created_at": "2022-08-29T11:37:08.000Z",
            "text": "The countdown clock is on a hold at T-40 minutes. The hydrogen team of the @NASA_SLS rocket is discussing plans with the #Artemis I launch director. Operational commentary continues at https://t.co/z1RgZwQkWS. https://t.co/5J6rHVCe44"
        },
        {
            "id": "1564204387781804032",
            "created_at": "2022-08-29T10:52:42.000Z",
            "text": "Engineers are working through @NASA_SLS pre-launch tanking operations. We will continue to share #Artemis updates. https://t.co/z1RgZwQkWS"
        },
        {
            "id": "1564199255287504896",
            "created_at": "2022-08-29T10:32:18.000Z",
            "text": "LIVE NOW: The #Artemis era of exploration begins today with @NASAArtemis I, the first flight test of the rocket and spacecraft that will take humanity to the Moon. The launch window opens at 8:33am ET (12:33 UTC). https://t.co/mFyoeRMC6q"
        },
        {
            "id": "1564197717408088064",
            "created_at": "2022-08-29T10:26:11.000Z",
            "text": "Liquid hydrogen replenish is closed and now in revert to troubleshoot the bleed on engine number 3. Teams are working to increase pressure in the bleed on engine 3 to continue conditioning the four RS-25 engines on @NASA_SLS for launch. https://t.co/wEUPRpb8q2"
        },
        {
            "id": "1564166991623110656",
            "created_at": "2022-08-29T08:24:06.000Z",
            "text": "During the transition from slow fill to fast fill of LH2 into the @NASA_SLS rocket, we saw a spike in the amount of hydrogen that is allowed to leak into the purge can. The leak is at an acceptable level and we have returned to fast fill operations: https://t.co/9LqSHAB3Mq"
        },
        {
            "id": "1564154525090463744",
            "created_at": "2022-08-29T07:34:34.000Z",
            "text": "Teams are assessing LH2 propellant loading on the @NASA_SLS rocket for the #Artemis I mission. Stay tuned for updates. https://t.co/u3mjNzC8Hu"
        },
        {
            "id": "1564100780923256834",
            "created_at": "2022-08-29T04:01:00.000Z",
            "text": "Watch our mega Moon rocket @NASA_SLS get fueled up for launch. Follow @NASAGroundSys for updates on propellant loading in preparation for the #Artemis I liftoff from @NASAKennedy. https://t.co/u3mjNzC8Hu"
        },
        {
            "id": "1563874180772384768",
            "created_at": "2022-08-28T13:00:34.000Z",
            "text": "LIVE: The countdown to launch is on. Get the latest weather and status update ahead of the scheduled Aug. 29 liftoff of #Artemis I. https://t.co/SKQJm51t2r"
        },
        {
            "attachments": {
                "media_keys": [
                    "13_1563628183060189184"
                ]
            },
            "id": "1563628900173107202",
            "created_at": "2022-08-27T20:45:55.000Z",
            "text": "\"Best day of my whole life. Ever.\" We surprised students visiting @NASAKennedy with a close-up view of the @NASAArtemis I rocket and spacecraft that will fly to the Moon. These are the faces of the #Artemis generation. https://t.co/z6nF5APk4Q"
        },
        {
            "id": "1563596241355046912",
            "created_at": "2022-08-27T18:36:08.000Z",
            "text": "LIVE: NASA Administrator @SenBillNelson and agency leaders discuss how the #Artemis I flight test might influence future science, technology and human exploration of the Moon and Mars: https://t.co/etxql5hc6C"
        },
        {
            "attachments": {
                "media_keys": [
                    "16_1563570457080516608"
                ]
            },
            "id": "1563573212075929601",
            "created_at": "2022-08-27T17:04:38.000Z",
            "text": "#Artemis I is traveling to the Moon and back — but how does the @NASA_Orion spacecraft get from Point A to B to C?\n\nLearn about the different mission milestones along the journey with this @GIPHY story: https://t.co/qiVTNNsZ9k https://t.co/ueKQJFszuh"
        },
        {
            "id": "1563548269719851009",
            "created_at": "2022-08-27T15:25:31.000Z",
            "text": "LIVE: #Artemis I mission managers provide an update, including a weather briefing, for the Monday, Aug. 29 launch of the flight test that will send an uncrewed Orion spacecraft around the Moon: https://t.co/rp7JNFt5qB"
        },
        {
            "id": "1563332686877319169",
            "created_at": "2022-08-27T01:08:52.000Z",
            "text": "And of course, you can always find us on NASA TV. We love sharing space with you! https://t.co/z1RgZwyJyi"
        },
        {
            "id": "1563332571886276614",
            "created_at": "2022-08-27T01:08:25.000Z",
            "text": "¡Vamos a la Luna con #Artemis I y @NASA_es!\n\nNuestra transmisión en vivo del lanzamiento en español incluirá entrevistas con miembros hispanos de la misión y comentario en directo durante el despegue.\nhttps://t.co/fgKZg1tQ1I"
        },
        {
            "id": "1563332517947932674",
            "created_at": "2022-08-27T01:08:12.000Z",
            "text": "You can stream the launch as well as other #Artemis videos on @DailyMotion.\nhttps://t.co/ryQBEmPbqW"
        },
        {
            "id": "1563332467825577984",
            "created_at": "2022-08-27T01:08:00.000Z",
            "text": "Share the #Artemis launch experience with your @Facebook network via this event.\nhttps://t.co/zQaqSt1X18"
        },
        {
            "id": "1563332330240221184",
            "created_at": "2022-08-27T01:07:27.000Z",
            "text": "You can watch our #Artemis mega Moon rocket lift off while you chat on @Twitch.\nhttps://t.co/ytO98jBgDN"
        },
        {
            "id": "1563332273210261505",
            "created_at": "2022-08-27T01:07:13.000Z",
            "text": "We'll be streaming the launch of @NASAArtemis to the Moon in 4K on @YouTube.\nhttps://t.co/UxIQDsA4D9"
        },
        {
            "id": "1563332178510917633",
            "created_at": "2022-08-27T01:06:51.000Z",
            "text": "🚀One rocket. One mission. Many ways to watch #Artemis I launch to the Moon.\n\nSee the thread for simulcasts, including how to watch in 4K. Pick your favorite, set a reminder, and spread the word.\n\nThe two-hour launch window opens at 8:33am EDT on Aug. 29. https://t.co/D9RaNE9Gfq"
        },
        {
            "attachments": {
                "media_keys": [
                    "13_1563273661619920898"
                ]
            },
            "id": "1563275619265544195",
            "created_at": "2022-08-26T21:22:06.000Z",
            "text": "#Artemis I flight test is “go for launch,” @NASAWebb returns new images of Jupiter, and @BoeingSpace shares an update for the first crewed flight test of the #Starliner spacecraft.\n \nHere's how you can join Monday's launch: https://t.co/6EWaWTdcAj https://t.co/UhR38VkSes"
        },
        {
            "attachments": {
                "media_keys": [
                    "3_1563261466152620034",
                    "3_1563261475547803649"
                ]
            },
            "id": "1563261488453672960",
            "created_at": "2022-08-26T20:25:57.000Z",
            "text": "It's #InternationalDogDay! While there aren't any dogs on other planets (that we know of), we do have a couple of adorable rovers.\n\nGet images, weather reports, and updates from @NASAPersevere and @MarsCuriosity at https://t.co/TXSGxOIOJA. https://t.co/CbbA73GVYD"
        },
        {
            "attachments": {
                "media_keys": [
                    "13_1563240898682507267"
                ]
            },
            "id": "1563242325207179275",
            "created_at": "2022-08-26T19:09:48.000Z",
            "text": "This  #WomensEqualityDay, hear from Apollo 11 engineer JoAnn Morgan as she discusses how #Artemis and today's women at @NASA inspire new generations to reach for the Moon and beyond. https://t.co/ci4cl28Tjc https://t.co/cK25OTdEAO"
        },
        {
            "attachments": {
                "media_keys": [
                    "16_1563186787232743425"
                ]
            },
            "id": "1563187291484745729",
            "created_at": "2022-08-26T15:31:07.000Z",
            "text": "We've got a date with that dot. Using ground telescopes, the #DARTMission confirmed the orbit of asteroid Didymos.\n\nDART is scheduled to impact Didymos' moonlet Dimorphos on Sept. 26. The asteroids and this test of planetary defense pose no risk to Earth: https://t.co/DLy1DZwyzS https://t.co/qeCon6f5Fg"
        },
        {
            "id": "1563164508012834816",
            "created_at": "2022-08-26T14:00:35.000Z",
            "text": "NOW: NASA #Artemis and business leaders discuss how collaboration with industry helps us prepare to send astronauts to the Moon and beyond.  https://t.co/wXrvCvQhXW"
        },
        {
            "attachments": {
                "media_keys": [
                    "3_1562922265209196544"
                ]
            },
            "id": "1562922270313484288",
            "created_at": "2022-08-25T21:58:01.000Z",
            "text": "Hear @NASAEarth science and agriculture experts discuss how farmers and other agricultural producers can use our tools, resources, and research to make decisions about planting, water management, and market changes: https://t.co/KCYego2C52 https://t.co/cttbWDyuvm"
        },
        {
            "attachments": {
                "media_keys": [
                    "3_1562854319577341952"
                ]
            },
            "id": "1562863182246383618",
            "created_at": "2022-08-25T18:03:13.000Z",
            "text": "Scientists haven't yet discovered an explanation for dark energy, which is responsible for the accelerating expansion of our universe—but space telescopes are in the works to shine some light on this cosmic mystery: https://t.co/abP2wJlBJp https://t.co/mb9TUtufSb"
        },
        {
            "attachments": {
                "media_keys": [
                    "3_1562847654069116928"
                ]
            },
            "id": "1562847657743515648",
            "created_at": "2022-08-25T17:01:32.000Z",
            "text": "LIVE NOW: NASA and @BoeingSpace leaders review results from the CST-100 #Starliner’s uncrewed Orbital Flight Test-2, and share updates on plans for the spacecraft’s first test flight to the International @Space_Station with astronauts aboard. https://t.co/kaGaCTkGHW https://t.co/YZHHijOwHO"
        },
        {
            "id": "1562561288940961798",
            "created_at": "2022-08-24T22:03:36.000Z",
            "text": "Speak Spanish? Know someone who does? Or want to brush up your skills? Our friends @NASA_Es just dropped their second episode of Universo Curioso, our Spanish-language Curious Universe podcast. This time, we're talking about the #Artemis I mission to the Moon and back. 🚀 https://t.co/HPujRtryzD"
        },
        {
            "id": "1562549568734056452",
            "created_at": "2022-08-24T21:17:02.000Z",
            "text": "You might have heard the black hole scream. Now, get ready to hear @NASAWebb images sing.\r\rOn Aug. 31, experience Webb data in a whole new way. Plus, tune into a special @TwitterSpaces with the people who turn space into sound, touch &amp; more. Set a reminder.https://t.co/iWxTGNj9yn"
        },
        {
            "attachments": {
                "media_keys": [
                    "13_1562518082551250944"
                ]
            },
            "id": "1562542574564515840",
            "created_at": "2022-08-24T20:49:15.000Z",
            "text": "We are ready. 🚀\n\nThe uncrewed #Artemis I mission around the Moon will pave the way for future astronauts. The Artemis Generation is about to leave its mark.\n\nOn Aug. 29, watch history with us: https://t.co/Dx9WUCnnBS https://t.co/6yJ4ik6lIw"
        },
        {
            "attachments": {
                "media_keys": [
                    "3_1562182088144691200"
                ]
            },
            "id": "1562182093047726081",
            "created_at": "2022-08-23T20:56:49.000Z",
            "text": "Our #DARTMission will intentionally crash into an asteroid—which poses no threat to Earth—on Monday, Sept. 26. It's a test of planetary defense should we ever need it.\n\nAnd we're broadcasting it live. How to watch: https://t.co/HgP6DGDR3l https://t.co/KT4ZevGkJo"
        },
        {
            "attachments": {
                "media_keys": [
                    "3_1562124046577373184"
                ]
            },
            "id": "1562124050297765888",
            "created_at": "2022-08-23T17:06:11.000Z",
            "text": "Come find out how college students are getting involved in developing and testing technologies for future Moon missions.\n\nJoin the livestream on @Twitch today at 4pm ET (2000 UTC) and chat with teams from this year's @NASAArtemis Student Challenges: https://t.co/6EOhJoy2TD https://t.co/0F1RFnu6qD"
        },
        {
            "id": "1561867271034834945",
            "created_at": "2022-08-23T00:05:50.000Z",
            "text": "#Artemis I is \"go\" for launch! Now that today's flight readiness review has concluded, NASA managers provide an update on the Moon mission, scheduled to lift off at 8:33am ET (12:33 UTC), Monday, Aug. 29. More info: https://t.co/KOrOCmSRu4 https://t.co/apV6wrEYCu"
        },
        {
            "attachments": {
                "media_keys": [
                    "3_1561797101922697216"
                ]
            },
            "id": "1561797105466884096",
            "created_at": "2022-08-22T19:27:01.000Z",
            "text": "It’s #ARTemis Week and we want to see the art you make! Have you knitted the @NASA_SLS rocket? Painted the Moon? Continue using the hashtag #NASAMoonSnap to show us your creative work: https://t.co/r6PGjI4wge https://t.co/i80TIIBFed"
        },
        {
            "attachments": {
                "media_keys": [
                    "3_1561783617285767171"
                ]
            },
            "id": "1561783622654468098",
            "created_at": "2022-08-22T18:33:26.000Z",
            "text": "Giant news from a giant planet!\n\n@NASAWebb captured a new view of Jupiter in infrared light, uncovering clues to the planet’s inner life. Two moons, rings, and distant galaxies are visible. Get the details: https://t.co/6WKbAQY78z https://t.co/9uaACCPGyU"
        },
        {
            "id": "1561700477850501121",
            "created_at": "2022-08-22T13:03:03.000Z",
            "text": "LIVE: Astronaut Frank Rubio discusses his upcoming mission to the @Space_Station, scheduled to launch Sept. 21 from Kazakhstan. https://t.co/xr1tWHMjmQ"
        },
        {
            "attachments": {
                "media_keys": [
                    "3_1561455204565925888",
                    "3_1561455209611665410"
                ]
            },
            "id": "1561455211939602434",
            "created_at": "2022-08-21T20:48:27.000Z",
            "text": "Worms and meatballs: great on spaghetti (if you’re adventurous), great logos. But we want to know: which is your favorite? https://t.co/LhDlnuhfe0 https://t.co/uvD8f3hvri"
        },
        {
            "attachments": {
                "media_keys": [
                    "3_1561113963244445696"
                ]
            },
            "id": "1561113966591590402",
            "created_at": "2022-08-20T22:12:28.000Z",
            "text": "The twin @NASAVoyager spacecraft continue to beam back data, 45 years after launching. Destined to wander the Milky Way, they’re the only probes to ever explore interstellar space. And you can track them in real time: https://t.co/CExxL4jJZF https://t.co/d10hyeU25z"
        },
        {
            "attachments": {
                "media_keys": [
                    "3_1561021850456662016"
                ]
            },
            "id": "1561021858828492801",
            "created_at": "2022-08-20T16:06:28.000Z",
            "text": "Our live launch coverage for #Artemis I starts at 6:30am ET (10:30 UTC) on Monday, Aug. 29—but there's plenty more to tune in for!\n\nHere's our full @NASAArtemis broadcast schedule, starting Aug. 22: https://t.co/fmvkq64yxj https://t.co/NLp6K2JUE8"
        },
        {
            "attachments": {
                "media_keys": [
                    "13_1560762324960559105"
                ]
            },
            "id": "1560762578057535489",
            "created_at": "2022-08-19T22:56:10.000Z",
            "text": "This week at NASA, we moved Artemis I to the launch pad, sent tech experiments to space, and discussed priorities for national space activities.\n\nCheck out our virtual event to share the upcoming Moon launch, and use #Artemis to continue the conversation: https://t.co/AsrZXXASC1 https://t.co/CVTWDMv19C"
        },
        {
            "attachments": {
                "media_keys": [
                    "3_1560704692002295810"
                ]
            },
            "id": "1560704835451863043",
            "created_at": "2022-08-19T19:06:43.000Z",
            "text": "Did someone say #WorldPhotographyDay? We love planet-size celebrations! Here's one of the most iconic shots of our big, blue marble: Earth as seen by the crew of Apollo 8. https://t.co/7rukuVsfrk\n \nOnce @NASAArtemis I reaches the Moon, we'll have new Earthrise images to share. https://t.co/dLTTX3V0tu"
        },
        {
            "id": "1560688167140851712",
            "created_at": "2022-08-19T18:00:29.000Z",
            "text": "Live Now: We're talking about potential Moon landing regions for Artemis III—humanity's return to the lunar surface. https://t.co/BeNrT3L0Cg"
        },
        {
            "attachments": {
                "media_keys": [
                    "3_1560657250846474241"
                ]
            },
            "id": "1560657253614596096",
            "created_at": "2022-08-19T15:57:39.000Z",
            "text": "Today is #NationalAviationDay and our friends at @NASAAero are hosting a @Reddit AMA to celebrate the occasion! 🥳\n\nJoin in from now to 1:30pm ET (1730 UTC) to ask questions of researchers developing a future of self-flying vehicles: https://t.co/vTlHvgEsRc https://t.co/js2HW6zmY0"
        },
        {
            "attachments": {
                "media_keys": [
                    "13_1560644361179865090"
                ]
            },
            "id": "1560652825025191937",
            "created_at": "2022-08-19T15:40:03.000Z",
            "text": "Science is coming home.\n\nThe @SpaceX #CRS25 Dragon spacecraft carrying @ISS_Research, including a tissue cell printing investigation, undocked from the space station at 11:05am ET (15:05 UTC) ahead of its splashdown off the Florida coast: https://t.co/azbvag5LHu https://t.co/JhXNg9hQOI"
        },
        {
            "id": "1560639051375468544",
            "created_at": "2022-08-19T14:45:19.000Z",
            "text": "NOW: @SpaceX's #CRS25 cargo Dragon spacecraft prepares to undock from the @Space_Station, bringing science investigations—including a tissue printing experiment and spacesuit cooling technology—back to Earth. https://t.co/wI5b0eleGl"
        },
        {
            "attachments": {
                "media_keys": [
                    "3_1560323866848804865"
                ]
            },
            "id": "1560323870418149382",
            "created_at": "2022-08-18T17:52:54.000Z",
            "text": "Ready for the next giant leap? Hear where the next steps on the Moon may fall.\n\nTune in live for the announcement of potential landing regions for the #Artemis III mission to the lunar South Pole. Friday, Aug. 19, at 2pm ET (1800 UTC): https://t.co/5cqesOz0i6 https://t.co/kcG5WfIKsp"
        },
        {
            "id": "1559933463691771907",
            "created_at": "2022-08-17T16:01:34.000Z",
            "text": "Live Now: NASA and industry experts talk about more of the science that will travel inside our #Artemis I test flight around the Moon.\n\nThese experiments will test radiation levels that future @NASAArtemis astronauts may encounter during flight: https://t.co/8TSrlvJ19Y"
        },
        {
            "attachments": {
                "media_keys": [
                    "3_1559886916367040513"
                ]
            },
            "id": "1559887850484559873",
            "created_at": "2022-08-17T13:00:19.000Z",
            "text": "LIVE: Watch Russian cosmonauts conduct a spacewalk to continue preparing the @Space_Station's new European robotic arm for operations: https://t.co/z1RgZwyJyi https://t.co/NK6lWiO2rd"
        },
        {
            "attachments": {
                "media_keys": [
                    "3_1559671098723246082"
                ]
            },
            "id": "1559671102330265603",
            "created_at": "2022-08-16T22:39:02.000Z",
            "text": "Roll'em out! 🚀 We're moving our @NASAArtemis rocket to the launch pad for final prep before #Artemis I blasts off for the Moon, currently set for Aug. 29. \n\nTune in for live coverage from @NASAKennedy—rollout is scheduled to begin at 9pm ET (03:00 UTC): https://t.co/kTqBPgJGCA https://t.co/DFt74WD4Ln"
        },
        {
            "attachments": {
                "media_keys": [
                    "13_1559551010137202688"
                ]
            },
            "id": "1559651947359125504",
            "created_at": "2022-08-16T21:22:55.000Z",
            "text": "A new cosmic cartographer 🗺\n\nOur SPHEREx mission will create a 3D map of the entire sky in visible and infrared light containing millions of objects. But first, it must undergo extensive testing, and before that, it needs to fit inside its lab: https://t.co/ci5KFkKW7t https://t.co/3FY3QruR11"
        },
        {
            "id": "1559570955629985798",
            "created_at": "2022-08-16T16:01:05.000Z",
            "text": "NOW: @NASAArtemis teams detail the solar system science and technology demonstrations flying aboard #Artemis I, set to launch on Aug. 29: https://t.co/ZQ2i1j3E3y"
        },
        {
            "id": "1559284601012555776",
            "created_at": "2022-08-15T21:03:13.000Z",
            "text": "Live Now: NASA and industry experts discuss the CubeSats and space biology experiments that will travel with the #Artemis I flight test to the Moon, set for Aug. 29: https://t.co/cyLsdNvnx9"
        },
        {
            "attachments": {
                "media_keys": [
                    "13_1559215283805401089"
                ]
            },
            "id": "1559272815253151744",
            "created_at": "2022-08-15T20:16:23.000Z",
            "text": "One step closer: Our @EuropaClipper has moved into High Bay 1, @NASAJPL’s largest clean room. The spacecraft is planned to launch to Jupiter’s icy moon in 2024: https://t.co/G1FQCUj9Om https://t.co/eql790PWsA"
        },
        {
            "attachments": {
                "media_keys": [
                    "3_1559255569923547136"
                ]
            },
            "id": "1559255579981398016",
            "created_at": "2022-08-15T19:07:54.000Z",
            "text": "Want to share your excitement for our return to the Moon with #Artemis I?\n\nCheck out #NASAMoonSnap Expert Mode. Educators and students, observe the Moon for a month, craft something from what you’ve observed, and share your results with us: https://t.co/eTZDrzvKoo https://t.co/NgCHJT8a8r"
        },
        {
            "attachments": {
                "media_keys": [
                    "13_1559228841876406276"
                ]
            },
            "id": "1559248313139986433",
            "created_at": "2022-08-15T18:39:01.000Z",
            "text": "When #Artemis I launches to the Moon and back, there will be plenty of science hitching a ride. From CubeSats designed to hunt for lunar surface water deposits, to experiments on how cells respond to space, here's more of what's aboard @NASAArtemis: https://t.co/56qFqM0uCV https://t.co/Dj1LR7fn3I"
        },
        {
            "attachments": {
                "media_keys": [
                    "3_1558903401693515778"
                ]
            },
            "id": "1558903404692381698",
            "created_at": "2022-08-14T19:48:29.000Z",
            "text": "Teachers: We’re going back to the Moon! And you can bring the Moon #BackToSchool with @NASASTEM’s new STEM Toolkit. Grab grade-appropriate lesson plans and activities to engage the Artemis Generation. https://t.co/B44aNv28Mv https://t.co/KLNyj06dSP"
        },
        {
            "attachments": {
                "media_keys": [
                    "3_1558833574916362240"
                ]
            },
            "id": "1558833577197985796",
            "created_at": "2022-08-14T15:11:01.000Z",
            "text": "Saturn is currently in a great spot for skywatchers: close to Earth (relatively speaking) while directly opposite the Sun in our night sky.\n\nThough the full Moon may get in the way, a good telescope should still be enough to zoom in on the gas giant: https://t.co/gILDMBRpvX https://t.co/GMTbBkO9SP"
        },
        {
            "attachments": {
                "media_keys": [
                    "16_1558606790413238276"
                ]
            },
            "id": "1558606815180591105",
            "created_at": "2022-08-14T00:09:56.000Z",
            "text": "Our #DARTMission will soon collide with a non-hazardous asteroid as a test of planetary defense.\n\nKnow someone who should hang with us at @JHUAPL for the main event, and share behind-the-scenes details? Tag them! Is it you? Apply by Aug. 15: https://t.co/1SWiyYvDsR https://t.co/Vgwy3U33GE"
        },
        {
            "attachments": {
                "media_keys": [
                    "13_1558449924777431041"
                ]
            },
            "id": "1558450123490869248",
            "created_at": "2022-08-13T13:47:18.000Z",
            "text": "This week at NASA, we're counting down to our #Artemis I Moon mission and taking a high-def look at Earth from the @Space_Station.\n\nCheck out the latest highlights—then sign up to be on the virtual guest list for @NASAArtemis and other upcoming launches: https://t.co/lfCfbDhfX5 https://t.co/AELnVwVNxz"
        },
        {
            "id": "1558194153485475841",
            "created_at": "2022-08-12T20:50:10.000Z",
            "text": "LIVE: @VP Harris delivers remarks from the Chabot Space &amp; Science Center near @NASAAmes on how the Biden-Harris Administration will support commercial spaceflight. https://t.co/RBTsqwILNH"
        },
        {
            "attachments": {
                "media_keys": [
                    "3_1558174770952392705"
                ]
            },
            "id": "1558174775498997760",
            "created_at": "2022-08-12T19:33:10.000Z",
            "text": "On Thurs., Aug. 25 at 1pm ET (16:00 UTC), leaders at NASA and @BoeingSpace will discuss the first crewed flight of #Starliner to the @Space_Station and data from the uncrewed Orbital Flight Test-2. How to join: https://t.co/6WNB5szx7j https://t.co/XOcTkFsyZg"
        },
        {
            "attachments": {
                "media_keys": [
                    "3_1558157381762269187"
                ]
            },
            "id": "1558157400938614784",
            "created_at": "2022-08-12T18:24:08.000Z",
            "text": "Need more space in your playlist? Our Curious Universe podcast dives deep into topics like the science of black holes, living and working in space, and how we hunt for planets around other stars.\n\nSubscribe: https://t.co/KgSQExqgut https://t.co/DWE6wtLgE2"
        },
        {
            "attachments": {
                "media_keys": [
                    "13_1558156149979062272"
                ]
            },
            "id": "1558156432540835840",
            "created_at": "2022-08-12T18:20:17.000Z",
            "text": "So long, and thanks for all the #GravityAssist episodes. Revisit highlights from the past five years of podcast conversations with amazing scientists, tour our home planet, and venture across the universe: https://t.co/23SVBtOfp3 https://t.co/8cnMKr3Rxf"
        },
        {
            "id": "1557882688220037121",
            "created_at": "2022-08-12T00:12:31.000Z",
            "text": "Oh, the places you'll go! Congratulations to all the student teams whose projects launched today from @NASA_Wallops. We wish you continued success. 🚀 https://t.co/aPHUIo8Ni9"
        },
        {
            "attachments": {
                "media_keys": [
                    "13_1557867082653597696"
                ]
            },
            "id": "1557867138353856512",
            "created_at": "2022-08-11T23:10:44.000Z",
            "text": "Building NASA's most powerful rocket. Rolling it out. Launching it to the Moon. It takes a team of thousands. Here are some of their stories.\n\n“Path to the Pad,” a five-part series about the #Artemis I flight test starts Aug. 12: https://t.co/nPj58bdXrz https://t.co/kSvRBeEncW"
        },
        {
            "attachments": {
                "media_keys": [
                    "3_1557806308526628864"
                ]
            },
            "id": "1557806316365795328",
            "created_at": "2022-08-11T19:09:03.000Z",
            "text": "Supergiant star Betelgeuse (Betelgeuse, Betelgeuse) blew off a huge chunk of surface material in 2019, data from @NASAHubble data shows. Astronomers have never seen anything like it, though it's not evidence the star will burst anytime soon: https://t.co/RhuWwWxQxr https://t.co/01ek8hRdSb"
        },
        {
            "attachments": {
                "media_keys": [
                    "3_1557797741144821760"
                ]
            },
            "id": "1557797744638627843",
            "created_at": "2022-08-11T18:34:59.000Z",
            "text": "Several small science &amp; technology payloads will hitch a ride with #Artemis I, our uncrewed flight test around the Moon. They're seen here tucked into their dispensers, set to launch Aug. 29, 2022.\n\n@NASAArtemis &amp; industry experts share what's in store: https://t.co/US96ik5UkM https://t.co/KsoatuHau9"
        },
        {
            "attachments": {
                "media_keys": [
                    "3_1557775323718193154"
                ]
            },
            "id": "1557775325823733761",
            "created_at": "2022-08-11T17:05:54.000Z",
            "text": "There’ll be a full Moon tonight! Show us what you see—or what the Moon inspires you to make—with the hashtag #NASAMoonSnap, and you might get featured on @NASAArtemis social media.\n\nMoon photo tips: https://t.co/e8Cpq0zMya\nSubmission guidelines: https://t.co/r6PGjI4wge https://t.co/oUoABn1SLF"
        },
        {
            "attachments": {
                "media_keys": [
                    "13_1557502692779610113"
                ]
            },
            "id": "1557502826842038273",
            "created_at": "2022-08-10T23:03:05.000Z",
            "text": "A PeVatron isn't a robot from a 1950s sci-fi movie: it's a scientific term, a source for some of the highest-energy particles known to whip across our galaxy.\n\nPeVatrons are notoriously hard to pin down—but our Fermi telescope might be closing in on one: https://t.co/Y0jmfBYRyr https://t.co/BcL1n2hh4J"
        },
        {
            "attachments": {
                "media_keys": [
                    "3_1557415560685752324"
                ]
            },
            "id": "1557415562682277891",
            "created_at": "2022-08-10T17:16:20.000Z",
            "text": "The Moon is a muse to many and we’re no exception: check out the creative ways NASA imaging experts have captured it. https://t.co/MqUSW68zS4\n \nFeeling artistic? Share your Moon-inspired content with us with the hashtag #NASAMoonSnap! https://t.co/WIvquMQofA"
        },
        {
            "attachments": {
                "media_keys": [
                    "3_1557401255017938945"
                ]
            },
            "id": "1557401260814385153",
            "created_at": "2022-08-10T16:19:30.000Z",
            "text": "Creators: share a story with your audience like no other.\n\nWitness with us the planned collision of a spacecraft and an asteroid at the #DARTMission NASA Social. Talk with scientists, explore @JHUAPL, and gather behind-the-scenes content. Apply by Aug. 15: https://t.co/3F6Pe2pZRd https://t.co/Sd8SMnTSeG"
        },
        {
            "attachments": {
                "media_keys": [
                    "16_1557135376699064323"
                ]
            },
            "id": "1557135404469555200",
            "created_at": "2022-08-09T22:43:05.000Z",
            "text": "Asteroids, comets, meteorites—what’s the difference? This list from @NASASolarSystem will help you tell these small bodies apart. Let’s (space) rock: https://t.co/EH9BG2d34U https://t.co/y5i2Uf5X2c"
        },
        {
            "attachments": {
                "media_keys": [
                    "3_1557083448891899907",
                    "3_1557083506177708032",
                    "3_1557083512020373506"
                ]
            },
            "id": "1557083515291828224",
            "created_at": "2022-08-09T19:16:53.000Z",
            "text": "Want to improve your lunar photography for #NASAMoonSnap?\n\nWatch our @Instagram live today at 4:15pm ET (20:15 UT) to hear from NASA photographer Bill Ingalls, planetary geologist Brett Denevi, &amp; @NatGeo photographer Babak Tafreshi chat about lunar imaging https://t.co/KeMEilz3ZK https://t.co/QcwDtnWuuS"
        },
        {
            "attachments": {
                "media_keys": [
                    "13_1550584717405208577"
                ]
            },
            "id": "1557067939412525057",
            "created_at": "2022-08-09T18:15:00.000Z",
            "text": "From asteroid-mining bacteria to studying how to slow down COVID-19, our @ISS_Research on microorganisms is yielding some big results.\n\nLearn more about how we're studying microbiology in microgravity: https://t.co/vHF3CWo5yC https://t.co/PGb8JudaKc"
        },
        {
            "attachments": {
                "media_keys": [
                    "3_1556709893721161733"
                ]
            },
            "id": "1556709896720158722",
            "created_at": "2022-08-08T18:32:16.000Z",
            "text": "Teachers: Looking to add some space to your classroom? We have great resources to help you get ready…set…learn! Stay tuned for more #BackToSchool content from @NASASTEM: https://t.co/kDPpP2XwYd https://t.co/UsmjnmYOW9"
        },
        {
            "attachments": {
                "media_keys": [
                    "13_1556649908433817601"
                ]
            },
            "id": "1556649999274049537",
            "created_at": "2022-08-08T14:34:15.000Z",
            "text": "Feel inspired by the Moon? We do, too.\n\nSo we built the @NASA_SLS rocket &amp; @NASA_Orion spacecraft to pay it a visit. If you create Moon-inspired content, we want to see it! Share your paintings, photos, &amp; latte foam art with the hashtag #NASAMoonSnap: https://t.co/r6PGjI4wge https://t.co/ZoUdGhkTqW"
        },
        {
            "attachments": {
                "media_keys": [
                    "3_1556292177881358337"
                ]
            },
            "id": "1556292186211319809",
            "created_at": "2022-08-07T14:52:26.000Z",
            "text": "Is gravity the only thing keeping you together? You might be a globular cluster.\n\nStar clusters like this one, imaged by @NASAHubble, can contain millions of stars held together by gravity. @NASAWebb will give us a closer look at these cosmic objects: https://t.co/CsYuioyBrF https://t.co/23ijIpbmNG"
        },
        {
            "id": "1555933404490760192",
            "created_at": "2022-08-06T15:06:46.000Z",
            "text": "You can download the full, print-quality version of this poster—which includes a host of @MarsCuriosity fun facts—courtesy of our @NASAMars team: https://t.co/ltWBw3dOpE"
        },
        {
            "attachments": {
                "media_keys": [
                    "3_1555933189666914307"
                ]
            },
            "id": "1555933192623988741",
            "created_at": "2022-08-06T15:05:55.000Z",
            "text": "It's been a busy decade on Mars. \n\nAfter ten years, 18 miles (29 km), and 500,000 photos, @MarsCuriosity is still rolling strong in its quest for signs of ancient life. As Curiosity moves forward, take a look back with us at what it's accomplished: https://t.co/zX6MeG2QPt https://t.co/26CadYeGRk"
        },
        {
            "attachments": {
                "media_keys": [
                    "13_1555667117835436034"
                ]
            },
            "id": "1555667320483323904",
            "created_at": "2022-08-05T21:29:26.000Z",
            "text": "An overview of our #Artemis I mission to the Moon, a new image released from humanity's most powerful space telescope, and a celebration of @MarsCuriosity landing on the Red Planet 10 years ago today—all this and more This Week at NASA. https://t.co/4KPLcBGjgD"
        },
        {
            "attachments": {
                "media_keys": [
                    "16_1555632506560565251"
                ]
            },
            "id": "1555632531579494400",
            "created_at": "2022-08-05T19:11:12.000Z",
            "text": "Oct. 1 is International #ObserveTheMoon Night, and we want to celebrate with you! Whether you’ll be with a group or on your own, register your participation here for updates and a sneak peek at a new @NASAMoon image: https://t.co/Fc3gfkuWu8 https://t.co/IinlyTkJkA"
        },
        {
            "id": "1555615787343290368",
            "created_at": "2022-08-05T18:04:40.000Z",
            "text": "Who's who? \n\n@NASAJPL Emilee Richardson, JPL digital lead\n@MarsCuriosity Ashwin Vasavada, project scientist\n@NASAGoddard Charles Malespin, Mars sampling scientist\n@USGS_AstroGeo Lauren Edgar, Mars geologist\n@NASAMars Sophie Mitchell, Mars rover driver"
        },
        {
            "id": "1555615376435724290",
            "created_at": "2022-08-05T18:03:02.000Z",
            "text": "NOW: Ten years after landing on Mars, @MarsCuriosity rover scientists and engineers are taking your questions on a decade of discovery—and what's next. #AskNASA https://t.co/0qHM5DpXYK"
        },
        {
            "id": "1555577041126363136",
            "created_at": "2022-08-05T15:30:42.000Z",
            "text": "Live Now: NASA and @ESA experts discuss specific objectives for our uncrewed #Artemis I test flight around the Moon.\n \nSet to launch on Aug. 29, the first @NASAArtemis mission is set to last four to six weeks. Discover more: https://t.co/GtMraRlgtV https://t.co/lYHZM9vZx1"
        },
        {
            "attachments": {
                "media_keys": [
                    "13_893535065849737216"
                ]
            },
            "id": "1555555221882953728",
            "created_at": "2022-08-05T14:04:00.000Z",
            "text": "Ten years ago, a car-sized rover with a rock-vaporizing laser was rappelling out of a jetpack onto Mars. Where were you when @MarsCuriosity landed?\n\nCheck out the mission site for the latest raw images, where the rover is now, and updates from the team: https://t.co/esQrgOvI0J https://t.co/m67U6peg3t"
        },
        {
            "id": "1555253662536048642",
            "created_at": "2022-08-04T18:05:43.000Z",
            "text": "Meet #Crew5! \n\nHear from the crew ahead of their launch to the @Space_Station. Tune in: https://t.co/z1RgZwQkWS\n https://t.co/nVj3gt1X6K"
        },
        {
            "id": "1555230483629457408",
            "created_at": "2022-08-04T16:33:36.000Z",
            "text": "LIVE: We're talking about #Crew5, our next @Commercial_Crew mission to the @Space_Station, scheduled to lift off from @NASAKennedy no earlier than Friday, Sept. 29.\n\nHave questions for our mission experts? Share them with #AskNASA: https://t.co/z1RgZwQkWS https://t.co/2f4UtYTvTk"
        },
        {
            "id": "1554871502733983745",
            "created_at": "2022-08-03T16:47:09.000Z",
            "text": "Curiosity takes us everywhere... even up a Martian mountain!\r\rIt's been 10 years since @MarsCuriosity's daring landing on the Red Planet. Set a reminder to join the celebration and chat with mission team members. Submit questions with #AskNASA or ask live. https://t.co/0qHM5DpXYK"
        },
        {
            "id": "1554844980690227202",
            "created_at": "2022-08-03T15:01:45.000Z",
            "text": "Live Now: Tune in as agency experts and leaders discuss the big picture of our return to the Moon with #Artemis I.\n\nLearn about our mission objectives and what’s next for @NASAArtemis as we move closer to the launch date: https://t.co/z1RgZwQkWS https://t.co/cnCf2uaYEw"
        },
        {
            "attachments": {
                "media_keys": [
                    "16_1554582292059852810"
                ]
            },
            "id": "1554582326126034945",
            "created_at": "2022-08-02T21:38:03.000Z",
            "text": "Our mission to scan dust plumes in Earth's atmosphere is now operational on the @Space_Station. EMIT has taken its first scans while flying over Australia, mapping the dust makeup of the region to help scientists understand climate heating and cooling: https://t.co/JB56S7bLEQ https://t.co/rfR3FdBv4h"
        },
        {
            "attachments": {
                "media_keys": [
                    "3_1554544375488811008"
                ]
            },
            "id": "1554544378068480000",
            "created_at": "2022-08-02T19:07:16.000Z",
            "text": "We're hosting two news conferences on Thursday, Aug. 4, for our upcoming #Crew5 launch to the @Space_Station—a mission overview with agency leaders and a Q&amp;A with our crew.\n\nTune in to NASA TV and share your questions with #AskNASA: https://t.co/PODMYCZwcY https://t.co/2OZGoyhSh9"
        },
        {
            "attachments": {
                "media_keys": [
                    "3_1554470226380595210"
                ]
            },
            "id": "1554470232655265792",
            "created_at": "2022-08-02T14:12:38.000Z",
            "text": "Webb is on a roll! 🤸\n\nThis new @NASAWebb near and mid-infrared composite image highlights the Cartwheel Galaxy, the result of a high-speed collision that occurred about 440 million years ago, along with two neighboring galaxies. Get the details: https://t.co/c8lEVBBlub https://t.co/eVe8m0k6N7"
        },
        {
            "attachments": {
                "media_keys": [
                    "3_1554225462024572928"
                ]
            },
            "id": "1554225463945469953",
            "created_at": "2022-08-01T22:00:01.000Z",
            "text": "It’s a shine off! 🌌 \nThis year’s Perseids meteor shower will have to contend with the full Moon’s brightness. Look up if you’re outside after midnight (local time) on Aug. 12 or 13, when it’ll be at its peak--you might be lucky and see the brightest ones. https://t.co/vFkqWhKOmi https://t.co/iPP9lsYmzx"
        }
    ],
    "meta": {
        "next_token": "7140dibdnow9c7btw422nk19cmm07sicozgxwz2x8xxrn",
        "result_count": 100,
        "newest_id": "1564355515513245702",
        "oldest_id": "1554225463945469953"
    }
},
spaceFlightNews: [{"id":16319,"title":"South Korea seeks $459 million for lunar lander project","url":"https://spacenews.com/south-korea-seeks-459-million-for-lunar-lander-project/","imageUrl":"https://spacenews.com/wp-content/uploads/2022/08/korea-lunar-lander.png","newsSite":"SpaceNews","summary":"South Korea seeks a $459 million budget to build a 1.8-ton robotic lunar lander, which it wants to send to the moon in 2031 for a one-year mission on the nation’s next-generation carrier rocket under development.","publishedAt":"2022-08-30T16:01:18.000Z","updatedAt":"2022-08-30T16:01:18.946Z","featured":false,"launches":[],"events":[]},{"id":16318,"title":"Orbit Fab announces in-space hydrazine refueling service","url":"https://spacenews.com/orbit-fab-announces-in-space-hydrazine-refueling-service/","imageUrl":"https://spacenews.com/wp-content/uploads/2021/09/Screen-Shot-2021-09-23-at-3.49.32-PM.png","newsSite":"SpaceNews","summary":"Orbit Fab, a startup developing infrastructure for in-space refueling of spacecraft, will start offering hydrazine for satellites in geostationary orbit as soon as 2025 at a price of $20 million.","publishedAt":"2022-08-30T14:41:23.000Z","updatedAt":"2022-08-30T14:41:23.922Z","featured":false,"launches":[],"events":[]},{"id":16317,"title":"Astra to sell electric thrusters to Airbus OneWeb Satellites","url":"https://spacenews.com/astra-to-sell-electric-thrusters-to-airbus-oneweb-satellites/","imageUrl":"https://spacenews.com/wp-content/uploads/2021/01/apollo-ace.jpg","newsSite":"SpaceNews","summary":"Astra Space announced Aug. 29 it won a contract from Airbus OneWeb Satellites to provide electric propulsion systems for the Arrow line of small satellites.","publishedAt":"2022-08-30T10:01:27.000Z","updatedAt":"2022-08-30T10:01:27.506Z","featured":false,"launches":[],"events":[]},{"id":16316,"title":"SLS launch scrubbed after weather delay, engine cooling issue","url":"https://spaceflightnow.com/2022/08/29/sls-launch-scrubbed-after-weather-delay-engine-cooling-issue/","imageUrl":"https://spaceflightnow.com/wp-content/uploads/2022/08/20220829artemis1scrub.jpg","newsSite":"Spaceflight Now","summary":"Engineers fueled the Space Launch System moon rocket for blastoff Monday on NASA’s long-overdue Artemis 1 test flight, but stormy weather, brief indications of a hydrogen leak, trouble cooling one of the four main engines and then a valve glitch forced managers to call off the countdown.","publishedAt":"2022-08-29T22:51:12.000Z","updatedAt":"2022-08-30T05:34:12.503Z","featured":false,"launches":[{"id":"65896761-b6ca-4df3-9699-e077a360c52a","provider":"Launch Library 2"}],"events":[]},{"id":16315,"title":"Direct-to-cell startups welcome Musk’s arrival","url":"https://spacenews.com/direct-to-cell-startups-welcome-musks-arrival/","imageUrl":"https://spacenews.com/wp-content/uploads/2022/08/AST-BlueWalker-3.jpg","newsSite":"SpaceNews","summary":"Startups developing constellations for providing connectivity directly to standard cellphones say they stand to benefit from SpaceX entering their market.","publishedAt":"2022-08-29T22:31:18.000Z","updatedAt":"2022-08-29T22:31:18.949Z","featured":false,"launches":[],"events":[]},{"id":16314,"title":"NASA continues to study issues that caused Artemis 1 launch scrub","url":"https://spacenews.com/nasa-continues-to-study-issues-that-caused-artemis-1-launch-scrub/","imageUrl":"https://spacenews.com/wp-content/uploads/2022/08/sls-art1-20220829-2.jpg","newsSite":"SpaceNews","summary":"NASA officials say they are keeping open the possibility of attempting another launch of the Artemis 1 mission as soon as Sept. 2 as they continue to study a pair of issues that scrubbed the initial launch attempt Aug. 29.","publishedAt":"2022-08-29T21:11:20.000Z","updatedAt":"2022-08-30T05:34:22.720Z","featured":false,"launches":[{"id":"65896761-b6ca-4df3-9699-e077a360c52a","provider":"Launch Library 2"}],"events":[]},{"id":16313,"title":"NASA to Provide Update on Artemis I Moon Mission Status","url":"http://www.nasa.gov/press-release/nasa-to-provide-update-on-artemis-i-moon-mission-status","imageUrl":"https://www.nasa.gov/sites/default/files/thumbnails/image/52318623317_79b6a0b4d9_k.jpeg?itok=evhJks2u","newsSite":"NASA","summary":"NASA will hold a media teleconference at 6 p.m. EDT Tuesday, Aug. 30, to discuss the flight test of the agency’s mega Moon rocket and uncrewed Orion spacecraft, currently at Launch Pad 39B at NASA’s Kennedy Space Center in Florida, ahead of the Artemis I lunar mission.","publishedAt":"2022-08-29T20:51:00.000Z","updatedAt":"2022-08-30T05:34:39.503Z","featured":false,"launches":[{"id":"65896761-b6ca-4df3-9699-e077a360c52a","provider":"Launch Library 2"}],"events":[]},{"id":16312,"title":"New head of AFRL space vehicles looking for talent to help push technology forward","url":"https://spacenews.com/new-head-of-afrl-space-vehicles-looking-for-talent-to-help-push-technology-forward/","imageUrl":"https://spacenews.com/wp-content/uploads/2022/08/220713-F-NW306-1007-scaled.jpg","newsSite":"SpaceNews","summary":"AFRL is looking to shore up its technical workforce and to partner with private companies, said Col. Jeremy Raley, head of the space vehicles directorate","publishedAt":"2022-08-29T19:51:12.000Z","updatedAt":"2022-08-29T19:51:12.577Z","featured":false,"launches":[],"events":[]},{"id":16311,"title":"NASA Waves Off First Artemis I Launch Attempt","url":"http://www.nasa.gov/press-release/nasa-waves-off-first-artemis-i-launch-attempt","imageUrl":"https://www.nasa.gov/sites/default/files/thumbnails/image/52318270157_9c7817991c_k.jpeg?itok=USNxNH38","newsSite":"NASA","summary":"Following the Artemis I launch scrub Monday from Launch Complex 39B at NASA’s Kennedy Space Center in Florida, the agency will hold a media briefing at approximately 1 p.m. EDT today, Monday, Aug. 29, to discuss mission status.","publishedAt":"2022-08-29T19:42:00.000Z","updatedAt":"2022-08-29T19:42:58.060Z","featured":false,"launches":[{"id":"65896761-b6ca-4df3-9699-e077a360c52a","provider":"Launch Library 2"}],"events":[]},{"id":16310,"title":"Warning sign? NASA never finished a fueling test before today’s SLS launch attempt","url":"https://arstechnica.com/science/2022/08/warning-sign-nasa-never-finished-a-fueling-test-before-todays-sls-launch-attempt/","imageUrl":"https://cdn.arstechnica.net/wp-content/uploads/2022/08/Artemis-I-Aug-19-2022-8968.jpg","newsSite":"Arstechnica","summary":"\"I am very proud of this launch team.\"","publishedAt":"2022-08-29T19:39:01.000Z","updatedAt":"2022-08-29T19:44:02.579Z","featured":false,"launches":[{"id":"65896761-b6ca-4df3-9699-e077a360c52a","provider":"Launch Library 2"}],"events":[]},{"id":16308,"title":"NASA Waves Off First Artemis I Launch Attempt, to Provide Media Update","url":"http://www.nasa.gov/press-release/nasa-waves-off-first-artemis-i-launch-attempt-to-provide-media-update","imageUrl":"https://www.nasa.gov/sites/default/files/thumbnails/image/52318270157_9c7817991c_k.jpeg?itok=USNxNH38","newsSite":"NASA","summary":"Following the Artemis I launch scrub Monday from Launch Complex 39B at NASA’s Kennedy Space Center in Florida, the agency will hold a media briefing at approximately 1 p.m. EDT today, Monday, Aug. 29, to discuss mission status.","publishedAt":"2022-08-29T16:01:00.000Z","updatedAt":"2022-08-29T16:03:01.040Z","featured":false,"launches":[{"id":"65896761-b6ca-4df3-9699-e077a360c52a","provider":"Launch Library 2"}],"events":[]},{"id":16305,"title":"First Artemis 1 launch attempt scrubbed","url":"https://spacenews.com/first-artemis-1-launch-attempt-scrubbed/","imageUrl":"https://spacenews.com/wp-content/uploads/2022/08/sls-art1-20220829.jpg","newsSite":"SpaceNews","summary":"NASA scrubbed the first attempt to launch its Space Launch System rocket and Orion spacecraft Aug. 29 after a problem with a hydrogen bleed line with one of the rocket’s four core stage engines.","publishedAt":"2022-08-29T12:51:20.000Z","updatedAt":"2022-08-29T16:23:07.007Z","featured":true,"launches":[{"id":"65896761-b6ca-4df3-9699-e077a360c52a","provider":"Launch Library 2"}],"events":[]},{"id":16297,"title":"SLS scrubs first Artemis I launch attempt","url":"https://www.nasaspaceflight.com/2022/08/artemis-i-launch/","imageUrl":"https://www.nasaspaceflight.com/wp-content/uploads/2022/08/P1070858-min-1170x878.jpg","newsSite":"NASASpaceflight","summary":"For the first time since 1972, a moon rocket was ready to launch on the first of three sequenced missions to return humanity to the lunar surface. This time to stay.","publishedAt":"2022-08-29T12:47:33.000Z","updatedAt":"2022-08-29T17:11:44.893Z","featured":false,"launches":[{"id":"65896761-b6ca-4df3-9699-e077a360c52a","provider":"Launch Library 2"}],"events":[]},{"id":16302,"title":"NASA scrubs first SLS launch attempt due to engine issue [Updated]","url":"https://arstechnica.com/science/2022/08/the-final-countdown-begins-for-nasas-hulking-new-rocket/","imageUrl":"https://cdn.arstechnica.net/wp-content/uploads/2022/08/SLS-Rollout-June-6-2022-9782.jpg","newsSite":"Arstechnica","summary":"Actually, it was not time.","publishedAt":"2022-08-29T11:40:03.000Z","updatedAt":"2022-08-29T12:51:44.028Z","featured":false,"launches":[{"id":"65896761-b6ca-4df3-9699-e077a360c52a","provider":"Launch Library 2"}],"events":[]},{"id":16304,"title":"China plans to make aging Long March rocket reusable and non-toxic","url":"https://spacenews.com/china-plans-reusable-long-march-2d/","imageUrl":"https://spacenews.com/wp-content/uploads/2022/08/LongMarch2D-Beijing-3B-TSLC-24aug2022-SAST-1.jpg","newsSite":"SpaceNews","summary":"China’s main space contractor plans to revamp a highly successful, 30-year-old Long March rocket model to adapt to the trend towards reusability in the launch sector.","publishedAt":"2022-08-29T11:11:20.000Z","updatedAt":"2022-08-29T11:11:20.909Z","featured":false,"launches":[],"events":[]},{"id":16303,"title":"SpaceX Falcon 9 rocket breaks payload mass record with repaired booster","url":"https://www.teslarati.com/spacex-falcon-9-payload-record-repaired-booster/","imageUrl":"https://www.teslarati.com/wp-content/uploads/2022/08/Starlink-4-23-F9-B1069-launch-LC-40-SpaceX-2-crop.jpg","newsSite":"Teslarati","summary":"SpaceX has set a new record for the heaviest payload launched on a Falcon 9 rocket as part of a routine Starlink...","publishedAt":"2022-08-29T09:31:59.000Z","updatedAt":"2022-08-29T11:29:41.471Z","featured":false,"launches":[{"id":"67158b3c-201d-4450-be8a-990010c05b40","provider":"Launch Library 2"}],"events":[]},{"id":16298,"title":"SLS ready for long-delayed first launch","url":"https://spacenews.com/sls-ready-for-long-delayed-first-launch/","imageUrl":"https://spacenews.com/wp-content/uploads/2022/03/sls-rollout1.jpg","newsSite":"SpaceNews","summary":"A launch vehicle in development for more than a decade is now less than a day from attempting to lift off for the first time on the Artemis 1 mission.","publishedAt":"2022-08-28T21:51:15.000Z","updatedAt":"2022-08-29T05:35:30.195Z","featured":false,"launches":[{"id":"65896761-b6ca-4df3-9699-e077a360c52a","provider":"Launch Library 2"}],"events":[]},{"id":16300,"title":"Photos: Aerial survey of Kennedy Space Center on the eve of Artemis 1","url":"https://spaceflightnow.com/2022/08/28/photos-aerial-survey-of-the-cape-canaveral-spaceport-on-the-eve-of-artemis-1/","imageUrl":"https://spaceflightnow.com/wp-content/uploads/2022/08/WS-SFN-Artemis-Aerials-6495-1.jpg","newsSite":"Spaceflight Now","summary":"Spaceflight Now took an aerial tour around the Kennedy Space Center in Florida in the days before the scheduled launch of NASA’s Artemis 1 moon rocket. These images captured by Walter Scriptunas II show the the powerful moon rocket on its launch pad, plus SpaceX’s ongoing work to ready the spaceport for the huge commercial Starship rocket.","publishedAt":"2022-08-28T00:41:12.000Z","updatedAt":"2022-08-29T05:35:38.940Z","featured":false,"launches":[{"id":"65896761-b6ca-4df3-9699-e077a360c52a","provider":"Launch Library 2"}],"events":[]},{"id":16299,"title":"Artemis 1 flight to moon depends on precision rocket firings to pull off a complex trajectory","url":"https://spaceflightnow.com/2022/08/28/artemis-1-flight-to-moon-depends-on-precision-rocket-firings-to-pull-off-a-complex-trajectory/","imageUrl":"https://spaceflightnow.com/wp-content/uploads/2022/08/20220828orionmoon.jpg","newsSite":"Spaceflight Now","summary":"Even using the most powerful rocket NASA’s ever built, getting the agency’s unpiloted Orion spacecraft to the moon for the Artemis 1 test flight won’t be easy. It will hinge on a complex series of precisely orchestrated deep space maneuvers.","publishedAt":"2022-08-28T00:01:04.000Z","updatedAt":"2022-08-29T05:35:43.060Z","featured":false,"launches":[{"id":"65896761-b6ca-4df3-9699-e077a360c52a","provider":"Launch Library 2"}],"events":[]},{"id":16292,"title":"NASA’s most powerful rocket poised for launch on Artemis 1 moon mission","url":"https://spaceflightnow.com/2022/08/27/nasas-most-powerful-rocket-poised-for-launch-on-historic-artemis-1-moon-mission/","imageUrl":"https://spaceflightnow.com/wp-content/uploads/2022/08/52296607273_50ae9bd9ca_k.jpg","newsSite":"Spaceflight Now","summary":"Five decades after the final flight of NASA’s legendary Saturn 5 moon rocket, the U.S. space agency is poised to launch its most powerful rocket yet Monday for a critical, long-overdue test flight, sending an unpiloted Orion crew capsule on a 42-day voyage around the moon.","publishedAt":"2022-08-27T22:51:08.000Z","updatedAt":"2022-08-28T05:38:15.810Z","featured":false,"launches":[{"id":"65896761-b6ca-4df3-9699-e077a360c52a","provider":"Launch Library 2"}],"events":[]},{"id":16291,"title":"Starlink is now available in southern regions of Norway","url":"https://www.teslarati.com/starlink-available-southern-norway/","imageUrl":"https://www.teslarati.com/wp-content/uploads/2022/08/Starlink-is-now-available-in-southern-regions-of-Norway.png","newsSite":"Teslarati","summary":"Starlink is now available in Norway, SpaceX announced today on Twitter. SpaceX also said that it adjusted the prices in most countries...","publishedAt":"2022-08-27T20:32:02.000Z","updatedAt":"2022-08-27T20:32:14.453Z","featured":false,"launches":[],"events":[]},{"id":16290,"title":"Grants fuel Dawn Aerospace propulsion development","url":"https://spacenews.com/dawn-grants-2022/","imageUrl":"https://spacenews.com/wp-content/uploads/2022/08/rsz_dawn_thruster.jpg","newsSite":"SpaceNews","summary":"With recent grants from government agencies, Dawn Aerospace is refining its nitrous-based satellite propulsion technology.","publishedAt":"2022-08-27T20:11:15.000Z","updatedAt":"2022-08-27T20:11:15.270Z","featured":false,"launches":[],"events":[]},{"id":16289,"title":"Countdown for first Artemis 1 launch attempt begins","url":"https://spacenews.com/countdown-for-first-artemis-1-launch-attempt-begins/","imageUrl":"https://spacenews.com/wp-content/uploads/2022/08/sls-art1-20220826.jpg","newsSite":"SpaceNews","summary":"NASA started the countdown Aug. 27 for its first attempt to launch its Space Launch System rocket and Orion spacecraft for an uncrewed flight around the moon.","publishedAt":"2022-08-27T18:21:22.000Z","updatedAt":"2022-08-28T05:38:23.035Z","featured":false,"launches":[{"id":"65896761-b6ca-4df3-9699-e077a360c52a","provider":"Launch Library 2"}],"events":[]},{"id":16288,"title":"Aiming for the Moon: Artemis I countdown begins for historic flight","url":"https://www.nasaspaceflight.com/2022/08/artemis-i-countdown-begins/","imageUrl":"https://www.nasaspaceflight.com/wp-content/uploads/2022/08/08-25-22-SLS-Remote-Setup-1-8265-1170x780.jpg","newsSite":"NASASpaceflight","summary":"The launch countdown for the Space Launch System (SLS) rocket and the Artemis I mission is underway at the Kennedy Space Center in Florida ahead of a planned liftoff within a two-hour launch window that opens at 8:33 AM EDT (12:33 UTC) on Monday, August 29.","publishedAt":"2022-08-27T14:27:25.000Z","updatedAt":"2022-08-29T13:52:08.002Z","featured":false,"launches":[{"id":"65896761-b6ca-4df3-9699-e077a360c52a","provider":"Launch Library 2"}],"events":[]},{"id":16296,"title":"SpaceX launch sets record for Falcon 9 payload mass","url":"https://spaceflightnow.com/2022/08/27/falcon-9-starlink-4-23-live-coverage/","imageUrl":"https://spaceflightnow.com/wp-content/uploads/2022/08/20220827starlinkpre2.jpg","newsSite":"Spaceflight Now","summary":"SpaceX launched another 54 Starlink internet satellites Saturday night from Cape Canaveral, setting a record for the heaviest payload ever launched by a Falcon 9 rocket. The launch occurred days after SpaceX and T-Mobile unveiled plans to use a new generation of Starlink spacecraft to provide ubiquitous connectivity to existing cell phones.","publishedAt":"2022-08-27T04:31:06.000Z","updatedAt":"2022-08-28T05:38:32.115Z","featured":false,"launches":[{"id":"67158b3c-201d-4450-be8a-990010c05b40","provider":"Launch Library 2"}],"events":[]},{"id":16295,"title":"F-22 Demonstration Team flies by Starbase & Starship","url":"https://www.teslarati.com/f-22-demo-team-flies-by-starbase-starship/","imageUrl":"https://www.teslarati.com/wp-content/uploads/2022/08/F-22-Demonstration-Team-flies-over-Starbase-Starship.jpeg","newsSite":"Teslarati","summary":"The F-22 Demonstration Team and Heritage Flight Team visited Starbase earlier today and flew by Starship. The demo team flies the United...","publishedAt":"2022-08-27T02:22:02.000Z","updatedAt":"2022-08-28T02:22:11.709Z","featured":false,"launches":[],"events":[]},{"id":16294,"title":"FCC reversal $885.5M Starlink award has no lawful basis, commissioner says","url":"https://www.teslarati.com/fcc-reverasl-starlink-award-no-lawful-basis/","imageUrl":"https://www.teslarati.com/wp-content/uploads/2022/08/FCC-reversal-886M-Starlink-award-has-no-lawful-basis-commissioner-says.jpeg","newsSite":"Teslarati","summary":"A Federal Communications Commission (FCC) commissioner, Brenden Carr, called out the FCC for denying Starlink’s $885.5 million infrastructure award. The FCC said...","publishedAt":"2022-08-27T01:41:55.000Z","updatedAt":"2022-08-28T01:42:04.152Z","featured":false,"launches":[],"events":[]},{"id":16301,"title":"Countdown begins for maiden launch of Artemis moon rocket","url":"https://spaceflightnow.com/2022/08/27/countdown-begins-for-maiden-launch-of-artemis-moon-rocket/","imageUrl":"https://spaceflightnow.com/wp-content/uploads/2022/08/WS-SFN-Artemis-Aerials-6367-1.jpg","newsSite":"Spaceflight Now","summary":"Countdown clocks began ticking Saturday for the maiden launch of NASA new Space Launch System rocket Monday on a long-awaited mission to send an unpiloted Orion crew capsule around the moon and back.","publishedAt":"2022-08-27T01:41:16.000Z","updatedAt":"2022-08-29T05:35:54.541Z","featured":false,"launches":[{"id":"65896761-b6ca-4df3-9699-e077a360c52a","provider":"Launch Library 2"}],"events":[]},{"id":16287,"title":"US appeals court upholds Starlink deployment change","url":"https://spacenews.com/us-appeals-court-upholds-starlink-deployment-change/","imageUrl":"https://spacenews.com/wp-content/uploads/2022/05/Starlink-launch-scaled.jpeg","newsSite":"SpaceNews","summary":"A U.S. appeals court Aug. 26 upheld the Federal Communications Commission’s year-old decision to let SpaceX deploy more satellites at lower altitudes to improve the Starlink broadband constellation’s performance.","publishedAt":"2022-08-26T21:51:40.000Z","updatedAt":"2022-08-26T21:51:40.460Z","featured":false,"launches":[],"events":[]},{"id":16286,"title":"Airbus highlights European Service Module work for Artemis","url":"https://www.nasaspaceflight.com/2022/08/european-service-module/","imageUrl":"https://www.nasaspaceflight.com/wp-content/uploads/2022/08/Orion-orbiting-the-Moon-artist-view-1170x657.jpeg","newsSite":"NASASpaceflight","summary":"SLS is nearing its debut flight, with the Artemis I launch window opening this Monday at 16:33 UTC. But this launch is impactful beyond NASA and the United States. The European Service Module (ESM) will provide a wide range of services for Orion on its way to the moon, including propulsion and power. It is built by a large coalition of European partners, and the final assembly is done by Airbus Space and Defense in Bremen, Germany.","publishedAt":"2022-08-26T19:20:12.000Z","updatedAt":"2022-08-29T13:52:08.002Z","featured":false,"launches":[{"id":"65896761-b6ca-4df3-9699-e077a360c52a","provider":"Launch Library 2"}],"events":[]},{"id":16284,"title":"SpaceX satellite deployment plan backed by U.S. appeals court","url":"https://www.teslarati.com/spacex-sattelite-deployment-backed-by-court/","imageUrl":"https://www.teslarati.com/wp-content/uploads/2022/08/U.S.-appeals-courts-backs-SpaceXs-satellite-deployment-plan.jpeg","newsSite":"Teslarati","summary":"A U.S. appeals court upheld the Federal Communications Commission’s (FCC) approval of a SpaceX plan to deploy some of its Starlink satellites...","publishedAt":"2022-08-26T16:21:44.000Z","updatedAt":"2022-08-26T16:21:58.945Z","featured":false,"launches":[],"events":[]},{"id":16282,"title":"Cubesats to hitch rides on Artemis 1","url":"https://spacenews.com/cubesats-to-hitch-rides-on-artemis-1/","imageUrl":"https://spacenews.com/wp-content/uploads/2021/08/sls-cubesats.jpg","newsSite":"SpaceNews","summary":"The first flight of the Space Launch System will carry along with the Orion spacecraft 10 cubesats intended to carry out missions from prospecting for lunar ice to flying by an asteroid — if they’re not dead on arrival.","publishedAt":"2022-08-26T11:01:19.000Z","updatedAt":"2022-08-26T16:16:36.627Z","featured":false,"launches":[{"id":"65896761-b6ca-4df3-9699-e077a360c52a","provider":"Launch Library 2"}],"events":[]},{"id":16283,"title":"Rocket Report: At long last the SLS is ready, Alpha gets a launch date","url":"https://arstechnica.com/science/2022/08/rocket-report-at-long-last-the-sls-is-ready-alpha-gets-a-launch-date/","imageUrl":"https://cdn.arstechnica.net/wp-content/uploads/2022/03/SLS-Mar-18-2022-1841.jpg","newsSite":"Arstechnica","summary":"\"For the uncrewed demo, the goal is to have a safe landing.\"","publishedAt":"2022-08-26T11:00:27.000Z","updatedAt":"2022-08-26T16:16:42.974Z","featured":false,"launches":[{"id":"65896761-b6ca-4df3-9699-e077a360c52a","provider":"Launch Library 2"}],"events":[]},{"id":16281,"title":"China makes progress in reusability with secretive second flight of suborbital spaceplane","url":"https://spacenews.com/china-makes-progress-in-reusability-with-secretive-second-flight-of-suborbital-spaceplane/","imageUrl":"https://spacenews.com/wp-content/uploads/2019/09/yunhai-1-02-cz2d-jiuquan-sept2019-cctv-framegrab-250x250.jpg","newsSite":"SpaceNews","summary":"China has performed its first repeated use of a suborbital spaceplane as part of efforts to develop a fully reusable space transportation system.","publishedAt":"2022-08-26T09:11:16.000Z","updatedAt":"2022-08-26T09:11:17.021Z","featured":false,"launches":[{"id":"4edae34f-34fc-4b80-b806-23c242fa2ad6","provider":"Launch Library 2"}],"events":[]},{"id":16280,"title":"Lunar Trailblazer faces NASA review after cost overruns","url":"https://spacenews.com/lunar-trailblazer-faces-nasa-review-after-cost-overruns/","imageUrl":"https://spacenews.com/wp-content/uploads/2021/03/lunartrailblazer.jpg","newsSite":"SpaceNews","summary":"NASA will decide the future of a lunar smallsat orbiter mission at a review this fall after cost overruns by the spacecraft’s manufacturer.","publishedAt":"2022-08-26T08:11:28.000Z","updatedAt":"2022-08-26T16:17:09.163Z","featured":false,"launches":[{"id":"689d7129-10fa-4df9-b81e-2b8fb926bbaf","provider":"Launch Library 2"}],"events":[]},{"id":16279,"title":"SpaceX, NASA announce date for next Crew Dragon astronaut launch","url":"https://www.teslarati.com/spacex-nasa-astronaut-launch-russian-cosmonaut/","imageUrl":"https://www.teslarati.com/wp-content/uploads/2022/04/Crew-4-Dragon-C212-F9-B1067-dry-dress-April-2022-SpaceX-1-crop.jpg","newsSite":"Teslarati","summary":"SpaceX and NASA have settled on October 3rd for the company’s fifth operational astronaut launch, a mission that will also mark the...","publishedAt":"2022-08-26T07:22:03.000Z","updatedAt":"2022-08-26T16:17:15.832Z","featured":false,"launches":[{"id":"f33d5ece-e825-4cd8-809f-1d4c72a2e0d3","provider":"Launch Library 2"}],"events":[]},{"id":16278,"title":"Forget 5G wireless, SpaceX and T-Mobile want to offer Zero-G coverage","url":"https://arstechnica.com/science/2022/08/forget-5g-wireless-spacex-and-t-mobile-want-to-offer-zero-g-coverage/","imageUrl":"https://cdn.arstechnica.net/wp-content/uploads/2022/08/Space-X-Sievert-Musk.png","newsSite":"Arstechnica","summary":"\"So it's really quite a difficult technical challenge.\"","publishedAt":"2022-08-26T03:40:14.000Z","updatedAt":"2022-08-26T06:31:19.455Z","featured":false,"launches":[],"events":[{"id":627,"provider":"Launch Library 2"}]},{"id":16276,"title":"Work on Orion capsules continue as Artemis I prepares to launch","url":"https://www.nasaspaceflight.com/2022/08/orion-capsules-artemis-i-prepares-launch/","imageUrl":"https://www.nasaspaceflight.com/wp-content/uploads/2022/08/MAF_20220721_OrionArea_01-1170x780.jpeg","newsSite":"NASASpaceflight","summary":"With the Space Launch System (SLS) and Orion currently at Launch Complex-39B and ready for the Artemis I launch to the moon from NASA’s Kennedy Space Center (KSC), additional work is progressing at the Agency’s Michoud Assembly Facility for other Orion spacecraft.","publishedAt":"2022-08-25T22:56:45.000Z","updatedAt":"2022-08-29T13:52:08.002Z","featured":false,"launches":[{"id":"65896761-b6ca-4df3-9699-e077a360c52a","provider":"Launch Library 2"}],"events":[]},{"id":16275,"title":"Turion Space licensed to sell commercial SSA data","url":"https://spacenews.com/turion-space-licensed-to-sell-commercial-ssa-data/","imageUrl":"https://spacenews.com/wp-content/uploads/2022/08/image004-1.png","newsSite":"SpaceNews","summary":"California startup Turion Space said Aug. 24 it has secured U.S. regulatory approval to sell space situational awareness services from its first satellite next year.","publishedAt":"2022-08-25T22:31:21.000Z","updatedAt":"2022-08-25T22:31:21.151Z","featured":false,"launches":[],"events":[]},{"id":16274,"title":"Orion crew module hatch closed for Artemis 1 test flight","url":"https://spaceflightnow.com/2022/08/25/orion-crew-module-hatch-closed-for-artemis-1-test-flight/","imageUrl":"https://spaceflightnow.com/wp-content/uploads/2022/08/20220825orion2.jpg","newsSite":"Spaceflight Now","summary":"The Orion crew module hatch was closed for flight Thursday morning after technicians at pad 39B completed final closeouts and outfitting inside the spacecraft before launch next week on the unpiloted Artemis 1 test flight around the moon.","publishedAt":"2022-08-25T22:11:11.000Z","updatedAt":"2022-08-26T06:30:36.212Z","featured":false,"launches":[{"id":"65896761-b6ca-4df3-9699-e077a360c52a","provider":"Launch Library 2"}],"events":[]},{"id":16273,"title":"NRO to add more commercial imagery providers as it builds a ‘hybrid architecture’","url":"https://spacenews.com/nro-to-add-more-commercial-imagery-providers-as-it-builds-a-hybrid-architecture/","imageUrl":"https://spacenews.com/wp-content/uploads/2022/08/Pete-Muend-horizontal-pixled-e1650987372727.jpg","newsSite":"SpaceNews","summary":"The National Reconnaissance Office expects to select next month multiple providers of radio-frequency data collected by commercial satellites. RF data is used to track ships, vehicles or any devices that emit radio frequency signals.","publishedAt":"2022-08-25T22:01:20.000Z","updatedAt":"2022-08-25T22:01:20.939Z","featured":false,"launches":[],"events":[]},{"id":16272,"title":"Starliner crewed test flight slips to early 2023","url":"https://spacenews.com/starliner-crewed-test-flight-slips-to-early-2023/","imageUrl":"https://spacenews.com/wp-content/uploads/2022/05/oft2-launch-pad.jpg","newsSite":"SpaceNews","summary":"Work on Boeing’s CST-100 Starliner commercial crew vehicle to correct minor problems during an uncrewed test flight in May will delay its first flight with astronauts to early 2023, NASA and Boeing said Aug. 25.","publishedAt":"2022-08-25T21:11:15.000Z","updatedAt":"2022-08-26T06:30:46.288Z","featured":false,"launches":[{"id":"968067d1-8c12-4018-9854-b7b7d4bddc6b","provider":"Launch Library 2"}],"events":[]},{"id":16271,"title":"Colorado, Indiana Students to Hear from NASA Astronaut in Space","url":"http://www.nasa.gov/press-release/colorado-indiana-students-to-hear-from-nasa-astronaut-in-space","imageUrl":"https://www.nasa.gov/sites/default/files/thumbnails/image/iss044e021798.jpeg?itok=ekdKJLdJ","newsSite":"NASA","summary":"Students from Colorado and Indiana will have the opportunity next week to hear from NASA astronaut Kjell Lindgren aboard the International Space Station.","publishedAt":"2022-08-25T20:21:00.000Z","updatedAt":"2022-08-25T20:21:33.152Z","featured":false,"launches":[],"events":[]},{"id":16270,"title":"FCC Commissioner criticizes Starlink’s $900 million subsidy rejection","url":"https://spacenews.com/fcc-commissioner-criticizes-starlinks-900-million-subsidy-rejection/","imageUrl":"https://spacenews.com/wp-content/uploads/2020/03/rsz_dsc05365-1-470x470.jpg","newsSite":"SpaceNews","summary":"The Federal Communications Commission denied Starlink nearly $900 million in rural broadband subsidies “without legal justification,” one of the regulator’s four commissioners said Aug. 24.","publishedAt":"2022-08-25T19:31:15.000Z","updatedAt":"2022-08-25T19:31:15.581Z","featured":false,"launches":[],"events":[]},{"id":16269,"title":"NASA's Perseverance Makes New Discoveries in Mars' Jezero Crater","url":"https://mars.nasa.gov/news/9252/","imageUrl":"https://mars.nasa.gov/system/news_items/main_images/9252_1-PIA24836_Perseverance_Selfie_at_Rochette-web.jpg","newsSite":"NASA","summary":"The rover found that Jezero Crater’s floor is made up of volcanic rocks that have interacted with water.","publishedAt":"2022-08-25T18:31:00.000Z","updatedAt":"2022-08-25T18:38:46.007Z","featured":false,"launches":[{"id":"c4db6995-f25f-4608-8eb9-ce95d5226af2","provider":"Launch Library 2"}],"events":[]},{"id":16268,"title":"NASA Awards Services Contract to Help Immerse Students in STEM","url":"http://www.nasa.gov/press-release/nasa-awards-services-contract-to-help-immerse-students-in-stem","imageUrl":"https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb_0.jpg?itok=mrBnB_c9","newsSite":"NASA","summary":"NASA has selected Guardians of Honor LLC of Washington to provide a wide range of science, technology, engineering, and math (STEM) products and services to the agency, including its Office of STEM Engagement.","publishedAt":"2022-08-25T18:11:00.000Z","updatedAt":"2022-08-25T18:11:53.151Z","featured":false,"launches":[],"events":[]},{"id":16285,"title":"NASA, Boeing target February for first crew flight on Starliner spacecraft","url":"https://spaceflightnow.com/2022/08/25/nasa-boeing-target-february-for-first-crew-flight-on-starliner-spacecraft/","imageUrl":"https://spaceflightnow.com/wp-content/uploads/2022/08/20220825starlinerdocking.jpg","newsSite":"Spaceflight Now","summary":"NASA and Boeing and penciled a launch date in February for the first piloted test flight of the Starliner commercial crew capsule, allowing time to implement fixes on the spacecraft after an unpiloted demo to the International Space Station earlier this year.","publishedAt":"2022-08-25T17:11:10.000Z","updatedAt":"2022-08-26T17:11:10.698Z","featured":false,"launches":[],"events":[]},{"id":16267,"title":"U.S. Army signs agreement to test space data from HawkEye 360 satellites","url":"https://spacenews.com/u-s-army-signs-agreement-to-test-space-data-from-hawkeye-360-satellites/","imageUrl":"https://spacenews.com/wp-content/uploads/2019/09/rsz_hawkeye_360_-_next_gen_constellation_-_sep_2019-250x250.png","newsSite":"SpaceNews","summary":"The U.S. Army has signed an agreement to evaluate the use of space data from HawkEye 360, an Earth observation company that uses satellites to monitor radio-frequency signals emitted by electronic devices","publishedAt":"2022-08-25T16:51:21.000Z","updatedAt":"2022-08-25T16:51:21.528Z","featured":false,"launches":[],"events":[]},{"id":16266,"title":"SpaceX test-fires repaired booster for weekend Starlink launch","url":"https://spaceflightnow.com/2022/08/25/falcon-9-starlink-4-23-static-fire/","imageUrl":"https://spaceflightnow.com/wp-content/uploads/2022/08/20220824staticfire.jpg","newsSite":"Spaceflight Now","summary":"SpaceX rolled a Falcon 9 rocket to its launch pad at Cape Canaveral and test-fired its engines Thursday, prepping for liftoff Saturday night carrying another group of Starlink internet satellites into orbit. The Falcon 9 booster has been repaired after a hard landing in December knocked it out of SpaceX’s rocket reuse rotation.","publishedAt":"2022-08-25T16:41:08.000Z","updatedAt":"2022-08-25T16:44:46.114Z","featured":false,"launches":[{"id":"67158b3c-201d-4450-be8a-990010c05b40","provider":"Launch Library 2"}],"events":[]},{"id":16265,"title":"Watch live: SpaceX readies Falcon 9 rocket for weekend launch","url":"https://spaceflightnow.com/2022/08/25/watch-live-spacex-readies-falcon-9-rocket-for-weekend-launch/","imageUrl":"https://spaceflightnow.com/wp-content/uploads/2022/08/20220825f9static1.jpg","newsSite":"Spaceflight Now","summary":"SpaceX has rolled a Falcon 9 rocket to its launch pad at Cape Canaveral for a test-firing ahead of a planned mission Saturday night carrying another group of Starlink internet satellites into orbit. A static fire test is planned for 9:10 a.m. EDT (1310 GMT) on Space Launch Complex 40 at Cape Canaveral Space Force Station. Assuming the test is successful, the Falcon 9 rocket is set to lift off Saturday at 10:22 p.m. EDT (0222 GMT Sunday). The mission will be the final launch from Florida’s Space Coast before NASA is set to launch the Artemis 1 mission from the Kennedy Space Center — a few miles north of pad 40 — as soon as Monday morning. The Falcon 9 launch Saturday night will mark the 38th SpaceX mission of the year, and the 57th Falcon 9 flight primarily dedicated to deploying satellites for the Starlink internet network. SpaceX has launched more than 3,100 Starlink satellites to date, and Saturday’s flight is expected to add another 53 spacecraft to the fleet. SpaceX plans to","publishedAt":"2022-08-25T12:51:07.000Z","updatedAt":"2022-08-25T12:54:37.518Z","featured":false,"launches":[{"id":"67158b3c-201d-4450-be8a-990010c05b40","provider":"Launch Library 2"}],"events":[]},{"id":16264,"title":"ESA ready for “historic” Artemis 1 mission","url":"https://spacenews.com/esa-ready-for-historic-artemis-1-mission/","imageUrl":"https://spacenews.com/wp-content/uploads/2022/08/sls-nasa-esa.jpg","newsSite":"SpaceNews","summary":"European officials are as excited as their American counterparts about the upcoming Artemis 1 launch that will bring them one step closer to flying European astronauts to the moon.","publishedAt":"2022-08-25T12:01:15.000Z","updatedAt":"2022-08-25T15:46:22.570Z","featured":false,"launches":[{"id":"65896761-b6ca-4df3-9699-e077a360c52a","provider":"Launch Library 2"}],"events":[]},{"id":16262,"title":"NASA astronaut ready for Soyuz flight to ISS","url":"https://spacenews.com/nasa-astronaut-ready-for-soyuz-flight-to-iss/","imageUrl":"https://spacenews.com/wp-content/uploads/2022/08/frankrubio.jpg","newsSite":"SpaceNews","summary":"A NASA astronaut flying to the International Space Station on a Soyuz spacecraft next month says his training hasn’t been affected by tensions with Russia or uncertainty about the status of his mission.","publishedAt":"2022-08-25T11:11:18.000Z","updatedAt":"2022-08-25T11:59:37.960Z","featured":false,"launches":[{"id":"bc73ec4f-633e-4eb5-8b8e-5c996ea1733f","provider":"Launch Library 2"}],"events":[]},{"id":16263,"title":"Former NASA official on trying to stop SLS: “There was just such visible hostility”","url":"https://arstechnica.com/science/2022/08/former-nasa-official-on-trying-to-stop-sls-there-was-just-such-visible-hostility/","imageUrl":"https://cdn.arstechnica.net/wp-content/uploads/2022/08/garver1.jpg","newsSite":"Arstechnica","summary":"\"I still don't know to this day if my boss, Charlie, was in on the whole deal.\"","publishedAt":"2022-08-25T11:00:25.000Z","updatedAt":"2022-08-25T11:11:40.139Z","featured":false,"launches":[],"events":[]},{"id":16277,"title":"SpaceX and T-Mobile partner for direct-to-cellphone satellite service","url":"https://spacenews.com/spacex-and-t-mobile-partner-for-direct-to-cellphone-satellite-service/","imageUrl":"https://spacenews.com/wp-content/uploads/2022/08/TMobileSpaceX-scaled.jpg","newsSite":"SpaceNews","summary":"T-Mobile announced plans Aug. 25 to use SpaceX’s Starlink broadband satellites next year to bring connectivity to phones beyond the reach of its cell towers in the United States.","publishedAt":"2022-08-25T03:31:20.000Z","updatedAt":"2022-08-26T06:31:04.904Z","featured":false,"launches":[],"events":[{"id":627,"provider":"Launch Library 2"}]},{"id":16259,"title":"Team Miles prepares for inflight test of new thruster technology","url":"https://spacenews.com/team-miles-cubesat-artemis-1/","imageUrl":"https://spacenews.com/wp-content/uploads/2022/08/rsz_14.jpg","newsSite":"SpaceNews","summary":"Team Miles founder Wesley Faler has spent more than a decade developing and refining the water-fueled plasma thrusters set to fly for the first time on a cubesat launching alongside the NASA Artemis-1 mission.","publishedAt":"2022-08-24T23:31:20.000Z","updatedAt":"2022-08-25T15:46:35.109Z","featured":false,"launches":[{"id":"65896761-b6ca-4df3-9699-e077a360c52a","provider":"Launch Library 2"}],"events":[]},{"id":16258,"title":"‘State of the space industrial base’ report calls for national plan to compete with China","url":"https://spacenews.com/state-of-the-space-industrial-base-report-calls-for-national-plan-to-compete-with-china/","imageUrl":"https://spacenews.com/wp-content/uploads/2018/09/china.jpg","newsSite":"SpaceNews","summary":"The \"State of the Space Industrial Base 2022\" report urges the U.S. government to lay out a national strategy for space that embraces the private sector as a key partner","publishedAt":"2022-08-24T20:41:19.000Z","updatedAt":"2022-08-24T20:41:19.384Z","featured":false,"launches":[],"events":[]},{"id":16257,"title":"Following in the footsteps of Saturn, SLS prepares for test flight","url":"https://www.nasaspaceflight.com/2022/08/saturn-test-flights-to-sls/","imageUrl":"https://www.nasaspaceflight.com/wp-content/uploads/2022/08/6413719_orig-2-1170x739.jpeg","newsSite":"NASASpaceflight","summary":"As NASA’s Space Launch System (SLS) rocket stands ready for its first test flight next week, the Artemis program prepares to follow in the footsteps of Apollo, which first carried humans to the Moon in the 1960s. SLS will fly uncrewed just once before carrying astronauts around the Moon on Artemis II, while the Orion spacecraft will be making only its third trip into space on that mission. By contrast, Apollo saw a series of test flights over the course of a decade, leading up to Neil Armstrong’s “small step” in July 1969.","publishedAt":"2022-08-24T18:13:54.000Z","updatedAt":"2022-08-29T13:52:08.002Z","featured":false,"launches":[{"id":"65896761-b6ca-4df3-9699-e077a360c52a","provider":"Launch Library 2"}],"events":[]},{"id":16256,"title":"SpaceX & T-Mobile plan to announce plans to increase connectivity","url":"https://www.teslarati.com/spacex-t-mobile-plans-increase-connectivity/","imageUrl":"https://www.teslarati.com/wp-content/uploads/2022/08/SpaceX-T-Mobile-plan-to-announce-plans-to-increase-connectivity.png","newsSite":"Teslarati","summary":"SpaceX and T-Mobile CEO, Mike Sievert have plans to increase connectivity, SpaceX announced earlier today.  SpaceX will hold the live broadcast on...","publishedAt":"2022-08-24T17:41:54.000Z","updatedAt":"2022-08-25T07:20:22.562Z","featured":false,"launches":[],"events":[{"id":627,"provider":"Launch Library 2"}]},{"id":16255,"title":"Megaconstellation startup E-Space expands leadership team","url":"https://spacenews.com/megaconstellation-startup-e-space-expands-leadership-team/","imageUrl":"https://spacenews.com/wp-content/uploads/2022/08/New-Los-Gatos-Office-June-2022.jpg","newsSite":"SpaceNews","summary":"E-Space has expanded its leadership team as the startup prepares to start serial production next year for a network of potentially hundreds of thousands of satellites.","publishedAt":"2022-08-24T17:41:11.000Z","updatedAt":"2022-08-24T17:41:11.950Z","featured":false,"launches":[],"events":[]},{"id":16254,"title":"Astrobotic wins NASA funding for CubeRover mission","url":"https://spacenews.com/astrobotic-wins-nasa-funding-for-cuberover-mission/","imageUrl":"https://spacenews.com/wp-content/uploads/2022/08/cuberover.jpg","newsSite":"SpaceNews","summary":"Astrobotic, a company developing landers and other lunar technologies, has secured NASA funding to fly a small rover on a future mission to test its ability to survive the lunar night.","publishedAt":"2022-08-24T13:41:18.000Z","updatedAt":"2022-08-24T13:41:18.064Z","featured":false,"launches":[],"events":[]},{"id":16253,"title":"Scout Space and university labs win contracts for on-orbit servicing project","url":"https://spacenews.com/scout-space-and-university-labs-win-contracts-for-on-orbit-servicing-project/","imageUrl":"https://spacenews.com/wp-content/uploads/2022/08/SCOUT-Autonomous-Software-Sof-2-scaled.jpg","newsSite":"SpaceNews","summary":"Scout Space, a startup developing technologies for in-space services, won two U.S. Space Force contracts in support of the debris-cleanup project known as Orbital Prime","publishedAt":"2022-08-24T13:01:24.000Z","updatedAt":"2022-08-24T13:01:24.163Z","featured":false,"launches":[],"events":[]},{"id":16252,"title":"Starship uncrewed lunar lander test a “skeleton” of crewed lander","url":"https://spacenews.com/starship-uncrewed-lunar-lander-test-a-skeleton-of-crewed-lander/","imageUrl":"https://spacenews.com/wp-content/uploads/2021/04/starship-lander.jpg","newsSite":"SpaceNews","summary":"A SpaceX Starship that will land on the moon an on uncrewed test flight may only be a “skeleton” of the version of that will carry people on the Artemis 3 mission, NASA says.","publishedAt":"2022-08-24T11:01:15.000Z","updatedAt":"2022-08-24T11:01:16.122Z","featured":false,"launches":[],"events":[]},{"id":16251,"title":"SpaceX Starship booster heads to launch pad for the fifth time","url":"https://www.teslarati.com/spacex-starship-booster-launch-pad-fifth-time/","imageUrl":"https://www.teslarati.com/wp-content/uploads/2022/08/Starbase-082322-NASASpaceflight-bocachicagal-B7-OLM-install-S24-OLS-2-c.jpg","newsSite":"Teslarati","summary":"For the fifth time in five months, SpaceX has transported its most advanced Starship booster prototype from the Starbase factory to the...","publishedAt":"2022-08-24T08:42:05.000Z","updatedAt":"2022-08-24T08:42:17.403Z","featured":false,"launches":[],"events":[]},{"id":16261,"title":"SpaceX to squeeze in Falcon 9 Starlink launch before NASA’s Moon rocket debut","url":"https://www.teslarati.com/spacex-falcon-9-starlink-launch-before-nasa-moon-rocket/","imageUrl":"https://www.teslarati.com/wp-content/uploads/2022/08/KPLO-F9-B1052-LC-40-080422-SLS-Artemis-I-39B-081922-Richard-Angle-1-crop-2-c.jpg","newsSite":"Teslarati","summary":"SpaceX is preparing for at least one more Falcon 9 launch between now and the debut of NASA’s Space Launch System (SLS)...","publishedAt":"2022-08-24T04:52:17.000Z","updatedAt":"2022-08-25T07:20:43.990Z","featured":false,"launches":[{"id":"67158b3c-201d-4450-be8a-990010c05b40","provider":"Launch Library 2"}],"events":[]},{"id":16248,"title":"NASA, Rice University Mark 60th Anniversary of John F. Kennedy Speech","url":"http://www.nasa.gov/press-release/nasa-rice-university-mark-60th-anniversary-of-john-f-kennedy-speech","imageUrl":"https://www.nasa.gov/sites/default/files/thumbnails/image/moon_shot_final_no_date.png?itok=A6BkA6Cv","newsSite":"NASA","summary":"NASA and Rice University in Houston will host multiple events in September to celebrate the 60th anniversary of John F. Kennedy’s historic speech at Rice Stadium, rallying the nation to land astronauts on the Moon before the end of the decade and bring the crew safely back to Earth.","publishedAt":"2022-08-23T21:12:00.000Z","updatedAt":"2022-08-23T21:12:07.161Z","featured":false,"launches":[],"events":[]},{"id":16247,"title":"SpaceX teams refining countdown procedures for Starship testing","url":"https://www.nasaspaceflight.com/2022/08/starship-countdown-procedures/","imageUrl":"https://www.nasaspaceflight.com/wp-content/uploads/2022/08/DSC_3213_2-wmarked-1170x780.jpeg","newsSite":"NASASpaceflight","summary":"In recent weeks, SpaceX has not only moved back into Starship testing with Ship 24, but has also performed multiple engine tests with Booster 7 after the explosion below it during a failed spin prime test, and repairs after that in the mega bay. It is now time to look at parts of the countdown that have stayed the same, and the new things about the Starship and Super Heavy countdown operations compared to what was observed last November. These changes will be evident in the next stage of testing, which might begin as early as this week.","publishedAt":"2022-08-23T21:07:22.000Z","updatedAt":"2022-08-29T13:52:08.002Z","featured":false,"launches":[],"events":[]},{"id":16246,"title":"Three Companies to Help NASA Advance Solar Array Technology for Moon","url":"http://www.nasa.gov/press-release/three-companies-to-help-nasa-advance-solar-array-technology-for-moon","imageUrl":"https://www.nasa.gov/sites/default/files/thumbnails/image/surface_power_2_0.png?itok=nvnUFqui","newsSite":"NASA","summary":"NASA has selected three companies to further advance work on deployable solar array systems that will help power the agency's human and robotic exploration of the Moon under Artemis.","publishedAt":"2022-08-23T20:11:00.000Z","updatedAt":"2022-08-23T20:11:49.175Z","featured":false,"launches":[],"events":[]},{"id":16245,"title":"Report: Industry has to face reality that commercial satellites will be targets in war","url":"https://spacenews.com/report-industry-has-to-face-reality-that-commercial-satellites-will-be-targets-in-war/","imageUrl":"https://spacenews.com/wp-content/uploads/2022/02/comspoc-collision.jpg","newsSite":"SpaceNews","summary":"A new Aerospace study wars that in crises and conflicts, \"commercial space actors risk getting caught in the middle of a tense and escalatory environment.\"","publishedAt":"2022-08-23T19:41:26.000Z","updatedAt":"2022-08-23T19:41:26.325Z","featured":false,"launches":[],"events":[]},{"id":16244,"title":"Axiom taps Epsilon3 software platform for space station development","url":"https://spacenews.com/axiom-taps-epsilon3-software-platform-for-space-station-development/","imageUrl":"https://spacenews.com/wp-content/uploads/2022/06/Axiom-1-on-pad.jpg","newsSite":"SpaceNews","summary":"Californian startup Epsilon3 said Aug. 23 it is building a software platform to help Axiom Space manage plans to deploy commercial modules on the International Space Station in 2024.","publishedAt":"2022-08-23T19:11:18.000Z","updatedAt":"2022-08-23T19:11:18.735Z","featured":false,"launches":[],"events":[]},{"id":16242,"title":"China’s official view of NASA’s Artemis program appears to be dismissive","url":"https://arstechnica.com/science/2022/08/chinese-view-of-nasas-moon-plans-trying-hard-to-relive-apollo-glories/","imageUrl":"https://cdn.arstechnica.net/wp-content/uploads/2021/10/NASA_SLS-CROPPED.jpeg","newsSite":"Arstechnica","summary":"\"NASA might grow more hostile against China in the space domain.\"","publishedAt":"2022-08-23T17:30:06.000Z","updatedAt":"2022-08-23T17:51:31.618Z","featured":false,"launches":[],"events":[]},{"id":16241,"title":"NASA Invites Media to Witness World’s First Planetary Defense Test","url":"http://www.nasa.gov/press-release/nasa-invites-media-to-witness-world-s-first-planetary-defense-test","imageUrl":"https://www.nasa.gov/sites/default/files/thumbnails/image/dart_2.jpg?itok=awjvcq54","newsSite":"NASA","summary":"NASA’s Double Asteroid Redirection Test (DART), the world’s first mission to test technology for defending Earth against potential asteroid or comet hazards, will impact its target asteroid—which poses no threat to Earth—at 7:14 p.m. EDT on Monday, Sept. 26.","publishedAt":"2022-08-23T17:02:00.000Z","updatedAt":"2022-08-23T19:08:16.668Z","featured":false,"launches":[{"id":"c4b2f90e-3385-4cbe-a89f-fc5f57da1bfb","provider":"Launch Library 2"}],"events":[]},{"id":16240,"title":"La NASA invita a la prensa a la primera prueba de defensa planetaria","url":"http://www.nasa.gov/press-release/la-nasa-invita-a-la-prensa-a-la-primera-prueba-de-defensa-planetaria","imageUrl":"https://www.nasa.gov/sites/default/files/thumbnails/image/dart_2.jpg?itok=awjvcq54","newsSite":"NASA","summary":"La misión Prueba de redireccionamiento del asteroide doble (DART, por sus siglas en inglés) de la NASA, la primera en el mundo que pone a prueba una tecnología para defender a la Tierra de posibles peligros de asteroides o cometas, impactará con su objetivo, un asteroide que no supone ninguna amenaza para la Tierra, a las 7:14 pm EDT del lunes 26 d","publishedAt":"2022-08-23T17:02:00.000Z","updatedAt":"2022-08-24T05:54:36.606Z","featured":false,"launches":[{"id":"c4b2f90e-3385-4cbe-a89f-fc5f57da1bfb","provider":"Launch Library 2"}],"events":[]},{"id":16238,"title":"The SLS rocket is the worst thing to happen to NASA—but maybe also the best?","url":"https://arstechnica.com/science/2022/08/the-sls-rocket-is-the-worst-thing-to-happen-to-nasa-but-maybe-also-the-best/","imageUrl":"https://cdn.arstechnica.net/wp-content/uploads/2022/08/Artemis-I-Aug-19-2022-9057.jpg","newsSite":"Arstechnica","summary":"\"This has been a really tough thing.\"","publishedAt":"2022-08-23T11:30:57.000Z","updatedAt":"2022-08-23T14:08:51.086Z","featured":false,"launches":[{"id":"65896761-b6ca-4df3-9699-e077a360c52a","provider":"Launch Library 2"}],"events":[]},{"id":16237,"title":"Artemis 1 passes flight readiness review","url":"https://spacenews.com/artemis-1-passes-flight-readiness-review/","imageUrl":"https://spacenews.com/wp-content/uploads/2022/08/artemis1-22aug18.jpg","newsSite":"SpaceNews","summary":"An uncrewed test of NASA’s Space Launch System and Orion spacecraft moved a step closer to launch with the completion of a flight readiness review Aug. 22.","publishedAt":"2022-08-23T11:01:19.000Z","updatedAt":"2022-08-23T14:08:54.351Z","featured":false,"launches":[{"id":"65896761-b6ca-4df3-9699-e077a360c52a","provider":"Launch Library 2"}],"events":[]},{"id":16260,"title":"CubeSats on Artemis 1 to pursue bold missions in deep space, if they overcome battery concerns","url":"https://spaceflightnow.com/2022/08/23/cubesats-on-artemis-1-to-pursue-bold-missions-in-deep-space/","imageUrl":"https://spaceflightnow.com/wp-content/uploads/2022/08/20220824lunahmap.jpg","newsSite":"Spaceflight Now","summary":"The 10 CubeSats hitching a ride to deep space on NASA’s Space Launch System moon rocket promise new discoveries about the moon, space weather, and asteroids. But some of the small spacecraft will launch with their batteries only partially charged after sitting inside the rocket for more than a year.","publishedAt":"2022-08-23T04:21:09.000Z","updatedAt":"2022-08-25T07:21:00.484Z","featured":false,"launches":[{"id":"65896761-b6ca-4df3-9699-e077a360c52a","provider":"Launch Library 2"}],"events":[]},{"id":16250,"title":"Europe plays key role in NASA’s epic return to the moon","url":"https://spaceflightnow.com/2022/08/23/europe-plays-key-role-in-nasas-epic-return-to-the-moon/","imageUrl":"https://spaceflightnow.com/wp-content/uploads/2022/08/Artemis-1-Orion-Processingmedium.jpg","newsSite":"Spaceflight Now","summary":"European space officials have hailed the importance of NASA’s upcoming inaugural Artemis mission and the vital role ESA is playing in supporting a return to the moon.","publishedAt":"2022-08-23T02:21:08.000Z","updatedAt":"2022-08-25T07:21:08.687Z","featured":false,"launches":[{"id":"65896761-b6ca-4df3-9699-e077a360c52a","provider":"Launch Library 2"}],"events":[]},{"id":16233,"title":"Schiess takes over U.S. Space Command’s coalition forces component","url":"https://spacenews.com/schiess-takes-over-u-s-space-commands-coalition-forces-component/","imageUrl":"https://spacenews.com/wp-content/uploads/2022/08/Screen-Shot-2022-08-22-at-2.18.48-PM.png","newsSite":"SpaceNews","summary":"Space Force Maj. Gen. Douglas Schiess on Aug. 22 assumed command of U.S. Space Command’s Combined Force Space Component Command at Vandenberg Space Force Base, California.","publishedAt":"2022-08-22T18:41:20.000Z","updatedAt":"2022-08-22T18:41:20.460Z","featured":false,"launches":[],"events":[]},{"id":16232,"title":"SpaceX adds Falcon 9 back to second-gen Starlink launch plan","url":"https://spacenews.com/spacex-adds-falcon-9-back-to-second-gen-starlink-launch-plan/","imageUrl":"https://spacenews.com/wp-content/uploads/2021/10/ship20-staticfire.jpg","newsSite":"SpaceNews","summary":"SpaceX said Aug. 19 it has decided to use a mix of Falcon 9 and Starship rockets to launch the 30,000 satellites in its proposed second-generation Starlink broadband constellation.","publishedAt":"2022-08-22T18:21:20.000Z","updatedAt":"2022-08-22T18:21:20.490Z","featured":false,"launches":[],"events":[]},{"id":16239,"title":"Webb images of Jupiter show auroras, rings, moons","url":"https://spaceflightnow.com/2022/08/22/webb-images-of-jupiter-show-auroras-rings-moons/","imageUrl":"https://spaceflightnow.com/wp-content/uploads/2022/08/20220822jupiter1.jpg","newsSite":"Spaceflight Now","summary":"A few weeks after officially starting science operations, the James Webb Space Telescope turned its mirrors toward Jupiter and captured stunning new infrared views of the gas giant planet, its auroras, moons, and faint rings.","publishedAt":"2022-08-22T16:31:08.000Z","updatedAt":"2022-08-23T19:08:25.641Z","featured":false,"launches":[{"id":"d0fa4bb2-80ea-4808-af08-7785dde53bf6","provider":"Launch Library 2"}],"events":[]},{"id":16231,"title":"APL’s Future Vision: Q&A with Robert Braun","url":"https://spacenews.com/apls-future-vision-qa-with-robert-braun/","imageUrl":"https://spacenews.com/wp-content/uploads/2022/08/sn_08.01.22_pgC1.jpg","newsSite":"SpaceNews","summary":"The Applied Physics Laboratory's new space sector director spoke with SpaceNews about his vision for APL's portfolio of civil and national security space projects.","publishedAt":"2022-08-22T15:51:21.000Z","updatedAt":"2022-08-22T15:51:21.607Z","featured":false,"launches":[],"events":[]},{"id":16228,"title":"Orbital Reef passes NASA review","url":"https://spacenews.com/orbital-reef-passes-nasa-review/","imageUrl":"https://spacenews.com/wp-content/uploads/2022/04/Orbital-Reef_FullColor_ExternalHD-scaled-e1649000961806.jpeg","newsSite":"SpaceNews","summary":"A proposed commercial space station has passed a key early NASA review, allowing it to move into the next phase of its design.","publishedAt":"2022-08-22T14:01:25.000Z","updatedAt":"2022-08-22T14:01:25.530Z","featured":false,"launches":[],"events":[]},{"id":16226,"title":"For its latest images, the Webb telescope looked closer to home","url":"https://arstechnica.com/science/2022/08/new-webb-images-of-jupiter-show-dazzling-auroras-and-two-small-moons/","imageUrl":"https://cdn.arstechnica.net/wp-content/uploads/2022/08/JWST_2022-07-27_Jupiter-1024x971.png","newsSite":"Arstechnica","summary":"\"We hadn't really expected it to be this good, to be honest.\"","publishedAt":"2022-08-22T13:20:00.000Z","updatedAt":"2022-08-22T17:59:48.733Z","featured":false,"launches":[{"id":"d0fa4bb2-80ea-4808-af08-7785dde53bf6","provider":"Launch Library 2"}],"events":[]},{"id":16225,"title":"SpaceLink partners with Parsons for DARPA’s inter-satellite communications project","url":"https://spacenews.com/spacelink-partners-with-parsons-for-darpas-inter-satellite-communications-project/","imageUrl":"https://spacenews.com/wp-content/uploads/2022/08/Persistent-Connectivity-through-SpaceLink-Relay-Satellites-scaled.jpg","newsSite":"SpaceNews","summary":"SpaceLink will work with the Defense Advanced Research Projects Agency to develop protocols for how commercial communications constellations will connect with defense and military systems.","publishedAt":"2022-08-22T13:01:23.000Z","updatedAt":"2022-08-22T13:01:23.435Z","featured":false,"launches":[],"events":[]},{"id":16224,"title":"China claims progress on rockets for crewed lunar landings and moon base","url":"https://spacenews.com/china-claims-progress-on-rockets-for-crewed-lunar-landings-and-moon-base/","imageUrl":"https://spacenews.com/wp-content/uploads/2018/11/new-concept-launch-vehicle-human-spaceflight-Zhuhai-2018-CASC-copy.jpg","newsSite":"SpaceNews","summary":"China is progressing with the development of two super heavy-lift rockets for crewed missions and infrastructure launches to the moon, according to officials.","publishedAt":"2022-08-22T12:41:15.000Z","updatedAt":"2022-08-22T12:41:15.416Z","featured":false,"launches":[],"events":[]},{"id":16236,"title":"NASA managers give “go” for Artemis 1 launch after flight readiness review","url":"https://spaceflightnow.com/2022/08/22/nasa-managers-give-go-for-artemis-1-launch-after-flight-readiness-review/","imageUrl":"https://spaceflightnow.com/wp-content/uploads/2022/08/20220822frr.jpg","newsSite":"Spaceflight Now","summary":"With one week to go until launch, NASA managers met at the Kennedy Space Center, reviewed flight preparations and cleared the agency’s huge $4.1 billion Space Launch System rocket for blastoff next Monday on a test flight heralding an American-led return to the moon.","publishedAt":"2022-08-22T05:31:08.000Z","updatedAt":"2022-08-23T06:11:08.536Z","featured":false,"launches":[{"id":"65896761-b6ca-4df3-9699-e077a360c52a","provider":"Launch Library 2"}],"events":[]},{"id":16249,"title":"Final week of Artemis 1 preps include Orion closeouts and booster servicing","url":"https://spaceflightnow.com/2022/08/22/final-week-of-artemis-1-preps-include-orion-closeouts-and-booster-servicing/","imageUrl":"https://spaceflightnow.com/wp-content/uploads/2022/08/20220816orion.jpg","newsSite":"Spaceflight Now","summary":"Ground teams at NASA’s Kennedy Space Center will load fuel into the Space Launch System moon rocket’s steering system and finish closeouts inside the Orion capsule on top of the launcher this week, setting the stage for the start of the two-day countdown sequence Saturday and liftoff Monday.","publishedAt":"2022-08-22T01:31:13.000Z","updatedAt":"2022-08-25T07:21:24.214Z","featured":false,"launches":[{"id":"65896761-b6ca-4df3-9699-e077a360c52a","provider":"Launch Library 2"}],"events":[]},{"id":16235,"title":"SpaceX tweaks Starlink Gen2 plans to add Falcon 9 launch option","url":"https://www.teslarati.com/spacex-starlink-gen2-falcon-9-launch-plans/","imageUrl":"https://www.teslarati.com/wp-content/uploads/2021/11/F9-B1058-LC40-012321-Richard-Angle-Starship-S21-102621-NASASpaceflight-bocachicagal-1-c.jpg","newsSite":"Teslarati","summary":"SpaceX says it has revised plans for its next-generation Starlink Gen2 constellation to allow the upgraded satellites to launch on its workhorse...","publishedAt":"2022-08-22T00:22:06.000Z","updatedAt":"2022-08-23T00:22:19.514Z","featured":false,"launches":[],"events":[]},{"id":16223,"title":"NASA cautions planetary science funding falls short of decadal projections","url":"https://spacenews.com/nasa-cautions-planetary-science-funding-falls-short-of-decadal-projections/","imageUrl":"https://spacenews.com/wp-content/uploads/2022/08/uranus.jpg","newsSite":"SpaceNews","summary":"As NASA takes the first steps to implement recommendations of the planetary science decadal survey, the agency is warning that projected funding for at least the near term will fall short of that’s report’s projections.","publishedAt":"2022-08-21T23:01:21.000Z","updatedAt":"2022-08-21T23:01:21.933Z","featured":false,"launches":[],"events":[]},{"id":16222,"title":"Five companies win $4.8 billion in contracts from the National Air and Space Intelligence Center","url":"https://spacenews.com/five-companies-win-4-8-billion-in-contracts-from-the-national-air-and-space-intelligence-center/","imageUrl":"https://spacenews.com/wp-content/uploads/2022/08/244398426_166781845610756_6655148927827200415_n.jpg","newsSite":"SpaceNews","summary":"The U.S. Air Force selected five companies for a $4.8 billion multi-award contract to provide research, development and software services over 10 years for the National Air and Space Intelligence Center.","publishedAt":"2022-08-21T20:51:12.000Z","updatedAt":"2022-08-21T20:51:12.112Z","featured":false,"launches":[],"events":[]},{"id":16234,"title":"Photos: SLS moon rocket rolls to launch pad","url":"https://spaceflightnow.com/2022/08/21/photos-sls-moon-rocket-rolls-to-launch-pad/","imageUrl":"https://spaceflightnow.com/wp-content/uploads/2022/08/20220821rollout8.jpg","newsSite":"Spaceflight Now","summary":"NASA’s first Space Launch System moon rocket arrived on pad 39B early Aug. 17 after an overnight rollout from the Vehicle Assembly Building at the Kennedy Space Center in Florida.","publishedAt":"2022-08-21T20:31:08.000Z","updatedAt":"2022-08-23T06:11:26.607Z","featured":false,"launches":[{"id":"65896761-b6ca-4df3-9699-e077a360c52a","provider":"Launch Library 2"}],"events":[]},{"id":16221,"title":"Booster 7 prepares for additional Static Fires as future plans evolve","url":"https://www.nasaspaceflight.com/2022/08/booster-7-additional-tests/","imageUrl":"https://www.nasaspaceflight.com/wp-content/uploads/2022/08/NSF-2022-08-21-16-23-07-465-1170x772.jpg","newsSite":"NASASpaceflight","summary":"Booster 7 – following two single-engine static fire tests on the Orbital Launch Mount (OLM) – is back inside the Mega Bay for further engine installation in preparation for continued static fire tests later this month. The vehicle is likely ready to roll but awaits preparation work at the launch site for its next testing phase.","publishedAt":"2022-08-21T19:36:53.000Z","updatedAt":"2022-08-29T13:52:08.002Z","featured":false,"launches":[],"events":[]},{"id":16220,"title":"Space Force wargame challenges satellite operators to think critically","url":"https://spacenews.com/space-force-wargame-challenges-satellite-operators-to-think-critically/","imageUrl":"https://spacenews.com/wp-content/uploads/2022/08/DSC_5292-scaled-e1661097201396.jpg","newsSite":"SpaceNews","summary":"At the Space Flag exercise, Space Force guardians conduct simulated operations that mimic a real-world conflict","publishedAt":"2022-08-21T18:01:14.000Z","updatedAt":"2022-08-21T18:01:14.616Z","featured":false,"launches":[],"events":[]},{"id":16230,"title":"SpaceX cargo capsule returns to Earth with leaky NASA spacesuit","url":"https://spaceflightnow.com/2022/08/21/spacex-cargo-capsule-returns-to-earth-with-leaky-nasa-spacesuit/","imageUrl":"https://spaceflightnow.com/wp-content/uploads/2022/08/20220821dragon.jpeg","newsSite":"Spaceflight Now","summary":"SpaceX’s Cargo Dragon spacecraft splashed down in the Atlantic Ocean northeast of Cape Canaveral Saturday, wrapping up a 37-day flight to the International Space Station and returning home with experiments and a leaky spacesuit for troubleshooting.","publishedAt":"2022-08-21T15:11:10.000Z","updatedAt":"2022-08-22T18:00:09.848Z","featured":false,"launches":[{"id":"2773613e-58eb-4b99-8120-595c92aa3390","provider":"Launch Library 2"}],"events":[{"id":346,"provider":"Launch Library 2"}]},{"id":16229,"title":"Propulsion deal offers boost for Scottish horizontal space launches","url":"https://spaceflightnow.com/2022/08/21/propulsion-deal-offers-boost-for-scottish-horizontal-space-launches/","imageUrl":"https://spaceflightnow.com/wp-content/uploads/2022/08/astraius.jpeg","newsSite":"Spaceflight Now","summary":"UK-based horizontal launch company Astraius says it on track for a first launch in spring 2024 from Prestwick Spaceport in Scotland after signing deals with two key suppliers for its innovative rocket.","publishedAt":"2022-08-21T14:11:08.000Z","updatedAt":"2022-08-22T14:11:09.059Z","featured":false,"launches":[],"events":[]},{"id":16227,"title":"Three mannequins installed on Orion spacecraft for flight around the moon","url":"https://spaceflightnow.com/2022/08/21/three-mannequins-installed-on-orion-spacecraft-for-flight-around-the-moon/","imageUrl":"https://spaceflightnow.com/wp-content/uploads/2022/08/20220816campos.jpg","newsSite":"Spaceflight Now","summary":"Three instrumented mannequins strapped into seats on NASA’s Orion spacecraft awaiting liftoff on the first flight of the huge Space Launch System rocket will help engineers evaluate the human experience for future astronauts trips to the moon.","publishedAt":"2022-08-21T13:51:08.000Z","updatedAt":"2022-08-22T18:00:17.520Z","featured":false,"launches":[{"id":"65896761-b6ca-4df3-9699-e077a360c52a","provider":"Launch Library 2"}],"events":[]},{"id":16219,"title":"NASA asks industry for input on ISS deorbit capabilities","url":"https://spacenews.com/nasa-asks-industry-for-input-on-iss-deorbit-capabilities/","imageUrl":"https://spacenews.com/wp-content/uploads/2021/11/iss-nov2021.jpg","newsSite":"SpaceNews","summary":"NASA is requesting information from industry on its capabilities and interest in developing a spacecraft that would deorbit the International Space Station at the end of its life.","publishedAt":"2022-08-20T16:21:24.000Z","updatedAt":"2022-08-20T16:21:24.436Z","featured":false,"launches":[],"events":[]},{"id":16218,"title":"Data from ESA’s Gaia mission reveals our Sun’s future and past","url":"https://www.nasaspaceflight.com/2022/08/gaia-reveals-sun-evolution/","imageUrl":"https://www.nasaspaceflight.com/wp-content/uploads/2022/08/Gaia_mapping_the_stars_of_the_Milky_Way-1170x776.jpg","newsSite":"NASASpaceflight","summary":"On June 13, the third major data release from the European Space Agency’s (ESA) Gaia mission revealed details about the past and future of our solar system’s star, the Sun, by using data collected by Gaia on stars of similar mass and composition to our Sun.","publishedAt":"2022-08-20T15:35:35.000Z","updatedAt":"2022-08-29T13:52:08.002Z","featured":false,"launches":[{"id":"2044f8a1-4dad-4c8b-a3a9-5ecc7045c257","provider":"Launch Library 2"}],"events":[]},{"id":16217,"title":"Intelsat working to regain control of Galaxy 15 satellite","url":"https://spacenews.com/intelsat-working-to-regain-control-of-galaxy-15-satellite/","imageUrl":"https://spacenews.com/wp-content/uploads/2020/03/8515999093_b99f85eb8f_o.jpg","newsSite":"SpaceNews","summary":"Intelsat said Aug. 19 it has lost control of its Galaxy 15 broadcast satellite after it was likely hit by a geomagnetic storm.","publishedAt":"2022-08-19T22:41:19.000Z","updatedAt":"2022-08-21T06:52:48.161Z","featured":false,"launches":[{"id":"b14c4c90-71f1-422a-91dd-5a23280307b9","provider":"Launch Library 2"}],"events":[]},{"id":16216,"title":"Big plans for mini-launchers","url":"https://spacenews.com/big-plans-for-mini-launchers/","imageUrl":"https://spacenews.com/wp-content/uploads/2022/08/Firefly_Space_2022-Jul-04_1.jpeg","newsSite":"SpaceNews","summary":"Industry’s attention is shifting to a larger class of rockets, sometimes called ”mini-launchers” capable of placing about a metric ton into orbit.","publishedAt":"2022-08-19T21:51:19.000Z","updatedAt":"2022-08-19T21:51:19.913Z","featured":false,"launches":[],"events":[]},{"id":16215,"title":"NASA selects potential lunar landing sites for Artemis 3","url":"https://spacenews.com/nasa-selects-potential-lunar-landing-sites-for-artemis-3/","imageUrl":"https://spacenews.com/wp-content/uploads/2022/08/artemis3regions.jpg","newsSite":"SpaceNews","summary":"NASA has selected 13 regions around the south pole of the moon that it is considering for the first crewed landing of the Artemis program later this decade.","publishedAt":"2022-08-19T21:21:10.000Z","updatedAt":"2022-08-21T06:53:28.661Z","featured":false,"launches":[{"id":"8034d81b-af96-460c-a7b7-5c8e7f1a1d86","provider":"Launch Library 2"}],"events":[{"id":615,"provider":"Launch Library 2"}]}],
spaceFlightReports: [{"id":1169,"title":"ISS Daily Summary Report – 8/26/2022","url":"https://blogs.nasa.gov/stationreport/2022/08/26/iss-daily-summary-report-8-26-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"Payloads: AstroPi: The AstroPi photography checkout activity was continued with the removal of the 6 mm camera lens and the installation of the 12 mm camera lens. In this checkout, ground teams are assessing night-time photography capabilities of the AstroPi system with both lenses. Two augmented Raspberry Pi computers (called AstroPis) were flown to the …","publishedAt":"2022-08-26T13:41:00.000Z","updatedAt":"2022-08-29T13:41:57.208Z"},{"id":1168,"title":"ISS Daily Summary Report – 8/25/2022","url":"https://blogs.nasa.gov/stationreport/2022/08/25/iss-daily-summary-report-8-25-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"ISS Reboost: Today, the ISS performed a reboost using the Aft Progress 81P R&D thrusters. This reboost was the second of three reboosts to set up proper constraints for 68S 2-orbit rendezvous on September 21 and 67S landing on September 29. The burn duration was 5 minutes 33 seconds with a Delta-V of 0.68 m/s. …","publishedAt":"2022-08-25T13:51:00.000Z","updatedAt":"2022-08-26T13:51:43.018Z"},{"id":1167,"title":"ISS Daily Summary Report – 8/24/2022","url":"https://blogs.nasa.gov/stationreport/2022/08/24/iss-daily-summary-report-8-24-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"Payloads: Behavioral Core Measures (BCM): The crew performed several BCM research sessions consisting of a set of 12 runs/tests each. The Standardized Behavioral Measures for Detecting Behavioral Health Risks during Exploration Missions (Behavioral Core Measures) experiment initially examined a suite of measurements to reliably assess the risk of adverse cognitive or behavioral conditions and psychiatric …","publishedAt":"2022-08-24T13:41:00.000Z","updatedAt":"2022-08-25T13:41:55.966Z"},{"id":1166,"title":"ISS Daily Summary Report – 8/23/2022","url":"https://blogs.nasa.gov/stationreport/2022/08/23/iss-daily-summary-report-8-23-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"Payloads: AstroPi: The crew reviewed the big picture words for the AstroPi photography checkout activity. In this checkout, the ground teams will assess the night-time photography capabilities of the AstroPi system. Two augmented Raspberry Pi computers (called AstroPis) were flown to the ISS and are both equipped with the mighty Sense Hardware Attached on Top …","publishedAt":"2022-08-23T13:31:00.000Z","updatedAt":"2022-08-24T13:31:44.825Z"},{"id":1165,"title":"ISS Daily Summary Report – 8/22/2022","url":"https://blogs.nasa.gov/stationreport/2022/08/22/iss-daily-summary-report-8-22-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"Payloads: AstroPi: After reviewing the big picture words, the AstroPi Vis unit was moved to the Node 2 window and set up for night-time photography. Max360 imagery was also captured of both AstroPi units to help student teams develop frames of reference for use with the sensors on the AstroPi units. Two augmented Raspberry Pi …","publishedAt":"2022-08-22T20:01:00.000Z","updatedAt":"2022-08-23T20:01:55.441Z"},{"id":1163,"title":"ISS Daily Summary Report – 8/19/2022","url":"https://blogs.nasa.gov/stationreport/2022/08/19/iss-daily-summary-report-8-19-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"SpaceX-25 Undock and Return: Cargo Dragon SpaceX-25 (SpX-25) undocked from the ISS today at 10:00 AM CT to return cargo and payloads to the ground concluding the 33-day mission aboard the ISS. SpX-25 will complete departure phasing throughout the day, jettison the Trunk for destructive re-entry, deorbit, and then splash down off the coast of …","publishedAt":"2022-08-19T19:51:00.000Z","updatedAt":"2022-08-23T19:51:53.785Z"},{"id":1164,"title":"ISS Daily Summary Report – 8/18/2022","url":"https://blogs.nasa.gov/stationreport/2022/08/18/iss-daily-summary-report-8-18-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"SpaceX-25 Undock and Return: Due to unfavorable weather conditions at the landing site, Cargo Dragon SpaceX-25 (SpX-25) undock was delayed a day from the original departure date of August 18th. The next undock opportunity is tomorrow, August 19th, at 10:00 AM CT. The crew instead had a light duty day in preparation for undock slated …","publishedAt":"2022-08-18T19:51:00.000Z","updatedAt":"2022-08-23T19:51:53.786Z"},{"id":1161,"title":"ISS Daily Summary Report – 8/17/2022","url":"https://blogs.nasa.gov/stationreport/2022/08/17/iss-daily-summary-report-8-17-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"RS Extravehicular Activity (EVA) #54: Today, Oleg Artemyev (EV1) and Denis Matveev (EV2) performed RS EVA #54 with Sergey Korsakov supporting as the IV operator. Hatch opening occurred at 8:53 AM CT. The trio performed several tasks to configure and test the European Robotic Arm (ERA) for operations on the station’s Russian Segment; however, today’s …","publishedAt":"2022-08-17T14:11:00.000Z","updatedAt":"2022-08-18T14:11:56.680Z"},{"id":1162,"title":"ISS Daily Summary Report – 8/16/2022","url":"https://blogs.nasa.gov/stationreport/2022/08/16/iss-daily-summary-report-8-16-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"Payloads: Today, the crew performed payload activities to achieve mission objectives. At any given time on board the ISS, a large array of different experiments are underway within a wide range of disciplines. Systems: Emergency Russian ISS Very High Frequency (VHF-1) Communication Checkout from USOS: The Russian ISS VHF-1 Emergency Communication was checked out from the …","publishedAt":"2022-08-16T14:11:00.000Z","updatedAt":"2022-08-18T14:11:56.683Z"},{"id":1160,"title":"ISS Daily Summary Report – 8/15/2022","url":"https://blogs.nasa.gov/stationreport/2022/08/15/iss-daily-summary-report-8-15-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"Payloads: Dynamics of Microbiomes in Space (DynaMoS): Sample T1 was placed into the Minus Eighty Degree Laboratory Freezer for ISS (MELFI) facility. DynaMoS examines how microgravity affects metabolic interactions in communities of soil microbes. On Earth, communities of microorganisms carry out key functions in soil, including cycling carbon and other nutrients and supporting plant growth. …","publishedAt":"2022-08-15T14:02:00.000Z","updatedAt":"2022-08-18T14:02:00.830Z"},{"id":1159,"title":"ISS Daily Summary Report – 8/12/2022","url":"https://blogs.nasa.gov/stationreport/2022/08/12/iss-daily-summary-report-8-12-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"Payloads: Butterfly IQ USND: The crew set up the appropriate hardware and performed the fifth medical technology demonstration of the Butterfly Ultrasound Device. Butterfly IQ Ultrasound demonstrates the effectiveness of a portable ultrasound device used in conjunction with a mobile computing device in the space environment. Such commercial off-the-shelf technology could provide important medical capabilities …","publishedAt":"2022-08-12T14:42:00.000Z","updatedAt":"2022-08-15T14:42:12.980Z"},{"id":1158,"title":"ISS Daily Summary Report – 8/11/2022","url":"https://blogs.nasa.gov/stationreport/2022/08/11/iss-daily-summary-report-8-11-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"Payloads: Cold Atom Lab (CAL): The crew used a Grab Sample Container (GSC) to sample the air around the Cold Atom Lab location. The GSC will be returned to the ground for analysis of the sample. The CAL produces clouds of atoms chilled to about one ten billionth of a degree above absolute zero — …","publishedAt":"2022-08-11T14:05:00.000Z","updatedAt":"2022-08-12T14:05:48.663Z"},{"id":1157,"title":"ISS Daily Summary Report – 8/10/2022","url":"https://blogs.nasa.gov/stationreport/2022/08/10/iss-daily-summary-report-8-10-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"ISS Reboost: Today, the ISS performed a reboost using the Aft Progress 81P R&D thrusters. This reboost was the first of three reboosts to set up proper conditions for 68S 2-orbit rendezvous on September 21 and 67S landing on September 29. The burn duration was 2 minutes 45 seconds with a Delta-V of 0.3 m/s. …","publishedAt":"2022-08-10T14:56:00.000Z","updatedAt":"2022-08-11T14:56:04.392Z"},{"id":1156,"title":"ISS Daily Summary Report – 8/09/2022","url":"https://blogs.nasa.gov/stationreport/2022/08/09/iss-daily-summary-report-8-09-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"Payloads: Immunosenescence: The fourth BioCell media exchange was performed for the Immunosenescence experiment. The media is replaced periodically as the cells consume the nutrients in the media and waste products accumulate. Microgravity as a Model for Immunological Senescence and its Impact on Tissue Stem Cells and Regeneration (Immunosenescence) studies the effects of microgravity on cells …","publishedAt":"2022-08-09T18:26:00.000Z","updatedAt":"2022-08-10T18:26:05.163Z"},{"id":1155,"title":"ISS Daily Summary Report – 8/08/2022","url":"https://blogs.nasa.gov/stationreport/2022/08/08/iss-daily-summary-report-8-08-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"Payloads: Combustion Integrated Rack/Solid Fuel Ignition and Extinction (CIR/SoFIE): The crew gained access to the interior of the CIR rack, and replaced the CIR Fuel and Oxidizer Management Assembly (FOMA) Calibration Unit. The FOMA calibration is performed periodically to help verify accurate readings from the various measurement systems in the CIR. The CIR facility includes …","publishedAt":"2022-08-08T14:55:00.000Z","updatedAt":"2022-08-09T14:55:53.181Z"},{"id":1154,"title":"ISS Daily Summary Report – 8/05/2022","url":"https://blogs.nasa.gov/stationreport/2022/08/05/iss-daily-summary-report-8-05-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"Payloads: Cold Atom Lab (CAL): Following last week’s repair of the compression fittings in the Moderate Temperature (MTL) coolant line for CAL, a series of visual leak checks have followed and all been good (no leaks reported). The CAL produces clouds of atoms that are chilled to about one ten billionth of a degree above …","publishedAt":"2022-08-05T15:05:00.000Z","updatedAt":"2022-08-08T15:05:23.837Z"},{"id":1153,"title":"ISS Daily Summary Report – 8/04/2022","url":"https://blogs.nasa.gov/stationreport/2022/08/04/iss-daily-summary-report-8-04-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"Payloads: Cerebral Augmentation: The crew set up the appropriate hardware and participated in a Cerebral Autoregulation science session. As the body’s most important organ, the brain needs a strong and reliable blood supply, so the brain is capable of self-regulating blood flow even when the heart and blood vessels cannot maintain an ideal blood pressure. …","publishedAt":"2022-08-04T15:35:00.000Z","updatedAt":"2022-08-05T15:35:11.616Z"},{"id":1152,"title":"ISS Daily Summary Report – 8/03/2022","url":"https://blogs.nasa.gov/stationreport/2022/08/03/iss-daily-summary-report-8-03-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"Payloads: Astrobee-Zero Robotics: The crew assisted with the performance of the competition finals. In this experiment session, student teams compete by using the Astrobee robots to spell out 3-6 letter passwords for the crew. The password is needed for a fictional situation in which two astronauts need to enter a password to restart power systems. …","publishedAt":"2022-08-03T17:21:00.000Z","updatedAt":"2022-08-04T17:21:19.206Z"},{"id":1151,"title":"ISS Daily Summary Report – 8/02/2022","url":"https://blogs.nasa.gov/stationreport/2022/08/02/iss-daily-summary-report-8-02-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"Payloads: ESA Biofilms-2: Following the completion of the 14-day experiment session, the twenty-four Experiment Containers (ECs) were removed from the Kubik 5 and Kubik 6 facilities and packed for return to the ground. In the Kubik experiment Biofilms-2, three bacteria species (A. radioresistens, Staphylococcus sp. and C. metallidurans) are grown on metal surfaces in a …","publishedAt":"2022-08-02T17:11:00.000Z","updatedAt":"2022-08-04T17:11:19.091Z"},{"id":1150,"title":"ISS Daily Summary Report – 8/01/2022","url":"https://blogs.nasa.gov/stationreport/2022/08/01/iss-daily-summary-report-8-01-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"Payloads: Airborne Particulate Monitor (APM): Experiment data was transferred from the APM for subsequent downlink to the ground. Following this, the APM hardware was relocated from Node 3 to the US Lab. Air quality in crewed spacecraft is important for keeping astronauts healthy and comfortable. Although requirements exist for maximum allowable concentrations of particulate matter, …","publishedAt":"2022-08-01T14:12:00.000Z","updatedAt":"2022-08-02T14:12:06.066Z"},{"id":1149,"title":"ISS Daily Summary Report – 7/29/2022","url":"https://blogs.nasa.gov/stationreport/2022/07/29/iss-daily-summary-report-7-29-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"Payloads: Analyzing Interferometer for Ambient Air-2 (ANITA-2): Air samples were manually acquired from assigned ISS locations and the crew connected the samples to ANITA-2 for chemical analysis. The ANITA-2 is a compact gas analyzer which can analyze and quantify 33 trace contaminants in the atmosphere aboard the ISS automatically. ANITA-2 can also detect the presence …","publishedAt":"2022-07-29T17:02:00.000Z","updatedAt":"2022-08-01T17:02:05.142Z"},{"id":1148,"title":"ISS Daily Summary Report – 7/28/2022","url":"https://blogs.nasa.gov/stationreport/2022/07/28/iss-daily-summary-report-7-28-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"Payloads: Butterfly IQ Ultrasound: The fourth Medical Tech Demo of the Butterfly Ultrasound Device was performed. Butterfly IQ Ultrasound demonstrates the effectiveness of a portable ultrasound device used in conjunction with a mobile computing device in the space environment. Such commercial off-the-shelf technology could provide important medical capabilities for future exploration missions beyond low-Earth orbit. …","publishedAt":"2022-07-28T14:40:00.000Z","updatedAt":"2022-07-29T14:40:37.630Z"},{"id":1147,"title":"ISS Daily Summary Report – 7/27/2022","url":"https://blogs.nasa.gov/stationreport/2022/07/27/iss-daily-summary-report-7-27-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"Payloads: Actiwatch: Actiwatch Plus Kits S/N 1002 and 1004 were packed for return. The Actiwatch is a waterproof, non-intrusive, sleep-wake activity monitor worn on the wrist of a crewmember and contains a miniature uniaxial accelerometer that produces a signal as the subject moves. The data is stored in non-volatile memory within the Actiwatch until they …","publishedAt":"2022-07-27T14:30:00.000Z","updatedAt":"2022-07-29T14:30:56.172Z"},{"id":1146,"title":"ISS Daily Summary Report – 7/26/2022","url":"https://blogs.nasa.gov/stationreport/2022/07/26/iss-daily-summary-report-7-26-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"Payloads: Cold Atom Lab (CAL): Leaking compression fittings were tightened on the Cold Atom Lab MTL Jumper hoses and routine maintenance was performed on the Parker Quick Disconnect (QD) hardware. The CAL produces clouds of atoms that are chilled to about one ten billionth of a degree above absolute zero — much colder than the …","publishedAt":"2022-07-26T14:30:00.000Z","updatedAt":"2022-07-27T14:30:46.171Z"},{"id":1145,"title":"ISS Daily Summary Report – 7/25/2022","url":"https://blogs.nasa.gov/stationreport/2022/07/25/iss-daily-summary-report-7-25-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"Payloads: Fiber Optic Production-2 (FOP-2): FOP-2 operations are concluded, and the hardware was removed from the MSG and stowed. FOP-2 builds on previous work to manufacture commercial optical fibers in microgravity using a blend of elements called ZBLAN. Earlier theoretical and experimental studies suggest ZBLAN optical fibers produced in microgravity exhibit qualities superior to those …","publishedAt":"2022-07-25T16:11:00.000Z","updatedAt":"2022-07-26T16:11:02.847Z"},{"id":1144,"title":"ISS Daily Summary Report – 7/22/2022","url":"https://blogs.nasa.gov/stationreport/2022/07/22/iss-daily-summary-report-7-22-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"Payloads: Astrobee-Zero Robotics: Astrobee Free Flyers were prepared in the JEM and the crew assisted the ground team in conducting multiple test runs of autonomous robotic maneuvering in support of a student robotics competition dry run. For Astrobee-Zero Robotics, students write software to control one of the space station’s Astrobee free-flying robots. The first several …","publishedAt":"2022-07-22T14:50:00.000Z","updatedAt":"2022-07-25T14:50:40.201Z"},{"id":1143,"title":"ISS Daily Summary Report – 7/21/2022","url":"https://blogs.nasa.gov/stationreport/2022/07/21/iss-daily-summary-report-7-21-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"RS Extravehicular Activity (EVA) ESA: Today, Oleg Artemyev (EV1) and Samantha Cristoforetti (EV2) performed the RS EVA ESA. Hatch opening occurred at 9:50 AM CT. The duo performed several tasks to outfit the Nauka Multipurpose Laboratory Module (MLM) and to configure the European Robotic Arm (ERA) for operations on the station’s Russian Segment. The crew …","publishedAt":"2022-07-21T15:21:00.000Z","updatedAt":"2022-07-22T15:21:02.583Z"},{"id":1142,"title":"ISS Daily Summary Report – 7/20/2022","url":"https://blogs.nasa.gov/stationreport/2022/07/20/iss-daily-summary-report-7-20-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"Payloads: Advanced Nano Step: Sample Cartridges, specimen Cell4, and the Nano Step Circuit Box were installed into the Solution Crystallization Observation Facility (SCOF). The Temp Logger data was transferred to Payload Laptop Terminal 4 (PLT4). The Effects of Impurities on Perfection of Protein Crystals, Partition Functions, and Growth Mechanisms (Advanced Nano Step) experiment monitors and …","publishedAt":"2022-07-20T15:51:00.000Z","updatedAt":"2022-07-21T15:51:10.090Z"},{"id":1141,"title":"ISS Daily Summary Report – 7/19/2022","url":"https://blogs.nasa.gov/stationreport/2022/07/19/iss-daily-summary-report-7-19-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"Payloads: Fiber Optic Production-2 (FOP-2): FOP 2.0 hardware was installed into the Microgravity Science Glovebox (MSG) Work Volume. FOP-2 builds on previous work to manufacture commercial optical fibers in microgravity using a blend of elements called ZBLAN. Earlier theoretical and experimental studies suggest that ZBLAN optical fibers produced in microgravity exhibit qualities superior to those …","publishedAt":"2022-07-19T19:50:00.000Z","updatedAt":"2022-07-20T19:50:39.759Z"},{"id":1140,"title":"ISS Daily Summary Report – 7/18/2022","url":"https://blogs.nasa.gov/stationreport/2022/07/18/iss-daily-summary-report-7-18-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"SpaceX-25 (SpX-25) Docking: The SpaceX-25 Cargo Dragon spacecraft docked with the ISS on Saturday at 11:21 AM CT. Since its launch on Thursday evening, the spacecraft successfully performed a series of maneuvers and docked to the Node 2 (Harmony Module) forward docking port of the ISS. Payloads: European Physiology Module (EPM): EPM FCC troubleshooting was …","publishedAt":"2022-07-18T13:40:00.000Z","updatedAt":"2022-07-19T13:40:42.910Z"},{"id":1138,"title":"ISS Daily Summary Report – 7/15/2022","url":"https://blogs.nasa.gov/stationreport/2022/07/15/iss-daily-summary-report-7-15-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"SpaceX-25 (SpX-25) Launch: The SpaceX-25 Dragon spacecraft launched aboard a Falcon 9 rocket at 7:44 PM CT yesterday evening. The spacecraft is carrying more than 5,800 pounds of research, supplies, and hardware to the ISS. Following the successful launch, the Dragon spacecraft will prepare to rendezvous with the ISS on Saturday morning, July 16th. Payloads: …","publishedAt":"2022-07-15T14:10:00.000Z","updatedAt":"2022-07-18T14:10:35.853Z"},{"id":1139,"title":"ISS Daily Summary Report – 7/14/2022","url":"https://blogs.nasa.gov/stationreport/2022/07/14/iss-daily-summary-report-7-14-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"SpaceX-25 (SpX-25) Mission Preparation: Today, a subset of the USOS crew are limited duty in order to prepare for the upcoming SpX-25 mission, which will dock on Saturday and requires bulk cargo unloading on Sunday. SpX-25 is planned to launch tonight at 7:44 pm CT (GMT 196) and will resupply the station with consumables, system …","publishedAt":"2022-07-14T14:10:00.000Z","updatedAt":"2022-07-18T14:10:35.868Z"},{"id":1137,"title":"ISS Daily Summary Report – 7/13/2022","url":"https://blogs.nasa.gov/stationreport/2022/07/13/iss-daily-summary-report-7-13-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"Payloads: ISS Ham Radio: Two ISS Ham contacts were made with Il Cielo Itinerante c/o Agenzia Spaziale Italiana (ASI) Center for Space in Matera, Italy and Sayama group Saitama Council Scouts Association of Japan, Saitama, Japan. Since the earliest space station expeditions, ISS Ham Radio has allowed groups of students in schools, camps, museums, and …","publishedAt":"2022-07-13T13:48:00.000Z","updatedAt":"2022-07-14T13:48:58.450Z"},{"id":1136,"title":"ISS Daily Summary Report – 7/12/2022","url":"https://blogs.nasa.gov/stationreport/2022/07/12/iss-daily-summary-report-7-12-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"Payloads: Human Research Facility-1 (HRF-1): HRF Consumables Kit contents were transferred to the HRF-1 Supply Kit Purple and the HRF-1 Supply Kit Green. Crew photographed HRF Supply Kits and transferred photos to an SSC laptop for downlink. HRF-1 provides an on-orbit laboratory that enables scientists conducting human life science research to evaluate the physiological, behavioral, …","publishedAt":"2022-07-12T13:59:00.000Z","updatedAt":"2022-07-13T13:59:07.073Z"},{"id":1135,"title":"ISS Daily Summary Report – 7/11/2022","url":"https://blogs.nasa.gov/stationreport/2022/07/11/iss-daily-summary-report-7-11-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"Payloads: Astrobee-Zero Robotics: The US LAB module was cleared of stowage and the Astrobee flyers were prepped for Zero-Robotics remote mapping operations which was controlled by the ground. For Astrobee-Zero Robotics, students write software to control one of the space station’s Astrobee free-flying robots. The first several rounds of the competition, co-led by the Massachusetts …","publishedAt":"2022-07-11T13:28:00.000Z","updatedAt":"2022-07-12T13:28:40.354Z"},{"id":1134,"title":"ISS Daily Summary Report – 7/08/2022","url":"https://blogs.nasa.gov/stationreport/2022/07/08/iss-daily-summary-report-7-08-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"Payloads: Acoustic Diagnostics: The Acoustic Diagnostic instrument hardware was set up and calibrated, and measurements were recorded.  Following this, a questionnaire was filled out on the EveryWear device. The Acoustic Upgraded Diagnostics In-Orbit (Acoustic Diagnostics) investigation tests the hearing of ISS crew members before, during, and after flight. This study assesses the possible adverse effects …","publishedAt":"2022-07-08T14:05:00.000Z","updatedAt":"2022-07-11T14:05:44.313Z"},{"id":1133,"title":"ISS Daily Summary Report – 7/07/2022","url":"https://blogs.nasa.gov/stationreport/2022/07/07/iss-daily-summary-report-7-07-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"Payloads: Grip: The crew performed the third and final day of the experiment session, transferred the data, and stowed the experiment hardware. The Grip experiment studies the long-duration spaceflight effects on the abilities of human subjects to regulate grip force and upper limbs trajectories when manipulating objects during different kinds of movements: oscillatory movements, rapid …","publishedAt":"2022-07-07T13:25:00.000Z","updatedAt":"2022-07-08T13:25:52.789Z"},{"id":1132,"title":"ISS Daily Summary Report – 7/06/2022","url":"https://blogs.nasa.gov/stationreport/2022/07/06/iss-daily-summary-report-7-06-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"Payloads: Airborne Particulate Monitor (APM): Science data from the APM memory card was transferred to a Station Support Computer (SSC) for subsequent downlink, and the display status was reported to the ground. Air quality in crewed spacecraft is important for keeping astronauts healthy and comfortable. Although requirements exist for maximum allowable concentrations of particulate matter, …","publishedAt":"2022-07-06T19:15:00.000Z","updatedAt":"2022-07-07T19:15:45.287Z"},{"id":1131,"title":"ISS Daily Summary Report – 7/05/2022","url":"https://blogs.nasa.gov/stationreport/2022/07/05/iss-daily-summary-report-7-05-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"NRAL Trash Deploy: On Saturday, the Flight Control Team performed the first trash deploy utilizing the Nanoracks Airlock (NRAL). The deploy demonstrated the trash deployment capability by executing the jettison of a disposable bag containing approximately 26.5 CTBE (78.1 kg) of dry common trash. The Space Station Remote Manipulator System (SSRMS) grappled NRAL and demated …","publishedAt":"2022-07-05T16:35:00.000Z","updatedAt":"2022-07-06T16:35:14.139Z"},{"id":1098,"title":"ISS Daily Summary Report – 7/01/2022","url":"https://blogs.nasa.gov/stationreport/2022/07/01/iss-daily-summary-report-7-01-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"Payloads: Behavioral Core Measures (BCM): The crew performed a BCM research session consisting of a set of 12 runs/tests. The Standardized Behavioral Measures for Detecting Behavioral Health Risks during Exploration Missions (Behavioral Core Measures) experiment initially examined a suite of measurements to reliably assess the risk of adverse cognitive or behavioral conditions and psychiatric disorders …","publishedAt":"2022-07-01T13:44:00.000Z","updatedAt":"2022-07-05T13:44:37.332Z"},{"id":1097,"title":"ISS Daily Summary Report – 6/30/2022","url":"https://blogs.nasa.gov/stationreport/2022/06/30/iss-daily-summary-report-6-30-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"Payloads: Actiwatch: The actiwatches were doffed, connected to a USB hub for charging and data management, and then returned to the appropriate crewmembers for donning. The Actiwatch is a waterproof, non-intrusive, sleep-wake activity monitor worn on the wrist of a crewmember and contains a miniature uniaxial accelerometer that produces a signal as the subject moves. …","publishedAt":"2022-06-30T17:21:00.000Z","updatedAt":"2022-07-01T17:21:39.685Z"},{"id":1096,"title":"ISS Daily Summary Report – 6/29/2022","url":"https://blogs.nasa.gov/stationreport/2022/06/29/iss-daily-summary-report-6-29-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"Payloads: Autonomous Medical Officer Support (AMOS): The crew set up the appropriate hardware, logged into the AMOS application, and performed several ultrasound science scans. As missions venture farther from Earth, astronauts need the capability to diagnose and treat acute medical conditions without ground support. The AMOS Software Demonstration, for which data collection is now complete, …","publishedAt":"2022-06-29T14:11:00.000Z","updatedAt":"2022-06-30T14:11:36.592Z"},{"id":1095,"title":"ISS Daily Summary Report – 6/28/2022","url":"https://blogs.nasa.gov/stationreport/2022/06/28/iss-daily-summary-report-6-28-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"Northrup Grumman 17 (NG-17) Cygnus Departure: Today, Cygnus was unberthed from the Node 1 Nadir Common Berthing Mechanism (CBM) using the Space Station Remote Manipulator System (SSRMS), then maneuvered to the release position, and released for departure at 6:06 AM CT. Cygnus, filled with waste/trash from the space station packed by the crew, is scheduled …","publishedAt":"2022-06-28T15:01:00.000Z","updatedAt":"2022-06-29T15:01:37.514Z"},{"id":1094,"title":"ISS Daily Summary Report – 6/27/2022","url":"https://blogs.nasa.gov/stationreport/2022/06/27/iss-daily-summary-report-6-27-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"Northrup Grumman 17 (NG-17) Cygnus Reboost: On Saturday June 25th, the ISS successfully performed a reboost using Cygnus Delta Velocity (∆V) Engine (DVE) starting at 17:27 GMT with a posigrade burn duration of 5 min and 1 sec resulting in a ∆V of 0.3 m/s and a delta altitude (∆H) of 0.54 km. The Cygnus …","publishedAt":"2022-06-27T13:11:00.000Z","updatedAt":"2022-06-28T13:11:41.209Z"},{"id":1093,"title":"ISS Daily Summary Report – 6/24/2022","url":"https://blogs.nasa.gov/stationreport/2022/06/24/iss-daily-summary-report-6-24-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"Payloads: Cell Biology Experiment Facility (CBEF-L): The CBEF Vent Fan Cable Checkout was completed. CBEF-L is a JAXA new subrack facility, which is an upgraded facility of the original CBEF currently aboard the ISS.  CBEF-L provides new capabilities with additional new resources such as Full High Definition video interface, Ethernet, 24 VDC power supply, and …","publishedAt":"2022-06-24T16:01:00.000Z","updatedAt":"2022-06-27T16:01:48.832Z"},{"id":1092,"title":"ISS Daily Summary Report – 6/23/2022","url":"https://blogs.nasa.gov/stationreport/2022/06/23/iss-daily-summary-report-6-23-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"Payloads: BioLab: The Biological Experiment Laboratory in Columbus (Biolab) centrifuge rotor A and B belts were replaced, and reference Experiment Containers (ECs) were installed into the Biolab facility. The rotor belt replacement is a periodic maintenance activity. The multiuser research facility is used to perform space biology experiments on microorganisms, cells, tissue cultures, small plants, …","publishedAt":"2022-06-23T13:52:00.000Z","updatedAt":"2022-06-24T13:52:18.835Z"},{"id":1091,"title":"ISS Daily Summary Report – 6/22/2022","url":"https://blogs.nasa.gov/stationreport/2022/06/22/iss-daily-summary-report-6-22-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"European Robotic Arm (ERA) Operations: Today, by successfully grappling to base point 3, the ERA Mission 2 was completed. ERA Mission 2 was intended to be completed during RS Extravehicular Activity (EVA) # 53 which occurred in April; however, ERA was unable to complete the grapple to base point 3. In this position, ERA is …","publishedAt":"2022-06-22T16:43:00.000Z","updatedAt":"2022-06-23T16:43:15.195Z"},{"id":1090,"title":"ISS Daily Summary Report – 6/21/2022","url":"https://blogs.nasa.gov/stationreport/2022/06/21/iss-daily-summary-report-6-21-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"European Robotic Arm (ERA) Operations: Today by adjusting and moving the angle of the ERA arms, ERA checkout and telemetry operations were completed successfully. ERA is located on MLM and is the intended to be the primary equipment for servicing the electromechanical systems on the Russian Segment once it completes commissioning. Payloads: EXpedite the PRocessing of Experiments …","publishedAt":"2022-06-21T14:33:00.000Z","updatedAt":"2022-06-22T14:33:09.131Z"},{"id":1088,"title":"ISS Daily Summary Report – 6/17/2022","url":"https://blogs.nasa.gov/stationreport/2022/06/17/iss-daily-summary-report-6-17-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"Payloads: Crew Earth Observations (CEO): The Crew utilized the Window Observational Research Facility (WORF) window to perform CEO Operations. CEO utilizes crewmembers on the ISS to photograph the Earth using digital handheld cameras from their unique point of view located over 250 miles above the surface. Photographs record how the planet is changing over time, …","publishedAt":"2022-06-17T13:43:00.000Z","updatedAt":"2022-06-21T13:43:21.928Z"},{"id":1089,"title":"ISS Daily Summary Report – 6/16/2022","url":"https://blogs.nasa.gov/stationreport/2022/06/16/iss-daily-summary-report-6-16-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"Predetermined Debris Avoidance Maneuver (PDAM): The ISS performed a PDAM at 2:03 PM CT to avoid a possible conjunction. The ISS used MLM roll control and 81 Progress (81P) thrusters completed 0.5 m/s DV posigrade PDAM to clear debris. Cygnus reboost is planned for Saturday, June 18, however the posigrade PDAM will reduce the Cygnus reboost …","publishedAt":"2022-06-16T13:43:00.000Z","updatedAt":"2022-06-21T13:43:21.937Z"},{"id":1087,"title":"ISS Daily Summary Report – 6/15/2022","url":"https://blogs.nasa.gov/stationreport/2022/06/15/iss-daily-summary-report-6-15-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"Payloads: Actiwatch: Eight Actiwatches were setup on Human Resource Facility 2 (HRF2) rack for battery charge and data downlinks. The Actiwatch is a waterproof, non-intrusive, sleep-wake activity monitor worn on the wrist of a crewmember and contains a miniature uniaxial accelerometer that produces a signal as the subject moves. The data is stored in non-volatile …","publishedAt":"2022-06-15T16:03:00.000Z","updatedAt":"2022-06-16T16:03:12.161Z"},{"id":1086,"title":"ISS Daily Summary Report – 6/14/2022","url":"https://blogs.nasa.gov/stationreport/2022/06/14/iss-daily-summary-report-6-14-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"Payloads: BioLab: A health check was performed on the Biolab Glovebox. The Biological Experiment Laboratory in Columbus (BioLab) is a multiuser research facility located in the European Columbus laboratory. The facility is used to perform space biology experiments on microorganisms, cells, tissue cultures, small plants, and small invertebrates. BioLab allows scientists to gain a better …","publishedAt":"2022-06-14T14:43:00.000Z","updatedAt":"2022-06-15T14:43:32.099Z"},{"id":1085,"title":"ISS Daily Summary Report – 6/10/2022","url":"https://blogs.nasa.gov/stationreport/2022/06/10/iss-daily-summary-report-6-10-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"Payloads: Astrobee/Smartphone Video Guidance Sensor (SVGS): Following the installation of the SVGS LED targets, an SVGS science session was performed. SVGS demonstrates the use of a photogrammetric vision-based technology for guidance, navigation, and control of a small spacecraft. Developed by NASA, the vision-based sensor computes the position and orientation vector of a target relative to …","publishedAt":"2022-06-10T17:22:00.000Z","updatedAt":"2022-06-13T17:22:59.802Z"},{"id":1084,"title":"ISS Daily Summary Report – 6/09/2022","url":"https://blogs.nasa.gov/stationreport/2022/06/09/iss-daily-summary-report-6-09-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"Payloads: Astrorad Vest: The AstroRad Vest was worn overnight, doffed, and a questionnaire filled out to give feedback on the session. Comfort and Human Factors AstroRad Radiation Garment Evaluation (CHARGE) tests a special vest designed to protect astronauts from radiation caused by unpredictable Solar Particle Events (SPEs). Astronauts provide input on the garment as they …","publishedAt":"2022-06-09T13:35:00.000Z","updatedAt":"2022-06-10T13:35:00.540Z"},{"id":1083,"title":"ISS Daily Summary Report – 6/08/2022","url":"https://blogs.nasa.gov/stationreport/2022/06/08/iss-daily-summary-report-6-08-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"Payloads: Astrobee: The JEM was prepared for the Integrated System for Autonomous and Adaptive Caretaking (ISAAC 9) crew-minimal activity later in the week. In this activity, JPM lighting was adjusted as appropriate, the Astrobee dock was power-cycled, Astrobee free-fliers were powered on, and software was updated. Astrobee is made up of three free-flying, cube-shaped robots …","publishedAt":"2022-06-08T17:34:00.000Z","updatedAt":"2022-06-09T17:34:57.630Z"},{"id":1082,"title":"ISS Daily Summary Report – 6/07/2022","url":"https://blogs.nasa.gov/stationreport/2022/06/07/iss-daily-summary-report-6-07-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"Payloads: AstroPi: Following the completion of the European AstroPi Challenge ‘Mission Zero’, the AstroPi Vis unit was returned to its default configuration and position. Two augmented Raspberry Pi computers (called AstroPis) were flown to the ISS and are both equipped with the mighty Sense Hardware Attached on Top (HAT) that measures the environment inside the …","publishedAt":"2022-06-07T20:04:00.000Z","updatedAt":"2022-06-08T20:04:59.539Z"},{"id":1081,"title":"ISS Daily Summary Report – 6/06/2022","url":"https://blogs.nasa.gov/stationreport/2022/06/06/iss-daily-summary-report-6-06-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"Payloads: Astrorad: The crew gathered the appropriate items and prepared for the upcoming science activities.  Comfort and Human Factors AstroRad Radiation Garment Evaluation (CHARGE) tests a special vest designed to protect astronauts from radiation caused by unpredictable Solar Particle Events (SPEs). Astronauts provide input on the garment as they wear it while performing daily tasks, …","publishedAt":"2022-06-06T14:24:00.000Z","updatedAt":"2022-06-07T14:24:03.971Z"},{"id":1080,"title":"ISS Daily Summary Report – 6/03/2022","url":"https://blogs.nasa.gov/stationreport/2022/06/03/iss-daily-summary-report-6-03-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"81 Progress (81P) Launch and Dock: Today at 4:32 AM CT, 81P launched from the Baikonur Cosmodrome carrying food, fuel, and supplies to the ISS. The spacecraft performed a two-orbit rendezvous to the ISS, and completed automated docking to the SM Aft port at 8:02 AM CT. Payloads: AstroPi: A video was recorded showing the …","publishedAt":"2022-06-03T18:04:00.000Z","updatedAt":"2022-06-06T18:04:02.662Z"},{"id":1079,"title":"ISS Daily Summary Report – 6/01/2022","url":"https://blogs.nasa.gov/stationreport/2022/06/01/iss-daily-summary-report-6-01-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"Progress 79P Undocking: Today, the Russian Cargo Vehicle Progress 79P, which provided cargo and propellent to the ISS, undocked from the Service Module Aft port at 3:08 AM CT. Following departure from the ISS the vehicle’s thrusters fired to maneuver 79P into a deorbit trajectory to send it into the Earth’s atmosphere where it burned …","publishedAt":"2022-06-01T13:44:00.000Z","updatedAt":"2022-06-02T13:44:04.019Z"},{"id":1078,"title":"ISS Daily Summary Report – 5/31/2022","url":"https://blogs.nasa.gov/stationreport/2022/05/31/iss-daily-summary-report-5-31-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"Payloads: Behavioral Core Measures (BCM): The crew performed two BCM research sessions consisting of a set of 12 runs/tests each. The Standardized Behavioral Measures for Detecting Behavioral Health Risks during Exploration Missions (BCM) experiment initially examined a suite of measurements to reliably assess the risk of adverse cognitive effects, behavioral conditions, or psychiatric disorders during …","publishedAt":"2022-05-31T13:54:00.000Z","updatedAt":"2022-06-01T13:54:08.380Z"},{"id":1077,"title":"ISS Daily Summary Report – 5/27/2022","url":"https://blogs.nasa.gov/stationreport/2022/05/27/iss-daily-summary-report-5-27-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"Payloads: Astrobee: The crew positioned the Astrobee Free Flyer (Bumble) in the JEM, and assisted the ground team in conducting multiple test runs of autonomous robotic maneuvering in support of a future student robotics competition. Astrobee is made up of three free-flying, cube-shaped robots which are designed to help scientists and engineers develop and test …","publishedAt":"2022-05-27T15:14:00.000Z","updatedAt":"2022-05-31T15:14:16.676Z"},{"id":1075,"title":"ISS Daily Summary Report – 5/26/2022","url":"https://blogs.nasa.gov/stationreport/2022/05/26/iss-daily-summary-report-5-26-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"Payloads: Acoustic Diagnostics: The Acoustic Diagnostics measurements were performed. The Acoustic Upgraded Diagnostics In-Orbit (AUDIO) investigation tests the hearing of ISS crew members before, during, and after flight. This study assesses the possible adverse effects of noise and the microgravity environment aboard the ISS on human hearing. The investigation compares the relationship between the detection …","publishedAt":"2022-05-26T13:24:00.000Z","updatedAt":"2022-05-27T13:24:10.115Z"},{"id":1076,"title":"ISS Daily Summary Report – 5/25/2022","url":"https://blogs.nasa.gov/stationreport/2022/05/25/iss-daily-summary-report-5-25-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"Boeing Orbital Flight Test 2 (OFT-2) Crew Space Transportation (CST-100) Undocking Activities: The CST-100 undocked from the ISS today at 1:36 PM CT to complete the orbital test mission and to return cargo and payloads to the ground concluding the 6-day mission on the ISS. The CST-100 will land in White Sands Space Harbor (WSSH), …","publishedAt":"2022-05-25T13:24:00.000Z","updatedAt":"2022-05-27T13:24:10.119Z"},{"id":1042,"title":"ISS Daily Summary Report – 5/24/2022","url":"https://blogs.nasa.gov/stationreport/2022/05/24/iss-daily-summary-report-5-24-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"Payloads: Cell Biology Experiment Facility (CBEF-L): The CBEF-L Motor Power Cable connections were swapped with the CBEF-L Motor Signal Cable connections in order to narrow down the turn table issue in the CBEF-L Incubator Unit. CBEF-L is a Japan Aerospace Exploration Agency (JAXA) new subrack facility, which is an upgraded facility of the original CBEF …","publishedAt":"2022-05-24T13:53:00.000Z","updatedAt":"2022-05-25T13:53:45.677Z"},{"id":1043,"title":"ISS Daily Summary Report – 5/23/2022","url":"https://blogs.nasa.gov/stationreport/2022/05/23/iss-daily-summary-report-5-23-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"Payloads: AstroPi: The aperture of the AstroPi Vis 5mm Camera Lens was adjusted for night-time photography.  Two augmented Raspberry Pi computers (called AstroPis) were flown to the ISS and are both equipped with the mighty Sense Hardware Attached on Top (HAT) that measures the environment inside the ISS, detects how the station moves through space, …","publishedAt":"2022-05-23T13:53:00.000Z","updatedAt":"2022-05-25T13:53:45.679Z"},{"id":1040,"title":"ISS Daily Summary Report – 5/21/2022","url":"https://blogs.nasa.gov/stationreport/2022/05/21/iss-daily-summary-report-5-21-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"Boeing Orbital Flight Test 2 (Boe-OFT2) Ingress: Docking of the Boeing Crew Space Transportation (CST)-100 Starliner spacecraft was successfully completed yesterday evening, Friday, May 20th, at 7:28 p.m. CT. This morning, the crew opened the hatch at 11:04 a.m. CT. The crew performed initial vehicle leak checks, pressurized the vestibule from ISS, ingressed, and configured …","publishedAt":"2022-05-21T13:07:00.000Z","updatedAt":"2022-05-23T13:07:25.903Z"},{"id":1041,"title":"ISS Daily Summary Report – 5/20/2022","url":"https://blogs.nasa.gov/stationreport/2022/05/20/iss-daily-summary-report-5-20-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"Boeing Orbital Flight Test 2 (Boe-OFT2) Launch: On Thursday evening, the Boeing Crew Space Transportation (CST)-100 Starliner spacecraft and United Launch Alliance Atlas V rocket launched at 5:54 p.m. CT to the ISS from Space launch Complex-41 at Cape Canaveral Space Force Station in Florida. This uncrewed Boe-OFT2 mission is the second uncrewed test flight …","publishedAt":"2022-05-20T13:07:00.000Z","updatedAt":"2022-05-23T13:07:25.905Z"},{"id":1039,"title":"ISS Daily Summary Report – 5/19/2022","url":"https://blogs.nasa.gov/stationreport/2022/05/19/iss-daily-summary-report-5-19-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"Payloads: ANITA-2: Air samples were manually taken from assigned ISS locations and entered into ANITA-2 for chemical analysis. The Analyzing Interferometer for Ambient Air-2 (ANITA-2) is a compact gas analyzer which can analyze and quantify 33 trace contaminants in the atmosphere aboard the ISS automatically. ANITA-2 can also detect the presence of unknown substances which …","publishedAt":"2022-05-19T13:57:00.000Z","updatedAt":"2022-05-20T13:57:16.250Z"},{"id":1037,"title":"ISS Daily Summary Report – 5/18/2022","url":"https://blogs.nasa.gov/stationreport/2022/05/18/iss-daily-summary-report-5-18-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"Payloads: Acoustic Diagnostics: Acoustic Diagnostics Instrument hardware was deinstalled and stowed. The Acoustic Upgraded Diagnostics In-Orbit (Acoustic Diagnostics) investigation tests the hearing of ISS crew members before, during, and after flight. This study assesses the possible adverse effects of noise and the microgravity environment aboard the ISS on human hearing. The investigation compares the relationship …","publishedAt":"2022-05-18T17:54:00.000Z","updatedAt":"2022-05-19T17:54:51.643Z"},{"id":1038,"title":"ISS Daily Summary Report – 5/17/2022","url":"https://blogs.nasa.gov/stationreport/2022/05/17/iss-daily-summary-report-5-17-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"Crew-Observed Noise: This afternoon, the crew reported hearing a sound in the IDA Forward PMA2 area. The sound was compared to previous sounds reported in AR 9920, which is related to thermal gradients caused by high Beta periods and the Dragon Nose Cone shadowing on PMA2. The crew reviewed the recording from previous instances and …","publishedAt":"2022-05-17T17:54:00.000Z","updatedAt":"2022-05-19T17:54:51.665Z"},{"id":1036,"title":"ISS Daily Summary Report – 5/16/2022","url":"https://blogs.nasa.gov/stationreport/2022/05/16/iss-daily-summary-report-5-16-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"ISS Reboost: On Saturday, the ISS performed a reboost using the aft Progress 79P R&D thrusters. The purpose of the reboost was to set up phasing conditions for the 81P 2-orbit rendezvous on June 3 (GMT 154). The burn duration was 11 minutes 25 seconds with a Delta-V of 1.1 m/s.  Waste and Hygiene Compartment …","publishedAt":"2022-05-16T14:04:00.000Z","updatedAt":"2022-05-17T14:04:07.185Z"},{"id":1035,"title":"ISS Daily Summary Report – 5/13/2022","url":"https://blogs.nasa.gov/stationreport/2022/05/13/iss-daily-summary-report-5-13-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"Payloads: Astrobee/Integrated System for Autonomous and Adaptive Caretaking (ISAAC)-SoundSee:  An Astrobee session was performed using navigation capabilities of the ISAAC investigation and the sound monitoring capabilities of the SoundSee investigation.  ISAAC is a research project to develop technology for autonomous caretaking of human exploration vehicles, especially during extended periods when astronauts are away.  Investigation of …","publishedAt":"2022-05-13T15:04:00.000Z","updatedAt":"2022-05-16T15:04:08.577Z"},{"id":1034,"title":"ISS Daily Summary Report – 5/12/2022","url":"https://blogs.nasa.gov/stationreport/2022/05/12/iss-daily-summary-report-5-12-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"Payloads: Acoustic Diagnostics:  The Acoustic Diagnostic hardware was setup, calibrated and measurements were recorded.  Following this, a questionnaire was filled out on the EveryWear device.  Due to time constraints, the final part of the session will be deferred to tomorrow.  The Acoustic Upgraded Diagnostics In-Orbit (Acoustic Diagnostics) investigation tests the hearing of ISS crew members …","publishedAt":"2022-05-12T13:23:00.000Z","updatedAt":"2022-05-13T13:23:52.448Z"},{"id":1033,"title":"ISS Daily Summary Report – 5/11/2022","url":"https://blogs.nasa.gov/stationreport/2022/05/11/iss-daily-summary-report-5-11-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"Payloads: Cerebral Autoregulation (CA): The crew attached the electrocardiogram (ECG) leads, set up other experiment hardware, and performed a CA science session. As the body’s most important organ, the brain needs a strong and reliable blood supply, so the brain is capable of self-regulating blood flow even when the heart and blood vessels cannot maintain …","publishedAt":"2022-05-11T13:14:00.000Z","updatedAt":"2022-05-13T13:14:07.476Z"},{"id":1032,"title":"ISS Daily Summary Report – 5/10/2022","url":"https://blogs.nasa.gov/stationreport/2022/05/10/iss-daily-summary-report-5-10-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"Payloads: Behavioral Core Measures (BCM): The crew performed a BCM research session consisting of a set of 12 tests. The Standardized Behavioral Measures for Detecting Behavioral Health Risks during Exploration Missions (BCM) experiment initially examined a suite of measurements to reliably assess the risk of adverse cognitive or behavioral conditions and psychiatric disorders during long-duration …","publishedAt":"2022-05-10T21:23:00.000Z","updatedAt":"2022-05-11T21:23:57.321Z"},{"id":1031,"title":"ISS Daily Summary Report – 5/06/2022","url":"https://blogs.nasa.gov/stationreport/2022/05/06/iss-daily-summary-report-5-06-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"Payloads: eXposed Root On-Orbit Test System (XROOTS): The crew continued the inspections and water-management troubleshooting of the XROOTS experiment hardware with a goal of determining if the system is able to support its plant growth modules. The XROOTS investigation uses hydroponic and aeroponic techniques to grow plants without soil or other growth media. Video and …","publishedAt":"2022-05-06T14:53:00.000Z","updatedAt":"2022-05-09T14:53:48.815Z"},{"id":1030,"title":"ISS Daily Summary Report – 5/05/2022","url":"https://blogs.nasa.gov/stationreport/2022/05/05/iss-daily-summary-report-5-05-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"Crew-3 Endurance Departure: The Crew-3 Endurance spacecraft departed ISS with its crew of four crewmembers on May 5 at 12:20 am CT. CDR Raja Chari, PLT Tom Marshburn, MS1 Matthias Maurer and MS2 Kayla Barron are scheduled to splash down near Tampa, Florida on May 5 at 23:43 CST. This concludes a 175 day flight …","publishedAt":"2022-05-05T13:54:00.000Z","updatedAt":"2022-05-06T13:54:09.072Z"},{"id":1029,"title":"ISS Daily Summary Report – 5/04/2022","url":"https://blogs.nasa.gov/stationreport/2022/05/04/iss-daily-summary-report-5-04-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"Payloads: Myotones: The crew performed skin marking on the designated experiment target areas and took measurements using the Myotones device. The Muscle Tone in Space (Myotones) investigation observes the biochemical properties of muscles (e.g. muscle tone, stiffness, elasticity) during long-term exposure spaceflight environment. Results from this investigation can provide a better understanding of the principles …","publishedAt":"2022-05-04T18:43:00.000Z","updatedAt":"2022-05-05T18:43:21.647Z"},{"id":1028,"title":"ISS Daily Summary Report – 5/03/2022","url":"https://blogs.nasa.gov/stationreport/2022/05/03/iss-daily-summary-report-5-03-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"Payloads: Behavioral Core Measures (BCM): The crew performed two BCM research sessions consisting of a set of 12 runs/tests each.  The Standardized Behavioral Measures for Detecting Behavioral Health Risks during Exploration Missions (Behavioral Core Measures) experiment initially examined a suite of measurements to reliably assess the risk of adverse cognitive or behavioral conditions and psychiatric disorders …","publishedAt":"2022-05-03T15:34:00.000Z","updatedAt":"2022-05-04T15:34:23.400Z"},{"id":1027,"title":"ISS Daily Summary Report – 5/02/2022","url":"https://blogs.nasa.gov/stationreport/2022/05/02/iss-daily-summary-report-5-02-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"Payloads: Cold Atom Lab (CAL): A crewmember performed a visual inspection of the CAL Moderate Temperature Loop (MTL) Jumper to check for leaks and reported the observed leakage. The MTL Jumper has been experiencing a small leak and periodic crew monitoring has been implemented while the ground assesses future remediation options. The CAL produces clouds …","publishedAt":"2022-05-02T15:43:00.000Z","updatedAt":"2022-05-03T15:43:19.938Z"},{"id":1025,"title":"ISS Daily Summary Report – 4/29/2022","url":"https://blogs.nasa.gov/stationreport/2022/04/29/iss-daily-summary-report-4-29-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"Payloads: AstroPi/Calliope: The crew transferred the AstroPi Infrared (IR) with attached Calliope Mini to the Columbus module, removed the Calliope hardware, and then transferred AstroPi Visible (Vis) to Node 2. The crew then performed a lens adjustment on AstroPi Vis. Two augmented Raspberry Pi computers (called AstroPis) were flown to the ISS and are both …","publishedAt":"2022-04-29T13:24:00.000Z","updatedAt":"2022-05-02T13:24:39.225Z"},{"id":1026,"title":"ISS Daily Summary Report – 4/28/2022","url":"https://blogs.nasa.gov/stationreport/2022/04/28/iss-daily-summary-report-4-28-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"Crew-4 Dock: SpaceX Crew Dragon Freedom successfully docked to the ISS at 6:37 PM CT on Wednesday, April 27th. The Endurance crew welcomed aboard NASA astronauts Kjell Lindgren, Bob Hines, and Jessica Watkins and ESA astronaut Samantha Cristoforetti. After participating in a live welcome ceremony with the ISS crew, the Crew-4 crew successfully completed the …","publishedAt":"2022-04-28T13:24:00.000Z","updatedAt":"2022-05-02T13:24:39.219Z"},{"id":1024,"title":"ISS Daily Summary Report – 4/27/2022","url":"https://blogs.nasa.gov/stationreport/2022/04/27/iss-daily-summary-report-4-27-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"Crew-4 Launch: At 2:52 AM CT today, SpaceX Crew Dragon Freedom lifted off from Launch Complex-39A at Kennedy Space Center on a Falcon 9 rocket and is scheduled to dock to the ISS tonight at 6:30 PM CT. Crew Dragon Freedom carries NASA astronauts Kjell Lindgren, Bob Hines, and Jessica Watkins and ESA astronaut Samantha …","publishedAt":"2022-04-27T14:25:00.000Z","updatedAt":"2022-04-28T14:25:13.376Z"},{"id":1023,"title":"ISS Daily Summary Report – 4/26/2022","url":"https://blogs.nasa.gov/stationreport/2022/04/26/iss-daily-summary-report-4-26-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"Payloads: Dose Distribution Inside the ISS – 3D (DOSIS-3D): DOSIS passive detector packs (PDPs) were uninstalled from both the USOS and RS. ISS crewmembers are continually exposed to varying levels of radiation which can be harmful to their health. DOSIS-3D uses several active and passive detectors to determine the radiation doses inside the ISS. The …","publishedAt":"2022-04-26T15:34:00.000Z","updatedAt":"2022-04-27T15:34:43.225Z"},{"id":1022,"title":"ISS Daily Summary Report – 4/25/2022","url":"https://blogs.nasa.gov/stationreport/2022/04/25/iss-daily-summary-report-4-25-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"Axiom-1 (Ax-1) Private Astronaut Mission (PAM) Undock and Landing: SpaceX Crew Dragon Endeavour undocked from the ISS on Sunday, April 24th at 8:10 PM CT to return private astronauts Michael Lopez-Alegria, Larry Connor, Mark Pathy, and Eytan Stibbe following a successful 15 day docked mission. The vehicle splashed down near Jacksonville, Florida at 12:06 PM …","publishedAt":"2022-04-25T13:44:00.000Z","updatedAt":"2022-04-26T13:44:32.403Z"},{"id":1020,"title":"ISS Daily Summary Report – 4/22/2022","url":"https://blogs.nasa.gov/stationreport/2022/04/22/iss-daily-summary-report-4-22-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"Private Astronaut Mission (PAM) Axiom-1 (Ax-1):Ax-1 Final Activities and Undock Preparations: The Ax-1 crew performed cargo packing, TheraBand exercise, final payload operations, and imagery activities on their last full planned day on ISS. Undock is targeted for Saturday, April 23rd at 17:30 CT (22:30 GMT).  Payloads: AstroRad Vest: A crewmember donned the AstroRad Vest to …","publishedAt":"2022-04-22T15:04:00.000Z","updatedAt":"2022-04-25T15:04:32.170Z"},{"id":1021,"title":"ISS Daily Summary Report – 4/21/2022","url":"https://blogs.nasa.gov/stationreport/2022/04/21/iss-daily-summary-report-4-21-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"Private Astronaut Mission (PAM) Axiom-1 (Ax-1): Commercial, Payload, and Imagery Activities: The Ax-1 crew continued payload operations including Earth Observation, Fluidic Space Optics, and ILAN-ES. The crew continued to capture still and video imagery of approved commercial and outreach activities.  TheraBand Activity and Private Family Conference (PFC): The Ax-1 crew performed scheduled TheraBand exercises and …","publishedAt":"2022-04-21T15:04:00.000Z","updatedAt":"2022-04-25T15:04:32.186Z"},{"id":1019,"title":"ISS Daily Summary Report – 4/20/2022","url":"https://blogs.nasa.gov/stationreport/2022/04/20/iss-daily-summary-report-4-20-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"Private Astronaut Mission (PAM) Axiom-1 (Ax-1): Commercial, Payload, and Imagery Activities: The Ax-1 crew continued payload operations including Earth Observation, AstroRad, and Snowcone. Mike LA captured recorded video of a commercial activity. Ax-1 Undock Preparations: Due to the delayed undocking, the Ax-1 crew removed the Polars from the Ax-1 Dragon and re-installed the emergency equipment. …","publishedAt":"2022-04-20T14:39:00.000Z","updatedAt":"2022-04-21T14:39:31.575Z"},{"id":1018,"title":"ISS Daily Summary Report – 4/19/2022","url":"https://blogs.nasa.gov/stationreport/2022/04/19/iss-daily-summary-report-4-19-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"Private Astronaut Mission (PAM) Axiom-1 (Ax-1): Public Affairs Office (PAO) and Imagery Activities: The Ax-1 crew performed an imagery data transfer of all remaining images from Axiom’s D6 Nikon Camera and participated in a live farewell ceremony with the ISS crew.    Ax-1 Undock Preparations: The Ax-1 crew performed cargo packing in preparation for undock; however, …","publishedAt":"2022-04-19T15:59:00.000Z","updatedAt":"2022-04-20T15:59:30.995Z"},{"id":1017,"title":"ISS Daily Summary Report – 4/18/2022","url":"https://blogs.nasa.gov/stationreport/2022/04/18/iss-daily-summary-report-4-18-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"RS Extravehicular Activity (EVA) #52: During today’s EVA, FE-1 Oleg Artemyev and FE-2 Denis Matveev worked outside the MLM to unstow the European Robotic Arm (ERA) and configure it for operational use. FE-3 Sergey Korsakov assisted with the ERA checkout from within the RS. The following tasks were completed. Completed: Install and connect the ERA …","publishedAt":"2022-04-18T15:49:00.000Z","updatedAt":"2022-04-19T15:49:31.246Z"},{"id":1015,"title":"ISS Daily Summary Report – 4/14/2022","url":"https://blogs.nasa.gov/stationreport/2022/04/15/iss-daily-summary-report-4-14-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"Private Astronaut Mission (PAM) Axiom-1: Public Affairs Office (PAO), Payload, and Commercial Activities: Multiple NASA-sponsored and ESA-sponsored PAO events have been performed, including eight Ice Cube Media Set events, three Ham radio events, and three PAO events, including a duet in space between Mike LA and the neoclassical pianist BLKBOK. The Ax-1 crew completed activities …","publishedAt":"2022-04-15T19:50:00.000Z","updatedAt":"2022-04-15T19:50:23.563Z"},{"id":1016,"title":"ISS Daily Summary Report – 4/15/2022","url":"https://blogs.nasa.gov/stationreport/2022/04/15/iss-daily-summary-report-4-15-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"Private Astronaut Mission (PAM) Axiom-1: Public Affairs Office (PAO), Payload, and Commercial Activities: The Ax-1 crew completed activities associated with several ISS National Lab sponsored payloads including Cardioprotection, Nano ISS Antenna, TESSERAE, CRISPR, Earth Observation, and Sansori. Private Astronauts Larry Connor and Eytan Stibbe performed four ESA-sponsored PAO ICE Cubes media events. Mike LA and …","publishedAt":"2022-04-15T14:10:00.000Z","updatedAt":"2022-04-18T14:10:16.469Z"},{"id":1014,"title":"ISS Daily Summary Report – 4/13/2022","url":"https://blogs.nasa.gov/stationreport/2022/04/14/iss-daily-summary-report-4-13-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"Private Astronaut Mission (PAM) Axiom-1 (Ax-1): Public Affairs Office (PAO), Payload, and Commercial Activities: Multiple NASA-sponsored and ESA-sponsored PAO events have been performed, including nine Ice Cube Media Set events, two HAM radio events, and one PAO event between the Ax-1 crew and youth at Space Center Houston. The Ax-1 crew completed activities associated with …","publishedAt":"2022-04-14T19:39:00.000Z","updatedAt":"2022-04-14T19:39:32.472Z"},{"id":1013,"title":"ISS Daily Summary Report – 4/12/2022","url":"https://blogs.nasa.gov/stationreport/2022/04/13/iss-daily-summary-report-4-12-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"Private Astronaut Mission (PAM) Axiom-1 (Ax-1): Public Affairs Office (PAO) and Payload Activities: Multiple NASA-sponsored and ESA-sponsored PAO events were performed, including one PAO event between L. Conner and CNBC, and 13 Ice Cube Media Set events, one of which was shortened due to technical difficulties. The Ax-1 crew completed ISS National Lab sponsored payload …","publishedAt":"2022-04-13T19:39:00.000Z","updatedAt":"2022-04-13T19:39:22.514Z"},{"id":1012,"title":"ISS Daily Summary Report – 4/11/2022","url":"https://blogs.nasa.gov/stationreport/2022/04/12/iss-daily-summary-report-4-11-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"Private Astronaut Mission (PAM) Axiom-1 (Ax-1): Ax-1 PAM Dock: SpaceX Crew Dragon Endeavour successfully docked to the ISS on Saturday, April 9th, at 07:42 AM CST. The docking was delayed for approximately 45 minutes due to issues transmitting video from the Dragon centerline berthing camera to the Station Support Computer (SSC) on ISS. With the …","publishedAt":"2022-04-12T17:59:00.000Z","updatedAt":"2022-04-12T17:59:24.264Z"},{"id":1011,"title":"ISS Daily Summary Report – 4/08/2022","url":"https://blogs.nasa.gov/stationreport/2022/04/11/iss-daily-summary-report-4-08-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"Axiom-1 Private Astronaut Mission (PAM) Launch: SpaceX Crew Dragon Endeavour successfully launched from Launch Complex-39A today at 10:17 AM CT on a Falcon 9 carrying Private Astronauts Michael Lopez-Alegria, Larry Connor, Mark Pathy, and Eytan Stibbe for the Axiom-1 mission. Crew Dragon Endeavour is planned to dock to the ISS on Saturday, April 9th, at …","publishedAt":"2022-04-11T19:29:00.000Z","updatedAt":"2022-04-11T19:29:26.786Z"},{"id":1010,"title":"ISS Daily Summary Report – 4/07/2022","url":"https://blogs.nasa.gov/stationreport/2022/04/07/iss-daily-summary-report-4-07-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"Payloads: Astrobee/Integrated System for Autonomous and Adaptive Caretaking (ISAAC): Following a software update, Astrobee supported an ISAAC session in Node 2. In this session, the Astrobee robot acted as autonomously as possible with minimal intervention from the ISS crew. The ISAAC project demonstrates using autonomous robots in human exploration vehicles to track vehicle health, transfer …","publishedAt":"2022-04-07T14:39:00.000Z","updatedAt":"2022-04-08T14:39:27.293Z"},{"id":1009,"title":"ISS Daily Summary Report – 4/06/2022","url":"https://blogs.nasa.gov/stationreport/2022/04/06/iss-daily-summary-report-4-06-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"Payloads: Airborne Particulate Monitor (APM): Science Data from the APM memory card was transferred to a Station Support Computer (SSC) for subsequent downlink, and the display status was reported to the ground. Air quality in crewed spacecraft is important for keeping astronauts healthy and comfortable. Although requirements exist for maximum allowable concentrations of particulate matter, …","publishedAt":"2022-04-06T14:29:00.000Z","updatedAt":"2022-04-07T14:29:25.112Z"},{"id":1008,"title":"ISS Daily Summary Report – 4/05/2022","url":"https://blogs.nasa.gov/stationreport/2022/04/05/iss-daily-summary-report-4-05-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"Payloads: AstroRad Vest: A crewmember donned the AstroRad vest, wore it for approximately 90 minutes, then doffed it and completed a survey on the device. The AstroRad vest is a personal protective equipment (PPE) device which functions as a radiation shield for astronauts. AstroRad shields astronauts from space-borne ionizing radiation in an efficient way, provides …","publishedAt":"2022-04-05T18:49:00.000Z","updatedAt":"2022-04-06T18:49:24.533Z"},{"id":1007,"title":"ISS Daily Summary Report – 4/04/2022","url":"https://blogs.nasa.gov/stationreport/2022/04/04/iss-daily-summary-report-4-04-2022/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/8/8a/ISS_after_completion_%28as_of_June_2006%29.jpg","newsSite":"NASA","summary":"Payloads: Airborne Particulate Monitor (APM): The crew checked the APM hardware and reported the display status. Air quality in crewed spacecraft is important for keeping astronauts healthy and comfortable. Although requirements exist for maximum allowable concentrations of particulate matter, currently no measurement capability verifies whether these requirements are met. The APM demonstrates an instrument for …","publishedAt":"2022-04-04T14:10:00.000Z","updatedAt":"2022-04-05T14:10:28.138Z"}],
  nasaSearchInput: "",
  nasaImgRef: "",
  userImgRef: "",
};

export default initialState
