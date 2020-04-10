'use strict';

// Dump the Division Keys to array for mapping

const data = {
  kind: 'civicinfo#representativeInfoResponse',
  normalizedInput: {
    line1: '36 Warren Street Northeast',
    city: 'Atlanta',
    state: 'GA',
    zip: '30317',
  },
  divisions: {
    'ocd-division/country:us': {
      name: 'United States',
      officeIndices: [0, 1],
    },
    'ocd-division/country:us/state:ga': {
      name: 'Georgia',
      officeIndices: [2, 4, 5],
    },
    'ocd-division/country:us/state:ga/cd:5': {
      name: "Georgia's 5th congressional district",
      officeIndices: [3],
    },
    'ocd-division/country:us/state:ga/sldl:89': {
      name: 'Georgia State House district 89',
      officeIndices: [7],
    },
    'ocd-division/country:us/state:ga/sldu:42': {
      name: 'Georgia State Senate district 42',
      officeIndices: [6],
    },
  },
  offices: [
    {
      name: 'President of the United States',
      divisionId: 'ocd-division/country:us',
      levels: ['country'],
      roles: ['headOfState', 'headOfGovernment'],
      officialIndices: [0],
    },
    {
      name: 'Vice President of the United States',
      divisionId: 'ocd-division/country:us',
      levels: ['country'],
      roles: ['deputyHeadOfGovernment'],
      officialIndices: [1],
    },
    {
      name: 'U.S. Senator',
      divisionId: 'ocd-division/country:us/state:ga',
      levels: ['country'],
      roles: ['legislatorUpperBody'],
      officialIndices: [2, 3],
    },
    {
      name: 'U.S. Representative',
      divisionId: 'ocd-division/country:us/state:ga/cd:5',
      levels: ['country'],
      roles: ['legislatorLowerBody'],
      officialIndices: [4],
    },
    {
      name: 'Governor of Georgia',
      divisionId: 'ocd-division/country:us/state:ga',
      levels: ['administrativeArea1'],
      roles: ['headOfGovernment'],
      officialIndices: [5],
    },
    {
      name: 'Lieutenant Governor of Georgia',
      divisionId: 'ocd-division/country:us/state:ga',
      levels: ['administrativeArea1'],
      roles: ['deputyHeadOfGovernment'],
      officialIndices: [6],
    },
    {
      name: 'GA State Senator',
      divisionId: 'ocd-division/country:us/state:ga/sldu:42',
      levels: ['administrativeArea1'],
      roles: ['legislatorUpperBody'],
      officialIndices: [7],
    },
    {
      name: 'GA State Representative',
      divisionId: 'ocd-division/country:us/state:ga/sldl:89',
      levels: ['administrativeArea1'],
      roles: ['legislatorLowerBody'],
      officialIndices: [8],
    },
  ],
  officials: [
    {
      name: 'Donald J. Trump',
      address: [
        {
          line1: '1600 Pennsylvania Avenue Northwest',
          city: 'Washington',
          state: 'DC',
          zip: '20500',
        },
      ],
      party: 'Republican Party',
      phones: ['(202) 456-1111'],
      urls: ['http://www.whitehouse.gov/'],
      photoUrl:
        'https://www.whitehouse.gov/sites/whitehouse.gov/files/images/45/PE%20Color.jpg',
      channels: [
        {
          type: 'Facebook',
          id: 'DonaldTrump',
        },
        {
          type: 'Twitter',
          id: 'potus',
        },
        {
          type: 'YouTube',
          id: 'whitehouse',
        },
      ],
    },
    {
      name: 'Mike Pence',
      address: [
        {
          line1: '1600 Pennsylvania Avenue Northwest',
          city: 'Washington',
          state: 'DC',
          zip: '20500',
        },
      ],
      party: 'Republican Party',
      phones: ['(202) 456-1111'],
      urls: ['http://www.whitehouse.gov/'],
      photoUrl:
        'https://www.whitehouse.gov/sites/whitehouse.gov/files/images/45/VPE%20Color.jpg',
      channels: [
        {
          type: 'Facebook',
          id: 'mikepence',
        },
        {
          type: 'Twitter',
          id: 'VP',
        },
      ],
    },
    {
      name: 'David Perdue',
      address: [
        {
          line1: '455 Russell Senate Office Building',
          city: 'Washington',
          state: 'DC',
          zip: '20510',
        },
      ],
      party: 'Republican Party',
      phones: ['(202) 224-3521'],
      urls: ['http://www.perdue.senate.gov/'],
      photoUrl: 'http://bioguide.congress.gov/bioguide/photo/P/P000612.jpg',
      channels: [
        {
          type: 'Facebook',
          id: 'SenatorDavidPerdue',
        },
        {
          type: 'Twitter',
          id: 'sendavidperdue',
        },
        {
          type: 'YouTube',
          id: 'UCXHsrkPP4TAm0s0qB1C31Lw',
        },
      ],
    },
    {
      name: 'Kelly Loeffler',
      address: [
        {
          line1: '131 Russell Senate Office Building',
          city: 'Washington',
          state: 'DC',
          zip: '20510',
        },
      ],
      party: 'Republican Party',
      phones: ['(202) 224-3643'],
      urls: ['https://www.loeffler.senate.gov/'],
    },
    {
      name: 'John Lewis',
      address: [
        {
          line1: '300 Cannon House Office Building',
          city: 'Washington',
          state: 'DC',
          zip: '20515',
        },
      ],
      party: 'Democratic Party',
      phones: ['(202) 225-3801'],
      urls: ['http://johnlewis.house.gov/'],
      photoUrl: 'http://bioguide.congress.gov/bioguide/photo/L/L000287.jpg',
      channels: [
        {
          type: 'Facebook',
          id: 'RepJohnLewis',
        },
        {
          type: 'Twitter',
          id: 'repjohnlewis',
        },
        {
          type: 'YouTube',
          id: 'repjohnlewis',
        },
      ],
    },
    {
      name: 'Brian Kemp',
      party: 'Republican Party',
      urls: ['https://gov.georgia.gov/'],
      channels: [
        {
          type: 'Facebook',
          id: 'GovKemp',
        },
        {
          type: 'Twitter',
          id: 'GovKemp',
        },
      ],
    },
    {
      name: 'Geoff Duncan',
      address: [
        {
          line1: '240 State Capitol',
          city: 'Atlanta',
          state: 'GA',
          zip: '30334',
        },
      ],
      party: 'Republican Party',
      phones: ['(404) 656-5030'],
      urls: ['https://ltgov.georgia.gov/'],
      channels: [
        {
          type: 'Twitter',
          id: 'GeoffDuncanGA',
        },
      ],
    },
    {
      name: 'Elena Parent',
      address: [
        {
          line1: '206 Washington Street Southwest',
          city: 'Atlanta',
          state: 'GA',
          zip: '30334',
        },
      ],
      party: 'Democratic Party',
      phones: ['(404) 656-5109'],
      urls: [
        'http://www.senate.ga.gov/SENATORS/en-US/member.aspx?Member=768&Session=27',
      ],
      photoUrl:
        'http://www.senate.ga.gov/SiteCollectionImages/ParentElena768.jpg',
      emails: ['elena.parent@senate.ga.gov'],
      channels: [
        {
          type: 'Facebook',
          id: 'elenaparentforstatesenate',
        },
        {
          type: 'Twitter',
          id: 'elenaparent',
        },
      ],
    },
    {
      name: 'Bee Nguyen',
      address: [
        {
          line1: '206 Washington Street Southwest',
          city: 'Atlanta',
          state: 'GA',
          zip: '30334',
        },
      ],
      party: 'Democratic Party',
      phones: ['(404) 656-0314'],
      urls: [
        'http://www.house.ga.gov/Representatives/en-US/member.aspx?Member=4917&Session=27',
      ],
      emails: ['bee.nguyen@house.ga.gov'],
      channels: [
        {
          type: 'Facebook',
          id: 'beeforgeorgia',
        },
      ],
    },
  ],
};

