// Sample Stash Items
export const sampleStashItems = [
  {
    id: 'stash-1',
    name: 'Blue Dream',
    category: 'Flower',
    type: 'Sativa',
    amount: '3.5g',
    thc: 22.5,
    cbd: 0.5,
    lineage: 'Blueberry x Haze',
    notes: 'Perfect for creative sessions and relaxation. Great for movie nights and social activities. The flavor is sweet with berry undertones.',
    dateAdded: new Date('2025-01-15'),
    userId: 'user-1'
  },
  {
    id: 'stash-2',
    name: 'OG Kush',
    category: 'Flower',
    type: 'Indica',
    amount: '7g',
    thc: 25.0,
    cbd: 0.1,
    lineage: 'Chemdawg x Lemon Thai x Pakistani Kush',
    notes: 'Heavy hitting indica perfect for evening use. Helps with sleep and pain relief. Strong earthy and pine flavors.',
    dateAdded: new Date('2025-01-12'),
    userId: 'user-1'
  },
  {
    id: 'stash-3',
    name: 'Green Crack',
    category: 'Flower',
    type: 'Sativa',
    amount: '1g',
    thc: 20.8,
    cbd: 0.2,
    lineage: 'Skunk #1 x Sweet Leaf Indica',
    notes: 'Energizing sativa great for daytime use. Provides focus and creativity boost. Citrusy and fruity taste profile.',
    dateAdded: new Date('2025-01-10'),
    userId: 'user-1'
  },
  {
    id: 'stash-4',
    name: 'Gorilla Glue #4',
    category: 'Concentrate',
    type: 'Hybrid',
    amount: '1g',
    thc: 28.5,
    cbd: 0.3,
    lineage: 'Chem Sister x Sour Dubb x Chocolate Diesel',
    notes: 'Potent hybrid concentrate with strong couch-lock effects. Excellent for pain management and stress relief.',
    dateAdded: new Date('2025-01-08'),
    userId: 'user-1'
  },
  {
    id: 'stash-5',
    name: 'Purple Haze',
    category: 'Vape',
    type: 'Sativa',
    amount: '0.5g',
    thc: 19.2,
    cbd: 0.8,
    lineage: 'Purple Thai x Haze',
    notes: 'Classic sativa in vape form. Uplifting and euphoric effects with sweet berry flavors. Great for social situations.',
    dateAdded: new Date('2025-01-05'),
    userId: 'user-1'
  },
  {
    id: 'stash-6',
    name: 'White Widow',
    category: 'Flower',
    type: 'Hybrid',
    amount: '3.5g',
    thc: 23.1,
    cbd: 0.4,
    lineage: 'Brazilian Sativa x South Indian Indica',
    notes: 'Balanced hybrid with resin-covered buds. Provides both mental clarity and physical relaxation. Woody and spicy taste.',
    dateAdded: new Date('2025-01-03'),
    userId: 'user-1'
  },
  {
    id: 'stash-7',
    name: 'Northern Lights',
    category: 'Edibles',
    type: 'Indica',
    amount: '10mg x 10',
    thc: 15.0,
    cbd: 2.5,
    lineage: 'Afghani x Thai',
    notes: 'Classic indica in gummy form. Perfect for nighttime use and sleep aid. Sweet fruity flavor with long-lasting effects.',
    dateAdded: new Date('2025-01-01'),
    userId: 'user-1'
  },
  {
    id: 'stash-8',
    name: 'Sour Diesel',
    category: 'Flower',
    type: 'Sativa',
    amount: '7g',
    thc: 21.7,
    cbd: 0.3,
    lineage: 'Chemdawg 91 x Super Skunk',
    notes: 'Energizing sativa with diesel-like aroma. Great for daytime productivity and mood enhancement. Pungent and skunky.',
    dateAdded: new Date('2024-12-28'),
    userId: 'user-1'
  },
  {
    id: 'stash-9',
    name: 'Granddaddy Purple',
    category: 'Flower',
    type: 'Indica',
    amount: '2g',
    thc: 17.5,
    cbd: 0.7,
    lineage: 'Purple Urkle x Big Bud',
    notes: 'Beautiful purple buds with grape and berry flavors. Relaxing body high perfect for evening wind-down.',
    dateAdded: new Date('2024-12-25'),
    userId: 'user-1'
  },
  {
    id: 'stash-10',
    name: 'Jack Herer',
    category: 'Flower',
    type: 'Sativa',
    amount: '5g',
    thc: 24.2,
    cbd: 0.6,
    lineage: 'Haze x Northern Lights #5 x Shiva Skunk',
    notes: 'Award-winning sativa with spicy pine flavor. Provides clear-headed creativity and focus. Named after the cannabis activist.',
    dateAdded: new Date('2024-12-22'),
    userId: 'user-1'
  },
  {
    id: 'stash-11',
    name: 'Zkittlez',
    category: 'Flower',
    type: 'Hybrid',
    amount: '3.5g',
    thc: 19.8,
    cbd: 0.4,
    lineage: 'Grape Ape x Grapefruit',
    notes: 'Tropical fruit flavors with a smooth smoke. Balanced effects that are both relaxing and uplifting.',
    dateAdded: new Date('2024-12-20'),
    userId: 'user-1'
  },
  {
    id: 'stash-12',
    name: 'Girl Scout Cookies',
    category: 'Concentrate',
    type: 'Hybrid',
    amount: '0.5g',
    thc: 26.8,
    cbd: 0.2,
    lineage: 'OG Kush x Durban Poison',
    notes: 'Sweet and earthy flavors with euphoric effects. Great for stress relief and creativity. Popular west coast strain.',
    dateAdded: new Date('2024-12-18'),
    userId: 'user-1'
  }
];

