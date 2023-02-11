// Dump the Division Keys to array for mapping
'use strict';
const KEY = '**REMOVED**';

const API_URL = 'https://www.googleapis.com/civicinfo/v2/representatives';

const watchSubmit = () => {
  $('.js-address').submit((event) => {
    event.preventDefault();
    $('.results').empty();
    const address = $(event.currentTarget).find('#address').val();
    callApi(address, parseInfo);
    $('#address').val('');
  });
};

const callApi = (address, callback) => {
  const query = {
    includeOffices: 'true',
    address: address,
    levels: 'country',
    key: KEY,
  };

  $.getJSON(API_URL, query, callback);
};

const coalesceInfo = (
  { name, party, photoUrl, address, channels, urls },
  officeName = ''
) => {
  let twitter, facebook;
  if (!!channels) {
    channels.filter((channel) => {
      if (channel.type === 'Twitter') {
        twitter = channel.id;
      }
      if (channel.type === 'Facebook') {
        facebook = channel.id;
      }
    });
  }

  $('.results').append(
    `
    <div class="card">
    <h4>${officeName}</h4>
    <p>${name} <br /> ${party}</p>
    ` +
      (!!photoUrl
        ? `<img src="${photoUrl}" width="200px" alt="${name}"/>`
        : `<img src="./assets/no_photo.jpg" width="200px" alt="${name}"/>`) +
      '<p>' +
      (!!twitter
        ? `<a href="https://twitter.com/${twitter}" target="_blank" rel="noopener noreferrer">Twitter</a>`
        : '') +
      ' ' +
      (!!facebook
        ? `<a href="https://facebook.com/${facebook}" target="_blank" rel="noopener noreferrer">Facebook</a>`
        : '') +
      ' ' +
      (!!urls[0]
        ? `<a href="${urls[0]}" target="_blank" rel="noopener noreferrer">Website</a>`
        : '') +
      '</p>' +
      (!!address
        ? 'Address: <br/>' +
          (!!address[0].line1 ? `${address[0].line1} <br />` : '') +
          (!!address[0].line2 ? `${address[0].line2} <br />` : '') +
          `${address[0].city}, ${address[0].state} ${address[0].zip}`
        : 'No address available.') +
      '</div>'
  );
};

const parseInfo = (data) => {
  const divKeys = Object.keys(data.divisions);
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
};

const loadApp = () => {
  watchSubmit();
};

var ready = (callback) => {
  if (document.readyState != 'loading') callback();
  else document.addEventListener('DOMContentLoaded', callback);
};

ready(() => {
  loadApp();
});
