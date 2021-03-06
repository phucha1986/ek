export const departureAirports = [{City: 'Saigon', Country: 'Vietnam', Airport: 'Tan San Nhat Airport', AirportCode: 'SGN', AirlineLogo: 'https://c.ekstatic.net/uiassets/tailfin-emirates.png', IsCurrentLocation: true, IsSelected: true}, 
    {City: 'Dubai', Country: 'UAE', Airport: 'Dubai Airport', AirportCode: 'DXB', AirlineLogo: 'https://c.ekstatic.net/uiassets/tailfin-emirates.png'},
    {City: 'Bologna', Country: 'Italy', Airport: 'Bologna Airport', AirportCode: 'BLN', AirlineLogo: 'https://c.ekstatic.net/uiassets/tailfin-emirates.png'}];
export const currentLocation = departureAirports.find(item => item.IsCurrentLocation);

export const arrivalAirports = [{City: 'Saigon', Country: 'Vietnam', Airport: 'Tan San Nhat Airport', AirportCode: 'SGN', AirlineLogo: 'https://c.ekstatic.net/uiassets/tailfin-emirates.png'}, 
    {City: 'Dubai', Country: 'UAE', Airport: 'Dubai Airport', AirportCode: 'DXB',  AirlineLogo: 'https://c.ekstatic.net/uiassets/tailfin-emirates.png', IsSelected: true},
    {City: 'Amman', Country: 'Jordan', Airport: 'Queen Ali International Airport', AirportCode: 'AMM', AirlineLogo: 'https://c.ekstatic.net/uiassets/tailfin-emirates.png'},
    {City: 'Accra', Country: 'Ghana', Airport: 'Kotoka International Airport', AirportCode: 'ACC', AirlineLogo: 'https://c.ekstatic.net/uiassets/tailfin-emirates.png'},
    {City: 'Bahrain', Country: 'Bahrain', Airport: 'Bahrain International Airport', AirportCode: 'BAH', AirlineLogo: 'https://c.ekstatic.net/uiassets/tailfin-emirates.png'},
    {City: 'Baghda', Country: 'Irag', Airport: 'Baghda International Airport', AirportCode: 'BGW', AirlineLogo: 'https://c.ekstatic.net/uiassets/tailfin-emirates.png'},
    {City: 'Brisbane', Country: 'Austraulia', Airport: 'Brisbane Airport', AirportCode: 'BNE', AirlineLogo: 'https://c.ekstatic.net/uiassets/tailfin-emirates.png'},
];   

const passengers = [{Type: "Adult", Selected: true}, {Type: "Children"}, {Type: "Infant"}];
const selectedPassengerDescription = `1 ${passengers.find(item => item.Selected).Type}`;

export const flightClasses = [{Type: "Economy", Selected: true}, {Type: "Business"}, {Type: "First"}];