// Sample Purchases
export const samplePurchases = [
  {
    id: 'purchase-1',
    dispensary: 'Trulieve',
    date: new Date('2025-01-15'),
    total: 89.50,
    notes: 'First visit to this location. Great customer service and knowledgeable staff.',
    createdAt: new Date('2025-01-15'),
    userId: 'user-1',
    items: [
      {
        id: 'item-1',
        name: 'Blue Dream',
        category: 'Flower',
        type: 'Sativa',
        amount: '3.5g',
        price: 45.00,
        thc: 22.5,
        cbd: 0.5,
        lineage: 'Blueberry x Haze',
        notes: 'Perfect for creative sessions',
        purchaseId: 'purchase-1'
      },
      {
        id: 'item-2',
        name: 'CBD Tincture',
        category: 'Tincture',
        type: 'CBD',
        amount: '30ml',
        price: 44.50,
        thc: 0.3,
        cbd: 25.0,
        lineage: '',
        notes: 'For anxiety and sleep',
        purchaseId: 'purchase-1'
      }
    ]
  },
  {
    id: 'purchase-2',
    dispensary: 'Curaleaf',
    date: new Date('2025-01-12'),
    total: 135.75,
    notes: 'Stocked up for the weekend. Got a good deal on the eighth combo.',
    createdAt: new Date('2025-01-12'),
    userId: 'user-1',
    items: [
      {
        id: 'item-3',
        name: 'OG Kush',
        category: 'Flower',
        type: 'Indica',
        amount: '7g',
        price: 85.00,
        thc: 25.0,
        cbd: 0.1,
        lineage: 'Chemdawg x Lemon Thai x Pakistani Kush',
        notes: 'Heavy hitting indica',
        purchaseId: 'purchase-2'
      },
      {
        id: 'item-4',
        name: 'Vape Cartridge',
        category: 'Vape',
        type: 'Hybrid',
        amount: '1g',
        price: 50.75,
        thc: 78.5,
        cbd: 0.8,
        lineage: 'Gelato x Sunset Sherbet',
        notes: 'Smooth vapor, great taste',
        purchaseId: 'purchase-2'
      }
    ]
  },
  {
    id: 'purchase-3',
    dispensary: 'Surterra',
    date: new Date('2025-01-10'),
    total: 62.25,
    notes: 'Quick stop for some edibles and a small flower purchase.',
    createdAt: new Date('2025-01-10'),
    userId: 'user-1',
    items: [
      {
        id: 'item-5',
        name: 'Green Crack',
        category: 'Flower',
        type: 'Sativa',
        amount: '1g',
        price: 22.25,
        thc: 20.8,
        cbd: 0.2,
        lineage: 'Skunk #1 x Sweet Leaf Indica',
        notes: 'Energizing sativa',
        purchaseId: 'purchase-3'
      },
      {
        id: 'item-6',
        name: 'Gummies',
        category: 'Edibles',
        type: 'Hybrid',
        amount: '10mg x 10',
        price: 40.00,
        thc: 10.0,
        cbd: 0.5,
        lineage: '',
        notes: 'Perfect dose for evening',
        purchaseId: 'purchase-3'
      }
    ]
  },
  {
    id: 'purchase-4',
    dispensary: 'MedMen',
    date: new Date('2025-01-08'),
    total: 78.00,
    notes: 'Tried their new concentrate selection. Impressive quality.',
    createdAt: new Date('2025-01-08'),
    userId: 'user-1',
    items: [
      {
        id: 'item-7',
        name: 'Gorilla Glue #4',
        category: 'Concentrate',
        type: 'Hybrid',
        amount: '1g',
        price: 78.00,
        thc: 28.5,
        cbd: 0.3,
        lineage: 'Chem Sister x Sour Dubb x Chocolate Diesel',
        notes: 'Potent hybrid concentrate',
        purchaseId: 'purchase-4'
      }
    ]
  },
  {
    id: 'purchase-5',
    dispensary: 'Harvest HOC',
    date: new Date('2025-01-05'),
    total: 95.50,
    notes: 'Great selection of vapes and flower. Staff recommended Purple Haze.',
    createdAt: new Date('2025-01-05'),
    userId: 'user-1',
    items: [
      {
        id: 'item-8',
        name: 'Purple Haze',
        category: 'Vape',
        type: 'Sativa',
        amount: '0.5g',
        price: 45.50,
        thc: 19.2,
        cbd: 0.8,
        lineage: 'Purple Thai x Haze',
        notes: 'Classic sativa in vape form',
        purchaseId: 'purchase-5'
      },
      {
        id: 'item-9',
        name: 'White Widow',
        category: 'Flower',
        type: 'Hybrid',
        amount: '3.5g',
        price: 50.00,
        thc: 23.1,
        cbd: 0.4,
        lineage: 'Brazilian Sativa x South Indian Indica',
        notes: 'Balanced hybrid',
        purchaseId: 'purchase-5'
      }
    ]
  },
  {
    id: 'purchase-6',
    dispensary: 'Liberty Health Sciences',
    date: new Date('2025-01-03'),
    total: 110.25,
    notes: 'Monthly restock. Got some edibles and flower for the new year.',
    createdAt: new Date('2025-01-03'),
    userId: 'user-1',
    items: [
      {
        id: 'item-10',
        name: 'Northern Lights',
        category: 'Edibles',
        type: 'Indica',
        amount: '10mg x 10',
        price: 35.25,
        thc: 15.0,
        cbd: 2.5,
        lineage: 'Afghani x Thai',
        notes: 'Perfect for nighttime',
        purchaseId: 'purchase-6'
      },
      {
        id: 'item-11',
        name: 'Sour Diesel',
        category: 'Flower',
        type: 'Sativa',
        amount: '7g',
        price: 75.00,
        thc: 21.7,
        cbd: 0.3,
        lineage: 'Chemdawg 91 x Super Skunk',
        notes: 'Energizing sativa',
        purchaseId: 'purchase-6'
      }
    ]
  },
  {
    id: 'purchase-7',
    dispensary: 'Fluent',
    date: new Date('2024-12-28'),
    total: 67.50,
    notes: 'End of year purchase. Tried their new strain recommendations.',
    createdAt: new Date('2024-12-28'),
    userId: 'user-1',
    items: [
      {
        id: 'item-12',
        name: 'Granddaddy Purple',
        category: 'Flower',
        type: 'Indica',
        amount: '2g',
        price: 32.50,
        thc: 17.5,
        cbd: 0.7,
        lineage: 'Purple Urkle x Big Bud',
        notes: 'Beautiful purple buds',
        purchaseId: 'purchase-7'
      },
      {
        id: 'item-13',
        name: 'Jack Herer',
        category: 'Flower',
        type: 'Sativa',
        amount: '2g',
        price: 35.00,
        thc: 24.2,
        cbd: 0.6,
        lineage: 'Haze x Northern Lights #5 x Shiva Skunk',
        notes: 'Award-winning sativa',
        purchaseId: 'purchase-7'
      }
    ]
  },
  {
    id: 'purchase-8',
    dispensary: 'Trulieve',
    date: new Date('2024-12-25'),
    total: 88.75,
    notes: 'Christmas treat for myself. Got some premium strains.',
    createdAt: new Date('2024-12-25'),
    userId: 'user-1',
    items: [
      {
        id: 'item-14',
        name: 'Zkittlez',
        category: 'Flower',
        type: 'Hybrid',
        amount: '3.5g',
        price: 48.75,
        thc: 19.8,
        cbd: 0.4,
        lineage: 'Grape Ape x Grapefruit',
        notes: 'Tropical fruit flavors',
        purchaseId: 'purchase-8'
      },
      {
        id: 'item-15',
        name: 'Topical Cream',
        category: 'Topical',
        type: 'CBD',
        amount: '50ml',
        price: 40.00,
        thc: 0.0,
        cbd: 15.0,
        lineage: '',
        notes: 'For muscle soreness',
        purchaseId: 'purchase-8'
      }
    ]
  },
  {
    id: 'purchase-9',
    dispensary: 'Curaleaf',
    date: new Date('2024-12-22'),
    total: 125.00,
    notes: 'Pre-holiday stock up. Got some concentrates and flower.',
    createdAt: new Date('2024-12-22'),
    userId: 'user-1',
    items: [
      {
        id: 'item-16',
        name: 'Girl Scout Cookies',
        category: 'Concentrate',
        type: 'Hybrid',
        amount: '0.5g',
        price: 65.00,
        thc: 26.8,
        cbd: 0.2,
        lineage: 'OG Kush x Durban Poison',
        notes: 'Sweet and earthy flavors',
        purchaseId: 'purchase-9'
      },
      {
        id: 'item-17',
        name: 'Pineapple Express',
        category: 'Flower',
        type: 'Sativa',
        amount: '3.5g',
        price: 60.00,
        thc: 22.0,
        cbd: 0.5,
        lineage: 'Trainwreck x Hawaiian',
        notes: 'Tropical pineapple taste',
        purchaseId: 'purchase-9'
      }
    ]
  },
  {
    id: 'purchase-10',
    dispensary: 'Surterra',
    date: new Date('2024-12-20'),
    total: 72.25,
    notes: 'Quick pickup for weekend plans. Got some sativa and indica.',
    createdAt: new Date('2024-12-20'),
    userId: 'user-1',
    items: [
      {
        id: 'item-18',
        name: 'Durban Poison',
        category: 'Flower',
        type: 'Sativa',
        amount: '2g',
        price: 36.25,
        thc: 24.5,
        cbd: 0.3,
        lineage: 'South African Sativa',
        notes: 'Pure sativa landrace',
        purchaseId: 'purchase-10'
      },
      {
        id: 'item-19',
        name: 'Bubba Kush',
        category: 'Flower',
        type: 'Indica',
        amount: '2g',
        price: 36.00,
        thc: 20.8,
        cbd: 0.4,
        lineage: 'Bubble Gum x Kush',
        notes: 'Relaxing indica',
        purchaseId: 'purchase-10'
      }
    ]
  },
  {
    id: 'purchase-11',
    dispensary: 'MedMen',
    date: new Date('2024-12-18'),
    total: 95.00,
    notes: 'Trying their premium line. Quality is definitely worth the price.',
    createdAt: new Date('2024-12-18'),
    userId: 'user-1',
    items: [
      {
        id: 'item-20',
        name: 'Wedding Cake',
        category: 'Flower',
        type: 'Hybrid',
        amount: '3.5g',
        price: 55.00,
        thc: 25.5,
        cbd: 0.6,
        lineage: 'Cherry Pie x Girl Scout Cookies',
        notes: 'Sweet vanilla flavor',
        purchaseId: 'purchase-11'
      },
      {
        id: 'item-21',
        name: 'Live Resin Cart',
        category: 'Vape',
        type: 'Hybrid',
        amount: '1g',
        price: 40.00,
        thc: 82.3,
        cbd: 1.2,
        lineage: 'Gelato x Dosidos',
        notes: 'Premium live resin',
        purchaseId: 'purchase-11'
      }
    ]
  },
  {
    id: 'purchase-12',
    dispensary: 'Harvest HOC',
    date: new Date('2024-12-15'),
    total: 108.50,
    notes: 'Monthly restock with some new strain varieties to try.',
    createdAt: new Date('2024-12-15'),
    userId: 'user-1',
    items: [
      {
        id: 'item-22',
        name: 'Sunset Sherbet',
        category: 'Flower',
        type: 'Indica',
        amount: '3.5g',
        price: 48.50,
        thc: 21.5,
        cbd: 0.8,
        lineage: 'Girl Scout Cookies x Pink Panties',
        notes: 'Sweet fruity flavor',
        purchaseId: 'purchase-12'
      },
      {
        id: 'item-23',
        name: 'Chocolate Edibles',
        category: 'Edibles',
        type: 'Hybrid',
        amount: '5mg x 20',
        price: 35.00,
        thc: 5.0,
        cbd: 0.2,
        lineage: '',
        notes: 'Perfect microdose',
        purchaseId: 'purchase-12'
      },
      {
        id: 'item-24',
        name: 'Gelato',
        category: 'Flower',
        type: 'Hybrid',
        amount: '1g',
        price: 25.00,
        thc: 23.8,
        cbd: 0.4,
        lineage: 'Sunset Sherbet x Thin Mint GSC',
        notes: 'Creamy sweet flavor',
        purchaseId: 'purchase-12'
      }
    ]
  }
];

