export const business = {
  name: 'AR Pre-Owned Cars',
  proprietor: 'Siddiq',
  address: 'Tiruchendur Road, Kamaraj College, Near Manickam Mahal, Thoothukudi',
  phones: ['9600864242', '9600264242'],
  services: ['Buy Pre-Owned Cars', 'Sell Your Car', 'Exchange Your Car'],
}
export const whatsappLink = (phone, message = 'Hello AR Pre-Owned Cars, I would like to know more.') =>
  `https://wa.me/91${phone}?text=${encodeURIComponent(message)}`
