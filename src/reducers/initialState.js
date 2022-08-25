const initialState = {
  nasaSearchResult: {
  collection: {
    version: "1.0",
    href: "http://images-api.nasa.gov/search?q=sun&media_type=image",
    items: [
      {
        href: "https://images-assets.nasa.gov/image/PIA18906/collection.json",
        data: [
          {
            center: "JPL",
            title: "Sun Shines in High-Energy X-rays",
            nasa_id: "PIA18906",
            date_created: "2014-12-22T18:53:13Z",
            keywords: ["Sun", "NuSTAR"],
            media_type: "image",
            description_508:
              "X-rays stream off the sun in this first picture of the sun, overlaid on a picture taken by NASA Solar Dynamics Observatory SDO, taken by NASA NuSTAR. The field of view covers the west limb of the sun.",
            secondary_creator: "NASA/JPL-Caltech/GSFC",
            description:
              "X-rays stream off the sun in this first picture of the sun, overlaid on a picture taken by NASA Solar Dynamics Observatory SDO, taken by NASA NuSTAR. The field of view covers the west limb of the sun.",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA18906/PIA18906~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA15179/collection.json",
        data: [
          {
            center: "JPL",
            title: "The Sun Magnetic Field",
            nasa_id: "PIA15179",
            date_created: "2011-12-16T19:18:05Z",
            keywords: ["Sun", "Voyager"],
            media_type: "image",
            description_508:
              "This frame from an animation shows how the magnetic field lines emanating from our sun spiral out into the solar system as the sun rotates. NASA Voyager 1 is in an area scientists are calling the stagnation region, at the outer layer of the heliosphere.",
            secondary_creator: "NASA/JPL-Caltech",
            description:
              "This frame from an animation shows how the magnetic field lines emanating from our sun spiral out into the solar system as the sun rotates. NASA Voyager 1 is in an area scientists are calling the stagnation region, at the outer layer of the heliosphere.",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA15179/PIA15179~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA14729/collection.json",
        data: [
          {
            center: "JPL",
            title: "Mercury Transit Across the Sun",
            keywords: ["Sun", "Solar Dynamics Observatory SDO"],
            nasa_id: "PIA14729",
            date_created: "2016-05-09T22:23:00Z",
            media_type: "image",
            description_508:
              "On May 9, 2016, Mercury passed directly between the Sun and Earth, making a transit of the Sun. Mercury transits happen about 13 times each century. NASA SDO studies the Sun 24/7 and captured the eight-hour event.",
            secondary_creator: "NASA/GSFC/Solar Dynamics Observatory",
            description:
              "On May 9, 2016, Mercury passed directly between the Sun and Earth, making a transit of the Sun. Mercury transits happen about 13 times each century. NASA SDO studies the Sun 24/7 and captured the eight-hour event.",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA14729/PIA14729~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA17669/collection.json",
        data: [
          {
            center: "JPL",
            title: "Pulses from the Sun",
            nasa_id: "PIA17669",
            date_created: "2014-02-11T15:20:02Z",
            keywords: ["Sun", "Solar Dynamics Observatory SDO"],
            media_type: "image",
            description_508:
              "The dark region seen on the face of the sun at the end of March 2013 is a coronal hole just above and to the right of the middle of the picture, which is a source of fast solar wind leaving the sun in this image from NASA Solar Dynamic Observatory.",
            secondary_creator: "NASA/SDO/AIA",
            description:
              "The dark region seen on the face of the sun at the end of March 2013 is a coronal hole just above and to the right of the middle of the picture, which is a source of fast solar wind leaving the sun in this image from NASA Solar Dynamic Observatory.",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA17669/PIA17669~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA19821/collection.json",
        data: [
          {
            center: "JPL",
            title: "NuSTAR Stares at the Sun",
            nasa_id: "PIA19821",
            date_created: "2015-07-08T16:50:28Z",
            keywords: ["Sun", "NuSTAR", "solar flares"],
            media_type: "image",
            description_508:
              "Flaring, active regions of our sun are highlighted in this image combining observations from NASA's NuSTAR. During the observations, microflares went off, which are smaller versions of the larger flares that also erupt from the sun surface.",
            secondary_creator: "NASA/JPL-Caltech/GSFC/JAXA",
            description:
              "Flaring, active regions of our sun are highlighted in this image combining observations from several telescopes. High-energy X-rays from NASA's Nuclear Spectroscopic Telescope Array (NuSTAR) are shown in blue; low-energy X-rays from Japan's Hinode spacecraft are green; and extreme ultraviolet light from NASA's Solar Dynamics Observatory (SDO) is yellow and red.  All three telescopes captured their solar images around the same time on April 29, 2015. The NuSTAR image is a mosaic made from combining smaller images.  The active regions across the sun's surface contain material heated to several millions of degrees. The blue-white areas showing the NuSTAR data pinpoint the most energetic spots. During the observations, microflares went off, which are smaller versions of the larger flares that also erupt from the sun's surface. The microflares rapidly release energy and heat the material in the active regions.  NuSTAR typically stares deeper into the cosmos to observe X-rays from supernovas, black holes and other extreme objects. But it can also look safely at the sun and capture images of its high-energy X-rays with more sensitivity than before. Scientists plan to continue to study the sun with NuSTAR to learn more about microflares, as well as hypothesized nanoflares, which are even smaller.  In this image, the NuSTAR data shows X-rays with energies between 2 and 6 kiloelectron volts; the Hinode data, which is from the X-ray Telescope instrument, has energies of 0.2 to 2.4 kiloelectron volts; and the Solar Dynamics Observatory data, taken using the Atmospheric Imaging Assembly instrument, shows extreme ultraviolet light with wavelengths of 171 and 193 Angstroms.  Note the green Hinode image frame edge does not extend as far as the SDO ultraviolet image, resulting in the green portion of the image being truncated on the right and left sides.  http://photojournal.jpl.nasa.gov/catalog/PIA19821",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA19821/PIA19821~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA09771/collection.json",
        data: [
          {
            center: "JPL",
            title: "Filtering the Sun",
            nasa_id: "PIA09771",
            date_created: "2007-11-14T13:50:07Z",
            keywords: ["S Rings", "Cassini-Huygens"],
            media_type: "image",
            description_508: "Filtering the Sun",
            secondary_creator: "NASA/JPL/Space Science Institute",
            description: "Filtering the Sun",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA09771/PIA09771~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA04994/collection.json",
        data: [
          {
            center: "JPL",
            title: "Facing the Sun",
            nasa_id: "PIA04994",
            date_created: "2004-01-05T17:43:27Z",
            keywords: ["Mars", "Mars Exploration Rover MER"],
            media_type: "image",
            description_508: "Facing the Sun",
            secondary_creator: "JPL/NASA/Cornell",
            description: "Facing the Sun",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA04994/PIA04994~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e000763/collection.json",
        data: [
          {
            center: "GSFC",
            title: "Outburst on the Sun",
            keywords: ["Outburst on the Sun"],
            location: "Greenbelt, MD",
            nasa_id: "GSFC_20171208_Archive_e000763",
            date_created: "2015-03-11T16:22:43Z",
            media_type: "image",
            description:
              'The Sun blew out a coronal mass ejection along with part of a solar filament over a three-hour period (Feb. 24, 2015). While some of the strands fell back into the Sun, a substantial part raced into space in a bright cloud of particles (as observed by the SOHO spacecraft). The activity was captured in a wavelength of extreme ultraviolet light. Because this occurred way over near the edge of the Sun, it was unlikely to have any effect on Earth.   Download high res/video file: <a href="http://sdo.gsfc.nasa.gov/gallery/potw/item/603" rel="nofollow">sdo.gsfc.nasa.gov/gallery/potw/item/603</a>  Credit: NASA/Solar Dynamics Observatory  <b><a href="http://www.nasa.gov/audience/formedia/features/MP_Photo_Guidelines.html" rel="nofollow">NASA image use policy.</a></b>  <b><a href="http://www.nasa.gov/centers/goddard/home/index.html" rel="nofollow">NASA Goddard Space Flight Center</a></b> enables NASA’s mission through four scientific endeavors: Earth Science, Heliophysics, Solar System Exploration, and Astrophysics. Goddard plays a leading role in NASA’s accomplishments by contributing compelling scientific knowledge to advance the Agency’s mission. <b>Follow us on <a href="http://twitter.com/NASAGoddardPix" rel="nofollow">Twitter</a></b> <b>Like us on <a href="http://www.facebook.com/pages/Greenbelt-MD/NASA-Goddard/395013845897?ref=tsd" rel="nofollow">Facebook</a></b> <b>Find us on <a href="http://instagram.com/nasagoddard?vm=grid" rel="nofollow">Instagram</a></b>',
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e000763/GSFC_20171208_Archive_e000763~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA21582/collection.json",
        data: [
          {
            center: "JPL",
            title: "Spotless Sun",
            keywords: [
              "Sun",
              "Solar Dynamics Observatory SDO",
              "intensitygram",
              "sunspots",
            ],
            nasa_id: "PIA21582",
            date_created: "2017-03-20T19:46:44Z",
            media_type: "image",
            description_508:
              "NASA's Solar Dynamics Observatory sees the sun has been virtually spotless, as in no sunspots, a 11-day spotless stretch not seen since the last solar minimum many years ago.",
            secondary_creator: "Spotless_combo_best.tif",
            description:
              "NASA Solar Dynamics Observatory sees the sun has been virtually spotless, as in no sunspots, a 11-day spotless stretch not seen since the last solar minimum many years ago.  Movies are available at https://photojournal.jpl.nasa.gov/catalog/PIA21582",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA21582/PIA21582~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA21461/collection.json",
        data: [
          {
            center: "JPL",
            title: "Earth Eclipses the Sun",
            keywords: ["Sun", "Solar Dynamics Observatory SDO", "eclipse"],
            nasa_id: "PIA21461",
            date_created: "2017-02-21T19:07:16Z",
            media_type: "image",
            description_508:
              "Several times a day for a few days the Earth completely blocked the Sun for about an hour due to NASA's Solar Dynamics Observatory orbital path Feb. 15, 2017.",
            secondary_creator: "NASA/GSFC/Solar Dynamics Observatory",
            description:
              "Several times a day for a few days the Earth completely blocked the Sun for about an hour due to NASA's Solar Dynamics Observatory's orbital path (Feb. 15, 2017). The edge of the Earth is not crisp, but kind of fuzzy due to Earth's atmosphere. This frame from a video shows the ending of one such eclipse over -- just seven minutes. The sun is shown in a wavelength of extreme ultraviolet light. These eclipses re-occur about every six months. The Moon blocks SDO's view of the sun on occasion as well.  Movies are available at http://photojournal.jpl.nasa.gov/catalog/PIA21461",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA21461/PIA21461~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA05554/collection.json",
        data: [
          {
            center: "JPL",
            title: "Martian Moon Eclipses Sun, in Stages",
            nasa_id: "PIA05554",
            date_created: "2004-03-13T02:04:44Z",
            keywords: ["Sun", "Mars Exploration Rover MER"],
            media_type: "image",
            description_508:
              "This panel illustrates the transit of the martian moon Phobos across the Sun. It is made up of images taken by NASA Mars Exploration Rover Opportunity.",
            secondary_creator: "NASA/JPL/Cornell",
            description:
              "This panel illustrates the transit of the martian moon Phobos across the Sun. It is made up of images taken by NASA Mars Exploration Rover Opportunity.",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA05554/PIA05554~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e002111/collection.json",
        data: [
          {
            album: ["Test"],
            center: "GSFC",
            title: "CME leaving the Sun [Video]",
            keywords: [
              "CME leaving the Sun [Video]",
              "sun",
              "nasa",
              "springequinox",
              "sunearthday",
              "nasasunearthday",
            ],
            location: "Greenbelt, MD",
            nasa_id: "GSFC_20171208_Archive_e002111",
            date_created: "2017-12-08T00:00:00Z",
            media_type: "image",
            description:
              'Animation of a CME leaving the Sun, slamming into our magnetosphere.  Credit: NASA/GSFC/SOHO/ESA Sound: Juan Carlos Garcia  To learn more go to the SOHO website:  <a href="http://sohowww.nascom.nasa.gov/home.html" rel="nofollow">sohowww.nascom.nasa.gov/home.html</a>  To learn more about NASA\'s Sun Earth Day go here:  <a href="http://sunearthday.nasa.gov/2010/index.php" rel="nofollow">sunearthday.nasa.gov/2010/index.php</a>',
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e002111/GSFC_20171208_Archive_e002111~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001549/collection.json",
        data: [
          {
            album: ["Test"],
            center: "GSFC",
            title: "From the Sun with Love",
            keywords: [
              "From the Sun with Love",
              "sun",
              "heart",
              "space",
              "nasa",
              "valentinesday",
              "goddard",
              "sdo",
            ],
            location: "Greenbelt, MD",
            nasa_id: "GSFC_20171208_Archive_e001549",
            date_created: "2017-12-08T00:00:00Z",
            media_type: "image",
            description:
              "This Solar Dynamics Observatory image of the Sun taken on February 1, 2013 in extreme ultraviolet light captures a heart-shaped dark coronal hole. Coronal holes are areas of the Sun's surface that are the source of open magnetic field lines that head way out into space. They are also the source regions of the fast solar wind, which is characterized by a relatively steady speed of approximately 800 km/s (about 1.8 million mph).",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001549/GSFC_20171208_Archive_e001549~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001643/collection.json",
        data: [
          {
            album: ["Test"],
            center: "GSFC",
            title: "Gradient Sun [still]",
            keywords: ["Gradient Sun [still]"],
            location: "Greenbelt, MD",
            nasa_id: "GSFC_20171208_Archive_e001643",
            date_created: "2017-12-08T00:00:00Z",
            media_type: "image",
            description:
              '<b>To view a video of the Gradient Sun go to: <a href="http://www.flickr.com/photos/gsfc/8103212817">www.flickr.com/photos/gsfc/8103212817</a></b>  Looking at a particularly beautiful image of the sun helps show how the lines between science and art can sometimes blur. But there is more to the connection between the two disciplines: science and art techniques are often quite similar, indeed one may inform the other or be improved based on lessons from the other arena. One such case is a technique known as a &quot;gradient filter&quot; – recognizable to many people as an option available on a photo-editing program. Gradients are, in fact, a mathematical description that highlights the places of greatest physical change in space. A gradient filter, in turn, enhances places of contrast, making them all the more obviously different, a useful tool when adjusting photos. Scientists, too, use gradient filters to enhance contrast, using them to accentuate fine structures that might otherwise be lost in the background noise. On the sun, for example, scientists wish to study a phenomenon known as coronal loops, which are giant arcs of solar material constrained to travel along that particular path by the magnetic fields in the sun\'s atmosphere. Observations of the loops, which can be more or less tangled and complex during different phases of the sun\'s 11-year activity cycle, can help researchers understand what\'s happening with the sun\'s complex magnetic fields, fields that can also power great eruptions on the sun such as solar flares or coronal mass ejections.  The still here shows an unfiltered image from the sun next to one that has been processed using a gradient filter. Note how the coronal loops are sharp and defined, making them all the more easy to study. On the other hand, gradients also make great art.   NASA/Goddard Space Flight Center  To download this video go to: <a href="http://svs.gsfc.nasa.gov/goto?11112" rel="nofollow">svs.gsfc.nasa.gov/goto?11112</a>  <b><a href="http://www.nasa.gov/audience/formedia/features/MP_Photo_Guidelines.html" rel="nofollow">NASA image use policy.</a></b>  <b><a href="http://www.nasa.gov/centers/goddard/home/index.html" rel="nofollow">NASA Goddard Space Flight Center</a></b> enables NASA’s mission through four scientific endeavors: Earth Science, Heliophysics, Solar System Exploration, and Astrophysics. Goddard plays a leading role in NASA’s accomplishments by contributing compelling scientific knowledge to advance the Agency’s mission.  <b>Follow us on <a href="http://twitter.com/NASA_GoddardPix" rel="nofollow">Twitter</a></b>  <b>Like us on <a href="http://www.facebook.com/pages/Greenbelt-MD/NASA-Goddard/395013845897?ref=tsd" rel="nofollow">Facebook</a></b>  <b>Find us on <a href="http://instagrid.me/nasagoddard/?vm=grid" rel="nofollow">Instagram</a></b>',
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001643/GSFC_20171208_Archive_e001643~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA00450/collection.json",
        data: [
          {
            center: "JPL",
            title: "Solar System Portrait - View of the Sun, Earth and Venus",
            nasa_id: "PIA00450",
            date_created: "1996-09-13T10:01:39Z",
            keywords: ["Sun", "Voyager", "Earth", "Venus"],
            media_type: "image",
            description_508:
              "This color image of the sun, Earth and Venus was taken by the Voyager 1 spacecraft Feb. 14, 1990, when it was approximately 32 degrees above the plane of the ecliptic and at a slant-range distance of approximately 4 billion miles.",
            secondary_creator: "NASA/JPL",
            description:
              "This color image of the sun, Earth and Venus was taken by the Voyager 1 spacecraft Feb. 14, 1990, when it was approximately 32 degrees above the plane of the ecliptic and at a slant-range distance of approximately 4 billion miles.  It is the first -- and may be the only -- time that we will ever see our solar system from such a vantage point. The image is a portion of a wide-angle image containing the sun and the region of space where the Earth and Venus were at the time with two narrow-angle pictures centered on each planet. The wide-angle was taken with the camera's darkest filter (a methane absorption band), and the shortest possible exposure (5 thousandths of a second) to avoid saturating the camera's vidicon tube with scattered sunlight. The sun is not large in the sky as seen from Voyager's perspective at the edge of the solar system but is still eight million times brighter than the brightest star in Earth's sky, Sirius. The image of the sun you see is far larger than the actual dimension of the solar disk. The result of the brightness is a bright burned out image with multiple reflections from the optics in the camera. The \"rays\" around the sun are a diffraction pattern of the calibration lamp which is mounted in front of the wide angle lens. The two narrow-angle frames containing the images of the Earth and Venus have been digitally mosaiced into the wide-angle image at the appropriate scale. These images were taken through three color filters and recombined to produce a color image. The violet, green and blue filters were used; exposure times were, for the Earth image, 0.72, 0.48 and 0.72 seconds, and for the Venus frame, 0.36, 0.24 and 0.36, respectively. Although the planetary pictures were taken with the narrow-angle camera (1500 mm focal length) and were not pointed directly at the sun, they show the effects of the glare from the nearby sun, in the form of long linear streaks resulting from the scattering of sunlight off parts of the camera and its sun shade. From Voyager's great distance both Earth and Venus are mere points of light, less than the size of a picture element even in the narrow-angle camera. Earth was a crescent only 0.12 pixel in size. Coincidentally, Earth lies right in the center of one of the scattered light rays resulting from taking the image so close to the sun. Detailed analysis also suggests that Voyager detected the moon as well, but it is too faint to be seen without special processing. Venus was only 0.11 pixel in diameter. The faint colored structure in both planetary frames results from sunlight scattered in the optics.   http://photojournal.jpl.nasa.gov/catalog/PIA00450",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA00450/PIA00450~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e000393/collection.json",
        data: [
          {
            album: ["Test"],
            center: "GSFC",
            title: "Picturing the Sun’s Magnetic Field",
            keywords: ["Picturing the Sun’s Magnetic Field"],
            location: "Greenbelt, MD",
            nasa_id: "GSFC_20171208_Archive_e000393",
            date_created: "2017-12-08T00:00:00Z",
            media_type: "image",
            description:
              'This illustration lays a depiction of the sun\'s magnetic fields over an image captured by NASA’s Solar Dynamics Observatory on March 12, 2016. The complex overlay of lines can teach scientists about the ways the sun\'s magnetism changes in response to the constant movement on and inside the sun. Note how the magnetic fields are densest near the bright spots visible on the sun – which are magnetically strong active regions – and many of the field lines link one active region to another.  This magnetic map was created using the PFSS – Potential Field Source Surface – model, a model of the magnetic field in the sun’s atmosphere based on magnetic measurements of the solar surface. The underlying image was taken in extreme ultraviolet wavelengths of 171 angstroms. This type of light is invisible to our eyes, but is colorized here in gold.  Credits: NASA/SDO/AIA/LMSAL  <b><a href="http://www.nasa.gov/audience/formedia/features/MP_Photo_Guidelines.html" rel="nofollow">NASA image use policy.</a></b>  <b><a href="http://www.nasa.gov/centers/goddard/home/index.html" rel="nofollow">NASA Goddard Space Flight Center</a></b> enables NASA’s mission through four scientific endeavors: Earth Science, Heliophysics, Solar System Exploration, and Astrophysics. Goddard plays a leading role in NASA’s accomplishments by contributing compelling scientific knowledge to advance the Agency’s mission.  <b>Follow us on <a href="http://twitter.com/NASAGoddardPix" rel="nofollow">Twitter</a></b>  <b>Like us on <a href="http://www.facebook.com/pages/Greenbelt-MD/NASA-Goddard/395013845897?ref=tsd" rel="nofollow">Facebook</a></b>  <b>Find us on <a href="http://instagrid.me/nasagoddard/?vm=grid" rel="nofollow">Instagram</a></b>  ',
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e000393/GSFC_20171208_Archive_e000393~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001434/collection.json",
        data: [
          {
            album: ["Test"],
            center: "GSFC",
            title: "Sun Emits a Solstice CME",
            keywords: [
              "Sun Emits a Solstice CME",
              "sun",
              "nasa",
              "solstice",
              "cme",
            ],
            location: "Greenbelt, MD",
            nasa_id: "GSFC_20171208_Archive_e001434",
            date_created: "2017-12-08T00:00:00Z",
            media_type: "image",
            description:
              'Caption: This image from June 20, 2013, at 11:15 p.m. EDT shows the bright light of a solar flare on the left side of the sun and an eruption of solar material shooting through the sun’s atmosphere, called a prominence eruption. Shortly thereafter, this same region of the sun sent a coronal mass ejection out into space.  ---  On June 20, 2013, at 11:24 p.m., the sun erupted with an Earth-directed coronal mass ejection or CME, a solar phenomenon that can send billions of tons of particles into space that can reach Earth one to three days later. These particles cannot travel through the atmosphere to harm humans on Earth, but they can affect electronic systems in satellites and on the ground.  Experimental NASA research models, based on observations from NASA’s Solar Terrestrial Relations Observatory and ESA/NASA’s Solar and Heliospheric Observatory show that the CME left the sun at speeds of around 1350 miles per second, which is a fast speed for CMEs.  Earth-directed CMEs can cause a space weather phenomenon called a geomagnetic storm, which occurs when they funnel energy into Earth\'s magnetic envelope, the magnetosphere, for an extended period of time. The CME’s magnetic fields peel back the outermost layers of Earth\'s fields changing their very shape. Magnetic storms can degrade communication signals and cause unexpected electrical surges in power grids. They also can cause aurora. Storms are rare during solar minimum, but as the sun’s activity ramps up every 11 years toward solar maximum – currently expected in late 2013 -- large storms occur several times per year.  In the past, geomagnetic storms caused by CMEs of this strength and direction have usually been mild.  Credit: NASA/Goddard/SDO  <b><a href="http://www.nasa.gov/audience/formedia/features/MP_Photo_Guidelines.html" rel="nofollow">NASA image use policy.</a></b>  <b><a href="http://www.nasa.gov/centers/goddard/home/index.html" rel="nofollow">NASA Goddard Space Flight Center</a></b> enables NASA’s mission through four scientific endeavors: Earth Science, Heliophysics, Solar System Exploration, and Astrophysics. Goddard plays a leading role in NASA’s accomplishments by contributing compelling scientific knowledge to advance the Agency’s mission.  <b>Follow us on <a href="http://twitter.com/NASA_GoddardPix" rel="nofollow">Twitter</a></b>  <b>Like us on <a href="http://www.facebook.com/pages/Greenbelt-MD/NASA-Goddard/395013845897?ref=tsd" rel="nofollow">Facebook</a></b>  <b>Find us on <a href="http://instagram.com/nasagoddard?vm=grid" rel="nofollow">Instagram</a></b>',
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001434/GSFC_20171208_Archive_e001434~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001435/collection.json",
        data: [
          {
            album: ["Test"],
            center: "GSFC",
            title: "Sun Emits a Solstice CME",
            keywords: [
              "Sun Emits a Solstice CME",
              "sun",
              "nasa",
              "solstice",
              "cme",
            ],
            location: "Greenbelt, MD",
            nasa_id: "GSFC_20171208_Archive_e001435",
            date_created: "2017-12-08T00:00:00Z",
            media_type: "image",
            description:
              'Caption: This image from June 20, 2013, at 11:15 p.m. EDT shows the bright light of a solar flare on the left side of the sun and an eruption of solar material shooting through the sun’s atmosphere, called a prominence eruption. Shortly thereafter, this same region of the sun sent a coronal mass ejection out into space.  ---  On June 20, 2013, at 11:24 p.m., the sun erupted with an Earth-directed coronal mass ejection or CME, a solar phenomenon that can send billions of tons of particles into space that can reach Earth one to three days later. These particles cannot travel through the atmosphere to harm humans on Earth, but they can affect electronic systems in satellites and on the ground.  Experimental NASA research models, based on observations from NASA’s Solar Terrestrial Relations Observatory and ESA/NASA’s Solar and Heliospheric Observatory show that the CME left the sun at speeds of around 1350 miles per second, which is a fast speed for CMEs.  Earth-directed CMEs can cause a space weather phenomenon called a geomagnetic storm, which occurs when they funnel energy into Earth\'s magnetic envelope, the magnetosphere, for an extended period of time. The CME’s magnetic fields peel back the outermost layers of Earth\'s fields changing their very shape. Magnetic storms can degrade communication signals and cause unexpected electrical surges in power grids. They also can cause aurora. Storms are rare during solar minimum, but as the sun’s activity ramps up every 11 years toward solar maximum – currently expected in late 2013 -- large storms occur several times per year.  In the past, geomagnetic storms caused by CMEs of this strength and direction have usually been mild.  Read more: <a href="http://1.usa.gov/14OxuEe" rel="nofollow">1.usa.gov/14OxuEe</a>  Credit: NASA/Goddard/SDO  <b><a href="http://www.nasa.gov/audience/formedia/features/MP_Photo_Guidelines.html" rel="nofollow">NASA image use policy.</a></b>  <b><a href="http://www.nasa.gov/centers/goddard/home/index.html" rel="nofollow">NASA Goddard Space Flight Center</a></b> enables NASA’s mission through four scientific endeavors: Earth Science, Heliophysics, Solar System Exploration, and Astrophysics. Goddard plays a leading role in NASA’s accomplishments by contributing compelling scientific knowledge to advance the Agency’s mission.  <b>Follow us on <a href="http://twitter.com/NASA_GoddardPix" rel="nofollow">Twitter</a></b>  <b>Like us on <a href="http://www.facebook.com/pages/Greenbelt-MD/NASA-Goddard/395013845897?ref=tsd" rel="nofollow">Facebook</a></b>  <b>Find us on <a href="http://instagram.com/nasagoddard?vm=grid" rel="nofollow">Instagram</a></b>',
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001435/GSFC_20171208_Archive_e001435~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e002115/collection.json",
        data: [
          {
            album: ["Test"],
            center: "GSFC",
            title: "NASA Sun Earth",
            keywords: [
              "NASA Sun Earth",
              "sun",
              "nasa",
              "springequinox",
              "sunearthday",
              "nasasunearthday",
            ],
            location: "Greenbelt, MD",
            nasa_id: "GSFC_20171208_Archive_e002115",
            date_created: "2017-12-08T00:00:00Z",
            media_type: "image",
            description:
              'CME blast and subsequent impact at Earth -- This illustration shows a CME blasting off the Sun’s surface in the direction of Ea CME blast and subsequent impact at Earth -- This illustration shows a CME blasting off the Sun’s surface in the direction of Earth. This left portion is composed of an EIT 304 image superimposed on a LASCO C2 coronagraph. Two to four days later, the CME cloud is shown striking and beginning to be mostly deflected around the Earth’s magnetosphere. The blue paths emanating from the Earth’s poles represent some of its magnetic field lines. The magnetic cloud of plasma can extend to 30 million miles wide by the time it reaches earth. These storms, which occur frequently, can disrupt communications and navigational equipment, damage satellites, and even cause blackouts. (Objects in the illustration are not drawn to scale.)  Credit: NASA/GSFC/SOHO/ESA  To learn more go to the SOHO website:  <a href="http://sohowww.nascom.nasa.gov/home.html" rel="nofollow">sohowww.nascom.nasa.gov/home.html</a>  To learn more about NASA\'s Sun Earth Day go here:  <a href="http://sunearthday.nasa.gov/2010/index.php" rel="nofollow">sunearthday.nasa.gov/2010/index.php</a>',
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e002115/GSFC_20171208_Archive_e002115~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA10976/collection.json",
        data: [
          {
            center: "JPL",
            title: "Midnight Sun on Mars",
            keywords: ["Mars", "Phoenix"],
            nasa_id: "PIA10976",
            date_created: "2008-07-23T22:39:17Z",
            media_type: "image",
            description_508: "Midnight Sun on Mars",
            secondary_creator:
              "NASA/JPL-Caltech/University of Arizona/Texas A&M University",
            description: "Midnight Sun on Mars",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA10976/PIA10976~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA12395/collection.json",
        data: [
          {
            center: "JPL",
            title: "The Sun Sets on Rembrandt",
            nasa_id: "PIA12395",
            date_created: "2009-12-08T23:17:58Z",
            keywords: ["Mercury", "MESSENGER"],
            media_type: "image",
            description_508: "The Sun Sets on Rembrandt",
            secondary_creator:
              "NASA/Johns Hopkins University Applied Physics Laboratory/Carnegie Institution of Washington",
            description: "The Sun Sets on Rembrandt",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA12395/PIA12395~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA06574/collection.json",
        data: [
          {
            center: "JPL",
            title: "Sun-striped Saturn",
            nasa_id: "PIA06574",
            date_created: "2005-01-31T13:50:00Z",
            keywords: ["Saturn", "Cassini-Huygens"],
            media_type: "image",
            description_508: "Sun-striped Saturn",
            secondary_creator: "NASA/JPL/Space Science Institute",
            description: "Sun-striped Saturn",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA06574/PIA06574~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA19014/collection.json",
        data: [
          {
            center: "JPL",
            title: "The Sun Also Rises",
            nasa_id: "PIA19014",
            date_created: "2015-01-12T18:04:20Z",
            keywords: ["Mercury", "MESSENGER"],
            media_type: "image",
            description_508: "The Sun Also Rises",
            secondary_creator:
              "NASA/Johns Hopkins University Applied Physics Laboratory/Carnegie Institution of Washington",
            description: "The Sun Also Rises",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA19014/PIA19014~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA11512/collection.json",
        data: [
          {
            center: "JPL",
            title: "Sun-bleached Rhea",
            nasa_id: "PIA11512",
            date_created: "2009-06-11T12:48:30Z",
            keywords: ["Rhea", "Cassini-Huygens"],
            media_type: "image",
            description_508: "Sun-bleached Rhea",
            secondary_creator: "NASA/JPL/Space Science Institute",
            description: "Sun-bleached Rhea",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA11512/PIA11512~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA07517/collection.json",
        data: [
          {
            center: "JPL",
            title: "Sun-Drenched Rhea",
            nasa_id: "PIA07517",
            date_created: "2005-06-07T13:50:00Z",
            keywords: ["Rhea", "Cassini-Huygens"],
            media_type: "image",
            description_508: "Sun-Drenched Rhea",
            secondary_creator: "NASA/JPL/Space Science Institute",
            description: "Sun-Drenched Rhea",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA07517/PIA07517~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA07639/collection.json",
        data: [
          {
            center: "JPL",
            title: "Herschel Sees the Sun",
            nasa_id: "PIA07639",
            date_created: "2005-11-25T13:50:08Z",
            keywords: ["Mimas", "Cassini-Huygens"],
            media_type: "image",
            description_508: "Herschel Sees the Sun",
            secondary_creator: "NASA/JPL/Space Science Institute",
            description: "Herschel Sees the Sun",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA07639/PIA07639~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001936/collection.json",
        data: [
          {
            album: ["Test"],
            center: "GSFC",
            title: "Epic Filament Eruption from the Sun",
            keywords: [
              "Epic Filament Eruption from the Sun",
              "sun",
              "nasa",
              "eruption",
              "filament",
            ],
            location: "Greenbelt, MD",
            nasa_id: "GSFC_20171208_Archive_e001936",
            date_created: "2017-12-08T00:00:00Z",
            media_type: "image",
            description:
              'NASA image captured December 6, 2010  To view a video of this event go here: <a href="http://www.flickr.com/photos/gsfc/5258354738">www.flickr.com/photos/gsfc/5258354738</a>  A very long solar filament that had been snaking around the Sun erupted (Dec. 6, 2010) with a flourish. STEREO (Behind) caught the action in dramatic detail in extreme ultraviolet light of Helium. It had been almost a million km long (about half a solar radius) and a prominent feature on the Sun visible over two weeks earlier before it rotated out of view. Filaments, elongated clouds of cooler gases suspended above the Sun by magnetic forces, are rather unstable and often break away from the Sun.  Credit: NASA/GSFC/SOHO  <b><a href="http://www.nasa.gov/centers/goddard/home/index.html" rel="nofollow">NASA Goddard Space Flight Center</a></b> enables NASA’s mission through four scientific endeavors: Earth Science, Heliophysics, Solar System Exploration, and Astrophysics. Goddard plays a leading role in NASA’s accomplishments by contributing compelling scientific knowledge to advance the Agency’s mission.  <b>Follow us on <a href="http://twitter.com/NASA_GoddardPix" rel="nofollow">Twitter</a></b>  <b>Join us on <a href="http://www.facebook.com/pages/Greenbelt-MD/NASA-Goddard/395013845897?ref=tsd" rel="nofollow">Facebook</a></b>',
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001936/GSFC_20171208_Archive_e001936~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e000718/collection.json",
        data: [
          {
            center: "GSFC",
            title: 'Sun Says "Keep Right"',
            keywords: ['Sun Says "Keep Right"'],
            location: "Greenbelt, MD",
            nasa_id: "GSFC_20171208_Archive_e000718",
            date_created: "2015-05-28T19:48:35Z",
            media_type: "image",
            description:
              'A pair of giant filaments on the face of the sun have formed what appears to be an enormous arrow. If straightened out, each filament would be about as long as the sun’s diameter, 1 million miles long.  Filaments are cooler clouds of solar material suspended above the sun\'s surface by powerful magnetic forces. Filaments can float for days without much change, though they can also erupt, releasing solar material in a shower that either rains back down or escapes out into space, becoming a moving cloud known as a coronal mass ejection, or CME.  This image was captured on May 28, 2015, in combined wavelengths of extreme ultraviolet light by NASA\'s Solar Dynamics Observatory, which observes the sun 24 hours a day.  Credit: NASA/SDO   <b><a href="http://www.nasa.gov/audience/formedia/features/MP_Photo_Guidelines.html" rel="nofollow">NASA image use policy.</a></b>  <b><a href="http://www.nasa.gov/centers/goddard/home/index.html" rel="nofollow">NASA Goddard Space Flight Center</a></b> enables NASA’s mission through four scientific endeavors: Earth Science, Heliophysics, Solar System Exploration, and Astrophysics. Goddard plays a leading role in NASA’s accomplishments by contributing compelling scientific knowledge to advance the Agency’s mission.  <b>Follow us on <a href="http://twitter.com/NASAGoddardPix" rel="nofollow">Twitter</a></b>  <b>Like us on <a href="http://www.facebook.com/pages/Greenbelt-MD/NASA-Goddard/395013845897?ref=tsd" rel="nofollow">Facebook</a></b>  <b>Find us on <a href="http://instagrid.me/nasagoddard/?vm=grid" rel="nofollow">Instagram</a></b>',
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e000718/GSFC_20171208_Archive_e000718~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001406/collection.json",
        data: [
          {
            album: ["Test"],
            center: "GSFC",
            title: "Comet Plunge and CME on the Sun",
            keywords: [
              "Comet Plunge and CME on the Sun",
              "sun",
              "space",
              "soho",
              "nasa",
              "comet",
              "goddard",
              "cme",
            ],
            location: "Greenbelt, MD",
            nasa_id: "GSFC_20171208_Archive_e001406",
            date_created: "2017-12-08T00:00:00Z",
            media_type: "image",
            description:
              'A small comet was streaking towards the Sun when the Sun blew out a &quot;halo&quot; coronal mass ejection (CME) Aug. 19-20, 2013). The CME originated from the far side of the Sun and did not have any interaction with the comet. The comet, only perhaps 30 meters across, was not seen after it went out of view, likely disintegrated by the heat and radiation from the Sun. We call this a &quot;full halo&quot; CME since the front edge of the CME is expanding in all directions around the Sun like a halo.  The images were taken by SOHO\'s coronagraphs in which a disk (red) blocks the Sun and some of the area around it so we can see faint structures beyond that. Here we superimposed the Sun from NASA\'s SDO. The movie covers about five hours of activity and can be seen here: <a href="http://www.flickr.com/photos/gsfc/9601034896/">www.flickr.com/photos/gsfc/9601034896/</a>  Credit: NASA/Goddard/SOHO  <b><a href="http://www.nasa.gov/audience/formedia/features/MP_Photo_Guidelines.html" rel="nofollow">NASA image use policy.</a></b>  <b><a href="http://www.nasa.gov/centers/goddard/home/index.html" rel="nofollow">NASA Goddard Space Flight Center</a></b> enables NASA’s mission through four scientific endeavors: Earth Science, Heliophysics, Solar System Exploration, and Astrophysics. Goddard plays a leading role in NASA’s accomplishments by contributing compelling scientific knowledge to advance the Agency’s mission.  <b>Follow us on <a href="http://twitter.com/NASA_GoddardPix" rel="nofollow">Twitter</a></b>  <b>Like us on <a href="http://www.facebook.com/pages/Greenbelt-MD/NASA-Goddard/395013845897?ref=tsd" rel="nofollow">Facebook</a></b>  <b>Find us on <a href="http://instagram.com/nasagoddard?vm=grid" rel="nofollow">Instagram</a></b>',
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001406/GSFC_20171208_Archive_e001406~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001305/collection.json",
        data: [
          {
            center: "GSFC",
            title: "Comet ISON Approaching the Sun [still]",
            keywords: ["Comet ISON Approaching the Sun [still]"],
            location: "Greenbelt, MD",
            nasa_id: "GSFC_20171208_Archive_e001305",
            date_created: "2013-11-27T15:10:53Z",
            media_type: "image",
            description:
              'This movie from NASA’s STEREO spacecraft\'s Heliospheric Imager shows Comet ISON, Mercury, Comet Encke and Earth over a five-day period from Nov. 20 to Nov. 25, 2013. The sun sits right of the field of view of this camera. Comet ISON, which will round the sun on Nov. 28, is what\'s known as a sungrazing comet, due to its close approach.  Foreshortening or the angle at which these images were obtained make Earth appear as if it is closer to the sun than Mercury. If you look closely you will also see a dimmer and smaller comet Encke near comet ISON.   A comet’s journey through the solar system is perilous and violent. A giant ejection of solar material from the sun could rip its tail off. Before it reaches Mars -- at some 230 million miles away from the sun -- the radiation of the sun begins to boil its water, the first step toward breaking apart. And, if it survives all this, the intense radiation and pressure as it flies near the surface of the sun could destroy it altogether.  Even if the comet does not survive, tracking its journey will help scientists understand what the comet is made of, how it reacts to its environment, and what this explains about the origins of the solar system. Closer to the sun, watching how the comet and its tail interact with the vast solar atmosphere can teach scientists more about the sun itself.  Image Credit: NASA/STEREO  <b><a href="http://www.nasa.gov/audience/formedia/features/MP_Photo_Guidelines.html" rel="nofollow">NASA image use policy.</a></b>  <b><a href="http://www.nasa.gov/centers/goddard/home/index.html" rel="nofollow">NASA Goddard Space Flight Center</a></b> enables NASA’s mission through four scientific endeavors: Earth Science, Heliophysics, Solar System Exploration, and Astrophysics. Goddard plays a leading role in NASA’s accomplishments by contributing compelling scientific knowledge to advance the Agency’s mission.  <b>Follow us on <a href="http://twitter.com/NASAGoddardPix" rel="nofollow">Twitter</a></b>  <b>Like us on <a href="http://www.facebook.com/pages/Greenbelt-MD/NASA-Goddard/395013845897?ref=tsd" rel="nofollow">Facebook</a></b>  <b>Find us on <a href="http://instagram.com/nasagoddard?vm=grid" rel="nofollow">Instagram</a></b>',
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001305/GSFC_20171208_Archive_e001305~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001314/collection.json",
        data: [
          {
            center: "GSFC",
            title: "Comet ISON Streaks Toward the Sun",
            keywords: ["Comet ISON Streaks Toward the Sun"],
            location: "Greenbelt, MD",
            nasa_id: "GSFC_20171208_Archive_e001314",
            date_created: "2013-11-22T20:04:17Z",
            media_type: "image",
            description:
              'Date: 19 Nov 2013  Comet ISON shows off its tail in this three-minute exposure taken on 19 Nov. 2013 at 6:10 a.m. EST, using a 14-inch telescope located at the Marshall Space Flight Center. The comet is just nine days away from its close encounter with the sun; hopefully it will survive to put on a nice show during the first week of December. The star images are trailed because the telescope is tracking on the comet, which is now exhibiting obvious motion with respect to the background stars over a period of minutes.  At the time of this image, Comet ISON was some 44 million miles from the sun -- and 80 million miles from Earth -- moving at a speed of 136,700 miles per hour.  Credit: NASA/MSFC/Aaron Kingery  --------  More details on Comet ISON:  Comet ISON began its trip from the Oort cloud region of our solar system and is now travelling toward the sun. The comet will reach its closest approach to the sun on Thanksgiving Day -- 28 Nov 2013 -- skimming just 730,000 miles above the sun\'s surface. If it comes around the sun without breaking up, the comet will be visible in the Northern Hemisphere with the naked eye, and from what we see now, ISON is predicted to be a particularly bright and beautiful comet.  Catalogued as C/2012 S1, Comet ISON was first spotted 585 million miles away in September 2012. This is ISON\'s very first trip around the sun, which means it is still made of pristine matter from the earliest days of the solar system’s formation, its top layers never having been lost by a trip near the sun. Comet ISON is, like all comets, a dirty snowball made up of dust and frozen gases like water, ammonia, methane and carbon dioxide -- some of the fundamental building blocks that scientists believe led to the formation of the planets 4.5 billion years ago.   NASA has been using a vast fleet of spacecraft, instruments, and space- and Earth-based telescope, in order to learn more about this time capsule from when the solar system first formed.   The journey along the way for such a sun-grazing comet can be dangerous. A giant ejection of solar material from the sun could rip its tail off. Before it reaches Mars -- at some 230 million miles away from the sun -- the radiation of the sun begins to boil its water, the first step toward breaking apart. And, if it survives all this, the intense radiation and pressure as it flies near the surface of the sun could destroy it altogether.   This collection of images show ISON throughout that journey, as scientists watched to see whether the comet would break up or remain intact.    The comet reaches its closest approach to the sun on Thanksgiving Day -- Nov. 28, 2013 -- skimming just 730,000 miles above the sun’s surface. If it comes around the sun without breaking up, the comet will be visible in the Northern Hemisphere with the naked eye, and from what we see now, ISON is predicted to be a particularly bright and beautiful comet.   ISON stands for International Scientific Optical Network, a group of observatories in ten countries who have organized to detect, monitor, and track objects in space. ISON is managed by the Keldysh Institute of Applied Mathematics, part of the Russian Academy of Sciences.  <b><a href="http://www.nasa.gov/audience/formedia/features/MP_Photo_Guidelines.html" rel="nofollow">NASA image use policy.</a></b>  <b><a href="http://www.nasa.gov/centers/goddard/home/index.html" rel="nofollow">NASA Goddard Space Flight Center</a></b> enables NASA’s mission through four scientific endeavors: Earth Science, Heliophysics, Solar System Exploration, and Astrophysics. Goddard plays a leading role in NASA’s accomplishments by contributing compelling scientific knowledge to advance the Agency’s mission.  <b>Follow us on <a href="http://twitter.com/NASA_GoddardPix" rel="nofollow">Twitter</a></b>  <b>Like us on &lt;a href=&quot;http://www.facebook.com/pages/Greenbelt-MD/NASA-Goddard/39501</b>',
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001314/GSFC_20171208_Archive_e001314~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA09320/collection.json",
        data: [
          {
            center: "JPL",
            title: "Full Disk Image of the Sun, March 26, 2007",
            nasa_id: "PIA09320",
            date_created: "2007-04-27T14:50:00Z",
            keywords: ["Sun", "Solar TErrestrial RElations Observatory STEREO"],
            media_type: "image",
            description_508:
              "NASA Solar TErrestrial RElations Observatory STEREO satellites have provided the first three-dimensional images of the Sun. The structure of the corona shows well in this image. ",
            secondary_creator: "NASA/JPL-Caltech/NRL/GSFC",
            description:
              "NASA Solar TErrestrial RElations Observatory STEREO satellites have provided the first three-dimensional images of the Sun. The structure of the corona shows well in this image. ",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA09320/PIA09320~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001024/collection.json",
        data: [
          {
            center: "GSFC",
            title: "Comet Jacques Approaches the Sun",
            keywords: ["Comet Jacques Approaches the Sun"],
            location: "Greenbelt, MD",
            nasa_id: "GSFC_20171208_Archive_e001024",
            date_created: "2014-07-24T12:56:52Z",
            media_type: "image",
            description:
              'NASA\'s Solar TErrestrial Relations Observatory, STEREO has observed the recently discovered Comet Jacques as it passed by its nearest approach to the Sun (July 1-6, 2014). The wide field instrument on board STEREO (Ahead) showed the comet with its elongated tail being stretched and pummeled by the gusty solar wind streaming from the Sun. Also visible near the center of the image is the bright planet Venus. The Sun is just out of the field of view to the right. Comet Jacques is traveling through space at about 180,000 km per hour (110,000 mph). It may brighten enough to be seen with the naked eye.   High res still here: <a href="https://www.flickr.com/photos/gsfc/14710024276/">www.flickr.com/photos/gsfc/14710024276/</a>  Download original file: <a href="http://sohowww.nascom.nasa.gov/pickoftheweek/old/11jul2014/" rel="nofollow">sohowww.nascom.nasa.gov/pickoftheweek/old/11jul2014/</a>  Credit: NASA/Goddard/STEREO  <b><a href="http://www.nasa.gov/audience/formedia/features/MP_Photo_Guidelines.html" rel="nofollow">NASA image use policy.</a></b>    <b><a href="http://www.nasa.gov/centers/goddard/home/index.html" rel="nofollow">NASA Goddard Space Flight Center</a></b> enables NASA’s mission through four scientific endeavors: Earth Science, Heliophysics, Solar System Exploration, and Astrophysics. Goddard plays a leading role in NASA’s accomplishments by contributing compelling scientific knowledge to advance the Agency’s mission.  <b>Follow us on <a href="http://twitter.com/NASAGoddardPix" rel="nofollow">Twitter</a></b>  <b>Like us on <a href="http://www.facebook.com/pages/Greenbelt-MD/NASA-Goddard/395013845897?ref=tsd" rel="nofollow">Facebook</a></b>   <b>Find us on <a href="http://instagram.com/nasagoddard?vm=grid" rel="nofollow">Instagram</a></b>',
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001024/GSFC_20171208_Archive_e001024~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001550/collection.json",
        data: [
          {
            album: ["Test"],
            center: "GSFC",
            title: "From the Sun with Love",
            keywords: [
              "From the Sun with Love",
              "sun",
              "heart",
              "space",
              "nasa",
              "valentinesday",
              "goddard",
              "sdo",
            ],
            location: "Greenbelt, MD",
            nasa_id: "GSFC_20171208_Archive_e001550",
            date_created: "2017-12-08T00:00:00Z",
            media_type: "image",
            description:
              'This Solar Dynamics Observatory (SDO) image of the Sun taken on January 20, 2012 in extreme ultraviolet light captures a heart-shaped dark coronal hole. Coronal holes are areas of the Sun\'s surface that are the source of open magnetic field lines that head way out into space. They are also the source regions of the fast solar wind, which is characterized by a relatively steady speed of approximately 800 km/s (about 1.8 million mph).   <b><a href="http://www.nasa.gov/audience/formedia/features/MP_Photo_Guidelines.html" rel="nofollow">NASA image use policy.</a></b>  <b><a href="http://www.nasa.gov/centers/goddard/home/index.html" rel="nofollow">NASA Goddard Space Flight Center</a></b> enables NASA’s mission through four scientific endeavors: Earth Science, Heliophysics, Solar System Exploration, and Astrophysics. Goddard plays a leading role in NASA’s accomplishments by contributing compelling scientific knowledge to advance the Agency’s mission.  <b>Follow us on <a href="http://twitter.com/NASA_GoddardPix" rel="nofollow">Twitter</a></b>  <b>Like us on <a href="http://www.facebook.com/pages/Greenbelt-MD/NASA-Goddard/395013845897?ref=tsd" rel="nofollow">Facebook</a></b>  <b>Find us on <a href="http://instagram.com/nasagoddard?vm=grid" rel="nofollow">Instagram</a></b>',
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001550/GSFC_20171208_Archive_e001550~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001551/collection.json",
        data: [
          {
            album: ["Test"],
            center: "GSFC",
            title: "From the Sun with Love",
            keywords: [
              "From the Sun with Love",
              "sun",
              "heart",
              "space",
              "nasa",
              "valentinesday",
              "goddard",
              "sdo",
            ],
            location: "Greenbelt, MD",
            nasa_id: "GSFC_20171208_Archive_e001551",
            date_created: "2017-12-08T00:00:00Z",
            media_type: "image",
            description:
              'This Solar Dynamics Observatory (SDO) image of the Sun taken on January 20, 2012 in extreme ultraviolet light captures a heart-shaped dark coronal hole. Coronal holes are areas of the Sun\'s surface that are the source of open magnetic field lines that head way out into space. They are also the source regions of the fast solar wind, which is characterized by a relatively steady speed of approximately 800 km/s (about 1.8 million mph).   <b><a href="http://www.nasa.gov/audience/formedia/features/MP_Photo_Guidelines.html" rel="nofollow">NASA image use policy.</a></b>  <b><a href="http://www.nasa.gov/centers/goddard/home/index.html" rel="nofollow">NASA Goddard Space Flight Center</a></b> enables NASA’s mission through four scientific endeavors: Earth Science, Heliophysics, Solar System Exploration, and Astrophysics. Goddard plays a leading role in NASA’s accomplishments by contributing compelling scientific knowledge to advance the Agency’s mission.  <b>Follow us on <a href="http://twitter.com/NASA_GoddardPix" rel="nofollow">Twitter</a></b>  <b>Like us on <a href="http://www.facebook.com/pages/Greenbelt-MD/NASA-Goddard/395013845897?ref=tsd" rel="nofollow">Facebook</a></b>  <b>Find us on <a href="http://instagram.com/nasagoddard?vm=grid" rel="nofollow">Instagram</a></b>',
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001551/GSFC_20171208_Archive_e001551~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA13737/collection.json",
        data: [
          {
            center: "JPL",
            title: "Phobos Passes in Front of Sun Face, Nov. 9, 2010",
            keywords: ["Sun", "Mars Exploration Rover MER"],
            nasa_id: "PIA13737",
            date_created: "2010-12-27T23:07:02Z",
            media_type: "image",
            description_508:
              "The larger of the two moons of Mars, Phobos, passes in front of the Sun face in this image from NASA Mars Exploration Rover Opportunity. A movie is available at the Photojournal.",
            secondary_creator: "NASA/JPL-Caltech/Cornell/Texas A&M",
            description:
              "The larger of the two moons of Mars, Phobos, passes in front of the Sun face in this image from NASA Mars Exploration Rover Opportunity. A movie is available at the Photojournal.",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA13737/PIA13737~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA09330/collection.json",
        data: [
          {
            center: "JPL",
            title: "South Pole of the Sun, March 20, 2007",
            nasa_id: "PIA09330",
            date_created: "2007-04-27T14:50:10Z",
            keywords: ["Sun", "Solar TErrestrial RElations Observatory STEREO"],
            media_type: "image",
            description_508:
              "NASA Solar TErrestrial RElations Observatory satellites have provided the first 3-dimensional images of the Sun. This view will aid scientists ability to understand solar physics to improve space weather forecasting. . ",
            secondary_creator: "NASA/JPL-Caltech/NRL/GSFC",
            description:
              "NASA Solar TErrestrial RElations Observatory satellites have provided the first 3-dimensional images of the Sun. This view will aid scientists ability to understand solar physics to improve space weather forecasting. . ",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA09330/PIA09330~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA09331/collection.json",
        data: [
          {
            center: "JPL",
            title: "South Pole of the Sun, March 20, 2007 Anaglyph",
            nasa_id: "PIA09331",
            date_created: "2007-04-27T14:50:11Z",
            keywords: ["Sun", "Solar TErrestrial RElations Observatory STEREO"],
            media_type: "image",
            description_508:
              "NASA Solar TErrestrial RElations Observatory satellites have provided the first 3-dimensional images of the Sun. This view will aid scientists ability to understand solar physics to improve space weather forecasting. 3D glasses are necessary.",
            secondary_creator: "NASA/JPL-Caltech/NRL/GSFC",
            description:
              "NASA Solar TErrestrial RElations Observatory satellites have provided the first 3-dimensional images of the Sun. This view will aid scientists ability to understand solar physics to improve space weather forecasting. 3D glasses are necessary.",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA09331/PIA09331~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA09328/collection.json",
        data: [
          {
            center: "JPL",
            title: "North Pole of the Sun, March 20, 2007",
            nasa_id: "PIA09328",
            date_created: "2007-04-27T14:50:08Z",
            keywords: ["Sun", "Solar TErrestrial RElations Observatory STEREO"],
            media_type: "image",
            description_508:
              "NASA Solar TErrestrial RElations Observatory satellites have provided the first 3-dimensional images of the Sun. This view will aid scientists ability to understand solar physics to improve space weather forecasting. ",
            secondary_creator: "NASA/JPL-Caltech/NRL/GSFC",
            description:
              "NASA Solar TErrestrial RElations Observatory satellites have provided the first 3-dimensional images of the Sun. This view will aid scientists ability to understand solar physics to improve space weather forecasting. ",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA09328/PIA09328~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA09329/collection.json",
        data: [
          {
            center: "JPL",
            title: "North Pole of the Sun, March 20, 2007 Anaglyph",
            nasa_id: "PIA09329",
            date_created: "2007-04-27T14:50:09Z",
            keywords: ["Sun", "Solar TErrestrial RElations Observatory STEREO"],
            media_type: "image",
            description_508:
              "NASA Solar TErrestrial RElations Observatory satellites have provided the first 3-dimensional images of the Sun. This view will aid scientists ability to understand solar physics to improve space weather forecasting. 3D glasses are necessary.",
            secondary_creator: "NASA/JPL-Caltech/NRL/GSFC",
            description:
              "NASA Solar TErrestrial RElations Observatory satellites have provided the first 3-dimensional images of the Sun. This view will aid scientists ability to understand solar physics to improve space weather forecasting. 3D glasses are necessary.",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA09329/PIA09329~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001517/collection.json",
        data: [
          {
            album: ["Test"],
            center: "GSFC",
            title: "The Sun: One Year in One Image",
            keywords: ["The Sun: One Year in One Image", "sun", "nasa", "sdo"],
            location: "Greenbelt, MD",
            nasa_id: "GSFC_20171208_Archive_e001517",
            date_created: "2017-12-08T00:00:00Z",
            media_type: "image",
            description:
              'Image released: April 22, 2013  In the three years since it first provided images of the sun in the spring of 2010, NASA’s Solar Dynamics Observatory has had virtually unbroken coverage of the sun\'s rise toward solar maximum, the peak of solar activity in its regular 11-year cycle.   This image is a composite of 25 separate images spanning the period of April 16, 2012, to April 15, 2013. It uses the SDO AIA wavelength of 171 angstroms and reveals the zones on the sun where active regions are most common during this part of the solar cycle.  Credit: NASA/GSFC/SDO  <b><a href="http://www.nasa.gov/mission_pages/sdo/news/first-light-3rd.html" rel="nofollow">Learn more about this image.</a></b>  <b><a href="http://www.nasa.gov/audience/formedia/features/MP_Photo_Guidelines.html" rel="nofollow">NASA image use policy.</a></b>  <b><a href="http://www.nasa.gov/centers/goddard/home/index.html" rel="nofollow">NASA Goddard Space Flight Center</a></b> enables NASA’s mission through four scientific endeavors: Earth Science, Heliophysics, Solar System Exploration, and Astrophysics. Goddard plays a leading role in NASA’s accomplishments by contributing compelling scientific knowledge to advance the Agency’s mission.  <b>Follow us on <a href="http://twitter.com/NASA_GoddardPix" rel="nofollow">Twitter</a></b>  <b>Like us on <a href="http://www.facebook.com/pages/Greenbelt-MD/NASA-Goddard/395013845897?ref=tsd" rel="nofollow">Facebook</a></b>  <b>Find us on <a href="http://instagrid.me/nasagoddard/?vm=grid" rel="nofollow">Instagram</a></b>',
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001517/GSFC_20171208_Archive_e001517~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e000762/collection.json",
        data: [
          {
            center: "GSFC",
            title: "Sun Emits an X2.2 Flare",
            keywords: ["Sun Emits an X2.2 Flare"],
            location: "Greenbelt, MD",
            nasa_id: "GSFC_20171208_Archive_e000762",
            date_created: "2015-03-11T18:28:14Z",
            media_type: "image",
            description:
              'The sun emitted a significant solar flare, peaking at 12:22 p.m. EDT on March 11, 2015. NASA’s Solar Dynamics Observatory, which watches the sun constantly, captured an image of the event. Solar flares are powerful bursts of radiation. Harmful radiation from a flare cannot pass through Earth\'s atmosphere to physically affect humans on the ground, however -- when intense enough -- they can disturb the atmosphere in the layer where GPS and communications signals travel. This flare is classified as an X2.2-class flare. X-class denotes the most intense flares, while the number provides more information about its strength. An X2 is twice as intense as an X1, an X3 is three times as intense, etc.  Credit: NASA/Goddard/SDO  <b><a href="http://www.nasa.gov/audience/formedia/features/MP_Photo_Guidelines.html" rel="nofollow">NASA image use policy.</a></b>  <b><a href="http://www.nasa.gov/centers/goddard/home/index.html" rel="nofollow">NASA Goddard Space Flight Center</a></b> enables NASA’s mission through four scientific endeavors: Earth Science, Heliophysics, Solar System Exploration, and Astrophysics. Goddard plays a leading role in NASA’s accomplishments by contributing compelling scientific knowledge to advance the Agency’s mission. <b>Follow us on <a href="http://twitter.com/NASAGoddardPix" rel="nofollow">Twitter</a></b> <b>Like us on <a href="http://www.facebook.com/pages/Greenbelt-MD/NASA-Goddard/395013845897?ref=tsd" rel="nofollow">Facebook</a></b> <b>Find us on <a href="http://instagram.com/nasagoddard?vm=grid" rel="nofollow">Instagram</a></b>',
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e000762/GSFC_20171208_Archive_e000762~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e000128/collection.json",
        data: [
          {
            album: ["Test"],
            center: "GSFC",
            title: "Earth Eclipses the Sun",
            keywords: ["Earth Eclipses the Sun"],
            location: "Greenbelt, MD",
            nasa_id: "GSFC_20171208_Archive_e000128",
            date_created: "2017-12-08T00:00:00Z",
            media_type: "image",
            description:
              'Twice a year, NASA’s Solar Dynamics Observatory, or SDO, has an eclipse season — a weeks-long period in which Earth blocks SDO’s view of the sun for part of each day. This footage captured by SDO on Feb. 15, 2017, shows one such eclipse. Earth’s edge appears fuzzy, rather than crisp, because the sun’s light is able to shine through Earth’s atmosphere in some places. These images were captured in wavelengths of extreme ultraviolet light, which is typically invisible to our eyes, but is colorized here in gold.    Credit: NASA/Goddard/SDO  <b><a href="http://www.nasa.gov/audience/formedia/features/MP_Photo_Guidelines.html" rel="nofollow">NASA image use policy.</a></b>  <b><a href="http://www.nasa.gov/centers/goddard/home/index.html" rel="nofollow">NASA Goddard Space Flight Center</a></b> enables NASA’s mission through four scientific endeavors: Earth Science, Heliophysics, Solar System Exploration, and Astrophysics. Goddard plays a leading role in NASA’s accomplishments by contributing compelling scientific knowledge to advance the Agency’s mission.  <b>Follow us on <a href="http://twitter.com/NASAGoddardPix" rel="nofollow">Twitter</a></b>  <b>Like us on <a href="http://www.facebook.com/pages/Greenbelt-MD/NASA-Goddard/395013845897?ref=tsd" rel="nofollow">Facebook</a></b>  <b>Find us on <a href="http://instagrid.me/nasagoddard/?vm=grid" rel="nofollow">Instagram</a></b>   ',
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e000128/GSFC_20171208_Archive_e000128~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA09322/collection.json",
        data: [
          {
            center: "JPL",
            title:
              "Close-up View of an Active Region of the Sun, March 23, 2007",
            nasa_id: "PIA09322",
            date_created: "2007-04-27T14:50:02Z",
            keywords: ["Sun", "Solar TErrestrial RElations Observatory STEREO"],
            media_type: "image",
            description_508:
              "NASA Solar TErrestrial RElations Observatory STEREO satellites have provided the first three-dimensional images of the Sun. The structure of the corona shows well in this image. ",
            secondary_creator: "NASA/JPL-Caltech/NRL/GSFC",
            description:
              "NASA Solar TErrestrial RElations Observatory STEREO satellites have provided the first three-dimensional images of the Sun. The structure of the corona shows well in this image. ",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA09322/PIA09322~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001556/collection.json",
        data: [
          {
            album: ["Test"],
            center: "GSFC",
            title: "Solar Scientist Confirm Existence of Flux Ropes on the Sun",
            keywords: [
              "Solar Scientist Confirm Existence of Flux Ropes on the Sun",
              "sun",
              "nasa",
              "cme",
              "sdo",
              "fluxrope",
            ],
            location: "Greenbelt, MD",
            nasa_id: "GSFC_20171208_Archive_e001556",
            date_created: "2017-12-08T00:00:00Z",
            media_type: "image",
            description:
              "Caption: This is an image of magnetic loops on the sun, captured by NASA's Solar Dynamics Observatory (SDO).  It has been processed to highlight the edges of each loop to make the structure more clear.  A series of loops such as this is known as a flux rope, and these lie at the heart of eruptions on the sun known as coronal mass ejections (CMEs.) This is the first time scientists were able to discern the timing of a flux rope's formation.  (SDO AIA 131 and 171 difference blended image of flux ropes during CME.)  Credit: NASA/Goddard Space Flight Center/SDO  ----  On July 18, 2012, a fairly small explosion of light burst off the lower right limb of the sun. Such flares often come with an associated eruption of solar material, known as a coronal mass ejection or CME – but this one did not. Something interesting did happen, however. Magnetic field lines in this area of the sun's atmosphere, the corona, began to twist and kink, generating the hottest solar material – a charged gas called plasma – to trace out the newly-formed slinky shape. The plasma glowed brightly in extreme ultraviolet images from the Atmospheric Imaging Assembly (AIA) aboard NASA’s Solar Dynamics Observatory (SDO) and scientists were able to watch for the first time the very formation of something they had long theorized was at the heart of many eruptive events on the sun: a flux rope.  Eight hours later, on July 19, the same region flared again. This time the flux rope's connection to the sun was severed, and the magnetic fields escaped into space, dragging billions of tons of solar material along for the ride -- a classic CME.  &quot;Seeing this structure was amazing,&quot; says Angelos Vourlidas, a solar scientist at the Naval Research Laboratory in Washington, D.C. &quot;It looks exactly like the cartoon sketches theorists have been drawing of flux ropes since the 1970s. It was a series of figure eights lined up to look like a giant slinky on the sun.&quot;  <b>To read more about this new discovery go to: <a href=\"http://1.usa.gov/14UHsTt\" rel=\"nofollow\">1.usa.gov/14UHsTt</a> </b>",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001556/GSFC_20171208_Archive_e001556~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001304/collection.json",
        data: [
          {
            center: "GSFC",
            title: "Comet ISON Approaching the Sun [hd video]",
            keywords: ["Comet ISON Approaching the Sun [hd video]"],
            location: "Greenbelt, MD",
            nasa_id: "GSFC_20171208_Archive_e001304",
            date_created: "2013-11-27T18:41:58Z",
            media_type: "image",
            description:
              'This movie from NASA’s STEREO spacecraft\'s Heliospheric Imager shows Comet ISON, Mercury, Comet Encke and Earth over a five-day period from Nov. 20 to Nov. 25, 2013. The sun sits right of the field of view of this camera. Comet ISON, which will round the sun on Nov. 28, is what\'s known as a sungrazing comet, due to its close approach.  Foreshortening or the angle at which these images were obtained make Earth appear as if it is closer to the sun than Mercury. If you look closely you will also see a dimmer and smaller comet Encke near comet ISON.    A comet’s journey through the solar system is perilous and violent. A giant ejection of solar material from the sun could rip its tail off. Before it reaches Mars -- at some 230 million miles away from the sun -- the radiation of the sun begins to boil its water, the first step toward breaking apart. And, if it survives all this, the intense radiation and pressure as it flies near the surface of the sun could destroy it altogether.   Even if the comet does not survive, tracking its journey will help scientists understand what the comet is made of, how it reacts to its environment, and what this explains about the origins of the solar system. Closer to the sun, watching how the comet and its tail interact with the vast solar atmosphere can teach scientists more about the sun itself.   Image Credit: NASA/STEREO  <b><a href="http://www.nasa.gov/audience/formedia/features/MP_Photo_Guidelines.html" rel="nofollow">NASA image use policy.</a></b>   <b><a href="http://www.nasa.gov/centers/goddard/home/index.html" rel="nofollow">NASA Goddard Space Flight Center</a></b> enables NASA’s mission through four scientific endeavors: Earth Science, Heliophysics, Solar System Exploration, and Astrophysics. Goddard plays a leading role in NASA’s accomplishments by contributing compelling scientific knowledge to advance the Agency’s mission.   <b>Follow us on <a href="http://twitter.com/NASA_GoddardPix" rel="nofollow">Twitter</a></b>   <b>Like us on <a href="http://www.facebook.com/pages/Greenbelt-MD/NASA-Goddard/395013845897?ref=tsd" rel="nofollow">Facebook</a></b>   <b>Find us on <a href="http://instagram.com/nasagoddard?vm=grid" rel="nofollow">Instagram</a></b>',
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001304/GSFC_20171208_Archive_e001304~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001504/collection.json",
        data: [
          {
            album: ["Test"],
            center: "GSFC",
            title: "Sun Emits a Mid-Level Flare",
            keywords: [
              "Sun Emits a Mid-Level Flare",
              "sun",
              "nasa",
              "flare",
              "sdo",
            ],
            location: "Greenbelt, MD",
            nasa_id: "GSFC_20171208_Archive_e001504",
            date_created: "2017-12-08T00:00:00Z",
            media_type: "image",
            description:
              'Caption: A burst of solar material leaps off the left side of the sun in what’s known as a prominence eruption.  This image combines three images from NASA’s Solar Dynamics Observatory captured on May 3, 2013, at 1:45 pm EDT, just as an M-class solar flare from the same region was subsiding. The images include light from the 131, 171 and 304 Angstrom wavelengths.   Credit: NASA/Goddard/SDO  --- The sun emitted a mid-level solar flare, peaking at 1:32 pm EDT on May 3, 2013. Solar flares are powerful bursts of radiation. Harmful radiation from a flare cannot pass through Earth\'s atmosphere to physically affect humans on the ground, however -- when intense enough -- they can disturb the atmosphere in the layer where GPS and communications signals travel. This disrupts the radio signals for as long as the flare is ongoing, and the radio blackout for this flare has already subsided.    This flare is classified as an M5.7 class flare. M-class flares are the weakest flares that can still cause some space weather effects near Earth. Increased numbers of flares are quite common at the moment, since the sun\'s normal 11-year activity cycle is ramping up toward solar maximum, which is expected in late 2013.   Updates will be provided as they are available on the flare and whether there was an associated coronal mass ejection (CME), another solar phenomenon that can send solar particles into space and affect electronic systems in satellites and on Earth.   <b><a href="http://www.nasa.gov/audience/formedia/features/MP_Photo_Guidelines.html" rel="nofollow">NASA image use policy.</a></b>  <b><a href="http://www.nasa.gov/centers/goddard/home/index.html" rel="nofollow">NASA Goddard Space Flight Center</a></b> enables NASA’s mission through four scientific endeavors: Earth Science, Heliophysics, Solar System Exploration, and Astrophysics. Goddard plays a leading role in NASA’s accomplishments by contributing compelling scientific knowledge to advance the Agency’s mission.  <b>Follow us on <a href="http://twitter.com/NASA_GoddardPix" rel="nofollow">Twitter</a></b>  <b>Like us on <a href="http://www.facebook.com/pages/Greenbelt-MD/NASA-Goddard/395013845897?ref=tsd" rel="nofollow">Facebook</a></b>  <b>Find us on <a href="http://instagram.com/nasagoddard?vm=grid" rel="nofollow">Instagram</a></b>',
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001504/GSFC_20171208_Archive_e001504~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001505/collection.json",
        data: [
          {
            album: ["Test"],
            center: "GSFC",
            title: "Sun Emits a Mid-Level Flare",
            keywords: [
              "Sun Emits a Mid-Level Flare",
              "sun",
              "nasa",
              "flare",
              "sdo",
            ],
            location: "Greenbelt, MD",
            nasa_id: "GSFC_20171208_Archive_e001505",
            date_created: "2017-12-08T00:00:00Z",
            media_type: "image",
            description:
              'Caption: A burst of solar material leaps off the left side of the sun in what’s known as a prominence eruption.  This image combines three images from NASA’s Solar Dynamics Observatory captured on May 3, 2013, at 1:45 pm EDT, just as an M-class solar flare from the same region was subsiding. The images include light from the 131, 171 and 304 Angstrom wavelengths.   Credit: NASA/Goddard/SDO  --- The sun emitted a mid-level solar flare, peaking at 1:32 pm EDT on May 3, 2013. Solar flares are powerful bursts of radiation. Harmful radiation from a flare cannot pass through Earth\'s atmosphere to physically affect humans on the ground, however -- when intense enough -- they can disturb the atmosphere in the layer where GPS and communications signals travel. This disrupts the radio signals for as long as the flare is ongoing, and the radio blackout for this flare has already subsided.    This flare is classified as an M5.7 class flare. M-class flares are the weakest flares that can still cause some space weather effects near Earth. Increased numbers of flares are quite common at the moment, since the sun\'s normal 11-year activity cycle is ramping up toward solar maximum, which is expected in late 2013.   Updates will be provided as they are available on the flare and whether there was an associated coronal mass ejection (CME), another solar phenomenon that can send solar particles into space and affect electronic systems in satellites and on Earth.   <b><a href="http://www.nasa.gov/audience/formedia/features/MP_Photo_Guidelines.html" rel="nofollow">NASA image use policy.</a></b>  <b><a href="http://www.nasa.gov/centers/goddard/home/index.html" rel="nofollow">NASA Goddard Space Flight Center</a></b> enables NASA’s mission through four scientific endeavors: Earth Science, Heliophysics, Solar System Exploration, and Astrophysics. Goddard plays a leading role in NASA’s accomplishments by contributing compelling scientific knowledge to advance the Agency’s mission.  <b>Follow us on <a href="http://twitter.com/NASA_GoddardPix" rel="nofollow">Twitter</a></b>  <b>Like us on <a href="http://www.facebook.com/pages/Greenbelt-MD/NASA-Goddard/395013845897?ref=tsd" rel="nofollow">Facebook</a></b>  <b>Find us on <a href="http://instagram.com/nasagoddard?vm=grid" rel="nofollow">Instagram</a></b>',
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001505/GSFC_20171208_Archive_e001505~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001555/collection.json",
        data: [
          {
            center: "GSFC",
            title: "Solar Scientist Confirm Existence of Flux Ropes on the Sun",
            keywords: [
              "Solar Scientist Confirm Existence of Flux Ropes on the Sun",
            ],
            location: "Greenbelt, MD",
            nasa_id: "GSFC_20171208_Archive_e001555",
            date_created: "2013-02-14T17:12:13Z",
            media_type: "image",
            description:
              "Caption: This is an image of magnetic loops on the sun, captured by NASA's Solar Dynamics Observatory (SDO).  It has been processed to highlight the edges of each loop to make the structure more clear.  A series of loops such as this is known as a flux rope, and these lie at the heart of eruptions on the sun known as coronal mass ejections (CMEs.) This is the first time scientists were able to discern the timing of a flux rope's formation.  (SDO AIA 131 and 171 difference blended image of flux ropes during CME.)  Credit: NASA/Goddard Space Flight Center/SDO  ----  On July 18, 2012, a fairly small explosion of light burst off the lower right limb of the sun. Such flares often come with an associated eruption of solar material, known as a coronal mass ejection or CME – but this one did not. Something interesting did happen, however. Magnetic field lines in this area of the sun's atmosphere, the corona, began to twist and kink, generating the hottest solar material – a charged gas called plasma – to trace out the newly-formed slinky shape. The plasma glowed brightly in extreme ultraviolet images from the Atmospheric Imaging Assembly (AIA) aboard NASA’s Solar Dynamics Observatory (SDO) and scientists were able to watch for the first time the very formation of something they had long theorized was at the heart of many eruptive events on the sun: a flux rope.  Eight hours later, on July 19, the same region flared again. This time the flux rope's connection to the sun was severed, and the magnetic fields escaped into space, dragging billions of tons of solar material along for the ride -- a classic CME.  &quot;Seeing this structure was amazing,&quot; says Angelos Vourlidas, a solar scientist at the Naval Research Laboratory in Washington, D.C. &quot;It looks exactly like the cartoon sketches theorists have been drawing of flux ropes since the 1970s. It was a series of figure eights lined up to look like a giant slinky on the sun.&quot;  <b>To read more about this new discovery go to: <a href=\"http://1.usa.gov/14UHsTt\" rel=\"nofollow\">1.usa.gov/14UHsTt</a> </b>",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001555/GSFC_20171208_Archive_e001555~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001025/collection.json",
        data: [
          {
            center: "GSFC",
            title: "Comet Jacques Approaches the Sun [video]",
            keywords: ["Comet Jacques Approaches the Sun [video]"],
            location: "Greenbelt, MD",
            nasa_id: "GSFC_20171208_Archive_e001025",
            date_created: "2014-07-24T12:56:52Z",
            media_type: "image",
            description:
              'NASA\'s Solar TErrestrial RElations Observatory, STEREO has observed the recently discovered Comet Jacques as it passed by its nearest approach to the Sun (July 1-6, 2014). The wide field instrument on board STEREO (Ahead) showed the comet with its elongated tail being stretched and pummeled by the gusty solar wind streaming from the Sun. Also visible near the center of the image is the bright planet Venus. The Sun is just out of the field of view to the right. Comet Jacques is traveling through space at about 180,000 km per hour (110,000 mph). It may brighten enough to be seen with the naked eye.   Video of this event here: <a href="https://www.flickr.com/photos/gsfc/14730658164/">www.flickr.com/photos/gsfc/14730658164/</a>  Download original file: <a href="http://sohowww.nascom.nasa.gov/pickoftheweek/old/11jul2014/" rel="nofollow">sohowww.nascom.nasa.gov/pickoftheweek/old/11jul2014/</a>  Credit: NASA/Goddard/STEREO  <b><a href="http://www.nasa.gov/audience/formedia/features/MP_Photo_Guidelines.html" rel="nofollow">NASA image use policy.</a></b>    <b><a href="http://www.nasa.gov/centers/goddard/home/index.html" rel="nofollow">NASA Goddard Space Flight Center</a></b> enables NASA’s mission through four scientific endeavors: Earth Science, Heliophysics, Solar System Exploration, and Astrophysics. Goddard plays a leading role in NASA’s accomplishments by contributing compelling scientific knowledge to advance the Agency’s mission.  <b>Follow us on <a href="http://twitter.com/NASAGoddardPix" rel="nofollow">Twitter</a></b>  <b>Like us on <a href="http://www.facebook.com/pages/Greenbelt-MD/NASA-Goddard/395013845897?ref=tsd" rel="nofollow">Facebook</a></b>  <b>Find us on <a href="http://instagram.com/nasagoddard?vm=grid" rel="nofollow">Instagram</a></b>',
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001025/GSFC_20171208_Archive_e001025~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001297/collection.json",
        data: [
          {
            center: "GSFC",
            title: "Comet ISON Swoops Around the Sun",
            keywords: ["Comet ISON Swoops Around the Sun"],
            location: "Greenbelt, MD",
            nasa_id: "GSFC_20171208_Archive_e001297",
            date_created: "2013-12-02T16:59:07Z",
            media_type: "image",
            description:
              'Comet ISON swoops around the sun and through Scorpius. This composite merges an SDO AIA 171 sun image (Nov. 28, 2214 UT), SOHO C2 (2036 UT) and C3 (2030 UT) images, and a DSS view of the sky in northern Scorpius.   Credit: NASA/ESA/SOHO, NASA/SDO, DSS, and Francis Reddy  <b><a href="http://www.nasa.gov/audience/formedia/features/MP_Photo_Guidelines.html" rel="nofollow">NASA image use policy.</a></b>  <b><a href="http://www.nasa.gov/centers/goddard/home/index.html" rel="nofollow">NASA Goddard Space Flight Center</a></b> enables NASA’s mission through four scientific endeavors: Earth Science, Heliophysics, Solar System Exploration, and Astrophysics. Goddard plays a leading role in NASA’s accomplishments by contributing compelling scientific knowledge to advance the Agency’s mission.  <b>Follow us on <a href="http://twitter.com/NASA_GoddardPix" rel="nofollow">Twitter</a></b>  <b>Like us on <a href="http://www.facebook.com/pages/Greenbelt-MD/NASA-Goddard/395013845897?ref=tsd" rel="nofollow">Facebook</a></b>  <b>Find us on <a href="http://instagram.com/nasagoddard?vm=grid" rel="nofollow">Instagram</a></b>',
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001297/GSFC_20171208_Archive_e001297~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e002035/collection.json",
        data: [
          {
            album: ["Test"],
            center: "GSFC",
            title: "Full disk view of the sun June 21, 2010",
            keywords: [
              "Full disk view of the sun June 21, 2010",
              "summer",
              "sun",
              "solar",
              "nasa",
              "goddardspaceflightcenter",
              "satelliteviewofthesun",
              "summersolstice2010",
            ],
            location: "Greenbelt, MD",
            nasa_id: "GSFC_20171208_Archive_e002035",
            date_created: "2017-12-08T00:00:00Z",
            media_type: "image",
            description:
              'Full disk view of the sun from SDO, telescope AIA 335 on June 2, 2010.  To learn more about SDO go to:  <a href="http://sdo.gsfc.nasa.gov/" rel="nofollow">sdo.gsfc.nasa.gov/</a>  <b><a href="http://www.nasa.gov/centers/goddard/home/index.html" rel="nofollow">NASA Goddard Space Flight Center</a></b>  is home to the nation\'s largest organization of combined scientists, engineers and technologists that build spacecraft, instruments and new technology to study the Earth, the sun, our solar system, and the universe.',
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e002035/GSFC_20171208_Archive_e002035~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA00386/collection.json",
        data: [
          {
            center: "JPL",
            title: "Example of Weathering And Sun Angle",
            nasa_id: "PIA00386",
            date_created: "1996-12-12T03:03:12Z",
            keywords: ["Mars", "Viking"],
            media_type: "image",
            description_508: "Example of Weathering And Sun Angle",
            secondary_creator: "NASA/JPL",
            description:
              "The letter 'B' or perhaps the figure '8' appears to have been etched into the Mars rock at the left edge of this picture taken yesterday by NASA's Viking 1 Lander. It is believed to be an illusion caused by weathering processes and the angle of the sun as it illuminated the scene for the spacecraft camera. The object at lower left is the housing containing the surface sampler scoop.  http://photojournal.jpl.nasa.gov/catalog/PIA00386",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA00386/PIA00386~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e002106/collection.json",
        data: [
          {
            album: ["Test"],
            center: "GSFC",
            title: "Sputtering, Surging Sun [HD Video]",
            keywords: [
              "Sputtering, Surging Sun [HD Video]",
              "sun",
              "nasa",
              "springequinox",
              "sunearthday",
              "nasasunearthday",
            ],
            location: "Greenbelt, MD",
            nasa_id: "GSFC_20171208_Archive_e002106",
            date_created: "2017-12-08T00:00:00Z",
            media_type: "image",
            description:
              'STEREO (Ahead) caught the action as one edge of a single active region spurted out more than a dozen surges of plasma in less than two days (Feb. 15-16, 2010). As seen in extreme UV light, the surges were narrow and directional outbursts driven by intense magnetic activity in the active region. While these kinds of outbursts have been observed numerous times, it was the frequency of so many surges in a short span of time that caught our attention. In this wavelength of UV light we are seeing singly ionized Helium at about 60,000 degrees C.  For more information:  <a href="http://stereo.gsfc.nasa.gov/" rel="nofollow">stereo.gsfc.nasa.gov/</a>  Credit: NASA/GSFC/STEREO  To learn more about NASA\'s Sun Earth Day go here:  <a href="http://sunearthday.nasa.gov/2010/index.php" rel="nofollow">sunearthday.nasa.gov/2010/index.php</a>',
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e002106/GSFC_20171208_Archive_e002106~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA22197/collection.json",
        data: [
          {
            center: "JPL",
            title: "The Sun Forms a Question",
            keywords: [
              "Solar Dynamics Observatory (SDO)",
              "Sun",
              "coronal hole",
            ],
            nasa_id: "PIA22197",
            date_created: "2017-12-29T00:00:00Z",
            media_type: "image",
            description_508:
              "NASA's Solar Dynamics Observatory observed an elongated coronal hole (the darker area near the center) seeming to shape itself into a single, recognizable question mark over the period of one day (Dec. 21-22, 2017).",
            secondary_creator: "NASA/GSFC/Solar Dynamics Observatory",
            description:
              "Oddly enough, an elongated coronal hole (the darker area near the center) seems to shape itself into a single, recognizable question mark over the period of one day (Dec. 21-22, 2017). Coronal holes are areas of open magnetic field that appear darker in extreme ultraviolet light, as is seen here. These holes are the source of streaming plasma that we call solar wind. While this exercise is akin to seeing shapes in clouds, it is fun to consider what the sun might be asking? Perhaps what the new year will bring? Guess what I am going to do next?  Movies are available at https://photojournal.jpl.nasa.gov/catalog/PIA22197",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA22197/PIA22197~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001510/collection.json",
        data: [
          {
            album: ["Test"],
            center: "GSFC",
            title: "Gigantic Rolling Wave Captured on the Sun",
            keywords: [
              "Gigantic Rolling Wave Captured on the Sun",
              "sun",
              "nasa",
              "cme",
              "sdo",
            ],
            location: "Greenbelt, MD",
            nasa_id: "GSFC_20171208_Archive_e001510",
            date_created: "2017-12-08T00:00:00Z",
            media_type: "image",
            description:
              'A coronal mass ejection (CME) erupted from just around the edge of the sun on May 1, 2013, in a gigantic rolling wave. CMEs can shoot over a billion tons of particles into space at over a million miles per hour. This CME occurred on the sun’s limb and is not headed toward Earth. The video (seen here: <a href="http://bit.ly/103whUl" rel="nofollow">bit.ly/103whUl</a>), taken in extreme ultraviolet light by NASA’s Solar Dynamics Observatory (SDO), covers about two and a half hours.  Credit: NASA/Goddard/SDO  <b><a href="http://www.nasa.gov/audience/formedia/features/MP_Photo_Guidelines.html" rel="nofollow">NASA image use policy.</a></b>  <b><a href="http://www.nasa.gov/centers/goddard/home/index.html" rel="nofollow">NASA Goddard Space Flight Center</a></b> enables NASA’s mission through four scientific endeavors: Earth Science, Heliophysics, Solar System Exploration, and Astrophysics. Goddard plays a leading role in NASA’s accomplishments by contributing compelling scientific knowledge to advance the Agency’s mission.  <b>Follow us on <a href="http://twitter.com/NASA_GoddardPix" rel="nofollow">Twitter</a></b>  <b>Like us on <a href="http://www.facebook.com/pages/Greenbelt-MD/NASA-Goddard/395013845897?ref=tsd" rel="nofollow">Facebook</a></b>  <b>Find us on <a href="http://instagram.com/nasagoddard?vm=grid" rel="nofollow">Instagram</a></b>',
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001510/GSFC_20171208_Archive_e001510~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA09321/collection.json",
        data: [
          {
            center: "JPL",
            title: "Full Disk Image of the Sun, March 26, 2007 Anaglyph",
            nasa_id: "PIA09321",
            date_created: "2007-04-27T14:50:01Z",
            keywords: ["Sun", "Solar TErrestrial RElations Observatory STEREO"],
            media_type: "image",
            description_508:
              "NASA Solar TErrestrial RElations Observatory STEREO satellites have provided the first three-dimensional images of the Sun. The structure of the corona shows well in this image. 3D glasses are necessary to view this image.",
            secondary_creator: "NASA/JPL-Caltech/NRL/GSFC",
            description:
              "NASA Solar TErrestrial RElations Observatory STEREO satellites have provided the first three-dimensional images of the Sun. The structure of the corona shows well in this image. 3D glasses are necessary to view this image.",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA09321/PIA09321~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA09333/collection.json",
        data: [
          {
            center: "JPL",
            title:
              "Left Limb of North Pole of the Sun, March 20, 2007 Anaglyph",
            nasa_id: "PIA09333",
            date_created: "2007-04-27T14:50:13Z",
            keywords: ["Sun", "Solar TErrestrial RElations Observatory STEREO"],
            media_type: "image",
            description_508:
              "NASA Solar TErrestrial RElations Observatory satellites have provided the first 3-dimensional images of the Sun. This view will aid scientists ability to understand solar physics to improve space weather forecasting. 3D glasses are necessary.",
            secondary_creator: "NASA/JPL-Caltech/NRL/GSFC",
            description:
              "NASA Solar TErrestrial RElations Observatory satellites have provided the first 3-dimensional images of the Sun. This view will aid scientists ability to understand solar physics to improve space weather forecasting. 3D glasses are necessary.",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA09333/PIA09333~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA09323/collection.json",
        data: [
          {
            center: "JPL",
            title:
              "Close-up View of an Active Region of the Sun, March 23, 2007 Anaglyph",
            nasa_id: "PIA09323",
            date_created: "2007-04-27T14:50:03Z",
            keywords: ["Sun", "Solar TErrestrial RElations Observatory STEREO"],
            media_type: "image",
            description_508:
              "NASA Solar TErrestrial RElations Observatory satellites have provided the first 3-dimensional images of the Sun. This view will aid scientists ability to understand solar physics to improve space weather forecasting. 3D glasses are necessary.",
            secondary_creator: "NASA/JPL-Caltech/NRL/GSFC",
            description:
              "NASA Solar TErrestrial RElations Observatory satellites have provided the first 3-dimensional images of the Sun. This view will aid scientists ability to understand solar physics to improve space weather forecasting. 3D glasses are necessary.",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA09323/PIA09323~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA09324/collection.json",
        data: [
          {
            center: "JPL",
            title:
              "Closer View of the Equatorial Region of the Sun, March 24, 2007",
            nasa_id: "PIA09324",
            date_created: "2007-04-27T14:50:04Z",
            keywords: ["Sun", "Solar TErrestrial RElations Observatory STEREO"],
            media_type: "image",
            description_508:
              "NASA Solar TErrestrial RElations Observatory satellites have provided the first 3-dimensional images of the Sun. This view will aid scientists ability to understand solar physics to improve space weather forecasting. ",
            secondary_creator: "NASA/JPL-Caltech/NRL/GSFC",
            description:
              "NASA Solar TErrestrial RElations Observatory satellites have provided the first 3-dimensional images of the Sun. This view will aid scientists ability to understand solar physics to improve space weather forecasting. ",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA09324/PIA09324~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA09325/collection.json",
        data: [
          {
            center: "JPL",
            title:
              "Closer View of the Equatorial Region of the Sun, March 24, 2007 Anaglyph",
            nasa_id: "PIA09325",
            date_created: "2007-04-27T14:50:05Z",
            keywords: ["Sun", "Solar TErrestrial RElations Observatory STEREO"],
            media_type: "image",
            description_508:
              "NASA Solar TErrestrial RElations Observatory satellites have provided the first 3-dimensional images of the Sun. This view will aid scientists ability to understand solar physics to improve space weather forecasting. 3D glasses are necessary.",
            secondary_creator: "NASA/JPL-Caltech/NRL/GSFC",
            description:
              "NASA Solar TErrestrial RElations Observatory satellites have provided the first 3-dimensional images of the Sun. This view will aid scientists ability to understand solar physics to improve space weather forecasting. 3D glasses are necessary.",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA09325/PIA09325~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA09326/collection.json",
        data: [
          {
            center: "JPL",
            title: "Right Limb of the South Pole of the Sun, March 18, 2007",
            nasa_id: "PIA09326",
            date_created: "2007-04-27T14:50:06Z",
            keywords: ["Sun", "Solar TErrestrial RElations Observatory STEREO"],
            media_type: "image",
            description_508:
              "NASA Solar TErrestrial RElations Observatory satellites have provided the first 3-dimensional images of the Sun. This view will aid scientists ability to understand solar physics to improve space weather forecasting. ",
            secondary_creator: "NASA/JPL-Caltech/NRL/GSFC",
            description:
              "NASA Solar TErrestrial RElations Observatory satellites have provided the first 3-dimensional images of the Sun. This view will aid scientists ability to understand solar physics to improve space weather forecasting. ",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA09326/PIA09326~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA09327/collection.json",
        data: [
          {
            center: "JPL",
            title:
              "Right Limb of the South Pole of the Sun, March 18, 2007 Anaglyph",
            nasa_id: "PIA09327",
            date_created: "2007-04-27T14:50:07Z",
            keywords: ["Sun", "Solar TErrestrial RElations Observatory STEREO"],
            media_type: "image",
            description_508:
              "NASA Solar TErrestrial RElations Observatory satellites have provided the first 3-dimensional images of the Sun. This view will aid scientists ability to understand solar physics to improve space weather forecasting. 3D glasses are necessary.",
            secondary_creator: "NASA/JPL-Caltech/NRL/GSFC",
            description:
              "NASA Solar TErrestrial RElations Observatory satellites have provided the first 3-dimensional images of the Sun. This view will aid scientists ability to understand solar physics to improve space weather forecasting. 3D glasses are necessary.",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA09327/PIA09327~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA09332/collection.json",
        data: [
          {
            center: "JPL",
            title: "Left Limb of North Pole of the Sun, March 20, 2007",
            nasa_id: "PIA09332",
            date_created: "2007-04-27T14:50:12Z",
            keywords: ["Sun", "Solar TErrestrial RElations Observatory STEREO"],
            media_type: "image",
            description_508:
              "NASA Solar TErrestrial RElations Observatory satellites have provided the first 3-dimensional images of the Sun. This view will aid scientists ability to understand solar physics to improve space weather forecasting. ",
            secondary_creator: "NASA/JPL-Caltech/NRL/GSFC",
            description:
              "NASA Solar TErrestrial RElations Observatory satellites have provided the first 3-dimensional images of the Sun. This view will aid scientists ability to understand solar physics to improve space weather forecasting. ",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA09332/PIA09332~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001554/collection.json",
        data: [
          {
            album: ["Test"],
            center: "GSFC",
            title: "Solar Scientist Confirm Existence of Flux Ropes on the Sun",
            keywords: [
              "Solar Scientist Confirm Existence of Flux Ropes on the Sun",
              "sun",
              "solar",
              "earth",
              "nasa",
              "goddard",
              "cme",
              "fluxropes",
            ],
            location: "Greenbelt, MD",
            nasa_id: "GSFC_20171208_Archive_e001554",
            date_created: "2017-12-08T00:00:00Z",
            media_type: "image",
            description:
              'Caption: This is an image of magnetic loops on the sun, captured by NASA\'s Solar Dynamics Observatory on July 18, 2012.  It has been processed to highlight the edges of each loop to  make the structure more clear.  A series of loops such as this is known as a flux rope, and these lie at the heart of eruptions on the sun known as coronal mass ejections (CMEs.) This is the first time scientists were able to discern the timing of a flux rope\'s formation.   Credit: NASA/Goddard Space Flight Center/SDO  ----  On July 18, 2012, a fairly small explosion of light burst off the lower right limb of the sun. Such flares often come with an associated eruption of solar material, known as a coronal mass ejection or CME – but this one did not. Something interesting did happen, however. Magnetic field lines in this area of the sun\'s atmosphere, the corona, began to twist and kink, generating the hottest solar material – a charged gas called plasma – to trace out the newly-formed slinky shape. The plasma glowed brightly in extreme ultraviolet images from the Atmospheric Imaging Assembly (AIA) aboard NASA’s Solar Dynamics Observatory (SDO) and scientists were able to watch for the first time the very formation of something they had long theorized was at the heart of many eruptive events on the sun: a flux rope.  Eight hours later, on July 19, the same region flared again. This time the flux rope\'s connection to the sun was severed, and the magnetic fields escaped into space, dragging billions of tons of solar material along for the ride -- a classic CME.  &quot;Seeing this structure was amazing,&quot; says Angelos Vourlidas, a solar scientist at the Naval Research Laboratory in Washington, D.C. &quot;It looks exactly like the cartoon sketches theorists have been drawing of flux ropes since the 1970s. It was a series of figure eights lined up to look like a giant slinky on the sun.&quot;  <b>To read more about this new discovery go to: <a href="http://1.usa.gov/14UHsTt" rel="nofollow">1.usa.gov/14UHsTt</a> </b>  <b><a href="http://www.nasa.gov/audience/formedia/features/MP_Photo_Guidelines.html" rel="nofollow">NASA image use policy.</a></b>  <b><a href="http://www.nasa.gov/centers/goddard/home/index.html" rel="nofollow">NASA Goddard Space Flight Center</a></b> enables NASA’s mission through four scientific endeavors: Earth Science, Heliophysics, Solar System Exploration, and Astrophysics. Goddard plays a leading role in NASA’s accomplishments by contributing compelling scientific knowledge to advance the Agency’s mission.  <b>Follow us on <a href="http://twitter.com/NASA_GoddardPix" rel="nofollow">Twitter</a></b>  <b>Like us on <a href="http://www.facebook.com/pages/Greenbelt-MD/NASA-Goddard/395013845897?ref=tsd" rel="nofollow">Facebook</a></b>  <b>Find us on <a href="http://instagram.com/nasagoddard?vm=grid" rel="nofollow">Instagram</a></b>',
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001554/GSFC_20171208_Archive_e001554~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001363/collection.json",
        data: [
          {
            center: "GSFC",
            title: "Filament Eruption Creates 'Canyon of Fire' on the Sun",
            keywords: ["Filament Eruption Creates 'Canyon of Fire' on the Sun"],
            location: "Greenbelt, MD",
            nasa_id: "GSFC_20171208_Archive_e001363",
            date_created: "2013-10-24T17:27:46Z",
            media_type: "image",
            description:
              'A magnetic filament of solar material erupted on the sun in late September, breaking the quiet conditions in a spectacular fashion. The 200,000 mile long filament ripped through the sun\'s atmosphere, the corona, leaving behind what looks like a canyon of fire. The glowing canyon traces the channel where magnetic fields held the filament aloft before the explosion. Visualizers at NASA\'s Goddard Space Flight Center in Greenbelt, Md. combined two days of satellite data to create a short movie of this gigantic event on the sun: <a href="http://bit.ly/166CncU" rel="nofollow">bit.ly/166CncU</a>   In reality, the sun is not made of fire, but of something called plasma: particles so hot that their electrons have boiled off, creating a charged gas that is interwoven with magnetic fields.   These images were captured on Sept. 29-30, 2013, by NASA\'s Solar Dynamics Observatory, or SDO, which constantly observes the sun in a variety of wavelengths.    Read more/download video: <a href="http://1.usa.gov/1dnrsjF" rel="nofollow">1.usa.gov/1dnrsjF</a>   Credit: NASA/SDO   <b><a href="http://www.nasa.gov/audience/formedia/features/MP_Photo_Guidelines.html" rel="nofollow">NASA image use policy.</a></b>   <b><a href="http://www.nasa.gov/centers/goddard/home/index.html" rel="nofollow">NASA Goddard Space Flight Center</a></b> enables NASA’s mission through four scientific endeavors: Earth Science, Heliophysics, Solar System Exploration, and Astrophysics. Goddard plays a leading role in NASA’s accomplishments by contributing compelling scientific knowledge to advance the Agency’s mission.   <b>Follow us on <a href="http://twitter.com/NASA_GoddardPix" rel="nofollow">Twitter</a></b>   <b>Like us on <a href="http://www.facebook.com/pages/Greenbelt-MD/NASA-Goddard/395013845897?ref=tsd" rel="nofollow">Facebook</a></b>   <b>Find us on <a href="http://instagram.com/nasagoddard?vm=grid" rel="nofollow">Instagram</a></b>',
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001363/GSFC_20171208_Archive_e001363~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e000808/collection.json",
        data: [
          {
            center: "GSFC",
            title: "Magnetic Field Lines on the Sun",
            keywords: ["Magnetic Field Lines on the Sun"],
            location: "Greenbelt, MD",
            nasa_id: "GSFC_20171208_Archive_e000808",
            date_created: "2015-01-28T20:17:16Z",
            media_type: "image",
            description:
              'Scientists have developed a way to produce models of where the magnetic field lines are several times each day. Here we have created a time-lapse version of these models over four days (2-3 each day) to give you a peek at how these change over time. The spiraling arcs of magnetic field lines emerge from active regions and connect back to areas with the opposite polarity. The field lines are more concentrated where regions are more magnetically intense. And of course, they rotate with the rotation of the Sun.   Credit: NASA/Solar Dynamics Observatory  <b><a href="http://www.nasa.gov/audience/formedia/features/MP_Photo_Guidelines.html" rel="nofollow">NASA image use policy.</a></b>  <b><a href="http://www.nasa.gov/centers/goddard/home/index.html" rel="nofollow">NASA Goddard Space Flight Center</a></b> enables NASA’s mission through four scientific endeavors: Earth Science, Heliophysics, Solar System Exploration, and Astrophysics. Goddard plays a leading role in NASA’s accomplishments by contributing compelling scientific knowledge to advance the Agency’s mission. <b>Follow us on <a href="http://twitter.com/NASAGoddardPix" rel="nofollow">Twitter</a></b> <b>Like us on <a href="http://www.facebook.com/pages/Greenbelt-MD/NASA-Goddard/395013845897?ref=tsd" rel="nofollow">Facebook</a></b> <b>Find us on <a href="http://instagram.com/nasagoddard?vm=grid" rel="nofollow">Instagram</a></b>',
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e000808/GSFC_20171208_Archive_e000808~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001831/collection.json",
        data: [
          {
            album: ["Test"],
            center: "GSFC",
            title: "SDO Spots Extra Energy in the Sun's Corona",
            keywords: [
              "SDO Spots Extra Energy in the Sun's Corona",
              "sun",
              "space",
              "nasa",
              "sdo",
              "goddardspaceflightcenter",
            ],
            location: "Greenbelt, MD",
            nasa_id: "GSFC_20171208_Archive_e001831",
            date_created: "2017-12-08T00:00:00Z",
            media_type: "image",
            description:
              'NASA release July 27, 2011  These jets, known as spicules, were captured in an SDO image on April 25, 2010. Combined with the energy from ripples in the magnetic field, they may contain enough energy to power the solar wind that streams from the sun toward Earth at 1.5 million miles per hour.   Credit: NASA/SDO/AIA   Like giant strands of seaweed some 32,000 miles high, material shooting up from the sun sways back and forth with the atmosphere. In the ocean, it\'s moving water that pulls the seaweed along for a ride; in the sun\'s corona, magnetic field ripples called Alfvén waves cause the swaying.  For years these waves were too difficult to detect directly, but NASA\'s Solar Dynamics Observatory (SDO) is now able to track the movements of this solar &quot;seaweed&quot; and measure how much energy is carried by the Alfvén waves. The research shows that the waves carry more energy than previously thought, and possibly enough to drive two solar phenomena whose causes remain points of debate: the intense heating of the corona to some 20 times hotter than the sun\'s surface and solar winds that blast up to 1.5 million miles per hour.  &quot;SDO has amazing resolution so you can actually see individual waves,&quot; says Scott McIntosh at the National Center for Atmospheric Research in Boulder, Colo. &quot;Now we can see that instead of these waves having about 1000th the energy needed as we previously thought, it has the equivalent of about 1100W light bulb for every 11 square feet of the sun\'s surface, which is enough to heat the sun\'s atmosphere and drive the solar wind.&quot;  To read more go to: <a href="http://www.nasa.gov/mission_pages/sdo/news/alfven-waves.html" rel="nofollow">www.nasa.gov/mission_pages/sdo/news/alfven-waves.html</a>  <b><a href="http://www.nasa.gov/centers/goddard/home/index.html" rel="nofollow">NASA Goddard Space Flight Center</a></b> enables NASA’s mission through four scientific endeavors: Earth Science, Heliophysics, Solar System Exploration, and Astrophysics. Goddard plays a leading role in NASA’s accomplishments by contributing compelling scientific knowledge to advance the Agency’s mission.  <b>Follow us on <a href="http://twitter.com/NASA_GoddardPix" rel="nofollow">Twitter</a></b>  <b>Like us on <a href="http://www.facebook.com/pages/Greenbelt-MD/NASA-Goddard/395013845897?ref=tsd" rel="nofollow">Facebook</a></b>  <b>Find us on <a href="http://web.stagram.com/n/nasagoddard/?vm=grid" rel="nofollow">Instagram</a></b>',
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001831/GSFC_20171208_Archive_e001831~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001506/collection.json",
        data: [
          {
            album: ["Test"],
            center: "GSFC",
            title: "Sun Emits a Mid-Level Flare",
            keywords: [
              "Sun Emits a Mid-Level Flare",
              "sun",
              "nasa",
              "flare",
              "sdo",
            ],
            location: "Greenbelt, MD",
            nasa_id: "GSFC_20171208_Archive_e001506",
            date_created: "2017-12-08T00:00:00Z",
            media_type: "image",
            description:
              'Caption: NASA’s Solar Dynamics Observatory (SDO) captured this image of an M5.7 class flare on May 3, 2013 at 1:30 p.m. EDT. This image shows light in the 131 Angstrom wavelength, a wavelength of light that can show material at the very hot temperatures of a solar flare and that is typically colorized in teal.  Caption: NASA’s Solar Dynamics Observatory (SDO) captured this image of an M5.7 class flare on May 3, 2013 at 1:30 p.m. EDT. This image shows light in the 131 Angstrom wavelength, a wavelength of light that can show material at the very hot temperatures of a solar flare and that is typically colorized in teal.   Credit: NASA/Goddard/SDO  ---  The sun emitted a mid-level solar flare, peaking at 1:32 pm EDT on May 3, 2013. Solar flares are powerful bursts of radiation. Harmful radiation from a flare cannot pass through Earth\'s atmosphere to physically affect humans on the ground, however -- when intense enough -- they can disturb the atmosphere in the layer where GPS and communications signals travel. This disrupts the radio signals for as long as the flare is ongoing, and the radio blackout for this flare has already subsided.    This flare is classified as an M5.7 class flare. M-class flares are the weakest flares that can still cause some space weather effects near Earth. Increased numbers of flares are quite common at the moment, since the sun\'s normal 11-year activity cycle is ramping up toward solar maximum, which is expected in late 2013.   Updates will be provided as they are available on the flare and whether there was an associated coronal mass ejection (CME), another solar phenomenon that can send solar particles into space and affect electronic systems in satellites and on Earth.   <b><a href="http://www.nasa.gov/audience/formedia/features/MP_Photo_Guidelines.html" rel="nofollow">NASA image use policy.</a></b>  <b><a href="http://www.nasa.gov/centers/goddard/home/index.html" rel="nofollow">NASA Goddard Space Flight Center</a></b> enables NASA’s mission through four scientific endeavors: Earth Science, Heliophysics, Solar System Exploration, and Astrophysics. Goddard plays a leading role in NASA’s accomplishments by contributing compelling scientific knowledge to advance the Agency’s mission.  <b>Follow us on <a href="http://twitter.com/NASA_GoddardPix" rel="nofollow">Twitter</a></b>  <b>Like us on <a href="http://www.facebook.com/pages/Greenbelt-MD/NASA-Goddard/395013845897?ref=tsd" rel="nofollow">Facebook</a></b>  <b>Find us on <a href="http://instagram.com/nasagoddard?vm=grid" rel="nofollow">Instagram</a></b>',
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001506/GSFC_20171208_Archive_e001506~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001507/collection.json",
        data: [
          {
            album: ["Test"],
            center: "GSFC",
            title: "Sun Emits a Mid-Level Flare",
            keywords: [
              "Sun Emits a Mid-Level Flare",
              "sun",
              "nasa",
              "flare",
              "sdo",
            ],
            location: "Greenbelt, MD",
            nasa_id: "GSFC_20171208_Archive_e001507",
            date_created: "2017-12-08T00:00:00Z",
            media_type: "image",
            description:
              'Caption: NASA’s Solar Dynamics Observatory (SDO) captured this image of an M5.7 class flare on May 3, 2013 at 1:30 p.m. EDT. This image shows light in the 131 Angstrom wavelength, a wavelength of light that can show material at the very hot temperatures of a solar flare and that is typically colorized in teal.  Caption: NASA’s Solar Dynamics Observatory (SDO) captured this image of an M5.7 class flare on May 3, 2013 at 1:30 p.m. EDT. This image shows light in the 131 Angstrom wavelength, a wavelength of light that can show material at the very hot temperatures of a solar flare and that is typically colorized in teal.   Credit: NASA/Goddard/SDO  ---  The sun emitted a mid-level solar flare, peaking at 1:32 pm EDT on May 3, 2013. Solar flares are powerful bursts of radiation. Harmful radiation from a flare cannot pass through Earth\'s atmosphere to physically affect humans on the ground, however -- when intense enough -- they can disturb the atmosphere in the layer where GPS and communications signals travel. This disrupts the radio signals for as long as the flare is ongoing, and the radio blackout for this flare has already subsided.    This flare is classified as an M5.7 class flare. M-class flares are the weakest flares that can still cause some space weather effects near Earth. Increased numbers of flares are quite common at the moment, since the sun\'s normal 11-year activity cycle is ramping up toward solar maximum, which is expected in late 2013.   Updates will be provided as they are available on the flare and whether there was an associated coronal mass ejection (CME), another solar phenomenon that can send solar particles into space and affect electronic systems in satellites and on Earth.   <b><a href="http://www.nasa.gov/audience/formedia/features/MP_Photo_Guidelines.html" rel="nofollow">NASA image use policy.</a></b>  <b><a href="http://www.nasa.gov/centers/goddard/home/index.html" rel="nofollow">NASA Goddard Space Flight Center</a></b> enables NASA’s mission through four scientific endeavors: Earth Science, Heliophysics, Solar System Exploration, and Astrophysics. Goddard plays a leading role in NASA’s accomplishments by contributing compelling scientific knowledge to advance the Agency’s mission.  <b>Follow us on <a href="http://twitter.com/NASA_GoddardPix" rel="nofollow">Twitter</a></b>  <b>Like us on <a href="http://www.facebook.com/pages/Greenbelt-MD/NASA-Goddard/395013845897?ref=tsd" rel="nofollow">Facebook</a></b>  <b>Find us on <a href="http://instagram.com/nasagoddard?vm=grid" rel="nofollow">Instagram</a></b>',
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001507/GSFC_20171208_Archive_e001507~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA21569/collection.json",
        data: [
          {
            center: "JPL",
            title: "Spotless Sun",
            keywords: ["Solar Dynamics Observatory SDO", "sunspots"],
            nasa_id: "PIA21569",
            date_created: "2017-03-22T18:14:15Z",
            media_type: "image",
            description_508:
              "The sun has been virtually spotless, as in no sunspots, over the past 11 days, a spotless stretch that we have not seen since the last solar minimum many years ago. From NASA's SDO Mar. 14-17, 2017.",
            secondary_creator: "NASA/GSFC/Solar Dynamics Observatory",
            description:
              "The sun has been virtually spotless, as in no sunspots, over the past 11 days, a spotless stretch that we have not seen since the last solar minimum many years ago. The videos shows the past four days (Mar. 14-17, 2017) with a combination of an extreme ultraviolet image blended with just the filtered sun. If we just showed the filtered sun with no spots for reference points, any viewer would have a hard time telling that the sun was even rotating. The sun is trending again towards the solar minimum period of its 11 year cycle, which is predicted to be around 2020.  Movies are available at http://photojournal.jpl.nasa.gov/catalog/PIA21569",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA21569/PIA21569~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e000705/collection.json",
        data: [
          {
            center: "GSFC",
            title: "Sun Unleashes Mid-level Flare",
            keywords: ["Sun Unleashes Mid-level Flare"],
            location: "Greenbelt, MD",
            nasa_id: "GSFC_20171208_Archive_e000705",
            date_created: "2015-06-22T20:30:07Z",
            media_type: "image",
            description:
              'The sun emitted a mid-level solar flare, peaking at 2:23 EDT on June 22, 2015. NASA’s Solar Dynamics Observatory, which watches the sun constantly, captured an image of the event. Solar flares are powerful bursts of radiation. Harmful radiation from a flare cannot pass through Earth\'s atmosphere to physically affect humans on the ground, however -- when intense enough -- they can disturb the atmosphere in the layer where GPS and communications signals travel.  To see how this event may affect Earth, please visit NOAA\'s Space Weather Prediction Center at <a href="http://spaceweather.gov" rel="nofollow">spaceweather.gov</a>, the U.S. government\'s official source for space weather forecasts, alerts, watches and warnings.  This flare is classified as a M6.6 flare. M-class flares are a tenth the size of the most intense flares, the X-class flares. The number provides more information about its strength. An M2 is twice as intense as an M1, an M3 is three times as intense, etc.  Credit: NASA/Goddard/SDO  <b><a href="http://www.nasa.gov/audience/formedia/features/MP_Photo_Guidelines.html" rel="nofollow">NASA image use policy.</a></b>  <b><a href="http://www.nasa.gov/centers/goddard/home/index.html" rel="nofollow">NASA Goddard Space Flight Center</a></b> enables NASA’s mission through four scientific endeavors: Earth Science, Heliophysics, Solar System Exploration, and Astrophysics. Goddard plays a leading role in NASA’s accomplishments by contributing compelling scientific knowledge to advance the Agency’s mission.  <b>Follow us on <a href="http://twitter.com/NASAGoddardPix" rel="nofollow">Twitter</a></b>  <b>Like us on <a href="http://www.facebook.com/pages/Greenbelt-MD/NASA-Goddard/395013845897?ref=tsd" rel="nofollow">Facebook</a></b>  <b>Find us on <a href="http://instagrid.me/nasagoddard/?vm=grid" rel="nofollow">Instagram</a></b>',
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e000705/GSFC_20171208_Archive_e000705~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA13247/collection.json",
        data: [
          {
            center: "JPL",
            title: "Apollo 16, Footsteps Under High Sun",
            nasa_id: "PIA13247",
            date_created: "2010-07-08T20:57:52Z",
            keywords: ["Moon", "Lunar Reconnaissance Orbiter LRO"],
            media_type: "image",
            description_508: "Apollo 16, Footsteps Under High Sun",
            secondary_creator: "NASA/GSFC/Arizona State University",
            description: "Apollo 16, Footsteps Under High Sun",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA13247/PIA13247~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA00451/collection.json",
        data: [
          {
            center: "JPL",
            title: "Solar System Portrait - 60 Frame Mosaic",
            nasa_id: "PIA00451",
            date_created: "1996-09-13T14:20:44Z",
            keywords: ["Sun", "Voyager"],
            media_type: "image",
            description_508:
              "The cameras of Voyager 1 on Feb. 14, 1990, pointed back toward the sun and took a series of pictures of the sun and the planets, making the first ever portrait of our solar system as seen from the outside.",
            secondary_creator: "NASA/JPL",
            description:
              "The cameras of Voyager 1 on Feb. 14, 1990, pointed back toward the sun and took a series of pictures of the sun and the planets, making the first ever portrait of our solar system as seen from the outside.  In the course of taking this mosaic consisting of a total of 60 frames, Voyager 1 made several images of the inner solar system from a distance of approximately 4 billion miles and about 32 degrees above the ecliptic plane. Thirty-nine wide angle frames link together six of the planets of our solar system in this mosaic. Outermost Neptune is 30 times further from the sun than Earth. Our sun is seen as the bright object in the center of the circle of frames. The wide-angle image of the sun was taken with the camera's darkest filter (a methane absorption band) and the shortest possible exposure (5 thousandths of a second) to avoid saturating the camera's vidicon tube with scattered sunlight. The sun is not large as seen from Voyager, only about one-fortieth of the diameter as seen from Earth, but is still almost 8 million times brighter than the brightest star in Earth's sky, Sirius. The result of this great brightness is an image with multiple reflections from the optics in the camera. Wide-angle images surrounding the sun also show many artifacts attributable to scattered light in the optics. These were taken through the clear filter with one second exposures. The insets show the planets magnified many times. Narrow-angle images of Earth, Venus, Jupiter, Saturn, Uranus and Neptune were acquired as the spacecraft built the wide-angle mosaic. Jupiter is larger than a narrow-angle pixel and is clearly resolved, as is Saturn with its rings. Uranus and Neptune appear larger than they really are because of image smear due to spacecraft motion during the long (15 second) exposures. From Voyager's great distance Earth and Venus are mere points of light, less than the size of a picture element even in the narrow-angle camera. Earth was a crescent only 0.12 pixel in size. Coincidentally, Earth lies right in the center of one of the scattered light rays resulting from taking the image so close to the sun.  http://photojournal.jpl.nasa.gov/catalog/PIA00451",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA00451/PIA00451~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001916/collection.json",
        data: [
          {
            album: ["Test"],
            center: "GSFC",
            title:
              "Hotspots in Fountains on the Sun's Surface Help Explain Coronal Heating Mystery",
            keywords: [
              "Hotspots in Fountains on the Sun's Surface Help Explain Coronal Heating Mystery",
              "sun",
              "nasa",
              "sdo",
              "spicules",
              "goddardspaceflightcenter",
            ],
            location: "Greenbelt, MD",
            nasa_id: "GSFC_20171208_Archive_e001916",
            date_created: "2017-12-08T00:00:00Z",
            media_type: "image",
            description:
              'NASA image release January 6, 2010  Caption: Spicules on the sun, as observed by the Solar Dynamics Observatory. These bursts of gas jet off the surface of the sun at 150,000 miles per hour and contain gas that reaches temperatures over a million degrees.  GREENBELT, Md. -- Observations from NASA\'s Solar Dynamics Observatory (SDO) and the Japanese satellite Hinode show that some gas in the giant, fountain-like jets in the sun\'s atmosphere known as spicules can reach temperatures of millions of degrees. The finding offers a possible new framework for how the sun\'s high atmosphere gets so much hotter than the surface of the sun.   What makes the high atmosphere, or corona, so hot – over a million degrees, compared to the sun surface\'s 10,000 degrees Fahrenheit -- remains a poorly understood aspect of the sun\'s complicated space weather system. That weather system can reach Earth, causing auroral lights and, if strong enough, disrupting Earth\'s communications and power systems. Understanding such phenomena, therefore, is an important step towards better protecting our satellites and power grids.   &quot;The traditional view is that all the heating happens higher up in the corona,&quot; says Dean Pesnell, who is SDO\'s project scientist at NASA\'s Goddard Space Flight Center in Greenbelt, Md. &quot;The suggestion in this paper is that cool gas is being ejected from the sun\'s surface in spicules and getting heated on its way to the corona.&quot;  Spicules were first named in the 1940s, but were hard to study in detail until recently, says Bart De Pontieu of Lockheed Martin\'s Solar and Astrophysics Laboratory, Palo Alto, Calif. who is the lead author on a paper on this subject in the January 7, 2011 issue of Science magazine.   In visible light, spicules can be seen to send large masses of so-called plasma – the electromagnetic gas that surrounds the sun – up through the lower solar atmosphere or photosphere. The amount of material sent up is stunning, some 100 times as much as streams away from the sun in the solar wind towards the edges of the solar system. But nobody knew if they contained hot gas.  &quot;Heating of spicules to the necessary hot temperatures has never been observed, so their role in coronal heating had been dismissed as unlikely,&quot; says De Pontieu.   Now, De Pontieu\'s team -- which included researchers at Lockheed Martin, the High Altitude Observatory of the National Center for Atmospheric Research (NCAR) in Colorado and the University of Oslo, Norway -- was able to combine images from SDO and Hinode to produce a more complete picture of the gas inside these gigantic fountains.   The scientists found that a large fraction of the gas is heated to a hundred thousand degrees, while a small fraction is heated to millions of degrees. Time-lapsed images show that this material spews up into the corona, with most falling back down towards the surface of the sun. However, the small fraction of the gas that is heated to millions of degrees does not immediately return to the surface. Given the large number of spicules on the Sun, and the amount of material in the spicules, the scientists believe that if even some of that super hot plasma stays aloft it would make a contribution to coronal heating.   Astrophysicist Jonathan Cirtain, who is the U.S. project scientist for Hinode at NASA\'s Marshall Space Flight Center, Huntsville, Ala., says that incorporating such new information helps address an important question that reaches far beyond the sun. &quot;This breakthrough in our understanding of the mechanisms which transfer energy from the solar photosphere to the corona addresses one of the most compelling questions in stellar astrophysics: How is the atmosphere of a star heated?&quot; he says. &quot;This is a fantastic discovery, and demonstrates the muscle of the NASA Heliophysics System Observatory, comprised of numerous instruments on multiple observatories.&quot;  Hinode is the second mission in NASA\'s Solar Terrestrial Probes program, the goal of which is to improve understanding of fundamental solar and space physics processes. The mission is led by the Japan Aerospace Exploration Agency (JAXA) and the National Astronomical Observatory of Japan (NAOJ). The collaborative mission includes the U.S., the United Kingdom, Norway and Europe. NASA Marshall manages Hinode U.S. science operations and oversaw development of the scientific instrumentation provided for the mission by NASA, academia and industry. The Lockheed Martin Advanced Technology Center is the lead U.S. investigator for the Solar Optical Telescope on Hinode.  SDO is the first mission in a NASA science program called Living With a Star, the goal of which is to develop the scientific understanding necessary to address those aspects of the sun-Earth system that directly affect our lives and society. NASA Goddard built, operates, and manages the SDO spacecraft for NASA\'s Science Mission Directorate in Washington.   To learn more go to: <a href="http://www.nasa.gov/mission_pages/sdo/news/news20110106-spicules.html" rel="nofollow">www.nasa.gov/mission_pages/sdo/news/news20110106-spicules...</a>  Credit: NASA Goddard/SDO/AIA  <b><a href="http://www.nasa.gov/centers/goddard/home/index.html" rel="nofollow">NASA Goddard Space Flight Center</a></b> enables NASA’s mission through four scientific endeavors: Earth Science, Heliophysics, Solar System Exploration, and Astrophysics. Goddard plays a leading role in NASA’s accomplishments by contributing compelling scientific knowledge to advance the Agency’s mission.  <b>Follow us on <a href="http://twitter.com/NASA_GoddardPix" rel="nofollow">Twitter</a></b>  <b>Join us on <a href="http://www.facebook.com/pages/Greenbelt-MD/NASA-Goddard/395013845897?ref=tsd" rel="nofollow">Facebook</a></b>',
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001916/GSFC_20171208_Archive_e001916~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e000991/collection.json",
        data: [
          {
            album: ["Test"],
            center: "GSFC",
            title: "A Significant Flare Surges Off the Sun",
            keywords: [
              "A Significant Flare Surges Off the Sun",
              "sun",
              "nasa",
              "flare",
              "nasagoddard",
            ],
            location: "Greenbelt, MD",
            nasa_id: "GSFC_20171208_Archive_e000991",
            date_created: "2017-12-08T00:00:00Z",
            media_type: "image",
            description:
              'The sun emitted a significant solar flare, peaking at 1:48 p.m. EDT on Sept. 10, 2014. NASA\'s Solar Dynamics Observatory captured images of the event. Solar flares are powerful bursts of radiation. Harmful radiation from a flare cannot pass through Earth\'s atmosphere to physically affect humans on the ground.  However -- when intense enough -- they can disturb the atmosphere in the layer where GPS and communications signals travel.  To see how this event may affect Earth, please visit NOAA\'s Space Weather Prediction Center at <a href="http://spaceweather.gov" rel="nofollow">spaceweather.gov</a>, the U.S. government\'s official source for space weather forecasts, alerts, watches and warnings.  This flare is classified as an X1.6 class flare. &quot;X-class&quot; denotes the most intense flares, while the number provides more information about its strength. An X2 is twice as intense as an X1, an X3 is three times as intense, etc.   Credit: NASA/Goddard/SDO  <b><a href="http://www.nasa.gov/audience/formedia/features/MP_Photo_Guidelines.html" rel="nofollow">NASA image use policy.</a></b>  <b><a href="http://www.nasa.gov/centers/goddard/home/index.html" rel="nofollow">NASA Goddard Space Flight Center</a></b> enables NASA’s mission through four scientific endeavors: Earth Science, Heliophysics, Solar System Exploration, and Astrophysics. Goddard plays a leading role in NASA’s accomplishments by contributing compelling scientific knowledge to advance the Agency’s mission. <b>Follow us on <a href="http://twitter.com/NASAGoddardPix" rel="nofollow">Twitter</a></b> <b>Like us on <a href="http://www.facebook.com/pages/Greenbelt-MD/NASA-Goddard/395013845897?ref=tsd" rel="nofollow">Facebook</a></b> <b>Find us on <a href="http://instagram.com/nasagoddard?vm=grid" rel="nofollow">Instagram</a></b>',
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e000991/GSFC_20171208_Archive_e000991~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001662/collection.json",
        data: [
          {
            album: ["Test"],
            center: "GSFC",
            title: "Magnificent CME Erupts on the Sun - August 31",
            keywords: [
              "Magnificent CME Erupts on the Sun - August 31",
              "sun",
              "nasa",
              "goddard",
              "cme",
              "sdo",
            ],
            location: "Greenbelt, MD",
            nasa_id: "GSFC_20171208_Archive_e001662",
            date_created: "2017-12-08T00:00:00Z",
            media_type: "image",
            description:
              'Solar Flare Extremely energetic objects permeate the universe. But close to home, the sun produces its own dazzling lightshow, producing the largest explosions in our solar system and driving powerful solar storms.. When solar activity contorts and realigns the sun’s magnetic fields, vast amounts of energy can be driven into space. This phenomenon can create a sudden flash of light—a solar flare.   Flares typically last a few minutes and unleash energies equivalent to millions of hydrogen bombs. The above picture features a filament eruption on the sun, accompanied by solar flares.  To learn more about solar flares, go to NASA’s SDO mission: <a href="http://www.nasa.gov/sdo" rel="nofollow">www.nasa.gov/sdo</a>   --------------------------------- Original caption: <b>Click here to view an image showing the size of this CME compared to the size of Earth: <a href="http://bit.ly/RkYr7z" rel="nofollow">bit.ly/RkYr7z</a> </b>  On August 31, 2012 a long filament of solar material that had been hovering in the sun\'s atmosphere, the corona, erupted out into space at 4:36 p.m. EDT. The coronal mass ejection, or CME, traveled at over 900 miles per second. The CME did not travel directly toward Earth, but did connect with Earth\'s magnetic environment, or magnetosphere, causing aurora to appear on the night of Monday, September 3.   Pictured here is a lighten blended version of the 304 and 171 angstrom wavelengths. Cropped  Credit: NASA/GSFC/SDO  <b><a href="http://www.nasa.gov/audience/formedia/features/MP_Photo_Guidelines.html" rel="nofollow">NASA image use policy.</a></b>  <b><a href="http://www.nasa.gov/centers/goddard/home/index.html" rel="nofollow">NASA Goddard Space Flight Center</a></b> enables NASA’s mission through four scientific endeavors: Earth Science, Heliophysics, Solar System Exploration, and Astrophysics. Goddard plays a leading role in NASA’s accomplishments by contributing compelling scientific knowledge to advance the Agency’s mission.  <b>Follow us on <a href="http://twitter.com/NASA_GoddardPix" rel="nofollow">Twitter</a></b>  <b>Like us on <a href="http://www.facebook.com/pages/Greenbelt-MD/NASA-Goddard/395013845897?ref=tsd" rel="nofollow">Facebook</a></b>  <b>Find us on <a href="http://instagrid.me/nasagoddard/?vm=grid" rel="nofollow">Instagram</a></b>',
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001662/GSFC_20171208_Archive_e001662~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001516/collection.json",
        data: [
          {
            album: ["Test"],
            center: "GSFC",
            title: "Gigantic Rolling Wave Captured on the Sun [hd video]",
            keywords: [
              "Gigantic Rolling Wave Captured on the Sun [hd video]",
              "sun",
              "nasa",
              "cme",
              "sdo",
            ],
            location: "Greenbelt, MD",
            nasa_id: "GSFC_20171208_Archive_e001516",
            date_created: "2017-12-08T00:00:00Z",
            media_type: "image",
            description:
              'A corona mass ejection (CME) erupted from just around the edge of the sun on May 1, 2013, in a gigantic rolling wave. CMEs can shoot over a billion tons of particles into space at over a million miles per hour. This CME occurred on the sun’s limb and is not headed toward Earth. The video, taken in extreme ultraviolet light by NASA’s Solar Dynamics Observatory (SDO), covers about two and a half hours.  Credit: NASA/Goddard/SDO  <b><a href="http://www.nasa.gov/audience/formedia/features/MP_Photo_Guidelines.html" rel="nofollow">NASA image use policy.</a></b>  <b><a href="http://www.nasa.gov/centers/goddard/home/index.html" rel="nofollow">NASA Goddard Space Flight Center</a></b> enables NASA’s mission through four scientific endeavors: Earth Science, Heliophysics, Solar System Exploration, and Astrophysics. Goddard plays a leading role in NASA’s accomplishments by contributing compelling scientific knowledge to advance the Agency’s mission.  <b>Follow us on <a href="http://twitter.com/NASA_GoddardPix" rel="nofollow">Twitter</a></b>  <b>Like us on <a href="http://www.facebook.com/pages/Greenbelt-MD/NASA-Goddard/395013845897?ref=tsd" rel="nofollow">Facebook</a></b>  <b>Find us on <a href="http://instagram.com/nasagoddard?vm=grid" rel="nofollow">Instagram</a></b>',
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001516/GSFC_20171208_Archive_e001516~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e000759/collection.json",
        data: [
          {
            center: "GSFC",
            title: "Two Coronal Holes on the Sun Viewed by SDO",
            keywords: ["Two Coronal Holes on the Sun Viewed by SDO"],
            location: "Greenbelt, MD",
            nasa_id: "GSFC_20171208_Archive_e000759",
            date_created: "2015-03-17T17:08:21Z",
            media_type: "image",
            description:
              'NASA’s Solar Dynamics Observatory, or SDO, captured this solar image on March 16, 2015, which clearly shows two dark patches, known as coronal holes. The larger coronal hole of the two, near the southern pole, covers an estimated 6- to 8-percent of the total solar surface. While that may not sound significant, it is one of the largest polar holes scientists have observed in decades. The smaller coronal hole, towards the opposite pole, is long and narrow. It covers about 3.8 billion square miles on the sun - only about 0.16-percent of the solar surface.  Coronal holes are lower density and temperature regions of the sun’s outer atmosphere, known as the corona. Coronal holes can be a source of fast solar wind of solar particles that envelop the Earth.  The magnetic field in these regions extends far out into space rather than quickly looping back into the sun’s surface. Magnetic fields that loop up and back down to the surface can be seen as arcs in non-coronal hole regions of the image, including over the lower right horizon.  The bright active region on the lower right quadrant is the same region that produced solar flares last week.  Credit: NASA/Goddard/SDO  <b><a href="http://www.nasa.gov/audience/formedia/features/MP_Photo_Guidelines.html" rel="nofollow">NASA image use policy.</a></b>  <b><a href="http://www.nasa.gov/centers/goddard/home/index.html" rel="nofollow">NASA Goddard Space Flight Center</a></b> enables NASA’s mission through four scientific endeavors: Earth Science, Heliophysics, Solar System Exploration, and Astrophysics. Goddard plays a leading role in NASA’s accomplishments by contributing compelling scientific knowledge to advance the Agency’s mission.  <b>Follow us on <a href="http://twitter.com/NASAGoddardPix" rel="nofollow">Twitter</a></b>  <b>Like us on <a href="http://www.facebook.com/pages/Greenbelt-MD/NASA-Goddard/395013845897?ref=tsd" rel="nofollow">Facebook</a></b>  <b>Find us on <a href="http://instagrid.me/nasagoddard/?vm=grid" rel="nofollow">Instagram</a></b>',
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e000759/GSFC_20171208_Archive_e000759~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e000790/collection.json",
        data: [
          {
            center: "GSFC",
            title: "NASA's SDO Sees Giant Filament on the Sun",
            keywords: ["NASA's SDO Sees Giant Filament on the Sun"],
            location: "Greenbelt, MD",
            nasa_id: "GSFC_20171208_Archive_e000790",
            date_created: "2015-02-10T19:49:23Z",
            media_type: "image",
            description:
              'A dark line snaked across the lower half of the sun on Feb.10, 2015, as seen in this image from NASA\'s Solar Dynamics Observatory, or SDO. SDO shows colder material as dark and hotter material as light, so the line is, in fact, an enormous swatch of colder material hovering in the sun\'s atmosphere, the corona. Stretched out, that line – or solar filament as scientists call it – would be more than 533,000 miles long. That is longer than 67 Earths lined up in a row.  Filaments can float sedately for days before disappearing. Sometimes they also erupt out into space, releasing solar material in a shower that either rains back down or escapes out into space, becoming a moving cloud known as a coronal mass ejection, or CME.  SDO captured images of the filament in numerous wavelengths, each of which helps highlight material of different temperatures on the sun. By looking at such features in different wavelengths and temperatures, scientists learn more about what causes these structures, as well as what catalyzes their occasional eruptions.  For more on SDO, visit: <a href="http://www.nasa.gov/sdo" rel="nofollow">www.nasa.gov/sdo</a>  Karen C. Fox NASA\'s Goddard Space Flight Center, Greenbelt, Maryland  Credit: NASA/Goddard/SDO  <b><a href="http://www.nasa.gov/audience/formedia/features/MP_Photo_Guidelines.html" rel="nofollow">NASA image use policy.</a></b>  <b><a href="http://www.nasa.gov/centers/goddard/home/index.html" rel="nofollow">NASA Goddard Space Flight Center</a></b> enables NASA’s mission through four scientific endeavors: Earth Science, Heliophysics, Solar System Exploration, and Astrophysics. Goddard plays a leading role in NASA’s accomplishments by contributing compelling scientific knowledge to advance the Agency’s mission. <b>Follow us on <a href="http://twitter.com/NASAGoddardPix" rel="nofollow">Twitter</a></b> <b>Like us on <a href="http://www.facebook.com/pages/Greenbelt-MD/NASA-Goddard/395013845897?ref=tsd" rel="nofollow">Facebook</a></b> <b>Find us on <a href="http://instagram.com/nasagoddard?vm=grid" rel="nofollow">Instagram</a></b> ',
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e000790/GSFC_20171208_Archive_e000790~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/SSC-20070411-S00958/collection.json",
        data: [
          {
            center: "SSC",
            title: "Sun-Earth Day",
            keywords: [
              "Pontchartrain Astronomical Society",
              "Stennis Space Center's Sun-Earth Day",
              "StenniSphere's Millennium Hall",
              "Nicholson Elementary",
              "Hancock County Elementary",
              "Second Street Elementary",
            ],
            nasa_id: "SSC-20070411-S00958",
            date_created: "2007-04-11T00:00:00Z",
            media_type: "image",
            description:
              "Michael Sandras, a member of the Pontchartrain Astronomical Society, explains his solar telescope to students of Second Street in Bay St. Louis, Hancock County and Nicholson elementary schools in StenniSphere's Millennium Hall on April 10. The students participated in several hands-on activities at Stennis Space Center's Sun-Earth Day celebration.",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/SSC-20070411-S00958/SSC-20070411-S00958~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001553/collection.json",
        data: [
          {
            album: ["Test"],
            center: "GSFC",
            title: "Solar Scientist Confirm Existence of Flux Ropes on the Sun",
            keywords: [
              "Solar Scientist Confirm Existence of Flux Ropes on the Sun",
              "nasa",
              "sdo",
              "fluxropes",
            ],
            location: "Greenbelt, MD",
            nasa_id: "GSFC_20171208_Archive_e001553",
            date_created: "2017-12-08T00:00:00Z",
            media_type: "image",
            description:
              'Caption: This is an image of magnetic loops on the sun, captured by NASA\'s Solar Dynamics Observatory (SDO).  It has been processed to highlight the edges of each loop to make the structure more clear.  A series of loops such as this is known as a flux rope, and these lie at the heart of eruptions on the sun known as coronal mass ejections (CMEs.) This is the first time scientists were able to discern the timing of a flux rope\'s formation.  (Blended 131 Angstrom and 171 Angstrom images of July 19, 2012 flare and CME.)  Credit: NASA/Goddard Space Flight Center/SDO  ----  On July 18, 2012, a fairly small explosion of light burst off the lower right limb of the sun. Such flares often come with an associated eruption of solar material, known as a coronal mass ejection or CME – but this one did not. Something interesting did happen, however. Magnetic field lines in this area of the sun\'s atmosphere, the corona, began to twist and kink, generating the hottest solar material – a charged gas called plasma – to trace out the newly-formed slinky shape. The plasma glowed brightly in extreme ultraviolet images from the Atmospheric Imaging Assembly (AIA) aboard NASA’s Solar Dynamics Observatory (SDO) and scientists were able to watch for the first time the very formation of something they had long theorized was at the heart of many eruptive events on the sun: a flux rope.  Eight hours later, on July 19, the same region flared again. This time the flux rope\'s connection to the sun was severed, and the magnetic fields escaped into space, dragging billions of tons of solar material along for the ride -- a classic CME.  &quot;Seeing this structure was amazing,&quot; says Angelos Vourlidas, a solar scientist at the Naval Research Laboratory in Washington, D.C. &quot;It looks exactly like the cartoon sketches theorists have been drawing of flux ropes since the 1970s. It was a series of figure eights lined up to look like a giant slinky on the sun.&quot;  <b>To read more about this new discovery go to: <a href="http://1.usa.gov/14UHsTt" rel="nofollow">1.usa.gov/14UHsTt</a> </b>  <b><a href="http://www.nasa.gov/audience/formedia/features/MP_Photo_Guidelines.html" rel="nofollow">NASA image use policy.</a></b>  <b><a href="http://www.nasa.gov/centers/goddard/home/index.html" rel="nofollow">NASA Goddard Space Flight Center</a></b> enables NASA’s mission through four scientific endeavors: Earth Science, Heliophysics, Solar System Exploration, and Astrophysics. Goddard plays a leading role in NASA’s accomplishments by contributing compelling scientific knowledge to advance the Agency’s mission.  <b>Follow us on <a href="http://twitter.com/NASA_GoddardPix" rel="nofollow">Twitter</a></b>  <b>Like us on <a href="http://www.facebook.com/pages/Greenbelt-MD/NASA-Goddard/395013845897?ref=tsd" rel="nofollow">Facebook</a></b>  <b>Find us on <a href="http://instagram.com/nasagoddard?vm=grid" rel="nofollow">Instagram</a></b>',
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001553/GSFC_20171208_Archive_e001553~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA22662/collection.json",
        data: [
          {
            center: "JPL",
            title: "Magnetic Field Portrayed",
            keywords: ["Solar Dynamics Observatory (SDO)", "Sun"],
            nasa_id: "PIA22662",
            date_created: "2018-08-14T00:00:00Z",
            media_type: "image",
            description_508:
              "NASA's Solar Dynamics Observatory scientists use their computer models to generate a view of the sun's magnetic field. An extreme ultraviolet view of the sun is compared with the same image showing the superimposed field lines on August 10, 2018.",
            secondary_creator: "NASA/GSFC/Solar Dynamics Observatory",
            description:
              "NASA's Solar Dynamics Observatory (SDO) scientists use their computer models to generate a view of the sun's magnetic field (Aug. 10, 2018). We took the opportunity to compare an extreme ultraviolet view of the sun with the same image showing the superimposed field lines. The bright active region right at the central area of the sun clearly shows a concentration of field lines, as well as the small active region at the sun's right edge, but to a lesser extent. Magnetism drives the dynamic activity near the sun's surface.  Movies are available at https://photojournal.jpl.nasa.gov/catalog/PIA22662",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA22662/PIA22662~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/MSFC-1600867/collection.json",
        data: [
          {
            center: "MSFC",
            title: "SUN SENSOR ALIGNMENT TO HI-C TELESCOPE",
            photographer: "EMMETT GIVEN",
            keywords: [
              "PATRICK CHAMPEY; DICK GATES; BILL PODGORSKI; SUN SENSOR; HI-C TE",
            ],
            location: "MSFC",
            nasa_id: "MSFC-1600867",
            media_type: "image",
            date_created: "2016-05-31T00:00:00Z",
            description:
              "PATRICK CHAMPEY, (LEFT), DICK GATES, (RIGHT), AND BILL PODGORSKI, (SEATED), ALIGN SUN SENSOR TO HI-C TELESCOPE USING THEODOLITE",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/MSFC-1600867/MSFC-1600867~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA05041/collection.json",
        data: [
          {
            center: "JPL",
            title: "Martian Sunsets More Than Just Pretty",
            nasa_id: "PIA05041",
            date_created: "2004-01-10T20:37:22Z",
            keywords: ["Sun", "Mars Exploration Rover MER"],
            media_type: "image",
            description_508:
              "This image shows the Sun as it appears on Mars throughout the day. Scientists monitor the dimming of the setting Sun to assess how much dust is in the martian atmosphere. The pictures were taken by the Mars Exploration Rover Spirit panoramic camera.",
            secondary_creator: "NASA/JPL/Cornell",
            description:
              "This image shows the Sun as it appears on Mars throughout the day. Scientists monitor the dimming of the setting Sun to assess how much dust is in the martian atmosphere. The pictures were taken by the Mars Exploration Rover Spirit panoramic camera.",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA05041/PIA05041~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA18003/collection.json",
        data: [
          {
            center: "JPL",
            title: "Welcome to the Sun Neighborhood",
            nasa_id: "PIA18003",
            date_created: "2014-04-25T17:00:03Z",
            keywords: [
              "Spitzer Space Telescope,Wide-field Infrared Survey Explorer WIS",
            ],
            media_type: "image",
            description_508:
              "This diagram illustrates the locations of the star systems closest to the sun. The year when the distance to each system was determined is listed after the system name.",
            secondary_creator: "NASA/Penn State University",
            description:
              "This diagram illustrates the locations of the star systems closest to the sun. The year when the distance to each system was determined is listed after the system name.",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA18003/PIA18003~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001259/collection.json",
        data: [
          {
            album: ["Test"],
            center: "GSFC",
            title: "Strong Proton Storm on the Sun with a Mercury Fly-by",
            keywords: [
              "Strong Proton Storm on the Sun with a Mercury Fly-by",
              "sun",
              "mercury",
              "soho",
              "nasa",
              "flare",
              "sunspot",
              "cme",
              "nasagoddard",
            ],
            location: "Greenbelt, MD",
            nasa_id: "GSFC_20171208_Archive_e001259",
            date_created: "2017-12-08T00:00:00Z",
            media_type: "image",
            description:
              'A solar magnetic active region containing the largest sunspot group of the last 10 years unleashed a large (X1.2) flare when it was facing right towards Earth.  The flare was associated with a bright coronal mass ejection that emerges from the lower right (Jan. 7-8, 2014). A fast moving cloud of high-energy particles produced in the flare and at the CME front began striking the SOHO spacecraft imagers, creating the &quot;snow&quot; effect that went on for more than a day.  SOHO is a million miles sunwards of Earth, and outside the earth\'s protective magnetosphere. In these coronagraph images the Sun is represented by the white circle and is blocked by an occulting disk, so we can observe fainter structures in the Sun\'s corona. Venus (upper left) enters the field of view during the video clip, while Mercury (lower left) is just about to leave the file of view.  Credit: NASA/GSFC/SOHO  <b><a href="http://www.nasa.gov/audience/formedia/features/MP_Photo_Guidelines.html" rel="nofollow">NASA image use policy.</a></b>  <b><a href="http://www.nasa.gov/centers/goddard/home/index.html" rel="nofollow">NASA Goddard Space Flight Center</a></b> enables NASA’s mission through four scientific endeavors: Earth Science, Heliophysics, Solar System Exploration, and Astrophysics. Goddard plays a leading role in NASA’s accomplishments by contributing compelling scientific knowledge to advance the Agency’s mission.  <b>Follow us on <a href="http://twitter.com/NASA_GoddardPix" rel="nofollow">Twitter</a></b>  <b>Like us on <a href="http://www.facebook.com/pages/Greenbelt-MD/NASA-Goddard/395013845897?ref=tsd" rel="nofollow">Facebook</a></b>  <b>Find us on <a href="http://instagram.com/nasagoddard?vm=grid" rel="nofollow">Instagram</a></b>',
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001259/GSFC_20171208_Archive_e001259~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e000885/collection.json",
        data: [
          {
            album: ["Test"],
            center: "GSFC",
            title: "NASA's SDO Shows Moon Transiting the Sun",
            keywords: [
              "NASA's SDO Shows Moon Transiting the Sun",
              "sun",
              "nasa",
              "sdo",
              "nasagoddard",
              "lunartransit",
            ],
            location: "Greenbelt, MD",
            nasa_id: "GSFC_20171208_Archive_e000885",
            date_created: "2017-12-08T00:00:00Z",
            media_type: "image",
            description:
              'On Nov. 22, 2014 from 5:29 to 6:04 p.m. EST., the moon partially obscured the view of the sun from NASA\'s Solar Dynamics Observatory. This phenomenon, which is called a lunar transit, could only be seen from SDO\'s point of view.  In 2014, SDO captured four such transits -- including its longest ever recorded, which occurred on Jan. 30, and lasted two and a half hours.  SDO imagery during a lunar transit always shows a crisp horizon on the moon -- a reflection of the fact that the moon has no atmosphere around it to distort the light from the sun. The horizon is so clear in these images that mountains and valleys in the terrain can be seen.  Credit: NASA/SDO  <b><a href="http://www.nasa.gov/audience/formedia/features/MP_Photo_Guidelines.html" rel="nofollow">NASA image use policy.</a></b>  <b><a href="http://www.nasa.gov/centers/goddard/home/index.html" rel="nofollow">NASA Goddard Space Flight Center</a></b> enables NASA’s mission through four scientific endeavors: Earth Science, Heliophysics, Solar System Exploration, and Astrophysics. Goddard plays a leading role in NASA’s accomplishments by contributing compelling scientific knowledge to advance the Agency’s mission.  <b>Follow us on <a href="http://twitter.com/NASAGoddardPix" rel="nofollow">Twitter</a></b>  <b>Like us on <a href="http://www.facebook.com/pages/Greenbelt-MD/NASA-Goddard/395013845897?ref=tsd" rel="nofollow">Facebook</a></b>  <b>Find us on <a href="http://instagrid.me/nasagoddard/?vm=grid" rel="nofollow">Instagram</a></b>',
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e000885/GSFC_20171208_Archive_e000885~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA22673/collection.json",
        data: [
          {
            center: "JPL",
            title: "Twisting Outburst",
            keywords: ["Solar Dynamics Observatory", "SDO", "Sun"],
            nasa_id: "PIA22673",
            date_created: "2018-08-20T00:00:00Z",
            media_type: "image",
            description_508:
              "NASA's Solar Dynamics Observatory shows a minor eruption of charged particles rising up and twisting about before falling back into the Sun in this close-up of the Sun from a two-hour period on Aug. 13, 2018.",
            secondary_creator: "NASA/GSFC/Solar Dynamics Observatory",
            description:
              "This close-up of the Sun from a two-hour period on Aug. 13, 2018 shows a minor eruption of charged particles rising up and twisting about before falling back into the Sun. Imaged in extreme ultraviolet light, these kinds of events are difficult to see except when they occur along the sun's edge, also known as the limb. At its peak the plasma rises several times the diameter of Earth.  Movies are available at https://photojournal.jpl.nasa.gov/catalog/PIA22673",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA22673/PIA22673~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA17442/collection.json",
        data: [
          {
            center: "JPL",
            title: "Mystery of the Interstellar Magnetic Field Artist Concept",
            nasa_id: "PIA17442",
            date_created: "2013-09-12T18:00:07Z",
            keywords: ["Sun", "Voyager"],
            media_type: "image",
            description_508:
              "The artist concept on left is based on theoretical models predicting the direction and strength of magnetic field lines coming from the sun and interstellar space.",
            secondary_creator: "NASA/JPL-Caltech",
            description:
              "The artist concept on left is based on theoretical models predicting the direction and strength of magnetic field lines coming from the sun and interstellar space.",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA17442/PIA17442~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e000761/collection.json",
        data: [
          {
            center: "GSFC",
            title: "Sun Emits an X2.2 Flare on March 11, 2015",
            keywords: ["Sun Emits an X2.2 Flare on March 11, 2015"],
            location: "Greenbelt, MD",
            nasa_id: "GSFC_20171208_Archive_e000761",
            date_created: "2015-03-11T18:43:54Z",
            media_type: "image",
            description:
              'The sun emitted a significant solar flare, peaking at 12:22 p.m. EDT on March 11, 2015. NASA’s Solar Dynamics Observatory, which watches the sun constantly, captured an image of the event. Solar flares are powerful bursts of radiation. Harmful radiation from a flare cannot pass through Earth\'s atmosphere to physically affect humans on the ground, however -- when intense enough -- they can disturb the atmosphere in the layer where GPS and communications signals travel.    This flare is classified as an X2.2-class flare. X-class denotes the most intense flares, while the number provides more information about its strength. An X2 is twice as intense as an X1, an X3 is three times as intense, etc.   This image was captured by NASA\'s Solar Dynamics Observatory and shows a blend of light from the 171 and 131 Ångström wavelengths. The Earth is shown to scale.  Credit: NASA/Goddard/SDO   <b><a href="http://www.nasa.gov/audience/formedia/features/MP_Photo_Guidelines.html" rel="nofollow">NASA image use policy.</a></b>  <b><a href="http://www.nasa.gov/centers/goddard/home/index.html" rel="nofollow">NASA Goddard Space Flight Center</a></b> enables NASA’s mission through four scientific endeavors: Earth Science, Heliophysics, Solar System Exploration, and Astrophysics. Goddard plays a leading role in NASA’s accomplishments by contributing compelling scientific knowledge to advance the Agency’s mission. <b>Follow us on <a href="http://twitter.com/NASAGoddardPix" rel="nofollow">Twitter</a></b> <b>Like us on <a href="http://www.facebook.com/pages/Greenbelt-MD/NASA-Goddard/395013845897?ref=tsd" rel="nofollow">Facebook</a></b> <b>Find us on <a href="http://instagram.com/nasagoddard?vm=grid" rel="nofollow">Instagram</a></b>',
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e000761/GSFC_20171208_Archive_e000761~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e000031/collection.json",
        data: [
          {
            album: ["Test"],
            center: "GSFC",
            title: "Scientists Uncover Origins of the Sun’s Swirling Spicules",
            keywords: [
              "Scientists Uncover Origins of the Sun’s Swirling Spicules",
            ],
            location: "Greenbelt, MD",
            nasa_id: "GSFC_20171208_Archive_e000031",
            date_created: "2017-12-08T00:00:00Z",
            media_type: "image",
            description:
              'At any given moment, as many as 10 million wild jets of solar material burst from the sun’s surface. They erupt as fast as 60 miles per second, and can reach lengths of 6,000 miles before collapsing. These are spicules, and despite their grass-like abundance, scientists didn’t understand how they form. Now, for the first time, a computer simulation — so detailed it took a full year to run — shows how spicules form, helping scientists understand how spicules can break free of the sun’s surface and surge upward so quickly.   Watch here and more at: <a href="https://go.nasa.gov/2t3toMx" rel="nofollow">go.nasa.gov/2t3toMx</a>  Credits: NASA’s Goddard Space Flight Center/Joy Ng, producer  <b><a href="http://www.nasa.gov/audience/formedia/features/MP_Photo_Guidelines.html" rel="nofollow">NASA image use policy.</a></b>  <b><a href="http://www.nasa.gov/centers/goddard/home/index.html" rel="nofollow">NASA Goddard Space Flight Center</a></b> enables NASA’s mission through four scientific endeavors: Earth Science, Heliophysics, Solar System Exploration, and Astrophysics. Goddard plays a leading role in NASA’s accomplishments by contributing compelling scientific knowledge to advance the Agency’s mission.  <b>Follow us on <a href="http://twitter.com/NASAGoddardPix" rel="nofollow">Twitter</a></b>  <b>Like us on <a href="http://www.facebook.com/pages/Greenbelt-MD/NASA-Goddard/395013845897?ref=tsd" rel="nofollow">Facebook</a></b>  <b>Find us on <a href="http://instagrid.me/nasagoddard/?vm=grid" rel="nofollow">Instagram</a></b>     ',
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e000031/GSFC_20171208_Archive_e000031~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001078/collection.json",
        data: [
          {
            center: "GSFC",
            title: "NASA's IRIS Observed a Gigantic Eruption on the Sun!",
            keywords: ["NASA's IRIS Observed a Gigantic Eruption on the Sun!"],
            location: "Greenbelt, MD",
            nasa_id: "GSFC_20171208_Archive_e001078",
            date_created: "2014-05-30T15:35:00Z",
            media_type: "image",
            description:
              'A coronal mass ejection, or CME, surged off the side of the sun on May 9, 2014, and NASA\'s newest solar observatory caught it in extraordinary detail. This was the first CME observed by the Interface Region Imaging Spectrograph, or IRIS, which launched in June 2013 to peer into the lowest levels of the sun\'s atmosphere with better resolution than ever before. Watch the movie to see how a curtain of solar material erupts outward at speeds of 1.5 million miles per hour. Read more: <a href="http://1.usa.gov/1kp7O4F" rel="nofollow">1.usa.gov/1kp7O4F</a>  Credit: NASA\'s Goddard Space Flight Center  <b><a href="http://www.nasa.gov/audience/formedia/features/MP_Photo_Guidelines.html" rel="nofollow">NASA image use policy.</a></b>   <b><a href="http://www.nasa.gov/centers/goddard/home/index.html" rel="nofollow">NASA Goddard Space Flight Center</a></b> enables NASA’s mission through four scientific endeavors: Earth Science, Heliophysics, Solar System Exploration, and Astrophysics. Goddard plays a leading role in NASA’s accomplishments by contributing compelling scientific knowledge to advance the Agency’s mission.   <b>Follow us on <a href="http://twitter.com/NASAGoddardPix" rel="nofollow">Twitter</a></b>   <b>Like us on <a href="http://www.facebook.com/pages/Greenbelt-MD/NASA-Goddard/395013845897?ref=tsd" rel="nofollow">Facebook</a></b>   <b>Find us on <a href="http://instagram.com/nasagoddard?vm=grid" rel="nofollow">Instagram</a></b>',
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001078/GSFC_20171208_Archive_e001078~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA19949/collection.json",
        data: [
          {
            center: "JPL",
            title: "SDO Transit, September 2015",
            nasa_id: "PIA19949",
            date_created: "2015-09-13T23:06:22Z",
            keywords: ["Sun", "Solar Dynamics Observatory SDO"],
            media_type: "image",
            description_508:
              "On Sept. 13, 2015, as NASA Solar Dynamics Observatory, or SDO, kept up its constant watch on the sun. Just as the moon came into SDO field of view on a path to cross the sun, Earth entered the picture, blocking SDO view completely.",
            secondary_creator: "NASA/GSFC/Solar Dynamics Observatory",
            description:
              "On Sept. 13, 2015, as NASA's Solar Dynamics Observatory, or SDO, kept up its constant watch on the sun, its view was photobombed not once, but twice. Just as the moon came into SDO's field of view on a path to cross the sun, Earth entered the picture, blocking SDO's view completely. When SDO's orbit finally emerged from behind Earth, the moon was just completing its journey across the sun's face.  Though SDO sees dozens of Earth eclipses and several lunar transits each year, this is the first time ever that the two have coincided.  SDO's orbit usually gives us unobstructed views of the sun, but Earth's revolution around the sun means that SDO's orbit passes behind Earth twice each year, for two to three weeks at a time. During these phases, Earth blocks SDO's view of the sun for anywhere from a few minutes to over an hour once each day.  Earth's outline looks fuzzy, while the moon's is crystal-clear. This is because-while the planet itself completely blocks the sun's light-Earth's atmosphere is an incomplete barrier, blocking different amounts of light at different altitudes. However, the moon has no atmosphere, so during the transit we can see the crisp edges of the moon's horizon.  http://photojournal.jpl.nasa.gov/catalog/PIA19949",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA19949/PIA19949~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001661/collection.json",
        data: [
          {
            album: ["Test"],
            center: "GSFC",
            title: "Magnificent CME Erupts on the Sun - August 31",
            keywords: [
              "Magnificent CME Erupts on the Sun - August 31",
              "sun",
              "nasa",
              "goddard",
              "cme",
              "sdo",
            ],
            location: "Greenbelt, MD",
            nasa_id: "GSFC_20171208_Archive_e001661",
            date_created: "2017-12-08T00:00:00Z",
            media_type: "image",
            description:
              'On August 31, 2012 a long filament of solar material that had been hovering in the sun\'s atmosphere, the corona, erupted out into space at 4:36 p.m. EDT. The coronal mass ejection, or CME, traveled at over 900 miles per second. The CME did not travel directly toward Earth, but did connect with Earth\'s magnetic environment, or magnetosphere, causing aurora to appear on the night of Monday, September 3.   This is a a lighten blended version of the 304 and 171 angstrom wavelengths.  Credit: NASA/GSFC/SDO  <b><a href="http://www.nasa.gov/audience/formedia/features/MP_Photo_Guidelines.html" rel="nofollow">NASA image use policy.</a></b>  <b><a href="http://www.nasa.gov/centers/goddard/home/index.html" rel="nofollow">NASA Goddard Space Flight Center</a></b> enables NASA’s mission through four scientific endeavors: Earth Science, Heliophysics, Solar System Exploration, and Astrophysics. Goddard plays a leading role in NASA’s accomplishments by contributing compelling scientific knowledge to advance the Agency’s mission.  <b>Follow us on <a href="http://twitter.com/NASAGoddardPix" rel="nofollow">Twitter</a></b>  <b>Like us on <a href="http://www.facebook.com/pages/Greenbelt-MD/NASA-Goddard/395013845897?ref=tsd" rel="nofollow">Facebook</a></b>  <b>Find us on <a href="http://instagrid.me/nasagoddard/?vm=grid" rel="nofollow">Instagram</a></b>',
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001661/GSFC_20171208_Archive_e001661~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001832/collection.json",
        data: [
          {
            album: ["Test"],
            center: "GSFC",
            title: "SDO Spots Extra Energy in the Sun's Corona [detail]",
            keywords: [
              "SDO Spots Extra Energy in the Sun's Corona [detail]",
              "sun",
              "space",
              "nasa",
              "sdo",
              "goddardspaceflightcenter",
            ],
            location: "Greenbelt, MD",
            nasa_id: "GSFC_20171208_Archive_e001832",
            date_created: "2017-12-08T00:00:00Z",
            media_type: "image",
            description:
              'NASA release July 27, 2011  These jets, known as spicules, were captured in an SDO image on April 25, 2010. Combined with the energy from ripples in the magnetic field, they may contain enough energy to power the solar wind that streams from the sun toward Earth at 1.5 million miles per hour.   Credit: NASA/SDO/AIA   To see a full disk view go here: <a href="http://www.flickr.com/photos/gsfc/5982663752/in/photostream/">www.flickr.com/photos/gsfc/5982663752/in/photostream/</a>  <b><a href="http://www.nasa.gov/centers/goddard/home/index.html" rel="nofollow">NASA Goddard Space Flight Center</a></b> enables NASA’s mission through four scientific endeavors: Earth Science, Heliophysics, Solar System Exploration, and Astrophysics. Goddard plays a leading role in NASA’s accomplishments by contributing compelling scientific knowledge to advance the Agency’s mission.  <b>Follow us on <a href="http://twitter.com/NASA_GoddardPix" rel="nofollow">Twitter</a></b>  <b>Like us on <a href="http://www.facebook.com/pages/Greenbelt-MD/NASA-Goddard/395013845897?ref=tsd" rel="nofollow">Facebook</a></b>  <b>Find us on <a href="http://web.stagram.com/n/nasagoddard/?vm=grid" rel="nofollow">Instagram</a></b>',
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001832/GSFC_20171208_Archive_e001832~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA22120/collection.json",
        data: [
          {
            center: "JPL",
            title: "Churning Filament",
            keywords: ["Solar Dynamics Observatory (SDO)", "Sun", "filament"],
            nasa_id: "PIA22120",
            date_created: "2017-11-28T00:00:00Z",
            media_type: "image",
            description_508:
              "This image from NASA's Solar Dynamics Observatory shows A developing filament near the edge of the sun churned and twisted as the rotating sun brought it into clearer view over a day on Nov. 16-17, 2017.",
            secondary_creator: "NASA/GSFC/Solar Dynamics Observatory",
            description:
              "A developing filament near the edge of the sun churned and twisted as the rotating sun brought it into clearer view over a day (Nov. 16-17, 2017). Filaments are cooler and often unstable clouds of particles floating above the sun's surface, which are tethered by magnetic forces. In extreme ultraviolet light, they appear darker than the sun's surface. The bright area to the right of the filament is an active region. The loop that appears behind the filament in the middle of the clip is made of charged particles tracing magnetic field lines.  Movies are available at https://photojournal.jpl.nasa.gov/catalog/PIA22120",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA22120/PIA22120~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA22195/collection.json",
        data: [
          {
            center: "JPL",
            title: "Prominence Falls Apart",
            keywords: ["Solar Dynamics Observatory (SDO)", "Sun", "prominence"],
            nasa_id: "PIA22195",
            date_created: "2017-12-15T00:00:00Z",
            media_type: "image",
            description_508:
              "NASA's Solar Dynamics Observatory observed a small prominence, slowly rising further up above the sun, then fell apart and back into the sun over about seven hours (Dec. 6, 2017).",
            secondary_creator: "NASA/GSFC/Solar Dynamics Observatory",
            description:
              'A small prominence slowly rose further up above the sun, then fell apart and back into the sun over about seven hours (Dec. 6, 2017). Prominences, notoriously unstable, are cooler clouds of particles tethered not far above the sun by magnetic forces. When it stretched out, its distance above the sun was several times the size of Earth. Images were taken in a wavelength of extreme ultraviolet light. These images are colorized since we cannot "see" ultraviolet light. In this case, a yellow tone was used instead of the normal red tint we use for this 304 Angstrom wavelength.   Movies are available at https://photojournal.jpl.nasa.gov/catalog/PIA22195',
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA22195/PIA22195~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA21592/collection.json",
        data: [
          {
            center: "JPL",
            title: "Filament Breakaway",
            keywords: ["Sun", "Solar Dynamics Observatory SDO"],
            nasa_id: "PIA21592",
            date_created: "2017-04-18T18:27:33Z",
            media_type: "image",
            description_508:
              "A dark, elongated filament rose up and broke to the lower left and out from the sun seen by NASA's Solar Dynamics Observatory, Apr.9-10, 2017. Filaments are cooler clouds of plasma tethered above the sun surface by magnetic forces.",
            secondary_creator: "NASA/GSFC/Solar Dynamics Observatory",
            description:
              "A dark, elongated filament rose up and broke to the lower left and out from the sun seen by NASA Solar Dynamics Observatory, Apr.9-10, 2017. Filaments are cooler clouds of plasma tethered above the sun surface by magnetic forces. They are notoriously unstable and tend not to last more than a few days before they collapse into the sun or break away into space. A video, taken in extreme ultraviolet light, covers about nine hours of activity.  Videos are available at https://photojournal.jpl.nasa.gov/catalog/PIA21592",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA21592/PIA21592~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA16734/collection.json",
        data: [
          {
            center: "JPL",
            title: "Magnetic Field Line Pile-Up Artist Concept",
            nasa_id: "PIA16734",
            date_created: "2013-02-12T21:20:40Z",
            keywords: ["Sun", "Voyager"],
            media_type: "image",
            description_508:
              "This artist concept shows NASA Voyager 1 spacecraft in a new region at the edge of our solar system where the magnetic field lines generated by our sun are piling up and intensifying.",
            secondary_creator: "NASA/JPL-Caltech",
            description:
              "This artist concept shows NASA Voyager 1 spacecraft in a new region at the edge of our solar system where the magnetic field lines generated by our sun are piling up and intensifying.",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA16734/PIA16734~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
    ],
    metadata: {
      total_hits: 5725,
    },
    links: [
      {
        rel: "next",
        prompt: "Next",
        href: "http://images-api.nasa.gov/search?q=sun&media_type=image&page=2",
      },
    ],
  },
},
  nasaSearchInput: "",
  nasaImgRef: "",
  userImgRef: "",
};

export default initialState