// Sample Posts
export const samplePosts = [
  {
    id: 'post-1',
    author: 'Chris Johnson',
    activity: 'Creative Time',
    content: 'Just tried Blue Dream for the first time and wow! Perfect for a creative afternoon. The sweet berry flavor is amazing and the effects are exactly what I was looking for.',
    createdAt: new Date('2025-01-15'),
    userId: 'user-1',
    stashItems: [
      {
        postId: 'post-1',
        stashItemId: 'stash-1',
        stashItem: {
          id: 'stash-1',
          name: 'Blue Dream',
          category: 'Flower',
          type: 'Sativa',
          thc: 22.5,
          cbd: 0.5
        }
      }
    ],
    comments: []
  },
  {
    id: 'post-2',
    author: 'Chris Johnson',
    activity: 'Movie Night',
    content: 'Having a great movie night with some OG Kush. This indica is perfect for relaxing and getting into the zone. Watching some classic sci-fi films.',
    createdAt: new Date('2025-01-12'),
    userId: 'user-1',
    stashItems: [
      {
        postId: 'post-2',
        stashItemId: 'stash-2',
        stashItem: {
          id: 'stash-2',
          name: 'OG Kush',
          category: 'Flower',
          type: 'Indica',
          thc: 25.0,
          cbd: 0.1
        }
      }
    ],
    comments: []
  },
  {
    id: 'post-3',
    author: 'Chris Johnson',
    activity: 'Workout',
    content: 'Green Crack before my morning workout was a game changer! The energy boost is incredible and I feel so focused. Definitely adding this to my pre-workout routine.',
    createdAt: new Date('2025-01-10'),
    userId: 'user-1',
    stashItems: [
      {
        postId: 'post-3',
        stashItemId: 'stash-3',
        stashItem: {
          id: 'stash-3',
          name: 'Green Crack',
          category: 'Flower',
          type: 'Sativa',
          thc: 20.8,
          cbd: 0.2
        }
      }
    ],
    comments: []
  },
  {
    id: 'post-4',
    author: 'Chris Johnson',
    activity: 'Gaming',
    content: 'Gorilla Glue #4 concentrate + gaming session = perfect evening. The focus is incredible and the couch-lock isn\'t too overwhelming. Great for strategy games.',
    createdAt: new Date('2025-01-08'),
    userId: 'user-1',
    stashItems: [
      {
        postId: 'post-4',
        stashItemId: 'stash-4',
        stashItem: {
          id: 'stash-4',
          name: 'Gorilla Glue #4',
          category: 'Concentrate',
          type: 'Hybrid',
          thc: 28.5,
          cbd: 0.3
        }
      }
    ],
    comments: []
  },
  {
    id: 'post-5',
    author: 'Chris Johnson',
    activity: 'Hanging Out',
    content: 'Purple Haze vape at the beach with friends. The social effects are perfect and the berry flavor is so smooth. Nothing beats a sunset session with good company.',
    createdAt: new Date('2025-01-05'),
    userId: 'user-1',
    stashItems: [
      {
        postId: 'post-5',
        stashItemId: 'stash-5',
        stashItem: {
          id: 'stash-5',
          name: 'Purple Haze',
          category: 'Vape',
          type: 'Sativa',
          thc: 19.2,
          cbd: 0.8
        }
      }
    ],
    comments: []
  },
  {
    id: 'post-6',
    author: 'Chris Johnson',
    activity: 'Chill Time',
    content: 'White Widow for a chill Sunday afternoon. The balanced effects are perfect for relaxation without being too sedating. Great for reading or light activities.',
    createdAt: new Date('2025-01-03'),
    userId: 'user-1',
    stashItems: [
      {
        postId: 'post-6',
        stashItemId: 'stash-6',
        stashItem: {
          id: 'stash-6',
          name: 'White Widow',
          category: 'Flower',
          type: 'Hybrid',
          thc: 23.1,
          cbd: 0.4
        }
      }
    ],
    comments: []
  },
  {
    id: 'post-7',
    author: 'Chris Johnson',
    activity: 'Sleep Time',
    content: 'Northern Lights gummies before bed = best sleep ever. The indica effects are perfect for winding down and the fruity flavor is delicious. Sweet dreams!',
    createdAt: new Date('2025-01-01'),
    userId: 'user-1',
    stashItems: [
      {
        postId: 'post-7',
        stashItemId: 'stash-7',
        stashItem: {
          id: 'stash-7',
          name: 'Northern Lights',
          category: 'Edibles',
          type: 'Indica',
          thc: 15.0,
          cbd: 2.5
        }
      }
    ],
    comments: []
  },
  {
    id: 'post-8',
    author: 'Chris Johnson',
    activity: 'Nature Walk',
    content: 'Sour Diesel and a morning hike through the trails. The energizing effects are perfect for outdoor activities. The diesel aroma pairs well with fresh air!',
    createdAt: new Date('2024-12-28'),
    userId: 'user-1',
    stashItems: [
      {
        postId: 'post-8',
        stashItemId: 'stash-8',
        stashItem: {
          id: 'stash-8',
          name: 'Sour Diesel',
          category: 'Flower',
          type: 'Sativa',
          thc: 21.7,
          cbd: 0.3
        }
      }
    ],
    comments: []
  },
  {
    id: 'post-9',
    author: 'Chris Johnson',
    activity: 'Listening to Music',
    content: 'Granddaddy Purple + vinyl records = musical bliss. The relaxing effects really enhance the listening experience. Those grape flavors are incredible too.',
    createdAt: new Date('2024-12-25'),
    userId: 'user-1',
    stashItems: [
      {
        postId: 'post-9',
        stashItemId: 'stash-9',
        stashItem: {
          id: 'stash-9',
          name: 'Granddaddy Purple',
          category: 'Flower',
          type: 'Indica',
          thc: 17.5,
          cbd: 0.7
        }
      }
    ],
    comments: []
  },
  {
    id: 'post-10',
    author: 'Chris Johnson',
    activity: 'Creative Time',
    content: 'Jack Herer for some art time. The clear-headed creativity boost is amazing for painting. This award-winning strain definitely lives up to its reputation.',
    createdAt: new Date('2024-12-22'),
    userId: 'user-1',
    stashItems: [
      {
        postId: 'post-10',
        stashItemId: 'stash-10',
        stashItem: {
          id: 'stash-10',
          name: 'Jack Herer',
          category: 'Flower',
          type: 'Sativa',
          thc: 24.2,
          cbd: 0.6
        }
      }
    ],
    comments: []
  },
  {
    id: 'post-11',
    author: 'Chris Johnson',
    activity: 'Munchies',
    content: 'Zkittlez and some homemade cookies. The tropical fruit flavors of this strain pair perfectly with sweet treats. Balanced effects make it great for cooking too.',
    createdAt: new Date('2024-12-20'),
    userId: 'user-1',
    stashItems: [
      {
        postId: 'post-11',
        stashItemId: 'stash-11',
        stashItem: {
          id: 'stash-11',
          name: 'Zkittlez',
          category: 'Flower',
          type: 'Hybrid',
          thc: 19.8,
          cbd: 0.4
        }
      }
    ],
    comments: []
  },
  {
    id: 'post-12',
    author: 'Chris Johnson',
    activity: 'Chill Time',
    content: 'Girl Scout Cookies concentrate for a relaxing evening. The sweet and earthy flavors are incredible and the euphoric effects are perfect for unwinding after work.',
    createdAt: new Date('2024-12-18'),
    userId: 'user-1',
    stashItems: [
      {
        postId: 'post-12',
        stashItemId: 'stash-12',
        stashItem: {
          id: 'stash-12',
          name: 'Girl Scout Cookies',
          category: 'Concentrate',
          type: 'Hybrid',
          thc: 26.8,
          cbd: 0.2
        }
      }
    ],
    comments: []
  }
];

