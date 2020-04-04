const location = {
  POND: 'Pond',
  RIVER: 'River',
  RIVER_CLIFFTOP: 'River (Clifftop)',
  RIVER_MOUTH: 'River (Mouth)',
  SEA: 'Sea',
  PIER: 'Pier',
}


export const data = {
  fish: [
    {
      name: 'Bitterling',
      price: 900,
      location: location.RIVER,
      availability: {
        times: [{
          start: 0,
          end: 23
        }],
        months: [{
          start: 10,
          end: 2
        }]
      }
    },
    {
      name: 'Pale Chub',
      price: 160,
      location: location.RIVER,
      availability: {
        times: [{
          start: 9,
          end: 16
        }],
        months: [{
          start: 0,
          end: 11
        }]
      }
    },
    {
      name: 'Crucian Carp',
      price: 160,
      location: location.RIVER,
      availability: {
        times: [{
          start: 0,
          end: 23
        }],
        months: [{
          start: 0,
          end: 11
        }]
      }
    },
    {
      name: 'Dace',
      price: 240,
      location: location.RIVER,
      availability: {
        times: [{
          start: 16, 
          end: 9
        }],
        months: [{
          start: 0,
          end: 11
        }]
      }
    },
    {
      name: 'Carp',
      price: 300,
      location: location.POND,
      availability: {
        times: [{
          start: 0,
          end: 23
        }],
        months: [{
          start: 0,
          end: 11
        }]
      }
    },
    {
      name: 'Koi',
      price: 4000,
      location: location.POND,
      availability: {
        times: [{
          start: 16,
          end: 9
        }],
        months: [{
          start: 0,
          end: 11
        }]
      }
    },
    {
      name: 'Goldfish',
      price: 1300,
      location: location.POND,
      availability: {
        times: [{
          start: 0,
          end: 23
        }],
        months: [{
          start: 0,
          end: 11
        }]
      }
    },
    {
      name: 'Pop-eyed Goldfish',
      price: 1300,
      location: location.POND,
      availability: {
        times: [{
          start: 9,
          end: 16
        }],
        months: [{
          start: 0,
          end: 11
        }]
      }
    },
    {
      name: 'Rachu Goldfish',
      price: 4500,
      location: location.POND,
      availability: {
        times: [{
          start: 9,
          end: 16
        }],
        months: [{
          start: 0,
          end: 11
        }]
      }
    },
    {
      name: 'Killifish',
      price: 300,
      location: location.POND,
      availability: {
        times: [{
          start: 0,
          end: 23
        }],
        months: [{
          start: 3,
          end: 7
        }]
      }
    },
    {
      name: 'Crawfish',
      price: 200,
      location: location.POND,
      availability: {
        times: [{
          start: 0,
          end: 23
        }],
        months: [{
          start: 3,
          end: 8
        }]
      }
    },
    {
      name: 'Soft-shelled Turtle',
      price: 3750,
      location: location.RIVER,
      availability: {
        times: [{
          start: 16,
          end: 9
        }],
        months: [{
          start: 7,
          end: 8
        }]
      }
    },
    {
      name: 'Snapping Turtle',
      price: 5000,
      location: location.RIVER,
      availability: {
        times: [{
          start: 21,
          end: 4
        }],
        months: [{
          start: 3,
          end: 9
        }]
      }
    },
    {
      name: 'Tadpole',
      price: 100,
      location: location.POND,
      availability: {
        times: [{
          start: 0,
          end: 23
        }],
        months: [{
          start: 2,
          end: 6
        }]
      }
    },
    {
      name: 'Frog',
      price: 120,
      location: location.POND,
      availability: {
        times: [{
          start: 0,
          end: 23
        }],
        months: [{
          start: 4,
          end: 7
        }]
      }
    },
    {
      name: 'Freshwater Goby',
      price: 400,
      location: location.RIVER,
      availability: {
        times: [{
          start: 16,
          end: 9
        }],
        months: [{
          start: 0,
          end: 11
        }]
      }
    },
    {
      name: 'Loach',
      price: 400,
      location: location.RIVER,
      availability: {
        times: [{
          start: 0,
          end: 23
        }],
        months: [{
          start: 2,
          end: 4
        }]
      }
    },
    {
      name: 'Catfish',
      price: 800,
      location: location.POND,
      availability: {
        times: [{
          start: 16,
          end: 9
        }],
        months: [{
          start: 4,
          end: 9
        }]
      }
    },
    {
      name: 'Giant Snakehead',
      price: 5500,
      location: location.POND,
      availability: {
        times: [{
          start: 9,
          end: 16
        }],
        months: [{
          start: 5,
          end: 7
        }]
      }
    },
    {
      name: 'Bluegill',
      price: 180,
      location: location.RIVER,
      availability: {
        times: [{
          start: 9,
          end: 16
        }],
        months: [{
          start: 0,
          end: 11
        }]
      }
    },
    {
      name: 'Yellow Perch',
      price: 300,
      location: location.RIVER,
      availability: {
        times: [{
          start: 0,
          end: 23
        }],
        months: [{
          start: 9,
          end: 2
        }]
      }
    },
    {
      name: 'Black Bass',
      price: 400,
      location: location.RIVER,
      availability: {
        times: [{
          start: 0,
          end: 23
        }],
        months: [{
          start: 0,
          end: 11
        }]
      }
    },
    {
      name: 'Tilapia',
      price: 800,
      location: location.RIVER,
      availability: {
        times: [{
          start: 0,
          end: 23
        }],
        months: [{
          start: 5,
          end: 9
        }]
      }
    },
    {
      name: 'Pike',
      price: 1800,
      location: location.RIVER,
      availability: {
        times: [{
          start: 0,
          end: 23
        }],
        months: [{
          start: 8,
          end: 11
        }]
      }
    },
    {
      name: 'Pond Smelt',
      price: 500,
      location: location.POND,
      availability: {
        times: [{
          start: 0,
          end: 23
        }],
        months: [{
          start: 11,
          end: 1
        }]
      }
    },
    {
      name: 'Sweetfish',
      price: 900,
      location: location.RIVER,
      availability: {
        times: [{
          start: 0,
          end: 23
        }],
        months: [{
          start: 6,
          end: 8
        }]
      }
    },
    {
      name: 'Cherry Salmon',
      price: 1000,
      location: location.RIVER_CLIFFTOP,
      availability: {
        times: [{
          start: 16,
          end: 9
        }],
        months: [
          {
            start: 2,
            end: 5
          },
          {
            start: 8,
            end: 10 
          },
        ]
      }
    },
    {
      name: 'Char',
      price: 3800,
      location: location.RIVER_CLIFFTOP,
      availability: {
        times: [{
          start: 16,
          end: 9
        }],
        months: [
          {
            start: 2,
            end: 5
          },
          {
            start: 8,
            end: 10 
          },
        ]      
      }
    },
    {
      name: 'Golden Trout',
      price: 15000,
      location: location.RIVER_CLIFFTOP,
      availability: {
        times: [{
          start: 16,
          end: 9
        }],
        months: [
          {
            start: 2,
            end: 4
          },
          {
            start: 8,
            end: 10 
          },
        ]      
      }
    },
    {
      name: 'Stringfish',
      price: 15000,
      location: location.RIVER_CLIFFTOP,
      availability: {
        times: [{
          start: 16,
          end: 9
        }],
        months: [{
          start: 11,
          end: 2
        }]
      }
    },
    {
      name: 'Salmon',
      price: 700,
      location: location.RIVER_MOUTH,
      availability: {
        times: [{
          start: 0,
          end: 23
        }],
        months: [{
          start: 8,
          end: 8
        }]
      }
    },
    {
      name: 'King Salmon',
      price: 1800,
      location: location.RIVER_MOUTH,
      availability: {
        times: [{
          start: 0,
          end: 23
        }],
        months: [{
          start: 8,
          end: 8
        }]
      }
    },
    {
      name: 'Mitten Crab',
      price: 2000,
      location: location.RIVER,
      availability: {
        times: [{
          start: 16, 
          end: 9
        }],
        months: [{
          start: 8,
          end: 10
        }]
      }
    },
    {
      name: 'Guppy',
      price: 1300,
      location: location.RIVER,
      availability: {
        times: [{
          start: 9,
          end: 16
        }],
        months: [{
          start: 3,
          end: 10
        }]
      }
    },
    {
      name: 'Nibble Fish',
      price: 1500,
      location: location.RIVER,
      availability: {
        times: [{
          start: 9,
          end: 16
        }],
        months: [{
          start: 4,
          end: 8
        }]
      }
    },
    {
      name: 'Angelfish',
      price: 3000,
      location: location.RIVER,
      availability: {
        times: [{
          start: 16,
          end: 9
        }],
        months: [{
          start: 4,
          end: 9
        }]
      }
    },
    {
      name: 'Betta',
      price: 2500,
      location: location.RIVER,
      availability: {
        times: [{
          start: 9,
          end: 16
        }],
        months: [{
          start: 4,
          end: 9
        }]
      }
    },
    {
      name: 'Neon Tetra',
      price: 500,
      location: location.RIVER,
      availability: {
        times: [{
          start: 9,
          end: 16
        }],
        months: [{
          start: 3,
          end: 10
        }]
      }
    },
    {
      name: 'Rainbowfish',
      price: 800,
      location: location.RIVER,
      availability: {
        times: [{
          start: 9,
          end: 16
        }],
        months: [{
          start: 4,
          end: 9
        }]
      }
    },
    {
      name: 'Piranha',
      price: 2500,
      location: location.RIVER,
      availability: {
        times: [
          {
            start: 9,
            end: 16
          },
          {
            start: 21,
            end: 4,
          }
        ],
        months: [{
          start: 5,
          end: 8
        }]
      }
    },
    {
      name: 'Arowana',
      price: 10000,
      location: location.RIVER,
      availability: {
        times: [{
          start: 16,
          end: 9
        }],
        months: [{
          start: 5,
          end: 8
        }]
      }
    },
    {
      name: 'Dorado',
      price: 15000,
      location: location.RIVER,
      availability: {
        times: [{
          start: 4,
          end: 21
        }],
        months: [{
          start: 5,
          end: 8
        }]
      }
    },
    {
      name: 'Gar',
      price: 6000,
      location: location.POND,
      availability: {
        times: [{
          start: 16,
          end: 9
        }],
        months: [{
          start: 5,
          end: 8
        }]
      }
    },
    {
      name: 'Arapaima',
      price: 10000,
      location: location.RIVER,
      availability: {
        times: [{
          start: 16,
          end: 9
        }],
        months: [{
          start: 5,
          end: 8
        }]
      }
    },
    {
      name: 'Saddled Bichir',
      price: 4000,
      location: location.RIVER,
      availability: {
        times: [{
          start: 21,
          end: 4
        }],
        months: [{
          start: 5,
          end: 8
        }]
      }
    },
    {
      name: 'Sturgeon',
      price: 10000,
      location: location.RIVER_MOUTH,
      availability: {
        times: [{
          start: 0,
          end: 23
        }],
        months: [{
          start: 8,
          end: 2
        }]
      }
    },
    {
      name: 'Sea Butterfly',
      price: 1000,
      location: location.SEA,
      availability: {
        times: [{
          start: 0,
          end: 23
        }],
        months: [{
          start: 11,
          end: 2
        }]
      }
    },
    {
      name: 'Seahorse',
      price: 1100,
      location: location.SEA,
      availability: {
        times: [{
          start: 0,
          end: 23
        }],
        months: [{
          start: 3,
          end: 10
        }]
      }
    },
    {
      name: 'Clownfish',
      price: 650,
      location: location.SEA,
      availability: {
        times: [{
          start: 0,
          end: 23
        }],
        months: [{
          start: 3,
          end: 8
        }]
      }
    },
    {
      name: 'Surgeonfish',
      price: 1000,
      location: location.SEA,
      availability: {
        times: [{
          start: 0,
          end: 23
        }],
        months: [{
          start: 3,
          end: 8
        }]
      }
    },
    {
      name: 'Butterfly Fish',
      price: 1000,
      location: location.SEA,
      availability: {
        times: [{
          start: 0,
          end: 23
        }],
        months: [{
          start: 3,
          end: 8
        }]
      }
    },
    {
      name: 'Napoleanfish',
      price: 10000,
      location: location.SEA,
      availability: {
        times: [{
          start: 4,
          end: 21
        }],
        months: [{
          start: 6,
          end: 7
        }]
      }
    },
    {
      name: 'Zebra Turkeyfish',
      price: 500,
      location: location.SEA,
      availability: {
        times: [{
          start: 0,
          end: 23
        }],
        months: [{
          start: 3,
          end: 10
        }]
      }
    },
    {
      name: 'Blowfish',
      price: 5000,
      location: location.SEA,
      availability: {
        times: [{
          start: 21,
          end: 4
        }],
        months: [{
          start: 10,
          end: 1
        }]
      }
    },
    {
      name: 'Puffer Fish',
      price: 250,
      location: location.SEA,
      availability: {
        times: [{
          start: 0,
          end: 23
        }],
        months: [{
          start: 6,
          end: 8
        }]
      }
    },
    {
      name: 'Anchovy',
      price: 200,
      location: location.SEA,
      availability: {
        times: [{
          start: 4,
          end: 21
        }],
        months: [{
          start: 0,
          end: 11
        }]
      }
    },
    {
      name: 'House Mackerel',
      price: 150,
      location: location.SEA,
      availability: {
        times: [{
          start: 0,
          end: 23
        }],
        months: [{
          start: 0,
          end: 11
        }]
      }
    },
    {
      name: 'Barred Knifejaw',
      price: 5000,
      location: location.SEA,
      availability: {
        times: [{
          start: 0,
          end: 23
        }],
        months: [{
          start: 2,
          end: 10
        }]
      }
    },
    {
      name: 'Sea Bass',
      price: 400,
      location: location.SEA,
      availability: {
        times: [{
          start: 0,
          end: 23
        }],
        months: [{
          start: 0,
          end: 11
        }]
      }
    },
    {
      name: 'Red Snapper',
      price: 3000,
      location: location.SEA,
      availability: {
        times: [{
          start: 0,
          end: 23
        }],
        months: [{
          start: 0,
          end: 11
        }]
      }
    },
    {
      name: 'Dab',
      price: 300,
      location: location.SEA,
      availability: {
        times: [{
          start: 0,
          end: 23
        }],
        months: [{
          start: 9,
          end: 3
        }]
      }
    },
    {
      name: 'Olive Flounder',
      price: 800,
      location: location.SEA,
      availability: {
        times: [{
          start: 0,
          end: 23
        }],
        months: [{
          start: 0,
          end: 11
        }]
      }
    },
    {
      name: 'Squid',
      price: 500,
      location: location.SEA,
      availability: {
        times: [{
          start: 0,
          end: 23
        }],
        months: [{
          start: 11,
          end: 7
        }]
      }
    },
    {
      name: 'Moray Eel',
      price: 2000,
      location: location.SEA,
      availability: {
        times: [{
          start: 0,
          end: 23
        }],
        months: [{
          start: 7,
          end: 9
        }]
      }
    },
    {
      name: 'Ribbon Eel',
      price: 600,
      location: location.SEA,
      availability: {
        times: [{
          start: 0,
          end: 23
        }],
        months: [{
          start: 5,
          end: 9
        }]
      }
    },
    {
      name: 'Tuna',
      price: 7000,
      location: location.PIER,
      availability: {
        times: [{
          start: 0,
          end: 23
        }],
        months: [{
          start: 10,
          end: 3
        }]
      }
    },
    {
      name: 'Blue Marlin',
      price: 10000,
      location: location.PIER,
      availability: {
        times: [{
          start: 0,
          end: 23
        }],
        months: [
          {
            start: 10,
            end: 3
          },
          {
            start: 6,
            end: 8
          }
        ]
      }
    },
    {
      name: 'Giant Trevally',
      price: 4500,
      location: location.PIER,
      availability: {
        times: [{
          start: 0,
          end: 23
        }],
        months: [{
          start: 4,
          end: 8
        }]
      }
    },
    {
      name: 'Mahi-mahi',
      price: 6000,
      location: location.PIER,
      availability: {
        times: [{
          start: 0,
          end: 23
        }],
        months: [{
          start: 4,
          end: 9
        }]
      }
    },
    {
      name: 'Ocean Sunfish',
      price: 4000,
      location: location.SEA,
      availability: {
        times: [{
          start: 4,
          end: 21
        }],
        months: [{
          start: 6,
          end: 8
        }]
      }
    },
    {
      name: 'Ray',
      price: 3000,
      location: location.SEA,
      availability: {
        times: [{
          start: 4,
          end: 21
        }],
        months: [{
          start: 7,
          end: 10
        }]
      }
    },
    {
      name: 'Saw Shark',
      price: 12000,
      location: location.SEA,
      availability: {
        times: [{
          start: 16,
          end: 9
        }],
        months: [{
          start: 5,
          end: 8
        }]
      }
    },
    {
      name: 'Hammerhead Shark',
      price: 8000,
      location: location.SEA,
      availability: {
        times: [{
          start: 16,
          end: 9
        }],
        months: [{
          start: 5,
          end: 8
        }]
      }
    },
    {
      name: 'Great White Shark',
      price: 15000,
      location: location.SEA,
      availability: {
        times: [{
          start: 16,
          end: 9
        }],
        months: [{
          start: 5,
          end: 8
        }]
      }
    },
    {
      name: 'Whale Shark',
      price: 13000,
      location: location.SEA,
      availability: {
        times: [{
          start: 0,
          end: 23
        }],
        months: [{
          start: 5,
          end: 8
        }]
      }
    },
    {
      name: 'Suckerfish',
      price: 1500,
      location: location.SEA,
      availability: {
        times: [{
          start: 0,
          end: 23
        }],
        months: [{
          start: 5,
          end: 8
        }]
      }
    },
    {
      name: 'Football Fish',
      price: 2500,
      location: location.SEA,
      availability: {
        times: [{
          start: 16,
          end: 9
        }],
        months: [{
          start: 10,
          end: 2
        }]
      }
    },
    {
      name: 'Oarfish',
      price: 9000,
      location: location.SEA,
      availability: {
        times: [{
          start: 0,
          end: 23
        }],
        months: [{
          start: 11,
          end: 4
        }]
      }
    },
    {
      name: 'Barreleye',
      price: 15000,
      location: location.SEA,
      availability: {
        times: [{
          start: 21,
          end: 4
        }],
        months: [{
          start: 0,
          end: 11
        }]
      }
    },
    {
      name: 'Coelacanth',
      price: 15000,
      location: location.SEA_RAIN,
      availability: {
        times: [{
          start: 0,
          end: 23
        }],
        months: [{
          start: 0,
          end: 11
        }]
      }
    },
  ],
  bugs: [

  ],
}