const divKeys = Object.keys(data.divisions);

const coalesceInfo = (
  { name, party, photoUrl, address, channels, urls },
  officeName = ''
) => {
  let twitter;
  if (!!channels) {
    twitter = channels.filter((channel) => {
      if (channel.type === 'Twitter') {
        return channel.id;
      }
    });
  }

  $('.container').html(`
    <h1>${officeName}</h1>
    <p>${name} - ${party}</p>
    <img src=${photoUrl} width="200px" />
    <p>
    <a href="https://www.twitter.com/${twitter[0].id}">Twitter</a>
    <a href="${urls[0]}">Website</a>
    </p>

  `);

  if (!!address) {
    address.map((address) => {
      console.log('Address:');
      for (const property in address) {
        console.log(`\t${property}: ${address[property]}`);
      }
    });
  }

  if (!!channels) {
    console.log('Social Media:');
    channels.map((channel) => {
      console.log('\t', channel.type, channel.id);
    });
  }
};

// Map over the divKeys array to get Division Name
divKeys.map((key) => {
  const offices = data.offices.filter((office) => office.divisionId === key);
  offices.map((office) => {
    const officeName = office.name;
    if (office.officialIndices.length === 1) {
      coalesceInfo(data.officials[office.officialIndices], officeName);
    } else {
      office.officialIndices.map((index) => {
        coalesceInfo(data.officials[index], officeName);
      });
    }
  });
});