// Activity options for forms
export const activityOptions = [
  { value: 'creative', label: 'Creative Time', icon: '🎨' },
  { value: 'movie', label: 'Movie Night', icon: '🎬' },
  { value: 'workout', label: 'Workout', icon: '💪' },
  { value: 'gaming', label: 'Gaming', icon: '🎮' },
  { value: 'social', label: 'Hanging Out', icon: '👥' },
  { value: 'chill', label: 'Chill Time', icon: '😌' },
  { value: 'sleep', label: 'Sleep Time', icon: '😴' },
  { value: 'nature', label: 'Nature Walk', icon: '🌲' },
  { value: 'music', label: 'Listening to Music', icon: '🎵' },
  { value: 'munchies', label: 'Munchies', icon: '🍿' },
  { value: 'reading', label: 'Reading', icon: '📚' },
  { value: 'meditation', label: 'Meditation', icon: '🧘' }
];

// Category options for forms
export const categoryOptions = [
  'Flower',
  'Concentrate',
  'Edibles',
  'Vape',
  'Tincture',
  'Topical',
  'Other'
];

// Type options for forms
export const typeOptions = [
  'Indica',
  'Sativa',
  'Hybrid',
  'CBD',
  'THC',
  'Other'
];

// Florida dispensary options
export const dispensaryOptions = [
  'Trulieve',
  'Curaleaf',
  'Surterra',
  'MedMen',
  'Harvest HOC',
  'Liberty Health Sciences',
  'Fluent',
  'Rise',
  'Columbia Care',
  'Sanctuary',
  'Vidacann',
  'Müv'
];