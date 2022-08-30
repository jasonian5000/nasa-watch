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
  nasaSearchInput: "",
  nasaImgRef: "",
  userImgRef: "",
};

export default initialState
